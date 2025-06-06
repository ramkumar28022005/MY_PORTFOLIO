
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "2022 - Till Date",
      institution: "M.Kumarasamy College of Engineering",
      cgpa: "CGPA: 6.8"
    },
    {
      degree: "Higher Secondary School Leaving Certificate",
      period: "2021 - 2022",
      institution: "Sri Vidya Mandir Matriculation Higher Secondary School",
      percentage: "Percentage: 77.3"
    },
    {
      degree: "Secondary School Leaving Certificate",
      period: "2019 - 2020",
      institution: "Sri Vidya Mandir Matriculation Higher Secondary School",
      percentage: "Percentage: 89.2"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <p className="text-gray-600 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-blue-600 font-semibold">{edu.cgpa || edu.percentage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
