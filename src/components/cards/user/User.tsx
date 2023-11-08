import "./user.scss"
import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


interface IClassShortcut {
    avatar: React.ElementType;
    name: string;
  }
  
  const UserProfile: React.FC = () => {
    const [editingStatus, setEditingStatus] = useState(false);
    const [status, setStatus] = useState("Busy");
    const classes: IClassShortcut[] = [
      { avatar: AccountCircleIcon, name: "Math" },
      { avatar: AccountCircleIcon, name: "History" },
      { avatar: AccountCircleIcon, name: "Biology" },
      { avatar: AccountCircleIcon, name: "Sports" },
      { avatar: AccountCircleIcon, name: "Arts" },
      { avatar: AccountCircleIcon, name: "Lenguage" },
    ];
  
    const toggleEditingStatus = () => {
      setEditingStatus((prevState) => !prevState);
    };
  
    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setStatus(event.target.value);
    };
  
    return (
      <div className="user-profile">
        <div className="avatar-container">
          <AccountCircleIcon  className="user-avatar"/>
          <span className="edit-avatar-button">+</span>
        </div>
        <h2 className="user-name">Username</h2>
        {editingStatus ? (
          <input
            type="text"
            className="status-input"
            value={status}
            onChange={handleStatusChange}
          />
        ) : (
          <p className="user-status">{status}</p>
        )}
        <button className="edit-status-button" onClick={toggleEditingStatus}>
          {editingStatus ? "Save" : "Edit status"}
        </button>
        <div className="class-shortcuts">
          {classes.map((classShortcut, index) => (
            <div key={index} className="class-shortcut">
              <classShortcut.avatar className="class-avatar" />
              <p className="class-name">{classShortcut.name}</p>
            </div>
          ))}
        </div>
        <button className="edit-profile-button">Edit profile</button>
      </div>
    );
  };
  
  export default UserProfile;