import { useState } from "react";
import "./PbAdvantage.css";
import { Popup } from "./popup/Popup";
import { PopupData } from "./popup/popupData";

export const PbAdvantage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="global_cont_div">
      <h2>EMT Advantage</h2>
      <div className="span_hr"></div>
      <div className="text_div">
        <p>
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers and being present for you in the toughest of times.
        </p>
      </div>
     

       <button className="btn_know_more" onClick={togglePopup}> Know more</button>

      {isOpen && <Popup
       handleClose={togglePopup}
       content={<div> <PopupData /> </div>}
      />}
      <div className="cont_div">
        <div  className="inner_cont_div">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxXWJagISKCGEv6aEr8QXsHIRaEA_EW-QGw&s" alt=""/>
          </div>
          <div>
            <p className="title_p"> The best Prices</p>
            <p className="para_p">Guaranteed</p>
          </div>
        </div>
        <div className="inner_cont_div">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunfYgvix2yT4T5rUx6lioBBRctnzM8qrDK_EvX5E8yYnxAbTpDyHOKrT1pjFjPncdunw&usqp=CAU" alt=""/>
          </div>

          <div>
            <p className="title_p">Unbiased Advice</p>
            <p className="para_p">Keeping customers first</p>
          </div>
        </div>
        <div className="inner_cont_div">
          <div>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHRcgnC-47MBXk4YE2F3qJ1D380vE30TS37N2Q1yVxOhxrpkGQ" alt=""/>
          </div>
          <div>
            <p className="title_p">100% Reliable</p>
            <p className="para_p">No Risks</p>
          </div>
        </div>
        <div className="inner_cont_div">
            <div><img src="https://img.freepik.com/premium-vector/online-doctor-consultation-concept-with-male-doctor-smartphone-display_7547-697.jpg" alt="" /></div>
            <div>
                <p className="title_p">Claims Support</p>
                <p className="para_p">Made stress-free

</p>
            </div>
        </div>
        <div className="inner_cont_div">
            <div><img src="https://img.freepik.com/premium-vector/happy-doctor-positive-healthcare_995281-61857.jpg?w=360" alt="" /></div>
            <div>
                <p className="title_p">Happy to Help

</p>
                <p className="para_p">Every day of the week

</p>
            </div>
        </div>
      </div>
    </div>
  );
};
