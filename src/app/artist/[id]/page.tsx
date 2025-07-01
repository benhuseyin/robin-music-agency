import ArtistClient from "../../components/sections/ArtistClient";

// Generate static params for all artist IDs
const artists = [
  {
    id: 1,
    name: "DJ Phoenix",
    specialties: ["Minimal Techno", "Deep House"],
    image:
      "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Master of hypnotic minimal beats with 10+ years experience",
    location: "Berlin, Germany",
    bio: "DJ Phoenix emerged from Berlin's underground techno scene in 2013, quickly establishing himself as a master of minimal techno and deep house. His hypnotic sets have graced the stages of legendary venues like Berghain, Watergate, and Tresor. Known for his ability to create immersive sonic journeys that transport listeners to otherworldly dimensions, Phoenix combines classic analog warmth with cutting-edge digital precision.",
    yearsActive: "2013 - Present",
    bookingRate: "€2,500 - €5,000",
    soundcloudUrl: "https://soundcloud.com/djphoenix-minimal",
    spotifyUrl: "https://open.spotify.com/artist/djphoenix",
    instagramUrl: "https://instagram.com/djphoenix_official",
    upcomingShows: [
      { venue: "Berghain", city: "Berlin", date: "2025-02-15" },
      { venue: "Fabric", city: "London", date: "2025-03-08" },
      { venue: "Output", city: "New York", date: "2025-03-22" },
    ],
    achievements: [
      "Resident DJ at Watergate Berlin (2018-2022)",
      "Featured on BBC Radio 1 Essential Mix",
      "Over 2M streams on Spotify",
      "Played at 50+ international festivals",
    ],
  },
  {
    id: 2,
    name: "Luna Bass",
    specialties: ["Hard Techno", "Industrial"],
    image:
      "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Bringing raw energy to dancefloors worldwide",
    location: "Detroit, USA",
    bio: "Luna Bass represents the raw, uncompromising spirit of Detroit techno. Born and raised in Motor City, she channels the industrial heritage of her hometown into crushing hard techno sets that leave audiences breathless. Her sound is characterized by relentless 4/4 kicks, distorted basslines, and atmospheric industrial textures that create an apocalyptic dancefloor experience.",
    yearsActive: "2016 - Present",
    bookingRate: "$3,000 - $6,000",
    soundcloudUrl: "https://soundcloud.com/lunabass-hardtechno",
    spotifyUrl: "https://open.spotify.com/artist/lunabass",
    instagramUrl: "https://instagram.com/lunabass_detroit",
    upcomingShows: [
      { venue: "Movement Festival", city: "Detroit", date: "2025-05-24" },
      { venue: "Awakenings", city: "Amsterdam", date: "2025-06-12" },
      { venue: "Time Warp", city: "Mannheim", date: "2025-04-05" },
    ],
    achievements: [
      "Headlined Movement Festival 2023",
      "Released on Drumcode Records",
      "Beatport #1 Hard Techno Track 2024",
      "Played at 75+ events worldwide",
    ],
  },
  {
    id: 3,
    name: "Neon Pulse",
    specialties: ["Progressive House", "Melodic Techno"],
    image:
      "https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Creating emotional journeys through electronic soundscapes",
    location: "Amsterdam, Netherlands",
    bio: "Neon Pulse crafts emotional electronic journeys that blur the lines between progressive house and melodic techno. Based in Amsterdam, this visionary artist has developed a signature sound that combines lush synthesizer work with driving rhythms, creating sets that are both dancefloor-friendly and deeply moving. Each performance is a carefully curated experience designed to take listeners on an emotional rollercoaster.",
    yearsActive: "2017 - Present",
    bookingRate: "€2,000 - €4,500",
    soundcloudUrl: "https://soundcloud.com/neonpulse-progressive",
    spotifyUrl: "https://open.spotify.com/artist/neonpulse",
    instagramUrl: "https://instagram.com/neonpulse_music",
    upcomingShows: [
      { venue: "ADE", city: "Amsterdam", date: "2025-10-18" },
      { venue: "Tomorrowland", city: "Boom", date: "2025-07-26" },
      { venue: "Cercle", city: "Paris", date: "2025-04-15" },
    ],
    achievements: [
      "Tomorrowland mainstage performance 2024",
      "Anjunabeats label signing",
      "5M+ monthly Spotify listeners",
      "Featured in DJ Mag Top 100",
    ],
  },
  {
    id: 4,
    name: "Apex Sound",
    specialties: ["Tech House", "Tribal"],
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Fusion of traditional rhythms with modern electronic beats",
    location: "Ibiza, Spain",
    bio: "Apex Sound brings the heat of Ibiza's legendary club scene to the world. Specializing in tech house with tribal influences, this artist creates infectious grooves that get bodies moving from the first beat. Drawing inspiration from traditional percussion and modern production techniques, Apex Sound has become synonymous with the White Isle's most exclusive venues and beach clubs.",
    yearsActive: "2015 - Present",
    bookingRate: "€3,500 - €7,000",
    soundcloudUrl: "https://soundcloud.com/apexsound-techhouse",
    spotifyUrl: "https://open.spotify.com/artist/apexsound",
    instagramUrl: "https://instagram.com/apexsound_ibiza",
    upcomingShows: [
      { venue: "Pacha", city: "Ibiza", date: "2025-07-12" },
      { venue: "Ushuaïa", city: "Ibiza", date: "2025-08-03" },
      { venue: "Hi Ibiza", city: "Ibiza", date: "2025-09-14" },
    ],
    achievements: [
      "Resident at Pacha Ibiza",
      "Defected Records releases",
      "Ibiza DJ Awards nominee 2023",
      "100+ Ibiza performances",
    ],
  },
  {
    id: 5,
    name: "Cyber Flux",
    specialties: ["Acid Techno", "Breakbeat"],
    image:
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Pushing boundaries with experimental electronic sounds",
    location: "London, UK",
    bio: "Cyber Flux represents the cutting edge of electronic music experimentation. Based in London's vibrant underground scene, this artist pushes the boundaries of acid techno and breakbeat, creating mind-bending sonic experiences that challenge conventional dancefloor expectations. Known for incorporating live hardware manipulation and real-time sound design into performances.",
    yearsActive: "2018 - Present",
    bookingRate: "£2,200 - £4,800",
    soundcloudUrl: "https://soundcloud.com/cyberflux-acid",
    spotifyUrl: "https://open.spotify.com/artist/cyberflux",
    instagramUrl: "https://instagram.com/cyberflux_london",
    upcomingShows: [
      { venue: "Printworks", city: "London", date: "2025-03-29" },
      { venue: "Warehouse Project", city: "Manchester", date: "2025-04-12" },
      { venue: "Dekmantel", city: "Amsterdam", date: "2025-08-07" },
    ],
    achievements: [
      "Printworks headline slot 2024",
      "Warp Records collaboration",
      "NTS Radio resident show",
      "Experimental music award winner",
    ],
  },
  {
    id: 6,
    name: "Echo Chamber",
    specialties: ["Ambient Techno", "Drone"],
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Atmospheric soundscapes for contemplative dancefloors",
    location: "Tokyo, Japan",
    bio: "Echo Chamber creates immersive ambient techno experiences that transport listeners to otherworldly dimensions. Based in Tokyo, this artist combines traditional Japanese aesthetics with modern electronic production, crafting atmospheric soundscapes that are both meditative and rhythmically engaging. Each set is a journey through carefully constructed sonic environments.",
    yearsActive: "2019 - Present",
    bookingRate: "¥300,000 - ¥600,000",
    soundcloudUrl: "https://soundcloud.com/echochamber-ambient",
    spotifyUrl: "https://open.spotify.com/artist/echochamber",
    instagramUrl: "https://instagram.com/echochamber_tokyo",
    upcomingShows: [
      { venue: "Womb", city: "Tokyo", date: "2025-04-18" },
      { venue: "Mutek", city: "Montreal", date: "2025-08-22" },
      { venue: "Sonar", city: "Barcelona", date: "2025-06-15" },
    ],
    achievements: [
      "Mutek Festival featured artist",
      "Ambient album of the year 2023",
      "Collaborated with Ryuichi Sakamoto",
      "50+ ambient/electronic festivals",
    ],
  },
  {
    id: 7,
    name: "Voltage Strike",
    specialties: ["Electro", "Breaks"],
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "High-energy electronic music with vintage flair",
    location: "Los Angeles, USA",
    bio: "Voltage Strike brings the golden age of electro into the modern era with high-energy performances that pay homage to the genre's roots while pushing it forward. Based in Los Angeles, this artist combines vintage analog synthesizers with contemporary production techniques, creating a sound that's both nostalgic and futuristic. Known for explosive live performances featuring classic drum machines and vocoders.",
    yearsActive: "2014 - Present",
    bookingRate: "$2,800 - $5,500",
    soundcloudUrl: "https://soundcloud.com/voltagestrike-electro",
    spotifyUrl: "https://open.spotify.com/artist/voltagestrike",
    instagramUrl: "https://instagram.com/voltagestrike_la",
    upcomingShows: [
      { venue: "Exchange LA", city: "Los Angeles", date: "2025-03-15" },
      {
        venue: "Electric Daisy Carnival",
        city: "Las Vegas",
        date: "2025-05-17",
      },
      {
        venue: "Lightning in a Bottle",
        city: "California",
        date: "2025-05-24",
      },
    ],
    achievements: [
      "EDC Las Vegas headliner 2024",
      "Electro revival pioneer",
      "Vintage synthesizer collector",
      "80+ festival performances",
    ],
  },
  {
    id: 8,
    name: "Quantum Beat",
    specialties: ["Psytrance", "Neurofunk"],
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    coverImage:
      "https://images.pexels.com/photos/1540339/pexels-photo-1540339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop",
    description: "Mind-bending psychedelic electronic experiences",
    location: "Goa, India",
    bio: "Quantum Beat represents the spiritual heart of psychedelic trance, bringing mind-bending experiences to dancefloors around the world. Based in Goa, the birthplace of psytrance, this artist creates complex, layered compositions that take listeners on transcendent journeys. Combining traditional Indian musical elements with cutting-edge neurofunk production, Quantum Beat pushes the boundaries of consciousness through sound.",
    yearsActive: "2016 - Present",
    bookingRate: "₹200,000 - ₹500,000",
    soundcloudUrl: "https://soundcloud.com/quantumbeat-psytrance",
    spotifyUrl: "https://open.spotify.com/artist/quantumbeat",
    instagramUrl: "https://instagram.com/quantumbeat_goa",
    upcomingShows: [
      { venue: "Ozora Festival", city: "Hungary", date: "2025-08-01" },
      { venue: "Boom Festival", city: "Portugal", date: "2025-07-22" },
      { venue: "Sunburn", city: "Goa", date: "2025-12-28" },
    ],
    achievements: [
      "Ozora Festival main stage 2023",
      "Psytrance album of the year",
      "Spiritual healing through music advocate",
      "60+ psychedelic festivals worldwide",
    ],
  },
];

export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id.toString(),
  }));
}

export default function ArtistDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ArtistClient id={params.id} />;
}
