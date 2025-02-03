import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MyButton } from "./components/common/Button";
import { HeroFunc } from "./components/common/Hero";
import { TitleFunc, TitleTwo } from "./components/common/Title";
import { NavFunc } from "./components/fixedComponent/Navber";
import { Toggle } from "./components/fixedComponent/ToggleNav";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavFunc />
        {/* <MyButton>Cypher AI</MyButton>
      <TitleFunc>Hello</TitleFunc> */}
        <TitleTwo>Dashboard</TitleTwo>
        <MyButton>Click</MyButton>
        <HeroFunc />
      </BrowserRouter>
    </>
  );
}

export default App;
