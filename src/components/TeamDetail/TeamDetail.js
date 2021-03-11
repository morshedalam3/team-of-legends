import React from 'react';
import './TeamDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faMars, faMapMarker, faFutbol } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import fbIcon from './Facebook.png';
import twIcon from './Twitter.png';
import ytIcon from './YouTube.png';

const TeamDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const { strTeam, intFormedYear, strGender, strCountry, 
        strSport, strTeamBadge, strStadiumDescription, strTwitter, strFacebook, strYoutube, strTeamFanart4 } = detail;

    let greetings;
    strGender === 'Male' ?
        greetings = <img className="img-fluid flex-row-reverse " src={male} alt="" /> :
        greetings = <img className="img-fluid flex-row-reverse " src={female} alt="" />


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [id]);

    const background = {
        height: '700px',
        border: '1px solid black',
        backgroundImage: `url(${strTeamFanart4})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div style={background}>
                <div className="team-logo text-center">
                    <img className="img-fluid " src={strTeamBadge} alt="" />
                </div>
            </div>

            <div className="team-box">
                    <div className="container bg-success">
                        <div className="row bg-primary mt-5">
                            <div className="col-md-6 mt-5">
                                    <h1>{strTeam}</h1>
                                    <p><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                                    <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>   
                            </div>

                            <div className="col-md-6">
                                {greetings}
                            </div>  
                        </div>
                           <div>
                               <h1 className="text-center mt-5">Description</h1>
                            <p className="my-5">{strStadiumDescription}</p>
                            </div>

                        <div className="link-button">
                            <a href={`https://${strFacebook}`}><img src={fbIcon} alt=""/> </a>
                            <a href={`https://${strTwitter}`}><img src={twIcon} alt=""/> </a>
                            <a href={`https://${strYoutube}`}><img src={ytIcon} alt=""/> </a>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default TeamDetail;