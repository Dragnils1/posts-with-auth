import React from "react"
import axios from "axios"

import "./main.css";

export default class GetPosts extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        resp: [],
        title: "",
        title2: "",
        kategory: "",
        text: "",
        text2: "",
        imgSrc: "",
        views: 0,
    }
    this.gP = this.gP.bind(this);
    this.renderCycle = this.renderCycle.bind(this);

}

    gP () {
        axios.get("http://localhost:8080/")
            .then((res) => { 
                const data = res.data
                this.setState({
                    resp: data,
                    title: data[2].title,
                    kategory: data[3].kategory,
                    text: data[4].text,
                    text2: data[5].text2,
                    imgSrc: data[6].imgSrc,
                    title2: data[7].title2,
                    views: data[8].views,
                })
                console.log(this.state.resp);
            })
            .catch(err => {console.log(err.message);})}

    renderCycle () {
        this.state.resp.forEach()
    }


    componentDidMount() {
        this.gP()
    }

        render() {
            return (
                <>
                    <aside className="flex">
                        <div className="square square1">
                            <h1 className="heading anime">
                                <strong>{this.state.title}</strong>
                            </h1>
                            <p className="status anime">Категория:{this.state.kategory}. Всего просмотров:{this.state.views} </p>
                            <p className="content anime">{this.state.text}</p>
                            <p><img src={this.state.imgSrc} alt="" className="aside_img" /></p>
                        </div>
                        <div className="square square2">
                            <h1><strong>{this.state.title2}</strong></h1>
                            <p>{this.state.views}icon view {this.state.kategory}</p>
                            <p>{this.state.text2}</p>
                            <p><img src={this.state.imgSrc} alt="" className="aside_img"></img></p>
                        </div>
                    </aside>
                        {/* <div >
                            <ul>res: {this.state.resp.map(res => <li key={res.id}>{res.username}</li>)}</ul>
                        </div> */}
                </>
            );
        }
}