import styles from "../stylesComponents/MyEvents.module.css";
import CoinFlipCard from "./secundaryComponents/Coinflipcard";
import { useSelector } from "react-redux";
import ModalCardMore from "./ModalComponens/ModalCardMore";
export default function MyEvents() {
  const usersList = useSelector((state) => state.users.usersList);
  const displayMyEventsModal = useSelector((state) => state.modal.modalList);
  return (
    <div className={styles.myevents}>
      {displayMyEventsModal.show && <ModalCardMore />}
      <div className={styles.myeventsheader}>
        <h1 className={styles.myeventsh1}>My events</h1>
      </div>
      <div className={styles.myeventsalldata}>
        {usersList.map((card) => {
          return <CoinFlipCard key={card.id} />;
        })}
      </div>
    </div>
  );
}
