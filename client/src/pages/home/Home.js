import { Link } from "react-router-dom";
import React, { useState } from "react";
import bannerVideo from "../../assets/bnvideo.mp4";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import perfect from "../../assets/perfect_money.svg";
import advcash from "../../assets/advcash.svg";
import adstocks from "../../assets/adstocks.jpg";
import "./home.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import stockImg from "../../assets/stocks.png";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import stockTrading from "../../assets/stocktrading.png";
import futures from "../../assets/futures.jpg";
import oil from "../../assets/oil.jpg";
import secured from "../../assets/secured.png";
import forex from "../../assets/forex.jpg";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import { Button } from "bootstrap";

const Home = () => {
  const [tab, setSelectedTab] = useState("standard");

  return (
    <div className="home">
      <div className="banner">
        <div className="first">
          <span className="head">
            Investing and building for a secured future
          </span>
          <span className="cnt">
            Avtroncrest is the easiest way to access smarter investment options
            and earn real returns. We make investing simple, accessible and
            affordable.
          </span>
          <span className="banner-btns-span">
            <Link to="/register">
              <button className="banner-btns">
                Signup <ExitToAppIcon />{" "}
              </button>
            </Link>
            <button className="banner-btns demo">
              {" "}
              Demo <OndemandVideoIcon />
            </button>
          </span>
        </div>
        <div className="sec">
          <video autoPlay muted loop>
            <source src={bannerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="brands-parent">
        <div className="brands">
          <img className="brand-logos" src={visa} alt="" />
          <img className="brand-logos" src={mastercard} alt="" />
          <img className="brand-logos" src={perfect} alt="" />
          <img className="brand-logos" src={advcash} alt="" />
        </div>
      </div>
      <div className="trading-steps">
        <div className="first">
          <img className="stock-img" src={stockImg} alt="" />
        </div>
        <div className="sec">
          <div className="top">Start Trading in 3 Easy Steps!</div>
          <div className="bottom">
            <div className="steps">
              <span>
                <PersonIcon className="icon" />{" "}
              </span>
              <span className="heading">Create an account</span>
              <span>
                by selecting your country and instantly verify your identity
                using your government issued number like your Bank Verification
                Number or National Identity Number.
              </span>
            </div>
            <div className="steps">
              <span>
                <AccountBalanceWalletIcon className="icon" />{" "}
              </span>
              <span className="heading">Fund your wallet</span>
              <span>
                via multiple channels including your local currency cards and
                our partner will handle the currency conversion instantly in one
                click.
              </span>
            </div>
            <div className="steps">
              <span>
                <AccountBalanceIcon className="icon" />{" "}
              </span>
              <span className="heading">Start Investing</span>
              <span>
                in your favorite public listed US company, a bundle of companies
                called an ETF, other African companies, mutual funds, or fixed
                income products from around the world{" "}
              </span>
            </div>
          </div>
          <button className="start-investing-btn">Start investing</button>
        </div>
      </div>
      <div className="advanced-Trading-parent">
        <div className="advanced-Trading">
          <div className="first">
            <span className="heading">Advanced Trading</span>
            <span className="cnt">
              Ready to dive into the world of stocks? Join  Avtroncrest
              today and embark on an exciting journey toward financial success.
              Sign up now and gain access to a world of opportunities. With our
              user-friendly platform, expert analysis, and educational
              resources, you'll have the tools you need to take control of your
              financial future. Whether you're looking to grow your investment
              portfolio, plan for retirement, or simply learn more about the
              stock market, Avtroncrest is here to support you every step of the
              way.
            </span>
            <span className="cnt">
              Avtroncrest is regulated by the Seychelles Financial Services
              Authority (FSA) with Securities Dealer’s license number SD018
            </span>
            <button className="advanced-Trading-btn">
              Certificate of incorporation
            </button>
          </div>
          <div className="sec">
            <img className="ad-stocks" src={adstocks} alt=" " />
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product-flex">
          <div className="product-box">
            <div style={{ background: "#EEEAE2" }}>
              <img src={stockTrading} className="product-img" alt="" />
            </div>
            <div className="bottom">
              <span className="heading">Stock trading</span>
              <span className="cnt">
                Unlock the potential of the stock market with Avtroncrest.
                Whether you're a seasoned investor or a beginner, our platform
                offers a diverse selection of stocks from major exchanges
                worldwide. Stay informed with real-time data, conduct in-depth
                research, and make informed investment decisions. Build a
                well-rounded portfolio and capitalize on market opportunities.
              </span>

              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
          <div className="product-box">
            <img src={forex} className="product-img" alt="" />
            <div className="bottom">
              <span className="heading">Forex Trading</span>
              <span className="cnt">
                Experience the largest financial market in the world with forex
                trading at Avtroncrest. Trade major, minor, and exotic currency
                pairs, and take advantage of the 24/5 market hours. Leverage our
                advanced trading platform, access real-time data, and utilize
                our educational resources to enhance your forex trading skills.
                Seize global currency opportunities and potentially profit from
                exchange rate fluctuations.
              </span>

              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
          <div className="product-box">
            <img src={futures} className="product-img" alt="" />
            <div className="bottom">
              <span className="heading">Futures Trading</span>
              <span className="cnt">
                Dive into the exciting world of futures trading at Avtroncrest.
                Trade contracts on various commodities, indices, and currencies,
                and take advantage of market volatility and price movements to
                potentially generate profits. With our advanced trading tools
                and comprehensive market analysis, you'll have the resources to
                navigate the futures market with confidence.
              </span>

              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
        </div>
        <div className="product-flex">
          <div className="product-box">
            <img src={oil} className="product-img" alt="" />
            <div className="bottom">
              <span className="heading">Oil and Gas Stock Trading</span>
              <span className="cnt">
                Explore the dynamic energy sector with oil and gas stock trading
                at Avtroncrest. Trade stocks of major industry players,
                exploration companies, and service providers. Stay updated with
                market insights, industry trends, and expert analysis to make
                informed trading decisions. Take advantage of the potential
                growth and volatility in the oil and gas industry.
              </span>

              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="first">
          <span className="head1">
            Your money is safe <br /> with us
          </span>
          <span className="cnt">
            You trust us with your investments and we take that very seriously.
            We are committed to protecting your account with the highest
            standards of security available.
          </span>

          <div className="flex">
            <div className="feature">
              <span>
                <Diversity1Icon className="icon" />
              </span>
              <span className="head">User-Friendly Trading Platform</span>
              <span className="cnt">
                We understand that simplicity and ease of use are paramount when
                it comes to trading. Our intuitive trading platform is designed
                to cater to traders of all levels, offering a seamless
                experience with robust features. From placing trades to tracking
                your portfolio, everything is just a few clicks away. Our
                platform is optimized for both desktop and mobile devices,
                ensuring that you can trade anytime, anywhere.
              </span>
            </div>
            <div className="feature">
              <span>
                <SupportAgentIcon className="icon" />
              </span>
              <span className="head">24/7 customer service</span>
              <span className="cnt">
                We are committed to providing exceptional customer service. Our
                dedicated support team is available round the clock to assist
                you with any queries or concerns you may have. Whether you need
                technical assistance or trading guidance, we are here to ensure
                that you have a seamless experience on our platform. Contact us
                via live chat, email, or phone, and we'll be happy to help you
                navigate the world of stock trading.
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="feature">
              <span>
                <AccountBalanceIcon className="icon" />
              </span>
              <span className="head">Risk management</span>
              <span className="cnt">
                Stay ahead of the game with our cutting-edge market analysis
                tools. Our team of expert analysts meticulously analyze market
                trends, news, and patterns to provide you with real-time data
                and insights that empower you to make intelligent investment
                choices. Our advanced charting features and technical indicators
                allow you to visualize and analyze market movements, enabling
                you to make well-timed trades.
              </span>
            </div>
            <div className="feature">
              <span>
                <LocalLibraryIcon className="icon" />
              </span>
              <span className="head">Educational Resources</span>
              <span className="cnt">
                Knowledge is power, especially in the stock market. Avtroncrest
                offers a wealth of educational resources to empower you with the
                information you need to make sound investment decisions. Explore
                our extensive library of articles, tutorials, and videos to
                expand your understanding of the market and trading strategies.
                From the basics of stock trading to advanced concepts like
                options and futures, we cover a wide range of topics to cater to
                traders at every level.
              </span>
            </div>
          </div>
          {/* <div className="flex">
            <div className="feature">
              <span>
                <Diversity1Icon className="icon" />
              </span>
              <span className="head">User-Friendly Trading Platform</span>
              <span className="cnt">
                We understand that simplicity and ease of use are paramount when
                it comes to trading. Our intuitive trading platform is designed
                to cater to traders of all levels, offering a seamless
                experience with robust features. From placing trades to tracking
                your portfolio, everything is just a few clicks away. Our
                platform is optimized for both desktop and mobile devices,
                ensuring that you can trade anytime, anywhere.
              </span>
            </div>
            <div className="feature">
              <span>
                <Diversity1Icon className="icon" />
              </span>
              <span className="head">User-Friendly Trading Platform</span>
              <span className="cnt">
                We understand that simplicity and ease of use are paramount when
                it comes to trading. Our intuitive trading platform is designed
                to cater to traders of all levels, offering a seamless
                experience with robust features. From placing trades to tracking
                your portfolio, everything is just a few clicks away. Our
                platform is optimized for both desktop and mobile devices,
                ensuring that you can trade anytime, anywhere.
              </span>
            </div>
          </div> */}
        </div>
        <div className="sec">
          <img src={secured} className="secured-img" alt="" />
        </div>
      </div>

      {/* Copy and paste "standard and Chambers" */}

      <div className="tab">
        <div className="tab-btns">
          <button className="btn1" onClick={() => setSelectedTab("standard")}>
            Standard
          </button>
          <button className="btn2" onClick={() => setSelectedTab("chambers")}>
            Chambers
          </button>
        </div>
        <div>
          {tab === "standard" && (
            <div className="flex">
              <div className="packages">
                <span className="head">TIER I PLAN</span>

                <div className="pips">40% - 45% PIPS</div>

                <button className="get-started-btn">Get started</button>

                <div className="package-benefits">
                  <span>minimum:$50,000</span>
                  <span>maximum:UNLIMITED</span>
                  <span>10% Trade Commission</span>
                  <span>24/7 active support</span>
                </div>
              </div>
              <div className="packages">
                <span className="head">TIER II PLAN</span>

                <div className="pips">35% - 40% PIPS</div>

                <button className="get-started-btn">Get started</button>

                <div className="package-benefits">
                  <span>minimum:$20,000</span>
                  <span>maximum:$49,999</span>
                  <span>10% Trade Commission</span>
                  <span>24/7 active support</span>
                </div>
              </div>
              <div className="packages">
                <span className="head">TIER III PLAN</span>

                <div className="pips">40% - 45% PIPS</div>

                <button className="get-started-btn">Get started</button>

                <div className="package-benefits">
                  <span>minimum:$10,000</span>
                  <span>maximum:$19,999</span>
                  <span>10% Trade Commission</span>
                  <span>24/7 active support</span>
                </div>
              </div>
            </div>
          )}

          {tab === "chambers" && (
            <>
              <div className="flex">
                <div className="packages">
                  <span className="head">PRO CHEMBERS</span>

                  <div className="pips">90% - 95% PIPS</div>

                  <button className="get-started-btn">Get started</button>

                  <div className="package-benefits">
                    <span>30+ BTC</span>
                    <span>10% Trade Commission</span>
                    <span>24/7 active support</span>
                  </div>
                </div>
                <div className="packages">
                  <span className="head">STANDARD CHEMBERS</span>

                  <div className="pips">70% - 75% PIPS</div>

                  <button className="get-started-btn">Get started</button>

                  <div className="package-benefits">
                    <span>5 - 14.9 BTC</span>
                    <span>10% Trade Commission</span>
                    <span>24/7 active support</span>
                  </div>
                </div>
                <div className="packages">
                  <span className="head">PREMIUM CHEMBERS</span>

                  <div className="pips">80% - 85% PIPS</div>

                  <button className="get-started-btn">Get started</button>

                  <div className="package-benefits">
                    <span>15 - 29.9 BTC</span>
                    <span>10% Trade Commission</span>
                    <span>24/7 active support</span>
                  </div>
                </div>
              </div>
              <div className="flex" style={{ marginTop: "10px" }}>
                <div className="packages">
                  <span className="head">BASIC CHEMBERS</span>

                  <div className="pips">65% - 70% PIPS</div>

                  <button className="get-started-btn">Get started</button>

                  <div className="package-benefits">
                    <span>1 - 1.5 BTC</span>
                    <span>10% Trade Commission</span>
                    <span>24/7 active support</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="final">
        <span className="head">
          We are empowering individuals to <br /> build real wealth globally.
        </span>
        <span className="cnt">
          Armed with the most robust data feeds about the market, we alert our
          investors with power triggers that ensure you make money moves as the
          market moves.
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span className="users">500,000+</span>
          <span className="reg">Registered users</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
