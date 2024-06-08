import Image from "next/image";
import ButtonCTA from "./ButtonCTA";

const HeroPage = () => {
  return (
    <>
      <div className="w-full h-full py-4 mb-2 bg-[#2f2e2e] flex justify-center items-center flex-col text-center rounded-xl">
        <h1 className="text-2xl w-full">
          <span className="text-base text-white tracking-widest">
            {" "}
            NUTRITION & TRANSFORMATION{" "}
          </span>
          <span className="text-blue-400 text-6xl">COACHING</span>
        </h1>
      </div>
      <p className="mt-4 leading-5 max-w-[350px] tracking-tighter text-center text-xs text-[#2f2e2e] ">
        I educate on how to lose fat without extreme diets or unrealistic
        workout routines, instead I focus on building on lifestyle habits that
        you can use in the long term while progressing your exercises for
        longevity and maintain your aesthetic goals as well!
      </p>
      <div className="mb-4">
        <ButtonCTA />
      </div>
    </>
  );
};

export default HeroPage;
