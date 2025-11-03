import React,{useState} from 'react'
import "./Register.css";

export default function RegisterForm(){
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        let input = e.target.value;

        // If +91 | already exists, remove it temporarily for processing
        if (input.startsWith("+91 | ")) {
            input = input.slice(6);
        }

        // Allow only digits
        input = input.replace(/\D/g, "");

        // Automatically add +91 if the user types something
         if (input.length > 0) {
            input = "+91 | " + input;
        }

        // Limit to +91 | and 10 digits total
        if (input.length <= 16) {
            setValue(input);
            setError(""); // clear previous error
        }
    };
   
    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        let isValid = true;
        if (value.startsWith("+91 | ")) {
            const digits = value.slice(6);
            if (digits.length < 10) {
                setError("Please enter valid Mobile number");
                isValid = false;
            } else {
                setError("");
            }
        }
        if (isValid) {
            alert("Form submitted successfully!\nValue: " + value);
            setValue(""); // reset input
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className='first-div'>
                    <h3>Looks like you are new here!</h3>
                    <p>Sign up with your mobile number to get started</p>
                    <img src="https://img.freepik.com/premium-photo/3d-render-shopping-bags-cart-delivery-boxes-computer-pc-isolated-blue-background-new-technology-shopping-concept-online-store-banner-design-ecommerce_634053-22.jpg" alt=""/>
                </div>
                <div className='second-div'>
                    <div className="input-box">
                        <input type="text" id="mobile" value={value}
                            onChange={handleChange} style={{borderBottom: error ? "2px solid red" : "1px solid rgb(216, 211, 211)",}} required />
                        <label for="mobile">Enter Mobile Number</label>
                        {error && (
                            <div className="error">
                                {error}
                            </div>
                        )}
                        <button type="submit" className="login-btn">CONTINUE</button>
                        <div className="register-link">Existing User? <a href="/Login">Log In</a></div>
                    </div>
                </div>
            </div>
        </form>
    )
}
