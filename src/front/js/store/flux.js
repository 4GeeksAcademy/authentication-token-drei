const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null,
            user: null,
            logged: false,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			printStore: () => {
				return getStore
			},


			createUser: async (userName, email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/signUp", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						
						body: JSON.stringify({
							"user_name": userName,
							"email": email,
							"password": password
						})
					});
			
					if (response.ok) {
						const data = await response.json();
						console.log(data)
						return true;
					} else {
						alert("There has been some error, please check it out.");
						return false;
					}
				} catch (error) {
					console.error("There was an error:", error);
					return false;
				}
			},

			loginUser: async (email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						body: JSON.stringify({
							"email": email,
							"password": password
						}),
						headers: {
							"Content-Type": "application/json",
							'Accept': 'application/json',
							mode: 'no-cors',
						}
					});
			
					if (response.ok) {
						const data = await response.json();
						console.log(data)
						setStore({
							message: null,
							user: data.user.email,
							token: data.token,
							logged: true
						});
						console.log(data.token)
						console.log(data.user.email)
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("userID", data.user.id);
						/* window.location = '/private';  */
						
						console.log(store)
						console.log(getState)
						return true;
					} else {
						alert("There has been some error, please check it out.");
						return false;
					}
				} catch (error) {
					console.error("There was an error:", error);
					return false;
				}
			},

			verifyToken: async () =>{

				const token = sessionStorage.getItem("token");
				
				try{
					if (!token) {
						// Si no hay token, el usuario no está autenticado
						setStore({ logged: false });
						window.location = '/login';
						return false;
					}
								
				}
				catch (error){
					console.error('idk what happened but u have an error g')
					setStore({ logged: false });
					return false
				}
				return true
								
			},

			logout: async () => {
				setStore({
					message: null,
					user: null,
					token: null,
					logged: false
				});

				return ("a la mierda")
			},
			
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello",{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							mode: 'no-cors',
						},
						
						body: JSON.stringify({
							"user_name": userName,
							"email": email,
							"password": password
						})
					});
					
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
