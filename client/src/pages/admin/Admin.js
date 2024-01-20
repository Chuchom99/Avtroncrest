import { useState, useEffect, useContext } from 'react';
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../../assets/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import "./admin.scss"
import { makeRequest } from "../../axios";
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';




const Admin = () => {
  const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('manage-users');
    const [selectedInvestorsComponent, setSelectedInvestorsComponent] = useState('all-trans');
    const [open, setOpen] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null)
    const [allUser, setAllUsers] = useState([])
    const [investors, setAllInvestor] = useState([])
    const [withdrawalReq, setWithdrawalReq] = useState([])
    const [kyc, setKyc] = useState([])
    const [depositReq, setDepositReq] = useState([])
    const [stockReq, setstockReq] = useState([])
    const [trades, setTrades] = useState([])
    const [userTrades, setAllTrades] = useState([])
    const [createUserTrades, setCreateUserTrades] = useState({
      amount: "",
      balance_id: "",
      stock: ""
    })
    const [totalBal, setTotalBal] = useState([])
    const { total_balance } = totalBal.length > 0 ? totalBal[0] : "NO";
    const [alltransactions, setAllTransactions ] = useState([])
    const [wallets, setWallets] = useState([])
    const [walletInputs, setWalletInputs] = useState({
      wallet_type: "",
      wallet_address: "",
    });
    const handleWalletChange = (e) => {
      setWalletInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleCreateTradeChange = (e) => {
      setWalletInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleUserClick = (item) => {
      setSelectedUser(item);
      setShowModal(true);
    };

    const navigate = useNavigate()
    const [err, setErr] = useState(null);

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSelectedUser((prev) => ({ ...prev, [name]: value }));
    };



    const handleUpdateClick = async (e) => {
      e.preventDefault();
  
      try {
        await makeRequest.post(`admin/update/${selectedUser.users_id}`, selectedUser);
        setSelectedComponent('manage-users') 
      } catch (err) {
        setErr(err.response.data);
      }
    };
    
    const handleAllTransactionsClick = async (item) => {
      try {
        const response = await makeRequest.get(`admin/alltransactions/${item.users_id}`);
        setAllTransactions(response.data);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleAllTradesClick = async (item) => {
      try {
        const response = await makeRequest.get(`admin/trades/${item.users_id}`);
        setAllTrades(response.data);
      } catch (err) {
        setErr(err.response.data);
      }
    };


    const handleApproveKyc = async (item) => {
      try {
        await makeRequest.get(`admin/postkyc/approve/${item.users_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleApproveDeposit = async (item) => {
      try {
        await makeRequest.get(`admin/deposits/approve/${item.transaction_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };
    const handleCancelDeposit = async (item) => {
      try {
        await makeRequest.get(`admin/deposits/failed/${item.transaction_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleApproveStock = async (item) => {
      try {
        await makeRequest.get(`admin/stock/approve/${item.stock_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleCancelStock = async (item) => {
      try {
        await makeRequest.get(`admin/stock/failed/${item.stock_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleWithdrawalReq = async (item) => {
      try {
        await makeRequest.get(`admin/withdrawal/approve/${item.transaction_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleWithdrawalFailed = async (item) => {
      try {
        await makeRequest.get(`admin/withdrawal/failed/${item.transaction_id}`);
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handlelogout = async () => {
      try {
        await makeRequest.post("auth/logout");
        navigate("/login")
      } catch (err) {
        setErr(err.response.data);
      }
    };

    const handleWalletSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await makeRequest.post("admin/wallet/update", walletInputs);
        
        // Assuming the server sends a success message in the response
        setMessage(response.data.message);
      } catch (err) {
        // Handle errors, if needed
        console.error(err);
      }
    };

    const handleCreatTradeSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await makeRequest.post("admin/trades/new", createUserTrades);
        
        // Assuming the server sends a success message in the response
        setMessage(response.data.message);
      } catch (err) {
        // Handle errors, if needed
        console.error(err);
      }
    };




    useEffect(() => {
      makeRequest.get("admin/getusers").then((res) => {
        setAllUsers(res.data)
      } 
      )
    }, []);

    useEffect(() => {
      makeRequest.get("admin/investors").then((res) => {
        setAllInvestor(res.data)
      } 
      )
  
    }, []);    

    useEffect(() => {
      makeRequest.get("admin/withdrawal").then((res) => {
        setWithdrawalReq(res.data)
      } 
      )
    }, []);
    useEffect(() => {
      makeRequest.get("admin/kyc").then((res) => {
        setKyc(res.data)
      } 
      )
    }, []);
    useEffect(() => {
      makeRequest.get("admin/deposits").then((res) => {
        setDepositReq(res.data)
      } 
      )
  
    }, []);

    useEffect(() => {
      makeRequest.get("admin/stockreq").then((res) => {
        setstockReq(res.data)
      } 
      )
  
    }, []);

    useEffect(() => {
      makeRequest.get("admin/trades").then((res) => {
        setTrades(res.data)
      } 
      )
  
    }, []);

    useEffect(() => {
      makeRequest.get("admin/total/balance").then((res) => {
        setTotalBal(res.data)
      } 
      )
  
    }, []);

    useEffect(() => {
      makeRequest.get("admin/wallet").then((res) => {
        setWallets(res.data)
      } 
      )
  
    }, []);
    console.log(createUserTrades);


  

    return(
        <div className="dashboar" >
         <div className="navba roww " >
            <div className="nav-col roww">
               <Button
               className="n-btn"
               onClick={() => setOpen(!open)}
               aria-controls="example-collapse-text"
               aria-expanded={open}
               >
               <MenuIcon />
              </Button>
            </div>

            <div className="nav-col roww">
                <span>Admin</span>
                <AccountCircleIcon />
                
            </div>
      </div>
        <div style={{display: "flex"}} >
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <div className="sidebar col"   style={{ width: '250px',background: "#010a12"  }}>
              <div className="col" style={{gap: "20px"}} >
               <img className="logo" src={logo} alt="" />
               <div className="d-board" >
                <span><HomeIcon />  Dashboard</span>
              </div>
              <div>
                <div className="sidebar-others col " >
                  <div className="col users" >
                  <span className="bold" >Users</span>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('manage-users')}
                  >
                  <span className="small" > <GroupIcon /> Manage users</span>
                  </button>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('manage-investors')}
                  >
                  <span className="small" > <GroupIcon />  Investors</span>
                  </button>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('kyc')}
                  >
                  <span className="small" > <GroupIcon />  KYC request</span>
                  </button>
                  </div>
                  

                  <div className="col req" >
                  <span className="bold" >Request</span>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('deposit-req')}
                  >
                  <span className="small" > <FormatListBulletedIcon /> Deposit requests</span>
                  </button>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('stock-req')}
                  >
                  <span className="small" > <FormatListBulletedIcon /> Stock request</span>
                  </button>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('trades')}
                  >
                  <span className="small" > <FormatListBulletedIcon /> Trades</span>
                  </button>
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('withdrawal-req')}
                  >
                  <span className="small" > <FormatListBulletedIcon /> Withdrawal request</span>
                  </button>
                  </div>

                  <div className="col req" >
                  <button
                  className='sb-btn'
                  onClick={() => setSelectedComponent('wallet')}
                  >
                  <span className="small" >Add Wallet Address</span>
                  </button>
                  </div>
                  <div className="l-out" >
                  <button
                  className='sb-btn'
                  onClick={handlelogout}
                  >
                  <span className="small" > <LogoutIcon /> Log out</span>
                  </button>


                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </Collapse> 

      <div className="main col" > 
        <div className="top">
          <div className="roww box-d"  >
          <div className="boxs" >
            <div className="roww pad" style={{justifyContent: "space-between"}} >
            <span className="bd" >Total users</span>
            <div className="block" style={{background: "rgb(86, 202, 0)"}}  >
              <PeopleOutlineIcon />
            </div>
            </div>
            <div className="boda" >             
            <span className="sm roww" >{allUser?.length}  <span className="smp" > %+</span></span>
            </div>
          </div>
          <div className="boxs" >
            <div className="roww pad" style={{justifyContent: "space-between"}} >
            <span className="bd">Available bal</span>
            <div className="block" style={{background: "blue"}} >
              <AttachMoneyIcon />
            </div>
            </div>
            <div className="boda" >  
            <span className="sm roww" >{total_balance}  <span className="smp" > $%++</span></span>           
            </div>
          </div>
          </div>
          <div className="roww box-d" >
          <div className="boxs" >
            <div className="roww pad" style={{justifyContent: "space-between"}} >
            <span className="bd">Withdrawal request</span>
            <div className="block" style={{background: "red"}} >
              <RemoveCircleOutlineIcon />
            </div>
            </div>
            <div className="boda" >  
            <span className="sm roww" >{withdrawalReq?.length}  <span className="smp" style={{color: "red"}} > %-</span></span>
           
            </div>
          </div>
          <div className="boxs" >
            <div className="roww pad" style={{justifyContent: "space-between"}} >
            <span className="bd">Investors</span>
            <div className="block" style={{background: "rgb(86, 202, 0)"}} >
              <PeopleOutlineIcon />
            </div>
            </div>
            <div className="boda" > 
            <span className="sm roww" > {investors?.length} <span className="smp" > %+++</span></span>
            
            </div>
          </div>
          </div>

        </div>
        {
          selectedComponent === "manage-users" && (
        <div className="users" >
        <span className='he' >Users</span>
        <div className="heading">
        {/* <p>#</p> */}
        <p className="name us-widt">Name</p>
        <p className="hide-in-mobile us-widt">Email</p>
        <p className="hide-in-mobile us-widt">Phone</p>
        <p className="price us-widt" >Bal</p>
        <p className="country us-widt">Country</p>
        </div>

        <div className='users-cnt' >
          {
            allUser.map((item, i) => (
              <div className='user-cnt' style={{cursor: "pointer"}} onClick={() => {handleUserClick(item); setSelectedComponent("modal") }} >
                <span className='us-widt' >{item.name}</span>
                <span className='us-widt' >{item.email}</span>
                <span className='us-widt' >{item.phone}</span>
                <span className='us-widt' >{item.main_balance}</span>
                <span className=' us-widt' >{item.nationality}</span>
              </div>
            ) )
          }
        </div>
        </div>
          )
        }

       {
        selectedComponent === "manage-investors" && (
        <div className="users" >
        <span className='he' >Investors</span>
        <div className="heading">
        <p className="name widt">Name</p>
        <p className="hide-in-mobile widt">Email</p>
        <p className="hide-in-mobile widt">Phone</p>
        <p className="price widt" >Bal</p>
        <p className="country widt">Total investment</p>
        <p className="country widt">Country</p>


        </div>

        <div className='users-cnt' >
          {
            investors.map((item, i) => (
              <div className='user-cnt' style={{cursor: "pointer"}} key={i} onClick={() => {handleAllTransactionsClick(item); handleAllTradesClick(item); setSelectedComponent("user-transctions" ) }}  >
                <span className='widt' >{item.name}</span>
                <span className='widt' >{item.email}</span>
                <span className='widt' >{item.phone}</span>
                <span className='widt' >{item.main_balance}</span>
                <span className='widt' >{item.total_investment}</span>
                <span className='widt' >{item.nationality}</span>
              </div>
            ) )
          }
        </div>
        </div>
          )
        }

        {
          selectedComponent === "kyc" && (
            <div className="users " >
            <span className='he' >KYC Requests</span>
            <div className="heading ">
            {/* <p>#</p> */}
            <p className="name">Name</p>
            <p className="hide-in-mobile">Email</p>
            <p className="price" >Status</p> 
            <p>Approve</p>       
            </div>
    
            <div className='users-cnt' >
              {
                kyc.map((item, i) => (
                  <div className='user-cnt'  >
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{item.kyc_status}</span> 
                    <button  className="approve" onClick={() => handleApproveKyc(item)}  >Approve</button>   
                  </div>
                ) )
              }
            </div>
            </div>
    
          )
        }

       {
          selectedComponent === "deposit-req" && (
        <div className="users" >
        <span className='he' >Deposit request</span>
        <div className="heading">
        {/* <p>#</p> */}
        <p className="name widt">Name</p>
        <p className="hide-in-mobile widt">Email</p>
        <p className="price widt" >Type</p>
        <p className="hide-in-mobile widt">Coin</p>
        <p className="hide-in-mobile widt">amount</p>
        <p className="country widt">Approve</p>
        <p className="country widt">Cancel</p>


        </div>

        <div className='users-cnt' >
          {
            depositReq.map((item, i) => (
              <div className='user-cnt' >
                <span className='widt' >{item.name}</span>
                <span className='widt' >{item.email}</span>
                <span className='widt' >{item.trans_status}</span>
                <span className='widt' >{item.method_details}</span>
                <span className='widt' >{item.amount}</span>
                <button  className="approve widt"  onClick={() => handleApproveDeposit(item)}  >Approve</button>  
                <button className='widt cancel' onClick={() => handleCancelDeposit(item)} >Cancel</button>  
              </div>
            ) )
          }
        </div>
        </div>
          )
        }
               {
        selectedComponent === "withdrawal-req" && (
        <div className="users" >
        <span className='he' >Withdrawal request</span>
        <div className="heading">
        {/* <p>#</p> */}
        <p className="name widt">Name</p>
        <p className="hide-in-mobile widt">Coin</p>
        <p className="hide-in-mobile widt">amount</p>
        <p className="hide-in-mobile widt">wallet</p>
        <p className="country widt">Approve</p>
        <p className="country widt">Cancel</p>


        </div>

        <div className='users-cnt' >
          {
            withdrawalReq.map((item, i) => (
              <div className='user-cnt' >
                <span className='' >{item.name}</span>
                <span className='' >{item.method_details}</span>
                <span className='' >{item.amount}</span>
                <span className='' >{item.wallet}</span>
                <button  className="approve"  onClick={() => handleWithdrawalReq(item)  }  >Approve</button> 
                <button className='cancel' onClick={() => handleWithdrawalFailed(item)} >Cancel</button> 
              </div>
            ) )
          }
        </div>
        </div>
          )
        }


       {
        selectedComponent === "stock-req" && (
        <div className="users" >
        <span className='he' >Stock request</span>
        <div className="heading">
        {/* <p>#</p> */}
        <p className="name widt">Name</p>
        <p className="hide-in-mobile widt">Email</p>
        <p className="price widt" >Type</p>
        <p className="hide-in-mobile widt">Coin</p>
        <p className="country widt">Approve</p>
        <p className="country widt">Cancel</p>


        </div>

        <div className='users-cnt' >
          {
            stockReq.map((item, i) => (
              <div className='user-cnt' >
                <span className='widt' >{item.user}</span>
                <span className='widt' >{item.email}</span>
                <span className='widt' >{item.status}</span>
                <span className='widt' >{item.name}</span>
                <button  className="approve widt"  onClick={() => handleApproveStock(item)}  >Approve</button>  
                <button onClick={() => handleCancelStock(item)} className='widt cancel' >Cancel</button> 
              </div>
            ) )
          }
        </div>
        </div>
          )
       }
        {
        selectedComponent === "trades" && (
        <div className="users" >
        <span className='he' >All trades</span>
        <div className="heading">
        {/* <p>#</p> */}
        <p className="name widt">Name</p>
        <p className="hide-in-mobile widt">Email</p>
        <p className="price widt" >amount</p>
        <p className="hide-in-mobile widt">Trading balance</p>
        <p className="country widt">Date</p>
        {/* <p className="country widt">Cancel</p> */}


        </div>

        <div className='users-cnt' >
          {
            trades.map((item, i) => (
              <div className='user-cnt' >
                <span className='widt' >{item.user}</span>
                <span className='widt' >{item.email}</span>
                <span className='widt' >{item.amount}</span>
                <span className='widt' >{item.trading_balance}</span>
                <span className='widt' >{item.date}</span>  
              </div>
            ) )
          }
        </div>
        </div>
          )
        }
{
  selectedComponent === "modal" && (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
     >
      <Modal.Dialog>
        <Modal.Header
        onClick={() => setSelectedComponent("manage-users")}        
         closeButton >
          <Modal.Title>Enter amount</Modal.Title>
        </Modal.Header>
        <div className='col' style={{gap: "7px"}} >

        <input className='inpt' name='name' value={selectedUser?.name} onChange={handleChange} />
        <input className='inpt' name='email' value={selectedUser?.email} onChange={handleChange} />
        <input className='inpt' name='phone' value={selectedUser?.phone} onChange={handleChange} />
        <input className='inpt' name='nationality' value={selectedUser?.nationality} onChange={handleChange} />
        </div>
        <Button onClick={handleUpdateClick} >Save Changes</Button>
      </Modal.Dialog>
    </div>

    
  )
}

{
  selectedComponent === "user-transctions" && (
      <div className="users" >
      <Nav defaultActiveKey="all-trans" as="ul">
      <Nav.Item as="li">
      <Nav.Link onClick={() => setSelectedInvestorsComponent("all-trans")} ><span className='' >Transactions </span></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link onClick={() => setSelectedInvestorsComponent("trade") } ><span className='' >Trades </span></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link onClick={() => setSelectedInvestorsComponent("create")} ><span className='' >Create trade </span></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link onClick={() => setSelectedComponent("manage-investors")} ><span className='he' > <ClearIcon /> Close </span></Nav.Link>
      </Nav.Item>
    </Nav>
    {
      selectedInvestorsComponent === "all-trans" && (
        <div>
          <div className="heading">
        <p className="hide-in-mobile widt">Type</p>
        <p className="price widt" >Amount</p>
        <p className="hide-in-mobile widt">Coin</p>
        <p className="country widt">Status</p>


        </div>

        <div className='users-cnt' >
          {
            alltransactions.map((item, i) => (
              <div className='user-cnt' key={i} >
                <span className='widt' >{item.type}</span>
                <span className='widt' >{item.amount}</span>
                <span className='widt' >{item.method_details}</span>
                <span className='widt' >{item.trans_status}</span>
              </div>
            ) )
          }
          </div>

        </div>
      )
    }
      {
      selectedInvestorsComponent === "trade" && (
        <div>
        <div className="heading">
        <p className="hide-in-mobile widt">Asset name</p>
        <p className="price widt" >Amount</p>
        <p className="country widt">Date</p>


        </div>

        <div className='users-cnt' >
          {
            userTrades.map((item, i) => (
              <div className='user-cnt' key={i} >
                <span className='' >{item.name}</span>
                <span className='' >{item.amount}</span>
                <span className='' >{item.date}</span>
              </div>
            ) )
          }
          </div>

        </div>
      )
    }
    {
      selectedInvestorsComponent === "create" && (
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} >
        {/* <div className="heading">
         <span className='he' >Create trade</span>
        </div> */}

       <Modal.Dialog>
        <Modal.Header
        onClick={() => setSelectedComponent("manage-users")}        
         closeButton >
          <Modal.Title>Enter amount</Modal.Title>
        </Modal.Header>
        <div className='col' style={{gap: "7px"}} >

        <input className='inpt' name='amount'  onChange={handleCreateTradeChange} />
        <input className='inpt' style={{display: "none"}} name='balance_id' value={selectedUser?.balance_id} onChange={handleChange} />
        <input className='inpt' name='stock'  onChange={handleCreateTradeChange} />
        {/* <input className='inpt' name='nationality' value={selectedUser?.nationality} onChange={handleCreateTradeChange} /> */}
        </div>
        <Button onClick={handleCreatTradeSubmit} >Save Changes</Button>
      </Modal.Dialog>
 

        </div>
      )
    }


    </div>    
  )
}
{
  selectedComponent === "wallet" && (
    <div className='col' style={{width: "70%", margin: "0 auto", gap: "20px"}} >
      <div>


      <Form style={{width: "100%", }} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Wallet type</Form.Label>
        <Form.Control type="text" placeholder="Enter Wallet type ,EG: 'BTC' 'ETH' " name='wallet_type' onChange={handleWalletChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Wallet Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" name='wallet_address' onChange={handleWalletChange} />
      </Form.Group>
    </Form>
    <Button onClick={handleWalletSubmit} >Save Changes</Button>
    <p>{message}</p>
      </div>
    
    <div className='col' style={{ gap: "8px"}} >
      <span className='he' >Available wallets</span>
      <div>

      {
        wallets.map((item, i) => (
          <p key={i} ><span>{item.wallet_type}:</span> <span> {item.wallet_address}</span></p>
          ))
        }
      </div>
    </div>
    </div>
  )
}



      </div>

      </div>
      </div>
    )
}

export default Admin





