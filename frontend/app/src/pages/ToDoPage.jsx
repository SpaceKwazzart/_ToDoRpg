import { useMedia } from 'react-use';
import DesktopLayout from '../components/Layouts/DesktopLayout/DesktopLayout';
import MobileLayout from '../components/Layouts/MobileLayout/MobileLayout';
import Button from '../components/shared/Button/Button';

function ToDoPage() {
    const isDesktop = useMedia('(min-width: 740px)');

    return (
        <>
        {isDesktop 
        ? <DesktopLayout>
            <h1 className="">ToDoPage on desktop</h1>
        </DesktopLayout> 
        : <MobileLayout>
            <h1 className="">ToDoPage on mobile</h1>
        </MobileLayout>
        }
        </>
    );
}

export default ToDoPage;