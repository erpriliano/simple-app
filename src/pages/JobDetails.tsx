import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { IJob } from '../types';

const JobDetails = () => {
  const [data, setData] = useState<IJob | null>(null);
  const { id } = useParams();

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    axios
        .get(`https://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => console.log(err))
  }, [id])

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
        <Link to='/'>
            <span style={{ color: '#0072fc', fontWeight: 600, fontSize: '18px' }}>{'<< Back'}</span>
        </Link>
        <div style={{ backgroundColor: '#ede7e6', marginTop: '24px', padding: '12px' }}>
            <div style={{ borderBottom: '1px #000 solid', paddingBottom: '24px' }}>
                <p>{`${data?.type || ''} / ${data?.location}` || ''}</p>
                <p style={{ fontSize: '32px', lineHeight: '0px', fontWeight: 600 }}>{data?.title}</p>
            </div>
            <div style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{__html: data?.description || ''}} /> 
        </div>
    </div>
  )
}

export default JobDetails