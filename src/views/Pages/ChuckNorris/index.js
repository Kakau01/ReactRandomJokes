import './style.css';

import { useState } from 'react';

import api from '../../../services/api';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function ChuckNorris() {
    const [jokes, setJokes] = useState(["ChuckNorris Quotes!"]);
    const [load, setLoad] = useState('');

    function GetDataFromApi() {
        setLoad(true);
        //Get data from API
        api.get("jokes/random").then(
            res => {
                setJokes(res.data.value);
                console.log(jokes);
                setLoad(false);
            }
        ).catch(
            e => console.log('Ops, algo deu errado')
        )
    }





    return (
        <div>
            <Header title="Chuck Norris Random Jokes" />
            <div className="main-title d-flex flex-column justify-content-center align-items-center">
                <h1>Here you can get a motivational quote from Chuck Norris</h1>
                <button onClick={GetDataFromApi}>Press Here</button>

            </div>

            <div className="main-box d-flex justify-content-center align-items-center" >
                <div className="bx-quote d-flex justify-content-center align-items-center">
                    {!load ? (
                         <h3>"{jokes}"</h3>
                    ): (
                        <span style={{
                                color:"black", 
                            }}>Loading...</span>
                    )
                    }
                   
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ChuckNorris;