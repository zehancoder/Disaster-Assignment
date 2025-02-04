import { Chat } from "./ChatBox";
import { BigContainer } from "./common/IncidentContainer";
import { SmallText, TitleTwo } from "./common/Title";
import { CiSearch } from "react-icons/ci";
import { MyButton } from "./common/Button";
import { Link } from "react-router-dom";
import { HeroFunc } from "./common/Hero";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
function Landing() {
    const [chat, setChat] = useState(false);
    const openChat = () => {
        setChat(!chat)
    }
  return (
    <>
      <BigContainer className="bg-zinc-200">
        <div className="flex items-center justify-between py-5 md:py-7">
          <div>
            <SmallText>Welcome back</SmallText>
            <TitleTwo className="mt-1">Dashboard</TitleTwo>
          </div>
          <div
            className={`flex flex-wrap  items-center gap-5 justify-end md:px-0 px-3`}
          >
            <div className=" bg-white rounded-[6px] px-3 py-3 flex items-center gap-2 border border-zinc-200 shadow">
              <CiSearch className="text-lg" />
              <input
                type="text"
                className="outline-none font-onset text-xs md:text-[14px] w-36 md:max-w-40"
                placeholder="Search incident"
              />
            </div>
            <div className="bg-white rounded-[6px] px-2 py-3 flex items-center gap-2 border border-zinc-200 shadow">
              <label className="outline-none font-onset text-xs md:text-[14px] max-w-40 text-zinc-500">
                Sort by:
              </label>
              <select className="appearance-none outline-none font-onset text-xs md:text-[14px] max-w-40 text-zinc-500">
                <option value="Date modified" selected>
                  Date modified
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <Link to="/Incident">
              <MyButton>Cyper AI</MyButton>
            </Link>
          </div>
        </div>
      </BigContainer>
      <BigContainer className="pt-16 ">
        <HeroFunc />
      </BigContainer>
      <div className="w-full pb-28 2xl:absolute -bottom-80 right-0 ">
        <div className=" float-end relative mb-12 mr-3 sm:mr-20 ">
            <Chat chat = {chat}/>
          <img
            src="/chat.png"
            className={`cursor-pointer ${chat ? `hidden` : `flex`} w-14 md:w-auto absolute -bottom-20 md:-right-10 right-5 transition hover:scale-95`}
            alt="" onClick={openChat}
          />
          <div
            className={`bg-myYollow px-3 absolute -bottom-20 md:-right-10 right-5 transition hover:scale-95 text-white cursor-pointer font-semibold py-3 text-3xl md:text-5xl  ${chat ? `flex` : `hidden`} items-center justify-center rounded-full`}
          >
            <IoMdClose className="text-" onClick={openChat}></IoMdClose>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
