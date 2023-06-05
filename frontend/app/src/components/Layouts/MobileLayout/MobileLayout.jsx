import Footer from "../../modules/Footer/Footer";
import MobileHeader from "../../modules/MobileHeader/MobileHeader";
import style from "./MobileLayout.module.css"

function MobileLayout(props) {
    return (
        <div className={style.container}>
            <MobileHeader/>
                <div className={style.innerContent}>
                    {props.children}
                </div>
            <Footer/>
        </div>
    );
}

export default MobileLayout;