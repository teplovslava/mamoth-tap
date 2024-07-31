import AutoFarm from "../pages/AutoFarm";
import Dashboard from "../pages/Dashboard";
import Lottery from "../pages/Lottery";
import Main from "../pages/Main";
import Wallet from "../pages/Wallet";

import mamothIcon from "../assets/icons/icon__nav-mamoth.png";
import dashboardIcon from "../assets/icons/icon__nav-dashboard.png";
import autofarmIcon from "../assets/icons/icon__nav-autofarm.png";
import lotteryIcon from "../assets/icons/icon__nav-lottery.png";
import gamesIcon from "../assets/icons/icon__nav-games.png";

export const routes = [
  {
    path: "/",
    element: <Main />,
    label: "Games",
    icon: mamothIcon,
    visible: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Дашборд",
    icon: dashboardIcon,
    visible: true,
  },
  {
    path: "/auto-farm",
    element: <AutoFarm />,
    label: "Auto Farm",
    icon: autofarmIcon,
    visible: true,
  },
  {
    path: "/lottery",
    element: <Lottery />,
    label: "Лоторея",
    icon: lotteryIcon,
    visible: true,
  },
  {
    path: "/games",
    element: null,
    label: "Games",
    icon: gamesIcon,
    visible: true,
  },
  {
    path: "/wallet",
    element: <Wallet />,
    label: null,
    icon: null,
    visible: false,
  },
];
