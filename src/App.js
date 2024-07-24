import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import BottomNav from "./component/BottomNav";
import Guide from './pages/Guide'

export default function App() {
  return (
    <div className="bg-bgMain h-full bg-cover overflow-hidden">
      <Routes>
        <Route path="guide" element={<Guide/>}/>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path}/>
        ))}
      </Routes>
      <BottomNav />
    </div>
  );
}
