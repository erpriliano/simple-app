import React from 'react';
import { Link } from 'react-router-dom';

interface ListProps {
  jobId: string;
  jobTitle: string;
  company: string;
  status: string;
  location: string;
  createdAt: string;
}

const List: React.FC<ListProps> = ({
  jobId,
  jobTitle,
  company,
  status,
  location,
  createdAt,
}) => {
  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #000',
          marginBottom: '8px',
        }}
      >
        <div>
          <Link to={`/details/${jobId}`}>
            <h2 style={{ color: '#0072fc', fontWeight: 600 }}>{jobTitle}</h2>
          </Link>
          <p>
            {company} -{' '}
            <span style={{ color: 'green', fontWeight: 600 }}>{status}</span>
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ textAlign: 'right', fontWeight: 400, fontSize: '20px' }}>
            {location}
          </h3>
          <p style={{ textAlign: 'right' }}>{createdAt}</p>
        </div>
      </div>
  );
};

export default List;
