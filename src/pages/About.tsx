import { Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-karate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-karate-dark mb-6">
              About DDKA
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the rich history and tradition of karate in Dibrugarh
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Our Mission",
                description:
                  "To promote excellence in martial arts and develop champions with strong character.",
              },
              {
                icon: Target,
                title: "Our Vision",
                description:
                  "To be the leading karate association in Northeast India, known for producing world-class martial artists.",
              },
              {
                icon: Users,
                title: "Our Values",
                description:
                  "We believe in discipline, respect, perseverance, and continuous improvement.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-block p-3 bg-karate-light rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-karate-primary" />
                </div>
                <h3 className="text-xl font-semibold text-karate-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-karate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-karate-dark mb-6">
                Our History
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1990, the Dibrugarh District Karate Association has been
                at the forefront of martial arts training in Assam. What started as
                a small group of dedicated practitioners has grown into a
                thriving community of martial artists.
              </p>
              <p className="text-gray-600">
                Over the years, we have produced numerous state and national
                champions, while maintaining our commitment to traditional karate
                values and teaching methods.
              </p>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;