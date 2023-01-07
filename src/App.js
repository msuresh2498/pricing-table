
import './App.css';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiCheck } from "react-icons/bi";
import { FiX } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div className='pricing'>
      <Card className='Card'>
      <Card.Body>
        <Card.Title className='titletext text-muted'>FREE</Card.Title>
        <h3 className="pricers">$0<small className='month'>/month</small></h3>
        <Card.Text className='cardtext'><BiCheck />Single User</Card.Text>
        <Card.Text className='cardtext'><BiCheck />5GB Storage</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Unlimited Public Projects</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Community Access</Card.Text>
        <Card.Text className='cardtext  text-muted'><FiX />Unlimited Private Projects</Card.Text>
        <Card.Text className='cardtext  text-muted'><FiX />Dedicated Phone support</Card.Text>
        <Card.Text className='cardtext  text-muted'><FiX />Free subdomain</Card.Text>
        <Card.Text className='cardtext  text-muted'><FiX />Monthly Status Report</Card.Text>
        <Button className='button'>Buy</Button>
      </Card.Body>
    </Card>
    <Card className='Card'>
      <Card.Body>
        <Card.Title className='titletext text-muted'>PLUS</Card.Title>
        <h3 className="pricers">$9<small className='month'>/month</small></h3>
        <Card.Text className='cardtext'><BiCheck /><strong>5 User</strong></Card.Text>
        <Card.Text className='cardtext'><BiCheck />50GB Storage</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Unlimited Public Projects</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Community Access</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Unlimited Private Projects</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Dedicated Phone support</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Free subdomain</Card.Text>
        <Card.Text className='cardtext  text-muted'><FiX />Monthly Status Report</Card.Text>
        <Button className='button'>Buy</Button>
      </Card.Body>
    </Card>
    <Card className='Card'>
      <Card.Body>
        <Card.Title className='titletext text-muted'>PRO</Card.Title>
        <h3 className="pricers">$49<small className='month'>/month</small></h3>
        <Card.Text className='cardtext'><BiCheck /><strong>Unlimited User</strong></Card.Text>
        <Card.Text className='cardtext'><BiCheck />150GB Storage</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Unlimited Public Projects</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Community Access</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Unlimited Private Projects</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Dedicated Phone support</Card.Text>
        <Card.Text className='cardtext'><BiCheck /><strong>unlimited</strong> Free subdomain</Card.Text>
        <Card.Text className='cardtext'><BiCheck />Monthly Status Report</Card.Text>
        <Button className='button'>Buy</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default App;
