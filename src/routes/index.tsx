import React, { lazy, ReactElement, Suspense } from "react";
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/Register"));
const Dashboard = lazy(() => import("../pages/gatePassPanel/index"));
const Applicaion = lazy(() => import("../pages/Application"));

export interface Routes {
  name: string;
  path: string;
  index: boolean;
  element: ReactElement;
}

export const Routing: Array<Routes> = [
  {
    name: "Login",
    path: "/",
    index: true,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Login />
      </Suspense>
    ),
  },
  {
    name: "Register",
    path: "/register",
    index: true,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Register />
      </Suspense>
    ),
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    index: true,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    name: "Application",
    path: "/application",
    index: true,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Applicaion />
      </Suspense>
    ),
  },
];
