import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import dots from "../Assets/Images/dots.svg";
import Footer from "../Components/Footer";
import ProgressBar from "../Components/ProgressBar ";

export default function SignUpPage() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    guests: 1,
    ticketType: "platinum",
    paymentOption: "mpesa",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Payment Info" },
  ];
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
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
    if (currentStep === 1) {
      // Handle form submission for the first step
    } else {
      // Handle form submission for the payment step
    }
  };

  const handleGeneratenvoice = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowInvoice(true);
    }, 2000);
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

      {/* progress bar */}
      <div className="w-4/5 mt-10 mx-auto">
        <ProgressBar steps={steps} currentStep={currentStep} />

        <br />

        {currentStep === 1 && (
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

            <h5>Company Information</h5>

            <div className="col-6 ">
              <label>Company Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Company Name*"
                name="CompanyName"
              />
            </div>
            <div className="col-6 ">
              <label>Job Title</label>
              <select id="JobTitle" className="form-control" name="JobTitle">
                <option>ICT Officer</option>
                <option>Human Resource (HR)</option>
                <option>Laywer</option>
                <option>Accountant </option>
                <option>Auditor </option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {currentStep === 2 && (
          <div>
            {/* Payment form fields */}
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Payment Information
              </h2>

              <form onSubmit={handleGeneratenvoice}>
                <div className="mb-4">
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Ticket Type
                  </label>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="ticketType"
                        value="Platinum"
                        checked={formData.ticketType === "Platinum"}
                        onChange={handleInputChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Platinum (Ksh. 12, 000)</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="ticketType"
                        value="Bronze"
                        checked={formData.ticketType === "Bronze"}
                        onChange={handleInputChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Bronze (Ksh. 18,000)</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="ticketType"
                        value="Gold"
                        checked={formData.ticketType === "Gold"}
                        onChange={handleInputChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Gold (Ksh. 24,000)</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Payment Option
                  </label>
                  <select
                    name="paymentOption"
                    value={formData.paymentOption}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  >
                    <option value="mpesa">Mpesa</option>
                    <option value="creditCard">Credit Card</option> 
                  </select>
                </div>

                <button
                  type="submit" 
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Generate Invoice
                </button>
              </form>

              {/* Display loader while generating invoice */}
              {isLoading && <p>Loading...</p>}

              {/* Display generated invoice */}
              {showInvoice && (
                <div className="mt-8">
                  {/* Add logic to display invoice details */}
                  <h3 className="text-xl font-semibold mb-2">
                    Invoice Details
                  </h3>
                  <p>Guests: {formData.guests}</p>
                  <p>Ticket Type: {formData.ticketType}</p>
                  <p>Payment Option: {formData.paymentOption}</p>
                  <p>Total Amount: $50 USD</p>
                  {/* Add more details as needed */}
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handlePrev}
              >
                Back
              </button>{" "}
              <button type="submit" className="btn btn-primary">
                Proceed to payment
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
