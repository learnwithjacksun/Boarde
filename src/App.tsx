import { Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./Contexts/AuthProvider";

import Auth from "./Components/Pages/Auth";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import AddCategory from "./Components/Pages/AddCategory";
import DataProvider from "./Contexts/DataProvider";
import Items from "./Components/Pages/Items";
import ProtectedRoute from "./Components/Global/ProtectedRoute";
const App = () => {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Auth />} />

            <Route element={<Layout />}>
              <Route
                path="/home"
                element={<ProtectedRoute element={<Home />} />}
              />
              <Route
                path="/add-category"
                element={<ProtectedRoute element={<AddCategory />} />}
              />
              <Route
                path="/:id"
                element={<ProtectedRoute element={<Items />} />}
              />
            </Route>
          </Routes>
        </DataProvider>
      </AuthProvider>
    </>
  );
};

interface PrivateRouteProps {
  path: string;
  element: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/" />;
};

export default App;
