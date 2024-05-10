import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/private.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(); // Contador inicializado en 10 segundos

	const handleLogout = async(e) => {
		e.preventDefault();
		e.stopPropagation();
		const triedToLogout = await actions.logout();
		if (triedToLogout) {
			navigate("/")
			console.log(store) 
		}
        else {
            return ({"error": "Login failed. Please check your credentials."});
        }


	}

	useEffect(() => {
        if (!store.logged) {
            actions.verifyToken();
        }
    }, [store.logged]);

	console.log(store)


	/* useEffect(() => {
		const miPoya = async () => {
		const result = await actions.verifyToken();

		const interval = setInterval(() => {
			setCountdown(prevCountdown => prevCountdown - 1);
		}, 1000); // Actualizar el contador cada segundo

			if (!result) {const timer = setTimeout(() => {
				navigate('/');
			}, 10000);
	
			return () => {
			clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
			clearInterval(interval); // Limpiar el intervalo al desmontar el componente
			<div>Returning to Home in {countdown} seconds...</div>;
			}}
		}
		miPoya()
	}, [navigate, 10000]);  */

	return (
		<div className="text-center mb-5">
			<h1>Private</h1>
			

			

			{store.logged === true && (
				<div>
					<h1>Welcome, {store.user}!</h1>
					<p><strong>Classified Information</strong></p>
					<button className="btnPrivate" onClick={handleLogout}>Logout</button>
				</div>
			)}
			{store.logged === false && (
				<div className="privateTypeShi">
					{/* {returnToHomeWithTimer()} */}
					<p>damn boy how did u got here</p>
					<h1>Unauthorized</h1>
					<p>You can only access with the correct credentials.</p>
					<button className="btnPrivate" onClick={handleLogout}>Go Home</button>
									
				</div>
			)}
			{(store.logged !== true && store.logged !== false) && (
				<div>
					<h1>Authenticating</h1>
					<p>Checking..................</p>
				</div>
			)}
		</div>
	);
};
