import { NavsTwo } from "./common/NavsTwo";
import { Link } from "react-router-dom";
import { MyButton } from "./common/Button";
import { useState } from "react";
import { Container } from "@mui/material";
import { TitleFunc } from "./common/Title";
import { SmallText } from "./common/Title";
import { CiSearch } from "react-icons/ci";
export const StepFour = () => {
  const [level, setLevel] = useState(false);
  const levelUp = () => setLevel(!level);
  return (
    <>
      <NavsTwo
        smallParaText={"Home - Incidents - New Incident"}
        BigText={"New Incident"}
        selectOption={
          <Link to={"/CardStep3"}>
            <MyButton className="bg-white border border-[#D4D4D8] text-zinc-500 px-7 md:px-12">
              Back
            </MyButton>
          </Link>
        }
        btns={
          <Link onClick={levelUp} to={"/CardStep4"}>
            <MyButton className={"md:px-12 px-7"}>Finished</MyButton>
          </Link>
        }
        CrossImg={
          <Link to={"/CreateIncident"}>
            <img src="/icons/cross.png" />
          </Link>
        }
        LineTracker={
          <div className=" xl:w-xl 2xl:w-3xl flex items-center overflow-hidden bg-zinc-300 rounded-full h-1">
            <div className="w-[33.5%] bg-myYollow h-full"></div>
            <div className={` bg-myYollow h-full w-[33.5%]`}></div>
            <div
              className={`transition-width duration-300 bg-myYollow h-full w-[33.5%]`}
            ></div>
          </div>
        }
      >
        {" "}
      </NavsTwo>
      <Container>
        <div className="mt-16 md:mt-20 lg:mt-24 max-w-3xl mx-auto pb-12">
          <TitleFunc>Where’s the incident?</TitleFunc>
          <SmallText className={"mt-3 text-xs md:text-[14px]"}>
            Enter a GPS, address. or pin point on the map. Try to be as <br />{" "}
            accurate as possible, or click:Jurisdiction Wide
          </SmallText>
          <div className="rounded-lg overflow-hidden mt-4 relative">
            <img src="/maps/mapsOne.png" alt="" />
            <div className="absolute top-4 left-4">
              <div className=" bg-white rounded-[6px] px-3 py-3 flex items-center gap-2 border border-zinc-200 shadow">
                <CiSearch className="text-lg" />
                <input
                  type="text"
                  className="outline-none font-onset text-xs w-32 md:w-52 md:max-w-40"
                  placeholder="Enter incident address or GPS"
                />
              </div>
              <div className=" bg-white mt-3 rounded-[6px] px-3 py-3 flex items-center gap-2 border border-zinc-200 shadow">
                <CiSearch className="text-lg" />
                <input
                  type="text"
                  className="outline-none font-onset text-xs w-32 md:w-52 md:max-w-40"
                  placeholder="Pinpoint damage"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
