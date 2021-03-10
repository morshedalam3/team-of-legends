import React, { useEffect, useState } from 'react';
import './Home.css';
import image from '../../Photo/3915789.jpg';
import SingleTeam from '../SingleTeam/SingleTeam';

const Home = () => {
    const [team, setTeam] = useState([]);
   useEffect(() => {
         const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        //  const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
   }, []);
   const background = {
    height:'500px',
    border: '1px solid black',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
   }
    return ( 
         <>
            <div style={background}>
                <h1 className="heading">World Sports Lover </h1>
        </div>

        <div className="bg-dark">
        <div className="container text-center">
            <div className="row">
                {
                    team.map(team => <SingleTeam team={team}></SingleTeam>)
                }
            </div>
        </div>
    </div>
    </>
    );
};

export default Home;