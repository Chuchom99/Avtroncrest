
import 'bootstrap/dist/css/bootstrap.min.css';
import './kol.css'
import { Card, Row,Col,Button,CardBody,CardTitle,CardText, InputGroup,FormControl } from 'react-bootstrap';
import { useState } from 'react';



export default function User(){
  const timy = new Date()
  const timo = timy.toString()
  const jimo = timy.toLocaleString()
  const limo = timy.toDateString()
  console.log(limo)
   const [goly, Setgoly] = useState(jimo)



    return (
        <>
        <div style={{paddingLeft:"40px", paddingRight:"40px"}}>
         <div className='page-title-box'>
            <div>
                <h4 className='page-title'>
                     rtuyuyuyuyu
                </h4>
                <ol className='breadcrumb'>
                   <li className='breadcrumb-item'>
                    rd stock trade
                   </li>
                </ol>
            </div>
             <div style={{}}>
         <a style={{color:"blue", border:"1px solid blue"}} className='btn-sm'>{jimo}</a>
           </div>
         </div>
          </div>
          <Row style={{justifyContent:"flex-end ", paddingRight:"40px", marginBottom:"1.4rem"}}>
           <div style={{width:"15%"}}>
            <div style={{marginBottom:"1rem !important"}}>
                <Button href='' variant='primary' style={{width:"100%"}}>
                    yoooliufftyftfy
                </Button>

            </div>
           </div>
          </Row>
           

           <div style={{paddingLeft:"40px", paddingRight:"40px"}}>
          <InputGroup className="mb-3">
           <FormControl  placeholder='search' style={{backgroundColor:"transparent"}}>

           </FormControl >
           <Button>tgtut</Button>
         </InputGroup>
         </div>

        <Row style={{margin:"2rem",}}>
                <Col xs={6}  md="6">
                    <Card style={{textAlign:"center", padding:"2px",width:"100%", backgroundColor:"black", border:"1px #292828 solid"}}>
                    <div className='stock-logo-holder'>
                        <img  className='stock-logo' src='https://logo.clearbit.com/prologis.com'/>
                        <h4  className='text-light' >lokkiol</h4>
                        
                            <Card.Body>
                            
                            <Card.Title>
                                <span className='text-light' style={{marginRight:"7rem", textDecoration:"underline"}}>ROI</span>
                                <span className='text-success'>15% - 27% daily</span>
                            </Card.Title> 
                            <hr  className='text-light' />
                            <Card.Text style={{color:"white"}}>
                               liquidity staking
                            </Card.Text>
                            </Card.Body>
                        <Button variant="success" size="sm" style={{width:"80%", marginBottom:"1.5rem"}}>buy</Button>  
                    </div>
                </Card>
             </Col>


             <Col xs={6} md="6">
                    <Card style={{textAlign:"center", padding:"2px",width:"100%", backgroundColor:"black", border:"1px #292828 solid"}}>
                    <div className='stock-logo-holder'>
                        <img  className='stock-logo' src='https://logo.clearbit.com/prologis.com'/>
                        <h4  className='text-light' >lokkiol</h4>
                        
                            <Card.Body>
                            
                            <Card.Title>
                                <span className='text-light' style={{marginRight:"7rem", textDecoration:"underline"}}>ROI</span>
                                <span className='text-success'>15% - 27% daily</span>
                            </Card.Title> 
                            <hr  className='text-light' />
                            <Card.Text style={{color:"white"}}>
                               liquidity staking
                            </Card.Text>
                            </Card.Body>
                        <Button variant="success" size="sm" style={{width:"80%", marginBottom:"1.5rem"}}>buy</Button>  
                    </div>
                </Card>
             </Col>

        </Row>
        </>
    )
}