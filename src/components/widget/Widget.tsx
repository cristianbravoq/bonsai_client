import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface IWidget {
    title: string;
    Icon: React.ElementType;
}

const Widget = ({ title, Icon } : IWidget) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          75%
        </span>
        <span className="link">See more</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <Icon className="icon"/>
      </div>
    </div>
  )
}

export default Widget