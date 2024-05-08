import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
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


	return (
		<div className="text-center mt-5">
			<h2>Sign Up</h2>
			<form>
				<div>
					<label className="" htmlFor="email">User name:</label>
					<input
						type="text" 
						id="newEmail" 
						name="newEmail" 
						value={userName}
						placeholder= "your username"
						onChange={(e)=> setUserName(e.target.value)} 
						required/>
				</div>
				<div>
					<label className="" htmlFor="email">Email:</label>
					<input
						type="email" 
						id="email" 
						name="email" 
						value={email}
						placeholder= "your email"
						onChange={(e)=> setEmail(e.target.value)} 
						required/>
				</div>
				<div>
					<label className="" htmlFor="password">Password:</label>
					<input
					type="password" 
					id="password" 
					name="password" 
					value={password}
					placeholder= "your password"
					onChange={(e)=> setPassword(e.target.value)}
					required/>
				</div>
				<div>
					
						<button onClick={handleClick} type="submit">Sign Up</button>
					
				</div>
			</form>
		</div>
	);
};
