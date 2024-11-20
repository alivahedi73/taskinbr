import { useState } from "react";
import "./Navbar.scss";
import { data_image, data_menu } from "./data_navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  let [hover, setHover] = useState(false);
  let [click, setClick] = useState(0);
  return (
    <>
      <div className="nav">
        <div className={`nav__main ${hover ? "nav__active" : null}`}>
          <div className="nav__main__sec1">
            <img className="nav__main__sec1__img" src={data_image.src} alt="" />
          </div>
          <div className="nav__main__sec2">
            {data_menu.map((item, index) => {
              return (
                <div
                  className={`nav__main__sec2__item ${
                    hover ? "nav__main__sec2__itemactive" : null
                  }`}
                  key={index}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(!hover)}
                >
                  {item.name}
                </div>
              );
            })}
            <div className="nav__main__sec2__divsvg">
              <SearchOutlinedIcon className="nav__main__sec2__divsvg__svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
