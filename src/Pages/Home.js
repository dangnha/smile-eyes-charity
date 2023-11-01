import React, { useState } from "react";
import LargeProgramItem from "../Components/Item/program_item/LargeProgramItem";
import ProgramItem from "../Components/Item/program_item/ProgramItem";
import ProjectDone from "../Components/Item/program_item/ProjectDone";
import Button from "../Components/Button/Button";
import "./Home.css";
import BlogModel from "../Components/Item/model/BlogModel";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [showBlogModel, setShowBlogModel] = useState(false);

  const video_introduce = {
    title: t("item_title"),
    date: "01/11/2023 ~ 01/11/2028",
    place:
      "cụm dân cư Pà-Căng mới, thôn Pà-Ong, xã Cà-Dy, huyện Nam Giang, tỉnh Quảng Nam, Việt Nam ",
    linkYT:
      "https://www.youtube.com/embed/543jwFfCZvg?list=PLp6D8X7L5wgbTLG-OR0q8hJws4wD18e7o",
    des: "Cụm dân cư Pà Căng mới nằm bên dòng sông Dakmy xinh đẹp, phía sau là những dãy núi Trường Sơn hiền hòa. Làng có 30 hộ gia đình người Cơ Tu, trong đó 26 hộ nghèo (thu nhập dưới 1.500.000 VND/hộ/tháng) và 4 hộ cận nghèo. Hằng ngày bà con vào rừng hoặc ra sông tìm kiếm đồ ăn hoặc những món có thể bán. Nỗi lo lắng lớn nhất của người dân ở đây là thiếu ăn thiếu mặc, nhất là vào mùa mưa. ",
    amoutOfLikes: "300",
    pitchFile:
      "https://drive.google.com/drive/folders/1LjAQWPc2vkj9a4qdBJ7ngHfznyCdaOuF",
    planFile:
      "https://docs.google.com/document/d/1E3FJ-_xRJVNIufNneIlmX5srQkppdrp2/edit?rtpof=true",
  };

  const projects = [
    {
      title: "XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN",
      date: "01/11/2023 - 01/11/2025 (2 năm)",
      place: "cụm dân cư Pà-Căng mới",
      linkYT: "https://www.youtube.com/embed/z9dccqTJIVs",
      des: "Mỗi hộ có diện tích vườn trên 500m2. Có điện nước đầy đủ. Hơn nữa bà con có tập quán trồng trọt và chăn nuôi. Dự án nhằm xây dựng mô hình trồng trọt và chăn nuôi quy mô nhỏ trong cụm dân cư. Dự án sẽ đồng hành cùng bà con trong quá trình xây dựng, phát triển mô hình. Qua đó, chia sẻ kiến thức khoa họa và kỹ năng làm vườn, giúp bà con hiểu sâu sắc về làm kinh tế vườn và tự xây dựng được mô hình kinh tế vườn cho gia đình của mình. Kết quả là vườn nhà được sử dụng hiệu quả, mức sống được nâng cao. Hơn nữa, góp phần làm môi trường xanh sạch đẹp.",
      amoutOfLikes: "179",
    },
    {
      title: "XÂY DỰNG XƯỞNG SẢN XUẤT PHÂN HỮU CƠ",
      date: "01/11/2023 ~ 01/11/2025 (2 năm)",
      place: "cụm dân cư Pà-Căng mới",
      linkYT: "https://www.youtube.com/embed/z9dccqTJIVs",
      des: "Phân bón hữu cơ là yếu tố quan trọng quyết định chất lượng và sản lượng cây trồng. Dự án nhằm tái sử dụng các chất thải gia súc gia cầm, rác thải gia đình, rác thải nông nghiệp trong làng để làm nguồn phân cung cấp cho các mô hình kinh tế vườn và trang trại của bà con. Kết quả là bà con có phân bón hữu cơ chất lượng cho vườn của mình với chi phí thấp. Hơn nữa, bà con hiểu được quy trình làm rác và giá trị của rác, bà con sẽ tận dụng chúng cho việc phát triển nông nghiệp. Từ đó góp phần làm cho môi trường trong làng xanh sạch đẹp.",
      amoutOfLikes: "212",
    },
    // {
    //   title: "PROJECT DEVELOPMENT PÀ-ONG VILLAGE",
    //   date: "20/10/2022",
    //   linkYT: "https://www.youtube.com/embed/z9dccqTJIVs",
    //   des: "Improve the quality of life of children and their families through the provision of services and resources necessary for their full physical, mental and educational development.",
    //   amoutOfLikes: "300",
    // },
  ];

  const projects_done = [
    // {
    //   title: "PROJECT DEVELOPMENT PÀ-ONG VILLAGE",
    //   date: "20/10/2022",
    //   linkYT: "https://www.youtube.com/embed/z9dccqTJIVs",
    //   des: "Improve the quality of life of children and their families through the provision of services and resources necessary for their full physical, mental and educational development.",
    //   amoutOfLikes: "300",
    //   cost: "10.000.000 VND",
    // },
  ];

  return (
    <div>
      <div className="content">
        <div className="video_introduce">
          <LargeProgramItem
            title={video_introduce.title}
            date={video_introduce.date}
            place={video_introduce.place}
            linkYT={video_introduce.linkYT}
            des={video_introduce.des}
            amoutOfLikes={video_introduce.amoutOfLikes}
            pitchFile={video_introduce.pitchFile}
            planFile={video_introduce.planFile}
          />
        </div>

        <div className="project_calling">
          <div className="title_button">
            <p id="title_project">
              Programs which are calling for volunteers and sponsors
            </p>
            <div id="button_see_all">
              <Button text="See all" />
            </div>
          </div>

          <div className="project">
            {projects.map((project, index) => (
              <div id="item_project" key={index}>
                <ProgramItem props={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="project_running">
          <div className="title_button">
            <p id="title_project">Volunteer Programs which are running</p>
            <div id="button_see_all">
              <Button text="See all" />
            </div>
          </div>

          <div className="project">
            {projects.map((project, index) => (
              <div id="item_project" key={index}>
                <ProgramItem props={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="project_done">
          <div className="title_button">
            <p id="title_project">Projects done</p>
            <div id="button_see_all">
              <Button text="See all" />
            </div>
          </div>

          <div className="project">
            {projects_done.map((project_done, index) => (
              <div id="item_project" key={index}>
                <ProjectDone
                  title={project_done.title}
                  date={project_done.date}
                  linkYT={project_done.linkYT}
                  des={project_done.des}
                  amoutOfLikes={project_done.amoutOfLikes}
                  cost={project_done.cost}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="blog">
        <p id="blog_title">BLOGS</p>
        <div className="blog_content">
          <div className="blog_image">
            <div className="blog_image1">
              <div className="image1">
                <img className="img-fit" src="../image/1.jpg" alt="Not found" />
              </div>
              <div className="image1">
                <img
                  className="img-fit"
                  src="../image/tre-em.jpg"
                  alt="Not found"
                />
              </div>
            </div>
            <div className="blog_image2">
              <img
                className="img-fit"
                src="../image/chum-anh-nhung-doi-mat-nu-cuoi-rat-trong-cua-cac-em-be-vung-cao.webp"
                alt="Not found"
              />
            </div>
          </div>
          <div className="blog_des">
            <i class="fa-solid fa-quote-left fa-2xl mr-auto"></i>
            <p className="des_title_blog mt-5">
              We provide opportunity support for children living in the
              highlands, mountains and disadvantaged areas in Nam Giang. Our
              main goal is to improve the quality of life of children so that
              they develop comprehensively physically, mentally and
              educationally.
            </p>
            <i class="fa-solid fa-quote-right fa-2xl ml-auto mt-5"></i>
            <div
              className="blog_seemore flex flex-col items-center"
              onClick={() => setShowBlogModel(!showBlogModel)}
            >
              <p className="mt-10">See more</p>
              <i class="fa-solid fa-chevron-down fa-lg mt-2"></i>
            </div>
          </div>
        </div>

        <div className="blog_content">
          <div className="blog_des">
            <i class="fa-solid fa-quote-left fa-2xl mr-auto"></i>
            <p className="des_title_blog mt-5">
              We provide opportunity support for children living in the
              highlands, mountains and disadvantaged areas in Nam Giang. Our
              main goal is to improve the quality of life of children so that
              they develop comprehensively physically, mentally and
              educationally.
            </p>
            <i class="fa-solid fa-quote-right fa-2xl ml-auto mt-5"></i>
            <div
              className="blog_seemore flex flex-col items-center"
              onClick={() => setShowBlogModel(!showBlogModel)}
            >
              <p className="mt-10">See more</p>
              <i class="fa-solid fa-chevron-down fa-lg mt-2"></i>
            </div>
          </div>

          <div className="blog_image">
            <div className="blog_image1">
              <div className="image1">
                <img className="img-fit" src="../image/1.jpg" alt="Not found" />
              </div>
              <div className="image1">
                <img
                  className="img-fit"
                  src="../image/tre-em.jpg"
                  alt="Not found"
                />
              </div>
            </div>
            <div className="blog_image2">
              <img
                className="img-fit"
                src="../image/chum-anh-nhung-doi-mat-nu-cuoi-rat-trong-cua-cac-em-be-vung-cao.webp"
                alt="Not found"
              />
            </div>
          </div>
        </div>
      </div>

      {showBlogModel && <BlogModel onClose={() => setShowBlogModel(false)} />}

      <div className="profile flex flex-row items-center">
        <div className="profile_des">
          <div className="circle"></div>
          <i class="icon_profile fa-solid fa-quote-left fa-2xl mr-auto"></i>
          <p className="profile_des_text mt-5">
            We provide opportunity support for children living in the highlands,
            mountains and disadvantaged areas in Nam Giang. Our main goal is to
            improve the quality of life of children so that they develop
            comprehensively physically, mentally and educationally.
          </p>
          <i class="fa-solid fa-quote-right fa-2xl ml-auto mt-5"></i>
        </div>

        <div className="profile_intro">
          <img
            className="image_profile mx-auto"
            src="../image/168730.png"
            alt=""
          ></img>
          <div className="mt-5">
            <p className="profile_intro_text1">DINH THI DONG PHUONG</p>
            <p className="profile_intro_text2 mt-2">FOUNDER</p>
            <p className="profile_intro_text2 mt-2">From: Smile Eye Charity</p>
            <p className="profile_intro_text2">
              Email: dinhdongphuong@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="who_we_are flex flex-row">
        <div className="our_information">
          <p className="our_information_heading1">Who we are</p>
          <p className="our_information_heading2">Our impact</p>
          <p className="our_information_heading3">
            We provide opportunity support for children living in the highlands,
            mountains and disadvantaged areas in Nam Giang. Our main goal is to
            improve the quality of life of children so that they develop
            comprehensively physically, mentally and educationally.
          </p>
          <div className="button_introduce flex flex-row gap-10">
            <div className="button_donate">
              <button className="text-white text-xl font-normal rounded-[10px] bg-[#396D00] px-3 py-2">
                Donate now <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div className="button_contact">
              <button className="text-xl font-normal px-3 py-2">
                Contact us<i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="icon_information">
          <div className="icon_information1">
            <i class="fa-solid fa-house-user fa-2xl"></i>
            <p>Smile Eye Charity Company</p>
          </div>
          <div className="icon_information2 ">
            <i class="fa-solid fa-location-dot fa-2xl"></i>
            <p>Pà-Ong, Cà Dy, Nam Giang</p>
          </div>
          <div className="icon_information1">
            <i class="fa-solid fa-person fa-2xl"></i>
            <p>Many projects in process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
