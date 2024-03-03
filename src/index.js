import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import GA4React from "ga-4-react"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
try {
	setTimeout((_) => {
		const ga4react = new GA4React("G-07JGETDCYE")
		ga4react.initialize().catch((err) => console.error(err))
	}, 4000)
} catch (err) {
	console.error(err)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
