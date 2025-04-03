import { useState } from "react";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encodeUrl(data) {
    //encodeURIComponent : encode URI by replacing each instance of characters by UTF-8
    return Object.keys(data)
      .map((key) => encodeURI(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeUrl({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("form submitted"))
      .catch((error) => alert(error));
  }
  return (
    <div>
      <form
        name="contact"
        onSubmit={handleSubmit}
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Hire ME!
        </h2>
        <p className="leading-relaxed mb-5">
          Your friendly neighbourhood Magician
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded-border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 px-3 leading-8 transition-color duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=" relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded-border border-gray-700"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Leave a message!
          </label>
          <input
            type="message"
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded-border border-gray-700"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
