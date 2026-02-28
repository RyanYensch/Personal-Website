import GlassCard from "../../components/GlassCard/GlassCard";
import { logoLinks } from "../../content/links/logoLink";
import "./LinksPage.css"

export default function LinksPage() {
    return (
        <div className="linkspage">
            <h1>These are my Links</h1>

            <GlassCard className="links-container">
                {logoLinks.map(l =>
                    <a key={l.name} href={l.ref} target="_blank" rel="noreferrer" className="links-link">
                        <img className="links-logo" src={l.img} alt={`${l.name} Logo`} />
                    </a>)}
            </GlassCard>

            <GlassCard className="github-sumamry">
                GitHub Summary
            </GlassCard>

            <GlassCard className="leetcode-summary">
                LeetCode Sumamry
            </GlassCard>
        </div>
    );
}