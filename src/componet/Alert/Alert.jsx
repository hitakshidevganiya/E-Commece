import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../Redux/Slice/Alert.slice';
import { useSnackbar } from 'notistack';



function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const alert = useSelector(state => state.alert)

    const dispatch = useDispatch()

    console.log(alert);

    useEffect(() => {

        if (alert && alert.text ) {
            enqueueSnackbar(alert.text, {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                variant: alert.variant || 'default'
            }),
                dispatch(resetAlert())
        }

    }, [alert])


    return (
        <></>
    );
}

export default Alert;