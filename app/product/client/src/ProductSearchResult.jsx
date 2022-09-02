import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CONTENT_ONLY, ZERO_HITS } from './search';
import Card from 'react-bootstrap/Card';

const ProductSearchResult = (props) => {
  const { queryData, data, fetchData } = props;
  const { count, results } = data;

  return (
    <Col>
      <Row className="justify-content-center">
        {`Search for "${decodeURIComponent(queryData.query)}": ${count} counts`}
      </Row>
      <Row className="justify-content-center" style={{ maxWidth: '1200px', margin: 'auto' }}>
        {results.map((result) => (
          <Card key={result.gtin} style={{ margin: `5px` }}>
            <Card.Body>
              <Card.Title>{result.name}</Card.Title>
              <Card.Subtitle>{result.price}</Card.Subtitle>
            </Card.Body>
            <div style={{ margin: 'auto' }}>
              <img style={{ width: '360px' }} src={result.image} alt={result.name} />
            </div>
          </Card>
        ))}
      </Row>
    </Col>
  );
};

ProductSearchResult.propTypes = {
  queryData: PropTypes.object,
  data: PropTypes.object,
  fetchData: PropTypes.func,
};

export default ProductSearchResult;
