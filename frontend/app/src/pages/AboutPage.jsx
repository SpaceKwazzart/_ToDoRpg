import { useMedia } from 'react-use';
import DesktopLayout from '../components/Layouts/DesktopLayout/DesktopLayout';
import MobileLayout from '../components/Layouts/MobileLayout/MobileLayout';
import { useSelector } from 'react-redux';
import useLayout from '../hooks/useLayout';

function AboutPage() {
    const Layout = useLayout();

    return (
        <>
        <Layout>
            <h1>AboutPage</h1>
        </Layout>
        </>
    );
}

export default AboutPage;