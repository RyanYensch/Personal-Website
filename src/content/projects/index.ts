import type { Project } from "../../types/projects";
import { Physics3D } from "./3dPhysics";
import { CodingEscapeRoom } from "./codingEscapeRoom";
import { CSGOSecurityProject } from "./csgoSecurity";
import { DiscordBot } from "./discordBot";
import { FreeRooms } from "./freeRooms";
import { FreeRoomsScrapers } from "./freeRoomsScraper";
import { GameSwipe } from "./gameSwipe";
import { ProfileWebsite } from "./oldProfile";
import { PersonalWebsite } from "./personalWebsite";
import { RouletteSimulator } from "./roulette";
import { SpellCastSolver } from "./spellCast";
import { Toohak } from "./toohak";

export const projects: Project[] = [
    PersonalWebsite,
    DiscordBot,
    FreeRooms,
    FreeRoomsScrapers,
    Toohak,
    CSGOSecurityProject,
    GameSwipe,
    Physics3D,
    CodingEscapeRoom,
    SpellCastSolver,
    ProfileWebsite,
    RouletteSimulator
]