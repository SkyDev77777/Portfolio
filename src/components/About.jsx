import React from "react";

const About = ({ content }) => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 max-sm:h-full"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full mb-4">
            <div className="sm:text-center pb-8 pl-4 w-full">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <div
                dangerouslySetInnerHTML={{
                  __html: content?.fields.about_caption,
                }}
                className="text-center"
              />
            </div>
            <div>
              <p> {content?.fields.about_main_text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
