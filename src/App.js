import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import BottomNav from "./component/BottomNav";
import Guide from "./pages/Guide";
import Loading from "./pages/Loading";
import Wallet from "./pages/Wallet";
import { LvlContext } from "./store/levelContext";
import usePreloadImage from "./hooks/usePreloadImage";

import bgMain1 from "./assets/images/bg-main-1.png";
import bgMain2 from "./assets/images/bg-main-2.png";
import bgMain3 from "./assets/images/bg-main-3.png";
import bgMain4 from "./assets/images/bg-main-4.png";
import bgMain5 from "./assets/images/bg-main-5.png";
import bgMain6 from "./assets/images/bg-main-6.png";
import { imagesList } from "./image-list";




export default function App() {
  const [level, setLevel] = useContext(LvlContext);
  const [loading] = usePreloadImage(imagesList);


  const bgImages = [bgMain1, bgMain2, bgMain3, bgMain4, bgMain5, bgMain6];

  return (
    <div
      style={{ backgroundImage: `url(${bgImages[level - 1]})` }}
      className={`h-full bg-cover overflow-hidden relative`}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route path="/guide" element={<Guide />} />
            <Route path="/wallet" element={<Wallet />} />
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
          <BottomNav />
        </>
      )}
    </div>
  );
}
