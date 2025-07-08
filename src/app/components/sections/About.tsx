import { Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              About Robin Music Agency
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Founded in 2015, Robin Music Agency has become a leading force in
              the electronic music scene, representing groundbreaking artists
              who push the boundaries of sound and creativity.
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
  );
};

export default About;
