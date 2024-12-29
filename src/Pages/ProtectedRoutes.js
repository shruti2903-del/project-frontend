// import { useEffect, useState } from "react";
// import { Navigate, Outlet } from "react-router-dom";

// function ProtectedRoute() {
//     const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);




//     useEffect(() => {
//         setIsLoggedIn(localStorage.getItem("token") ? true : false)


//     }, [])

//     return isLoggedIn === true ? <Outlet /> : <Navigate to='/login' />
// }

// export default ProtectedRoute; 
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    // Render protected children
    return <>{children}</>;
}

export default ProtectedRoute;
