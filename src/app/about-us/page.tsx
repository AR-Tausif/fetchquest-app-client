import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#0a031f] text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-10 pb-20">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-3">ABOUT US</h1>
          <p className="text-white text-base font-normal mb-10 leading-relaxed">
            We are a passionate team dedicated to bringing you the best gaming
            <span className="text-[#5a7ea6] cursor-default">×</span>
            <br />
            experience with top-notch products and amazing games.
          </p>
          <div className="relative w-full max-w-5xl mx-auto">
            <img
              alt="Outline illustration of a gamepad, keyboard, and mouse with neon gradient lines in pink and blue on dark background"
              className="mx-auto"
              height="200"
              src="https://t3.ftcdn.net/jpg/07/87/96/22/360_F_787962217_WB6mN2KysPsIFDMRdk46C4hTVvh2dtEj.jpg"
              width="900"
            />
          </div>
        </section>
        <section className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-6">FEATURED PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <article className="border border-[#a01bbd] rounded-md p-5 flex space-x-5 items-center">
              <img
                alt="Pink outline icon of a gamepad controller"
                className="flex-shrink-0"
                height="80"
                src="https://storage.googleapis.com/a1aa/image/d832e953-4458-4363-414c-5054e577ddca.jpg"
                width="80"
              />
              <div>
                <h3 className="text-white font-extrabold text-lg mb-2">
                  GAMEPAD
                </h3>
                <p className="text-white text-sm mb-4 max-w-xs">
                  Experience precision and comfort with our premium gamepads.
                </p>
                <button
                  className="bg-[#a01bbd] text-white text-sm font-semibold px-4 py-2 rounded"
                  type="button"
                >
                  SHOP NOW
                </button>
              </div>
            </article>
            <article className="border border-[#a01bbd] rounded-md p-5 flex space-x-5 items-center">
              <img
                alt="Pink outline icon of a mechanical keyboard"
                className="flex-shrink-0"
                height="80"
                src="https://storage.googleapis.com/a1aa/image/a0ac559a-f756-41ae-d96a-1a791f28f81c.jpg"
                width="80"
              />
              <div>
                <h3 className="text-white font-extrabold text-lg mb-2">
                  MECHANICAL KEYBOARD
                </h3>
                <p className="text-white text-sm mb-4 max-w-xs">
                  Feel the speed and precision with our mechanical keyboards
                  designed for gamers.
                </p>
                <button
                  className="bg-[#a01bbd] text-white text-sm font-semibold px-4 py-2 rounded"
                  type="button"
                >
                  SHOP NOW
                </button>
              </div>
            </article>
            <article className="border border-[#a01bbd] rounded-md p-5 flex space-x-5 items-center">
              <img
                alt="Pink outline icon of a gaming mouse"
                className="flex-shrink-0"
                height="80"
                src="https://storage.googleapis.com/a1aa/image/ec63c53e-838b-4e31-2f17-70f88044929a.jpg"
                width="80"
              />
              <div>
                <h3 className="text-white font-extrabold text-lg mb-2">
                  GAMING MOUSE
                </h3>
                <p className="text-white text-sm mb-4 max-w-xs">
                  Get ahead of the competition wit
                  <span className="text-[#5a7ea6] cursor-default">?</span>
                  <br />
                  our responsive gaming mice.
                </p>
                <button
                  className="bg-[#a01bbd] text-white text-sm font-semibold px-4 py-2 rounded"
                  type="button"
                >
                  PLAY NOW
                </button>
              </div>
            </article>
          </div>
        </section>
        <section className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-6">FEATURED GAMES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-[#a01bbd] rounded-md p-5 flex justify-center items-center text-white font-extrabold text-lg">
              GAME TITLE
            </div>
            <div className="border border-[#a01bbd] rounded-md p-5 flex justify-center items-center text-white font-extrabold text-lg">
              GAME TITLE
            </div>
            <div className="border border-[#a01bbd] rounded-md p-5 flex justify-center items-center text-white font-extrabold text-lg">
              GAME TITLE
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
