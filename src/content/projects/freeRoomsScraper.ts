import type { Project } from "../../types/projects";

export const FreeRoomsScrapers: Project = {
    slug: "freerooms-scrapers",
    title: "FreeRooms Scrapers",
    summary:
        "Backend scraping infrastructure for the FreeRooms project that collects room availability and study space data from UNSW systems.",
    tags: [
        "TypeScript",
        "Web Scraping",
        "Automation",
        "Backend",
        "Data Processing",
        "Team Project"
    ],
    coverImage: "/freerooms.webp",
    links: {
        github: "https://github.com/devsoc-unsw/freerooms-scrapers"
    },
    sections: [
        {
            heading: "Overview",
            body:
                "This repository contains the data collection infrastructure used by the FreeRooms project. The scrapers gather information about available rooms and study spaces at UNSW so the FreeRooms application can present that data to students in a simple interface."
        },
        {
            heading: "My Contributions",
            body:
                "I developed a new scraper to collect study space availability data. In addition to this, I worked with the team to update the existing room and booking scrapers when the underlying endpoints changed, adapting the scraping logic to work with the new data sources."
        },
        {
            heading: "What the Scrapers Do",
            body:
                "The scrapers periodically retrieve data about room bookings and study spaces from university systems and transform it into a format that the FreeRooms backend can consume. This allows the web application to show which spaces are currently free across campus."
        },
        {
            heading: "Technical Challenges",
            body:
                "A key challenge was maintaining the scrapers when the original endpoints were replaced. Updating the scraping logic required understanding how the new endpoints behaved and ensuring the data pipeline continued to produce consistent results."
        },
        {
            heading: "Why This Project Was Valuable",
            body:
                "Working on this repository provided experience building data collection tools and maintaining infrastructure that supports a real student-facing application. It also involved collaborating with other contributors to keep the system working as upstream changes occurred."
        }
    ]
};