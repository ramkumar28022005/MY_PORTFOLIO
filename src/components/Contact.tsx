
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. Let's connect!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="bg-blue-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">+91 6380 933 738</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="bg-green-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">m.r.ramkumar2005@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Social Links</h3>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                      onClick={() => window.open('http://www.linkedin.com/in/ram2805/', '_blank')}
                    >
                      <Linkedin className="mr-3 h-5 w-5" />
                      LinkedIn Profile
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                      onClick={() => window.open('https://github.com/ramkumar28022005', '_blank')}
                    >
                      <Github className="mr-3 h-5 w-5" />
                      GitHub Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
