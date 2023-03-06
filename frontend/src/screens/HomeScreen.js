import React from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <Container>
      <div className="row py-5">
        <div className="col-9">
          
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
 
 {/* This div is for the rectangle div on the left*/}
  <div style={{ position: 'absolute', top: '-1rem', left: '3rem', width: '9rem', height: '17rem', background: 'white', zIndex: '1', borderTopLeftRadius: '25%', borderTopRightRadius: '25%'}}>
  
   {/* This div is for the square date*/}
  <div className="text-center" style={{width: '9rem', height: '9rem', background: 'salmon', borderRadius: '25%', zIndex: '2', color: 'white', padding: '10px'}}>
    <h2>5</h2>
    <h3>MAR</h3>
  </div>

  {/* This div is for the author, tags, comments*/}
  <Card className='byline' style={{width: '9rem', position:'absolute', top: '10rem', bg:'salmon' }}>
  <ListGroup className='byline' variant="flush">
        <ListGroup.Item>by: test name</ListGroup.Item>
        <ListGroup.Item>blog, test</ListGroup.Item>
        <ListGroup.Item>3 comments</ListGroup.Item>
      </ListGroup>

  </Card>
  </div>
  
   
  <Card style={{ width: '55rem', height: '30rem', display: 'flex', flexDirection: 'column', justifyContent: 'left', textAlign: 'left'}}>
    <Card.Body style={{ flex: '1 1 auto'}}>
       {/* This div holds a snipit of the blog*/}
      <div style={{ position: 'absolute', top: '1rem', left: '13rem', width: '42rem', height: '15rem', zIndex: '2' }}>
      <Card.Title >Card Title</Card.Title>
      <Card.Text >
        kla;dskjf ;dalskfj adfoiafn afoia dfoai f nafoi fn a;odsfija;odsfijaadfoija;fj oa;sijdf;alskdjf
      </Card.Text>
      </div>
    </Card.Body>
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem', background:'#D3D3D3'}}>
      <Button variant="primary">Read More</Button>
    </div>
  </Card>
</div>
        </div>
        <div className="col-3">col-4</div>
      </div>
    </Container>
  );
};

export default HomeScreen;