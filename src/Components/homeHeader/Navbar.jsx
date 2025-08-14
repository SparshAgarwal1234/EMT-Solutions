import "./Navbar.css";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { SignInButton } from "@clerk/clerk-react";
function Navbar() {
  const [state, setState] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showClaim, setShowClaim] = useState(false);

  const display = () => {
    setState(!state);
  };

  const handleSupportClick = () => {
    setShowSupport(true);
  };

  const closeSupport = () => {
    setShowSupport(false);
  };
  return (
    <>
      <div className="navbar">
        <div>
          <img
            className="logo-s"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAn8Q6P6ZFjRM3vLNyjPji8p0a7ZtMDvR9Kw&s"
            alt="logo"
          />
        </div>
        <div className="navbar-insu" onMouseOver={display}>
          <p>Insurance Products</p>
          <svg
            width="12"
            height="8"
            className="navbar-vec"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z"
              fill="#0663F6"
            />
          </svg>
        </div>
        <div className="navbar-rev renew-dropdown">
          <p>Renew Your Policy</p>
          <svg
            width="12"
            height="8"
            className="navbar-vec1"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z"
              fill="#0663F6"
            />
          </svg>
          <div className="renew-dropdown-content">
            <form className="renew-form">
              <input type="text" placeholder="Policy Number" required />
              <input type="text" placeholder="Registered Mobile/Email" required />
              <button type="submit">Renew Now</button>
            </form>
            <ul className="renew-list">
              <li>✔ Quick renewal in 2 steps</li>
              <li>✔ Renewal reminders via SMS/Email</li>
              <li>✔ No inspection required for on-time renewal</li>
              <li>✔ 24x7 renewal support</li>
            </ul>
            <a href="/renewal-faqs" className="renew-faq">Renewal FAQs</a>
          </div>
        </div>
        <div className="navbar-file" onClick={() => setShowClaim(true)} style={{cursor: 'pointer'}}>
          <p>File a claim</p>
        </div>
        <div className="navbar-sur" onClick={handleSupportClick} style={{cursor: 'pointer'}}>
          <p>Support</p>
          <svg
            width="12"
            height="8"
            className="navbar-vec2"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0339 0.299899L5.73911 4.59108L1.44793 0.296255L0.0333353 1.70965L5.73791 7.41908L11.4473 1.7145L10.0339 0.299899Z"
              fill="#0663F6"
            />
          </svg>
        </div>
        <div className="navbar-sign">
          <SignInButton mode="modal">
            <button>Sign in</button>
          </SignInButton>
        </div>
      </div>
      {state && <Dropdown />}
      {/* Claim Modal */}
      {showClaim && (
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.3)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'white',borderRadius:8,padding:32,minWidth:320,boxShadow:'0 4px 24px rgba(0,0,0,0.18)',position:'relative'}}>
            <button onClick={()=>setShowClaim(false)} style={{position:'absolute',top:8,right:12,background:'none',border:'none',fontSize:22,cursor:'pointer',color:'#888'}}>&times;</button>
            <h2 style={{marginTop:0,color:'#1976d2'}}>Claim Assistance</h2>
            <form onSubmit={e => {e.preventDefault(); alert('Claim request submitted!'); setShowClaim(false);}} style={{display:'flex',flexDirection:'column',gap:12}}>
              <input type="text" placeholder="Policy Number" required style={{padding:8,borderRadius:4,border:'1px solid #ccc'}} />
              <input type="text" placeholder="Registered Name" required style={{padding:8,borderRadius:4,border:'1px solid #ccc'}} />
              <input type="email" placeholder="Email" required style={{padding:8,borderRadius:4,border:'1px solid #ccc'}} />
              <textarea placeholder="Describe your claim" required rows={4} style={{padding:8,borderRadius:4,border:'1px solid #ccc',resize:'vertical'}} />
              <button type="submit" style={{background:'#1976d2',color:'white',border:'none',borderRadius:4,padding:'10px 0',fontWeight:600,fontSize:16,cursor:'pointer'}}>Submit Claim</button>
            </form>
          </div>
        </div>
      )}
      {/* Support Modal */}
      {showSupport && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{background: 'white', borderRadius: 8, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.18)', position: 'relative'}}>
            <button onClick={closeSupport} style={{position: 'absolute', top: 8, right: 12, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888'}}>&times;</button>
            <h2 style={{marginTop: 0, color: '#d32f2f'}}>Contact Support</h2>
            <form onSubmit={e => {e.preventDefault(); alert('Support request submitted!'); closeSupport();}} style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <input type="text" placeholder="Your Name" required style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
              <input type="email" placeholder="Your Email" required style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
              <textarea placeholder="How can we help you?" required rows={4} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc', resize: 'vertical'}} />
              <button type="submit" style={{background: 'red', color: 'white', border: 'none', borderRadius: 4, padding: '10px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer'}}>Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
