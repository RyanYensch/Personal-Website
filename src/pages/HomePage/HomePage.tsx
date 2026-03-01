import { Link } from "react-router-dom";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="homepage">

            <section className="hero-section">
                <h1 className="hero-title">Ryan Yensch</h1>
                <p className="hero-subtitle">
                    Mechatronics Engineering & Computer Science Cyber Security Student
                </p>
            </section>

            <GlassCard className="about-card">
                <p className="about-text">
                    To add an about me lol
                </p>
            </GlassCard>

            <div className="home-nav-grid">
                <Link to="/projects" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <span>Projects</span>
                    </GlassCard>
                </Link>

                <Link to="/career" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <span>Career</span>
                    </GlassCard>
                </Link>

                <Link to="/courses" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <span>Courses</span>
                    </GlassCard>
                </Link>

                <Link to="/links" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <span>Links</span>
                    </GlassCard>
                </Link>
            </div>

            <div className="home-socials">
            </div>

        </div>
    );
}