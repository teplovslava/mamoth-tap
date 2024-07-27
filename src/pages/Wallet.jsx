import React, { useState } from "react";
import lock from "../assets/images/wallet-lock.png";
import { Icon } from "../component/IconSprite";
import coinsSvg from "../assets/icons/icon__coins.svg";

export default function Wallet() {
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-full px-[17px]">
      <img className="w-[224px] " src={lock} alt="" />
      <div className="flex flex-col items-center mb-[40px] w-full">
        <h3 className="text-[32px] font-comic text-white font-bold  w-full text-center mb-[20px]">
          Кошелек
        </h3>
        {!isConnected ? (
          <>
            <p className="text-base font-comic text-white text-center mb-[50px]">
              Подключите свой кошелек для совершения покупок и получения
              вознаграждений{" "}
            </p>
            <button
              onClick={() => setConnected(true)}
              className={`font-comic text-sm text-black py-[15px] rounded-xl w-4/5 flex flex-row items-center justify-center gap-[10px] bg-gradient-to-b from-gradientStartColor to-gradientEndColor`}
            >
              Подключить свой кошелек
            </button>
          </>
        ) : (
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row items-center w-full gap-[10px]">
              <div className="flex-1 elem-bg_green p-[15px] rounded-[13px] flex flex-row gap-[10px] items-center">
                <Icon name="wallet-wallet" size={24} color="#45E9B8" />
                <p className="text-[14px] font-comic text-white">
                  jsdHG688...HJBBhmm
                </p>
                <Icon
                  styles={{ marginLeft: "auto" }}
                  name="cross"
                  size={24}
                  color="rgba(255,255,255,0.5)"
                />
              </div>
              <div className="elem-bg_green p-[15px] rounded-[13px]">
                <Icon name="copy" size={24} color="#45E9B8" />
              </div>
            </div>
            <div className="elem-bg_green p-[24px] rounded-[13px] flex flex-col gap-[10px] items-center">
              <div className="flex flex-row items-center gap-[10px] justify-center">
                <img className="w-[32px]" src={coinsSvg} alt="" />
                <p className="text-[#FFCC48] font-comic text-[24px]">+400</p>
              </div>
              <p className="text-white font-comic text-[14px]">Реферальных бонусов</p>
              <button
                className={`font-comic text-sm text-black py-[15px] rounded-xl w-full flex flex-row items-center justify-center gap-[10px] bg-gradient-to-b from-gradientStartColor to-gradientEndColor`}
              >
                Получить бонус
                <img className="w-[32px]" src={coinsSvg} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
