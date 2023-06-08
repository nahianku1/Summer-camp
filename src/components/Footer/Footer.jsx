import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-lime-500  dark:bg-slate-900 text-black dark:text-white py-8 px-4">
        <div className="container mx-auto flex  flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8   lg:mb-0 ">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">
              At Fantasy Recipe, we're passionate about food and cooking. We
              believe that great meals bring people together, and that anyone
              can learn to cook delicious and healthy dishes with the right
              ingredients and techniques. 
            </p>
          </div>
          <div className="w-full lg:flex lg:flex-col lg:items-center lg:w-1/4 mb-8 lg:mb-0 ">
            <h2 className="text-lg font-bold mb-4">Latest Recipes</h2>
            <ul className="text-sm">
              <li>
                <a href="#">Pasta with Tomato Sauce</a>
              </li>
              <li>
                <a href="#">Grilled Chicken Salad</a>
              </li>
              <li>
                <a href="#">Beef Stroganoff</a>
              </li>
              <li>
                <a href="#">Fish Tacos</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0 ">
            <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
            <ul className="text-sm">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            <h2 className="text-lg text-center font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-full w-full md:w-3/4 lg:w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-r-full text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2023 Recipe Website. All rights reserved.</p>
          <ul className="flex text-sm mt-4 md:mt-0">
            <li className="mr-4">
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
