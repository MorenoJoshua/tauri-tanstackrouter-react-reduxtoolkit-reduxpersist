import {Route} from "@tanstack/react-router";
import {rootRoute} from "../index";
import {navButtons} from "../navigation";

const mainRoute = new Route({
    path: "/",
    getParentRoute: () => rootRoute,
    component: () => <div>Main</div>,
})
navButtons.push({to: '/', text: "Main"})

export {mainRoute}
