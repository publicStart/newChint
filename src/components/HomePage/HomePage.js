import Header from "../Navbar/Header";
import ThreeImageComponent from "../ThreeImageComponent/ThreeImageComponent";
import Footer from "../Footer/Footer";
import ProductsHover1 from "../Hovers/ProductHover1/ProductsHover";
import ProductsHover_inner from "../ProductsHover_inner/ProductsHover_inner";
import { Switch, Link, Route } from "react-router-dom";
import "./search.css";
import "./showcase.css";
import "./products.css";
import "./custom_radio_lang.css";
import "./custom_radio_products.css";
import "./advantages.css";
import "./Homepage.css";
import Map from "./Map";
import ChintWorld6 from "../ChintWorld/ChintWorld6/ChintWorld6";
import ChintWorld7 from "../ChintWorld/ChintWorld7/ChintWorld7";
import ChintInWorld3 from "../ChintWorld/ChintInWorld3/ChintInWorld3";
import Chintworld4 from "../ChintWorld/ChintWorld4/ChintWorld4";
import ChintWorld5 from "../ChintWorld/ChintWorld5/ChintWorld5";
import ChintWorld2 from "../ChintWorld/ChintWorld2/ChintWorld2";
import ChintWorld8 from "../ChintWorld/ChintWorld8/ChintWorld8";
import ChintWorld9 from "../ChintWorld/ChintWorld9/ChintWorld9";
import ChintWorld from "../ChintWorld/ChintWorld";
import ProductsHover_inner2 from "../ProductsHover_inner2/ProductsHover_inner2";
import ProductsHover_inner3 from "../ProductsHover_inner/ProductsHover_inner3";
import slideimage1 from "../assets/images/slideimage1.png";
import slideimage2 from "../assets/images/slideimage2.png";
import Vertorbottom from "../assets/images/Vectorbuttom.png";
import SlideData from "./SlideData";
import ProductBox from "./ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";
import product7 from "../assets/images/product7.png";
import product8 from "../assets/images/product8.png";
import product9 from "../assets/images/product10.png";

import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

const productdata = [
  {
    img1: product1,
    title1: "Модульное оборудование CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product2,
    title1: "Силовое оборудование защиты и коммутации CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product2,
    title1: "Кнопки управления, индикаторы CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product3,
    title1: "Компенсация реактивной мощности CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product4,
    title1: "Кнопки управления, индикаторы CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product5,
    title1: "Оборудование электропитания CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product6,
    title1: "Выключатель-разъединители/рубильники CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product7,
    title1: "Приводная техника CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product8,
    title1: "Щиты и шкафы CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product9,
    title1: "Аксессуары для шкафов и щитов CHINT",
    imghidden: { display: "block" },
  },
  {
    img1: product9,
    title1: "Цифровые измерительные приборы",
    imghidden: { display: "block" },
  },
  { img1: "", title1: "", imghidden: { display: "none" } },
];
const styleDot = {
  width: "0.58vw",
  height: "0.58vw",
  borderRadius: "0.29vw",
  marginRight: "0.73vw",
  backgroundColor: "#FFFFFF",
  border: "1px solid #FFFFFF",
};
const styleCarousel = {
  width: "70vw",
};

