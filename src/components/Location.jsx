import { NavsTwo } from "./common/NavsTwo";
import { SmallText, TitleTwo } from "./common/Title";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MyButton } from "./common/Button";
import { IoMdAdd } from "react-icons/io";
import { BigContainer } from "./common/IncidentContainer";
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
          <Link to={"/CreateIncident"}>
            <MyButton className={"flex items-center gap-1"}>
              <IoMdAdd className="text-lg font-bold" />
              New Location
            </MyButton>
          </Link>
        }
      />
      <BigContainer>
        <div className="flex md:px-8 mt-8 lg:px-12 items-center justify-between gap-3">
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
                sit general sac mascho <br /> werhoLorem ipsum dolar sit general sac
                mascho werhoLorem ipsum dolar sit  general sac <br /> mascho werhoLorem
                ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit <br />
                general sac mascho werho
              </SmallText>
            </div>
            <div className="py-12">

            </div>
          </div>
        </div>
      </BigContainer>
    </>
  );
};
