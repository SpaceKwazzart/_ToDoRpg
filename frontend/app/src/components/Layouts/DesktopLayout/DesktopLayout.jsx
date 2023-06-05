import DesktopFooter from "../../modules/DesktopFooter/DesktopFooter";
import DesktopHeader from "../../modules/DesktopHeader/DesktopHeader";
import style from './DesktopLayout.module.css';

function DesktopLayout(props) {
    return (
        <div className={style.container}>
            <DesktopHeader/>
                <div className={style.innerContent}>
                {props.children}
                </div>
            <DesktopFooter/>
        </div>
    );
}

export default DesktopLayout;