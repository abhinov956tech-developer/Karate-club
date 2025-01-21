import { Mail, Phone } from 'lucide-react';

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
}

const KarateClubCard = ({
    karateprops
}: { karateprops: KarateClubProps }) => {
    return (
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">{karateprops.clubName}</h2>
                <p className="text-gray-600 mt-1">{karateprops.address}</p>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-6">
                {/* Contact Information */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Phone size={18} />
                        <a href={`tel:${karateprops.phone}`} className="hover:text-blue-600 transition-colors">
                            {karateprops.phone}
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Mail size={18} />
                        <a href={`mailto:${karateprops.email}`} className="hover:text-blue-600 transition-colors">
                            {karateprops.email}
                        </a>
                    </div>
                </div>

                {/* Coach Profile */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">Head Coach</h3>
                    <div className="flex gap-4">
                        {karateprops.coach.imageUrl && (
                            <img
                                src={karateprops.coach.imageUrl}
                                alt={karateprops.coach.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        )}
                        <div>
                            <p className="font-medium text-gray-800">{karateprops.coach.name}</p>
                            <p className="text-gray-600">{karateprops.coach.rank}</p>
                            <div className="mt-2">
                                <p className="text-sm font-medium text-gray-700">Achievements:</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                                    {karateprops.coach.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule */}
            </div>
        </div>
    );
};

export default KarateClubCard;