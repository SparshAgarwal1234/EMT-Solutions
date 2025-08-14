import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./Components/TermlifeInsurance/Details";
import UseForm from "./Components/userForm/UseForm";
import { Quote } from "./Components/quotes/Quote";
import { ReviewDetails } from "./Components/userForm/reviewDetails";
import { QuotationPage } from "./pages/Quotations/QuotationPage";
import Payment from "./pages/Payment/Payment";
import HealthInsurance from "./Components/HealthInsurance/HealthInsurance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UseForm />}></Route>
        <Route path="/review" element={<ReviewDetails />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/quotationPage" element={<QuotationPage />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/health-insurance" element={<HealthInsurance />} />
      </Routes>
    </>
  );
}

export default App;
//   );
// // }

// // // export default App;
// // //         </Link>
// // //         <Link to="/health-insurance" className="footer-hov">
// // //           Senior Citizen Health Insurance
// // //         </Link>
// // //         <Link to="/health-insurance" className="footer-hov">
// // //           Health Insurance For Parents
// // //         </Link>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default App;
