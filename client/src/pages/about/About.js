import "./geg.scss";
import dimo2 from "./img/Stock-Exchange_1.png";
import trimo1 from "./img/opl.png";
import trimo2 from "./img/start-trading-2.png";
import lopm from "./img/lopi.svg";
import about from "../../assets/abuot.png";

export default function About() {
  return (
    <>
      <div>
        <div className="containerk">
          <div className="about_us__quotex">
            <h1 className="head">About us </h1>
            <h3>Innovation at it's peak</h3>

            <p>
              At RD Stock Trade, we believe that every should have the
              opportunity to invest in the stock market and achieve financial
              freedom. Founded by a team of passionate traders, we set out with
              the mission to democratize stock trading and make it accessible to
              individuals from all walks of life. With years of experience in
              the financial industry, our experts are dedicated to empowering
              traders with the knowledge and tools needed to navigate the
              complex world of stocks.{" "}
            </p>
          </div>
          <div className="dol">
            <img src={about} alt="" className="about_us__image" />
          </div>
        </div>
        <div className="about_us__desires-container">
          <div>
            <img className="desire-img" src={dimo2} alt="desire" />
          </div>

          <div className="about_us__desires" dir="auto">
            <div>
              <h2 class="about_us__desires-title">
                We want everyone to be able to fulfill their desires and
                opportunities.
              </h2>
              <p class="about_us__desires-text">
                Our team has created not just another project for traders. First
                of all, we developed a platform for the widest possible
                audience. For people who want to learn how to use advanced
                financial instruments and develop their financial skills.{" "}
              </p>
              <p>
                Speaking of tools. RD STOCKTRADE provides over 400 free tools to
                each client so that you can trade and earn money the way you
                like. Choose any assets: currency quotes, stocks, majors,
                metals, oil or gas, as well as the main trend of recent years -
                cryptocurrencies.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="container about_us__modern main__reviews">
          <h2
            class="about_us__modern-title"
            style={{ marginTop: "64px", fontWeight: "700" }}
          >
            What Sets Us Apart
          </h2>
          <div class="about_us__modern-items">
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Expertise: Our team comprises seasoned traders and financial
              experts who possess a deep understanding of the market. We
              leverage our expertise to deliver accurate and up-to-date
              information, enabling our users to make well-informed investment
              choices. With our comprehensive market analysis and research, you
              can stay ahead of the curve and make confident trading decisions.
            </p>
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Cutting-Edge Technology: We pride ourselves on our
              state-of-the-art trading platform. Built with the latest
              technology, our platform offers a seamless and intuitive trading
              experience. From real-time market data to advanced charting tools,
              we provide the tools you need to execute trades efficiently and
              effectively.
            </p>
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Educational Resources: We believe that education is the foundation
              of successful trading. That's why we offer a wide range of
              educational resources to cater to traders of all levels. Whether
              you are a beginner looking to learn the basics or an experienced
              trader seeking advanced strategies, our educational materials,
              tutorials, and webinars have got you covered.
            </p>
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Customer Support: Your satisfaction is our top priority. Our
              dedicated customer support team is available 24/7 to address any
              questions or concerns you may have. We are committed to providing
              prompt and personalized assistance to ensure that your trading
              experience is smooth and hassle-free.
            </p>
          </div>
        </div>

        <div class="main__start" dir="auto">
          <h2 class="main__start-title">Start trading</h2>
          <p class="main__start-subtitle">3 steps</p>
          <div class="main__start-steps">
            <div class="main__start-step">
              <img src={trimo1} className="start-img" alt="about-us" />
              <div class="main__start-step__title">Sign up</div>
              <div class="main__start-step__text">
                Open an account for free in just a few minutes{" "}
              </div>
              <a class="main__start-step__button" href="#">
                Sign up for a Live account in 1 click
              </a>
            </div>
            <div class="main__start-step">
              <img
                className="start-img"
                src={trimo2}
                alt="about-us"
                srcset="img/start-trading-2%402x.png 2x, img/start-trading-2%403x.png 3x"
              />
              <div class="main__start-step__title">Choose a stock</div>
              <div class="main__start-step__text">
                Choose from on of the stock listed{" "}
              </div>

              <div>
                <a class="main__start-step__button" href="register.html">
                  Choose a stock
                </a>
              </div>
            </div>
            <div class="main__start-step">
              <img
                src={require("./img/start-trading-3.png")}
                alt="about-us"
                srcset={require("./img/start-trading-3@2x.png")}
                className="start-img"
              />
              <div class="main__start-step__title">Deposit and trade</div>
              <div class="main__start-step__text">
                Over 410 instruments and a minimum deposit of $5 for optimal
                trading{" "}
              </div>
              <a class="main__start-step__button" href="register.html">
                Go to Deposit option
              </a>
            </div>
          </div>
        </div>

        <div class="main__innovation-container">
          <img
            style={{ width: "100%", height: "350px" }}
            src={lopm}
            alt="about-us"
          />

          <h2 class="main__innovation-title">
            Avtroncrest: Innovation Platform
            <br /> Digital Asset Trading
          </h2>

          <div class="main__innovation-button">
            <a class="main__innovation-real" href="register.html">
              <svg
                width="25"
                height="25"
                viewbox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.119244 13.2959L0.638568 13.301C0.942373 13.3039 1.23105 13.1686 1.42312 12.9332L4.52519 9.13133C5.00616 8.54184 5.94312 8.68406 6.22751 9.38972L8.56812 15.1975C8.91985 16.0703 10.1726 16.0184 10.4509 15.1195L13.7379 4.5027C13.9688 3.757 14.9269 3.55157 15.4432 4.13706L18.4078 7.49889C18.792 7.93463 19.4655 7.95233 19.8721 7.53739L23.6192 3.7134M-0.280762 21.3057C0.119238 21.3057 17.9526 21.3057 24.6192 21.3057"
                  stroke="white"
                  stroke-width="2.7"
                ></path>
              </svg>
              Open real account{" "}
            </a>

            <a class="main__innovation-demo" href="home.html">
              <svg
                width="33"
                height="33"
                viewbox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.4271 13.4714L16.7916 8.90616C16.9217 8.8617 17.0623 8.85798 17.1946 8.89548L30.2759 12.6029C30.9069 12.7818 30.9395 13.6641 30.3233 13.8889L17.2009 18.6775C17.0649 18.7271 16.9165 18.7318 16.7776 18.6908L3.45435 14.7601C2.82191 14.5735 2.80312 13.6846 3.4271 13.4714Z"
                  stroke="#0bb791"
                  stroke-width="2.70521"
                ></path>
                <path
                  d="M8.36377 16.2461V22.665C8.36377 24.355 9.73378 25.725 11.4238 25.725H22.2772C23.9672 25.725 25.3372 24.355 25.3372 22.665V16.2461"
                  stroke="##0bb791"
                  stroke-width="2.70521"
                ></path>
                <path
                  d="M30.7695 13.2266L30.7695 20.987"
                  stroke="#0bb791"
                  stroke-width="2.70521"
                ></path>
              </svg>
              Sign In{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
