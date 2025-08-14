import React from "react";
import "./Footer.css";
import { Margin, SpaceBar } from "@mui/icons-material";
function Footer() {
  return (
    <div className="global_div">
      <div className="title_div">
        <p>More products</p>
      </div>
      <div className="container_div">
        <div className="parent_inner_div">
          <div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtqTwuLwwkIOS4jlfaArkrbkwF_d6wy67EbZ0FkY1p5Ct04ICW"
              alt="img.."
            />
          </div>

          <div className="inner_container_div">
            <span style={{ fontSize: "16px", fontWeight: "900" }}>
              {" "}
              <strong>Genral Insurance</strong>
            </span>
            <p>Car Insurance</p>
            <p>Bike Insurance</p>
            <p>Motor Insurance</p>
            <p>Third Party Car Insurance</p>
            <p>Third Party Bike Insurance</p>
            <p>Traval Insurance</p>
            <p>Commercial Vehicle Insurance</p>
          </div>
        </div>

        <div className="parent_inner_div">
          <div>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe2MVRVnTtlpwqqTVwT5U-wZMD2nZTuMewXLp8dJEMS6ieZBdy"
              alt="img.."
            />
          </div>
          <div>
            <div className="inner_container_div">
              <p style={{ fontSize: "16px", fontWeight: "900" }}>
                <strong>Life Insurance</strong>
              </p>
              <p>Term Insurance</p>
              <p>Spouse Term Plan</p>
              <p>Return of Premium</p>
              <p style={{ fontSize: "16px", fontWeight: "900" }}>
                <strong>Other Insurance</strong>
              </p>
              <p>Group Health Insurance</p>
              <p>Other Genral Insurance Products</p>
              <p>Cancer Insurance</p>
              <p>Home Insurance</p>
            </div>
          </div>
        </div>

        <div className="parent_inner_div">
          <div>
            <img
              src="https://i.pinimg.com/236x/37/ec/a9/37eca9886c97a838a95a03e08ae50b72.jpg"
              alt="Investment"
              style={{ width: '90px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          <div>
            <div className="inner_container_div">
              <p style={{ fontSize: "16px", fontWeight: "900" }}>
                <strong>Investment</strong>
              </p>
              <p>Investment Plan</p>
              <p>Child Plan</p>
              <p>Pension Plan</p>
              <p>UPIs</p>
              <p>Money Back Policy</p>
              <p>Endowment Plan</p>
              <p>Guaranteed Return Plan</p>
              <p>Tax Saving Plan</p>
            </div>
          </div>
        </div>

        <div className="parent_inner_div">
          <div>
            <img
              src="https://img.freepik.com/premium-vector/health-insurance_313674-30609.jpg"
              alt="Health Insurance"
              style={{ width: '50px', height: '50px', objectFit: 'icon', borderRadius: '5px', Margintop: '15px'   }}
            />
          </div>
          <div>
            <div className="inner_container_div">
              <p style={{ fontSize: "16px", fontWeight: "900" }}>
                <strong>Health Insurance</strong>
              </p>
              <p>Health Insurance</p>

              <p>1cr Health Cover</p>
              <p>Family Health Insurance</p>
              <p>Senior Citizen Health Insurance</p>
              <p>Corona Kavach Policy</p>
              <p>Corona Rakshak Policy</p>
              <p>Arogya sanjeevani Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="terms_condition_div">
        <p>*Standerds Plans Terms and Condition apply</p>
      </div>
      <div className="icon_div">
        <span> Home </span>
        <span> AboutUs </span>
        <span> Careers </span>
        <span> Legal & Admin Policies </span>
        <span> ContactUs </span>
        <br/>
        <span className="social_icon">
          {" "}
          <img
            src="data:image/jpeg;base64,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"
            alt="facebook.."
          />{" "}
        </span>

        <span className="social_icon">
          {" "}
          <img
            src="https://img.freepik.com/free-vector/new-2023-twitter-x-logo-black-background_1017-45423.jpg?semt=ais_hybrid&w=740"
            alt="Twiter.."
          />{" "}
        </span>

        <span className="social_icon">
          {" "}
          <img
            src="data:image/jpeg;base64,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"
            alt="You_Tube..."
          />{" "}
        </span>

        <span className="social_icon">
          {" "}
          <img
            src="https://i.pinimg.com/736x/8b/54/2b/8b542bb8607e02395e5592c62df41456.jpg"
            alt="Instagram..."
          />{" "}
        </span>
        <span className="social_icon">
          {" "}
          <img
            src="https://i.pinimg.com/736x/92/d1/db/92d1db1521d374335498624cc95e9554.jpg"
            alt="Linkedin..."
          />{" "}
        </span>
      </div>
      <div className="payment_option_div">
        <div className="div1">
          <p style={{ fontSize: "16px" }}>Payment Methods</p>
          <div className="images_div">
            <div className="image_div">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSroLIfcIOlEfny8gZmXj9Ll1sLDGZqQ7_u1S_H5nfmxHOSNPWT"
                alt="visa.."
              />
            </div>

            <div className="image_div">
              {" "}
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTgwKnKE4GjSAx6dpFYI-TrkJsUJZsm_QbOpqm82DfDABkHTA2"
                alt="American_Express.."
              />
            </div>


            <div className="image_div">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUw_RLGNaGw1vaSbbGB9msUcQpw6lqsKRZ_boFhtaGzDsm8cBpg8W-7FgEjEKZThl2cI&usqp=CAU"
                alt="Net Banking Icon"
                style={{ height: 32, width: 'auto' }}
              />
            </div>

            <div className="image_div">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkOtiyPbmju0ibt9pCQRvSeAU_ibNWCnQvGWrxY2V2V8U1cv1b"
                alt="Rupay.."
              />
            </div>

            <div className="image_div">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVp7in662mjgpmOQL5T23u2tHcz-10Lz5aF7DZanRHgoW27h3F"
                alt="Master_Card.."
              />
            </div>

            <div className="image_div">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TYB3Pji6joRIr5Q3CmjoaXvnp3Ybk5vHX3FpncTxIegI4snv"
                alt="paytm.."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_div">
        <p>
          EdMedTech Insurance Policy
        </p>
        <p>92 and CG 14 Gulmohar
Enclave, Yusuf Sarai, Near
Green Park Metro
Station, New Delhi1100492</p>
        <p style={{ color: "#BDBDBD" }}>
          Contact Us 
        </p>
        <p>
          Ph No.: <a href="tel:7683067122">7683067122</a><br/>
          E-mail: <a href="mailto:edmedtechhealthcare@gmail.com">edmedtechhealthcare@gmail.com</a><br/>
          Website: <a href="http://www.edmedtech.com/" target="_blank" rel="noopener noreferrer">http://www.edmedtech.com/</a>
        </p>
        <p>© Copyright insurance.emt.com. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
