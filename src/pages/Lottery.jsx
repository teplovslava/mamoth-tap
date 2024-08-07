import React from "react";
import crownSvg from "../assets/icons/icon__crown.svg";

import star1 from "../assets/icons/icon__star1.svg";
import star2 from "../assets/icons/icon__star2.svg";
import star3 from "../assets/icons/icon__star3.svg";
import star4 from "../assets/icons/icon__star4.svg";
import star5 from "../assets/icons/icon__star5.svg";
import ticketIcon from "../assets/icons/icon__ticket.svg";
import key3 from "../assets/icons/key3.svg";
import case3 from "../assets/icons/case3.svg";
import BuyCard from "../component/BuyCard";

export default function Lottery() {
  const data = [
    {
      title: "Сильвер",
      icon: star1,
      count: 200,
      maxCount: 2000,
      present: "Lamborgini",
    },
    {
      title: "Голд",
      icon: star2,
      count: 700,
      maxCount: 2000,
      present: "Lamborgini",
    },
    {
      title: "Платина",
      icon: star3,
      count: 1200,
      maxCount: 2000,
      present: "Lamborgini",
    },
    {
      title: "Блек",
      icon: star4,
      count: 100,
      maxCount: 2000,
      present: "Lamborgini",
    },
    {
      title: "Ультима",
      icon: star5,
      count: 700,
      maxCount: 2000,
      present: "Lamborgini",
    },
  ];

  const cardData = {
    index: 2,
    colorClass: "elem-bg_yellow",
    title: "Покупка билетов лотереи",
    descr: "",
    image: case3,
    tarrifs: [
      {
        image: ticketIcon,
        time: "1 билет",
        count: 10,
      },
      {
        image: ticketIcon,
        time: "12 билетов",
        count: 20,
      },
      {
        image: ticketIcon,
        time: "30 билетов",
        count: 30,
      },
      {
        image: ticketIcon,
        time: "70 билетов",
        count: 40,
      },
      {
        image: ticketIcon,
        time: "20 билетов",
        count: 50,
      },
    ],
    btn: {
      text: "Купить",
      color: "#FFCD56",
      textColor: "#911B00",
      icon: key3,
      handler: () => alert("123"),
    },
    info: 'Купить можно неограниченное количество раз, тикеты начисляются за 1 покупку',
  };
  

  return (
    <div className=" py-[24px] px-[17px] flex flex-col items-center gap-[20px] pb-[100px] h-full overflow-auto">
      <div className="elem-bg_green px-[8px] rounded-[40px] w-auto flex flex-row items-center gap-[8px]">
        <img src={crownSvg} alt="" />
        <p className="font-comic text-gradient font-bold text-sm">
          Gold Status
        </p>
      </div>
      <p className="font-comic text-gradient text-[50px] font-bold">
        <span>223</span>
        <span className="text-[#9B9B9B] text-sm font-normal">/билет</span>
      </p>
      
      <BuyCard data={cardData} />
      <div
        className={`elem-bg_green px-[24px] py-[20px] rounded-[15px] w-full flex flex-col items-center gap-[12px]`}
      >
        <p className="w-[183px] text-white font-comic text-[18px] text-center">
          Чем выше статус, тем дороже подарок!
        </p>
        <p className="text-white font-comic text-[14px] text-center">
          Розыгрыш происход при достижении 1000000 купленных билетов, режимов
          авто клик, режимов безлимит.
        </p>
        <div className="flex flex-col w-full gap-[30px]">
          {data.map((item) => (
            <div className="w-full flex flex-col gap-[8px]">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-[10px] items-start">
                  <img src={item.icon} alt="" />
                  <p className="text-white font-comic text-[18px] font-bold">
                    {item.title}
                  </p>
                </div>
                <p className="text-[#45E9B8] font-comic text-[20px] font-bold">
                  {item.present}
                </p>
              </div>
              <div className="bg-[#7AC5AE]/50 w-full h-[10px] rounded-[10px] ">
                <div
                  className="h-full rounded-[10px] shadow-[#45E9B8] shadow-lg bg-gradient-to-b from-gradientStartColor to-gradientEndColor"
                  style={{ width: `${(item.count / item.maxCount) * 100}%` }}
                ></div>
              </div>
              <p className="text-center">
                <span className="text-[14px] text-white font-comic font-bold">
                  {item.count}
                </span>
                <span className="text-[14px] text-[#9B9B9B] font-comic font-bold">
                  /{item.maxCount}
                </span>
              </p>
            </div>
          ))}
          <button
            className={`font-comic text-sm text-black py-[15px] rounded-xl w-full flex flex-row items-center justify-center gap-[10px] bg-gradient-to-b from-gradientStartColor to-gradientEndColor`}
          >
            Повысить статус{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
