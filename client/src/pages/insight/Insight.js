import React, { useState, useEffect } from "react";
import insight from "../../assets/insight.jpg";
import "./insight.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Insight = () => {
  const url =
    "https://finnhub.io/api/v1/news?category=general&token=cchg08qad3i4bkk56120";
  const [news, setNews] = useState([]);
  const [noOfNews, setNoOfNews] = useState(9);
  const slice = news.slice(0, noOfNews);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setNews(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="insight">
      <div className="insight-banner">
        <div className="first">
          <span className="news">NEWS & EXCLUSIVE</span>
          <span className="insight">+INSIGHTS</span>
          <span className="turn">
            Turn our universe of data into your trading insights!
          </span>
          <span className="avt">
            Empower your strategy by analysing thuosands of Avtroncrest
            customers’ activity in real-time.
          </span>
          <span className="banner-btns-span">
            <button className="banner-btns">Signup Today</button>
          </span>
        </div>
        <div className="sec">
          <img className="banner-img" src={insight} alt="" />
        </div>
      </div>

      <div className="about_us__modern">
        <div
          className="about_us__desires"
          dir="auto"
          style={{ maxWidth: "100%" }}
        >
          <h2 className="about_us__desires-title">Two factor authentication</h2>
          <p className="about_us__desires-text">
            Two-factor authentication (2FA) is an essential security measure for
            financial services to protect user accounts and transactions. It
            adds an extra layer of security by requiring users to provide two
            forms of identification before accessing their accounts
          </p>
          <p className="about_us__desires-text">
            Enhanced Security: 2FA adds an extra layer of security beyond just
            usernames and passwords. It requires users to provide a second form
            of identification, making it significantly harder for unauthorized
            individuals to gain access to user accounts and financial
            transactions. Even if a password is compromised, an additional
            authentication factor is required.
          </p>
          <p className="about_us__desires-text">
            Protection Against Credential Theft: With the prevalence of data
            breaches and phishing attacks, username and password combinations
            can be easily compromised. 2FA helps mitigate the risk of credential
            theft by introducing a separate authentication factor that is
            difficult for attackers to obtain or replicate.
          </p>
        </div>
      </div>
      <div className="news" >
        <span className="head" >News</span>

        <div className="flex">
          {slice.map((item, i) => (
            <Link className="news-item">
              <img className="news-img" src={item.image} alt="" />
              <div className="n-flex ">
                <span className="news-headline">{item.headline}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Insight;
