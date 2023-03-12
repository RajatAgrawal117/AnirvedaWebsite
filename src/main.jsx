import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// Auth0 Provider
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4ctid16d4rtft2xs.us.auth0.com"
      clientId="fpcvfXJqVdmGPIZCqRnfUsQRn2IpHnMR"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/mockrbi/play", // for local testing
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
