import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import dots from "../Assets/Images/dots.svg";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "male",
    country: "us",
    interests: [],
    comments: "",
    subscribe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "select-multiple") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div>
      <Navbar />
      <div
        className="bg-blue-400 w-full flex"
        style={{
          minHeight: "20vh",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginTop: "-10px",
        }}
      >
        <img src={dots} alt="dots" />

        <div>
          <br />
          <br />
          <h2 className="text-white py-500" style={{ marginLeft: "20px" }}>
            Regional Business Owners -
            <br />
            Summit
          </h2>
          <span
            className="text-white text-center"
            style={{ marginLeft: "20px" }}
          >
            Dec, 12th | KICC | Nairobi, Kenya
          </span>
        </div>
      </div>
      {/* reg */}
      <div className="w-4/5 mx-auto">
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputState" className="form-label">
              Title
            </label>
            <select id="Title" className="form-select" name="Title">
              <option>--Select Title--</option>
              <option>Mrs</option>
              <option>Mr</option>
              <option>Miss</option>
              <option>Dr</option>
              <option>Hon</option>
            </select>
          </div>
          <div className="col-6 ">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="FirstName"
              required
            />
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="LastName"
              required
            />
          </div>
          <div className="col-6 ">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              required
              name="UserName"
            />
          </div>
          <h5>Contact Information</h5>
          <div className="col-6 ">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              required
              name="email"
            />
          </div>
          <div className="col-6 ">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="number"
              required
              name="PhoneNumber"
            />
          </div>
          <div className="col-6 ">
            <label>Location</label>
            <select className="form-control" name="Location">
              <option selected>Nairobi</option>

              <option value="Baringo">Baringo</option>
              <option value="Bomet">Bomet</option>
              <option value="Bungoma">Bungoma</option>
              <option value="Busia">Busia</option>
              <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
              <option value="Embu">Embu</option>
              <option value="Garissa">Garissa</option>
              <option value="Homa Bay">Homa Bay</option>
              <option value="Isiolo">Isiolo</option>
              <option value="Kajiado">Kajiado</option>
              <option value="Kakamega">Kakamega</option>
              <option value="Kericho">Kericho</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Kilifi">Kilifi</option>
              <option value="Kirinyaga">Kirinyaga</option>
              <option value="Kisii">Kisii</option>
              <option value="Kisumu">Kisumu</option>
              <option value="Kitui">Kitui</option>
              <option value="Kwale">Kwale</option>
              <option value="Laikipia">Laikipia</option>
              <option value="Lamu">Lamu</option>
              <option value="Machakos">Machakos</option>
              <option value="Makueni">Makueni</option>
              <option value="Mandera">Mandera</option>
              <option value="Marsabit">Marsabit</option>
              <option value="Meru">Meru</option>
              <option value="Migori">Migori</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Muranga">Murang'a</option>
              <option value="Nairobi City">Nairobi City</option>
              <option value="Nakuru">Nakuru</option>
              <option value="Nandi">Nandi</option>
              <option value="Narok">Narok</option>
              <option value="Nyamira">Nyamira</option>
              <option value="Nyandarua">Nyandarua</option>
              <option value="Nyeri">Nyeri</option>
              <option value="Samburu">Samburu</option>
              <option value="Siaya">Siaya</option>
              <option value="Taita-Taveta">Taita-Taveta</option>
              <option value="Tana River">Tana River</option>
              <option value="Tharaka-Nithi">Tharaka-Nithi</option>
              <option value="Trans Nzoia">Trans Nzoia</option>
              <option value="Turkana">Turkana</option>
              <option value="Uasin Gishu">Uasin Gishu</option>
              <option value="Vihiga">Vihiga</option>
              <option value="West Pokot">West Pokot</option>
              <option value="wajir">wajir</option>
            </select>
          </div>

          <h5>Background Information</h5>

          <div className="col-6 ">
            <label>P105 Number</label>
            <input
              className="form-control"
              type="text"
              placeholder="P105 Number*"
              name="P105Number"
            />
          </div>
          <div className="col-6 ">
            <label>Area of Practice</label>
            <select
              id="AreaofPractice"
              className="form-control"
              name="AreaofPractice"
            >
              <option>Criminal Law</option>
              <option>Family Law</option>
              <option>Civil Law</option>
              <option>Conveyancing </option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
