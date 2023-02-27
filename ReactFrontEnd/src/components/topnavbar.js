import React from "react";
import {Link, useLocation} from "react-router-dom";

const TopNavBar = () => {
    const {pathname} = useLocation();
    return (
        <>
            <div className="topnav">
                <Link className={(pathname === '/') ? 'active' : ''} to={"/"}>Home</Link>
                <Link className={(pathname === '/submit-review') ? 'active' : ''} to={"/submit-review"}>Submit A Review</Link>
            </div>
        </>
    )
}

export default TopNavBar;