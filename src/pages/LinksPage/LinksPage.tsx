import GlassCard from "../../components/GlassCard/GlassCard";
import { logoLinks } from "../../content/links/logoLink";
import "./LinksPage.css"

export default function LinksPage() {
    return (
        <div className="linkspage">

            <div className="links-header">
                <h1>Connect</h1>
                <p>
                    Find me across the web - explore my work, connect professionally,
                    or reach out directly.
                </p>
            </div>

            <div className="links-grid">
                {logoLinks.map(l => (
                    <GlassCard key={l.name} className="link-card">
                        <a
                            href={l.ref}
                            target="_blank"
                            rel="noreferrer"
                            className="link-content"
                        >
                            <img
                                className="link-icon"
                                src={l.img}
                                alt={`${l.name} logo`}
                            />

                            <div className="link-text">
                                {l.description && (
                                    <span className="link-desc">
                                        {l.description}
                                    </span>
                                )}
                            </div>
                        </a>
                    </GlassCard>
                ))}
            </div>

        </div>
    );
}