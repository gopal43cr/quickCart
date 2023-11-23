import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";

export default function RegBasicExample() {
  const [fullname,setFullname]= useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignup = () => {
    const data = {
      fullname: fullname,
      email: email,
      phone: phone,
      password: password,
    };

    axios.post("https://6e07-14-194-176-210.ngrok-free.app/auth/signup", data)
      .then(response => {
        console.log("Signup successful:", response.data);

        // Navigate to the "addShop" page on successful signup
        navigate("/addShop");
      })
      .catch(error => {
        console.error("Signup failed:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
            <TEInput
                type="text"
                placeholder="fullname"
                size="lg"
                className="mb-6"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              ></TEInput>
              <TEInput
                type="email"
                placeholder="email"
                size="lg"
                className="mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TEInput>
                 <TEInput
                type="tel"
                placeholder="phone"
                size="lg"
                className="mb-6"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TEInput>
              <TEInput
                type="password"
                placeholder="password"
                className="mb-6"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TEInput>
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="bg-green text-white px-4 py-2 rounded-md border-2 border-white"
                  onClick={handleSignup}
                >
                  Signup
                </button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <Link
    to="/"  // Set the correct path for your login page
    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
  >
    Login
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
