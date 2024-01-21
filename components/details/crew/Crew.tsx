'use client'
import { IMAGE_URL } from '@/services/movies.service';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Crew = () => {
  const { movie } = useSelector((state:any) => state.movies);
  const [credits] = useState(movie[1]);
  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          {credits.crew.map((data:any) => (
            <tbody key={data.id}>
              <tr>
                <td>
                  <img src={data.profile_path ? `${IMAGE_URL}${data.profile_path}` : 'http://placehold.it/54x81'} alt="" />
                </td>
                <td>{data.name}</td>
                <td>{data.department}</td>
                <td>{data.job}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}

export default Crew
