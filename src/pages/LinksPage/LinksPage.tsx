import GlassCard from "../../components/GlassCard/GlassCard";
import { logoLinks } from "../../content/links/logoLink";

export default function LinksPage() {
    return (
        <div className="linkspage">
            <h1>These are my Links</h1>

            <GlassCard className="links-container">
                {logoLinks.map(l =>
                    <a href={l.ref} target="_blank" rel="noreferrer" className="course-link">
                        <img className="links-logo" key={l.name} src={l.img} alt={`${l.name} Logo`} />
                    </a>)}
            </GlassCard>
        </div>
    );
}