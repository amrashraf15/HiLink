import Image from "next/image";
import Button from "./Button";



const Hero = () => {
  return (
    <section className="mx-auto px-6 lg:px-20 3xl:px-0 max-w-[1440px] flex flex-col lg:flex-row gap-20 py-10 pb-30 lg:py-20 relative">
      {/* Background Image */}
      <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60 z-[-1]" />

      {/* LEFT PART */}
      <div className="relative">
        <Image 
          src="/images/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-10px] w-10 lg:w-[50px]"
        />
        <h1 className="text-[52px] font-bold leading-[120%] lg:text-[88px] mt-10">
          Putuk Truno Camp Area
        </h1>
        <p className="text-green-600 text-lg px-10">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature.
          We can help you on an adventure around the world in just one app.
        </p>
        <div className="my-11 flex items-center justify-center flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/images/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="border-green-500 bg-green-500 px-6 py-4 text-white hover:text-green-500 hover:bg-white" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/images/play.svg"
            variant="border-white bg-white px-8 py-3 text-gray-90" 
          />
        </div>
      </div>
      {/*RIGHT PART */}
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/images/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-[20px] font-[700]">Aguas Calientes</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="regular-16 block">Distance</p>
              <p className="text-[20px] font-[700]">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block ">Elevation</p>
              <p className="text-[20px] font-[700] ">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

