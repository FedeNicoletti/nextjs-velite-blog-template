const CTA = () => {
  return (
    <div className="bg-[url('/imghero.png')] bg-cover h-full w-full flex justify-center items-center">
      <div className="w-[300px] mx-auto overflow-x-hidden flex flex-col justify-center items-center">
        <div className="h-12 bg-white w-full mt-12 mb-4 rounded-xl text-center flex justify-center items-center flex-col">
          <h2 className="text-xl">Random Title</h2>
        </div>
        <div className="h-24 bg-white w-full my-4 rounded-xl text-center flex justify-center items-center flex-col">
          <h2 className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis ipsum minus quo dicta.
          </h2>
        </div>
        <div className="h-24 bg-white w-full mt-4 mb-12 rounded-xl text-center flex justify-center items-center flex-col">
          <h2 className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis ipsum minus quo dicta.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CTA;
