import { useState } from "react";
import axios from "axios";
import './loginpage.css';
import {useNavigate } from "react-router-dom";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		<div  class="main">
			<div class="signup">
					<form onSubmit={handleSubmit} autoComplete="off">
					<label for="chk" aria-hidden="true">Sign up</label>
						
				
						<input
							type="text"
							placeholder="User name" 
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required	
						/>
						
					
						
						
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
						<button type="submit">
							Sign Up
						</button>
					</form>
				
			</div>
		</div>
		</div>
	);
};

export default Signup;