import { Mail, Phone, Award } from 'lucide-react';

interface Coach {
    name: string;
    rank: string;
    achievements: string[];
    imageUrl?: string;
}

interface KarateClubProps {
    clubName: string;
    address: string;
    phone: string;
    email: string;
    coach: Coach;
    site?: string;
}

const KarateClubCard = ({
    karateprops
}: { karateprops: KarateClubProps }) => {
    return (
        <div className="max-w-xl w-full bg-karate-paper rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl animate-smooth-appear bg-washi">
            <a href={karateprops.site} className="block">
                {/* Header with red accent border */}
                <div className="p-6 border-b-2 border-karate-red">
                    <h2 className="text-3xl font-bold text-karate-black mb-2 font-japanese">
                        {karateprops.clubName}
                    </h2>
                    <p className="text-karate-accent text-sm">
                        {karateprops.address}
                    </p>
                </div>

                <div className="p-6 space-y-8">
                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-karate-black border-l-4 border-karate-red pl-3">
                            Contact Information
                        </h3>
                        <div className="space-y-2 pl-4">
                            <div className="flex items-center space-x-3 group">
                                <Phone size={18} className="text-karate-accent group-hover:text-karate-red transition-colors" />
                                <a href={`tel:${karateprops.phone}`} 
                                   className="text-karate-accent group-hover:text-karate-red transition-colors">
                                    {karateprops.phone}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Mail size={18} className="text-karate-accent group-hover:text-karate-red transition-colors" />
                                <a href={`mailto:${karateprops.email}`}
                                   className="text-karate-accent group-hover:text-karate-red transition-colors">
                                    {karateprops.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-karate-black border-l-4 border-karate-red pl-3">
                            Achievements
                        </h3>
                        <ul className="space-y-2 pl-4">
                            {karateprops.coach.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <Award size={16} className="text-karate-red mt-1 flex-shrink-0" />
                                    <span className="text-karate-accent">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default KarateClubCard;