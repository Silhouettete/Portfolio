// import { Component } from "react";
import { skills } from "../CvData";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CheckBadgeIcon className="w-10 inline-block text-blue-400 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font font-mono text-green-400 mb-4">
            Skills
          </h1>
          <h2 className="text-base leading-relaxed font-bold font-medium font-mono xl:w-2/4 lg:w-3/4 mx-auto">
            The skills I have acquired over the years
          </h2>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-2">
          {skills.map((skill) => (
            <div key={skill.key} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-3 h-full items-center">
                <CheckBadgeIcon className="text-green-300 w-7 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white font-mono">
                  {skill.skill}
                </span>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 font-mono hover:opacity-100">
                  <span className="title-font font-medium text-green-200">
                    {skill.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
