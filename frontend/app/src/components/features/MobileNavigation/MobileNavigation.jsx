import { useEffect, useRef, useState } from "react";
import Button from "../../shared/Button/Button";
import MenuElement from "../../shared/MenuElement/MenuElement";
import style from "./MobileNavigation.module.css";
import { NavLink } from "react-router-dom";

function MobileNavigation() {
    const [isVisible, setIsVisible] = useState(false);  
    const menuRef = useRef();

    useEffect( () => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [])

    return (
        <nav className={style.container}>
        <div className={`${style.menuBg} ${isVisible ? style.menuBgActive : ''}`}></div>
        <Button onClick={() => setIsVisible(true)}>Menu</Button>
        <div ref={menuRef} className={`${style.menuPoints} ${isVisible ? style.chosen : ''}`}>
            <NavLink className={({isActive}) => isActive ? style.active : ""} to={"/"}><MenuElement>ToDo</MenuElement></NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : ""} to={"/about"}><MenuElement>About</MenuElement></NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : ""} to={"/rating"}><MenuElement>Rating</MenuElement></NavLink>
        </div>
        </nav>
    );
}

export default MobileNavigation;