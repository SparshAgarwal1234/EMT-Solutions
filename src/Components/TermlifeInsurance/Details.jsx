// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { postBasicDetails } from "../../features/basicDetails/actionCreators";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

const policyImages = [
  "https://img.freepik.com/free-vector/insurance-policy-shield_603843-179.jpg?t=st=1739703570~exp=1739707170~hmac=136dcab26611871822fa8da01ac901bba7a882247a80ce8480957e84fad7872c",
  "https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/8ad075f8-c95f-441a-9033-1e182d50cd77/insurance%20policy%20endorsement.jpg",
  "https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/28/full/1709120964-0595.jpg?im=FeatureCrop,size=(826,465)",
  "https://static.vecteezy.com/system/resources/thumbnails/051/793/794/small_2x/2025-insurance-form-agreements-concept-businessman-signs-insurance-contracts-e-signing-digital-online-document-management-concerning-mortgage-loan-offer-for-and-house-insurance-photo.jpg",
  "https://www.canarahsbclife.com/content/dam/chli/image/blog/term-insurance/spouse-term-insurance-thum-desktop.webp",
  "https://www.reliancegeneral.co.in/siteassets/rgiclassets/images/blogs-images/health-insurance-policy-for-different-stages-of-life2.webp",
  "https://www.avivaindia.com/sites/default/files/Renew-Your-term-Insurance.jpg",
];

function AutoImageSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % policyImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <img
      src={typeof policyImages[idx] === 'string' ? policyImages[idx] : policyImages[idx].default}
      alt="policy"
      style={{   
        width: "95%",
        height: "520px",
        objectFit: "icon",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "opacity 0.7s cubic-bezier(.4,0,.2,1)",
        opacity: 1,
        imageRendering: "auto",
        filter: "none",
      }}
    />
  );
}
import("./Details.css");

