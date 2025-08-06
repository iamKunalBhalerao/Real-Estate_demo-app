import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden flex flex-col gap-4 md:gap-8 items-center">
      <div
        className="relative w-full max-w-full flex flex-col items-center"
        style={{ background: "var(--black)" }}
      >
        <div
          className="absolute w-80 h-80 blur-[100px] rounded-[100px]"
          style={{
            background: "rgba(255, 255, 255, 0.522)",
            filter: "blur(100px)",
          }}
        />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
