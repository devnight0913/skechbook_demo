import { TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/sketch_logo.png";

// import { setWord } from "../actions/book";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authSearchDOM = document.getElementById("auth-search");
    const titleSearchDOM = document.getElementById("title-search");
    authSearchDOM.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        navigate(`/search/${event.target.value}/auth`);
      }
    });
    titleSearchDOM.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        navigate(`/search/${event.target.value}/title`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navbar bg-dark">
      <Link to="/">
        {/* <img src={logo} alt="adsf" height={"45px"} width={"auto"} /> */}
        <h1>Home</h1>
      </Link>

      <ul>
        <li>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.4 }} />
            <TextField
              id="auth-search"
              label="Search Auth"
              variant="standard"
              size="small"
              type="search"
            />
          </Box>
        </li>

        <li>
          <Box sx={{ display: "flex", alignItems: "flex-end", ml: 3 }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.4 }} />
            <TextField
              id="title-search"
              label="Search Title"
              variant="standard"
              size="small"
              type="search"
            />
          </Box>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
