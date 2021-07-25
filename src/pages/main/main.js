import React from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import GetPosts from "./getPosts";

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){return (
           <div>
                <Header />
                <GetPosts />
                <Footer />
            </div>
    )};
    
}