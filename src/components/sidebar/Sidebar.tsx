import "./sidebar.scss"
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import CreateIcon from '@mui/icons-material/Create';
import ForumIcon from '@mui/icons-material/Forum';
import MessageIcon from '@mui/icons-material/Message';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {

  return (
    <motion.div 
      className="box sidebar"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      >
      <div className="top">
        <Link to="/">
          <img src="/img/icons/icon-black.svg" alt="" />
          <span className="logo">Bonsái</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">-MAIN</p>
          <li>
            <HomeIcon className="icon" />
            <span>Home</span>
          </li>
          <p className="title">-ACTIVITIES</p>
          <li>
            <ListAltIcon className="icon" />
            <span>Microtest</span>
          </li>
          <li>
            <AssignmentIcon className="icon" />
            <span>Scores</span>
            <ul>
              <li>
                <AssignmentIcon className="icon" />
                <span>Workshops</span>
              </li>
              <li>
                <AssignmentIcon className="icon" />
                <span>Homework</span>
              </li>
              <li>
                <AssignmentIcon className="icon" />
                <span>Tests</span>
              </li>
              <li>
                <AssignmentIcon className="icon" />
                <span>Quiz</span>
              </li>
              <li>
                <AssignmentIcon className="icon" />
                <span>Discussions</span>
              </li>
              <li>
                <AssignmentIcon className="icon" />
                <span>Exhibitions</span>
              </li>
            </ul>
          </li>
          <li>
            <CreateIcon className="icon" />
            <span>Ideas</span>
          </li>
          <p className="title">-SEARCHS</p>
          <li>
            <SearchIcon className="icon" />
            <span>Queries</span>
            <ul>
              <li>
                <HelpOutlineIcon className="icon" />
                <span>FAQ</span>
              </li>
              <li>
                <SearchIcon className="icon" />
                <span>Search</span>
              </li>
            </ul>
          </li>
          <li>
            <EventIcon className="icon" />
            <span>Calendar</span>
          </li>
          <li>
            <ForumIcon className="icon" />
            <span>Broadcast</span>
            <ul>
              <li>
                <MessageIcon className="icon" />
                <span>Messages</span>
              </li>
              <li>
                <ChatIcon className="icon" />
                <span>Forum</span>
              </li>
            </ul>
          </li>
          <p className="title">-ABOUT</p>
          <li>
            <PersonIcon className="icon" />
            <span>User</span>
            <ul>
              <li>
                <InfoIcon className="icon" />
                <span>Private</span>
              </li>
              <li>
                <SettingsIcon className="icon" />
                <span>Configuration</span>
              </li>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Log out</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => { }}
        ></div>
        <div
          className="colorOption"
          onClick={() => { }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Sidebar;