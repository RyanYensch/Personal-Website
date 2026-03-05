import { Link } from "react-router-dom";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./HomePage.css";
import { skills } from "../../content/skills/skills";
import { FolderGit2, Briefcase, GraduationCap, Link as LinkIcon } from "lucide-react";

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
                    I'm Ryan, a Mechatronics Engineering and Computer Science student at UNSW with a strong
                    interest in cybersecurity, systems, and building things that actually work in the real world.
                    I enjoy exploring how software and hardware interact, from web applications and APIs to
                    embedded systems and FPGA design. Most of my projects come from curiosity of learning how
                    things break, how they work, and how to build them better.
                </p>
            </GlassCard>

            <div className="home-nav-grid">

                <Link to="/projects" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <FolderGit2 className="nav-icon" />
                        <span>Projects</span>
                    </GlassCard>
                </Link>

                <Link to="/courses" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <GraduationCap className="nav-icon" />
                        <span>Courses</span>
                    </GlassCard>
                </Link>

                <Link to="/career" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <Briefcase className="nav-icon" />
                        <span>Career</span>
                    </GlassCard>
                </Link>

                <Link to="/links" className="nav-tile">
                    <GlassCard className="glass-tile">
                        <LinkIcon className="nav-icon" />
                        <span>Links</span>
                    </GlassCard>
                </Link>

            </div>

            <div className="home-socials">
            </div>

            <GlassCard className="skills-card">
                <h2 className="skills-title">Technologies & Skills</h2>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skills-category">
                            <h3 className="skills-category-title">{category}</h3>

                            <div className="skills-tags">
                                {items.map(skill => (
                                    <Link
                                        key={skill}
                                        to={`/projects?q=${encodeURIComponent(skill)}`}
                                        className="skills-link"
                                    >
                                        <GlassCard className="skills-tag">
                                            {skill}
                                        </GlassCard>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

        </div>
    );
}