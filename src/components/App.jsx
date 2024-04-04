import react from 'react';
import profile from './Profile/profile';
import userData from './Profile/user.json';
import Statistics from './statistics/statistics';
import statsData from './statistics/data.json';
import PropTypes from 'prop-types';

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


App.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};