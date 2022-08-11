import { useState } from "react";
import axios from "axios";
import './loginpage.css';


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		// window.location.reload();
        // alert(`${data.firstName} Registered Successfully !!!!`)
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token",res.data._id);
			localStorage.setItem("name",res.data.firstName);
			 //console.log(res.data._id);
			window.location = "/homepage";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	
	return (
			<div className="main1">
			<div class="main">
				<div  class="login">
					<form onSubmit={handleSubmit} autoComplete="off">
						
					<label for="chk" aria-hidden="true">Login</label>
						
					
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							
						/>
						
						
				
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							
						/>
						
						{error && <div >{error}</div>}
						
						<button type="submit" >
							Sign In
						</button>
						
					</form>
				</div>
			</div>
			</div>
	
	);
};

export default Login;