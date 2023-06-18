import { useSelector } from "react-redux";
import DesktopNavigation from "../../features/DesktopNavigation/DesktopNavigation";
import Profile from "../../features/Profile/Profile";
import ProgressBar from "../../features/ProgressBar/ProgressBar";
import style from "./DesktopHeader.module.css";
import { Typography } from "@mui/material";

function DesktopHeader() {
    const userState = useSelector(state => state.user);
    const percent = userState.currentExp / userState.currentMax * 100;
    const isLoading = useSelector(state => state.user.isLoading);

    return (
        <header className={style.container}>
            {
                isLoading
                ?
                <Typography>Loading...</Typography>
                :
                <ProgressBar level={userState.level} value={percent}/>
            }
            <div className={style.centerElement}><DesktopNavigation/></div>
            <Profile/>
        </header>
    );
}

export default DesktopHeader;