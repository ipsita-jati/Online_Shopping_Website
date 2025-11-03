import React,{useState} from 'react'
import "./Login.css";

export default function LoginForm(){
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        let input = e.target.value;

         // Remove spaces at the beginning
        input = input.trimStart();

        // If +91 | already exists, remove it temporarily for processing
        if (input.startsWith("+91 | ")) {
            input = input.slice(6);
        }

        // If user types a letter or special symbol, remove the prefix
        if (/[^0-9]/.test(input)) {
            setValue(input);
            setError(""); // clear previous error
            return;
        }

        // Case 2️⃣: If the first character is a digit, add +91 |
        if (input.length > 0 && /^\d/.test(input)) {
            input = "+91 | " + input;
        }

        // Limit to +91 and 10 digits total
        if (input.length <= 16) {
            setValue(input);
            setError(""); // clear previous error
        }

        // Case 3: Empty input → clear
        if (input === "") {
            setValue("");
            setError("");
        }
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        let isValid = true;
        // Validate email if it doesn't start with +91 |
        if (!value.startsWith("+91 | ") && value.length > 0) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                setError("Please enter valid Email ID/Mobile number");
                isValid = false;
            } else {
                setError("");
            }
        }

        // Validate mobile if it starts with +91 |
        if (value.startsWith("+91 | ")) {
            const digits = value.slice(6);
            if (digits.length < 10) {
                setError("Please enter valid Email ID/Mobile number");
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
                    <h3>Login</h3>
                    <p>Get access to your Orders, Wishlist and Recommendations</p><br/>
                    <img src="https://img.freepik.com/premium-photo/3d-render-shopping-bags-cart-delivery-boxes-computer-pc-isolated-blue-background-new-technology-shopping-concept-online-store-banner-design-ecommerce_634053-22.jpg" alt=""/>
                </div>
                <div className='second-div'>
                    <div className="input-box">
                        <input type="text" id="mobile" value={value}
                            onChange={handleChange} style={{borderBottom: error ? "2px solid red" : "1px solid rgb(216, 211, 211)",}} required/>
                        <label for="mobile">Enter Email / Mobile Number</label>
                        {error && (
                            <div className="error">
                                {error}
                            </div>
                        )}
                        <button className="login-btn">Request OTP</button>
                        <div className="register-link">New User? <a href="/Register">Create an account</a></div>
                    </div>
                </div>
            </div>
        </form>
    )
};