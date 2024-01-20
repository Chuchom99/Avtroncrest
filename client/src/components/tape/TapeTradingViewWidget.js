import React, { useEffect, useRef } from 'react';

const TapeTradingViewWidget = () => {
  const widgetContainerRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const initializeTradingViewWidget = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "description": "USD",
              "proName": "NASDAQ:TSLA"
            },
            {
              "description": "USD",
              "proName": "NASDAQ:AAPL"
            },
            {
              "description": "USD",
              "proName": "NASDAQ:AMZN"
            },
            {
              "description": "USD",
              "proName": "NASDAQ:NFLX"
            },
            {
              "description": "USD",
              "proName": "NYSE:BABA"
            }
          ],
          "showSymbolLogo": true,
          "colorTheme": "light",
          "isTransparent": true,
          "largeChartUrl": "",
          "displayMode": "adaptive",
          "locale": "en"
        }
      `;

      if (widgetContainerRef.current && isMounted.current) {
        widgetContainerRef.current.appendChild(script);
      }
    };

    initializeTradingViewWidget();

    // Clean up the script when the component unmounts
    return () => {
      isMounted.current = false;
      const script = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"]');
      if (script && isMounted.current) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" ref={widgetContainerRef}></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
};

export default TapeTradingViewWidget;
