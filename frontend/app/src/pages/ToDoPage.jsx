import { useMedia } from 'react-use';
import DesktopLayout from '../components/Layouts/DesktopLayout/DesktopLayout';
import MobileLayout from '../components/Layouts/MobileLayout/MobileLayout';
import Button from '../components/shared/Button/Button';
import { useSelector } from 'react-redux';
import useLayout from '../hooks/useLayout';
import Skills from '../components/modules/Skills/Skills';
import Tasks from '../components/modules/Tasks/Tasks';

function ToDoPage() {
    const Layout = useLayout();

    return (
        <>
        <Layout>
            <Skills/>
            <Tasks/>
        </Layout>
        </>
    );
}

export default ToDoPage;