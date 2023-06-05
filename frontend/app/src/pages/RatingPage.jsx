import { useMedia } from 'react-use';
import DesktopLayout from '../components/Layouts/DesktopLayout/DesktopLayout';
import MobileLayout from '../components/Layouts/MobileLayout/MobileLayout';

function RatingPage() {
    const isDesktop = useMedia('(min-width: 740px)');

    return (
        <>
        {isDesktop 
        ? <DesktopLayout>
            <h1 className="">I am rating page desktop</h1>
        </DesktopLayout> 
        : <MobileLayout>
            <h1 className="">I am rating page mobile</h1>
        </MobileLayout>
        }
        </>
    );
}

export default RatingPage;