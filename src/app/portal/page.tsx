'use client';
import React, { useState, useRef, useEffect } from 'react';

interface LeaderboardEntry {
  firstName: string;
  lastName: string;
  psid: string;
  points: number;
}
// Levenshtein Distance function for fuzzy name matching
const levenshtein = (a: string, b: string) => {
  const an = a.length, bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix = Array.from({ length: bn + 1 }, (_, i) => [i]);
  matrix[0] = Array.from({ length: an + 1 }, (_, i) => i);

  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[bn][an];
};

// Matching function with both fuzzy and substring search
const matchNames = (input: string, data: LeaderboardEntry[]) => {
  const threshold = 3;
  const lowerInput = input.toLowerCase();

  return data
    .map((member) => {
      const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
      return {
        ...member,
        distance: levenshtein(lowerInput, fullName),
        contains: fullName.includes(lowerInput) || member.psid.toLowerCase().includes(lowerInput),
      };
    })
    .filter((entry) => entry.distance <= threshold || entry.contains)
    .sort((a, b) => {
      if (a.contains && !b.contains) return -1;
      if (!a.contains && b.contains) return 1;
      return a.distance - b.distance;
    });
};

const Leaderboard: React.FC<{ data: LeaderboardEntry[] }> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<LeaderboardEntry | null>(null);
  const memberRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      // Show top-scoring member when search query is empty
      const topScorer = data.reduce((prev, current) => (prev.points > current.points ? prev : current), data[0]);
      setSelectedMember(topScorer);
    } else {
      const matchedMembers = matchNames(query, data);
      if (matchedMembers.length > 0) {
        setSelectedMember(matchedMembers[0]);
        const index = data.findIndex(member => member.psid === matchedMembers[0].psid);
        if (index !== -1 && memberRefs.current[index]) {
          memberRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      } else {
        setSelectedMember(null);
      }
    }
  };

  return (
    <div className="mt-12 text-white rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side: searched member or default */}
        <div className="bg-black bg-opacity-80 border-2 border-[#8B4513] rounded-lg p-4 h-64 w-full md:w-6/12 mx-auto flex flex-col text-center">
          {selectedMember ? (
            <>
              <h3 className="text-2xl mb-2">
                {selectedMember.firstName}  {selectedMember.lastName}
              </h3>
              <p className="text-6xl text-[#da6e20] font-bold mt-4">
                {selectedMember.points} pts
              </p>
            </>
          ) : (
            <>
              {data.length > 0 && (
                <>
                  <h3 className="text-2xl mb-2">
                    {data[0].firstName} {data[0].lastName}
                  </h3>
                  <p className="text-6xl text-[#da6e20] font-bold mt-4">
                    {data[0].points} pts
                  </p>
                </>
              )}
            </>
          )}
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search by name or PSID"
            value={searchQuery}
            onChange={handleSearch}
            className="mt-auto p-2 rounded-lg w-full bg-gray-800 text-white"
          />
        </div>

        {/* Right side: Leaderboard list */}
        <div className="space-y-4 max-h-[31rem] overflow-y-auto mx-auto w-full pr-1">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-black bg-opacity-80 border-2 border-[#8B4513] rounded-lg p-3 py-4"
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    index === 0
                      ? 'bg-yellow-500'
                      : index === 1
                      ? 'bg-gray-400'
                      : index === 2
                      ? 'bg-yellow-700'
                      : 'bg-gray-700'
                  }`}
                >
                  {index + 1}
                </div>
                <span>
                  {item.firstName} {item.lastName}
                </span>
              </div>
              <span>{item.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define props for the accordion
interface AccordionProps {
  title: string;
  content: string[];
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-black">
      {/* Accordion Header */}
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-[max-height] duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <ul className="list-disc list-inside p-6 bg-black bg-opacity-80">
          {content.map((item, index) => (
            <li key={index} className="text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default function MembershipPortal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  const notifications = [
    {
      title: "Verify your GPA",
      content: (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">GPA Verification Benefits</h3>
              <h4 className="font-semibold">General Benefits</h4>
              <ul className="list-disc pl-5">
                <li>Discounted Rates to Conferences</li>
                <li>Ability to apply to NSBE Scholarships</li>
              </ul>
              <h4 className="font-semibold mt-2">APEX Benefits</h4>
              <ul className="list-disc pl-5">
                <li>APEx VIP access to the Career Fairs</li>
                <li>APEx reception at Annual Convention</li>
                <li>Recognized with APEx ribbons and pins at Fall Regional Conference and Annual Convention</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Steps to get verified</h3>
              <ol className="list-decimal pl-5">
                <li>Create an account/login to NSBE.org</li>
                <li>Pay your National Dues ($18)</li>
                <li>Enter your GPA on your NSBE Profile</li>
                <li>Submit your <a href="#" className="underline">Google Form</a> Accurately</li>
              </ol>
              <p className="mt-4">Deadline: November 6th</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "VERIFY YOUR GPA",
      content: (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">GPA Verification Benefits</h3>
              <h4 className="font-semibold">General Benefits</h4>
              <ul className="list-disc pl-5">
                <li>Discounted Rates to Conferences</li>
                <li>Ability to apply to NSBE Scholarships</li>
              </ul>
              <h4 className="font-semibold mt-2">APEX Benefits</h4>
              <ul className="list-disc pl-5">
                <li>APEx VIP access to the Career Fairs</li>
                <li>APEx reception at Annual Convention</li>
                <li>Recognized with APEx ribbons and pins at Fall Regional Conference and Annual Convention</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Steps to get verified</h3>
              <ol className="list-decimal pl-5">
                <li>Create an account/login to NSBE.org</li>
                <li>Pay your National Dues ($18)</li>
                <li>Enter your GPA on your NSBE Profile</li>
                <li>Submit your <a href="#" className="underline">Google Form</a> Accurately</li>
              </ol>
              <p className="mt-4">Deadline: November 6th</p>
            </div>
          </div>
        </>
      )
    }
  ];


  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        // Replace this URL with your published Google Sheet CSV URL
        const response = await fetch(process.env.NEXT_PUBLIC_LEADERBOARD_FILE as string);
        const text = await response.text();
        const rows = text.split('\n').map(row => row.split(','));
        
        // Assuming the first row is headers
        const data: LeaderboardEntry[] = rows.slice(1).map(row => ({
          firstName: row[1],
          lastName: row[2],
          psid: row[0],
          points: parseInt(row[3], 10), // Parse points as numbers
        }));
  
        // Sort by points in descending order
        const sortedData = data.sort((a, b) => b.points - a.points);
  
        setLeaderboardData(sortedData);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };
  
    fetchLeaderboardData();
  }, []);

  // Automatic slide change every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // 8 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: any) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextSlide = () => {
    setFade(false); // Trigger fade out
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % notifications.length);
      setFade(true); // Trigger fade in
    }, 500); // 500ms for the transition duration
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + notifications.length) % notifications.length);
      setFade(true);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <h1 className='text-6xl w-11/12 mx-auto md:text-7xl text-center pt-24 pb-12 relative'>Membership Portal</h1>
      
      <div className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-4xl text-center mb-8">Member Notifications</h2>
        
        <div 
          className="border border-[#8B4513] rounded-lg relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="text-2xl font-bold bg-[#da6e20] rounded-t-lg text-white px-4 py-3 flex justify-between items-center">
            <h3 className={`transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}>{notifications[currentSlide].title}</h3>
            <div className="flex justify-center space-x-2">
              {notifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full border border-white focus:outline-none ${
                    index === currentSlide ? 'bg-yellow-500' : 'bg-yellow-900'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Content with fade transition */}
          <div className={`p-6 bg-black bg-opacity-80 text-white rounded-b-lg`}>
            <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {notifications[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      <section className='pt-15 mx-auto w-11/12 md:10/12 my-24'>
            <h2 className="text-4xl  my-6 text-center">Membership Points</h2>
            <p className='text-center w-full sm:w-8/12 mx-auto mb-12'>Attend events to earn points towards discounts on conference registration!</p>

            <div className="w-full mx-auto mt-8 text-black">
              <Accordion 
                title="Significant Events"
                content={['General Meetings - 7 Points', 'Wear Shirt to Meeting - 2 Points', 'Study Nights - 10 Points', 'Socials - 5 Points']}
              />
              <Accordion 
                title="PCI Events"
                content={['High School Visits - 10 Points', 'Other Events - 5 Points']}
              />
              <Accordion 
                title="Workshops"
                content={['Graduate/Research - 5 Points', 'International Student - 5 Points', 'Professional Development - 5 Points']}
              />
              <Accordion 
                title="Special Events"
                content={['Engineering Career Fair Volunteering - 40 Points', 'AWFE - 25 Points', 'Career Fair Clean-up/Breakdown - 15 Points']}
              />
            </div>

            <Leaderboard data={leaderboardData} />
      </section>
    </div>
  );
}
