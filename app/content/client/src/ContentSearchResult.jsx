import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { ZERO_HITS } from './search';

const ContentSearchResult = (props) => {
  const { queryData, data, fetchData } = props;
  const { count, results } = data;

  return (
    <Col>
      <Row className="justify-content-center">
        {`Search for "${decodeURIComponent(queryData.query)}": ${count} counts`}
      </Row>
      <Col style={{ maxWidth: '900px', margin: 'auto' }}>
        {results.map((result) => (
          <Card key={result.gtin} style={{ margin: '10px' }}>
            <Card.Body>
              <Card.Title>{result.name}</Card.Title>
              <Card.Subtitle>Egine description</Card.Subtitle>
              <Card.Text>
                awesome egine awesome egine awesome egine awesome egine awesome egine 
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Col>
  );
};

ContentSearchResult.propTypes = {
  queryData: PropTypes.object,
  data: PropTypes.object,
  fetchData: PropTypes.func,
};

export default ContentSearchResult;
