import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

export default function BasicExample() {

    const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleLogin = () => {
        // Prepare data to be sent in the request body
        const data = {
          email: email,
          password: password,
        };
    
        // Make a POST request using Axios
        axios.post("https://223e-14-194-176-210.ngrok-free.app/auth/login", data)
          .then(response => {
            // Handle success, e.g., show a success message
            console.log("Login successful:", response.data);
            navigate('/addShop')

          })
          .catch(error => {
            // Handle error, e.g., show an error message
            console.error("Login failed:", error.response ? error.response.data : error.message);
          });
      };
  return (
    <section className="h-screen ">
      <div className="h-full ">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              {/* <!--Sign in section--> */}
             

            

              {/* <!-- Email input --> */}
              <TEInput
                type="email"
                placeholder="email"
                size="lg"
                className="mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                placeholder="password"
                className="mb-6"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TEInput>

              

               

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
              <button
                  type="button"
                  className="bg-green text-white px-4 py-2 rounded-md border-2 border-white"
                  onClick={handleLogin}
                >
                  Login
                </button>


                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <Link
    to="/signup"  // Set the correct path for your login page
    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
  >
    Signup
  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}