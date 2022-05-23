import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Auctions from "./Components/Auctions";
import Collection from "./Components/Collections";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import News from "./Components/News";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import SubmitVehicle from "./Components/SubmitVehicle";
import PrivateRoute from "./Routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const auth = localStorage.getItem("token");
  const chk_user = localStorage.getItem("user");

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Signin />} />

          <Route element={<PrivateRoute />}>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/auctions" element={<Auctions />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/submitvehicle" element={<SubmitVehicle />} />
            {/* <Route exact path="/submitvehicle" element={<SubmitVehicle />} /> */}
            {/* {auth ? (
              <Route exact path="/collections" element={<Collection />} />
            ) : (
              <Route exact path="/" element={<Signin />} />
            )} */}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>page not found</p>
                </main>
              }
            />{" "}
          </Route>

          <Route exact path="/collections" element={<Collection />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      //{" "}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
