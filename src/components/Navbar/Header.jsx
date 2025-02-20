import React from "react";
import "./Header.css";
import Hover1 from "./Hover1";
import { Link } from "react-router-dom";
import lines from '.././assets/icons/threeline.svg'
import x from '.././assets/icons/x.svg'
import { useState } from "react";

function Header() {
  const [click, setClick]=useState(true)
  function handleClick(){
    setClick(!click)
  }
  // const bgcoloring={
  //   fill:'blue'
  // }
// const options = [
//   { value: 'Ru', label:'Ru'},
//   { value: 'Uz', label:'Uz' },
//   { value: 'Eng', label: 'Eng' }
// ]
  return (
    <>
      <nav id="nav">
        <div className="nav_logo">
          <svg
            width="140"
            height="33"
            viewBox="0 0 140 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.573 0.0243349H98.0899C97.1641 0.0243349 96.8227 0.364796 96.8227 1.28301C96.8227 7.29435 96.8227 13.3052 96.8227 19.3156C96.8227 19.4497 96.8712 19.6015 96.7506 19.7445C96.6313 19.6103 96.5239 19.4939 96.4223 19.3731C91.1236 13.1003 85.8225 6.82616 80.5189 0.550501C80.3862 0.376507 80.2134 0.237245 80.0152 0.144598C79.8171 0.051951 79.5996 0.00867048 79.3812 0.0184428C77.4059 0.0346551 75.4307 0.0184428 73.4554 0.0184428C72.5032 0.0184428 72.169 0.350057 72.169 1.29627V30.816C72.169 30.9015 72.169 30.987 72.169 31.0725C72.1672 31.2075 72.1927 31.3414 72.2441 31.4662C72.2955 31.591 72.3717 31.7041 72.468 31.7985C72.5644 31.8929 72.6789 31.9667 72.8046 32.0155C72.9303 32.0642 73.0646 32.0869 73.1993 32.0821C75.1496 32.0821 77.0998 32.0821 79.05 32.0821C79.31 32.0888 79.5625 31.9948 79.755 31.8197C80.0582 31.5515 80.0935 31.1919 80.0935 30.8116C80.0935 24.813 80.0935 18.8145 80.0935 12.8159V12.3236C80.2289 12.471 80.307 12.5476 80.3761 12.6302C85.7543 18.9668 91.1315 25.3043 96.5077 31.6429C96.6203 31.7873 96.7658 31.9028 96.9319 31.9797C97.098 32.0566 97.2801 32.0927 97.4629 32.085C99.4867 32.0747 101.511 32.085 103.534 32.085C104.417 32.085 104.778 31.7239 104.778 30.8337V1.24468C104.78 0.404588 104.403 0.0243349 103.573 0.0243349Z"
              fill="#1E59A4"
            />
            <path
              d="M30.7949 18.9956C29.2632 18.9809 27.73 18.9809 26.1954 18.9956C25.4859 19.003 25.0341 19.4894 25.0311 20.1953C25.0311 20.9676 25.0311 21.7414 25.0311 22.5137C25.0288 23.3709 24.6876 24.1922 24.0822 24.7982C23.4768 25.4041 22.6564 25.7454 21.8004 25.7473C17.9618 25.7542 14.1227 25.7542 10.2831 25.7473C9.85925 25.7483 9.43946 25.6653 9.04782 25.5032C8.65618 25.341 8.30043 25.1028 8.00109 24.8024C7.70176 24.502 7.46475 24.1452 7.30368 23.7527C7.14262 23.3601 7.0607 22.9396 7.06264 22.5152C7.06264 18.1988 7.06264 13.8809 7.06264 9.56152C7.05856 9.14 7.1376 8.72182 7.2952 8.33093C7.4528 7.94005 7.68588 7.58415 7.98108 7.28363C8.27628 6.9831 8.62778 6.74385 9.01548 6.5796C9.40317 6.41534 9.81944 6.3293 10.2404 6.32642C14.1045 6.30578 17.9682 6.30578 21.8313 6.32642C22.5483 6.33522 23.2422 6.58212 23.804 7.02837C24.3657 7.47463 24.7637 8.095 24.9354 8.79217C25.0679 9.32423 25.0267 9.86513 25.0311 10.4031C25.0311 11.1518 25.4727 11.6043 26.2086 11.6072C27.7178 11.6072 29.2264 11.6072 30.7346 11.6072C31.4705 11.6072 31.943 11.2093 31.9724 10.4841C32.0181 9.29622 32.0696 8.10093 31.9238 6.92038C31.4234 2.89382 28.1309 0.022759 24.0626 0.022759H16.0027C14.5191 0.022759 13.034 0.022759 11.5503 0.022759C10.0667 0.022759 8.60662 -0.0465149 7.13476 0.0566547C3.19017 0.332265 0.00801347 3.77371 0.00654161 7.73837C0.00654161 13.2963 -0.00817701 18.8527 0.00654161 24.4091C0.0153728 26.6007 0.858722 28.4681 2.44392 29.9743C3.96877 31.4246 5.81451 32.1173 7.91633 32.1188C13.2651 32.1188 18.6128 32.1188 23.9596 32.1188C24.4862 32.1188 25.012 32.0804 25.533 32.0038C29.0213 31.4865 31.9062 28.272 32.0092 24.7422C32.0519 23.2359 32.0298 21.7252 32.024 20.2175C32.0298 19.5026 31.5309 19.003 30.7949 18.9956Z"
              fill="#1E59A4"
            />
            <path
              d="M66.4699 12.1674C58.8162 12.1674 51.1625 12.1704 43.5088 12.1763C43.1497 12.1763 43.0673 12.079 43.0673 11.7341C43.082 8.25142 43.0761 4.76724 43.0761 1.28306C43.0761 0.385482 42.7244 0.0288086 41.8383 0.0288086H36.4292C35.4725 0.0288086 35.1472 0.378114 35.1472 1.32138V16.0422C35.1472 20.9855 35.1472 25.9288 35.1472 30.8721C35.1472 31.7004 35.5211 32.0865 36.3159 32.088H41.8721C42.7082 32.088 43.0747 31.7181 43.0747 30.875C43.0747 26.8514 43.0747 22.8278 43.0658 18.8042C43.0658 18.4741 43.1556 18.4018 43.475 18.4018C48.7992 18.4126 54.1229 18.4126 59.4462 18.4018C59.7641 18.4018 59.8524 18.4682 59.8509 18.7998C59.8377 22.8484 59.8421 26.8956 59.8509 30.9443C59.8509 31.7033 60.2395 32.0865 61.0064 32.088H66.4891C67.4355 32.088 67.7873 31.7299 67.7873 30.7704V13.4674C67.7799 12.5109 67.434 12.1674 66.4699 12.1674Z"
              fill="#1E59A4"
            />
            <path
              d="M138.786 0.0229492H108.907C108.085 0.0229492 107.695 0.41499 107.694 1.24035C107.694 2.49214 107.694 3.74343 107.694 4.99424C107.694 5.93308 108.068 6.30744 109.01 6.30744C112.271 6.30744 115.535 6.31629 118.798 6.29713C119.185 6.29713 119.239 6.40914 119.239 6.76286C119.228 14.8081 119.226 22.8544 119.232 30.9016C119.232 31.6385 119.615 32.0807 120.287 32.0807C122.668 32.0807 125.047 32.0807 127.426 32.0807C127.561 32.0855 127.695 32.0633 127.822 32.0155C127.948 31.9677 128.064 31.8951 128.162 31.8021C128.456 31.5265 128.496 31.1669 128.496 30.7881C128.496 22.7536 128.493 14.7197 128.488 6.68622C128.488 6.39145 128.552 6.29565 128.865 6.2986C130.963 6.31334 133.06 6.30597 135.158 6.30597C136.384 6.30597 137.611 6.30597 138.837 6.30597C139.604 6.30597 139.999 5.90361 140 5.15342C140 3.85152 140 2.55109 140 1.25214C140.007 0.378146 139.654 0.0229492 138.786 0.0229492Z"
              fill="#1E59A4"
            />
            <path
              d="M60.3648 7.95076C62.6579 7.95076 64.9501 7.95076 67.2413 7.95076C67.6741 7.95076 67.7786 7.84465 67.7786 7.40544C67.7786 5.1249 67.7786 2.84437 67.7786 0.563833C67.7786 0.121678 67.6814 0.0258789 67.2384 0.0258789H60.3618C59.9203 0.0258789 59.8438 0.0980978 59.8438 0.532883C59.8438 1.67266 59.8438 2.81244 59.8438 3.95221C59.8438 5.09199 59.8438 6.24454 59.8438 7.40986C59.8438 7.88444 59.9041 7.95076 60.3648 7.95076Z"
              fill="#E41A22"
            />
          </svg>
        </div>
        <div className="navigation">
          <ul className="nav_ul">
            <li className={"dropdown"}>
              <div className="position">
                <span className={"under under-center"}>Продукция</span>
              </div>
      
              <Hover1 />
              
            {/* <Hover1/> */}
            
            </li>
            <li className={"dropdown1"}>
              <Link className={"dropdown1_link_underline position"} to="/about">
                {" "}
                <span className={"under under-center"}> О компании </span>{" "}
              </Link>
              <div id="Hover1">
                <div className="hoverContainer1">
                  <div className={"about1"}>
                    <p>
                      <Link className={"linking"} to="/chintworld">
                        {" "}
                        CHINT в мире{" "}
                      </Link>
                    </p>
                    <p>
                      {" "}
                      <Link className={"linking"} to="/production">
                        {" "}
                        Наше производство{" "}
                      </Link>{" "}
                    </p>
                    <p>Акции </p>
                    <p>
                      {" "}
                      <Link className={"linking"} to="/cooperation">
                        {" "}
                        Сотрудничество{" "}
                      </Link>
                    </p>
                    <p>
                      <Link className={"linking"} to="/news">
                        {" "}
                        Новости и газета{" "}
                      </Link>
                    </p>
                    <p>
                      {" "}
                      <Link className={"linking"} to="/history">
                        {" "}
                        История компании{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={"dropdown1"}>
              <span className={"position"}>
                <Link
                  className={"dropdown1_link_underline under under-center"}
                  to="/download"
                >
                  Скачать{" "}
                </Link>
              </span>

              <div id="Hover1">
                <div className="hoverContainer1">
                  <div className={"about2"}>
                    <p>
                
                      <Link className={'linking'} to="/download">
                     
                        Рекламные материалы
                      </Link>
                    </p>
                    <p>
                      
                      <Link className={'linking'} to="/download">
                        Сертификаты
                      </Link>
                    </p>
                    <p>
                    
                      <Link className={'linking'} to="/download">
                      
                        Паспорта устройств, РЭ
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className={"dropdown1_link_underline position"}>
                <span className={"under under-center"}>Где купить</span>
              </Link>
            </li>
            <li className={"dropdown1"}>
              <Link to="/" className={"dropdown1_link_underline position"}>
                <span className={"under under-center"}>Поддержка</span>
              </Link>
              <div id="Hover1">
                <div className="hoverContainer1">
                  <div className={"about3"}>
                    <p>
                      <Link className={"linking"} to="/download">
                        Скачать{" "}
                      </Link>
                    </p>
                    <p>
                      <Link className={"linking"} to="/support">
                        {" "}
                        Гарантия и ремонт{" "}
                      </Link>
                    </p>
                    <p>
                      <Link className={"linking"} to="/tech-consult">
                        Техническое консультирование{" "}
                      </Link>
                    </p>
                    <p> Программное обеспечение </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className={"dropdown1_link_underline position"}>
                <span className={"under under-center"}>Контакты</span>
              </Link>
            </li>
            <li className="lang">
            <select name="" id="">
              <option value="">Ru</option>
              <option value="">Uz</option>
              <option value="">Eng</option>
            </select>
              {/* <Select
               options={options} 
               defaultValue={{value: 'Ru', label:'Ru'}}
               /> */}
           
            </li>
          </ul>
          <div className="call">
            <div className="call_center">
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 0C4.4114 0 0.271484 4.13991 0.271484 9.22852C0.271484 9.79244 0.271484 14.1548 0.271484 14.2324C0.271484 15.2501 1.09947 16.0781 2.11719 16.0781H2.83824C3.09221 16.7942 3.77606 17.3086 4.57812 17.3086C5.59585 17.3086 6.42383 16.4806 6.42383 15.4629V10.459C6.42383 9.44126 5.59585 8.61328 4.57812 8.61328C3.77606 8.61328 3.09221 9.1277 2.83824 9.84375H2.11719C1.90149 9.84375 1.69452 9.88128 1.50195 9.94957V9.22852C1.50195 4.81839 5.08988 1.23047 9.5 1.23047C13.9101 1.23047 17.498 4.81839 17.498 9.22852V9.94957C17.3055 9.88128 17.0985 9.84375 16.8828 9.84375H16.1618C15.9078 9.1277 15.2239 8.61328 14.4219 8.61328C13.4042 8.61328 12.5762 9.44126 12.5762 10.459V15.4629C12.5762 16.4806 13.4042 17.3086 14.4219 17.3086C14.6081 17.3086 14.7879 17.2806 14.9576 17.2291C14.7274 17.9863 14.0229 18.5391 13.1914 18.5391H11.2399C10.9859 17.823 10.3021 17.3086 9.5 17.3086C8.48228 17.3086 7.6543 18.1366 7.6543 19.1543C7.6543 20.172 8.48228 21 9.5 21C10.3021 21 10.9859 20.4856 11.2399 19.7695H13.1914C14.8876 19.7695 16.2676 18.3896 16.2676 16.6934V16.0781H16.8828C17.9005 16.0781 18.7285 15.2501 18.7285 14.2324C18.7285 14.156 18.7285 9.79199 18.7285 9.22852C18.7285 4.13991 14.5886 0 9.5 0ZM3.96289 10.459C3.96289 10.1197 4.23888 9.84375 4.57812 9.84375C4.91737 9.84375 5.19336 10.1197 5.19336 10.459V15.4629C5.19336 15.8021 4.91737 16.0781 4.57812 16.0781C4.23888 16.0781 3.96289 15.8021 3.96289 15.4629V10.459ZM2.11719 11.0742H2.73242V14.8477H2.11719C1.77795 14.8477 1.50195 14.5717 1.50195 14.2324V11.6895C1.50195 11.3502 1.77795 11.0742 2.11719 11.0742ZM9.5 19.7695C9.16076 19.7695 8.88477 19.4935 8.88477 19.1543C8.88477 18.8151 9.16076 18.5391 9.5 18.5391C9.83924 18.5391 10.1152 18.8151 10.1152 19.1543C10.1152 19.4935 9.83924 19.7695 9.5 19.7695ZM15.0371 15.4629C15.0371 15.8021 14.7611 16.0781 14.4219 16.0781C14.0826 16.0781 13.8066 15.8021 13.8066 15.4629V10.459C13.8066 10.1197 14.0826 9.84375 14.4219 9.84375C14.7611 9.84375 15.0371 10.1197 15.0371 10.459V15.4629ZM17.498 14.2324C17.498 14.5717 17.2221 14.8477 16.8828 14.8477H16.2676V11.0742H16.8828C17.2221 11.0742 17.498 11.3502 17.498 11.6895V14.2324Z"
                  fill="white"
                />
              </svg>
              <span> (95) 476 76 76 </span>
            </div>
          </div>
          <div className="line" onClick={handleClick}>
           { click?<img src={lines} alt="line" />
           : 
          
           <img class="change-my-color" src={x} alt="x" />
         
              }
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
