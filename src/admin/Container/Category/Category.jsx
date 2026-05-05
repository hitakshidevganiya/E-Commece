import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik, useField } from 'formik';
import { object, string } from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import TextInput from '../../Componet/TextInput';
import { useAddCategoryMutation, useDeleteCategoryMutation, useGetAllCategoryQuery, useUpdateCategoryMutation } from '../../../Redux/Api/category.api';


function Category() {

    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = useState({});

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


        if (Object.keys(update).length > 0) {

            updateCategory(values);
        } else {
            addCategory(values);
        }
    }

    const handleDelete = (_id) => {
        console.log(_id);

        deleteCategory(_id)
    }

    const handleEdit = (data) => {
        console.log(data);

        handleClickOpen()

        setUpdate(data);


    }

    let catSchema = object({
        name: string().required('Please enter Category'),
        description: string().required('Please enter Description')
    })

    const paginationModel = { page: 0, pageSize: 5 };

    const columns = [
        {
            field: 'parent_category_id',
            headerName: 'Parent category',
            width: 300,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {

                // console.log(params);

                const c = data?.data?.find(v => v._id === params.row.parent_category_id);

                // console.log(c);

                return c?.name || "-";
            }
        },
        { field: 'name', headerName: 'Name', width: 300, align: 'center', headerAlign: 'center' },
        { field: 'description', headerName: 'Description', width: 300, align: 'center', headerAlign: 'center' },
        {
            headerName: 'Action',
            width: 300,
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

    const catgetData = [{ value: '', label: '--Select Parent Categories--' }];

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
                            initialValues={Object.keys(update).length > 0 ? update : {
                                parent_category_id: null,
                                name: '',
                                description: ''
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

                                <TextInput
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
    )
}

export default Category;