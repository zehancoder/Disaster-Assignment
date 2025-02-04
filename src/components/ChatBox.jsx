import { CiCamera } from "react-icons/ci";
import { RiGalleryLine } from "react-icons/ri";
import { MyButton } from "./common/Button";
export const Chat = ({ chat }) => {
  return (
    <div
      className={`rounded-xl transition duration-300 overflow-hidden bg-[#F4F4F5] origin-bottom-right ${
        chat ? `h-full scale-100` : `scale-0 h-0`
      } `}
    >
      <div className="py-5 bg-myYollow px-4 w-72 md:w-[350px]">
        <h1 className="text-base md:text-[18px] text-white font-bold font-onset tracking-wide leading-[22.95px]">
          Chat with Cypher
        </h1>
      </div>
      <div className="px-4">
        <div className="w-56 rounded-lg float-end mt-6 text-white font-onset text-xs md:text-sm px-3 py-2 bg-[#3F3F46]">
          <p className="w-full">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="w-56 rounded-lg float-left mt-6 text-zinc-500 font-onset text-xs md:text-sm px-3 py-2 bg-transparent border border-zinc-300">
          <p className="w-full">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="w-56 rounded-lg float-left mt-6 text-zinc-500 font-onset text-xs md:text-sm px-3 py-2 bg-transparent border border-zinc-300">
          <p className="w-full">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="w-56 rounded-lg float-end mt-6 text-white font-onset text-xs md:text-sm px-3 py-2 bg-[#3F3F46]">
          <p className="w-full">
            Lorem ipsum dolar sit general sac mascho werho
          </p>
        </div>
      </div>
      <div className="px-4">
        <input
          className="rounded-sm w-full mt-6 text-zinc-500 py-2 px-2 font-onset text-xs md:text-sm bg-transparent border border-zinc-300"
          type="text"
          placeholder="Enter your question..."
        />
      </div>
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 text-lg text-zinc-500">
          <CiCamera className="cursor-pointer text-xl" />
          <RiGalleryLine className="cursor-pointer " />
          <img src="/vector.png" alt="vector" className="cursor-pointer w-4" />
        </div>
        <MyButton className="h-auto w-auto text-[10px] md:text-xs rounded-full py-1 px-3">
          Send
        </MyButton>
      </div>
    </div>
  );
};
