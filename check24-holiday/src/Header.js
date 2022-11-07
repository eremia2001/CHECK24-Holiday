import React from "react"
import "./Header.css"
import check24Logo from "./images/check24Logo.svg"
import herz from "./images/herz.svg"
import glocke from "./images/glocke.svg"
import whatsapp from "./images/whatsapp.svg"
import user from "./images/benutzer.svg"

function Header()
{
    return(
        <div className="header">
            <img src={check24Logo} className="header-logo"/>
            <input type="text" className="header-searchField" placeholder="Was möchten Sie vergleichen ?"/>

            <div className="header-activity-container">

                    <div className="header-activity">
                        <img src={herz} className="header-activity-logo" />
                        <p className="header-activity-text">Merkzettel</p>
                    </div>

                    <img src={glocke} className="header-activity-logo" />


                    <div className="header-activity">
                        <img src={whatsapp} className="header-activity-logo whatsapp"  />
                        <p className="header-activity-text">Hilfe und Kontakt </p>
                    </div>

                    <div className="header-activity">
                        <img src={user} className="header-activity-logo "  />
                        <p className="header-activity-text">Mein Konto</p>
                    </div>
            </div>

        </div>
    )
}

// TODO : 
            // - links anklickbar machen ? 
            // - user Click none 
            // - 

export default Header