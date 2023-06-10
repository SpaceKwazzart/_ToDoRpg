import useLayout from '../hooks/useLayout';
import Skills from '../components/modules/Skills/Skills';
import Tasks from '../components/modules/Tasks/Tasks';

function ToDoPage() {
    const Layout = useLayout();

    return (
        <>
        <Layout>
            <div style={{
                "display": "flex",
                "flexDirection": "column",
                "textAlign": "center",
        }}>
            <h1>ToDo</h1>
            <Skills/>
            <Tasks/>
            </div>
        </Layout>
        </>
    );
}

export default ToDoPage;