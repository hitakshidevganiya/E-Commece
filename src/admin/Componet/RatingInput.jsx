import React from "react";
import Rating from '@mui/material/Rating';
import { useField } from 'formik';

function RatingInput({label, ...props}) {

    const [field, , helpers] = useField(props);

    return (
        <div style={{ margin: "10px 0" }}>
            <label>{label}</label><br />

            <Rating
                value={field.value || 0}
                onChange={(e, newValue) => {
                    helpers.setValue(newValue);
                }}
            />

            <p>Selected: {field.value}</p>
        </div>
    )
}

export default RatingInput;