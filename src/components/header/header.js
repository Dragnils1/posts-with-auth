//js
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

//css
import "./header.css";

//img and others
import logo from '../../images/uJ-GP_gtHz8.jpg';
import info from '../../images/icons8-информация-50.png';
import contact from '../../images/icons8-контакты-50.png';

export default class Header extends React.Component {
    render(){
        return(
            <header className="header">

                      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
                  <ul> 
                        <a href="#" alt=""><li className="header_li"><img src={logo} alt="coronaDino" className="images logo_img"></img></li></a>
                        <a href="#" alt=""><li className="header_li">Главная</li></a>
                        <a href="#" alt=""><li className="header_li">Веб-разработка</li></a>
                        <a href="#" alt=""><li className="header_li">Администрирование</li></a>
                        <a href="#" alt=""><li className="header_li">Пентестинг</li></a>
                        <a href="#" alt=""><li className="header_li">Сделать заказ</li></a>
                        <a href="#" alt=""><li className="header_li">Контакты</li></a>
                        <a href="#" alt=""><li className="header_li">О нас</li></a>
                        <a href="#" alt=""><li className="header_li">
                            <form>
                                <div>
                                    <input type="search" name="q" placeholder="Search the site..." aria-label="Search through site content" size="30"></input>
                                </div>
                            </form>
                        </li></a>
                        <a href="#" alt=""><li className="header_li"><img src={info} alt="info" className="images logo_img"></img></li></a>
                        <a href="#" alt=""><li className="header_li"><img src={contact} alt="contact" className="images logo_img"></img></li></a>
                    </ul> 
            </header>
        )
    }
}
