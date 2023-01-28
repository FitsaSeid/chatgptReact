import React from 'react';
import logo from '../img/chatgptEthiopia.png'
import './home.css';

function Home() {
    return (
        <div className='test'>
            <div className='chatgpt'>
                <header>
                    <img src={logo} alt="logo" />
                    <div class="ds-text-button">
                        <a href="/chatgpt">Goto ChatGPT</a>
                    </div>
                </header>

                <div class="row">
                    <div class="col-xs-12 col-md-5 ds-title">
                        <h1>Prepared to be convenient for Ethiopians </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-5 ds-title-paragraph">
                        <p> This is reserved for Ethiopians and you can write any of your questions and get a response from chatGPT
                            bot. chatGPT for Ethiopia
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-8 ds-buttons">
                        <a href="/chatgpt"><button class="bn632-hover bn26 ">Goto ChatGPT   <i class="fa fa-long-arrow-right"></i></button></a>
                    </div>
                </div>



            </div>
            <div class="footer module">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ds-footer-copyrights">
                            <p>© 2023. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home