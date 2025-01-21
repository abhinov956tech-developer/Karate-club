import KarateClubCard from "../components/ClubsCard"
export function Club(){
    const clubDataArray = [
        {
            clubName: "Shotokan Karate Academy",
            address: "123 Martial Arts Way, Cityville, ST 12345",
            phone: "(555) 123-4567",
            email: "info@shotokanacademy.com",
            socialLinks: {
              facebook: "https://facebook.com/shotokanacademy",
              instagram: "https://instagram.com/shotokanacademy",
            },
            coach: {
              name: "Sensei John Smith",
              rank: "7th Dan Black Belt",
              achievements: [
                "World Championship Gold Medalist 2020",
                "National Coach of the Year 2022",
                "30+ years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Monday", times: ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"] },
              { day: "Wednesday", times: ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"] },
              { day: "Friday", times: ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"] },
            ],
          },
          {
            clubName: "Kyokushin Dojo Center",
            address: "45 Warrior's Lane, Battle Creek, ST 67890",
            phone: "(555) 987-6543",
            email: "contact@kyokushindojo.com",
            socialLinks: {
              facebook: "https://facebook.com/kyokushindojo",
              instagram: "https://instagram.com/kyokushindojo",
            },
            coach: {
              name: "Sensei Mary Jones",
              rank: "6th Dan Black Belt",
              achievements: [
                "International Open Champion 2018",
                "National Judge Certification",
                "25 years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Tuesday", times: ["6:00 PM - 8:00 PM"] },
              { day: "Thursday", times: ["6:00 PM - 8:00 PM"] },
              { day: "Saturday", times: ["10:00 AM - 12:00 PM"] },
            ],
          },
          {
            clubName: "Seido Karate Club",
            address: "78 Discipline Ave, Kicksburg, ST 24680",
            phone: "(555) 555-1212",
            email: "hello@seidoclub.com",
            socialLinks: {
              facebook: "https://facebook.com/seidoclub",
              instagram: "https://instagram.com/seidoclub",
            },
            coach: {
              name: "Sensei Alan Wright",
              rank: "5th Dan Black Belt",
              achievements: [
                "State Champion 2019",
                "Karate Seminar Speaker 2021",
                "20 years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Monday", times: ["7:00 PM - 9:00 PM"] },
              { day: "Thursday", times: ["7:00 PM - 9:00 PM"] },
            ],
          },
          {
            clubName: "Shito-Ryu Training Center",
            address: "99 Kata Road, Grapple City, ST 13579",
            phone: "(555) 777-8888",
            email: "info@shitoryutraining.com",
            socialLinks: {
              facebook: "https://facebook.com/shitoryutraining",
              instagram: "https://instagram.com/shitoryutraining",
            },
            coach: {
              name: "Sensei Laura Green",
              rank: "4th Dan Black Belt",
              achievements: [
                "Regional Champion 2020",
                "Youth Mentor Award 2022",
                "15 years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Wednesday", times: ["5:00 PM - 7:00 PM"] },
              { day: "Friday", times: ["5:00 PM - 7:00 PM"] },
            ],
          },
          {
            clubName: "Goju-Ryu Karate School",
            address: "50 Harmony St, Blocktown, ST 54321",
            phone: "(555) 321-4321",
            email: "support@gojuryukarate.com",
            socialLinks: {
              facebook: "https://facebook.com/gojuryukarate",
              instagram: "https://instagram.com/gojuryukarate",
            },
            coach: {
              name: "Sensei Mark Lee",
              rank: "8th Dan Black Belt",
              achievements: [
                "Lifetime Achievement Award",
                "Published Author on Karate Techniques",
                "40+ years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Monday", times: ["6:30 PM - 8:30 PM"] },
              { day: "Thursday", times: ["6:30 PM - 8:30 PM"] },
            ],
          },
          {
            clubName: "Wado-Ryu Karate Academy",
            address: "32 Fast Fist Blvd, Speedtown, ST 65432",
            phone: "(555) 246-1357",
            email: "academy@wado-ryu.com",
            socialLinks: {
              facebook: "https://facebook.com/wadoacademy",
              instagram: "https://instagram.com/wadoacademy",
            },
            coach: {
              name: "Sensei Emily Carter",
              rank: "3rd Dan Black Belt",
              achievements: [
                "National Silver Medalist 2021",
                "Youth Leadership Award",
                "10 years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Tuesday", times: ["5:00 PM - 7:00 PM"] },
              { day: "Friday", times: ["5:00 PM - 7:00 PM"] },
            ],
          },
          {
            clubName: "Isshin-Ryu Center of Excellence",
            address: "89 Technique Ave, Punch City, ST 98765",
            phone: "(555) 909-8765",
            email: "info@isshinryu.com",
            socialLinks: {
              facebook: "https://facebook.com/isshinryucenter",
              instagram: "https://instagram.com/isshinryucenter",
            },
            coach: {
              name: "Sensei Kevin Brown",
              rank: "6th Dan Black Belt",
              achievements: [
                "Multiple-Time National Champion",
                "Host of Annual Karate Festival",
                "25+ years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Wednesday", times: ["6:00 PM - 8:00 PM"] },
              { day: "Saturday", times: ["9:00 AM - 11:00 AM"] },
            ],
          },
          {
            clubName: "Traditional Martial Arts Dojo",
            address: "11 Discipline St, Focusville, ST 12121",
            phone: "(555) 848-2020",
            email: "dojo@traditionalmartialarts.com",
            socialLinks: {
              facebook: "https://facebook.com/traditionaldojo",
              instagram: "https://instagram.com/traditionaldojo",
            },
            coach: {
              name: "Sensei Rachel Adams",
              rank: "7th Dan Black Belt",
              achievements: [
                "World Tournament Finalist 2019",
                "Community Service Award 2023",
                "30+ years teaching experience",
              ],
              imageUrl: "/api/placeholder/150/150",
            },
            schedule: [
              { day: "Monday", times: ["6:00 PM - 8:00 PM"] },
              { day: "Thursday", times: ["6:00 PM - 8:00 PM"] },
            ],
          },
        {
          clubName: "Shotokan Karate Academy",
          address: "123 Martial Arts Way, Cityville, ST 12345",
          phone: "(555) 123-4567",
          email: "info@shotokanacademy.com",
          socialLinks: {
            facebook: "https://facebook.com/shotokanacademy",
            instagram: "https://instagram.com/shotokanacademy",
          },
          coach: {
            name: "Sensei John Smith",
            rank: "7th Dan Black Belt",
            achievements: [
              "World Championship Gold Medalist 2020",
              "National Coach of the Year 2022",
              "30+ years teaching experience",
            ],
            imageUrl: "/api/placeholder/150/150",
          },
          schedule: [
            { day: "Monday", times: ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"] },
            { day: "Wednesday", times: ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"] },
            { day: "Friday", times: ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"] },
          ],
        },
        {
          clubName: "Goju Ryu Karate Center",
          address: "456 Dojo Lane, Townsville, ST 67890",
          phone: "(555) 234-5678",
          email: "contact@gojuryucenter.com",
          socialLinks: {
            facebook: "https://facebook.com/gojuryucenter",
            instagram: "https://instagram.com/gojuryucenter",
          },
          coach: {
            name: "Sensei Alice Brown",
            rank: "6th Dan Black Belt",
            achievements: [
              "National Champion 2019",
              "Author of 'The Art of Karate'",
              "25+ years teaching experience",
            ],
            imageUrl: "/api/placeholder/150/150",
          },
          schedule: [
            { day: "Tuesday", times: ["10:00 AM - 12:00 PM", "6:00 PM - 8:00 PM"] },
            { day: "Thursday", times: ["10:00 AM - 12:00 PM", "6:00 PM - 8:00 PM"] },
            { day: "Saturday", times: ["9:00 AM - 11:00 AM"] },
          ],
        },
        {
          clubName: "Kyokushin Karate Academy",
          address: "789 Fight Street, Villageville, ST 54321",
          phone: "(555) 345-6789",
          email: "info@kyokushinacademy.com",
          socialLinks: {
            facebook: "https://facebook.com/kyokushinacademy",
            instagram: "https://instagram.com/kyokushinacademy",
          },
          coach: {
            name: "Sensei Michael Johnson",
            rank: "8th Dan Black Belt",
            achievements: [
              "International Champion 2018",
              "Hall of Fame Inductee 2021",
              "40+ years teaching experience",
            ],
            imageUrl: "/api/placeholder/150/150",
          },
          schedule: [
            { day: "Monday", times: ["8:00 AM - 10:00 AM", "4:00 PM - 6:00 PM"] },
            { day: "Wednesday", times: ["8:00 AM - 10:00 AM", "4:00 PM - 6:00 PM"] },
            { day: "Friday", times: ["8:00 AM - 10:00 AM", "4:00 PM - 6:00 PM"] },
          ],
        },
      ];
    return <div className="flex justify-center mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-rows-auto">
            {clubDataArray.map((items:any)=>(
            <div className="h-auto w-full">
                <KarateClubCard karateprops={items}/>
            </div>
        ))}
        </div>
    </div>
}