import { useParams } from "react-router-dom";

export default function ProjectPage() {
    const { slug } = useParams();

    return (
        <div className="projectpage">
            <h1>This is a page</h1>
        </div>
    );
}