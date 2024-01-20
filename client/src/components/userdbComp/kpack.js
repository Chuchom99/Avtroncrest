import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  Row,
  Card,
  CardBody,
  CardTitle,
  FormControl,
  Form,
  FormGroup,
  InputGroup,
  CardHeader,
} from "react-bootstrap";
import "./pol.css";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";

export default function Kpack() {
  const timy = new Date();
  const limo = timy.toDateString();

  return (
    <>
      <Container fluid>
        <div style={{ color: "#000" }} className="page-title-box">
          <h4>Trading Packages</h4>
          <div>
            <Button size="sm">
              &nbsp;{limo}
              <CalendarMonthIcon />
            </Button>
          </div>
        </div>

        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Card
              className="pack-col"
              style={{
                padding: "2px",
                width: "100%",
                backgroundColor: "#0b533e",
                borderRadius: "13px",
                height: "100%",
                
              }}
            >
              <Card.Header as="h3" size="bg" style={{ color: "whitesmoke" }}>
                Starter
              </Card.Header>
              <hr style={{ color: "white", marginBottom: 0 }} />
              <Card.Body
                style={{
                  backgroundColor: "#000",
                //   margin: "-.1rem",
                }}
              >
                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    ROI:
                  </span>
                  <span className="text-success">22%-34% returns</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Minimum:
                  </span>
                  <span className="text-success">$1000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Maximum:
                  </span>
                  <span className="text-success">$25,000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    5% trade commission
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    24/7 active support
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Button
                  variant="success"
                  size="lg"
                  style={{
                    width: "85%",
                    marginBottom: "1.5rem",
                    border: "2px dashed white",
                    marginLeft: "2rem",
                  }}
                >
                  Deposit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <Card
              className="pack-col"
              style={{
                padding: "2px",
                width: "100%",
                backgroundColor: "#0b533e",
                border: "none",
                borderRadius: "13px",
                height: "100%",
                

              }}
            >
              <Card.Header as="h3" size="bg" style={{ color: "whitesmoke" }}>
                Tier I
              </Card.Header>
              <hr style={{ color: "white", marginBottom: 0 }} />
              <Card.Body
                style={{
                  backgroundColor: "#000",
                  margin: "-.1rem",
                }}
              >
                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    ROI:
                  </span>
                  <span className="text-success">43%-48% returns</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Minimum:
                  </span>
                  <span className="text-success">$50,000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Maximum:
                  </span>
                  <span className="text-success">$100,000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    5% trade commission
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    24/7 active support
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Button
                  variant="success"
                  size="lg"
                  style={{
                    width: "85%",
                    marginBottom: "1.5rem",
                    border: "2px dashed white",
                    marginLeft: "2rem",
                  }}
                >
                  Deposit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{marginTop: "10px"}} >
          <Col xs={12} sm={6} md={6} lg={6}>
            <Card
              style={{
                padding: "2px",
                width: "100%",
                backgroundColor: "#0b533e",
                borderRadius: "13px",
                height: "100%",
               
              }}
              className="pack-col"
            >
              <Card.Header as="h3" size="bg" style={{ color: "whitesmoke" }}>
                tier II
              </Card.Header>
              <hr style={{ color: "white", marginBottom: 0 }} />
              <Card.Body
                style={{
                  backgroundColor: "#000",
                  margin: "-.1rem",
                }}
              >
                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    ROI:
                  </span>
                  <span className="text-success">81%-87% returns</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Minimum:
                  </span>
                  <span className="text-success">150,000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Maximum:
                  </span>
                  <span className="text-success">$350,000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    5% trade commission
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    24/7 active support
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Button
                  variant="success"
                  size="lg"
                  style={{
                    width: "85%",
                    marginBottom: "1.5rem",
                    border: "2px dashed white",
                    marginLeft: "2rem",
                  }}
                >
                  Deposit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <Card
              className="pack-col"
              style={{
                padding: "2px",
                width: "100%",
                backgroundColor: "#0b533e",
                borderRadius: "13px",
                height: "100%",
                
              }}
            >
              <Card.Header as="h3" size="bg" style={{ color: "whitesmoke" }}>
                Tier III
              </Card.Header>
              <hr style={{ color: "white", marginBottom: 0 }} />
              <Card.Body
                style={{
                  backgroundColor: "#000",
                  margin: "-.1rem",
                }}
              >
                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    ROI:
                  </span>
                  <span className="text-success">186%-210% returns</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Minimum:
                  </span>
                  <span className="text-success">$500,000</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    Maximum:
                  </span>
                  <span className="text-success">Unlimited</span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    5% trade commission
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    className="text-light"
                    style={{
                      marginRight: "7rem",
                      textDecoration: "underline",
                    }}
                  >
                    24/7 active support
                  </span>
                </Card.Title>
                <hr className="text-light" />

                <Button
                  variant="success"
                  size="lg"
                  style={{
                    width: "85%",
                    marginBottom: "1.5rem",
                    border: "2px dashed white",
                    marginLeft: "2rem",
                  }}
                >
                  Deposit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
