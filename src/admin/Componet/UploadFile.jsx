import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useField } from 'formik';
import { IMAGE_URL } from '../../url/url';

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

    return (
        <>
            <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
            >
                Upload File

                <VisuallyHiddenInput
                    type="file"
                    multiple
                    onChange={(e) => {

                        const files = Array.from(e.target.files);

                        console.log("FILES :", files);

                        setValue(files);
                    }}
                />
            </Button>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {
                    Array.isArray(field.value) &&
                    field.value.map((file, i) => {

                        let imgPath = "";

                        if (file instanceof File) {
                            imgPath = URL.createObjectURL(file);
                        } else {
                            imgPath = `${IMAGE_URL}images/product_img/${file}`;
                        }

                        return (
                            <img
                                key={i}
                                src={imgPath}
                                width="60"
                                height="60"
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "5px"
                                }}
                            />
                        )
                    })
                }
            </div>

            {
                meta.touched && meta.error && (
                    <p style={{ color: "red" }}>{meta.error}</p>
                )
            }
        </>
    )
}

export default UploadFile;