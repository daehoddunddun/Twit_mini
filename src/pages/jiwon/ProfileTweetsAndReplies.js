import React from 'react';

import WhoToFollow from './WhoToFollow';
import TopicsToFollow from './TopicsToFollow';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';

const ProfileTweetsAndReplies = () => {
  return (
    <div>
      트윗 앤 리플라이스 트윗 앤 리플라이스 트윗 앤 리플라이스 트윗 앤
      리플라이스
      <WhoToFollow />
      <TopicsToFollow />
    </div>
  );
};

export default ProfileTweetsAndReplies;