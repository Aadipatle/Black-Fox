import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import './App.css';
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { MdPlace } from "react-icons/md";
import res from "./assets/resturent.jpg";
import brew1 from "./assets/cold brew1.jpg";
import brew2 from "./assets/cold brew2.jpg";
import brew3 from "./assets/cold brew3.jpg";
import hotmilk1 from "./assets/hotmilk1.jpg";
import hotmilk2 from "./assets/hotmilk2.jpg";
import hot1 from "./assets/hot1.jpg";
import hot2 from "./assets/hot2.jpg";
import hot3 from "./assets/hot3.jpg";
import ice from "./assets/ice.jpg";
import ice1 from "./assets/ice1.jpg";
import ice3 from "./assets/ice3.jpg";
import logo from "./assets/image3.png";
import { Link } from 'react-router-dom';

const foodItems = [
  {
    id: 1,
    name: 'Classic Cold Brew',
    description: 'Smooth and refreshing iced coffee',
    price: 'Rs 15',
    img: brew1,
    category: 'Cold Brew',
    img1: brew1,
    img2: brew1,
  },
  {
    id: 2,
    name: 'Vanilla Cold Brew',
    description: 'Cold brew with a hint of vanilla',
    price: 'Rs 18',
    img: brew2,
    category: 'Cold Brew',
    img1: brew2,
    img2: brew2,
  },
  {
    id: 3,
    name: 'Hazelnut Cold Brew',
    description: 'Nutty twist to a chilled classic',
    price: 'Rs 20',
    img: brew3,
    category: 'Cold Brew',
    img1: brew3,
    img2: brew3,
  },

  // Hot with Milk Category
  {
    id: 4,
    name: 'Cappuccino',
    description: 'Creamy coffee with a frothy top',
    price: 'Rs 12',
    img: hotmilk1,
    category: 'Hot with Milk',
    img1: hotmilk1,
    img2: hotmilk1,
  },
  {
    id: 5,
    name: 'Latte',
    description: 'Espresso with steamed milk and foam',
    price: 'Rs 14',
    img: hotmilk2,
    category: 'Hot with Milk',
    img1: hotmilk2,
    img2: hotmilk2,
  },
  {
    id: 6,
    name: 'Mocha',
    description: 'Chocolate-flavored coffee drink',
    price: 'Rs 16',
    img: hotmilk2,
    category: 'Hot with Milk',
    img1: hotmilk2,
    img2: hotmilk2,
  },

  // Hot without Milk Category
  {
    id: 7,
    name: 'Espresso',
    description: 'Rich and bold shot of coffee',
    price: 'Rs 10',
    img: hot1,
    category: 'Hot without Milk',
    img1: hot1,
    img2: hot1,
  },
  {
    id: 8,
    name: 'Americano',
    description: 'Espresso diluted with hot water',
    price: 'Rs 11',
    img: hot2,
    category: 'Hot without Milk',
    img1: hot2,
    img2: hot2,
  },
  {
    id: 9,
    name: 'Black Coffee',
    description: 'Straightforward and strong brew',
    price: 'Rs 8',
    img: hot3,
    category: 'Hot without Milk',
    img1: hot3,
    img2: hot3,
  },

  // Ice Tea & Coffee Category
  {
    id: 10,
    name: 'Iced Americano',
    description: 'Chilled espresso with water',
    price: 'Rs 13',
    img: ice,
    category: 'Ice Tea & Coffee',
    img1: ice,
    img2: ice,
  },
  {
    id: 11,
    name: 'Iced Latte',
    description: 'Chilled coffee with milk',
    price: 'Rs 15',
    img: ice1,
    category: 'Ice Tea & Coffee',
    img1: ice1,
    img2: ice1,
  },
  {
    id: 12,
    name: 'Peach Iced Tea',
    description: 'Sweet and refreshing peach-flavored tea',
    price: 'Rs 12',
    img: ice1,
    category: 'Ice Tea & Coffee',
    img1: ice1,
    img2: ice1,
  },
  {
    id: 13,
    name: 'Lemon Iced Tea',
    description: 'Tangy and cooling lemon tea',
    price: 'Rs 10',
    img: ice1,
    category: 'Ice Tea & Coffee',
    img1: ice,
    img2: ice1,
  },];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cold Brew');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  const filteredFoodItems = foodItems.filter((food) => food.category === selectedCategory);

  return (
    <div className="restaurant-page">
      <div className="first">
        <div className="left" data-aos="fade-right">
          <h3>Black Fox Cofee</h3>
          <p>Nagpur, Maharashtra </p>
          <div className="social-links">
            <Link to="https://wa.me/9284614144"><FaWhatsapp color='green' size={'21px'} /></Link>
            <Link to="https://www.instagram.com"><FaInstagram color='red' size={'21px'} /></Link>
            <Link to="https://www.facebook.com/"><FaFacebook color='blue' size={'21px'} /></Link>
            <Link to="https://www.youtube.com"><FaYoutube color='red' size={'21px'} /></Link>
          </div>
        </div>
        <div className="right" data-aos="zoom-in">
          <img src={res} width={'150px'} alt="Restaurant" className="restaurant-image" />
        </div>
      </div>

      <div className="row second-row">
        <h2> Coffee Menu - {selectedCategory} Food</h2>
        <div className="category" onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}>
          <div className="category-item" onClick={() => handleCategoryChange('Cold Brew')}>
            <p>Cold Brew</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryChange('Hot with Milk')}>
            <p>Hot with Milk</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryChange('Hot without Milk')}>
            <p>Hot without Milk</p>
          </div>
          <div className="category-item" onClick={() => handleCategoryChange('Ice Tea & Coffee')}>
            <p>Ice Tea & Coffee</p>
          </div>
       
        </div>

        <div className="menu-container">
          {filteredFoodItems.map((food) => (
            <div className="menu-item" key={food.id}>
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }} 
                spaceBetween={10}
                className="image-slider"
                modules={[Pagination]}
              >
                <SwiperSlide><img src={food.img} alt={food.name} className="food-image" /></SwiperSlide>
                <SwiperSlide><img src={food.img1} alt={food.name} className="food-image" /></SwiperSlide>
                <SwiperSlide><img src={food.img2} alt={food.name} className="food-image" /></SwiperSlide>
              </Swiper>
              <div className='food-content'>
                <h4>{food.name}</h4>
                <p>{food.description}</p>
                <p className='p'>{food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-contact">
        <Link to="tel:919284614144" target="_blank"><div className="icontainer"><FaPhone color='#588399' size={'33px'} /></div></Link>
        <Link to="https://g.co/kgs/uTT7h3u" target="_blank"><div className="icontainer"><FaGoogle color='#588399' size={'33px'} /></div></Link>
        <Link to="mailto:abhighushe@gmail.com" target="_blank"><div className="icontainer"><AiTwotoneMail color='#588399' size={'33px'} /></div></Link>
        <Link to="https://maps.app.goo.gl/2ShnbPxuZZ61r6ds6" target="_blank"><div className="icontainer"><MdPlace color='#588399' size={'35px'} /></div></Link>
      </div>

      <footer>
        {/* Powered by : <img src={logo} alt="" width={'110px'} /> */}
        @Copyright By Black Fox
      </footer>
    </div>
  );
};

export default App;
