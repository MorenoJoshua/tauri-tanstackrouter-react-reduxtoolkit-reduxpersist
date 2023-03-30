import React from 'react'
import {RootRoute, Router} from "@tanstack/react-router";
import RootComponent from "./navigation";
import {mainRoute} from "./main/navigation";

// Create a root route
export const rootRoute = new RootRoute({
    component: RootComponent,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
    mainRoute,
])


// Create the router using your route tree
export const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
