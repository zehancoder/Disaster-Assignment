import { Button } from "@mui/material";
import myData from "../../db/Data.json";
import { BigContainer } from "./IncidentContainer";
export const HeroFunc = () => {
  return (
    <>
      <BigContainer className="px-4 md:px-2">
        <div className="flex flex-wrap items-center md:justify-normal justify-center gap-5 space-y-3">
          {myData.Cards.map(({ id, img, para, price, heading }) => (
            <div key={id} className="mx-auto xl:mx-0 relative">
              <div className="w-full relative rounded-xl" id="animate">
                <img
                  className="max-w-[306px] w-full"
                  src={img}
                  alt=""
                />
                <div className="absolute top-3 flex items-center gap-3 md:p-[10px] p-[8px] right-3 rounded-[40px] bg-white">
                  <img src="./icons/BlizzardMan.png" alt="constractor" />
                  <p className="text-xs font-bold font-onset">Blizzard</p>
                </div>
                <Button id="MuiBtn" variant="bordered">View Incident</Button>
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
          ))}
        </div>
      </BigContainer>
    </>
  );
};
