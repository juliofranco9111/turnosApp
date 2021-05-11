import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { types } from '../types/types'

export const AppointmentsScreen = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch({type: types.appointmentClearVerify})
    }, [dispatch])
    
    return (
        <div>
            <h1>appointments</h1>
        </div>
    )
}
