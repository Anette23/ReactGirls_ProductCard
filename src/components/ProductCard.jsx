import image1 from "../assets/images/img1.webp";
import { FaWifi, FaCamera, FaRegKeyboard } from "react-icons/fa";
import { useState } from "react";

const ProductCard = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <section className="max-container grid grid-cols-1 lg:grid-cols-2 p-8 lg:px-16 lg:py-16 lg:gap-32">
      <div className="flex justify-center items-center">
        <img
          src={image1}
          y
          alt="Lenovo Yoga 7"
          className="rounded-xl shadow-lg"
        />
      </div>

      <aside className="py-8">
        <div>
          <h1 className="font-heading text-text text-3xl lg:text-4xl mb-4 lg:mb-6">
            Lenovo Yoga 7
          </h1>

          <div>
            <p className="text-text text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6">
              1 349 €
            </p>
          </div>

          <div className="flex items-center mb-6 lg:mb-8 space-x-4 lg:space-x-6">
            <p className="text-text">
              Intel Core i7 1360P Raptor Lake, dotykový 14 OLED lesklý 2880 ×
              1800, RAM 16GB LPDDR5, Intel Iris Xe Graphics, SSD 1000GB,
              podsvietená klávesnica, webkamera, USB 3.2 Gen 1, stylus, WiFi 6E,
              hmotnosť 1,49 kg, Intel EVO, Windows 11 Home
            </p>
          </div>

          <div className="flex items-center mb-6 lg:mb-8 space-x-4 lg:space-x-6">
            <FaWifi className="text-secondary text-3xl lg:text-4xl" />
            <p className="text-text">WiFi 6E</p>
          </div>

          <div className="flex items-center mb-6 lg:mb-8 space-x-4 lg:space-x-6">
            <FaCamera className="text-secondary text-3xl lg:text-4xl" />
            <p className="text-text">Webkamera</p>
          </div>

          <div className="flex items-center mb-6 lg:mb-8 space-x-4 lg:space-x-6">
            <FaRegKeyboard className="text-secondary text-3xl lg:text-4xl" />
            <p className="text-text">Podsvietená klávesnica</p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center">
              <button
                onClick={decrement}
                className="text-primary font-bold bg-text text-xl py-3 px-5 rounded-tl-xl rounded-bl-xl"
              >
                -
              </button>
              <p className="text-bacgkround bg-text text-xl py-3 px-5 font-bold">{count}</p>

              <button
                onClick={increment}
                className="text-primary font-bold text-xl bg-text py-3 px-5 rounded-tr-xl rounded-br-xl"
              >
                +
              </button>
            </div>
            <button className="text-white bg-primary rounded-xl py-4 px-8 font-bold hover:scale-110 transition duration-300">
              Pridať do košíka
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default ProductCard;
