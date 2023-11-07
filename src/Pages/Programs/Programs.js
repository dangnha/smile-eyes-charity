import { useEffect, useRef, useState } from "react";
import ProgramItem from "../../Components/Item/program_item/ProgramItem";
import Projects from "../Projects";
import "./programs.css";

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
    const temp = Projects.filter((project) => project.type === filter);
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
          className="w-full object-fit"
          alt="nothing"
        />
      </div>

      <div className="intro mx-auto my-16 flex justify-between">
        <img
          src="./images/Rectangle_126.png"
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

        <p className="mini_programs-title text-3xl font-medium mb-8">{title}</p>

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
