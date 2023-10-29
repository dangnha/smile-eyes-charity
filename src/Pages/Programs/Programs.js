import { useEffect, useRef, useState } from "react";
import ProgramItem from "../../Components/Item/program_item/ProgramItem";
import "./programs.css";

const props = [
  {
    id: 1,
    type: "raising",
    title: "Economic development program",
    date: "10/2023~10/2028",
    linkYT: "https://www.youtube.com/embed/bdBG5VO01e0?si=xEOHtxpF1LCmHNAU",
    des: "Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects. Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects.",
    amoutOfLikes: "145.9k",
    progress: 78,
    pitchFile: "/public/pdf/data_struct.pdf",
    planFile: "/public/pdf/intro.pdf",
  },
  {
    id: 2,
    type: "raising",
    title: "The Top 8 Charities in the World",
    date: "10/2023~10/2028",
    linkYT: "https://www.youtube.com/embed/xHegpKx61eE?si=oOO1Pe1FzXLiRpQy",
    des: "The statistics in this video were provided by GiveWell, the World Health Organization, and the websites listed above. Cost estimates may not be 100% accurate, as they're difficult to evaluate and can vary depending on the source. For example, the Against Malaria Foundation estimates that bed nets typically cost between US$2 and US$3, whereas GiveWell puts the price at $4.53.",
    amoutOfLikes: "1.7k",
    progress: 67,
    pitchFile: "/public/pdf/data_struct.pdf",
    planFile: "/public/pdf/intro.pdf",
  },
  {
    id: 3,
    type: "raising",
    title: "Yemen: On the brink of starvation",
    date: "10/2023~10/2028",
    linkYT: "https://www.youtube.com/embed/npk7tfKyXok?si=E1ubB7RWUvoCaCLX",
    des: "The war in Yemen, which began early last year when the government was overthrown by rebel forces, has pushed the country to the brink of famine. This video contains distressing scenes from the start. See more from BBC Our World's documentary Starving Yemen this weekend on BBC World, BBC News and iPlayer.",
    amoutOfLikes: "24k",
    progress: 80,
    pitchFile: "/public/pdf/data_struct.pdf",
    planFile: "/public/pdf/intro.pdf",
  },
  {
    id: 4,
    type: "running",
    title:
      "Quanglinhvlogs || Khoan Giếng Nước Sạch Cho Người Dân Bản Địa Châu Phi",
    date: "10/2023~10/2028",
    linkYT: "https://www.youtube.com/embed/LXcWjzaMwqE?si=6ubyy8q_rcOhWl15",
    des: "Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects. Clean water changes everything. charity: water brings clean and safe drinking water to people in need around the world, improving health, education, and opportunity - especially for women and children. 100% of public donations go directly to clean water projects.",
    amoutOfLikes: "106k",
    progress: 92,
    pitchFile: "/public/pdf/data_struct.pdf",
    planFile: "/public/pdf/intro.pdf",
  },
  {
    id: 5,
    type: "running",
    title: "Lập Quỹ, Tặng Nhà Vệ Sinh Cho Trẻ Vùng Cao",
    date: "10/2023~10/2028",
    linkYT: "https://www.youtube.com/embed/GvIHMITsYTw?si=qWTtHJL6PHGfo-Za",
    des: " Xây nhà vệ sinh cho trẻ em vùng cao là hành động nhỏ nhưng lại mang thông điệp nhân văn rất lớn. Việc làm này của nhóm thiện nguyện VAECO HAN không chỉ giúp cho các thầy cô và học sinh tiếp cận gần hơn với văn hóa học đường dưới xuôi. Nó còn tạo động lực để các em học sinh nghèo vùng cao thích thú hơn khi đến trường, tới lớp.",
    amoutOfLikes: "12.4k",
    progress: 96,
    pitchFile: "/public/pdf/data_struct.pdf",
    planFile: "/public/pdf/intro.pdf",
  },
  {
    id: 6,
    type: "completed",
    title: "Lời Kêu Gọi Donate",
    date: "10/2023~10/2028",
    linkYT: "https://www.youtube.com/embed/sC2sEm0UBVQ?si=tpYTdgVVytiK_TlU",
    des: "Bạn hẳn sẽ không cầm lòng nổi khi biết ở vùng cao, vùng sâu, vùng xa có hàng trăm, hàng ngàn đồng bào của chúng ta đang sống cuộc sống nghèo khó, thiếu thốn. Người già, trẻ em không có nổi tấm chăn, manh áo ấm; các gia đình lay lắt bên những mái nhà xuống cấp không đủ che gió, che mưa; biết bao em bé không có sách để đọc, không có quyển vở cây bút để viết, thậm chí có em không được đến trường",
    amoutOfLikes: "798.8k",
    progress: 100,
    pitchFile: "/public/pdf/data_struct.pdf",
    planFile: "/public/pdf/intro.pdf",
  },
];

