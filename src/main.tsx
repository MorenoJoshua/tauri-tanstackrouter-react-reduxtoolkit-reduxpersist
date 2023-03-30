import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {Provider} from "react-redux";
import {store} from "./store";
import {router} from "./route";
import {RouterProvider} from "@tanstack/react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
