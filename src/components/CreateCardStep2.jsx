import { Link, NavLink, Route, Routes } from "react-router-dom";
import { MyButton } from "./common/Button";
import { NavsTwo } from "./common/NavsTwo";
import { useState } from "react";
import { StepThree } from "./CreateCardStep3";
import { Container } from "@mui/material";
import { TitleFunc } from "./common/Title";
import myData from "../db/Data.json";
export const SelectIncident = () => {
  const [level, setLevel] = useState(false);
  const leveUp = () => setLevel(!level);
  return (
    <>
      <NavsTwo
        smallParaText={"Home - Incidents - New Incident"}
        BigText={"New Incident"}
        selectOption={
          <Link to={"/CreateIncident"}>
            <MyButton className="bg-white border border-[#D4D4D8] text-zinc-500 px-7 md:px-12">
              Back
            </MyButton>
          </Link>
        }
        btns={
          <div >
            <Link onClick={leveUp} to={"/CardStep3"}>
              <MyButton className={"md:px-12 px-7"}>Next</MyButton>
            </Link>
          </div>
        }
        CrossImg={
          <Link to={"/CreateIncident"}>
            <img src="/icons/cross.png" />
          </Link>
        }
        LineTracker={
          <div className=" xl:w-xl 2xl:w-3xl flex items-center overflow-hidden bg-zinc-300 rounded-full h-1">
            <div className="w-[33.5%] bg-myYollow h-full"></div>
            {/* <div
              className={` bg-myYollow h-full ${
                level ? `w-[33.5%]` : `w-0`
              }`}
            ></div> */}
          </div>
        }
      >
        {" "}
      </NavsTwo>
      <Container>
        <div className="mt-16 md:mt-20 lg:mt-24 max-w-3xl mx-auto pb-12 text-center">
          <TitleFunc className="text-start">
            Which of these best describes the incident?
          </TitleFunc>
          <div className="flex max-w-3xl mt-8 mx-auto justify-start items-center flex-wrap gap-4">
            {myData.StepTwoData.map(({ img, text }, i) => (
              <div
                className={`flex border-b rounded-lg gap-2 mx-auto md:mx-0 cursor-pointer items-center w-44 h-[70px] hover:bg-myYollow hover:text-white justify-center bg-[#F4F4F5] border border-[#E4E4E7]`}
              >
                <img src={img} alt="" />
                <p className="text-[14px] leading-[17.85px] font-[400] font-onset ">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
