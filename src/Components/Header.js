import React from "react";

const Header = ({player}) => {  
    return (
        <div className="panel header">
            <div className="header-text">
                <h1>Player {player} Turn</h1>
            </div>
        </div>
    )
}

export default Header