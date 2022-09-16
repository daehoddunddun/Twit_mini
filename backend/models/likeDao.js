const database = require("./orm");

const likeEx = async (user_id, post_id) => {
  try {
    return await database.query(
      `SELECT user_id,
                    tweet_id
                    FROM likes 
            WHERE user_id=?
            `,
            [user_id]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const tweetLike = async (user_id, post_id) => {
  try {
    return await database.query(
      `INSERT INTO likes(
                user_id,
                tweet_id
            ) VALUE(?,?)
            `,
      [user_id, post_id]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const likeCount = async ( tweetId ) => {
  try {
    const [count] = await database.query(
      `SELECT COUNT(tweet_id) as count
      FROM likes
      WHERE tweet_id = ?`,
      [ tweetId ]
    )
    return count
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
}

module.exports = { tweetLike, likeEx,likeCount };