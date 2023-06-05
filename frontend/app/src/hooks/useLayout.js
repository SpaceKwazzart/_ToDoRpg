import { useSelector } from "react-redux";
import DesktopLayout from "../components/Layouts/DesktopLayout/DesktopLayout";
import MobileLayout from "../components/Layouts/MobileLayout/MobileLayout";

export default function useLayout() {
    const isDesktop = useSelector(state => state.media.isDesktop);
    const Layout = isDesktop ? DesktopLayout : MobileLayout;
    return Layout;
    }