const Details = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [alignment, setAlignment] = React.useState("web");
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("Male");
  const [dob, setDob] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [details, setDetails] = React.useState(false);

  const dispatch = useDispatch();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const userDetails = {
      name,
      dob,
      mobile,
      gender,
    };

    console.log("userDetails", userDetails);
    localStorage.setItem("basicUserDetails", JSON.stringify(userDetails));
    navigate("/quotationPage");
  };

  const handleDetails = () => {
    if (details) {
      setDetails(false);
    } else {
      setDetails(true);
    }
  };

  // State for modals
  const [showClaim, setShowClaim] = useState(false);
  const [showCall, setShowCall] = useState(false);

  // Handlers for modals
  const handleClaimClick = () => setShowClaim(true);
  const closeClaim = () => setShowClaim(false);
  const handleCallClick = () => setShowCall(true);
  const closeCall = () => setShowCall(false);

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend
    alert('Claim request submitted!');
    closeClaim();
  };

  return (
    <div className="main">
      <div className="navbar1">
        <div className="first">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAn8Q6P6ZFjRM3vLNyjPji8p0a7ZtMDvR9Kw&s"  alt="EMT" />
        </div>
        <img className="hand" src="money.png" alt="" />
        <span className="claim" style={{cursor:'pointer'}} onClick={handleClaimClick}>Claim Assistance</span>
        <img
          className="call"
          src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/4a90e2/external-headphone-business-management-kmg-design-basic-outline-kmg-design.png"
          width="25"
          height="25"
          alt=""
          style={{cursor:'pointer'}} onClick={handleCallClick}
        />
        <span className="claim" style={{cursor:'pointer'}} onClick={handleCallClick}> Call us</span>
      </div>
      {/* Claim Modal */}
      {showClaim && (
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.3)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'white',borderRadius:8,padding:32,minWidth:320,boxShadow:'0 4px 24px rgba(0,0,0,0.18)',position:'relative'}}>
            <button onClick={closeClaim} style={{position:'absolute',top:8,right:12,background:'none',border:'none',fontSize:22,cursor:'pointer',color:'#888'}}>&times;</button>
            <h2 style={{marginTop:0,color:'#1976d2'}}>Claim Assistance</h2>
            <form onSubmit={handleClaimSubmit} style={{display:'flex',flexDirection:'column',gap:12}}>
              <input type="text" placeholder="Policy Number" required style={{padding:8,borderRadius:4,border:'1px solid #ccc'}} />
              <input type="text" placeholder="Registered Name" required style={{padding:8,borderRadius:4,border:'1px solid #ccc'}} />
              <input type="email" placeholder="Email" required style={{padding:8,borderRadius:4,border:'1px solid #ccc'}} />
              <textarea placeholder="Describe your claim" required rows={4} style={{padding:8,borderRadius:4,border:'1px solid #ccc',resize:'vertical'}} />
              <button type="submit" style={{background:'#1976d2',color:'white',border:'none',borderRadius:4,padding:'10px 0',fontWeight:600,fontSize:16,cursor:'pointer'}}>Submit Claim</button>
            </form>
          </div>
        </div>
      )}
      {/* Call Modal */}
      {showCall && (
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.3)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'white',borderRadius:8,padding:32,minWidth:320,boxShadow:'0 4px 24px rgba(0,0,0,0.18)',position:'relative',textAlign:'center'}}>
            <button onClick={closeCall} style={{position:'absolute',top:8,right:12,background:'none',border:'none',fontSize:22,cursor:'pointer',color:'#888'}}>&times;</button>
            <h2 style={{marginTop:0,color:'#1976d2'}}>Call Us</h2>
            <p style={{fontSize:18,margin:'20px 0'}}>Our support team is available 24x7</p>
            <a href="tel:+911234567890" style={{fontSize:22,color:'#1976d2',fontWeight:700,textDecoration:'none'}}>+91 12345 67890</a>
            <p style={{marginTop:16,fontSize:14,color:'#555'}}>Click the number to call (on mobile)</p>
          </div>
        </div>
      )}
      <div className="form">
        <div className="left">
          <div className="img-b">
            <AutoImageSlider />
          </div>
        </div>
        <div className="right">
          <div className="headings">
            <h1 style={{ marginBottom: "0px" }}>
              <span className="span1">1 Crore </span>
              <span className="blk">life cover at </span>
              <span className="span2">₹490</span>
              <span style={{ fontSize: "24px" }}>/month</span>
              <span className="span3">+</span>
            </h1>
          </div>
          <div className="head2">Get insured from the comfort of your home</div>
          <div className="head3">
            <p>No Medical Tests Required</p>
            <p>COVID-19 covered</p>
          </div>

          <form className="forms">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={(e) => {
                setGender(e.target.value);
                handleChange();
              }}
              name="gender"
            >
              <ToggleButton value="male">Male</ToggleButton>
              <ToggleButton value="female" className="female-btn">
                Female
              </ToggleButton>
            </ToggleButtonGroup>
            <br />
            <TextField
              className="Name"
              label="Full Name"
              variant="outlined"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              className="Name"
              label="Date of Birth"
              variant="outlined"
              placeholder="DD/MM/YYYY"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
            <TextField
              maxLength="10"
              type="Number"
              className="Name"
              label="Mobile Number"
              variant="outlined"
              placeholder="Your Mobile Number"
              name="mobile"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <br />
            <Button
              variant="contained"
              className="Button"
              onClick={() => {
                handleSubmit();
              }}
            >
              View Plans  →
            </Button>
          </form>
          <div className="secure">
            <img
              src="https://termlife.policybazaar.com/assets/images/lock.svg"
              alt=""
            />
            Your personal information is secure with us
          </div>
          <br />
          <div className="policy">
            By clicking, you agree to our <span>Privacy policy</span>,
            <span>Terms of Use</span> & <span>Disclaimers</span>
          </div>
          <div className="whts">
            <img
              src="https://static.pbcdn.in/term-cdn/images/images/term_whatsapp.svg"
              alt=""
            />
            <span>Get updates on WhatsApp</span>
            <Switch {...label} />
          </div>
        </div>
      </div>
      <div className="form2">
        <h3 className="know-more" onClick={handleDetails}>
          <span>Know More about life insurance</span>
        </h3>
        {/* <br /> */}
        {details ? (
          <div className="details">
            <h3>Term Life Insurance</h3>
            <ul>
              <li>
                Term Life insurance provides coverage for a fixed period of time
                at a fixed premium rate.
              </li>
              <li>
                In case of untimely death of the life insured during the policy
                term , the nominee of the life insured gets the Total
                Payout/Benefit. The benefit can be paid out as a lump sum payout
                or a combination of Lump sum & Monthly payout or only as a
                Monthly payout.
              </li>
              <li>
                Therefore Term insurance plans are said to be pure protection
                plans which ensure financial stability of the dependants in case
                of untimely death of the life insured.
              </li>
            </ul>
            <h3>Benefits of Term Life Insurance</h3>
            <ul>
              <li>
                Death Benefit: In the unfortunate event of death of life insured
                during policy term, the nominee shall receive the Total Payout
                as a Lump sum amount or a combination of Lump sum & Monthly
                amount.
              </li>
              <li>
                Lump sum amount to take care of immediate financial liabilities.
              </li>
              <li>Monthly income to sustain the family lifestyle.</li>
              <li>
                Tax Benefit: The premiums paid for Term Life Insurance are Tax
                free under section 80(C) upto an amount of Rs 1,50,000.
              </li>
              <li>
                Rider Benefits: Riders are an important addition to the basic
                plan offering & provide an option to customize the coverage to
                the life insured.
              </li>
              <li>
                Accidental Death Benefit rider offers an additional sum assured
                over the base plan offering in case death occurs due to an
                accident.
              </li>
              <li>
                Accidental Disability rider offers an immediate lump sum payment
                on occurrence of any disability due to an accident.
              </li>
              <li>
                Critical illness rider offers an additional sum assured over the
                base plan offering if the life insured is diagnosed with one of
                the critical illnesses mentioned in the rider.
              </li>
              <li>
                Waiver of Premium rider offers the waiver of all policy premiums
                in case the life insured is diagnosed permanent disability or
                critical illness.
              </li>
              <li>
                Option to increase Death benefit: Certain plans have offerings
                where the life insured can increase the life cover at key stages
                in life like marriage , birth of child.
              </li>
            </ul>
            <h3>Key Terms when comparing Term Life insurance plans</h3>
            <ul>
              <li>Total Payout of each plan</li>
              <li>Premium amount paid for desired Total Payout</li>
              <li>Policy term offered</li>
              <li>High claim settlement ratio</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
