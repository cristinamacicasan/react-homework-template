import react from 'react';
import Profile from './Profile/Profile';
import userData from './Profile/user.json';
import Statistics from './statistics/Statistics';
import statsData from './statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
    </>
  );
};


