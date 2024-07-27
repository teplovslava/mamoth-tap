import React, { memo } from "react";
import { Icon } from "./IconSprite";
import { NavLink, useNavigate } from "react-router-dom";

function MainPageHeader({setLangSelectOpen}) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row w-full gap-[7px]">
      <div className="flex flex-1 flex-row items-center justify-start gap-[10px] mb-[25px] elem-bg_green py-[7px] px-[10px] rounded-[10px]">
        <div className="elem-bg_green p-[5px] rounded-full ">
          <Icon name="mamoth" size={20} />
        </div>
        <p className="text-sm text-white font-comic">Никнейм</p>
      </div>
      <button onClick={() => navigate('/wallet')} className="flex flex-row items-center justify-between gap-[10px] mb-[25px] elem-bg_green py-[7px] px-[10px] rounded-[10px]">
        <Icon name={'wallet'} size={24}/>
      </button>
      <button onClick={() => navigate('/guide')} className="flex flex-row items-center justify-between gap-[10px] mb-[25px] elem-bg_green py-[7px] px-[10px] rounded-[10px]">
        <Icon name={'info'} size={24}/>
      </button>
      <button onClick={() => setLangSelectOpen(true)} className="flex flex-row items-center justify-between gap-[10px] mb-[25px] elem-bg_green py-[7px] px-[10px] rounded-[10px] font-comic text-white">
        Eng
      </button>
    </div>
  );
}

export default memo(MainPageHeader);
