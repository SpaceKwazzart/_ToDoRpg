import DesktopNavigation from "../../features/DesktopNavigation/DesktopNavigation";
import Profile from "../../features/Profile/Profile";
import ProgressBar from "../../features/ProgressBar/ProgressBar";
import style from "./DesktopHeader.module.css";

function DesktopHeader() {
    return (
        <div className={style.container}>
            <ProgressBar/>
            <div className={style.centerElement}><DesktopNavigation/></div>
            <Profile/>
        </div>
    );
}

export default DesktopHeader;