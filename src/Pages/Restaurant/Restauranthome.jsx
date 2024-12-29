import React, { useState } from 'react'
import LoggedInUserNavbar from '../../components/LoggedInUserNavbar'
import Sidebar from '../../components/Sidebar'

export default function Restauranthome() {
//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row">

//                     <div className="col-md-3 col-sm-4 bg-light border-end">
//                         <Sidebar />
//                     </div>

//                     <div className="col-md-9 col-sm-8">
//                         <div className="container">
//                             <div className="row text-center d-flex justify-content-center">
//                                 <h1 className="fw-bold mt-5">Top Brands For You</h1>
//                             </div>
//                             <div className='row mt-5'>
//                                 <div className='col-md-3 col-sm-12'>
//                                     <div className="card rounded-5 hover-scale" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => window.location.href = "/restauranthome"}>
//                                         <img src="/assets/images/auth/dominos.avif" style={{height:'10rem'}} className="card-img-top p-1 rounded-5" alt="..." />
//                                         <div className="card-body">
//                                             <div className='row'>
//                                             <div className='col-md-6'>
//                                                 <p className="card-text fw-semibold mt-0">Domino's Pizza</p>
//                                                 </div>
//                                             <div className='col-md-6'>
//                                                 <div className="ratings">
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star text-warning"></i>
//                                                 </div>
//                                             </div></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='col-md-3 col-sm-12'>
//                                 <div className="card rounded-5 hover-scale" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => window.location.href = "/restauranthome"}>
//                                         <img src="/assets/images/auth/pizzahut.avif" style={{height:'10rem'}} className="card-img-top p-1 rounded-5" alt="..." />
//                                         <div className="card-body">
//                                             <div className='row'>
//                                             <div className='col-md-6'>
//                                                 <p className="card-text fw-semibold mt-0">Pizza Hut</p>
//                                                 </div>
//                                             <div className='col-md-6'>
//                                                 <div className="ratings">
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star text-warning"></i>
//                                                 </div>
//                                             </div></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='col-md-3 col-sm-12'>
//                                 <div className="card rounded-5 hover-scale" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => window.location.href = "/restauranthome"}>
//                                         <img src="/assets/images/auth/cheesecake.avif" style={{height:'10rem'}} className="card-img-top p-1 rounded-5" alt="..." />
//                                         <div className="card-body">
//                                             <div className='row'>
//                                             <div className='col-md-6'>
//                                                 <p className="card-text fw-semibold mt-0">Cheesecake</p>
//                                                 </div>
//                                             <div className='col-md-6'>
//                                                 <div className="ratings">
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star text-warning"></i>
//                                                 </div>
//                                             </div></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='col-md-3 col-sm-12'>
//                                 <div className="card rounded-5 hover-scale" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => window.location.href = "/restauranthome"}>
//                                         <img src="/assets/images/auth/kfc.webp" style={{height:'10rem'}} className="card-img-top p-1 rounded-5" alt="..." />
//                                         <div className="card-body">
//                                             <div className='row'>
//                                             <div className='col-md-6'>
//                                                 <p className="card-text fw-semibold mt-0">KFC</p>
//                                                 </div>
//                                             <div className='col-md-6'>
//                                                 <div className="ratings">
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star-fill text-warning"></i>
//                                                     <i className="bi bi-star text-warning"></i>
//                                                 </div>
//                                             </div></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* <div className="container mt-0">
//                 <div className="row">

//                   <div className=" mb-auto mt-5 ">


//                     <div className="body">

//                     <div className="row">
//   <div className="col-md-12 col-sm-12 mt-4">
//     <div className="row gx-5">
//       <div className="col-md-8 col-sm-12">
//         <div className="row">
//           <div className="col-md-2 col-sm-12">
//             <img src="/assets/images/auth/womensocial.avif" className="w-100 h-100" />
//           </div>
//           <div className="col-md-10 col-sm-12 text-start">
//             <h3>Strike a Sequence</h3>
//             <p>Dames & Damsels (women-only social group)</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4 col-sm-12 mt-3 text-center">
//         <div className="ratings">
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star text-warning"></i>
//         </div>
//       </div>
//     </div>
//     <hr />
//     <div className="row gx-5">
//       <div className="col-md-8 col-sm-12">
//         <div className="row">
//           <div className="col-md-2 col-sm-12">
//             <img src="/assets/images/auth/coffeemeet.jpg" className="w-100 h-100" />
//           </div>
//           <div className="col-md-10 col-sm-12 text-start">
//             <h3>Coffee Meet</h3>
//             <p>Delhi Coffee Meetup group</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4 col-sm-12 mt-3 text-center">
//         <div className="ratings">
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//         </div>
//       </div>
//     </div>
//     <hr />
//     <div className="row gx-5">
//       <div className="col-md-8 col-sm-12">
//         <div className="row">
//           <div className="col-md-2 col-sm-12">
//             <img src="/assets/images/auth/businessmeet.avif" className="w-100 h-100" />
//           </div>
//           <div className="col-md-10 col-sm-12 text-start">
//             <h3>Business Networking Meet</h3>
//             <p>Growth Club - Startup Network</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4 col-sm-12 mt-3 text-center">
//         <div className="ratings">
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star-fill text-warning"></i>
//           <i className="bi bi-star text-warning"></i>
//           <i className="bi bi-star text-warning"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>



//                     </div>
//                   </div>

//                 </div>
//               </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

const [filter, setFilter] = useState("All"); // Default: Show all categories

const brands = [
    { id: 1, name: "Domino's Pizza", type: "Non-Veg", img: "/assets/images/auth/dominos.avif" },
    { id: 2, name: "Pizza Hut", type: "Non-Veg", img: "/assets/images/auth/pizzahut.avif" },
    { id: 3, name: "Cheesecake", type: "Veg", img: "/assets/images/auth/cheesecake.avif" },
    { id: 4, name: "KFC", type: "Non-Veg", img: "/assets/images/auth/kfc.webp" },
];

const filteredBrands =
    filter === "All" ? brands : brands.filter(brand => brand.type === filter);

return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-4 bg-light border-end">
                    <Sidebar />
                </div>

                <div className="col-md-9 col-sm-8">
                    <div className="container">
                        {/* Heading Section */}
                        <div className="row text-center d-flex justify-content-center">
                            <h1 className="fw-bold mt-5">Top Brands For You</h1>
                        </div>

                        {/* Filter Section */}
                        <div className="row mt-5 text-start">
                            <div className="col-md-12">
                                <button
                                    className={`btn me-2 ${filter === "Veg" ? "btn-success" : "btn-outline-success"}`}
                                    onClick={() => setFilter("Veg")}
                                >
                                    Veg
                                </button>
                                <button
                                    className={`btn me-2 ${filter === "Non-Veg" ? "btn-danger" : "btn-outline-danger"}`}
                                    onClick={() => setFilter("Non-Veg")}
                                >
                                    Non-Veg
                                </button>
                                <button
                                    className={`btn me-2 ${filter === "All" ? "btn-secondary" : "btn-outline-secondary"}`}
                                    onClick={() => setFilter("All")}
                                >
                                    Show All
                                </button>
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div className="row mt-3">
                            {filteredBrands.length > 0 ? (
                                filteredBrands.map(brand => (
                                    <div key={brand.id} className="col-md-3 col-sm-12">
                                        <div
                                            className="card rounded-5 hover-scale"
                                            style={{ width: "18rem", cursor: "pointer" }}
                                            onClick={() => window.location.href = "/restauranthome"}
                                        >
                                            <img
                                                src={brand.img}
                                                style={{ height: "10rem" }}
                                                className="card-img-top p-1 rounded-5"
                                                alt={brand.name}
                                            />
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="card-text fw-semibold mt-0">{brand.name}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="ratings">
                                                            <i className="bi bi-star-fill text-warning"></i>
                                                            <i className="bi bi-star-fill text-warning"></i>
                                                            <i className="bi bi-star-fill text-warning"></i>
                                                            <i className="bi bi-star-fill text-warning"></i>
                                                            <i className="bi bi-star text-warning"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center mt-5">No brands match your selection.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}