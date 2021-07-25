import React from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer";
import { Form, Button} from "react-bootstrap"
import "./auth.css";
import axios from "axios"


export default class Auntification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: "example@mail.ru",
          pass: "********",
          checkPass: "********",
          ascept: false,
          sign: true,
          signText: "Sign up"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeSign = this.changeSign.bind(this);
    }

    changeSign () {
      this.state.sign ? this.setState({sign: false, signText: "Sign in"}) : this.setState({sign: true, signText: "Sign up"});
    }


    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            pass: this.state.pass
        }
        axios.post("http://localhost:8080/user/auth", { user })
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
            <div>
                <Header />
                <hr/>
                {this.state.sign 
                  ? <SignIn email={this.state.email} pass={this.state.pass} handleChange={this.handleChange} handleSubmit= {this.handleSubmit} ascept={this.state.ascept}/>
                  : <SignUp email={this.state.email} pass={this.state.pass} handleChange={this.handleChange} handleSubmit= {this.handleSubmit} ascept={this.state.ascept} checkPass={this.state.checkPass}/>}
                <Button variant="primary" onClick={this.changeSign}>{this.state.signText}</ Button>
                <hr/>
                <Footer />
            </div>
        )
    }
}

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }
        render() {
          return(
            <>
                <Form className="authForm" onSubmit={this.props.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.props.email} onChange={this.props.handleChange} />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="pass" value={this.props.pass} onChange={this.props.handleChange} />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" name="ascept" value={this.props.ascept} onChange={this.props.handleChange} />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
            </>
          )
        }
  }

class SignUp extends React.Component {
    constructor(props) {
    super(props)
    this.state = {

    }

  }
      render() {
        return(
          <>
              <Form className="authForm" onSubmit={this.props.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="email" value={this.props.email} onChange={this.props.handleChange} />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="pass" value={this.props.pass} onChange={this.props.handleChange} />
                      <Form.Label>Repeat password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="checkPass" value={this.props.checkPass} onChange={this.props.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" name="ascept" value={this.props.ascept} onChange={this.props.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
          </>
        )
      }
}