import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEInput } from "tw-elements-react";

export default function ShopForm() {
  const [shopname,setShopname]= useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg,setMsg]=useState('');

  const navigate = useNavigate()


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if the selected file type is allowed
    if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
      // Do something with the selected file, e.g., store it in state
      setImage(file);
      setErrorMsg("");

    } else {
      // Handle invalid file type
      setErrorMsg("Please select a valid PNG, JPG, or JPEG file.");
      // You might want to clear the input or provide user feedback
    }
  };


  const handleShop= () => {
   
    // const shopData = {
    //   shopname: shopname,
    //   shopAddress: shopAddress,
    //   image: image,
    // };

    const shopData = new FormData();
    shopData.append("shopName", shopname);
    shopData.append("shopAddress", shopAddress);
    shopData.append("image", image);


    // Assuming you have a route on your server to handle signup
    axios.post("https://223e-14-194-176-210.ngrok-free.app/shop/add", shopData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        console.log("Signup successful:", response.data);

        // Navigate to the "addShop" page on successful signup
       setMsg("Shop Added")
      })
      .catch(error => {
        console.error("Signup failed:", error.response ? error.response.data : error.message);
        setMsg(" ")
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
                placeholder="Shopname"
                size="lg"
                className="mb-6"
                value={shopname}
                onChange={(e) => setShopname(e.target.value)}
              ></TEInput>
           
            <TEInput
                type="text"
                placeholder="Shopaddress"
                size="lg"
                className="mb-6"
                value={shopAddress}
                onChange={(e) => setShopAddress(e.target.value)}
              ></TEInput>

<TEInput
                type="file"
                placeholder="image"
                size="lg"
                className="mb-6"
                onChange={handleImageChange}
                accept=".png, .jpg, .jpeg"
              ></TEInput>
               
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="bg-green text-white px-4 py-2 rounded-md border-2 border-white"
                  onClick={handleShop}
                >
                  ADD Shop
                </button>
                
                
              </div>
            </form> 
            {msg && <p>{msg}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
