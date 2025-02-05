import { Link } from "react-router-dom";
import { MyButton } from "./common/Button";
import { NavsTwo } from "./common/NavsTwo";
import { useState } from "react";
import { SmallText, TitleFunc } from "./common/Title";
import { Container } from "@mui/material";
export const StepThree = () => {
  const [level, setLevel] = useState(false);
  const levelUp = () => setLevel(!level);
  return (
    <div>
      <NavsTwo
        smallParaText={"Home - Incidents - New Incident"}
        BigText={"New Incident"}
        selectOption={
          <Link to={"/SelectIncident"}>
            <MyButton className="bg-white border border-[#D4D4D8] text-zinc-500 px-7 md:px-12">
              Back
            </MyButton>
          </Link>
        }
        btns={
          <Link onClick={levelUp} to="/CardStep4">
            <MyButton className={"md:px-12 px-7"}>Next</MyButton>
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
            <div
              className={` bg-myYollow h-full ${level ? `w-[33.5%]` : `w-0`}`}
            ></div>
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
          <TitleFunc>Let’s give the incident a title?</TitleFunc>
          <SmallText className={"mt-3 text-xs md:text-[14px]"}>
            Make a title that will easily identify the incidents
          </SmallText>
          <input
            className="w-full py-3 mt-5 text-[14px] text-[#71717A] font-onset px-4 bg-[#F4F4F5] border-[#E4E4E7] rounded-md"
            type="text"
            placeholder="Add title here"
          />
          <TitleFunc className={"mt-8"}>Describe what happened during the incident?</TitleFunc>
          <SmallText className={"mt-3 text-xs md:text-[14px]"}>
            Share some information about the incident. The when, where, how.
          </SmallText>
          <textarea
            className="w-full h-28 py-3 mt-5 text-[14px] text-[#71717A] font-onset px-4 bg-[#F4F4F5] border-[#E4E4E7] rounded-md"
            type="text"
            placeholder="Type here"
            
          />
        </div>
      </Container>
    </div>
  );
};
