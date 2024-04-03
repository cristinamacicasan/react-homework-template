import react from 'react';
import profile from './Profile/profile';
import userData from './Profile/user.json';
import Statistics from './statistics/statistics';
import statsData from './statistics/data.json';

export const App = () => {
  return (
    <div>
      <profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
    </div>
  );
};
