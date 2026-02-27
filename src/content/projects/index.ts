import type { Project } from "../../types/projects";
import { DiscordBot } from "./discordBot";
import { PersonalWebsite } from "./personalWebsite";

export const projects: Project[] = [
    PersonalWebsite,
    DiscordBot
]