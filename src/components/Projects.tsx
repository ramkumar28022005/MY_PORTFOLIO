
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Ambulance Booking System",
      year: "2025",
      role: "Designer & Frontend Developer",
      description: "Includes real-time ambulance tracking, automatic nearest ambulance allocation, and a user-friendly interface for seamless booking.",
      tags: ["Real-time Tracking", "UI/UX Design", "Frontend Development"]
    },
    {
      title: "Hostel Hub",
      year: "2024",
      role: "Front-end Developer & Designer",
      description: "Attendance tracking for hostel students by using Hostel WiFi range and Geo-Location.",
      tags: ["WiFi Integration", "Geo-Location", "Attendance System"]
    },
    {
      title: "Three Level Password System",
      year: "2023",
      role: "Designer",
      description: "Provides security for application and database. Contains multiple security system (Pin system, Color matching, Pictographical pattern).",
      tags: ["Security", "Multi-factor Authentication", "Database Protection"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Project Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-t-lg">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {project.year}
                  </Badge>
                </div>
                <CardDescription className="text-gray-300">
                  {project.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
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
