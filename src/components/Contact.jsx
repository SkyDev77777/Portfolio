import { React, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = data => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message Sent"))
      .catch((error) => alert(error));
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 max-sm:h-full"
    >
      <form 
        name="contact" 
        onSubmit={handleSubmit}
        className={"w-full flex flex-col justify-center max-w-[600px]"}>
        <div className="flex flex-col w-full">
          <div className="pb-4 flex flex-col justify-center w-full h-full items-center">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">Send me a message</p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
