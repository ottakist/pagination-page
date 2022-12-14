import React from 'react'

const Follower = ({login,avatar_url,html_url}) => {
  // console.log(folower);
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </article>
  );
}

export default Follower
