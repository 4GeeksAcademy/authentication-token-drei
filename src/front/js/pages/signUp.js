import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signUp.css";
import 'tailwindcss/tailwind.css';
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function validarEmail(email) {
		const verifyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return verifyEmail.test(email);
	  }

	const handleClick = async(e) => {
		console.log(userName, email, password)
		e.preventDefault();
		e.stopPropagation();

		// Verificar si el email es válido antes de enviar la solicitud
		if (!validarEmail(email)) {
			alert("Por favor, introduce un email válido.");
			return;
		  }

		const triedToSignUp = await actions.createUser(userName, email, password);
		if (triedToSignUp) {
			navigate("/login")
		   }
        else {
            return ({"error": "Sign Up failed. Please check your credentials."});
        }
	}

	const handleGoToLogIn = (e) => {
		navigate('/login')
	}


	return (
		<div className="m-5">
			<div className="backgroundLogin d-flex">
				<form className="my-form">
					<h2 className="mt-5 mb-5">Sign Up</h2>
					<div className="text-field">
						<label className="" htmlFor="email"></label>
						<input
							type="text" 
							id="newEmail" 
							name="newEmail" 
							value={userName}
							placeholder= "Username"
							onChange={(e)=> setUserName(e.target.value)} 
							required/>
					</div>
					<div className="text-field">
						<label className="" htmlFor="email"></label>
						<input
							type="email" 
							id="email" 
							name="email" 
							value={email}
							placeholder= "Email"
							onChange={(e)=> setEmail(e.target.value)} 
							required/>
					</div>
					<div className="text-field">
						<label className="" htmlFor="password"></label>
						<input
						type="password" 
						id="password" 
						name="password" 
						value={password}
						placeholder= "Password"
						onChange={(e)=> setPassword(e.target.value)}
						required/>
					</div>
					<div className="yurButton mt-4">
							<button onClick={handleClick}  
							className=""
							type="submit">Sign up
							</button>					
					</div>
				</form>
				<div className="round">
						<h6 className="insideRound">Already a member?</h6>
						<button onClick={handleGoToLogIn}  
							className="insideRound"
							type="submit">Log in
						</button>	
				</div>
			</div>
		</div>
	);
};
