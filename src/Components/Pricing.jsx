import "../Assets/Styles/pricing.css";

const Pricing = () => (
  <div>
    <div className="pricingContainer">
      <h3 className="pricingBanner">Find the package thats right for you</h3>
      <p className="pricingBannerDescription">
        We have the lowest Subscription prices with excelent features
      </p>
      <div className="pricing-table">
        <div className="pricing-card">
          <h3 className="pricing-card-header">Standard</h3>
          <div className="price">
            <sup>Ksh.</sup>2,000
          </div>
          <ul>
            <li>VIP Seating</li>
            <li>Exclusive Networking Lounge</li>
            <li>Priority Registration</li>
            <li>Access to Keynote Sessions</li>
            <li>Exclusive Workshops</li>
            <li>Personalized Swag Bag</li>
            <li>Complimentary Meals</li>
            <li>Networking Gala Entry</li>
          </ul>
          <a href="/signup" className="order-btn">
            Register
          </a>
        </div>

        <div className="pricing-card">
          <h3 className="pricing-card-header">Premium</h3>
          <div className="price">
            <sup>Ksh.</sup>5,000<span></span>
          </div>
          <ul>
            <li>VIP Seating</li>
            <li>Exclusive Networking Lounge</li>
            <li>Priority Registration</li>
            <li>Access to Keynote Sessions</li>
            <li>Exclusive Workshops</li>
            <li>Personalized Swag Bag</li>
            <li>Complimentary Meals</li>
            <li>Networking Gala Entry</li>
          </ul>
          <a href="/signup" className="order-btn">
            Register
          </a>
        </div>

        <div className="pricing-card">
          <h3 className="pricing-card-header">Enterprise</h3>
          <div className="price">
            <sup>Ksh.</sup>20,000<span></span>
          </div>
          <ul>
            <li>VIP Seating</li>
            <li>Exclusive Networking Lounge</li>
            <li>Priority Registration</li>
            <li>Access to Keynote Sessions</li>
            <li>Exclusive Workshops</li>
            <li>Personalized Swag Bag</li>
            <li>Complimentary Meals</li>
            <li>Networking Gala Entry</li>
          </ul>
          <a href="/signup" className="order-btn">
            Register
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
