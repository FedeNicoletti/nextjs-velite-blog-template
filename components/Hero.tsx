import Clients from "./Clients";
import ButtonCTA from "./ButtonCTA";

const HeroPage = () => {
  return (
    <div className="w-[370px] mx-auto  flex justify-center items-center flex-col">
      <div className="w-full h-full py-4 mb-2 bg-[#2f2e2e] flex justify-center items-center flex-col text-center rounded-xl">
        <h1 className="text-2xl w-full">
          <span className="text-base text-white tracking-widest">
            {" "}
            NUTRITION & TRANSFORMATION{" "}
          </span>
          <span className="text-blue-400 text-6xl">COACHING</span>
        </h1>
      </div>

      <Clients />

      <div className="mb-4">
        <ButtonCTA />
      </div>
    </div>
  );
};

export default HeroPage;
