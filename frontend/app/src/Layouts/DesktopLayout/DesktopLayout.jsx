import DesktopHeader from "../../modules/DesktopHeader/DesktopHeader";
import Footer from '../../modules/Footer/Footer';
import style from './DesktopLayout.module.css';

function DesktopLayout(props) {
    return (
        <div className={style.container}>
            <DesktopHeader/>
                <div className={style.innerContent}>
                {props.children}
                </div>
            <Footer/>
        </div>
    );
}

export default DesktopLayout;