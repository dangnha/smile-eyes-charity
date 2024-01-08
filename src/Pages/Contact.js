import ContactForm from "../Components/Item/ContactForm";
import bgimg from "../images/Rectangle.png";
import infoimg from "../images/Rectangle73.png";
import finalimg from "../images/Rectangle77.png";

const Contact = () => {
  return (
    <div className="contact flex flex-col justify-center items-center">
      <div className="w-[100vw] h-[100vh] relative">
        <img
          className="w-full h-full object-center object-cover "
          src={bgimg}
          alt="Not Found"
        />
        <div className="w-full h-full bg-black bg-opacity-20 absolute top-0 flex justify-start items-center">
          <div className="absolute ml-[130px]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="contact-info w-[100vw] h-[100vh] bg-[#F6FFF6] flex justify-center items-center">
        <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
          <div className="self-start text-4xl uppercase">
            Contact Information
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-16">
            <div className=" basis-[50%]">
              <div className="text-2xl font-serif max-w-sm flex flex-col justify-center items-start gap-8">
                <div className="">
                  <i className="pr-3 w-8 fa-solid fa-location-pin"></i>
                  Thôn Pà-Ong, Xã Cà Dy, Huyện Nam Giang, tỉnh Quảng Nam, Việt
                  Nam
                </div>
                <a href="mailto:dinhdongphuong@gmail.com">
                  <i className="pr-3 w-8 fa-solid fa-envelope"></i>{" "}
                  dinhdongphuong@gmail.com
                </a>
                <a href="tel:+84962414125">
                  <i className="pr-3 w-8 fa-solid fa-phone"></i> 0962 414 125
                </a>
              </div>
            </div>
            <div className="basis-[50%]">
              <img src={infoimg} alt="Not found" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[70vh] relative">
        <img
          className="w-full h-full object-cover object-center"
          src={finalimg}
          alt="Not found"
        />
        <div className="w-[50%] h-full bg-black bg-opacity-40 absolute top-0 right-0 text-white font- flex flex-col justify-center px-[120px] gap-[30px]">
          <div className="text-4xl font-semibold">Help Other People</div>
          <div className="text-2xl">
            We Dream To Create A Bright Future Of The Underprivileged Children
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
