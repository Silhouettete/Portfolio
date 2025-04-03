import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { Component } from "react";
import { projects } from "../CvData";
export class Projects extends Component {
  render() {
    return (
      <>
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 max-auto text-center lg:px-40">
            <CodeBracketIcon className="mx-auto inline-block w-10 mb-4 text-blue-400" />
            <h1 className="sm:text-4xl text-3xl font-mono title-font mb-4 text-green-400">
              Some projects I&apos;ve worked on
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                target="_blank"
                key={project.description}
                className="sm:w-1/2 w-full p-4"
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-scale-down object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-100">
                    {/* tracking-widest = letter-spacing : 0.1em */}
                    <h2 className="tracking-widest text-sm title-font font-mono text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-mono text-blue-400 mb-3">
                      {project.title}
                    </h1>
                    <p className="loading-relaxed font-mono text-cyan-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
