const WhatInclude = () => {
  return (
    <div className="bg-blue-400 h-full w-full flex justify-center items-center">
      <div className="w-[370px] mx-auto overflow-x-hidden">
        <div className="h-24 bg-white w-full my-12 rounded-xl text-center flex justify-center items-center flex-col">
          <h2 className="text-5xl w-full text-blue-400  tracking-widest">
            What&apos;s Included
          </h2>
        </div>
        <div className="bg-white w-full rounded-xl text-center">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl text-blue-400 font-black">
              1on1 Assessment and Goal Setting
            </h2>
            <p className="text-sm mb-4">
              Xander will review your mobilty, strength, lifestyle, current
              exercise routine, and your goals to provide proper training and
              nutrition recommendations.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl text-blue-400 font-black">
              Free Training App to Track Progress
            </h2>
            <p className="text-sm mb-4">
              You will be provided with a state of the art training app that
              will allow you to view your training program scheduled for you
              beforehand on a calendar that will organize all your training
              sessions day to day customized according to your goals and
              comittment level(training frequency throughout the week) by
              Xander. This will include exercise video demonstrations, tempo
              prescriptions,previous weight/sets/reps performed on each
              exercise, rest times, notes from Xander and options for you to
              leave notes on each exercise for feedback!
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl text-blue-400 font-black">
              Free Nutrition App Grocery Lists/Recipes/Macros
            </h2>
            <p className="text-sm mb-4">The nutrition software to help</p>
          </div>
          <div className="flex justify-center items-center flex-col mb-8">
            <h2 className="text-xl text-blue-400 font-black">
              Text & Email Access for Accountability Check-ins
            </h2>
            <p className="text-sm mb-4">
              Xander will be available to you to provide optional
              weekly(recommended) check-ins through email or text that would
              include optional progress photos and weight tracking overview
              through optional smart scale measurements that will be clarified
              during your assessment. Some people need feedback as much as
              several times a day depending on their need for accountability and
              feedback, which is completely understandable as thats the whole
              point of hiring a COACH!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatInclude;
