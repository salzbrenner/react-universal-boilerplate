import React from 'react';
import { Link } from 'react-router';

const AthletePreview = ({ id, image, name, medals }) => (
  <Link to={`/athlete/${id}`}>
    <div className="athlete-preview">
      <img alt={name} src={`img/${image}`} />
      <h2 className="name">{name}</h2>
      <span className="medals-count">
        <img alt="medals" src="/img/medal.png" />
        {medals.length}
      </span>
    </div>
  </Link>
);

AthletePreview.propTypes = {
  id: React.PropTypes.string,
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  medals: React.PropTypes.string,
};

export default AthletePreview;
