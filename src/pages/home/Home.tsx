import "./home.scss";
import NavBar from "@components/navbar/Navbar";
import Sidebar from "@components/sidebar/Sidebar";
import Widget from "@components/widget/Widget";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Notification from "@components/notification/Notification";
import Chat from "@components/chat/Chat";
import UserProfile from "@components/cards/user/User";
import Dashboard from "./dashboard/Dashboard";
import { SliderCourses } from "@components/cards/slider/courses";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <NavBar />
        <Dashboard>
          <div className="widgets">
            <Widget title={"User"} Icon={PersonOutlinedIcon} />
            <Widget title={"User"} Icon={AccountBalanceWalletOutlinedIcon} />
          </div>
          <Notification />
          <Chat />
          <UserProfile />
          <SliderCourses />
        </Dashboard>
      </div>
    </div>
  );
};

export default Home;
