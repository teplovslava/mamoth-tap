import AutoFarm from "../pages/AutoFarm";
import Dashboard from "../pages/Dashboard";
import Lottery from "../pages/Lottery";
import Main from "../pages/Main";
import Wallet from "../pages/Wallet";

export const routes = [
  {
    path: "/",
    element: <Main />,
    label: "Games",
    icon: "mamoth",
    visible:true
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Дашборд",
    icon:"dashboard",
    visible:true
  },
  {
    path: "/auto-farm",
    element: <AutoFarm />,
    label: "Auto Farm",
    icon:"autofarm",
    visible:true
  },
  {
    path: "/lottery",
    element: <Lottery />,
    label: "Лоторея",
    icon: "lottery",
    visible:true
  },
  {
    path: "/wallet",
    element: <Wallet />,
    label: "Лоторея",
    icon: "wallet",
    visible:false
  },
];
