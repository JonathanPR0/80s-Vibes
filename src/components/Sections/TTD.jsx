import React from 'react';

const TTD = ({ body, children }) => {
  return (
    <section
      className={`w-full flex justify-center items-center flex-col text-center px-6 py-12 ${body.background}`}
      id={body.id}
    >
      <div className="w-full md:max-w-3xl lg:max-w-4xl mx-auto">
        <span className={`${body.sectionName === "Moda" ? "text-white" : "text-secondaryColors-400"} uppercase text-base mb-4 font-bold`}>
          {body.sectionName}
        </span>
        <h2 className={`text-3xl ${body.sectionName === "Moda" ? "text-white" : "text-secondaryColors-500"} font-bold mb-6`}>
          {body.title}
        </h2>
        <div className={`flex flex-col gap-4 text-left text-base ${body.sectionName === "Moda" ? "text-white" : "text-secondaryColors-500"} mb-4`}>
          {body.content.map((paragraph) => (
            <>
              {paragraph}
            </>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default TTD;
