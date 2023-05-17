function Introduction({ body, children }) {
  return (
    <section
      className="flex justify-center flex-col lg:max-w-5xl md:max-w-4xl w-full mx-auto text-left px-6 py-12"
      id={body.id}
    >
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <span className="text-complementaryColors-300 uppercase text-base mb-4 font-bold">
          {body.sectionName}
        </span>
        <h2 className="text-3xl text-secondaryColors-500 font-bold mb-6">
          {body.title}
        </h2>
        <div className="flex flex-col gap-4 mb-8 text-secondaryColors-500">
          {body.content.map((paragraph) => (
            <>
              {paragraph}
            </>
          ))}
        </div>
        <span className="flex flex-col gap-4">
          {children}
        </span>
      </div>
    </section>
  );
}
export default Introduction;
