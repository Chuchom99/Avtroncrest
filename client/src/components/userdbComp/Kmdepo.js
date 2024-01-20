import { useState, useContext, useEffect } from "react";
import btc from "../../assets/BTC.svg"
import "./kmdepo.scss"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { makeRequest } from "../../axios";



const Pay = () => {
const [selectedComponent, setSelectedComponent] = useState('list');
const [method, setMethod] = useState("")
const [inputs, setInputs] = useState({
  amount: 0,
  method_details: ""
});
console.log(inputs);

const handleChange = (e) => {
    const { name, value } = e.target;
      setInputs((prev) => ({ ...prev, [name]: value, method_details: method }));
  };
  const [err, setErr] = useState(null);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await makeRequest.post("trans/deposit", inputs);

    } catch (err) {
      setErr(err.response.data);
    }
  };


  return (
    <>
        {
      selectedComponent === "list" && (
        <div className='features' >
        {/* {open && <FormModal open={open} onClose={handleClose} />} */}
        <div className='features-1 col' >
            <div className="col f-fcol" >
                <img className="f-images" src={btc} alt='' />
                <div className='col f-col'  >
                    <span className="f-header" >BTC</span>
                    <span className='f-content' >Pay with Bitcoin</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedComponent('form');
                    setMethod("BTC");
                  }}
                >
                  Deposit
                </button>
            </div>
            <div className="col f-fcol" >
                <img className="f-images" src={btc} alt='' />
                <div className='col f-col' >
                    <span className="f-header" >ETH</span>
                    <span className='f-content' >Pay with Etherrium</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedComponent('form');
                    setMethod("ETH");
                  }}
                >
                  Deposit
                </button>

            </div>
            
        </div>
    
        <div className='features-1 col'  >
        <div className="col f-fcol" >
                <img className="f-images" src={btc} alt='' />
                <div className='col f-col' >
                    <span className="f-header" >USDT</span>
                    <span className='f-content' >Pay with USDT</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedComponent('form');
                    setMethod("USDT");
                  }}
                >
                  Deposit
                </button>

            </div>
            <div className="col f-fcol" >
                <img className="f-images" src={btc} alt='' />
                <div className='col f-col' >
                    <span className="f-header" > BTC CASH</span>
                    <span className='f-content' >Pay with BTC CASH</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedComponent('form');
                    setMethod("BTC CASH");
                  }}
                >
                  Deposit
                </button>

            </div>
        </div>     
          </div>
    
      )
    }


{
      selectedComponent === "form" && (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header
         onClick={() => {
           setSelectedComponent('list');
         }}
        
         closeButton >
          <Modal.Title>Enter amount</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input name='amount' type="number"  placeholder='Enter amount' onChange={handleChange} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClick} >Procced</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

      )
    }
    </>


  )
}

export default Pay;