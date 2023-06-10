import { useSelector } from "react-redux";
import MobileNavigation from "../../features/MobileNavigation/MobileNavigation";
import Profile from "../../features/Profile/Profile";
import ProgressBar from "../../features/ProgressBar/ProgressBar";
import style from "./MobileHeader.module.css";

function MobileHeader() {
    const userState = useSelector(state => state.user);
    const percent = userState.currentExp / userState.currentMax * 100;

    return (
        <div className={style.container}>
            <MobileNavigation/>
            <ProgressBar value={percent}/>
            <Profile/>
        </div>
    );
}

export default MobileHeader;