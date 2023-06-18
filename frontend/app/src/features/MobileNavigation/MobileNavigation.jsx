import { Button } from '@mui/material';
import style from "./MobileNavigation.module.css";
import { NavLink } from "react-router-dom";
import usePopUp from "../../hooks/usePopUp";

function MobileNavigation() {
    const [isVisible, setIsVisible, menuRef] = usePopUp(); 

    return (
        <nav className={style.container}>
        <div className={`${style.menuBg} ${isVisible ? style.menuBgActive : ''}`}></div>
        <Button onClick={() => setIsVisible(true)}>Menu</Button>
        <div ref={menuRef} className={`${style.menuPoints} ${isVisible ? style.chosen : ''}`}>
            <NavLink className={({isActive}) => isActive ? style.active : ""} to={"/"}><Button>ToDo</Button></NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : ""} to={"/about"}><Button>About</Button></NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : ""} to={"/rating"}><Button>Rating</Button></NavLink>
        </div>
        </nav>
    );
}

export default MobileNavigation;