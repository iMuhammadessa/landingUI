import "./Navbar.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TwitterIcon from "@mui/icons-material/Twitter";
import { blue } from "@mui/material/colors";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <KeyboardBackspaceIcon fontSize="small" />
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <TwitterIcon sx={{ color: blue[500] }} fontSize="small" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
