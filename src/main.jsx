import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import './index.css'



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
        <div className="container mx-5 my-5">
            <App/>
        </div>
        </>
    </StrictMode>
)