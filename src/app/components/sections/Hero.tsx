import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Calendar, Play } from "lucide-react";
import Image from "next/image";
import TourDates from "@/assets/images/image_mo_tour_dates.webp";
import useScroll from "@/utils/hooks/useScroll";

const Hero = () => {
  const { handleScroll } = useScroll();
  return (
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-lg px-8 cursor-pointer"
            onClick={(e) => handleScroll(e, "artists")}
          >
            <Play className="mr-2 h-5 w-5" />
            Explore Artists
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 cursor-pointer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Events
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-800 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
                  Upcoming Events
                </DialogTitle>
              </DialogHeader>

              <Image
                src={TourDates}
                alt={"Tour dates"}
                className="w-full h-full object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero;
