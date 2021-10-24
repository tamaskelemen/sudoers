import React, {PureComponent} from 'react';
import Navigation from '../navigation/SplashNavigation';

class SplashPage extends PureComponent {
    componentDidMount() {
        var path = window.location.hash;
        setTimeout(function () {
            document.getElementById("currency").innerHTML = path.split('/')[2];
            document.getElementById("smartconverter-link").href = "/#/smartconverter/" + path.split('/')[2];
        }, 2000);

        var money_waste = false;

        function animateValue(id, start, end, duration) {
            var range = end - start;
            var current = start;
            var increment = end > start ? 1 : -1;
            var stepTime = Math.abs(Math.floor(duration / range));
            var obj = document.getElementById(id);
            var timer = setInterval(function() {
                current += increment;
                obj.innerHTML = current.toLocaleString();
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

        function mesint(id, start, end, duration) {
            var range = end - start;
            var current = start;

            var increment_value = Math.floor(Math.random() * 100000)

            var increment = end > start ? increment_value : 100;

            var stepTime = Math.abs(Math.floor(duration / range));
            var obj = document.getElementById(id);
            var timer = setInterval(function() {
                var random = Math.floor(Math.random() * 6)

                if (random === 0) {
                    current -= increment;
                    money_waste = true;
                    console.log();
                } else {
                    money_waste = false;
                    current += increment;
                }

                if (obj) {
                    obj.innerHTML = current.toLocaleString();
                }

                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

        setTimeout(function () {
            mesint("splash-page__saved-money-h1", 158695467, 9586954679, 19999999999999);

            if (money_waste == true) {
                if (document.getElementById("splash-page__saved-money-h1")) {
                    document.getElementById("splash-page__saved-money-h1").style.color = '#c22e2e';
                }
            } else {
                if (document.getElementById("splash-page__saved-money-h1")) {
                    document.getElementById("splash-page__saved-money-h1").style.color = '#37517e';
                }
            }

            if (document.getElementById("splash-page__satisfied-customers-h1")) {
                animateValue("splash-page__satisfied-customers-h1", 27869546, 9586954679, 9999999999999);
            }
            if (document.getElementById("splash-page__opt-transactions")) {
                animateValue("splash-page__opt-transactions", 34987657, 9586954679, 9999999999999);
            }
        }, 2000)
    }
  render() {
    return (
      <div>
        <Navigation>
            <div className="splash-page">
                <div className="splash-page__container">
                    <div className="splash-page__container__left">
                        <div className="splash-page__satisfied-customers">
                            <h1 className="splash-page__h1 splash-page__satisfied-customers-h1"
                                id="splash-page__satisfied-customers-h1">
                                27,869,546
                            </h1>
                            <p className="splash-page__short-description">
                                satisfied customers
                            </p>
                        </div>
                        <div className="splash-page__saved-money">
                            <h1 className="splash-page__h1"
                                id="splash-page__saved-money-h1">
                                158,695,467
                            </h1>
                            <p className="splash-page__short-description">
                                <div id="currency" className="splash-page__saved-money-currency"></div> Saved
                            </p>
                        </div>
                        <div className="splash-page__opt-transactions">
                            <h1 className="splash-page__h1"
                                id="splash-page__opt-transactions">
                                34,987,657
                            </h1>
                            <p className="splash-page__short-description">
                                optimized transactions
                            </p>
                        </div>
                        <div className="splash-page__description">
                            <p>
                                This product utilizes prediction algorithms.
                                There is a small chance we can’t provide the expected exchange rate
                            </p>
                            <p>
                                Use this tool for your own responsibility
                            </p>
                            <p>
                                We don’t know the exchange date, but we guarantee that the money will be on your target balance on the set interval
                            </p>
                            <p>
                                In case of impossible limits we can’t start the transaction in the timeframe
                            </p>
                        </div>
                    </div>
                    <div className="splash-page__container__right">
                        <div className="splash-page__logo">
                            <div className="content">
                                <div className="content__container">
                                    <p className="content__container__text">
                                        <img className="content__container__logo" src="wise_logo.png" alt=""/>
                                    </p>
                                    <span className="spanci">is</span>
                                    <ul className="content__container__list">
                                        <li className="content__container__list__item"> fast</li>
                                        <li className="content__container__list__item"> transparent</li>
                                        <li className="content__container__list__item"> revolutional</li>
                                        <li className="content__container__list__item"> fast</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="send-button splash-page__button">
                            <a id="smartconverter-link" href="#" className="btn btn-sm btn-block btn-success splash-page__button--big">
                                <span className="display-block">Let's start</span> saving
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Navigation>
      </div>
    );
  }
}

SplashPage.propTypes = {};

export default SplashPage;