import React from "react";
import "./software.scss";
import Ttrader from "../../assets/ttrade.svg";
import Tradier from "../../assets/tradier-logo.svg";
import Interactive from "../../assets/ib-logo-text-black.svg";
import Magnifi from "../../assets/magnifys.svg";
import Olive from "../../assets/olive.svg";
import EOption from "../../assets/eoption-logo.png";

const Software = () => {
  return (
    <div className="software">
      <div className="top">
        <span className="small">Softwares</span>
        <span className="big">
          Avtroncrest software giude for new investors
        </span>
      </div>
      <div className="softwares">
        <div className="s-div">
          <div className="first">
            <span className="head">Tastytrade</span>
            <span className="cnt">
              Tastytrade gives you every edge possible with the technology,
              rates, and support that help you succeed more easily on your own.
              We’re as serious about your money as you are, and we work for you
              who are brave enough to take your finances into your own hands.
            </span>
          </div>
          <div className="sec">
            <img className="s-img" src={Ttrader} alt="" />
          </div>
        </div>
        <div className="s-div">
          <div className="first">
            <span className="head">Interactive Brokers</span>
            <span className="cnt">
              Interactive Brokers is for sophisticated investors and active
              traders. It accesses IB SmartRoutingSM. IB SmartRoutingSM helps
              support best execution by searching for the best available prices
              for stocks, options and combinations across exchanges and dark
              pools.
            </span>
          </div>
          <div className="sec">
            <img className="s-img" src={Interactive} alt="" />
          </div>
        </div>
        <div className="s-div">
          <div className="first">
            <span className="head">Magnifi</span>
            <span className="cnt">
              Magnifi simplifies investing and democratizes investing
              intelligence
            </span>
          </div>
          <div className="sec">
            <img className="s-img" src={Magnifi} alt="" />
          </div>
        </div>
        <div className="s-div">
          <div className="first">
            <span className="head">Olive Invest</span>
            <span className="cnt">
              Olive Invest Improve performance by reducing volatility with
              option strategies that the pros have historically kept to
              themselves.
            </span>
          </div>
          <div className="sec">
            <img className="s-img" src={Olive} alt="" />
          </div>
        </div>
        <div className="s-div">
          <div className="first">
            <span className="head">Tradier</span>
            <span className="cnt">
              Tradier provides all the tools to help make investing easy. Our
              open collaboration platform allows investors to truly customize
              their trading experience.
            </span>
          </div>
          <div className="sec">
            <img className="s-img" src={Tradier} alt="" />
          </div>
        </div>
        <div className="s-div">
          <div className="first">
            <span className="head">EOption</span>
            <span className="cnt">
              EOption was created with a clear purpose in mind: low-cost trades
              combined with fast, efficient execution. Today, our ultra low
              commission rates combined with our new, eOption Trader platform
              have elevated our original mission to an entirely new level
            </span>
          </div>
          <div className="sec">
            <img className="s-img" src={EOption} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
