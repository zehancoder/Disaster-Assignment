import { NavFunc } from "./fixedComponent/Navber";
import { BigContainer } from "./common/IncidentContainer";
import {SmallText, TitleTwo} from "./common/Title";
import { CiSearch } from "react-icons/ci";
import {MyButton} from "./common/Button"
function Landing() {
  return (
    <>
        <NavFunc />
        <BigContainer className= "bg-zinc-200">
            <div className="flex items-center justify-between py-5 md:py-7">
                <div>
                    <SmallText>
                        Welcome back
                    </SmallText>
                    <TitleTwo className="mt-1">
                        Dashboard
                    </TitleTwo>
                </div>
                <div>
                    <div className=" bg-white rounded-[6px] px-2 py-3 flex items-center gap-2 border border-zinc-200 shadow">
                        <CiSearch className="text-lg"/>
                        <input type="text" className="outline-none font-onset text-[14px] max-w-40" placeholder="Search incident"/>
                    </div>

                </div>
            </div>
        </BigContainer>
    </>
  );
}

export default Landing;