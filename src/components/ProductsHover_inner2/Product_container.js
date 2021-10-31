import React from 'react'
import './product_container.css'
import rasm2 from '../assets/images/rasm2.png'
import strelka from '../assets/images/strelka.png'
import { Link } from 'react-router-dom'
function Product_container() {
    return (
        <Link to='/avtomaticheskiy'>
        <div className={'product_container'}>
                <img src={rasm2} alt='rasm'/>
                <div className='product_title'>
                    <p>284003</p>
                    <p>Автоматический выключатель NB1-63 1Р 6А 6кА х-ка C (CHINT)</p>
                </div>
                <img src={strelka} alt='rasm'/>
        </div>
        </Link>
    )
}

export default Product_container
