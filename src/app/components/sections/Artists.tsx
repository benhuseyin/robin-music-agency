import { artists } from "@/utils/constants/data";
import { Card, CardContent } from "@/app/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Artists = () => {
  const router = useRouter();

  const handleArtistClick = (artistId: number) => () => {
    router.push(`/artist/${artistId}`);
  };

  return (
    <section id="artists" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Our Artists</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the talented DJs who are shaping the future of electronic music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group cursor-pointer backdrop-blur-sm"
              onClick={handleArtistClick(artist.id)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={100}
                  height={100}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
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
  );
};

export default Artists;
