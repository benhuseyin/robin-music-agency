"use client";

import { useState } from "react";
import {
  Music,
  Play,
  Users,
  Calendar,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

const artists = [
  {
    id: 1,
    name: "DJ Phoenix",
    specialties: ["Minimal Techno", "Deep House"],
    image:
      "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Master of hypnotic minimal beats with 10+ years experience",
    location: "Berlin, Germany",
  },
  {
    id: 2,
    name: "Luna Bass",
    specialties: ["Hard Techno", "Industrial"],
    image:
      "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Bringing raw energy to dancefloors worldwide",
    location: "Detroit, USA",
  },
  {
    id: 3,
    name: "Neon Pulse",
    specialties: ["Progressive House", "Melodic Techno"],
    image:
      "https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Creating emotional journeys through electronic soundscapes",
    location: "Amsterdam, Netherlands",
  },
  {
    id: 4,
    name: "Apex Sound",
    specialties: ["Tech House", "Tribal"],
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Fusion of traditional rhythms with modern electronic beats",
    location: "Ibiza, Spain",
  },
  {
    id: 5,
    name: "Cyber Flux",
    specialties: ["Acid Techno", "Breakbeat"],
    image:
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Pushing boundaries with experimental electronic sounds",
    location: "London, UK",
  },
  {
    id: 6,
    name: "Echo Chamber",
    specialties: ["Ambient Techno", "Drone"],
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Atmospheric soundscapes for contemplative dancefloors",
    location: "Tokyo, Japan",
  },
  {
    id: 7,
    name: "Voltage Strike",
    specialties: ["Electro", "Breaks"],
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "High-energy electronic music with vintage flair",
    location: "Los Angeles, USA",
  },
  {
    id: 8,
    name: "Quantum Beat",
    specialties: ["Psytrance", "Neurofunk"],
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    description: "Mind-bending psychedelic electronic experiences",
    location: "Goa, India",
  },
];

export default function Home() {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Robin Music Agency
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#artists"
                className="hover:text-blue-400 transition-colors"
              >
                Artists
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Electronic Music
            <br />
            <span className="text-4xl md:text-6xl">Revolution</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Representing the finest electronic music artists from around the
            globe. From minimal techno to hard industrial beats, we bring the
            underground to the mainstream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-lg px-8"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Artists
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Our Artists</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the talented DJs who are shaping the future of electronic
              music
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <Card
                key={artist.id}
                className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group cursor-pointer backdrop-blur-sm"
                onMouseEnter={() => setHoveredArtist(artist.id)}
                onMouseLeave={() => setHoveredArtist(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-5 w-5 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {artist.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {artist.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    {artist.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-xs text-blue-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                About Robin Music Agency
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Founded in 2015, Robin Music Agency has become a leading force
                in the electronic music scene, representing groundbreaking
                artists who push the boundaries of sound and creativity.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our roster spans the globe, from the underground clubs of Berlin
                to the festival stages of Ibiza, bringing unique electronic
                experiences to audiences worldwide.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    150+
                  </div>
                  <div className="text-gray-400">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    25+
                  </div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
                  <div className="text-gray-400">Artists</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <Users className="h-24 w-24 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to book one of our artists or discuss collaboration
            opportunities?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-400">booking@robinmusicagency.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-gray-400">New York, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Robin Music Agency
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Robin Music Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
