import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import { List, TextField } from '../components';
import { timeSince } from '../utils/timeSince';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { IJob } from '../types';

const JobList: React.FC<{}> = () => {
  const [inputValue, setInputValue] = useState({
    jobDesc: '',
    location: '',
    fullTime: false,
  });
  const [jobList, setJobList] = useState<IJob[]>([]);
  const { isAuthenticated } = useContext(AuthContext);

  const fetchData = useCallback(
    (description: string, location: string, full_time: boolean) => {
      axios
        .get('https://dev3.dansmultipro.co.id/api/recruitment/positions.json', {
          params: {
            description: description.toLowerCase(),
            location: location.toLowerCase(),
            full_time: full_time,
          },
        })
        .then((res) => {
          setJobList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [],
  );

  useEffect(() => {
    fetchData(inputValue.jobDesc, inputValue.location, inputValue.fullTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'end' }}>
        <TextField
          label='Job Description'
          placeholder='Filter by title, benefits, companies, expertise'
          value={inputValue.jobDesc}
          onChange={(e) =>
            setInputValue((prev) => ({ ...prev, jobDesc: e.target.value }))
          }
          onBlur={(e) =>
            setInputValue((prev) => ({ ...prev, jobDesc: e.target.value }))
          }
        />

        <TextField
          label='Location'
          placeholder='Filter by city, state, zip code or country'
          value={inputValue.location}
          onChange={(e) =>
            setInputValue((prev) => ({ ...prev, location: e.target.value }))
          }
          onBlur={(e) =>
            setInputValue((prev) => ({ ...prev, location: e.target.value }))
          }
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            gap: '35px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type='checkbox'
              style={{ width: '15px', height: '20px', marginRight: '6px' }}
              onChange={(e) =>
                setInputValue((prev) => ({
                  ...prev,
                  fullTime: e.target.checked,
                }))
              }
            />
            <label style={{ fontWeight: 600, fontSize: '18px' }}>
              Full Time Only
            </label>
          </div>

          <div>
            <Button
              variant='primary'
              style={{ width: '100px', marginTop: '10px' }}
              onClick={() =>
                fetchData(
                  inputValue.jobDesc,
                  inputValue.location,
                  inputValue.fullTime,
                )
              }
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#ede7e6',
          marginTop: '24px',
          padding: '12px',
        }}
      >
        <h2>Job List {isAuthenticated ? 'true' : 'false'}</h2>
        <hr />
        {jobList.map((job: IJob) => (
          <List
            key={job.id}
            jobId={job.id}
            jobTitle={job.title}
            company={job.company}
            location={job.location}
            status={job.type}
            createdAt={timeSince(job.created_at)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
