import MyData from "../../db/Data.json";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
export const Toggle = ({ toggle, setToggle }) => {
  const closeNav = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={` ${
        toggle ? `scale-100` : `scale-0`
      } origin-top-right transition duration-300 py-5 absolute top-0 right-0 w-80 h-full z-20 bg-myYollow ${toggle}`}
    >
      <header className=" 2xl:px-0 px-4 lg:py-0 py-3 float-end relative w-full text-center">
        <div className="flex flex-col gap-4 mt-10">
          {MyData.navber.map((val, i) => (
            <Link
              key={i}
              to={val.link}
              className="cursor-pointer text-[14px] leading-[17.85px] font-[400] font-onset transition-all duration-200 hover:font-bold"
              onClick={closeNav}
            >
              <p>{val.title}</p>
            </Link>
          ))}
        </div>
        <div className="space-y-3 mt-5 ">
          <div className="relative bg-[url(./icons/notifi.png)] bg-cover h-10 w-10 mx-auto cursor-pointer">
            <div className="p-1 rounded-full absolute top-2 right-2 bg-[#4ADE80]"></div>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src="/user.png" className="" alt="" />
            <div>
              <p className="text-[#71717A] text-[16px] font-semibold leading-[20.4px]">
                Usman Zafar
              </p>
              <p className="text-[14px] font-[400] leading-[17.85px] text-[#71717A]">
                usmanzafar@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div
          className={`p-1 cursor-pointer text-2xl  rounded-full absolute top-0 left-4 bg-gray-100`}
          onClick={closeNav}
        >
          <IoClose />
        </div>
      </header>
    </div>
  );
};
