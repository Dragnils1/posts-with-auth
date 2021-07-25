import React from "react"
import axios from "axios"
import {Form} from "react-bootstrap"

export default class Forms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avtor: "vk.com/zdesdolgnobitcratkoeime",
            numberPost: 0,
            title: "Введите заголовок",
            text: "Введите текст не менее 5 предложений"       
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async handleSubmit(e) {

        e.preventDefault()
         let user = {
            email: this.state.avtor,
            title: this.state.title,
            text: this.state.text,
        }

        console.log(user);
        axios.post("http://localhost:8080/user/email", { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
        
    }
    
        render() {
        return(
            <>
                <Form className="adminForm" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Avtor name</Form.Label>
                        <Form.Control type="text" name="avtor" value={this.state.avtor} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Create new post</Form.Label>
                        <Form.Control size="lg" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        <Form.Control as="textarea" rows={3} name="text" 
                            value={this.state.text} onChange={this.handleChange}/>
                    </Form.Group>
                    <input type="submit" value="Submit" />
                </Form>
            </>
        )
    }   
}