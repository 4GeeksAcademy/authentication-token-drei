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


	return (
		<div className="text-center mt-5">
			<h2>Login</h2>
			<form>
				<div>
					<label className="" htmlFor="email">Email:</label>
					<input
						type="email" 
						id="email" 
						name="email" 
						value={email}
						placeholder= "your Email"
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
					placeholder= "password"
					onChange={(e)=> setPassword(e.target.value)}
					required/>
				</div>
				<div>
					<Link to="/private">
						<button onClick={handleClick} type="submit">Login</button>
					</Link>
				</div>
			</form>
		</div>
	);
};
