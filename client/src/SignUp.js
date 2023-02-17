import React from "react";

const App = () =>(
<div className="signin">
<head>
	<title>Sign Up</title>

</head>
<body>
	<form>
		<h1>Sign Up</h1>
        <label for="full name" style={{"color":"white"}}>Full Name:</label>
		<input type="full name" id="full name" name="full name" required/>
		<label for="email" style={{"color":"white"}}>Email:</label>
		<input type="email" id="email" name="email" required/>
		<label for="password" style={{"color":"white"}}>Password:</label>
		<input type="password" id="password" name="password" required/>
		<button type="submit">Sign In</button>
	</form>
</body>

</div>
)


export default App;