import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/private.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(10); // Contador inicializado en 10 segundos

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


	useEffect(() => {

		const timer = setTimeout(() => {
			navigate('/');
		}, 10000);

		const interval = setInterval(() => {
			setCountdown(prevCountdown => prevCountdown - 1);
		}, 1000); // Actualizar el contador cada segundo

		return () => {
		clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
		clearInterval(interval); // Limpiar el intervalo al desmontar el componente
		};

	}, [navigate, 10000]);

	return <div>Returning to Home in {countdown} seconds...</div>;
	

	return (
		<div className="text-center mt-5">
			<h1>Private</h1>
			<p>damn boy how did u got here</p>

			

			{store.logged === true && (
				<div>
					<h1>Welcome, {store.user.email}!</h1>
					<p><strong>Classified Information</strong></p>
					<button onClick={handleLogout}>Logout</button>
				</div>
			)}
			{store.logged === false && (
				<div>
					{returnToHomeWithTimer()}
					<h1>Unauthorized</h1>
					<p>You only could access with the correct credentials.</p>
									
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
