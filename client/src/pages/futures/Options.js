import "./futures.scss";
import dimo2 from "./img/Stock-Exchange_1.png";
import forex from "../../assets/forex.jpg";

export default function Options() {
  return (
    <>
      <div>
        <div className="containerk">
          <div className="about_us__quotex">
            <h1 className="head">Advanced Trading Account</h1>
            <h3>Advanced Trading Account / Mechanical trading systems</h3>

            <p>
              Avtroncrest has been sharing financial freedom with traders since
              2014. In a continuous effort to give traders a more comfortable
              and safe experience, its experts have been improving the platform
              ensuring traders can enjoy and make use of that freedom to trade
              whenever and wherever they like.
            </p>
          </div>
          <div className="dol">
            <img src={forex} alt="" className="about_us__image" />
          </div>
        </div>
        <div className="about_us__desires-container">
          <div>
            <img className="desire-img" src={dimo2} alt="desire" />
          </div>

          <div className="about_us__desires" dir="auto">
            <div>
              <h2 class="about_us__desires-title">Advanced Trading Account</h2>
              <p class="about_us__desires-text">
                Advanced Trading Account also referred to as mechanical trading
                systems, algorithmic trading, automated trading or system
                trading — allow traders to establish specific rules for both
                trade entries and exits that, once programmed, can be
                automatically executed via a computer. In fact, various
                platforms report 70% to 80% or more of shares traded on U.S.
                stock exchanges come from automatic trading systems. Traders and
                investors can turn precise entry, exit, and money management
                rules into automated trading systems that allow computers to
                execute and monitor the trades. One of the biggest attractions
                of strategy automation is that it can take some of the emotion
                out of trading since trades are automatically placed once
                certain criteria are met. The trade entry and exit rules can be
                based on simple conditions such as a moving average crossover or
                they can be complicated strategies that require a comprehensive
                understanding of the programming language specific to the user's
                trading platform. They can also be based on the expertise of a
                qualified programmer.
              </p>
            </div>
          </div>
        </div>

        <div class="container about_us__modern main__reviews">
          <h2
            class="about_us__modern-title"
            style={{ marginTop: "64px", fontWeight: "700" }}
          >
            Advantages of Automated Systems
          </h2>
          <div class="about_us__modern-items">
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Minimizing Emotions Automated trading systems minimize emotions
              throughout the trading process. By keeping emotions in check,
              traders typically have an easier time sticking to the plan. Since
              trade orders are executed automatically once the trade rules have
              been met, traders will not be able to hesitate or question the
              trade. In addition to helping traders who are afraid to "pull the
              trigger," automated trading can curb those who are apt to
              overtrade — buying and selling at every perceived opportunity.
            </p>
            <p
              class="about_us__modern-item"
              dir="auto"
              style={{ width: "100%" }}
            >
              Backtesting applies trading rules to historical market data to
              determine the viability of the idea. When designing a system for
              automated trading, all rules need to be absolute, with no room for
              interpretation. The computer cannot make guesses and it has to be
              told exactly what to do. Traders can take these precise sets of
              rules and test them on historical data before risking money in
              live trading. Careful backtesting allows traders to evaluate and
              fine-tune a trading idea, and to determine the system's expectancy
              – i.e., the average amount a trader can expect to win (or lose)
              per unit of risk.{" "}
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
