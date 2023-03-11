import React, { lazy, Suspense } from "react";
const Login = lazy(() => import("../pages/publicPages/login"));
const Register = lazy(() => import("../pages/publicPages/register"));
const Dashboard = lazy(() => import("../pages/privatePages/index"));
const Applicaion = lazy(() => import("../pages/publicPages/application"));

export const Routing = [
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
    index: false,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Register />
      </Suspense>
    ),
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    index: false,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    name: "Application",
    path: "/application",
    index: false,
    element: (
      <Suspense fallback={<h1>Loading Please wait..</h1>}>
        <Applicaion />
      </Suspense>
    ),
  },
];
