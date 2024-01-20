import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.png";
import SecurityIcon from "@mui/icons-material/Security";
import gif from "../../assets/trade-icc.gif";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoginIcon from "@mui/icons-material/Login";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import TradingViewWidget from "../../components/tradingViewWidget/TradingViewWidget";
import TapeTradingViewWidget from "../../components/tape/TapeTradingViewWidget";
import "./userdb.scss";
import { makeRequest } from "../../axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../authcontext/authContext";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Heatmap from "../../components/heatmap/Heatmap";
import Kdepo from "../../components/userdbComp/kdeposit";
import Kwith from "../../components/userdbComp/Kwith";
import Kpack from "../../components/userdbComp/kpack";
import HistoryIcon from "@mui/icons-material/History";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import success from "../../assets/success.png";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import gold from "../../assets/goldR.png";
import silvar from "../../assets/silvaR.png";
import bronze from "../../assets/bronzeR.png";
import video from "../../assets/live-trade.mp4";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("main");
  const [open, setOpen] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const [allstocks, setAllstocks] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [alltransactions, setAllTransactions] = useState([]);
  const [noOftrans, setNoOftrans] = useState(5);
  const slice = alltransactions.slice(0, noOftrans);
  const [amountError, setAmountError] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [assetHist, setAssetHist] = useState([]);
  const [file, setFile] = useState(null);
  const [kycSuccess, setKycSuccess] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  console.log(userInfo);
  const ranks = [
    { id: 7, img: bronze },
    { id: 8, img: bronze },
    { id: 9, img: bronze },
    { id: 4, img: silvar },
    { id: 5, img: silvar },
    { id: 6, img: silvar },
    { id: 1, img: gold, rank: "Gold " },
    { id: 2, img: gold, rank: "" },
    { id: 3, img: gold, rank: "" },
  ];

  const handleBuyStock = (item) => {
    setSelectedStock(item);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await makeRequest.post("user-info/stock/buy", selectedStock);
    } catch (err) {
      setErr(err.response.data);
      console.log(err);
    }
  };

  const handleKyc = async (e) => {
    e.preventDefault();
    try {
      await makeRequest.post("user-info/kyc");
      setKycSuccess("Upload succesful");
    } catch (err) {
      setErr(err.response.data);
      console.log(err);
    }
  };

  const handlelogout = async () => {
    try {
      await makeRequest.post("auth/logout");
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedStock((prev) => ({ ...prev, [name]: value }));

    // Validate the amount
    if (name === "amount") {
      if (parseFloat(value) < 15000) {
        setAmountError("This transaction requires more than 15000 USD");
      } else if (parseFloat(value) > userInfo.info?.main_balance) {
        setAmountError("Balance not enough");
      } else {
        setAmountError("");
      }
    }
  };

  useEffect(() => {
    makeRequest.get("user-info/user").then((res) => {
      setUserInfo(res.data);
    });
  }, []);

  useEffect(() => {
    makeRequest.get("user-info/allstocks").then((res) => {
      setAllstocks(res.data);
    });
  }, []);

  useEffect(() => {
    makeRequest.get("user-info/stocks").then((res) => {
      setAssetHist(res.data);
    });
  }, []);

  useEffect(() => {
    makeRequest.get("user-info/alltransactions").then((res) => {
      setAllTransactions(res.data);
    });
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="navba roww ">
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
            <button>English</button>
            <span>{currentUser.name}</span>
            <AccountCircleIcon />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <div
                className="sidebar col"
                style={{
                  width: "250px",
                  justifyContent: "space-between",
                }}
              >
                <div className="col" style={{ gap: "20px" }}>
                  <img className="logo" src={logo} alt="" />
                  <div className="d-board">
                    <button
                      className="d-board-btn"
                      onClick={() => setSelectedComponent("main")}
                    >
                      <HomeIcon /> Dashboard
                    </button>
                  </div>
                  <div>
                    <div className="sidebar-others col ">
                      <div className="col users">
                        <div className="roww" style={{ gap: "7px" }}>
                          <Button
                            variant="success"
                            onClick={() => setSelectedComponent("deposit")}
                          >
                            Deposit
                          </Button>{" "}
                          <Button
                            style={{
                              color: "#000",
                              background: "transparent",
                              border: "1px solid #0bb791",
                            }}
                            onClick={() => setSelectedComponent("withdraw")}
                          >
                            Withdraw
                          </Button>{" "}
                        </div>
                      </div>

                      <div className="col req">
                        <button
                          className="sb-btn"
                          onClick={() =>
                            setSelectedComponent("all-transactions")
                          }
                        >
                          <span className="small">
                            {" "}
                            <FormatListBulletedIcon /> All transactions
                          </span>
                        </button>
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("buy-stock")}
                        >
                          <span className="small">
                            {" "}
                            <FormatListBulletedIcon /> Buy stock
                          </span>
                        </button>
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("packages")}
                        >
                          <span className="small">
                            {" "}
                            <FormatListBulletedIcon /> Trading Packages
                          </span>
                        </button>
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("asset-history")}
                        >
                          <span className="small">
                            {" "}
                            <HistoryIcon /> Asset history
                          </span>
                        </button>
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("rank")}
                          disabled
                        >
                          <span className="small">
                            {" "}
                            <MilitaryTechIcon /> Rank
                          </span>
                        </button>
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("livetrade")}
                          disabled
                        >
                          <span className="small">
                            {" "}
                            <MilitaryTechIcon /> Learn trading
                          </span>
                        </button>

                        <span className="small">
                          <AccountBalanceWalletIcon /> Add Wallet Address
                        </span>
                      </div>
                      <div className="col req">
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("")}
                        >
                          <span className="small">
                            {" "}
                            <HistoryIcon /> 2FA
                          </span>
                        </button>
                        <button
                          className="sb-btn"
                          onClick={() => setSelectedComponent("kyc")}
                        >
                          <span className="small">
                            {" "}
                            <HistoryIcon /> KYC verificatio
                          </span>
                        </button>
                      </div>
                      {/* <div className="l-out" >
                  <span className="small" > <LogoutIcon /> Log out</span>

                  </div> */}
                    </div>
                  </div>
                </div>

                <div className="l-out">
                  <button
                    className="sb-btn"
                    onClick={handlelogout}
                    style={{ background: "transparent", border: "none" }}
                  >
                    <span className="small">
                      {" "}
                      <LogoutIcon /> Log out
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Collapse>

          {selectedComponent === "main" && (
            <div className="main col">
              <div
                className="roww"
                style={{ gap: "7px", alignItems: "center" }}
              >
                <AccountCircleIcon style={{ color: "#35b94c" }} />
                <span style={{ color: "#000" }}>ID: {currentUser.id}</span>
                <Button
                  style={{
                    padding: "2px",
                    backgroundColor: currentUser.kyc_status ? "green" : "red",
                    color: "white", 
                    border: "none"
                  }}
                >
                  {!currentUser.kyc_status
                    ? "Not verified"
                    : currentUser.kyc_status}
                </Button>
              </div>
              <TapeTradingViewWidget />
              <div className="roww kyc">
                <SecurityIcon />
                <div className="col ">
                  <span className="bold">
                    {!currentUser.kyc_status
                      ? "KYC verification required"
                      : "KYC verified"}
                  </span>
                  <span className="small">
                    {!currentUser.kyc_status
                      ? "Please submit the required KYC information to verify yourself. Click here to submit KYC information."
                      : ""}
                  </span>
                </div>
              </div>

              <div className="b-div">
                <div className="acc-div roww ">
                  <div className="acc-f col">
                    <span className="bold" style={{ color: "#fff" }}>
                      Account Balance
                    </span>
                    <div className="bal-div">
                      <span>
                        <FiberManualRecordIcon />{" "}
                        <span className="bold">
                          $ {userInfo.info?.main_balance}{" "}
                        </span>{" "}
                      </span>
                    </div>
                    <hr />
                    <span className="small" style={{color: "#fff"}}> {currentUser.email} </span>
                    <button className="v-btn">View Transactions</button>
                  </div>
                  <div className="acc-sec col">
                    <img className="gif" src={gif} alt="" />
                  </div>
                </div>

                <div className="ot-bal col">
                  <div className="col ot-bal-div">
                    <span className="bold">Trading intrest</span>
                    <div className="bal-div">
                      <span>
                        <FiberManualRecordIcon /> ${" "}
                        {userInfo.info?.trading_balance}{" "}
                      </span>
                    </div>
                    <button className="v-btn" style={{ width: "40%" }}>
                      View Trades
                    </button>
                  </div>

                  <div className="col ot-bal-div">
                    <span className="bold">Asset intrest</span>
                    <div className="bal-div">
                      <span>
                        <FiberManualRecordIcon /> ${" "}
                        {userInfo.info?.asset_balance}{" "}
                      </span>
                    </div>
                    <button className="v-btn" style={{ width: "40%" }}>
                      View Trades
                    </button>
                  </div>
                </div>
              </div>

              <div className="tr-head">
                <span className="tr-span" style={{fontWeight: "bold", marginLeft: "5px"}} >Stock Trading</span>
              </div>
              <div style={{ height: "500px" }}>
                <TradingViewWidget />
              </div>

              <div className=" roww rf-auth ">
                <div className="col ref">
                  <span className="h2s">Refer and earn </span>
                  <span className="bold">
                    Invite any active trader and earn instant 5% referral bonus
                  </span>
                  <span className="small">Referal link:</span>
                  <span className="small">
                    https://rdstocktrade.com/register?ref=970071{" "}
                    <ContentCopyTwoToneIcon />{" "}
                  </span>
                </div>

                <div className="col auth">
                  <div className="roww at-row">
                    <span className="bold">
                      {" "}
                      <CalendarMonthIcon style={{ color: "blue" }} /> Joined at{" "}
                    </span>
                    <span className="small">{currentUser.created_at}</span>
                  </div>
                  <div className="roww at-row">
                    <span className="bold">
                      {" "}
                      <LoginIcon style={{ color: "green" }} /> Last login{" "}
                    </span>
                    <span className="small">n/a</span>
                  </div>
                  <div className="roww  at-row">
                    <span className="bold">
                      {" "}
                      <PrivacyTipIcon style={{ color: "red" }} /> 2 Factor Auth{" "}
                    </span>
                    <span style={{ cursor: "pointer" }} className="small">
                      Off
                    </span>
                  </div>
                </div>
              </div>

              <>
                <meta name="viewport" content="width=1024" />
                <div id="" className="transactins">
                  <div className="tr-head">
                    <span className="tr-span">Transctions</span>
                  </div>
                  {slice.map((item, i) => (
                    <div className="roww tr-map">
                      <span className="tr-s-c">{item?.type}</span>
                      <span
                        className="tr-s-c"
                        style={{
                          color: item?.type === "DEPOSIT" ? "green" : "red",
                        }}
                      >
                        {item?.trans_status === "APPROVED" ? "++" : ""}{" "}
                        {item?.amount}{" "}
                      </span>
                      <span className="tr-s-c">{item?.method_details}</span>
                      <span className="tr-s-c">{item?.trans_status}</span>
                    </div>
                  ))}
                </div>
              </>

              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#fff",
                }}
              >
                <span className="h2s">Stock markets heatmap</span>
                <div style={{ height: "400px" }}>
                  <Heatmap />
                </div>
              </div>
            </div>
          )}

          {selectedComponent === "deposit" && (
            <div style={{ width: "100%" }}>
              <Kdepo />
              {/* <Kmdepo /> */}
            </div>
          )}
          {selectedComponent === "withdraw" && (
            <div>
              <Kwith />
            </div>
          )}
          {selectedComponent === "all-transactions" && (
            <>
              <div id="" className="all-transactions">
                <div className="tr-head">
                  <span className="tr-span">Transctions</span>
                </div>

                <div>
                  {alltransactions.map((item, i) => (
                    <div className="roww tr-map">
                      <span className="tr-s-c">{item?.type}</span>
                      <span
                        className="tr-s-c"
                        style={{
                          color: item?.type === "DEPOSIT" ? "green" : "red",
                        }}
                      >
                        {item?.trans_status === "APPROVED" ? "++" : ""}{" "}
                        {item?.amount}{" "}
                      </span>
                      <span className="tr-s-c">{item?.method_details}</span>
                      <span className="tr-s-c">{item?.trans_status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {selectedComponent === "packages" && <Kpack />}
          {selectedComponent === "buy-stock" && (
            <div className="buy-stock">
              {allstocks.map((item, i) => (
                <div className="card">
                  <div className="logo-div">
                    <span className="head">{item.name}</span>
                    <img src={item.logo} alt="" />
                    <span className="symb">{item.symbol}</span>
                  </div>
                  <div className="bottom-div">
                    <div className="roi">
                      <span>ROI</span>
                      <span>+10% - 20%</span>
                    </div>
                    <button
                      onClick={() => {
                        handleBuyStock(item);
                        setSelectedComponent("purchase-form");
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedComponent === "asset-history" && (
            <div className="buy-stock">
              {assetHist.map((item, i) => (
                <div className="card">
                  <div className="logo-div">
                    <span className="head">{item.name}</span>
                    <img src={item.logo} alt="" />
                    <span
                      className="symb"
                      style={{ color: item.active === 1 ? "green" : "red" }}
                    >
                      {item.active === 1 ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <div className="bottom-div">
                    <div className="roi">
                      <span>{item.status}</span>
                      <span>$ {item.amount}</span>
                    </div>
                    <span style={{ marginLeft: "10px" }}>
                      {item.created_at}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedComponent === "purchase-form" && (
            <div
              className="col"
              style={{
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
                width: "100%",
                height: "255px",
              }}
            >
              <form className="col" style={{ width: "80%", padding: "15px" }}>
                <input
                  className="inpt-purchase"
                  name="name"
                  value={selectedStock?.name}
                />
                <input
                  style={{ display: "none" }}
                  value={selectedStock?.logo}
                  onChange={handleChange}
                />
                <input
                  className="inpt-purchase"
                  name="amount"
                  placeholder="Amount"
                  onChange={handleChange}
                />
                <select
                  className="inpt-purchase"
                  value={selectedStock?.compounding}
                  onChange={handleChange}
                >
                  <option value={selectedStock?.Biweekly_compounding}>
                    Bi-weekly compounding
                  </option>
                  <option value={selectedStock?.Monthly_compounding}>
                    Monthly compounding
                  </option>
                  <option value={selectedStock?.months_compounding}>
                    3 months compounding
                  </option>
                  <option value={selectedStock?.sixMonths_compounding}>
                    6 months compounding
                  </option>
                  <option value={selectedStock?.months_compounding}>
                    9 compounding
                  </option>
                  <option value={selectedStock?.months_compounding}>
                    12 compounding
                  </option>
                </select>
              </form>
              {amountError && <p style={{ color: "red" }}>{amountError}</p>}
              <button className="btn-sub" onClick={handlesubmit}>
                Submit
              </button>
            </div>
          )}
          {selectedComponent === "success" && (
            <div className="scs-div">
              <div className="scs-cnc">
                <CancelIcon onClick={setSelectedComponent("main")} />
              </div>
              <img className="scs-img" src={success} alt="" />
              <span className="scs-span">Successful!</span>
            </div>
          )}
          {selectedComponent === "kyc" && (
            <div
              className="col"
              style={{
                justifyContent: "center",
                padding: "20px 40px",
                alignItems: "center",
                width: "100%",
                gap: "15px",
              }}
            >
              <div className="col" style={{ gap: "14px", padding: "5px 10%" }}>
                <span className="h2s">KYC Verification</span>
                <span style={{ color: "#f2f4f9" }}>
                  KYC (Know Your Customer) guidelines are a set of procedures
                  that businesses and financial institutions implement to verify
                  the identity of their customers. These guidelines are crucial
                  for preventing fraud, money laundering, and other illegal
                  activities. We accept the following documents for KYC
                  verification
                </span>
                <ul style={{ color: "#f2f4f9" }}>
                  <li>Driver's License</li>
                  <li>National ID</li>
                  <li>Voter's card</li>
                  <li>Other governmet recognized ID's</li>
                </ul>
              </div>
              <Form style={{ color: "#f2f4f9" }}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="file" placeholder="Enter email" />
                </Form.Group>
              </Form>
              <button className="btn-sub" onClick={handleKyc}>
                Submit
              </button>
            </div>
          )}
          {selectedComponent === "rank" && (
            <div className="buy-stock">
              {ranks.map((item, i) => (
                <div className="card">
                  <div className="logo-div">
                    <span className="head">{item.rank}</span>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="bottom-div">
                    <button
                      disabled={currentUser.rank === 0}
                      onClick={() => {
                        handleBuyStock(item);
                        setSelectedComponent("purchase-form");
                      }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedComponent === "livetrade" && (
            <div>
              <video></video>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
