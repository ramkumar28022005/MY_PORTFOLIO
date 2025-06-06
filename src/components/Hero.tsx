
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img
                src="/lovable-uploads/302809a4-5550-46e2-b820-c7a41a3f183f.png"
                alt="Ramkumar M R"
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover border-4 border-white shadow-2xl"
              />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              RAMKUMAR M R
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
              Software Engineer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="mr-2 h-5 w-5" />
                CONTACT ME
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+91 6380 933 738</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:m.r.ramkumar2005@gmail.com" className="hover:text-blue-400 transition-colors">
                  m.r.ramkumar2005@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-400" />
                <a href="http://www.linkedin.com/in/ram2805/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-blue-400" />
                <a href="https://github.com/ramkumar28022005" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
