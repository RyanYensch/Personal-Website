import { useParams } from "react-router-dom";

export default function ProjectDetailsPage() {
    const { slug } = useParams();

    return (
        <div className="projectpage">
            <h1>Project {slug}</h1>
        </div>
    );
}