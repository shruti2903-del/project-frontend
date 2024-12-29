import React from "react";
import LoggedInUserNavbar from "../../components/LoggedInUserNavbar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function CommunityHome() {
  const navigate = useNavigate()
const submit = (e) =>{
  e.preventDefault();
  navigate('/loggedin/existingGroup')
}
  return (
    <>
      {localStorage.getItem("token") ? <LoggedInUserNavbar /> : <Navbar />}
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          <img
            src="/assets/images/auth/communityhome.avif"
            style={{ width: "600px", height: "300px" }}
          />
          <h4 className="mt-2 fw-bold">Create group to easily communicate</h4>
          <div className="row mt-3">
            <div className="col-md-6 col-sm-12">
            <button type="button" className="btn mt-3 d-inline-block text-white mb-5 fw-bold w-75" style={{ background: '#00a287'}}>Create your own group</button>
            </div>
            <div className="col-md-6 col-sm-12">
            <button type="button" onClick={submit} className="btn mt-3 d-inline-block mb-5 text-white fw-bold w-75 " style={{ background: '#00a287'}}>Join an existing group</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
