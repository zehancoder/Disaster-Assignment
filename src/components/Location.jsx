import { NavsTwo } from "./common/NavsTwo";
import { SmallText, TitleTwo } from "./common/Title";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MyButton } from "./common/Button";
import { IoMdAdd } from "react-icons/io";
import { BigContainer } from "./common/IncidentContainer";
import myData from "../db/Data.json";
import { Button } from "@mui/material";

export const LocationFunc = () => {
  return (
    <>
      <NavsTwo
        smallParaText={"Incidents - DR-4699 March 2023 Severe Storms "}
        BigText={"DR-4699 March 2023 Severe Storms"}
        selectOption={
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
        }
        inputs={
          <div className=" bg-white rounded-[6px] px-3 py-3 flex items-center gap-2 border border-zinc-200 shadow">
            <CiSearch className="text-lg" />
            <input
              type="text"
              className="outline-none font-onset text-xs md:text-[14px] w-36 md:max-w-40"
              placeholder="Search incident"
            />
          </div>
        }
        btns={
          <Link to={"/"}>
            <MyButton className={"flex items-center gap-1"}>
              <IoMdAdd className="text-lg font-bold" />
              New Location
            </MyButton>
          </Link>
        }
      />
      <BigContainer>
        <div className="flex flex-col 2xl:flex-row md:px-5 mt-8 lg:px-6  justify-between gap-6 py-12">
          <div>
            <div className="py-8 border-b border-b-zinc-400">
              <div className="flex items-center gap-3">
                <img src="/whiteLocate.png" alt="" />
                <div>
                  <SmallText>Location</SmallText>
                  <TitleTwo>Tulare County, Los Angles, CA 23415</TitleTwo>
                </div>
              </div>
              <div className="flex mt-8 items-center gap-3">
                <img src="/camera.png" alt="" />
                <div>
                  <SmallText>Approx. Cost:</SmallText>
                  <TitleTwo>$60,607,456.00</TitleTwo>
                </div>
              </div>
            </div>
            <div className="py-12 border-b border-b-zinc-400">
              <SmallText className={"font-extrabold text-[13px] text-black"}>
                DrisCription
              </SmallText>
              <SmallText className={"text-[13px] mt-2"}>
                Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
                sit general sac mascho <br /> werhoLorem ipsum dolar sit general
                sac mascho werhoLorem ipsum dolar sit general sac <br /> mascho
                werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum
                dolar sit <br />
                general sac mascho werho
              </SmallText>
            </div>
            <div className="py-12">
              <div className="flex items-center justify-between">
                <SmallText className={"text-[13px] font-extrabold text-black"}>
                  Locations
                </SmallText>
                <SmallText
                  className={"border-b border-b-zinc-300 cursor-pointer"}
                >
                  See all
                </SmallText>
              </div>
              <div>
                <BigContainer className="px-4 md:px-2 mt-6 border-b border-b-zinc-400 py-12">
                  <div className="flex lg:flex-row flex-col flex-wrap items-center md:justify-normal justify-center gap-6 space-y-3">
                    {myData.LocationCardData.map(
                      ({ img, para, price, heading }, i) => (
                        <div key={i} className="  relative">
                          <div
                            className="w-full relative rounded-xl"
                            id="animate"
                          >
                            <img
                              className="max-w-[306px] w-full"
                              src={img}
                              alt=""
                            />
                            <div className="absolute top-3 flex items-center gap-3 md:p-[10px] p-[8px] right-3 rounded-[40px] bg-white">
                              <img
                                src="./icons/BlizzardMan.png"
                                alt="constractor"
                              />
                              <p className="text-xs font-bold font-onset">
                                Blizzard
                              </p>
                            </div>
                            <Link to={"/Incidents"}>
                              <Button id="MuiBtn" variant="bordered">
                                View more
                              </Button>
                            </Link>
                          </div>
                          <h1 className="font-bold text-base md:text-lg mt-4 font-onset">
                            {heading}
                          </h1>
                          <p className="text-[#71717A] text-xs leading-[30px] font-[400] md:text-base">
                            {para}
                          </p>
                          <p className="font-onset font-bold text-base leading-[30px] md:text-[16px]">
                            {price}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </BigContainer>
              </div>
              <div className="py-12  border-b border-b-zinc-400">
                <div className="flex items-center justify-between">
                  <SmallText
                    className={"text-[13px] font-extrabold text-black"}
                  >
                    Activities
                  </SmallText>
                  <SmallText
                    className={"border-b border-b-zinc-300 cursor-pointer"}
                  >
                    See all
                  </SmallText>
                </div>
                <div className="flex mt-3 items-center gap-5 px-4 bg-[#F4F4F5] py-3 rounded-md">
                  <img
                    src="/constractor/builOne.png"
                    className="w-28 rounded-xl"
                    alt=""
                  />
                  <div>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base">
                      Activity name
                    </h3>
                    <SmallText className={"mt-2"}>
                      Location name .<span> 16.12212, -122.1424</span>
                    </SmallText>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base mt-2">
                      $1,456,654.00
                    </h3>
                  </div>
                </div>
                <div className="flex mt-5 items-center gap-5 px-4 bg-[#F4F4F5] py-3 rounded-md">
                  <img
                    src="/constractor/builOne.png"
                    className="w-28 rounded-xl"
                    alt=""
                  />
                  <div>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base">
                      Activity name
                    </h3>
                    <SmallText className={"mt-2"}>
                      Location name .<span> 16.12212, -122.1424</span>
                    </SmallText>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base mt-2">
                      $1,456,654.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="py-12  border-b border-b-zinc-400">
                <div className="flex items-center justify-between">
                  <SmallText
                    className={"text-[13px] font-extrabold text-black"}
                  >
                    Documents
                  </SmallText>
                  <SmallText
                    className={"border-b border-b-zinc-300 cursor-pointer"}
                  >
                    See all
                  </SmallText>
                </div>
                <div className="flex mt-3 items-center gap-5 px-4 bg-[#F4F4F5] py-3 rounded-md">
                  <img
                    src="/constractor/builOne.png"
                    className="w-28 rounded-xl"
                    alt=""
                  />
                  <div>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base">
                      Document name
                    </h3>
                    <SmallText className={"mt-2"}>
                      Location name .<span> 16.12212, -122.1424</span>
                    </SmallText>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base mt-2">
                      $1,456,654.00
                    </h3>
                  </div>
                </div>
                <div className="flex mt-5 items-center gap-5 px-4 bg-[#F4F4F5] py-3 rounded-md">
                  <img
                    src="/constractor/builOne.png"
                    className="w-28 rounded-xl"
                    alt=""
                  />
                  <div>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base">
                      Document name
                    </h3>
                    <SmallText className={"mt-2"}>
                      Location name .<span> 16.12212, -122.1424</span>
                    </SmallText>
                    <h3 className="text-black font-bold font-onset text-[14px] md:text-base mt-2">
                      $1,456,654.00
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 ">
            <SmallText>Incident Map</SmallText>
            <img className="mt-2" src="/maps/mapsTwo.png" alt="" />
            <SmallText className={"mt-2"}>
              Start 19.1232, -118.233 End 19.3245, -119.2323
            </SmallText>
          </div>
        </div>
      </BigContainer>
    </>
  );
};
