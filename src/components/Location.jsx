import { NavsTwo } from "./common/NavsTwo";
import { SmallText } from "./common/Title";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MyButton } from "./common/Button";
import { IoMdAdd } from "react-icons/io";
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
    </>
  );
};
