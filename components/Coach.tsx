import Image from "next/image";
const Coach = () => {
  return (
    <div
      id="about"
      className="bg-blue-400 h-full w-full flex justify-center items-center"
    >
      <div className="w-[370px] mx-auto overflow-x-hidden">
        <div className="h-full w-full mt-12 mb-6 rounded-xl text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl text-white font-black tracking-widest">
            MEET YOUR COACH
          </h2>
          <p className="mt-4 leading-5 max-w-[350px] tracking-tighter text-center text-xs text-[#2f2e2e] ">
            I educate on how to lose fat without extreme diets or unrealistic
            workout routines, instead I focus on building on lifestyle habits
            that you can use in the long term while progressing your exercises
            for longevity and maintain your aesthetic goals as well!
          </p>
        </div>
        <div className="bg-white overflow-y-visible border-blue-400 pb-6 w-full rounded-xl flex flex-col justify-center items-center text-center mb-12">
          <Image
            className="mb-4 rounded-xl z-80 overflow-visible overflow-x-visible"
            src="/xandertest6.png"
            alt="Description of image"
            width={150}
            height={150}
            style={{
              objectPosition: "center",
              objectFit: "cover",
              height: "20rem",
              width: "100%",
              borderWidth: "0px",
            }}
          />

          <div className="mt-12"></div>
          <ul className="flex flex-col justify-center items-center gap-2 ">
            <li className="text-xl text-center font-black">Xander Morejon</li>
            <li className="text-sm text-center">
              Athletic Background Calisthenics Kinstretch Certified
            </li>
            <li className="text-sm text-center">
              KILO Strength Society Level 2
            </li>
            <li className="text-sm text-center">
              Max Strength Certified Coach
            </li>
            <li className="text-sm text-center">
              USA Olympic Weightlifting Level 1 Coach
            </li>
            <li className="text-sm text-center">DBC Fitness Level 2 Coach</li>
            <li className="text-sm text-center">
              Program Design, Biomechanics, and orthopedic measurements
            </li>
            <li className="text-sm text-center">
              Functional Range Conditioning Certified
            </li>
            <li className="text-sm text-center">Precision Nutrition Level 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coach;
