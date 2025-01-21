
const MembershipCard = () => {
  const benefits = [
    "Personalized Training Plans tailored to suit your skill level and aspirations.",
    "World-Class Coaching from experienced instructors with decades of expertise.",
    "State-of-the-Art Facilities for safe, modern, and inspiring training.",
    "Exclusive Events, including seminars, tournaments, and workshops.",
    "Community Connections with like-minded martial artists who inspire and motivate.",
  ];

  return (
    <section className="p-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Benefits</h2>
        <p className="text-lg md:text-xl mb-8">
          Becoming a member of our dojo is a commitment to personal growth, discipline, and excellence. 
          Our programs are designed to help you achieve your goals and transform your life.
        </p>
        <ul className="space-y-4 text-left">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <span className="text-xl font-medium">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MembershipCard;
