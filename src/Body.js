import React, { useState } from 'react'
import "./sass/body.css"
function Body() {
    const [url, setUrl] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        console.log(url);
        setUrl("")
    }
    return (
        <div className="body">
            <div className="intro">
                <div className="big"><h1>create short links!</h1></div>
                <div className="small"><h1><span>psylink</span> is the best url shortening service availble completely free which is easily accessible and customisable </h1></div>

            </div>

            <div className="inp">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={url} onChange={(e) => { setUrl(e.target.value) }} />
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
