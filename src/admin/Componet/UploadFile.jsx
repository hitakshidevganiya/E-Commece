import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useField } from 'formik';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


function UploadFile(props) {

    const [field, meta, helpers] = useField(props);

    const { setValue } = helpers;

    console.log("field UploadFile", field);
    // console.log("meta UploadFile", meta);

    let filepath = [];

    // if (typeof field.value?.url === 'string') {
    //     filepath = field.value?.url;
    // } else if (typeof field.value === 'object' && field.value) {
    //     filepath = URL.createObjectURL(field.value)
    // }

    if (Array.isArray(field.value)) {
        filepath = field.value.map((file) => {
            if (file instanceof File) {
                return URL.createObjectURL(file);
            } else if (file?.url) {
                return file.url;
            } else if (typeof file === "string") {
                return file;
            }

            console.log("file", file);
        })

    }

    console.log("filepath", filepath);

    console.log('field.value', field.value);


    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput
                    {...props}
                    type="file"
                    multiple
                    // onChange={(event) => setValue(Array.from(event.target.files))}

                    onChange={(event) => {
                        const files = event.target.files;

                        if (!files || files.length === 0) return;

                        setValue(Array.from(files));
                    }}

                />
            </Button>
            {
                filepath.map((v, i) => (
                    <img key={i} src={v} width={'50px'} height={'50px'} />
                ))
            }

            {
                meta.error && meta.touched ?
                    <p style={{ color: 'red' }}>{meta.error}</p> : null
            }
        </>
    );
}

export default UploadFile;