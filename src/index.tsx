import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserService from "./keycloak";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const renderer = () =>
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);

UserService.initKeycloak(renderer);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
