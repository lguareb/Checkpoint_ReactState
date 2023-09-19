import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ id, name, team, nationality, jerseyNumber, age, imageURL }) => {
  const cardStyle = {
    width: '18rem',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
    margin: '2rem auto',
  };
  const imageStyle = {
    width: '150px', // Set a fixed width for the image
    height: '200px', // Set a fixed height for the image
    objectFit: 'cover', // Maintain aspect ratio and cover the container
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageURL} alt={`${name}'s Image`} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
        <Card.Text>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  id: 'N/A',
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 'N/A',
  age: 'N/A',
  imageURL: '/default.jpg', // Provide a default image URL
};

export default Player;