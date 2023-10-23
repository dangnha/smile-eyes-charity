import { useRef, useState } from "react";
import ProgramItem from "../../Components/Item/program_item/ProgramItem";
import "./programs.css";

const props = {
  title: "Economic development program",
  date: "10/2023~10/2028",
  linkYT: "https://www.youtube.com/embed/bdBG5VO01e0?si=xEOHtxpF1LCmHNAU",
  des: "Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects. Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects.",
  amoutOfLikes: "145.9k",
};

const props2 = {
  title: "The Top 8 Charities in the World",
  date: "10/2023~10/2028",
  linkYT: "https://www.youtube.com/embed/xHegpKx61eE?si=oOO1Pe1FzXLiRpQy",
  des: "The statistics in this video were provided by GiveWell, the World Health Organization, and the websites listed above. Cost estimates may not be 100% accurate, as they're difficult to evaluate and can vary depending on the source. For example, the Against Malaria Foundation estimates that bed nets typically cost between US$2 and US$3, whereas GiveWell puts the price at $4.53.",
  amoutOfLikes: "1.7k",
};

const props6 = {
  title: "Yemen: On the brink of starvation",
  date: "10/2023~10/2028",
  linkYT: "https://www.youtube.com/embed/npk7tfKyXok?si=E1ubB7RWUvoCaCLX",
  des: "The war in Yemen, which began early last year when the government was overthrown by rebel forces, has pushed the country to the brink of famine. This video contains distressing scenes from the start. See more from BBC Our World's documentary Starving Yemen this weekend on BBC World, BBC News and iPlayer.",
  amoutOfLikes: "24k",
};

const props4 = {
  title:
    "Quanglinhvlogs || Khoan Giếng Nước Sạch Cho Người Dân Bản Địa Châu Phi",
  date: "10/2023~10/2028",
  linkYT: "https://www.youtube.com/embed/LXcWjzaMwqE?si=6ubyy8q_rcOhWl15",
  des: "Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects. Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects.",
  amoutOfLikes: "106k",
};

const props5 = {
  title: "Lập Quỹ, Tặng Nhà Vệ Sinh Cho Trẻ Vùng Cao",
  date: "10/2023~10/2028",
  linkYT: "https://www.youtube.com/embed/GvIHMITsYTw?si=qWTtHJL6PHGfo-Za",
  des: " Xây nhà vệ sinh cho trẻ em vùng cao là hành động nhỏ nhưng lại mang thông điệp nhân văn rất lớn. Việc làm này của nhóm thiện nguyện VAECO HAN không chỉ giúp cho các thầy cô và học sinh tiếp cận gần hơn với văn hóa học đường dưới xuôi. Nó còn tạo động lực để các em học sinh nghèo vùng cao thích thú hơn khi đến trường, tới lớp.",
  amoutOfLikes: "12.4k",
};

const props3 = {
  title: "Lời Kêu Gọi Donate",
  date: "10/2023~10/2028",
  linkYT: "https://www.youtube.com/embed/sC2sEm0UBVQ?si=tpYTdgVVytiK_TlU",
  des: "Bạn hẳn sẽ không cầm lòng nổi khi biết ở vùng cao, vùng sâu, vùng xa có hàng trăm, hàng ngàn đồng bào của chúng ta đang sống cuộc sống nghèo khó, thiếu thốn. Người già, trẻ em không có nổi tấm chăn, manh áo ấm; các gia đình lay lắt bên những mái nhà xuống cấp không đủ che gió, che mưa; biết bao em bé không có sách để đọc, không có quyển vở cây bút để viết, thậm chí có em không được đến trường",
  amoutOfLikes: "798.8k",
};

const projects = [
  <ProgramItem props={props} />,
  <ProgramItem props={props2} />,
  <ProgramItem props={props3} />,
  <ProgramItem props={props4} />,
  <ProgramItem props={props5} />,
  <ProgramItem props={props6} />,
];

function Programs() {
  const [currentProjects, setProjects] = useState(projects);

  const miniProRef = useRef();
  const iconLoadRef = useRef();

  const btnRaising = useRef();
  const btnRunning = useRef();
  const btnCompleted = useRef();

  function handleFilter(num) {
    
    // fake loading API
    miniProRef.current.style.opacity = 0.1;
    iconLoadRef.current.style.display = "block";
    setTimeout(() => {
      miniProRef.current.style.opacity = 1;
      iconLoadRef.current.style.display = "none";
    }, 1000);

    // remove class active on all button
    btnRaising.current.classList.remove("active");
    btnRunning.current.classList.remove("active");
    btnCompleted.current.classList.remove("active");

    var temp = [];

    if (num === 1) {
      btnRaising.current.classList.add("active");
      temp = [...projects];
    } else if (num === 2) {
      btnRunning.current.classList.add("active");
      temp = [...projects].reverse();
    } else {
      btnCompleted.current.classList.add("active");
      temp = [[...projects].slice(3, 6), [...projects].slice(0, 3)];
    }
    setProjects(temp);
  }
  return (
    <div className="body">
      <div className="top_image mx-auto my-12">
        <img
          src="./images/top_image.png"
          className="w-full object-fit"
          alt="nothing"
        />
      </div>

      <div className="intro mx-auto my-16 flex justify-between">
        <img
          src="./images/Rectangle 126.png"
          alt="nothing"
          className="intro_image w-3/6"
        />
        <div className="text w-2/5">
          <p className="text-4xl mt-16 mb-20">Many Exciting Projects</p>
          <p className="text-xl">
            Discover the great meaningful charity projects of Smile Eyes Charity
          </p>
        </div>
      </div>

      {/* paragraph */}
      <div className="paragraph py-16 mb-20 text-lg text-justify">
        <p className="mx-auto">
          The exceptional charities on this list have earned perfect scores
          across all four beacons in our Encompass Rating System. Based on our
          metrics, these organizations are highly impactful in their given cause
          area, are fiscally responsible and transparent, and follow leadership
          and organizational culture best practices. Less than one-tenth of one
          percent of charities we rate earn a perfect score! We applaud these
          charities for being highly impactful and outperforming other
          organizations performing similar work. Please click on the names of
          the high-performing charities included in our list to learn more about
          their mission, programs, and services and to make a donation via the
          Giving Basket.
        </p>
      </div>

      {/* programs */}
      <div className="programs mx-auto">
        {/* filter */}
        <ul className="programs_filter mx-auto mb-16 py-4 flex justify-evenly">
          <li
            className="programs_filter-button active text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnRaising}
            onClick={() => handleFilter(1)}
          >
            Raising
          </li>
          <li
            className="programs_filter-button text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnRunning}
            onClick={() => handleFilter(2)}
          >
            Running
          </li>
          <li
            className="programs_filter-button text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnCompleted}
            onClick={() => handleFilter(3)}
          >
            Completed
          </li>
        </ul>

        <p className="mini_programs-title text-3xl font-medium mb-8">
          Programs which are calling for volunteers and sponsors
        </p>

        {/* mini programs */}
        <img
          src="./images/loading.png"
          alt="icon load"
          className="icon_load"
          ref={iconLoadRef}
        />
        <div
          className="mini_programs-items mx-auto mb-20 grid grid-cols-2 gap-6"
          ref={miniProRef}
        >
          {currentProjects.map((item) => item)}
        </div>
      </div>

      <img
        src="./images/Rectangle 93.png"
        alt="nothing"
        className="object-cover"
      />
    </div>
  );
}

export default Programs;
