import Image from "next/image";
const Coach = () => {
  return (
    <div
      id="about"
      className="bg-blue-400 h-full w-full flex justify-center items-center"
    >
      <div className="w-[370px] mx-auto overflow-x-hidden">
        <div className="h-full w-full my-12 rounded-xl text-center flex justify-center items-center flex-col">
          <h2 className="text-xl text-white">MEET YOUR COACH</h2>
        </div>
        <div className="bg-white overflow-y-visible border-blue-400 pb-6 w-full rounded-xl flex flex-col justify-center items-center text-center mb-12">
          <Image
            className="pt-8 mb-4 rounded-xl z-80 overflow-visible overflow-x-visible"
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

          <p className="mt-6 text-center text-3xl ">Xander Morejon</p>
          <ul className="flex flex-col justify-center items-center gap-2">
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
