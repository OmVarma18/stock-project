// TradingViewWidget.jsx
'use client'
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import React, {useRef, memo } from 'react';

interface TradingViewWidgetProps{
    title?:string,
    scriptUrl:string,
  config: Record<string, unknown>,
    height?:number,
    className?:string
}

function TradingViewWidget({title,scriptUrl,config,height=600,className}:TradingViewWidgetProps) {
  const container = useTradingViewWidget(scriptUrl,config,height);



  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
    </div>
  );
}

export default memo(TradingViewWidget);
