import "./SignUpForm.css"
import { useState } from "react";

export default function SignUpForm() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // Instead of creating separate states for our form we can pass an obj to our state.

    // Object to store form data
    const formDataObj = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }
    // Create state for Form
    const [formData, setFormData] = useState(formDataObj);

    // Update my form data on form interaction
    const updateForm = (e) => {
        const changeKey = e.target.name;
        const newVal = e.target.value;
        setFormData(() => {
            return { ...formData, [changeKey]: newVal };
        });
    };
    // Reset the form when Submitted 
    const resetForm = () => {
        setFormData(() => {
            return {...formDataObj}
        })
    }

    // Return the form element
    return (
        <form className="SignUpForm">
            <h1>Login</h1>
            <label htmlFor="firstName">First Name </label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={updateForm}
            />

            <label htmlFor="lastName">Last Name </label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={updateForm}
            />

            <label htmlFor="email">Email </label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={updateForm}
            />
            <label htmlFor="password">Password </label>
            <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={updateForm}
            />

            <button onClick={(e) => {
                e.preventDefault();
                resetForm();
            }}>Submit</button>
        </form>
    );
}
