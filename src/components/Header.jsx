import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-secondary p-4 lg:px-20 lg:py-6 flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-text text-4xl font-bold font-headings">Lenovo</p>   
        <nav className="ml-56 hidden lg:block">
          <ul className="flex space-x-4">
            <li className="text-text font-medium hover:font-bold transition duration-300">Produkty</li>
            <li className="text-text font-medium hover:font-bold transition duration-300">Kategórie</li>
            <li className="text-text font-medium hover:font-bold transition duration-300">Kontakt</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <FaShoppingCart className="text-text text-2xl lg:text-3xl cursor-pointer hover:text-primary transition duration-300" />
        <div className="ml-4 hidden lg:block">
          <button className="text-text rounded-xl py-2 px-8 font-medium border hover:border-primary bg-background transition duration-300">
            Prihlásiť sa
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
