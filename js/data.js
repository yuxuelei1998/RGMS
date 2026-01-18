const musicSchools = [
    {
        id: 1,
        name: "The Juilliard School",
        location: "New York, USA",
        region: "North America",
        score: 98.5,
        description: "A world leader in performing arts education, offering degrees in dance, drama, and music.",
        badges: ["#1 Overall", "Performing Arts"]
    },
    {
        id: 2,
        name: "Royal College of Music",
        location: "London, UK",
        region: "Europe",
        score: 97.2,
        description: "One of the world's great conservatoires, training gifted musicians from all over the world.",
        badges: ["Historic", "Research Leader"]
    },
    {
        id: 3,
        name: "Royal Academy of Music",
        location: "London, UK",
        region: "Europe",
        score: 96.8,
        description: "Britain's oldest conservatoire, providing pre-professional training for musicians.",
        badges: ["Elite Alumni", "Classic"]
    },
    {
        id: 4,
        name: "Curtis Institute of Music",
        location: "Philadelphia, USA",
        region: "North America",
        score: 96.1,
        description: "One of the most selective institutes in the world, educating and training exceptionally gifted young musicians.",
        badges: ["Highly Selective", "Full Scholarship"]
    },
    {
        id: 5,
        name: "Conservatoire de Paris (CNSMDP)",
        location: "Paris, France",
        region: "Europe",
        score: 95.5,
        description: "A college of music and dance founded in 1795, offering world-class instruction.",
        badges: ["Public", "Historic"]
    },
    {
        id: 6,
        name: "University of Music and Performing Arts Vienna",
        location: "Vienna, Austria",
        region: "Europe",
        score: 95.0,
        description: "One of the largest and most renowned universities for music and performing arts worldwide.",
        badges: ["Classical Hub", "Large Campus"]
    },
    {
        id: 7,
        name: "Berklee College of Music",
        location: "Boston, USA",
        region: "North America",
        score: 94.2,
        description: "The largest independent college of contemporary music in the world.",
        badges: ["Contemporary", "Jazz/Pop"]
    },
    {
        id: 8,
        name: "Guildhall School of Music and Drama",
        location: "London, UK",
        region: "Europe",
        score: 93.8,
        description: "A vibrant, international community of young musicians, actors and production artists.",
        badges: ["Cross-Arts", "Innovation"]
    },
    {
        id: 9,
        name: "New England Conservatory",
        location: "Boston, USA",
        region: "North America",
        score: 93.1,
        description: "The oldest independent music conservatory in the United States.",
        badges: ["Chamber Music", "Oldest US"]
    },
    {
        id: 10,
        name: "Moscow Tchaikovsky Conservatory",
        location: "Moscow, Russia",
        region: "Europe", // Geographically simpler for filter
        score: 92.5,
        description: "A historical musical educational institution located in Moscow.",
        badges: ["Piano Excellence", "Traditional"]
    },
    {
        id: 11,
        name: "Sibelius Academy",
        location: "Helsinki, Finland",
        region: "Europe",
        score: 91.8,
        description: "Part of the University of the Arts Helsinki, known for its high standard of teaching.",
        badges: ["Nordic", "Creative"]
    },
    {
        id: 12,
        name: "Central Conservatory of Music",
        location: "Beijing, China",
        region: "Asia",
        score: 90.5,
        description: "The leading music school in China, training the nation's top musicians.",
        badges: ["Asia Top", "Comprehensive"]
    }
];
