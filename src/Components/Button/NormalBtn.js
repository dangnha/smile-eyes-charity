import "./Button.css"
const NormalBtn = (props) => {
  return (
    <button className="text-white text-xl font-normal rounded-[20px] bg-[#396D00] px-5 py-3">
      {props.text}
    </button>
  );
};

export default NormalBtn;
