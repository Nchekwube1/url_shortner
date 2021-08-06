import React from 'react'
import "./sass/popup.css"
import icon from "./icon/cancel.svg"
function Popup({ id, modal }) {
    return (
        <div className="overlay">

            <div className="tab">
                <div className="end"><button onClick={() => {
                    modal(false)
                }}     ><img src={icon} alt="cancel button" /></button></div>

                <div className="txt"><h1>Your url is: {id}</h1>  <button
                    onClick={async () => {
                        try {
                            await navigator.clipboard.writeText(id)
                            alert("Link copied to clipboard!")
                        }
                        catch {
                            alert("Could not copy link")
                        }

                    }} >copy</button> </div>
            </div>

        </div>
    )
}

export default Popup
