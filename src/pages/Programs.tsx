import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      title: "Beginner's Karate",
      description: "Perfect for newcomers to martial arts. Learn fundamental techniques and basic kata.",
      schedule: "Mon, Wed, Fri: 4:00 PM - 5:00 PM",
      level: "Beginner",
      price: "₹2000/month",
    },
    {
      title: "Advanced Training",
      description: "Intensive training for experienced practitioners. Focus on advanced kata and kumite.",
      schedule: "Tue, Thu, Sat: 5:00 PM - 6:30 PM",
      level: "Advanced",
      price: "₹3000/month",
    },
    {
      title: "Competition Prep",
      description: "Specialized training for tournament competitors. Includes sparring and competition strategies.",
      schedule: "Sat: 3:00 PM - 5:00 PM",
      level: "Intermediate/Advanced",
      price: "₹4000/month",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-karate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-karate-dark mb-6">
              Training Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect program to begin or advance your martial arts journey
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-karate-dark mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Schedule:</span> {program.schedule}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Level:</span> {program.level}
                    </p>
                    <p className="text-lg font-semibold text-karate-primary">
                      {program.price}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-karate-primary hover:bg-karate-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-karate-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your first class or learn more about our programs.
          </p>
          <Link
            to="/contact"
            className="bg-karate-primary hover:bg-karate-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center gap-2 transition-colors"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;