import React from 'react';

const Steps = ({ rate = '', smartConversion = false, cost = '', weConvert = '' }) => {
  return (
    <div>
      <ul
        className="sequence sequence-top sequence-bottom tw-calculator-breakdown tw-calculator-breakdown--detailed sequence-inverse tw-calculator-breakdown--inverse">
        <li><span className="sequence-icon tw-calculator-breakdown__icon">–</span><span
          className="tw-calculator-breakdown-item__left"><strong data-testid="tw-money-wrapper-bold">{cost}</strong></span><span
          className="tw-calculator-breakdown-item__right">
          <span
            style={{ textTransform: 'none' }}>fee</span></span></li>
        <li><span className="sequence-icon tw-calculator-breakdown__icon">=</span><span
          className="tw-calculator-breakdown-item__left">{weConvert}</span><span
          className="tw-calculator-breakdown-item__right">Amount we’ll convert</span></li>
        <li><span className="sequence-icon tw-calculator-breakdown__icon">÷</span><span className="tw-calculator-breakdown-item__left"><a
          role="button" tabIndex="0"><span className="tw-calculator-breakdown-rate__value"
                                           style={{ color: smartConversion ? '#ffb717' : 'inherit' }}>{rate}</span><span
          className="tw-calculator-breakdown-rate-graph-icon"><svg viewBox="0 0 11 8" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                   id="el_oE6GCMIHr"><defs><linearGradient x1="-12.7227783%" y1="100%"
                                                                                                           x2="125.65918%" y2="100%"
                                                                                                           id="linearGradient-1"><stop
          stop-color="#00B9FE" offset="0%"></stop><stop stop-color="#2ED06F" offset="100%"></stop></linearGradient></defs><g
          id="el_jjL7heWyEy" fill-rule="evenodd"><g id="el_7RoaOX2MBf"><path
          d="M6.12919677,0 C6.00679983,0 5.96090098,0.137696558 6.03739907,0.229494263 L7.16957076,1.36166596 L8.63833404,2.83042924 L9.77050574,3.96260093 C9.84700382,4.03909902 10,3.99320017 10,3.87080323 L10,0.137696558 C10,0.06119847 9.93880153,0 9.86230344,0 L6.12919677,0 Z"
          id="el_xnVmcmD2Ct"></path><polyline id="el_wWgIoPQu5o" points="0 6 3 3 5 5 8 2"></polyline></g></g></svg></span></a></span><span
          className="tw-calculator-breakdown-item__right"><span className="np-popover"><span className="d-inline-block"><button
          type="button" className="btn-unstyled" data-toggle="popover"><span data-tracking-id="calculator-fixed-rate-tooltip"
                                                                             id="estimatedLabel">Estimated rate</span></button></span><div
          className="np-size-swapper d-inline-flex" style={{ visibility: 'visible' }}></div></span></span></li>
      </ul>
    </div>
  );
};

export default Steps;
