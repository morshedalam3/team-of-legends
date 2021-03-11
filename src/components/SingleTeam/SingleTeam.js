import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleTeam = (props) => {
    const { strTeamBadge, idTeam, strTeam } = props.team;
    // const {strLeague, idLeague, strGender} = props.team;
    const history = useHistory()
    return (
        <div className="text-center my-3 mx-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Button onClick={() =>history.push(`/team/${idTeam}`)} variant="primary">Show Details</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleTeam;