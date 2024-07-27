import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import BottomNav from "./component/BottomNav";
import Guide from './pages/Guide'
import Loading from "./pages/Loading";
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <div className="bg-bgMain h-full bg-cover overflow-hidden">
      {/* <Loading/> */}
      <Routes>
        <Route path="/guide" element={<Guide/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path}/>
        ))}
      </Routes>
      <BottomNav />
    </div>
  );
}
