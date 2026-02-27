import { useState, type ChangeEvent } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./ProjectPage.css"

export default function ProjectPage() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        search(searchTerm);
    }

    return (
        <div className="projectpage">
            <h1>These are my projects!</h1>
            <GlassCard className="search-container">
                <input type="text" placeholder="Search Projects..." value={searchTerm} onChange={handleInputChange} className="search-input" />
            </GlassCard>
        </div>
    );
}

function search(searchTerm: string) {
    console.log(searchTerm);
    return;
}