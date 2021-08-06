import React, { useEffect } from 'react'
import "./sass/urls.css"
import axios from "axios"
import { useParams } from "react-router-dom"

function Url() {
    const { id } = useParams()
    useEffect(() => {
        axios.post(`http://localhost:5000/urls/${id}`).then(res => {
            let newUrl = res.data
            window.location.replace(newUrl)
        })
    }, [])
    return (
        <div>
            <h1>Please wait ......</h1>
        </div>
    )
}

export default Url
