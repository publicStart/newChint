import React from "react";
import "./ProductsHover.css";
import Head from "./Head";
import Header from "../../Navbar/Header";
import ProductMap from "./ProductMap";
import Footer from "../../Footer/Footer";

const data=[
    {id:1, img:'./', title:"Автоматические выключатели (МАВ)", desc:'Автоматические выключатели CHINT Electric предохраняют от короткого замыкания и перегрузки сети, обеспечивают безопасность кабелей и электрооборудования, а также защищают человека от поражения током при случайном контакте с оголённым проводом.'},
    {id:2, img:'./', title:'Дифференциальные автоматы', desc:'Дифференциальный автомат CHINT объединяет функции автоматического выключателя и устройств защитного отключения. Он срабатывает и при утечке тока на землю, и при коротких замыканиях в момент перегрузки сети. Защищает человека от поражения электрическим током, а проводку — от возгорания.',},
    {id:3, img:'./', title:'Устройства защитного отключения', desc:'Дифференциальный автомат CHINT объединяет функции автоматического выключателя и устройств защитного отключения. Он срабатывает и при утечке тока на землю, и при коротких замыканиях в момент перегрузки сети. Защищает человека от поражения электрическим током, а проводку — от возгорания.',},
    {id:4, img:'./', title:'Выключатели нагрузки и переключатели', desc:'Дифференциальный автомат CHINT объединяет функции автоматического выключателя и устройств защитного отключения. Он срабатывает и при утечке тока на землю, и при коротких замыканиях в момент перегрузки сети. Защищает человека от поражения электрическим током, а проводку — от возгорания.',},
    {id:5, img:'./', title:'Модульные реле и таймеры', desc:'Дифференциальный автомат CHINT объединяет функции автоматического выключателя и устройств защитного отключения. Он срабатывает и при утечке тока на землю, и при коротких замыканиях в момент перегрузки сети. Защищает человека от поражения электрическим током, а проводку — от возгорания.',}
]

function ProductHover1() {
  return (
    <>
    <div className="wrapper">
      <Header />
      <Head
        title1={"Главная /Каталог продукции"}
        title2={"Каталог продукции"}
      />
      <div className="body1">
        <div className="wrapall">
          <div className="left-side">
            <span>
              <h1>Низковольтное оборудование</h1>
              <div className="arrow">
                <img src="./assets/images/arrow.png" alt="" />
              </div>
            </span>
            <hr className={"hr1"} />
            <div className={"span1"}>
              <h2>Модульное оборудование</h2>
              <hr className={"hr2"} />
            </div>
            <ul className="list">
              <li>Силовое оборудование защиты и коммутации</li>
              <li>Контакторы, реле, пускатели</li>
              <li>Компенсации реактивной мощности</li>
              <li>Кнопки управления, индикаторы</li>
              <li>Оборудование электропитания</li>
              <li>Выключатель-разъединители/рубильники </li>
              <li>Приводная техника</li>
              <li>Щиты и шкафы CHINT</li>
              <li>Аксессуары для шкафов и щитов CHINT</li>
              <li>Щиты и шкафы CHINT</li>
              <li>Цифровые измерительные приборы</li>
            </ul>
            <div className={"foot"}>
              <span>
                <h1>Оборудование распределения и передачи</h1>
                <div className="arrow1">
                  <img src="./assets/images/arrow1.png" alt="" />
                </div>
              </span>
              <hr />
              <span>
                <h1> Оборудование распределения и передачи</h1>
                <div className="arrow1">
                  <img src="./assets/images/arrow1.png" alt="" />
                </div>
              </span>
              <hr />
            </div>
          </div>
        <div className="rightside">
            {
                data.map((value, index)=>{
                    return(
                        <div>
                      <ProductMap data={value}/>
                        </div>
                    )
                })
            }
     
      
          
          
        </div>
    
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default ProductHover1;
