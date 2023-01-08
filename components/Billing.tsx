import styles, { layout } from "../styles/style";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} flex md:flex-row flex-col-reverse sm:py-16 py-6`}
    >
      <div className={layout.sectionImgReverse}>
        <img
          src="./assets/bill.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src="./assets/apple.svg"
            alt="apple_store"
            className="w-[128px] h-[42px] onject-contian mr-5 cursor-pointer"
          />
          <img
            src="./assets/google.svg"
            alt="google_play"
            className="w-[128px] h-[42px] onject-contian  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
