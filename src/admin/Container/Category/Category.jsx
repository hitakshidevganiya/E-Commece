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
import { useAddCategoryMutation, useDeleteCategoryMutation, useGetAllCategoryQuery, useUpdateCategoryMutation } from '../../../Redux/Api/category.api';
import { IMAGE_URL } from '../../../url/url';
import ColorPicker from '../../Componet/ColorPicker';


function Category(props) {


    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = useState({});

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { data, isLoading, error } = useGetAllCategoryQuery();
    console.log(data?.data);

    const [addCategory] = useAddCategoryMutation();
    const [updateCategory] = useUpdateCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();


    const handleSubmit = (values) => {
        console.log("valuesvalues", values);

        let formData = new FormData();

        const price = values.oldPrice - (values.oldPrice * values.discount) / 100;

        // if (values.parent_category_id) {
        //     formData.append('parent_category_id', values.parent_category_id);
        // }
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('price', Math.round(price));
        formData.append('oldPrice', values.oldPrice);
        formData.append('discount', values.discount);
        formData.append('size', values.size);
        values.color.forEach((c) => {
            formData.append("color[]", c);
        });
        formData.append('rating', values.rating);

        values.category_img.forEach((img) => {
            formData.append('category_img', img);
        });

        if (Object.keys(update).length > 0) {
            formData.append('_id', values._id);

            if (typeof values.category_img === 'object') {
                updateCategory(formData);
            } else {
                updateCategory(formData);
            }
        } else {
            addCategory(formData);
        }

        // if (update?._id) {
        //     formData.append('_id', update._id); // ✅ FIXED
        //     updateCategory({
        //         id: update._id,
        //         data: formData
        //     });
        // } else {
        //     addCategory(formData);
        // }

    }

    const handleDelete = (_id) => {
        console.log(_id);

        deleteCategory(_id)
    }

    const handleEdit = (data) => {
        console.log(data);

        handleClickOpen()

        // setUpdate({
        //     ...data,
        //     _id: data._id, // ensure
        //     color: data.color || [],
        //     category_img: data.category_img || []
        // });
        setUpdate(data)
    }

    let catSchema = object({
        name: string().required('Please enter Course'),
        description: string().required('Please enter Description'),
        oldPrice: number().positive().required(),
        discount: number().positive().required(),
        rating: number().positive().required(),
        size: string().required(),
        color: array().required(),
        category_img: mixed()
            .test("category_img", "category images only png and jpng file allowed", function (val) {
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
            .test("category_img", "Only 2MB file allowed ", function (val) {
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
        // {
        //     field: 'parent_category_id',
        //     headerName: 'Parent category',
        //     width: 150,
        //     renderCell: (params) => {

        //         // console.log(params);

        //         const c = data?.data?.find(v => v._id === params.row.parent_category_id);

        //         // console.log(c);

        //         return c?.name
        //     }
        // },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'oldPrice', headerName: 'Old Price', width: 150 },
        { field: 'discount', headerName: 'Discount', width: 150 },
        { field: 'rating', headerName: 'Rating', width: 150 },
        { field: 'size', headerName: 'Size', width: 150 },
        {
            field: 'color',
            headerName: 'Color',
            width: 200,
            renderCell: (params) => (
                <div style={{ display: 'flex', gap: '5px' }}>
                    {params.value?.map((c, i) => (
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
            )
        },

        {
            field: 'category_img',
            headerName: 'Category img',
            width: 250,

            renderCell: (params) => (
                <>
                    {/* {console.log(params)} */}

                    {
                        Array.isArray(params.row.category_img) &&
                        params.row.category_img.map((v, i) => (
                            <img
                                key={i}
                                src={`${IMAGE_URL}images/category_img/${v}`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    margin: '0 4px'
                                }}
                            />
                        ))
                    }

                    {/* <img
                        src={params.row?.course_img?.url?.includes('blob') ? params.row?.course_img : params.row?.course_img?.url}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    /> */}

                    {/* <img
                        src={typeof params.row?.course_img === "object" ? params.row?.course_img?.url : params.row?.course_img}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    /> */}
                </>
            )
        },

        // { field: 'statu  s', headerName: 'Status', width: 150 },
        {
            headerName: 'Action',
            width: 150,
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

    data?.data?.forEach((v) => {
        catgetData.push({ value: v._id, label: v.name });
    });

    return (
        <>
            <h2>Category</h2>

            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Category
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>

                    <DialogContent>
                        <Formik
                            enableReinitialize
                            initialValues={Object.keys(update).length > 0 ? { ...update, _id: update._id || "" } : {
                                // parent_category_id: '',
                                name: '',
                                description: '',
                                price: '',
                                oldPrice: '',
                                discount: '',
                                color: [],
                                size: '',
                                rating: '',
                                category_img: [],
                            }}
                            validationSchema={catSchema}
                            onSubmit={(values, { resetForm }) => {
                                console.log(values);

                                handleSubmit(values);

                                handleClose();

                                resetForm();

                            }}
                        >


                            <Form id='subscription-form'>

                                {/* <TextInput
                                    id="parent_category_id"
                                    name="parent_category_id"
                                    // label="Select Categories"
                                    select
                                    slotProps={{
                                        select: {
                                            native: true,
                                        },
                                    }}
                                    data={catgetData}
                                /> */}

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
                                    id="oldPrice"
                                    name="oldPrice"
                                    label="Old Price"
                                />

                                <TextInput
                                    id="discount"
                                    name="discount"
                                    label="Discount"
                                />
                                <TextInput
                                    id="rating"
                                    name="rating"
                                    label="Rating"
                                />

                                <TextInput
                                    id="size"
                                    name="size"
                                    label="Size"
                                />


                                <ColorPicker
                                    id="color"
                                    name="color"
                                    label="Color"
                                />


                                <UploadFile
                                    name="category_img"
                                    type='file'
                                    multiple
                                />

                            </Form>
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
                    rows={data?.data || []}
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

export default Category;