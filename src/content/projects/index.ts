import type { Project } from "../../types/projects";
import { DiscordBot } from "./discordBot";
import { FreeRooms } from "./freeRooms";
import { FreeRoomsScrapers } from "./freeRoomsScraper";
import { PersonalWebsite } from "./personalWebsite";

export const projects: Project[] = [
    PersonalWebsite,
    DiscordBot,
    FreeRooms,
    FreeRoomsScrapers
]