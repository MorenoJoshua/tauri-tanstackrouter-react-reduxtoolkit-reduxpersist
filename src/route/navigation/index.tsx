import {Link, Outlet} from "@tanstack/react-router";
import React from "react";

const NavLink = ({to, children, ...rest}: { to: string, children: React.ReactNode }) => (
// @ts-ignore
    <Link
        to={to}
        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        {...rest}>
        {children}
    </Link>
)

type NavButton = {
    to: string;
    text: string;
}

export const navButtons:NavButton[] = [];
const getNavButtons = () => navButtons; // It's a function so that it can be called after the navButtons array is populated

const RootComponent = () => (
    <>
        <header className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {getNavButtons().map((button, index) => (
                                    <NavLink key={index} to={button.to}>{button.text}</NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
    </>
);

export default RootComponent;
