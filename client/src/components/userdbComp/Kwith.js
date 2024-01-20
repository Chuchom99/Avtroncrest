import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Col,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    ModalFooter,
     Row,Card,CardBody,CardTitle,FormControl,Form,
     FormGroup, InputGroup,FormSelect,
      CardHeader, FormLabel } from 'react-bootstrap';
import './pol.css'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState, useEffect } from 'react';
import { makeRequest } from '../../axios';




export default function Kwith(){
   const [method, setMethod] = useState('');
   const [inputs, setInputs] = useState({
      amount: 0,
      method_details: method,
      wallet: ""
    });
    console.log(inputs);
    
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

      };
      const handleMethodChange = (e) => {
         setMethod(e.target.value);
       };
     
      useEffect(() => {
         setInputs((prevInputs) => ({
           ...prevInputs,
           method_details: method
         }));
       }, [method]);
     
      const [err, setErr] = useState(null);
      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await makeRequest.post("trans/withdraw", inputs);
    
        } catch (err) {
          setErr(err.response.data);
        }
      };
    
    return (
        <div style={{width: "100%"}} >
        <Container style={{width: "100%"}} >

             <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
         <Col xs={6} md="6">
                    <Card style={{ padding:"2px", width:"40rem", backgroundColor:"#1b202e", borderRadius:"13px"}}>
                           <Card.Header as="h3" size="bg" style={{color:"whitesmoke"}}>
                           Withdrawal Request
                           </Card.Header>
                             <hr style={{color:"white", marginBottom:0}} />
                            <Card.Body style={{backgroundColor:"#1b202e", borderTop: "2px solid white", margin:"-.1rem"}}>
                            <Card.Title style={{fontSize:"medium"}}>
                            <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
                          
                          <Form.Label style={{color:"white"}}>Amount</Form.Label>
                          <Form.Control variant="dark" onChange={handleChange} type="number" name='amount' placeholder="Amount" style={{backgroundColor:"transparent", color: "#fff"}} />
                             <Button variant='secondary' style={{marginTop:"3px"}}> 
                            Available balance:$ <span style={{color:"yellow"}}>{0}</span>
                             </Button>
                        </Form.Group>
                             
                           </Form>
                            </Card.Title> 
                            
                            <Card.Title style={{fontSize:"medium"}}>
                            <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                          <Form.Label style={{color:"white"}}>PayOut Option</Form.Label>
                          <Form.Select aria-label="Default select example" value={method} onChange={handleMethodChange} style={{backgroundColor:"#010c17", color: "#fff"}}>
                   <option>Select method</option>
                   <option value="BTC">BTC</option>
                   <option value="ETH">ETH</option>
                   <option value="USDT">USDT</option>
                   <option value="BTC CASH">BTC CASH</option>

                              </Form.Select>
                    
                        </Form.Group>
                           </Form>
                            </Card.Title>

                            <Card.Title style={{fontSize:"medium"}}>
                            <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                          <Form.Label style={{color:"white"}}>Wallet Address</Form.Label>
                          <Form.Control variant="dark" type="text" onChange={handleChange} name='wallet' placeholder="Wallet Address" style={{backgroundColor:"transparent", color: "#fff"}} />
                    
                        </Form.Group>
                           </Form>
                            </Card.Title>
                            

                            <Button variant="success" size="lg" 
                            onClick={handleClick}
                          style={{width:"100%", marginBottom:"1.5rem", marginTop:"1rem"}} >
                             Withdrawal</Button> 
                            </Card.Body> 
                </Card>
             </Col>
                </div>
        </Container>
        </div>
    )
}