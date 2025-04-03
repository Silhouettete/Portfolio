import { Component } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
export class About extends Component {
  render() {
    return (
      <>
        <header id="about">
          <div className="container px-5 py-2 mx-auto text-center">
            <AcademicCapIcon className="w-10 inline-block text-blue-400 mb-4" />
          </div>
          {/* container */}
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col item-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-400 font-mono">
                Hello! My name is Swan Pyae
                {/* <br className="hidden lg:inline-block" /> */}
              </h1>
              <p className="mb-8 leading-relaxed font-bold font-mono text-blue-300">
                I’m a developer who thrives on solving problems and creating
                efficient, scalable solutions. I believe that clean,
                well-structured code is the backbone of any great project.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mt-8">
              <img
                className="object-cover h-48 object-center rounded"
                alt="profile"
                src="./profile.svg"
              />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default About;