function HomePage() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="homepage_main_container">
            <Header />
          </div>

          {/* SHOWCASE  */}
          <div className="homepage_showcase">
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="mySwiper"
              autoplay={{ delay: 5000 }}
            >
              <SwiperSlide>
                <SlideData
                  left_title="Официальный дистрибьютор  в Узбекистане"
                  slideImageNone={{ display: "none" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SlideData
                  left_title="Автоматический выключатель"
                  right_imge={slideimage1}
                  right_image_width_height={{
                    width: "21.9vw",
                    height: "19.9vw",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SlideData
                  left_title="Автоматические выключатели в литом корпусе серий"
                  right_imge={slideimage2}
                  right_image_width_height={{
                    width: "22.9w",
                    height: "27.5vw",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SlideData
                  left_title="Официальный дистрибьютор  в Узбекистане"
                  slideImageNone={{ display: "none" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SlideData
                  left_title="Автоматический выключатель"
                  right_imge={slideimage1}
                  right_image_width_height={{
                    width: "21.9vw",
                    height: "19.9vw",
                  }}
                />
              </SwiperSlide>
            </Swiper>
            <img className="vectorbuttom" src={Vertorbottom} alt="rasm" />
          </div>
          <div className="hompage_content">
            <div className="hompage_content_inner">
              <ThreeImageComponent />
            </div>
          </div>
          {/* PRODUCTS  */}
          <div className="homepage_product">
            <div className="homepage_product_container">
              <div className="homepage_pro_contaier_title">
                <h1>Продукция</h1>
                <span></span>
              </div>
              <div className="homepage_pro_contaier_menyu">
                <div className="homepage_pro_contaier_men1">
                  <h6>Низковольтное оборудование</h6>
                </div>
                <div className="homepage_pro_contaier_men1">
                  <h6>
                    Оборудование <br />
                    распределения и передачи
                  </h6>
                </div>
                <div className="homepage_pro_contaier_men1">
                  <h6>
                    Электроустановочные <br />
                    изделия
                  </h6>
                </div>
              </div>
              <div className="homepage_pro_contaier_box">
                {productdata.map((item) => {
                  return (
                    <ProductBox
                      pro_box_img={item.img1}
                      pro_box_title={item.title1}
                      imghidden={item.imghidden}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div class="homepage_main_container">
            {/* ADVANTAGES  */}
            <div id="advantages">
              <div class="section_title_wrap">
                <h1 class="section_title">Преимущества</h1>
                <div class="section_title_underline"></div>
              </div>

              <div class="showcase">
                <div class="showcase_content">
                  <div class="stat_wrap">
                    <div class="stat_rect"></div>
                    <h1 class="stat_number">32 000</h1>
                    <span class="stat_title">Сотрудников</span>
                  </div>
                  <div class="stat_wrap">
                    <div class="stat_rect"></div>
                    <h1 class="stat_number">33</h1>
                    <span class="stat_title">Года на рынке </span>
                  </div>
                  <div class="stat_wrap">
                    <div class="stat_rect"></div>
                    <h1 class="stat_number">47 000</h1>
                    <span class="stat_title">
                      Изделий различного <br />
                      назначения
                    </span>
                  </div>
                  <div class="stat_wrap">
                    <div class="stat_rect"></div>
                    <h1 class="stat_number">320</h1>
                    <span class="stat_title">
                      Сертификатов <br />
                      качества
                    </span>
                  </div>
                </div>
              </div>

              <div class="advantage_cards">
                <div class="advantage_cards__card">
                  <div class="advantage_cards_rect">
                    <object
                      class="advantage_cards__icon1"
                      data="./assets/icons/setting-tools.svg"
                      type="image/svg+xml"
                    >
                      {" "}
                    </object>
                    <object
                      class="advantage_cards__icon2"
                      data="./assets/icons/setting-tools2.svg"
                      type="image/svg+xml"
                    >
                      {" "}
                    </object>
                  </div>
                  <h1 class="advantage_card_title">Поддержка</h1>
                  <ul>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Скачать
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Видеоуроки
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Техническое
                      консультирование
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Программное
                      обеспечение
                    </li>
                  </ul>
                </div>
                <div class="advantage_cards__card">
                  <div class="advantage_cards_rect">
                    <object
                      class="advantage_cards__icon1"
                      data="./assets/icons/setting-tools.svg"
                      type="image/svg+xml"
                    >
                      {" "}
                    </object>
                    <object
                      class="advantage_cards__icon2"
                      data="./assets/icons/setting-tools2.svg"
                      type="image/svg+xml"
                    >
                      {" "}
                    </object>
                  </div>
                  <h1 class="advantage_card_title">О компании</h1>
                  <ul>
                    <li>
                      <span class="advantage_card_sm_rect"></span> CHINT в мире
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Наше
                      производство
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span>{" "}
                      Сотрудничество
                    </li>
                  </ul>
                </div>
                <div class="advantage_cards__card">
                  <div class="advantage_cards_rect">
                    <object
                      class="advantage_cards__icon1"
                      data="./assets/icons/hand_shake.svg"
                      type="image/svg+xml"
                    >
                      {" "}
                    </object>
                    <object
                      class="advantage_cards__icon2"
                      data="./assets/icons/hand_shake2.svg"
                      type="image/svg+xml"
                    >
                      {" "}
                    </object>
                  </div>
                  <h1 class="advantage_card_title">Сотрудничество</h1>
                  <ul>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Скачать
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Видеоуроки
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Техническое
                      консультирование
                    </li>
                    <li>
                      <span class="advantage_card_sm_rect"></span> Программное
                      обеспечение
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MAP  */}
            <Map />
          </div>
          <Footer />
          <div class="footer_very_bottom"></div>
        </Route>

        <Route exact path="/productHover1">
          <ProductsHover1 />
        </Route>
        <Route exact path="/productHover1/products">
          <ProductsHover_inner />
        </Route>
        <Route exact path="/productHover1/products/product-info">
          <ProductsHover_inner2 />
        </Route>

        <Route exact path="/chintworld">
          <ChintWorld2 />
        </Route>
        <Route exact path="/history">
          <ChintWorld6 />
        </Route>
        <Route exact path="/download">
          <ChintWorld7 />
        </Route>
        <Route exact path="/production">
          <ChintInWorld3 />
        </Route>
        <Route exact path="/cooperation">
          <Chintworld4 />
        </Route>
        <Route exact path="/news">
          <ChintWorld5 />
        </Route>
        <Route exact path="/support">
          <ChintWorld8 />
        </Route>
        <Route exact path="/tech-consult">
          <ChintWorld9 />
        </Route>
        <Route exact path="/about">
          <ChintWorld />
        </Route>
        <Route exact path="/avtomaticheskiy">
          <ProductsHover_inner3 />
        </Route>
      </Switch>
    </>
  );
}

export default HomePage;
