import MobileNavigation from "../../features/MobileNavigation/MobileNavigation";
import Profile from "../../features/Profile/Profile";
import ProgressBar from "../../features/ProgressBar/ProgressBar";
import style from "./MobileHeader.module.css";

function MobileHeader() {
    return (
        <div className={style.container}>
            <MobileNavigation/>
            <ProgressBar/>
            <Profile/>
        </div>
    );
}

export default MobileHeader;