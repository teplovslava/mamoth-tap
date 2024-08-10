import React, { useContext, useState } from "react";
import { calculateFontSize } from "../helper/calculateFontSize";

import coinsIcon from "../assets/icons/icon__coins.svg";
import tasksIcon from '../assets/icons/icon__tasks.svg'
import fermIcon from '../assets/icons/icon__ferm.svg'
import walletIcon from '../assets/icons/icon__wallet.svg'
import Timer from "./Timer";
import { LvlContext } from "../store/levelContext";

export default function ControlPanel({ count }) {
  const [unlimited, setUnlimited] = useState(false);
  const [autoFarm, setAutoFarm] = useState(false);
  const [bust, setBust] = useState(false);
  const [level, setLevel] = useContext(LvlContext);

  const colors = ['#9B9B9B','#9B9B9B','#9B9B9B','#fff','#9B9B9B','#9B9B9B']

  const userInfo = {
    name: "Nickname",
    levelCurrent: 9,
    levelMax: 20,
  };



  const formatCount = new Intl.NumberFormat("en-US").format(count); // форматирует число

  const countFontSize = calculateFontSize(formatCount, 50, 7); // динамически считает размер
  const smallCountFontSize = calculateFontSize(formatCount, 18, 7);

  const unlimitedClick = () => {
    setUnlimited((prev) => !prev);
  };

  const autoFarmClick = () => {
    setAutoFarm((prev) => !prev);
  };

  const bustClick = () => {
    setBust((prev) => !prev);
  };


  return (
    <div className="flex flex-row items-center gap-[10px] justify-between w-full">
      <div className="flex flex-col gap-[10px]">
        <button
          onClick={unlimitedClick}
          className="elem-bg_green text-[10px]  font-comic rounded-[13px] flex flex-col items-center justify-center p-[8px]"
        >
          <span
            className={`font-bold text-[22px] ${
              unlimited ? "text-gradient" : "text-gradient_red"
            }`}
          >
            {unlimited ? "ON" : "OFF"}
          </span>
          <span className="text-gradient">Безлимит</span>
        </button>
        <button
          onClick={autoFarmClick}
          className="elem-bg_green text-[10px]  font-comic rounded-[13px] flex flex-col items-center justify-center p-[8px]"
        >
          <span
            className={`font-bold text-[22px] ${
              autoFarm ? "text-gradient" : "text-gradient_red"
            }`}
          >
            {autoFarm ? "ON" : "OFF"}
          </span>
          <span className="text-gradient">Auto Farm</span>
        </button>
        <button
          onClick={bustClick}
          className="elem-bg_green text-[10px]  font-comic rounded-[13px] flex flex-col items-center justify-center p-[8px]"
        >
          <span
            className={`font-bold text-[22px] ${
              bust ? "text-gradient" : "text-gradient_red"
            }`}
          >
            {bust ? "ON" : "OFF"}
          </span>
          <span className="text-gradient">Буст</span>
        </button>
      </div>
      <div className="flex flex-col items-center gap-[5px]">
        <p className="text-sm text-white font-comic font-bold">
          Level <span>{userInfo.levelCurrent}</span>
          <span className="text-[#9B9B9B]">/{userInfo.levelMax}</span>
        </p>
        <p
          style={{ fontSize: countFontSize }}
          className="text-gradient font-comic font-bold"
        >
          {formatCount}
        </p>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <img className="w-[32px]" src={coinsIcon} alt="" />
          <p className="flex flex-row items-center">
            <span
              style={{ fontSize: smallCountFontSize }}
              className="text-lg font-comic font-bold text-[#FFCC48]"
            >
              {formatCount}
            </span>
            <span
              style={{color:colors[level - 1]}}
              className={`text-sm font-comic font-bold flex flex-row items-center`}
            >
              / <Timer time={1723459094734}/>
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <button className="pointer-events-none opacity-50 elem-bg_green text-[10px]  font-comic rounded-[13px] flex flex-col items-center justify-center p-[8px]">
          <img className="relative top-[-18px] mb-[-15px]" src={tasksIcon} alt="" />
          <span className="text-gradient">Задания</span>
        </button>
        <button className="elem-bg_green text-[10px]  font-comic rounded-[13px] flex flex-col items-center justify-center p-[8px]">
          <img className="relative top-[-18px] mb-[-15px]" src={walletIcon} alt="" />
          <span className="text-gradient">Кошелек</span>
        </button>
        <button className="pointer-events-none opacity-50 elem-bg_green text-[10px]  font-comic rounded-[13px] flex flex-col items-center justify-center p-[8px]">
          <img className="relative top-[-18px] mb-[-15px]" src={fermIcon} alt="" />
          <span className="text-gradient">Ферма</span>
        </button>
      </div>
    </div>
  );
}
