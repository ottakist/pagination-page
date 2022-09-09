import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
function App() {
  const { loading, data } = useFetch(url);

  const [page, setPage] = useState(0);
  const [follower, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [page,loading]);
  const handlePage =(index)=>{
    setPage(index)

  }
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {follower.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button
              className='prev-btn'
              onClick={() => setPage(page <= 0? data.length-1 : page - 1)}
            >
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page && 'active-btn'}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              className='next-btn'
              onClick={() => setPage(page >= data.length - 1 ? 0 : page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
