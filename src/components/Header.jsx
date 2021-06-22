import { FaCalendarAlt, FaCamera, FaCommentDots } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  //todo links imitation
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ size: 50, className: "icon" }}>
              <FaCalendarAlt />
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ size: 50, className: "icon" }}>
              <FaCamera />
            </IconContext.Provider>
          </Link>
        </li>
        <li>
          <Link to="/">
            <IconContext.Provider value={{ size: 50, className: "icon" }}>
              <FaCommentDots />
            </IconContext.Provider>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
