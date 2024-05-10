import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import getState from "../store/flux";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleClick = async(e) => {
		e.preventDefault();
		e.stopPropagation();
		
		console.log(email, password)
		const triedToLogin = await actions.loginUser(email, password);
		if (triedToLogin) {
			navigate("/private")
			console.log(store)
		}
        else {
            return ({"error": "Login failed. Please check your credentials."});
        }


	}

	const handleGoToSignUp = (e) => {
		navigate('/')
	}


	return (
		<div className="m-5">
			<div className="backgroundLogin d-flex">
				<form className="my-form">
					<h2 className="mt-5 mb-5">Log In</h2>
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
							type="submit">Log in
							</button>					
					</div>
				</form>
				<div className="round">
						<h6 className="insideRound">Don't have an account?</h6>
						<button onClick={handleGoToSignUp}  
							className="insideRound"
							type="submit">Sign up
						</button>	
				</div>
			</div>
		</div>
	);
};