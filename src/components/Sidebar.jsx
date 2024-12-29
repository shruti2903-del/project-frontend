// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { useNavigate } from "react-router-dom";


// export default function Sidebar() {
//   const navigate = useNavigate();
//   function logout() {

//     localStorage.clear();
//     document.querySelector('.btn-close').click();
//     if (!localStorage.getItem('token')) {
//         navigate('/loggedin/');
//     }
//     else {
//         navigate('/login');
//     }

// }
//   return (
//     <>
//       <div className="d-flex flex-column bg-light vh-100 p-3">
//         <div className="mb-3">
//           <a className="fw-bold fs-5 d-block text-black text-decoration-none">Hello!!</a>
//         </div>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <a className="nav-link text-black d-flex align-items-center" href="/loggedin/">
//               <i className="fa fa-th-large me-2"></i> Home
//               {/* <span className="badge bg-danger rounded-pill ms-auto">new</span> */}
//             </a>
//           </li>
//           <li className="nav-item mb-2">
//             <a className="nav-link text-dark d-flex align-items-center" href="/loggedin/communityhome">
//               <i className="fa fa-comments me-2"></i> Join Community
//             </a>
//           </li>
//           {/* <li className="nav-item">
//             <a className="nav-link text-dark d-flex align-items-center">
//               <i className="fa fa-sticky-note me-2"></i> Bootstrap
//             </a>
//           </li> */}
//         </ul>
//         {/* <div className=" mt-auto text-center text-muted small">Sidebar Footer</div> */}
//         <div className=' shadow-sm mt-auto end-0'>
//                         <button className='btn btn-danger w-100' onClick={logout} >Log out</button>
//                     </div>
//       </div>


//     </>
//   );

// }
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    document.querySelector(".btn-close").click();
    if (!localStorage.getItem("token")) {
      navigate("/loggedin/");
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      {/* Sidebar for Large Screens */}
      <div className="d-none d-md-block bg-light vh-100 p-3">
        <div className="mb-3">
          <a className="fw-bold fs-5 d-block text-black text-decoration-none">
            Hello!!
          </a>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a
              className="nav-link text-black d-flex align-items-center"
              href="/userhome"
            >
              <i className="fa-solid fa-house me-2"></i> Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              className="nav-link text-black d-flex align-items-center"
              href="/userhome"
            >
              <i className="fa-solid fa-burger me-2"></i> Restaurant
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              className="nav-link text-black d-flex align-items-center"
              href="/userhome"
            >
              <i className="fa fa-th-large me-2"></i> Vendor
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              className="nav-link text-black d-flex align-items-center"
              href="/userhome"
            >
              <i className="fa-solid fa-calendar-check me-2"></i> Event
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              className="nav-link text-dark d-flex align-items-center"
              href="/loggedin/communityhome"
            >
              <i className="fa fa-comments me-2"></i> Join Community
            </a>
          </li>
        </ul>
        <div className="shadow-sm mt-auto">
          <button className="btn btn-danger w-100" onClick={logout}>
            Log out
          </button>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div className="d-md-none">
        <button
          className="btn btn-success m-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
          aria-controls="mobileSidebar"
        >
          <i className="fa fa-bars"></i> 
        </button>

        <div
          className="offcanvas offcanvas-start"
          id="mobileSidebar"
          tabIndex="-1"
          aria-labelledby="mobileSidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileSidebarLabel">
              Hello!!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  className="nav-link text-black d-flex align-items-center"
                  href="/userhome"
                >
                  <i className="fa fa-th-large me-2"></i> Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  className="nav-link text-dark d-flex align-items-center"
                  href="/loggedin/communityhome"
                >
                  <i className="fa fa-comments me-2"></i> Join Community
                </a>
              </li>
            </ul>
            <div className="shadow-sm mt-auto">
              <button className="btn btn-danger w-100" onClick={logout}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
