import React, { useState } from 'react'
import axios from "axios"
import Popup from "./Popup"
import "./sass/body.css"

function Body() {
    const [url, setUrl] = useState("")
    const [err, setErr] = useState(false)
    const [modal, setModal] = useState(false)
    const [urlId, seturId] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (url === "") {
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 3000)
        }
        else {
            const postObj = { full: url }

            axios.post("http://localhost:5000/urls", postObj)
                .then(res => {
                    if (res.status === 200) {
                        let id = res.data.id
                        let loc = window.location.href
                        seturId(loc + id)
                        setModal(true)
                    }
                    else {
                        console.log("an error occured")
                    }
                }


                )
            setUrl("")
        }
    }
    return (
        <div className="body">
            {modal ? <Popup id={urlId} modal={setModal} /> : null}
            <div className="intro">
                <div className="big"><h1>create short links!</h1></div>
                <div className="small"><h1><span>psylink</span> is the best url shortening service availble completely free which is easily accessible and customisable </h1></div>

            </div>

            <div className="inp">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" className={err ? "error" : ""} value={url} onChange={(e) => { setUrl(e.target.value) }} />
                    <button>shorten</button>
                </form>
                {/* <div className="shortened">
                    <h1> <span>short url: </span> <button>bit.ly.asd</button></h1>
                </div> */}
            </div>
            <div className="outro">
                <div className="large"><h1><span>urls,</span> when shorter are better</h1></div>
            </div>
        </div >
    )
}

export default Body
