import styles from './styles.module.css';
import MessagesReceived from './messages';
import RoomAndUsersColumn from './room-and-users';
import SendMessage from './send-message';
import Sidebar from './sidebar';

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <Sidebar />
      <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;
