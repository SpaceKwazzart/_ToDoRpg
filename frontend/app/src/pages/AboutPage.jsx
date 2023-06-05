import { useMedia } from 'react-use';
import DesktopLayout from '../components/Layouts/DesktopLayout/DesktopLayout';
import MobileLayout from '../components/Layouts/MobileLayout/MobileLayout';

function AboutPage() {
    const isDesktop = useMedia('(min-width: 740px)');

    return (
        <>
        {isDesktop 
        ? <DesktopLayout>
            <h1 className="">About page desktop</h1>
        </DesktopLayout> 
        : <MobileLayout>
            <h1 className="">About page mobile</h1>
        </MobileLayout>
        }
        </>
    );
}

export default AboutPage;