import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthInsurance.css';

const HealthInsurance = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const insurancePlans = {
    star: {
      name: "Star Health Insurance",
      coverage: "₹5 Lakhs",
      features: [
        "No Medical Test Required*",
        "Cashless Treatment at 10,000+ Hospitals",
        "Pre & Post Hospitalization Coverage",
        "No Claim Bonus up to 100%"
      ],
      price: "₹599/month"
    },
    oriental: {
      name: "Oriental Health Insurance",
      coverage: "₹10 Lakhs",
      features: [
        "Cashless Treatment",
        "Day Care Procedures Covered",
        "Free Annual Health Check-up",
        "AYUSH Treatment Coverage"
      ],
      price: "₹799/month"
    },
    icici: {
      name: "ICICI Lombard Health Insurance",
      coverage: "₹15 Lakhs",
      features: [
        "Quick Claim Settlement",
        "Lifetime Renewability",
        "Restore Benefit up to 100%",
        "Wellness Program Benefits"
      ],
      price: "₹999/month"
    }
  };

  const handleCardClick = (company) => {
    navigate('/user', { 
      state: { 
        company: company,
        planDetails: insurancePlans[company]
      } 
    });
  };

  const handleKnowMore = (e, company) => {
    e.stopPropagation();
    setSelectedPlan(insurancePlans[company]);
    setShowModal(true);
  };

  return (
    <div className="health-insurance-container">
      <h1>Choose Your Health Insurance Provider</h1>
      <div className="insurance-cards">
        <div className="insurance-card" onClick={() => handleCardClick('star')}>
          <div className="company-info">
            <img src="https://play-lh.googleusercontent.com/JEcrbamGiWvHjDBubpjIfDAZ5-aqy-z1oDXag4XSDptHSYtGftWcH_sfENba-lSlBQ" alt="Star Health" className="company-logo" />
            <h2>Star Health Insurance</h2>
          </div>
          <p>Coverage up to ₹5 Lakhs</p>
          <p>No Medical Test Required*</p>
          <div className="plan-details">
            <p className="price">{insurancePlans.star.price}</p>
            <ul>
              {insurancePlans.star.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button onClick={(e) => handleKnowMore(e, 'star')}>Know Your Plan</button>
        </div>

        <div className="insurance-card" onClick={() => handleCardClick('oriental')}>
          <div className="company-info">
            <img src="https://ditto-partners.s3.ap-south-1.amazonaws.com/icons/Oriental+Insurance.png" alt="Care Health" className="company-logo" />
            <h2>Oriental Health Insurance</h2>
          </div>
          <p>Coverage up to ₹10 Lakhs</p>
          <p>Cashless Treatment</p>
          <div className="plan-details">
            <p className="price">{insurancePlans.oriental.price}</p>
            <ul>
              {insurancePlans.oriental.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button onClick={(e) => handleKnowMore(e, 'oriental')}>Know Your Plan</button>
        </div>

        <div className="insurance-card" onClick={() => handleCardClick('icici')}>
          <div className="company-info">
            <img src="https://asiainsurancepost.com/wp-content/uploads/2022/07/ICICI_lombard-Gen.webp" alt="HDFC ERGO" className="company-logo" />
            <h2>ICICI Lombard Health Insurance</h2>
          </div>
          <p>Coverage up to ₹15 Lakhs</p>
          <p>Quick Claim Settlement</p>
          <div className="plan-details">
            <p className="price">{insurancePlans.icici.price}</p>
            <ul>
              {insurancePlans.icici.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button onClick={(e) => handleKnowMore(e, 'icici')}>Know Your Plan</button>
        </div>
      </div>

      {/* Plan Details Modal */}
      {showModal && selectedPlan && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <h2>{selectedPlan.name}</h2>
            <h3>Coverage: {selectedPlan.coverage}</h3>
            <p className="price">{selectedPlan.price}</p>
            <div className="features-list">
              <h4>Key Features:</h4>
              <ul>
                {selectedPlan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className="proceed-btn" onClick={() => handleCardClick(selectedPlan.name.toLowerCase().split(' ')[0])}>
              Proceed with this plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthInsurance;
