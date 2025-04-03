// import { Component } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { experiences } from "../CvData";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center">
        <UserIcon className="w-10 inline-block text-blue-400 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-400 mb-12">
          Leaderships and Activities
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((experience) => (
            <div
              className="p-4 md:w-1/2 font-mono w-full font-bold"
              key={experience.company}
            >
              <div className="flex flex-col">
                <span className="text-xl font-semibold font-bold">
                  {experience.company}
                </span>
                <span className="text-medium text-green-200">
                  {experience.role}
                </span>
                <span className="text-medium text-green-200">
                  {experience.date}
                </span>
                <span className="text-medium text-green-200">
                  {experience.project}
                </span>
                <span className="text-medium text-green-200">
                  Languages : {experience.technologies}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
