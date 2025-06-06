
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Completed Developing Android Apps with inventor in Coursera",
      year: "2024"
    },
    {
      title: "Completed Organizational Analysis in Coursera",
      year: "2024"
    },
    {
      title: "Completed AWS S3 Basics in Coursera",
      year: "2024"
    },
    {
      title: "Microsoft Azure fundamentals(AZ-900)",
      year: "2025"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                      {cert.title}
                    </CardTitle>
                    <span className="text-sm font-medium text-green-600 ml-4">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
