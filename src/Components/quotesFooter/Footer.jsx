import styled from "styled-components";
import "./Footer.css";

export const QuotesFooter = () => {
  return (
    <div className="quotes-footer-container">
      <div>
        <P>
          #EMT is acting only as a facilitator and claims settlement
          shall be at the sole discretion of the Insurer
        </P>

        <P>**By choosing annual premium payment mode, you can save upto 5%.</P>

        <P>
          *Availability of non-medical and tele-medical underwriting are subject
          to disclosures made in the proposal form
        </P>

        <P>
          *Claims settlement for all companies are for individual death claims
          and have been rounded off to the closest first decimal.
        </P>

        <P>
          ...
        </P>

        <P>© Copyright insurance.emt.com. All Rights Reserved.</P>
      </div>
    </div>
  );
};

const P = styled.p`
  font-size: 11px;
  color: rgba(85, 111, 123, 0.8);
  font-family: Poppins, sans-serif;
`;
