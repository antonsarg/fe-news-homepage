import { useState } from "react";
import logo from "./assets/logo.svg";
import iconMenu from "./assets/icon-menu.svg";
import iconMenuClose from "./assets/icon-menu-close.svg";
import web3Desktop from "./assets/image-web-3-desktop.jpg";
import web3Mobile from "./assets/image-web-3-mobile.jpg";
import gamingGrowth from "./assets/image-gaming-growth.jpg";
import retroPcs from "./assets/image-retro-pcs.jpg";
import topLaptops from "./assets/image-top-laptops.jpg";
import "./App.css";

function App() {
  let [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  let news = [
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  let trending = [
    {
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: retroPcs,
    },
    {
      title: "Top 10 Laptops of 2022",
      description: "What will the future of gaming look like?",
      image: topLaptops,
    },
    {
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: gamingGrowth,
    },
  ];

  return (
    <div className="App relative">
      <nav>
        <div className="container flex justify-between pt-6 pb-4 md:pt-20">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <button className="z-50 md:hidden" onClick={menuHandler}>
            <img src={menuOpen ? iconMenuClose : iconMenu} alt="Menu Control" />
          </button>
          <div className={"fixed left-0 top-0 w-full h-full bg-neutral-very-dark-blue/40 opacity-0 pointer-events-none transition-opacity "  + (menuOpen && "opacity-100") }></div>
          <div className={"fixed right-0 top-0 w-3/4 h-screen px-6 py-40 bg-neutral-off-white flex flex-col gap-7 transition-transform duration-500 md:static md:flex-row md:h-auto md:w-auto md:px-0 md:py-0 md:gap-10 " + (menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0") }>
            <a href="/home" className="hover:text-primary-soft-red">
              Home
            </a>
            <a href="/new" className="hover:text-primary-soft-red">
              New
            </a>
            <a href="/popular" className="hover:text-primary-soft-red">
              Popular
            </a>
            <a href="/trending" className="hover:text-primary-soft-red">
              Trending
            </a>
            <a href="/categories" className="hover:text-primary-soft-red">
              Categories
            </a>
          </div>
        </div>
      </nav>
      <main className="container mt-6 mb-14">
        <div className="grid gap-14 md:grid-cols-3 md:gap-8">
          <div className="space-y-4 md:space-y-8 md:col-span-2">
            <div className="row-span-4">
              <img src={web3Mobile} alt="Web 3.0" className="md:hidden" />
              <img
                src={web3Desktop}
                alt="Web 3.0"
                className="hidden md:block"
              />
            </div>
            <div className="grid row-span-2 gap-4 md:gap-8 md:grid-cols-2">
              <h1 className="text-4xl font-bold md:text-6xl">
                The Bright Future of Web 3.0?
              </h1>
              <div className="flex flex-col justify-between">
                <p className="text-neutral-dark-grayish-blue">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <a
                  href="/more"
                  className="self-start mt-4 px-6 py-3 bg-red-500 text-white font-semibold tracking-widest bg-primary-soft-red text-15 text-neutral-off-white uppercase hover:bg-neutral-very-dark-blue md:mt-0"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-7 py-8 bg-neutral-very-dark-blue md:col-span-1">
            <h2 className="text-3xl font-bold text-primary-soft-orange">New</h2>
            <div className="flex flex-col h-full justify-between divide-y divide-neutral-grayish-blue">
              {news.map((item) => {
                return (
                  <div key={item.title} className="py-8 first:pt-0 last:pb-0">
                    <a href="/" className="group">
                      <div className="space-y-2">
                        <h3 className="text-neutral-off-white text-lg font-bold group-hover:text-primary-soft-orange">
                          {item.title}
                        </h3>
                        <p className="text-neutral-grayish-blue">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid gap-8 mt-14 md:grid-cols-3">
          {trending.map((item) => {
            return (
              <div key={item.title}>
                <a href="/" className="group">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt="Retro PCs"
                      className="max-h-28"
                    />
                    <div className="flex flex-col justify-between">
                      <span className="text-neutral-grayish-blue text-2xl font-bold">
                        01
                      </span>
                      <h3 className="text-neutral-very-dark-blue font-bold group-hover:text-primary-soft-red">
                        {item.title}
                      </h3>
                      <p className="text-neutral-dark-grayish-blue">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
