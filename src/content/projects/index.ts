import type { Project } from "../../types/projects";
import { Physics3D } from "./3dPhysics";
import { CSGOSecurityProject } from "./csgoSecurity";
import { DiscordBot } from "./discordBot";
import { FreeRooms } from "./freeRooms";
import { FreeRoomsScrapers } from "./freeRoomsScraper";
import { GameSwipe } from "./gameSwipe";
import { PersonalWebsite } from "./personalWebsite";
import { SpellCastSolver } from "./spellCast";

export const projects: Project[] = [
    PersonalWebsite,
    DiscordBot,
    FreeRooms,
    FreeRoomsScrapers,
    CSGOSecurityProject,
    GameSwipe,
    Physics3D,
    SpellCastSolver
]