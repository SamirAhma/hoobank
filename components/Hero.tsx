import styles from "../styles/style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} sm:py-16 py-6`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 flex justify-center items-start`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src="./assets/Discount.svg"
            alt=""
            className="w-[32px] h-[32px]"
          />
          <p
            className={`${styles.paragraph} ml-2 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}
          >
            <span className="text-white">20%</span> Discount For
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next
            <br className="hidden sm:block" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden mr-10 ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative justify-center items-center`}
      >
        <img
          src="./assets/robot.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] top-0 blue__gradient"></div>
      </div>
      <div
        className={`ss:hidden ${styles.flexCenter} flex justify-center items-center`}
      >
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
