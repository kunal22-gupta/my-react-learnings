import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id} = useParams();
    return (
        <div className='bg-gray-400 text-center py-12'>
            <h1 className='text-3xl'>User : {id}</h1>
        </div>
    )
}
