const { ecoTipModel } = require("../models/ecotip.model");
const { getDayOfYear } = require("date-fns");
const { UserModel } = require("../models/user.model");
const { ai } = require("../configs/gemini");

const getDailyTips = async (req, res) => {
  try {
    const tips = await ecoTipModel.find({});

    if (!tips) {
      return res.status(401).json({ message: "Tips not available" });
    }

    const getDateIndex = getDayOfYear(new Date()) % tips.length;

    const tipsForToday = tips[getDateIndex];

    return res.status(200).json({ data: tipsForToday });
  } catch (error) {
    console.log();
  }
};

const addTips = async (req, res) => {
  try {
    const { tip } = req.body;

    if (!tip)
      return res.status(401).json({ message: "Please fill all the fields" });

    const newTip = await ecoTipModel.create({ tip });
    await newTip.save();

    return res.status(201).json({ message: "Tip created", tip });
  } catch (error) {
    console.log("Error while adding tips : " + error.message);
  }
};

const getAITips = async (req, res) => {
  const { userId } = req;
  try {
    const user = await UserModel.findOne({ _id: userId });
    console.log(user, "-----");

    if (!user) {
      return res.status(400).json({ message: "Invalid request" });
    }

    const prompt = `You are an eco advisor. A user has logged their reusable product usage. Based on this data:

${user?.data}

Give them one short, friendly tip or appreciation in 1–2 lines. Highlight what they’re doing well and suggest one area to improve. Keep the tone positive and practical.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    if (!response) {
      return res
        .status(400)
        .json({ message: "something went wrong! try again later" });
    }

    return res.status(200).json({
      messaege: "ai get data",
      data: response?.candidates[0]?.content?.parts[0]?.text,
    });
  } catch (error) {
    console.log("Error while get ai response : " + error.message);
  }
};

const getTopFive = async (req, res) => {
  try {
    const user = await UserModel.find({});

    if (!user) {
      return res.status(400).json({ message: "Invalid request" });
    }
    user.sort((a, b) => b.totalPoints - a.totalPoints);
    const topFive = user.slice(0, 5);
    return res.status(200).json({ message: "user fetched", data: topFive });
  } catch (error) {
    console.log("Error while getting top 5 : " + error.message);
  }
};

module.exports = { getDailyTips, addTips, getAITips, getTopFive };
