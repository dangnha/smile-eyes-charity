import "./Button.css";
const NormalBtn = (props) => {
  return (
    <button className="text-white lg:text-xl md:text-lg text-base font-normal rounded-[20px] bg-[#396D00] px-5 py-3">
      {props.text}
    </button>
  );
};

export default NormalBtn;
