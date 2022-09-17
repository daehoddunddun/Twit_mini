const { tweetDao } = require("../models");
const { userDao } = require("../models");

const idSearch = async ( id ) => {
  const result = userDao.searchAnyId( id );
  return result;
}

const tweetPost = async (user_id, text, image) => {
  const tweetPost = await tweetDao.tweetPost(
    user_id,
    text,
    image
  );
  return tweetPost;
};

const tweetDel = async (user_id, tweet_id) => {
  const [tweetEx] = await tweetDao.tweetEx(tweet_id);
  if (!tweetEx) {
    const err = new Error(`트윗이 존재하지않습니다`);
    err.statusCode = 400;
    throw err;
  }

  try {
    if (user_id == tweetEx.user_id) {
      await tweetDao.initReply(tweet_id);
      return await tweetDao.tweetDel(user_id, tweet_id);
    } else {
      err;
    }
  } catch (err) {
    const error = new Error("본인의 트윗만 삭제할 수 있습니다");
    error.statusCode = 400;
    throw error;
  }
};

const tweetsList = async () => {
  return await tweetDao.tweetsList();
};

const tweetReply = async (
  user_id,
  content,
  content_img,
  tweet_for,
  reply_at
) => {
  const tweetReply = await tweetDao.tweetReply(
    user_id,
    content,
    content_img,
    tweet_for,
    reply_at
  );
  return tweetReply;
};

const tweetTrend = async() => {
  const tweet = await tweetDao.tweetHashTag()
  const hashArray = [];
  const hashObject = tweet.reduce((accu, curr) => {
    accu[curr.hash] = (accu[curr.hash] || 0) + 1;
    return accu;
  }, {})
  for(key in hashObject){
    hashArray.push({tag : key, count : hashObject[key]})
  }
  hashArray.sort(function(a, b) {
    return b.count - a.count;
  })
  if ( hashArray.length >5 ) {
    hashArray.length = 5;
  }
  return hashArray
}

module.exports = {
  idSearch,
  tweetPost,
  tweetDel,
  tweetsList,
  tweetReply,
  tweetTrend
};
