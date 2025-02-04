import { Container } from "@mui/material";
import data from "../db/Data.json";
import { SmallText } from "./common/Title";
import { MyButton } from "./common/Button";
import { Link } from "react-router-dom";
export const CreateIncidentFunc = () => {
  return (
    <>
      <Container className="">
        <div className="mt-24 pb-12 text-center">
          <h1 className="text-2xl md:text-[27px] lg:text-[32px] font-bold font-onset leading-[28px] text-[#09090B] md:leading-[35px] lg:leading-[40.8px]">
            Let’s get started
          </h1>
          <p className="text-[14px] text-zinc-500 md:text-base mt-3">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br />{" "}
            dolar sit general sac mascho werhoLorem ipsum dolar sit gene
          </p>
          <div>
            <img src="/line.png" className="mx-auto mt-7" alt="" />
            <div className="max-w-4xl mx-auto mt-8">
              <div className="flex items-center justify-center md:justify-between flex-wrap gap-5">
                {data.StartingCards.map(({ img, heading, para }, i) => (
                  <div
                    key={i}
                    className="px-3  max-w-56 min-h-60 text-start py-4 bg-[#F4F4F5] border border-[#E4E4E7] rounded-[10px]"
                  >
                    <img src={img} className="mt-3" alt="" />
                    <h1 className="text-base font-onset font-bold md:text-[18px] lg:text-[20px] mt-16 text-[#09090B]">
                      {heading}
                    </h1>
                    <SmallText>{para}</SmallText>
                  </div>
                ))}
              </div>
            </div>
            <MyButton className="md:mt-20 mt-14">
              <Link to="/SelectIncident">Get Started</Link>
            </MyButton>
          </div>
        </div>
      </Container>
    </>
  );
};
