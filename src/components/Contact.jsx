// import { ContactForm } from "./ContactForm";
// import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
// import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <footer id="contact" className="relative">
      <div className="container px-5 py-2 mx-auto text-center">
        <ChatBubbleLeftRightIcon className="w-10 inline-block mb-2 text-blue-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-400 ">
          Contact Me
        </h1>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:sr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest font-mono text-medium">
                ADDRESS&nbsp;
                <MapPinIcon className="w-5 inline-block text-blue-400 mb-2"></MapPinIcon>
              </h2>
              <p className="mt-1 text-indigo-400 font-mono">
                Pathum Thani,Thailand
              </p>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest font-mono text-medium">
                EMAIL&nbsp;
                <EnvelopeIcon className="w-5 inline-block text-blue-400 mb-2" />
              </h2>
              <a className="font-mono text-indigo-400 leading-relaxed">
                swan.py65@rsu.ac.th
              </a>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest font-mono text-medium">
                Phone Number&nbsp;
                <PhoneIcon className="w-5 inline-block text-blue-400 mb-2" />
              </h2>
              <p className="font-mono text-indigo-400 leading-relaxed">
                099088654
              </p>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest font-mono text-medium">
                My LinkedIn&nbsp;
                <BriefcaseIcon className="w-5 inline-block text-blue-400 mb-2" />
              </h2>
              <a
                href="https://www.linkedin.com/in/swan-pyae-19a430244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bazy0p4CTRAS1MvchBKRroQ%3D%3D"
                className="font-mono text-indigo-400 leading-relaxed"
              >
                Contact Me on LinkedIn!
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
