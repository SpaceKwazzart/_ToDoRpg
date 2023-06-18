import { useSelector } from "react-redux";
import MobileNavigation from "../../features/MobileNavigation/MobileNavigation";
import Profile from "../../features/Profile/Profile";
import ProgressBar from "../../features/ProgressBar/ProgressBar";
import style from "./MobileHeader.module.css";
import { Typography } from "@mui/material";

function MobileHeader() {
    const userState = useSelector(state => state.user);
    const percent = userState.currentExp / userState.currentMax * 100;
    const isLoading = useSelector(state => state.user.isLoading);

    return (
        <header className={style.container}>
            <MobileNavigation/>
            {
                isLoading
                ?
                <Typography>Loading...</Typography>
                :
                <ProgressBar level={userState.level} value={percent}/>
            }
            <Profile/>
        </header>
    );
}

export default MobileHeader;