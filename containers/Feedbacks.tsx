import { feedbacks } from '../portfolio';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FeedbackCard from '../components/FeedbackCard';

const Feedbacks = () => {
  return (
    feedbacks && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info"></h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Feedbacks;
