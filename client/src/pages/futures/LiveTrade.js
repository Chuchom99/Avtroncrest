import "./futures.scss";
import dimo2 from "./img/Stock-Exchange_1.png";
import forex from "../../assets/anim.png";

export default function LiveTrade() {
  return (
    <>
      <div>
        <div
          className="containerk"
          style={{ background: "#fff", color: "#000" }}
        >
          <div className="about_us__quotex">
            <h1 className="head" style={{ color: "#0bb791" }}>
              Live Trading Interface
            </h1>

            <p style={{ color: "#000" }}>
              Avtroncrest trading platform is a software system offered to
              investors and traders by certain financial institutions, such as
              brokerages and banks. Essentially, trading platforms enable
              investors and traders to place trades and monitor their accounts.
            </p>
          </div>
          <div className="dol" style={{ background: "#fff", color: "#000" }}>
            <img src={forex} alt="" className="about_us__image" />
          </div>
        </div>
        <div className="about_us__desires-container">
          <div>
            <img className="desire-img" src={dimo2} alt="desire" />
          </div>

          <div className="about_us__desires" dir="auto">
            <div>
              <h2 class="about_us__desires-title">Live Trading Interface</h2>
              <p class="about_us__desires-text">
                Essentially, a trading platform is a software system typically
                offered through a brokerage or other financial institution that
                lets you trade online, on your own. A trading platform gives
                investors an online interface through which they can access
                various markets, place trades, monitor positions, and manage
                their accounts. Trading platforms can offer a number of other
                features, as well. Broadly speaking, these include real-time
                quotes, live business and financial news feeds, instant access
                to a wealth of streaming and historical financial data,
                technical analysis tools, investment research, and educational
                resources. There are two types of trading platforms: commercial
                platforms and proprietary platforms. Commercial platforms are
                designed for day traders and retail investors. They are
                characterized by ease of use and an assortment of helpful
                features, such as real-time quotes, international news feeds,
                live, interactive charts, educational content, and research
                tools.
              </p>
            </div>
          </div>
        </div>

        <div class="container about_us__modern main__reviews">
          <h2
            class="about_us__modern-title"
            style={{ marginTop: "64px", fontWeight: "700" }}
          >
            Why our live trading interface is important
          </h2>
          <div class="about_us__modern-items">
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Evaluate opportunities: The product market monitoring and a solid
              strategy is the ability of a day trader to evaluate opportunities
              that align with their criteria. Typically this involves
              identifying technical factors like support and resistance levels,
              chart patterns and trend reversals that suggest future price
              movements.
            </p>
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Trading execution: Once an opportunity arises, traders need to
              decisively enter trades to capitalize on short-term price
              movements. They use different order types—like market orders and
              limit orders—to get the right prices.{" "}
            </p>
          </div>
        </div>

        <div class="main__innovation-container">
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
