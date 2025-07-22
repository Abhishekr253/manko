import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* nav bar section */}
      <section className="shadow-lg border border-gray-200">
        <nav className="container items-center flex justify-between sticky mx-auto py-4 px-6">
          {/* logo */}
          <div className="ml-16">
            <img
              src="https://htmlburger.com/blog/wp-content/uploads/2024/06/Cafe-Websites-Design-Example-Just-Love-Coffee-Cafe.png"
              alt=""
              className="w-6 h-6"
            />
          </div>

          {/* nav link */}
          <div className=" hidden md:flex gap-5 mr-16">
            <Link className="text-gray-600 hover:text-black text-sm font-bold uppercase">
              home
            </Link>
            <Link className="text-gray-600 hover:text-black text-sm font-bold uppercase">
              our story
            </Link>
            <Link className="text-gray-600 hover:text-black text-sm font-bold uppercase">
              menus
            </Link>
            <Link className="text-gray-600 hover:text-black text-sm font-bold uppercase">
              find us
            </Link>
            <Link className="text-gray-600 hover:text-black text-sm font-bold uppercase ">
              contact us
            </Link>
          </div>
        </nav>
      </section>

      {/* welcome img section */}
      <section>
        <div className="bg-gradient-to-br from-gray-800 via-indigo-900 to-black h-164 w-full text-white flex items-center justify-center uppercase">
          <div>
            <h1 className="text-xl">Welcome to man.ko resto cafe</h1>
            <p className="text-sm text-center">
              We have the best dishes in kottayam
            </p>
          </div>
          <button className="border border-gray-200 rounded-lg bg-black p-1 ml-6 cursor-pointer">
            About Us
          </button>
        </div>

        {/* overlay text */}
        <div className="absolute insert-0 bg-black object"></div>
      </section>

      {/* Our Story section */}

      <section>
        
      </section>
    </>
  );
}

export default Home;
