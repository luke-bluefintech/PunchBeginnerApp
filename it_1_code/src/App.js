import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Layout" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}