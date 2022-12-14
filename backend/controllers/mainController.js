const { mainService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");
const sorter = require("../middleware/sorter");

const mainFeed = asyncWrap(async (req, res) => {
  let mainFeed = ({ user_id } = req.body);

  if (!user_id) {
    return res.status(400).json({ message: "유효하지않은 토큰입니다" });
  }

  let mainData = await mainService.mainFeed(user_id);
  let sortData = sorter(mainData, "create_at", "내림차순")

  await res.status(201).json(sortData);
});

const mainSearch = asyncWrap(async (req, res) => {
  const {text} = req.body;
  if( !text ) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err
  }
  const result = await mainService.mainSearch(text)
  res.status(200).json({result})
})

module.exports = { mainFeed, mainSearch };

