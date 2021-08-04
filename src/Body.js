import React from 'react'
import "./sass/body.css"
function Body() {
    return (
        <div className="body">
            <div className="intro">
                <div className="big"><h1>create short links!</h1></div>
                <div className="small"><h1><span>psylink</span> is the best url shortening service availble completely free which is easily accessible and customisable </h1></div>

            </div>

            <div className="inp">
                <form action="">
                    <input type="text" />
                    <button>shorten</button>
                </form>
                {/* <div className="shortened">
                    <h1> <span>short url: </span> <button>bit.ly.asd</button></h1>
                </div> */}
            </div>
            <div className="outro">
                <div className="large"><h1><span>urls</span> when shorter are better</h1></div>
            </div>
        </div >
    )
}

export default Body
