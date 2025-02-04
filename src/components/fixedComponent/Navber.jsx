import { BigContainer } from "../common/IncidentContainer";
import MyData from "../../db/Data.json";
import {Link, NavLink} from "react-router-dom";
import { Toggle } from "./ToggleNav";
import { useState } from "react";
export const NavFunc = () => {
  const [toggle, setToggle] = useState(false);
  const openNav = () => {
    setToggle(!toggle)
  }
  return (
    <div className="  py-3 bg-zinc-200">
      <BigContainer className="bg-zinc-200 border-b-zinc-300 border-b">
      <header className="flex  bg-zinc-200 items-center justify-between 2xl:px-0 lg:py-0 py-3">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <div className="hidden lg:flex items-center justify-center gap-3 md:gap-4 xl:gap-6">
          {MyData.navber.map((val, i) => (
            <NavLink
              key={i}
              to={val.link}
              className="overflow-hidden text-zinc-500 hover:text-black cursor-pointer text-[14px] leading-[17.85px] font-[400] font-onset pb-5 mt-5 transition-all duration-200 hover:font-bold border-b-3 border-transparent hover:border-b-black"
            >
              <p>{val.title}</p>
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative bg-[url(./icons/notifi.png)] bg-cover h-10 w-10 cursor-pointer">
            <div className="p-1 rounded-full absolute top-2 right-2 bg-[#4ADE80]"></div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/user.png" alt="" />
            <div>
                <p className="text-[#71717A] text-[16px] font-semibold leading-[20.4px]">Usman Zafar</p>
                <p className="text-[14px] font-[400] leading-[17.85px] text-[#71717A]">usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={`lg:hidden block  px-2.5 py-3 rounded-full space-y-0.5 cursor-pointer hover:bg-myYollow transition ${toggle ? `bg-myYollow` : `bg-gray-100`}`} onClick={openNav}>
          <div className="h-1 w-5 bg-black rounded-full"></div>
          <div className="h-1 w-5 bg-black rounded-full"></div>
          <div className="h-1 w-5 bg-black rounded-full"></div>
        </div>
      </header>
      <Toggle toggle = {toggle} setToggle = {setToggle}/>
    </BigContainer>
    </div>
  );
};
