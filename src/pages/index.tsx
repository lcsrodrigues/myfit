import Banner from "../components/Banner";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Wizard from "../components/Wizard";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader>
        <span>Home</span>
      </SubHeader>
      <Banner />
      <Wizard />
    </>
  )
}
