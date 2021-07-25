import React from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import Forms from "./form"

import "./admin.css"

export default class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Header />
                <Forms />
                <Footer />
            </div>
        )
    }
}