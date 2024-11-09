import React from 'react';

const experiences = [
  {
    title: "Web Designer",
    company: "Spotify Inc.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgz5EMEfoCRrQXJVOkaRfKbf0PNiI6TflGUA&s",
    duration: "Oct 2020 - Present (4 years 7 months)",
    description:
      "Find the most qualified people in the most unexpected places. Information for applicants to consider when applying for local positions.",
  },
  {
    title: "Frontend Developer",
    company: "Google LLC",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABzElEQVR4Ab2WAUQDURjHDw0QIAQkAVBaMwvDJiMbY7QgFgAkAAGZZUASFiyAnQUEotMIGUKgAAYNWxY20Gyv9+d57d52X99mN/zcuee933vv/b+7sxKnyX9pxUORVixUkNe6pCMRQN3XVVuEMxbZ2E4Ej7WARwd9phbKGa/Izg2+aIwGxmAJsTUSMRcmSP2UFcgVqm0UDBzJjcKhZYSQcWZZIsVZjgz8pTEaGniI6mYnQnzCKothzfruFteFKeXL+Fh9J7DdfwyI4ZMlcIUUQDhnmRZeQDTKV3ZLnYU/wmdTiNWenReXqY6xQq8suZ6C8m6psiKFS21TiGeUTAnFDCQsQ6aEgRd/hN3c4oWL3VIIjdAgMMzQNCXvHjS9z1CVxWgtHt4lxaadIcuCkWBhgpS6Cv/jYU0E7YyGL+Ftt+vVVr0PidXKgUu4Y2de57U6PNfCVDWVM2WzSGP5nzwRmg0tBHLgTwg8pD3JkZcoaKfDmFj08k3E84NJstrY9xAHaoi85I6kpMB9T7dX90Tk9sqUuhI/NlNCxkJJXaVgfg99keKKQmf9JmJ7iTNlkg5P/SOMoOgzYmK+MGghkUIMpEKiV457pFMFaJ8z1i/ATnOr+aZzdAAAAABJRU5ErkJggg==",
    duration: "Jan 2018 - Sep 2020 (2 years 8 months)",
    description:
      "Worked on improving the user experience and performance of the main product, contributing to significant increases in user engagement.",
  },
  {
    title: "UI/UX Designer",
    company: "Adobe Systems",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAMFBMVEVHcEz/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwD/EwCU4GtCAAAAD3RSTlMAuwcnWq3uSI9lMuN7HMn6/EH6AAAA1klEQVQ4jaWS0RbEEAxEoxqUtv7/b3dLhwQve3aeanqRSRD9rdxl4BlhSsAD8GvAbAA2swSOfu+xBNaV9c8ggTADzkrAugkwpGQmIGogjoAbG+gGABktSjk0kOAHhLFJAbCvlC6d9AXg7jnvYCXQMn7PTTppBbCrhLP9NAA35sjPit/FdjfgVA1uTT8bgFvDMDYALA25gV8AY2jPBG2NFUCJtaiSWjjU3+q1PyrpYfkCkJLPuipqGZG+HIHGnJnc8FJqeuyKjphGlfFjekx+AlgmnX//rA/9nxjHq8Jh0gAAAABJRU5ErkJggg==",
    duration: "Mar 2015 - Dec 2017 (2 years 9 months)",
    description:
      "Collaborated with the design and engineering teams to develop intuitive user interfaces and prototypes.",
  },
];

const Experence = () => {
  return (
    <section className="px-2 py-4 bg-gray-800 mt-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 mb-6 p-4 bg-gray-700 shadow-md rounded-lg"
        >
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-10 h-10 object-cover rounded"
          />
          <div>
            <h3 className="text-1xl font-semibold text-white">
              {experience.title}
            </h3>
            <p className="text-gray-400">{experience.company}</p>
            <p className="text-sm text-gray-500">{experience.duration}</p>
            <p className="mt-2 text-gray-300">{experience.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experence;
