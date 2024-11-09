import React from 'react';

const skillsData = [
  {
    company: "Invision",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGotxw-I70YMQ/company-logo_100_100/company-logo_100_100/0/1683617270350/abhyazlearning_logo?e=1739404800&v=beta&t=qwqscMzrvvXDjIeyb2RNaqWhByZGTSFf7LICeDO1150",
    description: "Leading company in design and development solutions for enterprises.",
  },
  {
    company: "Infraveo Technologies",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFUeDU-PsXePg/company-logo_100_100/company-logo_100_100/0/1690960464200?e=1739404800&v=beta&t=zm0IQCZrtP5HehrlziqiAa5_sk5hO4iy47xARnuhBn0",
    description: "Innovative tech solutions that drive business growth and performance.",
  },
  {
    company: "Zopsoft Technology",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQE7Zf1-vvfbUA/company-logo_100_100/company-logo_100_100/0/1692876768583/infosys_logo?e=1739404800&v=beta&t=vXgQ0tNWTGWucUSF5urV7-ARRtk2kU2ILC5EO5r2Wis",
    description: "Tech experts specializing in custom software development and integration.",
  },
];

const SkillsCard = () => {
  return (
    <div className="p-4 w-[20rem] mt-5 ml-4  bg-gray-800 text-white rounded-lg shadow-sm">
      <h2 className="text-xl text-center font-semibold mb-3">Skills & Endorsements</h2>

      {/* Single Column Layout with Small Size */}
      <div className="flex flex-col space-y-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-700 p-3 rounded-lg shadow-sm"
          >
            <img
              src={skill.logo}
              alt={skill.company}
              className="w-12 h-12 object-contain mb-2"
            />
            <h3 className="text-sm font-semibold">{skill.company}</h3>
            <p className="text-center text-xs text-gray-400 mt-1">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
