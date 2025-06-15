import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "./components/Loading.jsx";
import { ROUTER } from "./routes/router.jsx";
import Signnup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import AuthForm from "./pages/Login.jsx";
import App from "./App";  // Import the App component
import { ThemeProvider } from "./ThemeContext"; // Import ThemeProvider

const renderRoute = (routers) => {
  return routers.map(({ path, element: Element, children, index }) => {
    if (!path && children) {
      return renderRoute(children);
    }

    const wrappedElement = Element && (
      <Suspense fallback={<Loading />}>
        <Element />
      </Suspense>
    );

    if (index) {
      return <Route key={path || "index"} index element={wrappedElement} />;
    }

    if (path) {
      return (
        <Route key={path} path={path} element={wrappedElement}>
          {children && renderRoute(children)}
        </Route>
      );
    }

    return [];
  });
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap the app with ThemeProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {renderRoute(ROUTER)}
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signnup />} />
            <Route path="/login" element={<AuthForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
