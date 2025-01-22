import React from "react";
import { Mail, Phone, Calendar, Award } from "lucide-react";

// Leadership data type
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

// Leadership data
const leadershipData: Leader[] = [
  {
    title: "General Secretary",
    name: "John Smith",
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
    name: "Sarah Johnson",
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
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`w-full max-w-md mx-auto rounded-lg border bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 space-y-4 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`bg-gray-50 p-4 flex flex-col gap-2 ${className}`} {...props} />
));
CardFooter.displayName = "CardFooter";

// LeadershipCards Component
const LeadershipCards: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-6">
      {leadershipData.map((leader) => (
        <Card key={leader.title}>
          <div className="relative">
            <img
              src={leader.imageUrl}
              alt={`${leader.title} - ${leader.name}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <div>
                <h2 className="text-xl font-bold text-white">{leader.title}</h2>
                <p className="text-sm text-white">{leader.name}</p>
              </div>
            </div>
          </div>

          <CardContent>
            <h3 className="font-semibold text-lg">Key Responsibilities:</h3>
            <ul className="list-disc pl-4 space-y-2">
              {leader.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{leader.experience}</span>
            </div>
          </CardContent>

          <CardFooter>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2" />
              <a
                href={`mailto:${leader.contact.email}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {leader.contact.email}
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2" />
              <span>{leader.contact.phone}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LeadershipCards;