const Programs = () => {
  const [filter, setFilter] = useState("raising");
  const [currentPrograms, setCurrentPrograms] = useState([]);
  const [title, setTitle] = useState(
    "Programs which are calling for volunteers and sponsors"
  );

  const miniProRef = useRef();
  const iconLoadRef = useRef();

  const btnRaising = useRef();
  const btnRunning = useRef();
  const btnCompleted = useRef();

  useEffect(() => {
    const temp = props.filter((prop) => prop.type === filter);
    setCurrentPrograms(temp);
    // remove class active on all button
    btnRaising.current.classList.remove("active");
    btnRunning.current.classList.remove("active");
    btnCompleted.current.classList.remove("active");

    if (filter === "raising") {
      btnRaising.current.classList.add("active");
      setTitle("Programs which are calling for volunteers and sponsors");
    } else if (filter === "running") {
      btnRunning.current.classList.add("active");
      setTitle("Programs which are running, people can join it");
    } else {
      btnCompleted.current.classList.add("active");
      setTitle("Programs which have completed");
    }
  }, [filter]);

  const handleFilter = (valFilter) => {
    setFilter(valFilter);

    // fake loading API
    miniProRef.current.style.opacity = 0.1;
    iconLoadRef.current.style.display = "block";
    setTimeout(() => {
      miniProRef.current.style.opacity = 1;
      iconLoadRef.current.style.display = "none";
    }, 1000);
  };

  return (
    <div className="body">
      <div className="top_image mx-auto my-12">
        <img
          src="./images/top_image.png"
          className="mx-auto w-full object-fit"
          alt="nothing"
        />
      </div>

      <div className="intro mx-auto md:my-16 sm:my-14 flex justify-between">
        <img
          src="./images/Rectangle_126.png"
          alt="nothing"
          className="intro_image w-3/6"
        />
        <div className="intro_text text w-2/5">
          <p className="intro_text-title md:text-4xl sm:text-xl mt-16 mb-20">Many Exciting Projects</p>
          <p className="text-xl">
            Discover the great meaningful charity projects of Smile Eyes Charity
          </p>
        </div>
      </div>

      {/* paragraph */}
      <div className="paragraph md:py-16 sm:py-10 md:mb-20 sm:mb-16 text-lg text-justify">
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
            onClick={() => handleFilter("raising")}
          >
            Raising
          </li>
          <li
            className="programs_filter-button text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnRunning}
            onClick={() => handleFilter("running")}
          >
            Running
          </li>
          <li
            className="programs_filter-button text-lg px-6 py-2 hover:cursor-pointer"
            ref={btnCompleted}
            onClick={() => handleFilter("completed")}
          >
            Completed
          </li>
        </ul>

        <p className="mini_programs-title lg:text-3xl md:text-2xl sm:text-xl font-medium mb-8">{title}</p>

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
          {currentPrograms &&
            currentPrograms.map((program) => {
              return (
                <div key={program.id}>
                  <ProgramItem props={program} />
                </div>
              );
            })}
        </div>
      </div>

      <img
        src="./images/Rectangle_93.png"
        alt="nothing"
        className="object-cover w-[100vw]"
      />
    </div>
  );
};

export default Programs;
