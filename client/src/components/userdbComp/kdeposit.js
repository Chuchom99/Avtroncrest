import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Col, Row,Card,CardBody,CardTitle } from 'react-bootstrap';
import './pol.css'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import card from "../../assets/card.png"
import { useState } from 'react';
import Pay from './Kmdepo';


export default function Kdepo (){
    const [selectedComponent, setSelectedComponent] = useState('method');
    const timy = new Date()
    const limo = timy.toDateString()
    const [click, Setclick] = useState(true)

    const dclick =()=> {
        Setclick(false)
    }

    const [clicks, Setclicks] = useState(true)

    const pclick =()=> {
        Setclicks(false)
    }

    return (
        <>
        {
            selectedComponent === "method" && (

         <Container fluid className='method' >
         
            <div style={{ color:"white"}} className="page-title-box">
            <h4>Payment Method</h4>
                <div >
                    <Button size='sm' variant='' >
                        TODAY:&nbsp;{limo}
                      <CalendarMonthIcon/>
                    </Button>
                </div>
            </div>
              

         <Card style={{ padding:"2px",width:"100%", backgroundColor:"black", border:"1px #292828 solid"}}>
                    <div>
                        
                            <Card.Body>
                            
                            <Card.Title>
                                <span className='text-success'>Payment Method</span>
                            </Card.Title>
                            <hr className='text-light' />
                            <Row>
                                <Col lg="6">
                                    
                            <Card.Text style={{color:"white"}}>
                                 <p style={{marginBottom:".7rem"}}><AccountBalanceIcon />    Bank Card</p>
                               <Button onClick={dclick} style={ click ? {width:'90%', marginBottom:"1rem"} : {display:"none"}}>
                                <img src={card} width="16%" height="15%" /> {" "}
                                <span>Master Card</span>
                               </Button>
                               { !click ?
                               <Button variant='danger' style={{width:'90%', marginBottom:"1rem"}}>
                                 <p>!</p>
                                 Master Card is not available at the moment,
                                You'll have to make use of another preferred deposit option.
                                 Thank you for understanding.
                               </Button> : null
                               }

                               <p style={{marginBottom:".7rem"}}> <CurrencyBitcoinIcon />  Cryptocurrency</p>
                               <Button  style={{width:'90%', marginBottom:"1rem"}}
                               onClick={() => setSelectedComponent('crypto')} 
                               >
                                <img src={require('../../assets/wallet.png')} width="10%" height="15%" /> {" "}
                                <span>Crypto Currency</span>
                               </Button>

                               <p style={{marginBottom:".7rem"}}> <PaymentIcon />  E-Payment</p>
                               <Button onClick={pclick} style={ clicks ? {width:'90%', marginBottom:"1rem"} : {display:"none"}}>
                                <img src={require('../../assets/payment-method.png')} width="10%" height="15%" /> {" "}
                                <span>Perfect Money</span>
                               </Button>
                               { !clicks ?
                               <Button variant='danger' style={{width:'90%', marginBottom:"1rem"}}>
                                 <p>!</p>
                                 This deposit option is not available in your country at the moment,
                                  we're doing our best to bring this option back,
                                  for now it's best to make use of another convinent deposit option in your country.
                                   Thank you for understanding
                               </Button> : null
                               }
                            </Card.Text>
                             </Col>
                            </Row>
                            </Card.Body> 
                    </div>
                </Card>

         </Container>
            )
        }
        {
            selectedComponent === "crypto" && (
         <div className='crypto' >
            <Pay />
         </div>
            )
        }
        </>
    )
}