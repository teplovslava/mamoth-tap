import AutoFarm from "../pages/AutoFarm";
import Dashboard from "../pages/Dashboard";
import Lottery from "../pages/Lottery";
import Main from "../pages/Main";
import Wallet from "../pages/Wallet";

import mamothIcon from "../assets/icons/icon__nav-mamoth.svg";
import dashboardIcon from "../assets/icons/icon__nav-dashboard.svg";
import autofarmIcon from "../assets/icons/icon__nav-autofarm.svg";
import lotteryIcon from "../assets/icons/icon__nav-lottery.svg";
import gamesIcon from "../assets/icons/icon__nav-games.svg";

export const routes = [
  {
    path: "/",
    element: <Main />,
    label: "Home",
    icon: mamothIcon,
    visible: true,
    disable: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Дашборд",
    icon: dashboardIcon,
    visible: true,
    disable: false,
  },
  {
    path: "/auto-farm",
    element: <AutoFarm />,
    label: "Auto Farm",
    icon: autofarmIcon,
    visible: true,
    disable: false,
  },
  {
    path: "/lottery",
    element: <Lottery />,
    label: "Лоторея",
    icon: lotteryIcon,
    visible: true,
    disable: false,
  },
  {
    path: "/games",
    element: null,
    label: "Games",
    icon: gamesIcon,
    visible: true,
    disable: true,
  },
  {
    path: "/wallet",
    element: <Wallet />,
    label: null,
    icon: null,
    visible: false,
    disable: false,
  },
];
