import React from "react";

const App = () =>(
<div className="signin">
<head>
	<title>Sign In</title>
	{/* <link rel="stylesheet" href="signin.css"/> */}
</head>
<body>
	<form>
		<h1>Sign In</h1>
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