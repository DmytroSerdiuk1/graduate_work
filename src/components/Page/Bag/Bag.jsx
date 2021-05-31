import React from 'react'
import { Container } from 'react-bootstrap'
import BagCard from '../../BagCard'


const Bag = () => {
    return (
        <div className="bag">
            <Container>
                <div className="bag-header d-flex justify-content-between">
                    <p>Ваша корзина</p>
                    <p><span>4</span> предмета</p>
                </div>
                <div style={{minHeight: "550px"}} className="bag-wrapper mt-2">
                    <BagCard/>
                    <BagCard/>
                    <BagCard/>
                    <BagCard/>
                </div>
            </Container>
        </div>
    )
}

export default Bag
