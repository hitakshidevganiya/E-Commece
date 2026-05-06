import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik, useField } from 'formik';
import { array, mixed, number, object, string } from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../Componet/TextInput';
import UploadFile from '../../Componet/UploadFile';
import { IMAGE_URL } from '../../../url/url';
import ColorPicker from '../../Componet/ColorPicker';
import { useAddProductMutation, useDeleteProductMutation, useGetAllProductQuery, useUpdateProductMutation } from '../../../Redux/Api/product.api';
import { useGetAllCategoryQuery } from '../../../Redux/Api/category.api';

function Product(props) {

    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = useState({});

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { data: cdata, isLoading: cisloading, error: cerror } = useGetAllCategoryQuery();
    console.log(cdata?.data)

    const { data, isLoading, error } = useGetAllProductQuery();
    console.log(data?.data);

    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();


    const handleSubmit = (values) => {
        console.log("valuesvalues", values);

        let formData = new FormData();

        let finalPrice = 0;
        let oldPrice = values.oldPrice || null;
        let discount = values.discount || null;

        if (oldPrice) {
            finalPrice =
                oldPrice - (oldPrice * discount) / 100;
        } else {
            finalPrice = values.price;
            oldPrice = null;
            discount = null;
        }

        formData.append('category_id', values.category_id);
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('price', Math.round(finalPrice));
        if (oldPrice) formData.append("oldPrice", oldPrice);
        if (discount) formData.append("discount", discount);
        values.variants.forEach((v, i) => {
            formData.append(`variants[${i}][color]`, v.color);
            formData.append(`variants[${i}][stock]`, v.stock);

            v.size.forEach((s, j) => {
                formData.append(`variants[${i}][size][${j}]`, s);
            });

            v.product_img.forEach((img) => {
                formData.append(`variants[${i}][product_img]`, img);
            });
        });
        if (Object.keys(update).length > 0) {
            formData.append('_id', values._id);

            if (typeof values.product_img === 'object') {

                updateProduct(formData);
            } else {
                updateProduct(formData);
            }
        } else {
            addProduct(formData);
        }

    }

    const handleDelete = (_id) => {
        console.log(_id);

        deleteProduct(_id)
    }

    const handleEdit = (data) => {
        console.log(data);

        handleClickOpen()

        setUpdate(data)
    }

    let catSchema = object({
        category_id: string().required('Plaese select parent category'),
        name: string().required('Please enter Course'),
        description: string().required('Please enter Description'),
        price: number().when("oldPrice", {
            is: (oldPrice) => !oldPrice,
            then: () => number().required("Price required"),
            otherwise: () => number().notRequired(),
        }),
        oldPrice: number().nullable(),
        discount: number().when("oldPrice", {
            is: (oldPrice) => !!oldPrice,
            then: () =>
                number()
                    .required("Discount required when oldPrice entered")
                    .min(0)
                    .max(100),
            otherwise: () => number().nullable(),
        }),
        variants: array().of(
            object({
                color: string().required("Color required"),
                size: array().min(1, "Select at least 1 size"),
                stock: number().required("Stock required"),
                product_img: mixed().required("Image required")
            })
        ),
        product_img: mixed()
            .test("product_img", "product images only png and jpng file allowed", function (val) {
                console.log("valval", val);

                if (typeof val === "object") {
                    return true
                }

                if (typeof val?.url === 'string') {
                    return true
                }

                const fileSupport = ['image/jpeg', 'image/png', 'image/jpg']

                return fileSupport.includes(val?.type?.toLowerCase())
            })
            .test("product_img", "Only 2MB file allowed ", function (val) {
                console.log(val.name);

                if (typeof val === "object") {
                    return true
                }

                if (typeof val?.url === 'string') {
                    return true
                }

                return val?.size <= 2 * 1024 * 1024
            })
    })

    const paginationModel = { page: 0, pageSize: 5 };

    const columns = [
        {
            field: 'category_id',
            headerName: 'Parent category',
            width: 150,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {

                // console.log(params);

                const c = cdata?.data?.find(v => v._id === params.row.category_id);

                // console.log(c);

                return c?.name
            }
        },
        { field: 'name', headerName: 'Name', width: 150, align: 'center', headerAlign: 'center' },
        { field: 'description', headerName: 'Description', width: 150, align: 'center', headerAlign: 'center' },
        {
            field: 'price',
            headerName: 'Price',
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                `₹${params.value}`
            )
        },
        {
            field: 'oldPrice',
            headerName: 'Old Price',
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                params.value ? `₹${params.value}` : "-"
            )
        },
        {
            field: 'discount',
            headerName: 'Discount',
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                params.row.oldPrice ? `${params.value}%` : "-"
            )
        },
        {
            field: 'size',
            headerName: 'Size',
            width: 150,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                Array.isArray(params.value) && params.value.length > 0
                    ? params.value.join(", ")
                    : "-"
            )
        },
        {
            field: 'color',
            headerName: 'Color',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                params.value && params.value.length > 0 ? (
                    <div style={{ display: 'flex', gap: '5px', justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                        {params.value.map((c, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: c,
                                    border: '1px solid #ccc'
                                }}
                            />
                        ))}
                    </div>
                ) : "-"
            )
        },
        {
            field: 'product_img',
            headerName: 'Category img',
            width: 250,
            align: 'center',
            headerAlign: 'center',

            renderCell: (params) => (
                <>
                    {/* {console.log(params)} */}

                    {
                        Array.isArray(params.row.product_img) &&
                        params.row.product_img.map((v, i) => (
                            <img
                                key={i}
                                src={`${IMAGE_URL}images/product_img/${v}`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    margin: '0 4px'
                                }}
                            />
                        ))
                    }
                </>
            )
        },
        {
            headerName: 'Action',
            width: 150,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <>

                    <IconButton aria-label="edit">
                        <EditSquareIcon style={{ color: "blue" }} onClick={() => handleEdit(params.row)} />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon style={{ color: "red" }} onClick={() => handleDelete(params.row._id)} />
                    </IconButton>
                </>
            )
        }

    ];

    const catgetData = [{ value: '', label: '--Select Categories--' }];

    cdata?.data?.forEach((v) => {
        catgetData.push({ value: v._id, label: v.name });
    });

    const sizedata = [
        { value: '', label: '--Select Size--' },
        { value: 'X-Small', label: 'X-Small' },
        { value: 'Small', label: 'Small' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Large', label: 'Large' },
        { value: 'X-Large', label: 'X-Large' }
    ]



    return (
        <>
            <h2>Product</h2>

            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Product
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>

                    <DialogContent>
                        <Formik
                            enableReinitialize
                            initialValues={Object.keys(update).length > 0 ? { ...update, _id: update._id || "" } : {
                                category_id: '',
                                name: '',
                                description: '',
                                price: '',
                                oldPrice: '',
                                discount: '',
                                variants: [
                                    {
                                        color: "",
                                        size: [],
                                        stock: "",
                                        product_img: [],
                                    }
                                ],

                            }}
                            validationSchema={catSchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);

                                handleSubmit(values);

                                handleClose();

                                resetForm();

                            }}
                        >

                            {({ values, setFieldValue }) => (
                                <Form id='subscription-form'>

                                    <TextInput
                                        id="category_id"
                                        name="category_id"
                                        // label="Select Categories"
                                        select
                                        slotProps={{
                                            select: {
                                                native: true,
                                            },
                                        }}
                                        data={catgetData}
                                    />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        label="Name"
                                    />

                                    <TextInput
                                        id="description"
                                        name="description"
                                        label="Description"
                                        multiline
                                        rows={4}
                                    />

                                    <TextInput
                                        id="price"
                                        name="price"
                                        label="Price"
                                    />

                                    <TextInput
                                        id="oldPrice"
                                        name="oldPrice"
                                        label="Old Price"
                                    />

                                    <TextInput
                                        id="discount"
                                        name="discount"
                                        label="Discount"
                                    />

                                    {values.variants.map((v, i) => (
                                        <div key={i} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>

                                            <ColorPicker name={`variants[${i}].color`} />

                                            <TextInput
                                                name={`variants[${i}].size`}
                                                select
                                                slotProps={{
                                                    select: {
                                                        native: true,
                                                        multiple: true
                                                    }
                                                }}
                                                data={sizedata}
                                            />

                                            <TextInput
                                                name={`variants[${i}].stock`}
                                                label="Stock"
                                            />

                                            <UploadFile
                                                name={`variants[${i}].product_img`}
                                                type="file"
                                                multiple
                                            />



                                        </div>
                                    ))}

                                    <Button
                                        onClick={() =>
                                            setFieldValue("variants", [
                                                ...values.variants,
                                                { color: "", size: [], stock: "", product_img: [] }
                                            ])
                                        }
                                    >
                                        Add Variant
                                    </Button>

                                </Form>
                            )}
                        </Formik>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" form="subscription-form">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

                <DataGrid
                    rows={data?.data}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                    getRowId={(row) => row._id}
                />


            </React.Fragment>


        </>
    );
}

export default Product;