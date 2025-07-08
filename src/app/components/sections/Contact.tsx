import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
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
  );
};

export default Contact;
