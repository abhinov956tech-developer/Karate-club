// Export pages
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Dibrugarh District Karate Association
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            Empowering Martial Arts, Building Champions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link
              to="/contact"
              className="bg-karate-primary hover:bg-karate-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center gap-2 transition-colors"
            >
              Join Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-100 text-karate-dark px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-karate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-karate-dark mb-4">
              Welcome to DDKA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the premier karate association in Dibrugarh, where tradition meets excellence in martial arts training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Training",
                description: "Learn from certified black belt instructors with years of experience.",
              },
              {
                title: "All Skill Levels",
                description: "Programs designed for beginners to advanced practitioners.",
              },
              {
                title: "Competition Success",
                description: "Regular tournament participation and proven track record.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-karate-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-karate-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Martial Arts Journey Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community and discover the transformative power of karate.
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

export default Index;
