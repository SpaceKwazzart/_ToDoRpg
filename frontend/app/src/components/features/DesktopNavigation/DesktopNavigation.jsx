import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import style from "./DesktopNavigation.module.css";

function DesktopNavigation() {
    return (
        <nav className={style.container}>
            <NavLink 
            className={({isActive}) => isActive ? style.active : ""}
            to={"/about"}>
                <Button>About</Button>
            </NavLink>

            <NavLink
            className={({isActive}) => isActive ? style.active : ""}
            to={"/"}><Button>ToDo</Button>
            </NavLink>

            <NavLink
            className={({isActive}) => isActive ? style.active : ""}
            to={"/rating"}><Button>Rating</Button>
            </NavLink>
        </nav>
    );
}

export default DesktopNavigation;