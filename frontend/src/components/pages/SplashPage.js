import React, {PureComponent} from 'react';
import Navigation from '../navigation/SplashNavigation';

class SplashPage extends PureComponent {
    componentDidMount() {
        function randomInteger() {
            return Math.floor(Math.random() * (1 - 4 + 1)) + 1;
        }

        setTimeout(function () {
            const obj_1 = document.getElementById("splash-page__satisfied-customers-h1"); //
            const obj_2 = document.getElementById("splash-page__saved-money-h1"); // s
            const obj_3 = document.getElementById("ssplash-page__opt-transactions"); //

            function animateValue(obj, start, end, duration) {
                let startTimestamp = null;

                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    obj.innerHTML = Math.floor(progress * (end - start) + start);
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            animateValue(obj_1, 158695467, 99999999999999, 100000000000000000);
        }, 1000)
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
                                158,695,467
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
                                <div className="splash-page__saved-money-currency">GBP</div> Saved
                            </p>
                        </div>
                        <div className="splash-page__opt-transactions">
                            <h1 className="splash-page__h1"
                                id="splash-page__opt-transactions">
                                987.657
                            </h1>
                            <p className="splash-page__short-description">
                                optimized transactions
                            </p>
                        </div>
                        <div className="splash-page__description">
                            <p>
                                Our new feature let you use the several decades of
                                experience of our analytics team combined with the
                                latest prediction techniques to find even better excange
                                rates for your money transfers.
                            </p>
                            <p>
                                Our new feature let you use the several decades of
                                experience of our analytics team combined with the
                                latest prediction techniques to find even better excange
                                rates for your money transfers.
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
                            <a href="/send" className="btn btn-sm btn-block btn-success splash-page__button--big">
                                <span className="display-block">Lets start</span> saving
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