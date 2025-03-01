import { BigContainer } from "./IncidentContainer";
import { SmallText, TitleTwo } from "./Title";
import { Link } from "react-router-dom";
import { MyButton } from "./Button";
export const NavsTwo = ({
  smallParaText,
  BigText,
  inputs,
  selectOption,
  btns,
  CrossImg,
  LineTracker,
}) => {
  return (
    <BigContainer className="bg-zinc-200">
      <div className="flex items-center justify-between py-5 md:py-7">
        <div className="flex items-center gap-2">
          <div>{CrossImg}</div>
          <div>
            <SmallText>{smallParaText}</SmallText>
            <TitleTwo className="mt-1">{BigText}</TitleTwo>
          </div>
        </div>
        <div>
          <div className="relative">{LineTracker}</div>
        </div>
        <div
          className={`flex flex-wrap  items-center gap-5 justify-end md:px-0 px-3`}
        >
          <div>{inputs}</div>
          <div>{selectOption}</div>
          <Link to="/Incidents">{btns}</Link>
        </div>
      </div>
    </BigContainer>
  );
};
