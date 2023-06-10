import { useSelector } from "react-redux";
import DesktopNavigation from "../../features/DesktopNavigation/DesktopNavigation";
import Profile from "../../features/Profile/Profile";
import ProgressBar from "../../features/ProgressBar/ProgressBar";
import style from "./DesktopHeader.module.css";

function DesktopHeader() {
    const userState = useSelector(state => state.user);
    const percent = userState.currentExp / userState.currentMax * 100;

    return (
        <div className={style.container}>
            <ProgressBar value={percent}/>
            <div className={style.centerElement}><DesktopNavigation/></div>
            <Profile/>
        </div>
    );
}

export default DesktopHeader;