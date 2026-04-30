import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

function TextInput({ type = "text", data = [], ...props }) {

    const [field, meta] = useField(props);

    // console.log("field", field);
    // console.log("meta", meta);
    // console.log("props", props);

    return (
        <TextField
            {...field}
            {...props}
            margin="dense"
            type={type}
            fullWidth
            variant="standard"
            error={meta.error && meta.touched}
            helperText={meta.error && meta.touched ? meta.error : ''}
        >
            {data.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </TextField>

    );
}

export default TextInput;