import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { resetAlert } from '../../Redux/Slice/Alert.slice';


function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const alert = useSelector(state => state.alert)

    const dispatch = useDispatch()

    console.log(alert);

    useEffect(() => {

        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                variant: alert.variant
            }),
                dispatch(resetAlert())
        }

    }, [alert.text])


    return (
        <></>
    );
}

export default Alert;