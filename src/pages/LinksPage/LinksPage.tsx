import GlassCard from "../../components/GlassCard/GlassCard";
import { logoLinks } from "../../content/links/logoLink";
import "./LinksPage.css"

export default function LinksPage() {
    return (
        <div className="linkspage">
            <h1>These Are My Links</h1>

            <div className="links-list">
                {logoLinks.map(l => (
                    <GlassCard key={l.name} className="link-item">
                        <a
                            href={l.ref}
                            target="_blank"
                            rel="noreferrer"
                            className="links-link"
                        >
                            <img className="links-icon" src={l.img} alt={`${l.name} Logo`} />
                            <div className="links-text">
                                <span className="links-title">{l.name}</span>
                                {l.description && (
                                    <span className="links-desc">{l.description}</span>
                                )}
                            </div>
                        </a>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}