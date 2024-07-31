import React, { useCallback, useState } from "react";
import MainPageHeader from "../component/MainPageHeader";
import ControlPanel from "../component/ControlPanel";

import Clicker from "../component/Clicker";
import { createPortal } from "react-dom";
import LanguageSelectModal from "../component/LanguageSelectModal";

export default function Main() {
  const [count, setCount] = useState(100000);
  const [langSelectOpen, setLangSelectOpen] = useState(false)
  const step = 100000;

  const incrementCount = useCallback(() => {
    setCount((prev) => (prev += step));
  },[]);

  return (
    <>
        <div className=" py-[24px] px-[17px] flex flex-col items-center gap-[8px] pb-[100px] h-full overflow-hidden">
      <MainPageHeader setLangSelectOpen={setLangSelectOpen}/>
      <ControlPanel count={count} />
      <Clicker handleClick={incrementCount} />
    </div>
    {createPortal(<LanguageSelectModal isOpen={langSelectOpen} setLangSelectOpen={setLangSelectOpen}/>, document.body)}
    </>
  );
}
