import image1 from "../assets/images/img1.webp";
import image2 from "../assets/images/img2.webp";
import image3 from "../assets/images/img3.webp";
import image4 from "../assets/images/img4.webp";
import image5 from "../assets/images/img5.webp";

const ProductCard = () => {
  return (
    <>
      <section className="max-container lg:grid w-full lg:grid-cols-2 p-8 lg:px-20 lg:py-16 md:gap-24 lg:gap-32">
        <aside className="left">
          <article className="mb-8  ">
            <img src={image5} alt="Lenovo Yoga 7" className="main-image"/>
          </article>
          <article className="flex gap-6 ">
            <div>
              <img
                src={image2}
                className="product-image"
                alt="Lenovo Yoga 7"
              />
            </div>
            <div>
              <img
                src={image3}
                className="product-image"
                alt="Lenovo Yoga 7"
              />
            </div>
            <div>
              <img
                src={image4}
                className="product-image"
                alt="Lenovo Yoga 7"
              />
            </div>
            <div>
              <img
                src={image1}
                className="product-image"
                alt="Lenovo Yoga 7"
              />
            </div>
          </article>
        </aside>

        <aside className="right py-8">
          <div>
            <h1 className="text-text font-medium text-3xl mb-6">
            Lenovo Yoga 7 14IRL8 Storm Grey celokovový + aktívny stylus Lenovo(záruka 3 roky Premium Care On-Site)
            </h1>
            <h2></h2>
            <p className="text-text  mb-6">
            Notebook – Intel Core i7 1360P Raptor Lake, dotykový 14 OLED lesklý 2880 × 1800, RAM 16GB LPDDR5, Intel Iris Xe Graphics, SSD 1000GB, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, stylus, WiFi 6E, hmotnosť 1,49 kg, Intel EVO, Windows 11 Home
            </p>
          </div>
          <div>
            <p className="text-text text-xl font-extrabold mb-6">1 349 €</p>
          </div>
          <div>
            <button className="text-text bg-primary rounded-xl py-4 px-8">
              Pridať do košíka
            </button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default ProductCard;
