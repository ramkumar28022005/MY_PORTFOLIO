
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export const Participation = () => {
  const participations = [
    {
      title: "Participated in 36 hours National level hackathon",
      year: "2025"
    },
    {
      title: "Participated in Github copilot with AI coding online workshop",
      year: "2024"
    },
    {
      title: "Participated Snap Augmented reality(AR) bootcamp",
      year: "2023"
    }
  ];

  return (
    <section id="participation" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Participation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participations.map((participation, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6" />
                  <span className="text-sm font-medium">{participation.year}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                  {participation.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
