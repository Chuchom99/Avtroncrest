import React, { useEffect, useRef } from 'react';

const HotlistsTradingViewWidget = () => {
  const widgetContainerRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const initializeTradingViewWidget = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
      script.async = true;
      script.innerHTML = `
        {
          "colorTheme": "dark",
          "dateRange": "12M",
          "exchange": "US",
          "showChart": true,
          "locale": "en",
          "width": "100%",
          "height": "600",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": false,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "rgba(106, 109, 120, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
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
      const script = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"]');
      if (script && isMounted.current) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" ref={widgetContainerRef}></div>
      <div className="tradingview-widget-copyright">
        {/* You can add any copyright information here if needed */}
      </div>
    </div>
  );
};

export default HotlistsTradingViewWidget;
