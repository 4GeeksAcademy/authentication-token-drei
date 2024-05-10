import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import '../.././styles/home.css';


export const NotFount = () => {
	const { store, actions } = useContext(Context);

	return (
		<div flex justify-center items-center h-screen>
			<h1>404</h1>
		</div>
	);
};


