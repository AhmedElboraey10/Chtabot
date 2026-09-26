import RobotProfileImage from '../assets/robot.png'
import UserProfilImage from '../assets/user.png'
import userProfilePhoto from '../assets/user-profile.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender, time }) {
    return (
        <div
            className={
                sender === "robot" ? "chat-message-robot" : "chat-message-user"
            }
        >
            {
                sender === "robot" && <img
                    src = {RobotProfileImage}
                    className="chat-message-profile"
                />
            }
            <div
                className="chat-message-text"
            >
                {message}
                <p
                className="time"
                >
                    {time}
                </p>
            </div>
            {
                sender === "user" && <img
                    src = {userProfilePhoto}
                    className="chat-message-profile"
                />
            }
        </div>
    );
}