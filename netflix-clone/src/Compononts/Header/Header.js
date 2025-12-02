import React, { useState, useEffect } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-outer-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li className="profile-dropdown">
              <AccountBoxIcon />
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// // import React from "react";
// // import "./header.css";
// // import NetflixLogo from "../../assets/images/NetflixLogo.png";
// // import SearchIcon from "@mui/icons-material/Search";
// // import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// // import AccountBoxIcon from "@mui/icons-material/AccountBox";
// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// // export default Header;
//  import React, { useState, useEffect } from "react";
//  import "./header.css";
//  import NetflixLogo from "../../assets/images/NetflixLogo.png";
//  import SearchIcon from "@mui/icons-material/Search";
//  import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
//  import AccountBoxIcon from "@mui/icons-material/AccountBox";
//  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// const Header = () => {
//   return (
//     <div className="header-outer-container">
//       <div className="header-container">
//         <div className="header-left">
//           <ul>
//             <li>
//               <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//             </li>
//             <li>Home</li>
//             <li>TvShows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Brows By Languages</li>
//           </ul>
//         </div>
//       </div>
//       <div className="header-right">
//         <ul>
//           <li>SearchIcon</li>
//           <li>NotificationNoneIcon</li>
//           <li>AccountBoxIcon</li>
//           <li>ArrowDropDownIcon</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

//  const Header = () => {
//    const [isScrolled, setIsScrolled] = useState(false);

//    useEffect(() => {
//      const handleScroll = () => {
//        if (window.scrollY > 100) {
//          setIsScrolled(true);
//        } else {
//          setIsScrolled(false);
//        }
//      };

//      window.addEventListener("scroll", handleScroll);
//      return () => {
//        window.removeEventListener("scroll", handleScroll);
//      };
//    }, []);

//    return (
//      <div className={`header-outer-container ${isScrolled ? "scrolled" : ""}`}>
//        {/* ... rest of the code remains the same ... */}
//      </div>
//    );
//  };

//  export default Header;
