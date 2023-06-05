import MobileFooter from "../../modules/MobileFooter/MobileFooter";
import MobileHeader from "../../modules/MobileHeader/MobileHeader";
import style from "./MobileLayout.module.css"

function MobileLayout(props) {
    return (
        <div className={style.container}>
            <MobileHeader/>
                <div className={style.innerContent}>
                    {props.children}
                </div>
            <MobileFooter/>
        </div>
    );
}

export default MobileLayout;