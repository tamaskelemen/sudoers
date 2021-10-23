import React from 'react';

const Navigation = ({children}: {children: any}) => {
  return (
    <div className="balances-content">
      <div className="page-layout column-layout">
        <div className="mobileNav">
          <ul className="mobileNav__items">
            <li className="mobileNavItem"><a className="mobileNavItem__link"
                                             href="/user/account/"><span
              className="mobileNavItem__icon"><span className="tw-icon tw-icon-home "
                                                    aria-hidden="true" role="presentation"><svg
              width="24" height="24" fill="currentColor" focusable="false"><path
              d="M23 11L12 2 .895 11l1.224 1.551L12 4.518l9.775 8.033L23 11zM6 14v6h12v-6h2v8H4v-8h2z"></path></svg></span></span><span
              className="mobileNavItem__label">Home</span></a></li>
            <li className="mobileNavItem"><a className="mobileNavItem__link"
                                             href="/card-management"><span
              className="mobileNavItem__icon"><span className="tw-icon tw-icon-card-transferwise "
                                                    aria-hidden="true" role="presentation"><svg
              width="24" height="24" fill="currentColor" focusable="false"><path
              d="M16 16H4v-2h12v2zM5.5 9a1.5 1.5 0 100 3h1a1.5 1.5 0 000-3h-1z"></path><path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M2 4a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 2h20v3.657a3.251 3.251 0 000 6.186V18H2V6z"></path></svg></span></span><span
              className="mobileNavItem__label">Card</span></a></li>
            <li className="mobileNavItem mobileNavItem--call-to-action"><a
              className="mobileNavItem__link" href="/send"><span
              className="mobileNavItem__icon"><span className="tw-icon tw-icon-send "
                                                    aria-hidden="true" role="presentation"><svg
              width="24" height="24" fill="currentColor" focusable="false"><path
              d="M12.555 13.612l3.494-7.736 1.261 3.466 1.88-.684-2.395-6.578-1.43.52-.026-.012-.012.027-5.11 1.86.685 1.879 3.275-1.192-3.445 7.626a5.87 5.87 0 011.823.824z"></path><path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M12.75 18.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-2 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg></span></span><span
              className="mobileNavItem__label">Send</span></a></li>
            <li className="mobileNavItem"><a className="mobileNavItem__link"
                                             href="/recipients/"><span
              className="mobileNavItem__icon"><span className="tw-icon tw-icon-recipients "
                                                    aria-hidden="true" role="presentation"><svg
              width="24" height="24" fill="currentColor" focusable="false"><path
              d="M15.5 2a4.493 4.493 0 00-3.561 1.749 6.733 6.733 0 011.545 1.273A2.5 2.5 0 1115.18 8.98a6.839 6.839 0 01-.144 1.996A4.5 4.5 0 1015.5 2zM15.5 15c-.201 0-.397.004-.588.01a13.836 13.836 0 00-1.82-.631c.418-.394.786-.84 1.092-1.33A17.48 17.48 0 0115.5 13c3.403 0 5.627.934 6.912 1.748 1.18.748 1.588 2.06 1.588 3.2V19h-2v-1.052c0-.732-.258-1.257-.658-1.51C20.369 15.82 18.515 15 15.5 15z"></path><path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M4 9.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM8.5 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"></path><path
              d="M17 20.948V22h-2v-1.052c0-.732-.258-1.257-.658-1.51C13.369 18.82 11.515 18 8.5 18c-3.015 0-4.87.821-5.842 1.437-.4.254-.658.78-.658 1.511V22H0v-1.052c0-1.14.407-2.452 1.588-3.2C2.873 16.934 5.098 16 8.5 16c3.403 0 5.627.934 6.912 1.748 1.18.748 1.588 2.06 1.588 3.2z"></path></svg></span></span><span
              className="mobileNavItem__label">Recipients</span></a></li>
            <li className="mobileNavItem"><a className="mobileNavItem__link" href="/account/"><span
              className="mobileNavItem__icon"><span className="tw-icon tw-icon-profile "
                                                    aria-hidden="true" role="presentation"><svg
              width="24" height="24" fill="currentColor" focusable="false"><path fill-rule="evenodd"
                                                                                 clip-rule="evenodd"
                                                                                 d="M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z"></path><path
              d="M22 22v-2.552c0-1.144-.407-2.432-1.542-3.204C19.002 15.254 16.3 14 12 14c-4.3 0-7.002 1.254-8.458 2.244C2.407 17.016 2 18.304 2 19.448V22h2v-2.552c0-.727.255-1.27.667-1.55C5.803 17.124 8.115 16 12 16c3.885 0 6.197 1.125 7.333 1.897.412.28.667.824.667 1.551V22h2z"></path></svg></span></span><span
              className="mobileNavItem__label">Account</span></a></li>
          </ul>
        </div>
        <div className="sidebar-toggle-button toggle-button--sticky">
          <div className="sidebar-toggle sidebar-toggle-container">
            <button type="button"
                    className="navbar-toggle visible-xs-block visible-sm-block visible-md-block"
                    aria-expanded="false"><span className="sr-only">Toggle navigation</span><span
              className="pull-xs-left m-r-1"><span className="icon-bar"></span><span
              className="icon-bar"></span><span className="icon-bar"></span></span></button>
          </div>
        </div>
        <div className="sidebar-container column-layout-left bg-primary">
          <div className="nav-sidebar">
            <div className="nav-sidebar__top">
              <div className="nav-sidebar-brand"><a href="/user/account/"><img
                src="https://wise.com/public-resources/assets/logos/wise/brand_logo_business_inverse.svg"
                alt="Wise Business"/></a></div>
              <div className="send-button"><a href="/send"
                                              className="btn btn-sm btn-block btn-success">Send
                money</a></div>
            </div>
            <div className="nav-sidebar__body">
              <div className="menu-section">
                <div className="menu-item "><a href="/user/account/"><span
                  className="tw-icon tw-icon-home " aria-hidden="true" role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  d="M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z"></path></svg></span>Home</a>
                </div>
                <div className="menu-item "><a href="/card-management"><span
                  className="tw-icon tw-icon-card-transferwise " aria-hidden="true"
                  role="presentation"><svg width="16" height="16" fill="currentColor"
                                           focusable="false"><path
                  d="M3 7a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zM3 10.8h7V9.2H3v1.6z"></path><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V3zm1.6 9.4V3.6h12.8v2.472A2.495 2.495 0 0012.5 8.5a2.495 2.495 0 001.9 2.428V12.4H1.6z"></path></svg></span>Cards</a>
                </div>
                <div className="menu-item "><a href="/recipients/"><span
                  className="tw-icon tw-icon-recipients " aria-hidden="true" role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  d="M9.5.2A3.3 3.3 0 006.56 2a4.483 4.483 0 011.687.352 1.7 1.7 0 112.402 2.402c.219.52.343 1.089.35 1.686A3.3 3.3 0 009.5.2zM13.077 10.719c-.9-.46-2.13-.906-3.518-.919a4.511 4.511 0 001.076-1.523c1.263.171 2.353.6 3.17 1.017 1.387.708 1.995 2.175 1.995 3.558V13h-1.6v-.148c0-.966-.417-1.773-1.123-2.133z"></path><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.2 6.5a3.3 3.3 0 116.6 0 3.3 3.3 0 01-6.6 0zm3.3-1.7a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4z"></path><path
                  d="M10.805 12.294C9.752 11.756 8.245 11.2 6.5 11.2c-1.745 0-3.252.556-4.305 1.094C.808 13.002.2 14.469.2 15.852V16h1.6v-.148c0-.966.417-1.773 1.123-2.133.913-.467 2.166-.919 3.577-.919s2.664.452 3.577.919c.706.36 1.123 1.167 1.123 2.133V16h1.6v-.148c0-1.383-.608-2.85-1.995-3.558z"></path></svg></span>Recipients</a>
                </div>
                <div className="menu-item "><a href="/team"><span className="tw-icon tw-icon-team "
                                                                  aria-hidden="true"
                                                                  role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.5.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zM1.8 3.5a1.7 1.7 0 113.4 0 1.7 1.7 0 01-3.4 0zM3.5 9.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm-1.7 3.3a1.7 1.7 0 113.4 0 1.7 1.7 0 01-3.4 0zM9.2 3.5a3.3 3.3 0 116.6 0 3.3 3.3 0 01-6.6 0zm3.3-1.7a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM12.5 9.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm-1.7 3.3a1.7 1.7 0 113.4 0 1.7 1.7 0 01-3.4 0z"></path></svg></span>Team<span
                  className="menu-item__badge">New</span></a></div>
                <div className="menu-item "><a href="/account/"><span
                  className="tw-icon tw-icon-profile " aria-hidden="true" role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 0C5.847 0 4.102 1.723 4.102 3.848S5.847 7.696 8 7.696c2.152 0 3.897-1.723 3.897-3.848S10.152 0 8 0zM5.743 3.848c0-1.23 1.01-2.228 2.257-2.228 1.246 0 2.256.998 2.256 2.228 0 1.23-1.01 2.228-2.256 2.228-1.246 0-2.257-.997-2.257-2.228z"></path><path
                  d="M8 9.127c2.487 0 4.604.858 5.967 1.595 1.391.752 2.033 2.22 2.033 3.644V16h-1.641v-1.634c0-.981-.435-1.82-1.18-2.223-1.225-.662-3.065-1.396-5.179-1.396-2.114 0-3.954.734-5.179 1.396-.745.402-1.18 1.242-1.18 2.223V16H0v-1.634c0-1.424.642-2.892 2.033-3.644C3.396 9.985 5.513 9.127 8 9.127z"></path></svg></span>Account</a>
                </div>
                <div className="menu-item "><a href="/invite"><span
                  className="tw-icon tw-icon-invite " aria-hidden="true" role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.47 4.2A2.8 2.8 0 018 1.04a2.8 2.8 0 014.53 3.16H16v1.6H0V4.2h3.47zM4.8 3a1.2 1.2 0 012.4 0v1.2H6A1.2 1.2 0 014.8 3zM10 4.2H8.8V3A1.2 1.2 0 1110 4.2z"></path><path
                  d="M2.8 14.2V8H1.2v7.8h13.6V8h-1.6v6.2H8.8V8H7.2v6.2H2.8z"></path></svg></span>Invite &amp; earn
                  90 EUR</a></div>
              </div>
              <div className="balance-group">
                <div className="balance-group__title">Balances</div>
                <ul>
                  <li>
                    <div className="balance-item active"><a href="/user/account/balances/23375373/">
                      <div className="avatar-container" aria-hidden="true">
                        <div className="balance-avatar balance-avatar--sm balance-avatar--dark">
                          <div
                            className="tw-avatar tw-avatar--sm tw-avatar--thumbnail tw-avatar--dark">
                            <div className="tw-avatar__content"
                                 style={{backgroundColor: 'transparent'}}><img
                              className="balance-avatar__round-currency-icon"
                              src="https://wise.com/public-resources/assets/flags/square/usd.svg" alt=""/></div>
                          </div>
                        </div>
                      </div>
                      <span className="balance-item__balance-details">0 USD</span></a></div>
                  </li>
                </ul>
                <a href="/flows/open-balance" className="balance-group__action"><span
                  className="tw-icon tw-icon-plus " aria-hidden="true" role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  fill-rule="evenodd" clip-rule="evenodd" d="M7.2 16V0h1.6v16H7.2z"></path><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M16 8.8H0V7.2h16v1.6z"></path></svg></span>Open a balance</a></div>
              <div className="balance-group">
                <div className="balance-group__title">Jars</div>
                <ul></ul>
                <a href="/flows/jars/open" className="balance-group__action"><span
                  className="tw-icon tw-icon-plus " aria-hidden="true" role="presentation"><svg
                  width="16" height="16" fill="currentColor" focusable="false"><path
                  fill-rule="evenodd" clip-rule="evenodd" d="M7.2 16V0h1.6v16H7.2z"></path><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M16 8.8H0V7.2h16v1.6z"></path></svg></span>Open a jar</a></div>
            </div>
          </div>
        </div>
        <div role="presentation" className="sidebar-toggle-backdrop column-layout-cover">
          <button type="button" className="close"><span className="tw-icon tw-icon-cross "
                                                        aria-hidden="true" role="presentation"><svg
            width="16" height="16" fill="currentColor" focusable="false"><path
            d="M9.131 8l5.435-5.434-1.132-1.132L8 6.87 2.566 1.434 1.434 2.566 6.87 8l-5.435 5.434 1.132 1.132L8 9.13l5.434 5.435 1.132-1.132L9.13 8z"></path></svg></span>
          </button>
        </div>
        <div className="column-layout-main">
          <nav
            className="top-bar navbar navbar-default m-b-0 simple-nav fixed-top__title-bar no-keyline navbar-mobile--with-title">
            <div className="container navbar-container m-l-0 p-t-0">
              <div className="header-container">
              </div>
              <ul className="nav navbar-nav notification-center">
                <li className="">
                  <button className="notification-toggle dropdown-toggle" type="button"
                          aria-haspopup="true" aria-expanded="false"><span className="sr-only">Toggle inbox</span>
                    <div className="notification-center__icon-container"><span
                      className="tw-icon tw-icon-notification " aria-hidden="true"
                      role="presentation"><svg width="24" height="24" fill="currentColor"
                                               focusable="false"><path fill-rule="evenodd"
                                                                       clip-rule="evenodd"
                                                                       d="M12 2a7 7 0 00-7 7v4.405L3.602 17.5h16.796L19 13.405V9a7 7 0 00-7-7zM7 9a5 5 0 0110 0v4.738l.602 1.762H6.398L7 13.738V9z"></path><path
                      d="M12 22a2.4 2.4 0 01-2.4-2.4h4.8A2.4 2.4 0 0112 22z"></path></svg></span>
                    </div>
                  </button>
                </li>
              </ul>
              <nav className="profile-menu nav navbar-nav navbar-right">
                <button type="button" aria-expanded="false" className="profile-name btn-unstyled">
                  <span className="sr-only">Open or close account menu</span>
                  <div className="circle circle-inverse circle__user-avatar">TB</div>
                  <h5 className="hidden-xs hidden-sm hidden-md m-l-1">Test Business</h5><span
                  className="tw-icon tw-icon-chevron-up tw-chevron chevron-color bottom m-l-1"
                  aria-hidden="true" role="presentation"><svg width="16" height="16"
                                                              fill="currentColor" focusable="false"><path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"></path></svg></span>
                </button>
              </nav>
            </div>
          </nav>
          <div className="container-content">
            <div className="fixed-top__balances-actionbar fixed-top-container__balances-actionbar">
              <div className="nav-toolbar nav-toolbar--compact p-b-2">
                <div className="container m-l-0 hidden-xs">
                  <div className="action-buttons p-l-0 pull-left">
                    <div className="btn-toolbar btn-toolbar-sm line-height-0">
                      <div className="btn-block">
                        <button type="button"
                                className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2">Add
                        </button>
                        <div className="tw-tooltip-wrapper hidden-md hidden-sm hidden-xs pull-left">
                          <span className="tw-tooltip-container" aria-describedby="zixi2b"><div
                            className="tooltip fade bottom " role="tooltip" id="zixi2b"
                            style={{top: '32px; left: 45px'}}><div className="tooltip-arrow"></div><div
                            className="tooltip-inner">You don't have any USD to convert.</div></div><button
                            type="button"
                            className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                            disabled>Convert</button></span></div>
                        <div className="tw-tooltip-wrapper hidden-md hidden-sm hidden-xs pull-left">
                          <span className="tw-tooltip-container" aria-describedby="1qpcu"><div
                            className="tooltip fade bottom " role="tooltip" id="1qpcu"
                            style={{top: '32px; left: 129.5px;'}}><div
                            className="tooltip-arrow"></div><div
                            className="tooltip-inner">You don't have any USD to send.</div></div><button
                            type="button"
                            className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                            disabled>Send</button></span></div>
                        <button type="button"
                                className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                                disabled>Request
                        </button>
                        <button type="button"
                                className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2 dropdown-toggle btn-dropdown d-flex"
                                aria-label="Open menu"><span
                          className="hidden-xs hidden-sm">More</span><span
                          className="css-q6fkr2"><span className="tw-icon tw-icon-more "
                                                       aria-hidden="true" role="presentation"><svg
                          width="16" height="16" fill="currentColor" focusable="false"><path
                          fill-rule="evenodd" clip-rule="evenodd"
                          d="M1.58 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16zM16 8a1.58 1.58 0 11-3.16 0A1.58 1.58 0 0116 8zM8 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16z"></path></svg></span></span>
                        </button>
                        <div className="pull-left btn-group m-x-0 m-b-0">
                          <ul className="dropdown-menu dropdown-menu-md css-nkhozk" role="menu">
                            <li><a role="button" href="#statement-drawer">Statements</a><a
                              role="button" href="/partner-integration">Connect to accounting</a>
                            </li>
                            <li><a href="/account/direct-debits/" className=" dropdown-item">Direct
                              Debits</a></li>
                            <li><a type="button" href="#close-balance" className=" dropdown-item">Close
                              balance</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container m-l-0 visible-xs">
                  <div className="action-buttons p-l-0">
                    <div className="btn-toolbar btn-toolbar-sm line-height-0">
                      <button type="button"
                              className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2">Add
                      </button>
                      <div className="tw-tooltip-wrapper hidden-md hidden-sm hidden-xs pull-left">
                        <span className="tw-tooltip-container" aria-describedby="kihshp"><div
                          className="tooltip fade bottom " role="tooltip" id="kihshp"
                          style={{top: '0px; left: 0px'}}><div className="tooltip-arrow"></div><div
                          className="tooltip-inner">You don't have any USD to convert.</div></div><button
                          type="button"
                          className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                          disabled>Convert</button></span></div>
                      <div className="tw-tooltip-wrapper hidden-md hidden-sm hidden-xs pull-left">
                        <span className="tw-tooltip-container" aria-describedby="a6g19b"><div
                          className="tooltip fade bottom " role="tooltip" id="a6g19b"
                          style={{top: '0px; left: 0px;'}}><div className="tooltip-arrow"></div><div
                          className="tooltip-inner">You don't have any USD to send.</div></div><button
                          type="button"
                          className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                          disabled>Send</button></span></div>
                      <button type="button"
                              className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                              disabled>Request
                      </button>
                      <button type="button"
                              className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2 dropdown-toggle btn-dropdown d-flex"
                              aria-label="Open menu"><span
                        className="hidden-xs hidden-sm">More</span><span
                        className="css-q6fkr2"><span className="tw-icon tw-icon-more "
                                                     aria-hidden="true" role="presentation"><svg
                        width="16" height="16" fill="currentColor" focusable="false"><path
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.58 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16zM16 8a1.58 1.58 0 11-3.16 0A1.58 1.58 0 0116 8zM8 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16z"></path></svg></span></span>
                      </button>
                      <div className="pull-left btn-group m-x-0 m-b-0">
                        <ul className="dropdown-menu dropdown-menu-md css-nkhozk" role="menu">
                          <li><a role="button" href="#statement-drawer">Statements</a><a
                            role="button" href="/partner-integration">Connect to accounting</a></li>
                          <li><a href="/account/direct-debits/" className=" dropdown-item">Direct
                            Debits</a></li>
                          <li><a type="button" href="#close-balance" className=" dropdown-item">Close
                            balance</a></li>
                        </ul>
                      </div>
                      <div className="dropdown accounting-dropdown">
                        <button type="button"
                                className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">Accounting
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-md"
                             aria-labelledby="dropdownMenuButton">
                          <li><a className="dropdown-item" role="button"
                                 href="#statement-drawer">Statements</a></li>
                          <li><a className="dropdown-item" role="button"
                                 href="/partner-integration">Connect to accounting</a></li>
                        </div>
                      </div>
                      <button type="button"
                              className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2">Direct
                        Debits
                      </button>
                      <button type="button"
                              className="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-2 dropdown-toggle btn-dropdown d-flex"
                              aria-label="Open menu"><span
                        className="hidden-xs hidden-sm">More</span><span
                        className="css-q6fkr2"><span className="tw-icon tw-icon-more "
                                                     aria-hidden="true" role="presentation"><svg
                        width="16" height="16" fill="currentColor" focusable="false"><path
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.58 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16zM16 8a1.58 1.58 0 11-3.16 0A1.58 1.58 0 0116 8zM8 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16z"></path></svg></span></span>
                      </button>
                      <div className="pull-left btn-group m-x-0 m-b-0">
                        <ul className="dropdown-menu dropdown-menu-md css-nkhozk" role="menu">
                          <li><a role="button" href="#statement-drawer">Statements</a><a
                            role="button" href="/partner-integration">Connect to accounting</a></li>
                          <li><a href="/account/direct-debits/" className=" dropdown-item">Direct
                            Debits</a></li>
                          <li><a type="button" href="#close-balance" className=" dropdown-item">Close
                            balance</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container full-height-container__balance_navigation">
              <div>
              {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navigation;
