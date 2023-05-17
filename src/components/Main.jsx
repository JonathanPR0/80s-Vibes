import Numbers from './Numbers';

function Main({ body }) {
  return (
    <main
      className="flex flex-col items-center bg-primaryColors-300"
      id={body.id}
    >
      <div
        className="flex flex-col items-center justify-center w-screen h-[calc(100vh-48px)] mt-20 bg-fixed text-white text-center p-6 bg-center bg-cover"
        style={{ backgroundImage: `url(${body.img.src})` }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-brandGreen mb-6 md:max-w-xl lg:max-w-2xl mx-auto w-full">
          {body.title}
        </h1>
        <p className="text-lg w-full md:max-w-xl lg:max-w-2xl mx-auto ">
          {body.text}
        </p>
      </div>
    </main>
  );
}
export default Main;
