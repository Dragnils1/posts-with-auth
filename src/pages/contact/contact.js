import React from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";


export default class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Header />
                <h1>Здесь вы можете заказать создание ВАШЕГО сайта, </h1>
                <Footer />
            </div>
        )
    }
}