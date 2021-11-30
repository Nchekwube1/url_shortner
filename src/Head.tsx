import React from 'react'
import "./sass/header.css"
function Head() {
    return (
        <header className="head">
            <div className="logo">
                <h1>psy<span>link</span></h1>
            </div>
            <div className="link">
                <div><h1>home</h1>
                </div>
                <div><h1>Features</h1>
                </div>
                <div><h1>About</h1></div>
                <div><h1>pricing</h1></div>
            </div>

        </header>
    )
}

export default Head
