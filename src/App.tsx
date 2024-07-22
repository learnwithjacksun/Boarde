import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Pages/Auth";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import AddCategory from "./Components/Pages/AddCategory";
import DataProvider from "./Contexts/DataProvider";
import Items from "./Components/Pages/Items";
const App = () => {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Auth />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/:id" element={<Items />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
