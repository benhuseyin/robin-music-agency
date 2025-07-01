"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Play,
  Pause,
  ExternalLink,
  MapPin,
  Calendar,
  Music2,
  Users,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { artists } from "@/utils/constants/data";
import Image from "next/image";
interface Props {
  id: string;
}

const ArtistClient = ({ id }: Props) => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const artistId = parseInt(id);
  const artist = artists.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artist Not Found</h1>
          <Button
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-blue-600 to-purple-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="text-white hover:text-blue-400"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Artists
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Music2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Robin Music Agency
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={artist.coverImage}
          alt={`${artist.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-end space-x-6">
            <Image
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 rounded-lg object-cover border-4 border-white/20"
            />
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2">{artist.name}</h1>
              <p className="text-xl text-gray-300 mb-4">{artist.description}</p>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {artist.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {artist.yearsActive}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Bio and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Biography</h2>
                <p className="text-gray-300 leading-relaxed">{artist.bio}</p>
              </CardContent>
            </Card>

            {/* Music Player */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Latest Tracks</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Button
                        size="sm"
                        onClick={togglePlay}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <div>
                        <div className="font-semibold">
                          Midnight Frequencies
                        </div>
                        <div className="text-sm text-gray-400">
                          Latest Release
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">4:32</div>
                  </div>

                  <div className="flex items-center justify-center py-8">
                    <Button
                      onClick={() =>
                        window.open(artist.soundcloudUrl, "_blank")
                      }
                      className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Listen on SoundCloud
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Shows */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Upcoming Shows</h2>
                <div className="space-y-4">
                  {artist.upcomingShows.map((show, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                    >
                      <div>
                        <div className="font-semibold">{show.venue}</div>
                        <div className="text-sm text-gray-400">{show.city}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          {new Date(show.date).toLocaleDateString()}
                        </div>
                        <Button size="sm" variant="outline" className="mt-2">
                          Get Tickets
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Specialties */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map(
                    (specialty: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-200"
                      >
                        {specialty}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Booking Info */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Booking Information</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400">Booking Rate</div>
                    <div className="font-semibold">{artist.bookingRate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Years Active</div>
                    <div className="font-semibold">{artist.yearsActive}</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 mt-4">
                    Book {artist.name}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Follow</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open(artist.soundcloudUrl, "_blank")}
                  >
                    <Music2 className="mr-2 h-4 w-4" />
                    SoundCloud
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open(artist.spotifyUrl, "_blank")}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Spotify
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open(artist.instagramUrl, "_blank")}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Achievements</h3>
                <ul className="space-y-2">
                  {artist.achievements.map(
                    (achievement: string, index: number) => (
                      <li
                        key={index}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistClient;
