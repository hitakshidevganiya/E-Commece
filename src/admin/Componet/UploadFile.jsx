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

    let filepath = [];

    if (Array.isArray(field.value)) {
        filepath = field.value.map((file) => {
            if (file instanceof File) {
                return URL.createObjectURL(file);
            }

            if (typeof file === "string") {
                return `${IMAGE_URL}images/category_img/${file}`;
            }

            return "";
        });
    }

    return (
        <>
            <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput
                    {...props}
                    type="file"
                    multiple
                    onChange={(event) => {
                        const files = Array.from(event.target.files);

                        if (!files.length) return;

                        setValue([...(field.value || []), ...files]);
                    }}
                />
            </Button>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {filepath.map((v, i) => (
                    <img
                        key={i}
                        src={v}
                        width="60"
                        height="60"
                        style={{ objectFit: "cover", borderRadius: "6px" }}
                    />
                ))}
            </div>

            {meta.error && meta.touched && (
                <p style={{ color: 'red' }}>{meta.error}</p>
            )}
        </>
    );
}

export default UploadFile;