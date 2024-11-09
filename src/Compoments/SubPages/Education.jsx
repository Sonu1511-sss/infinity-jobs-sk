import React from 'react';

const education = [
  {
    title: "Master’s Programmes",
    university: "Stanford University",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAABL0lEQVR4Aa2VNUJDQRBAX9xwh2NQUlNCR8UFOBAVcg9K3N3d3Z3PLvFMRTw/+/p5K2OO6FwPpnHz6zMvRXnNS9EeTOBoaY89H/L3Kc83cVP1QVefY3owdrspzzfxp5IY7RSboT9VfgDtEZshqfxhWGym/tTyAvyJDXGbk8pN0SVLHb3d1NWQSdiDtnfTb0VzW+zgjIdX0rj8sPunUSfAyhmb56ThcYO9m36CEA2ShkJwO0qUSqRDh1DvZMdGR1kOgHB6YJrUQx7ewqTx7ERQHrujr7+D1gBpVPqw/BJoS9pcycIjZz+ksacl0O6fzr4xYuHTpOMre/Irr9F1Eg2gIpRCER31F+BXl7H4jqJlvz1N2uljqRqLf1S7ypMeOhlWZDLmLfVPHbHqD0wjdWqYODugd5NXmbhkAAAAAElFTkSuQmCC", // Stanford Logo URL
    duration: "Oct 2020 - Present (4 years 7 months)",
    description:
      "Find the most qualified people in the most unexpected places. Information for applicants to consider when applying for local positions.",
  },
  {
    title: "Maths and Science Education",
    university: "Harvard University",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEUAXqYAWaQAXKUAWqR+ncYSYqhzlsIATZ9ii7yOqs1AdrEAVaJHerN4nMU0cK9WhLleibv///8ASp74+vzk6/PU3eoAPpmEpcq0yN6btdTBz+Ikaavv8/gARJva4+7G2uyswdoAaK+/1urp9Pzi8frR4/FRi8BuncmuyuMmdrXfeHfXb3HVbW/DFiHEISrPdtutAAAAvUlEQVR4Ae2KRQKDMBQFI7g7Ce4O9z9e0XVX9c6LfBnw562AAEGAIQYYA4hWMMIr63fuGchyvCBKsqDIqqTpuiDpwhpDOAzetDSbcRhTc03PNHyiUlX0RYYGCr6EMNLNQI3dhNq+S4LVE6kb0UBe1wjxphdGoaZEgqvYppuSIMiCxGEDJ5ARAnmOi7KsCjsty7ppzbasu8bsy7QpSQnzHAzDME7TNK6ZxrVcMw7TsNZruS7BfAew3OFpwl+4AXUfW3ruugP2AAAAAElFTkSuQmCC", // Harvard Logo URL
    duration: "Oct 2020 - Present (4 years 7 months)",
    description:
      "Qualified people in the most unexpected places. Information for applicants to consider when applying for local positions.",
  },
];

const Education= () => {
  return (
    <section className="px-4 py-8 bg-gray-800 rounded-lg mt-3">
      <h2 className="text-2xl font-bold mb-6 text-white">Education</h2>
      {education.map((edu, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 mb-6 p-4 bg-gray-700 shadow-md rounded-lg"
        >
          <div className="flex-shrink-0">
            <img
              src={edu.logo}
              alt={`${edu.university} logo`}
              className="w-10 h-10 object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-1xl font-semibold text-white">{edu.title}</h3>
            <p className="text-gray-400">{edu.university}</p>
            <p className="text-sm text-gray-500">{edu.duration}</p>
            <p className="mt-2 text-gray-300">{edu.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;

