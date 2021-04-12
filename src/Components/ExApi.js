import { useState, useEffect } from 'react';
import facade from './ApiFacade';

function ExApi () {
    let [obj, setObj] = useState()

    useEffect( () => {
        facade.fetchAllData().then(data => setObj(data));
    }, [])
    return (
        <div>
            {
                obj !== undefined &&
                <div>
                    <h5>Chuck Norris Joke:</h5>
                    {obj.chuckNorrisJoke}
                    <h5>Dad Joke:</h5>
                    {obj.dadJoke}
                    <h5>Star Wars Planet:</h5>
                    {obj.swPlanet}
                    <h5>Random Cat Facts:</h5>
                    {obj.catFacts}
                    <h5>Current NBA Phase:</h5>
                    {obj.nbaSeasonPhase}
                </div>
            }
        </div>
    )
}
export default ExApi;