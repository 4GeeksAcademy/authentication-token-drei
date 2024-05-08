import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/pruebaTypeShi.css";

import { Context } from "../store/appContext";

export const PruebaTypeShi = () => {
	const { store, actions } = useContext(Context);

	let loginForm = document.querySelector(".my-form");

	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let email = document.getElementById("email");
		let password = document.getElementById("password");

		console.log('Email:', email.value);
		console.log('Password:', password.value);
		// process and send to API 
	});

	return (
		<body>
			<div className="background">
			<div className="centering">
				<form className="my-form">
				<div className="login-welcome-row">
					<img
					className="login-welcome"
					src="astronaut.jpg"
					alt="Astronaut"
					/>
					<h1>LogIn!</h1>
				</div>
				<div className="text-field">
					<label htmlFor="email">Email:</label>
					<input
					aria-label="Email"
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					required
					/>
					<img
					alt="Email Icon"
					title="Email Icon"
					src="email.svg"
					/>
				</div>
				<div className="text-field">
					<label htmlFor="password">Password:</label>
					<input
					id="password"
					type="password"
					aria-label="Password"
					name="password"
					placeholder="Your Password"
					title="Minimum 6 characters at least 1 Alphabet and 1 Number"
					pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
					required
					/>
					<img
					alt="Password Icon"
					title="Password Icon"
					src="password.svg"
					/>
				</div>
				<input type="submit" className="my-form__button" value="Login" />
				<div className="my-form__actions">
					<div className="my-form__row">
					<span>Did you forget your password?</span>
					<a href="#" title="Reset Password">Reset Password</a>
					</div>
					<div className="my-form__signup">
					<a href="#" title="Create Account">Create Account</a>
					</div>
				</div>
				</form>
			</div>
			</div>
		</body>
	);
};
