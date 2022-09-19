import { Header } from "./components/header/Index";
import { Data } from "./Data";
import { Section } from "./components/section/Index"

export const App = () => {
  return (
    <>
    <Header {...Data.header} />
    <Section {...Data.section}/>
    </>
  );
};
