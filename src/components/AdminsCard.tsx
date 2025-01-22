import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";

interface Leader {
  title: string;
  name: string;
  responsibilities: string[];
  experience: string;
  contact: {
    email: string;
    phone: string;
  };
  imageUrl?: string;
}

const leadershipData: Leader[] = [
  {
    title: "General Secretary",
    name: "Anjan Chetia",
    responsibilities: [
      "Maintaining club records and documentation",
      "Coordinating club meetings and events",
      "Managing member communications",
      "Handling administrative duties",
    ],
    experience: "15 years in Karate",
    contact: {
      email: "secretary@karateclub.com",
      phone: "(555) 123-4567",
    },
    imageUrl: "/GeneralSecretray.jpg",
  },
  {
    title: "President",
    name: "Niren Phukan",
    responsibilities: [
      "Overall club leadership and direction",
      "Representing the club at external events",
      "Strategic planning and development",
      "Building partnerships and relationships",
    ],
    experience: "20 years in Karate",
    contact: {
      email: "president@karateclub.com",
      phone: "(555) 765-4321",
    },
    imageUrl: "/President.jpg",
  },
];

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`w-full max-w-md mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-smooth-appear border-t-4 border-karate-red ${className}`}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`p-6 space-y-4 ${className}`} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-gray-50 p-4 flex flex-col gap-2 rounded-b-lg border-t border-gray-100 ${className}`}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

const LeadershipCards: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-japanese text-karate-black">
      Leadership
        <span className="block text-lg text-karate-accent mt-2"></span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {leadershipData.map((leader) => (
          <Card key={leader.title} className="hover:translate-y-[-4px]">
            <div className="relative">
              <img
                src={leader.imageUrl || "/placeholder.svg"}
                alt={`${leader.title} - ${leader.name}`}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-xl font-bold text-white font-japanese">
                  {leader.title}
                </h2>
                <p className="text-sm text-white/90">{leader.name}</p>
              </div>
            </div>

            <CardContent>
              <div className="flex items-center text-karate-accent mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-medium">{leader.experience}</span>
              </div>
              
              <h3 className="font-semibold text-lg text-karate-black mb-3">
                Key Responsibilities:
              </h3>
              <ul className="space-y-2 text-gray-700">
                {leader.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-karate-red rounded-full mt-2 mr-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <a
                href={`mailto:${leader.contact.email}`}
                className="flex items-center text-karate-accent hover:text-karate-red transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>{leader.contact.email}</span>
              </a>
              <div className="flex items-center text-karate-accent">
                <Phone className="w-5 h-5 mr-2" />
                <span>{leader.contact.phone}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeadershipCards;