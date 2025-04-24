const { ProductModel } = require("../models/products.model");
const { UserModel } = require("../models/user.model");

const addNewProduct = async (req, res) => {
  try {
    const { name, icon, points, description } = req.body;

    if (!name || !icon || !points || !description) {
      return res.status(401).json({ message: "please fill all the fields" });
    }

    const newProduct = await ProductModel.create({
      name,
      icon,
      points,
      description,
    });

    await newProduct.save();

    return res
      .status(201)
      .json({ message: "product created", data: newProduct });
  } catch (error) {
    console.log("Error while adding new product", error.message);
  }
};

const updateProductsDetails = async (req, res) => {
  try {
    const { name, points, icon, description } = req.body;
    const { userId } = req;
    if (!name) {
      return res.status(401).json({ message: "Please fill all the fields" });
    }

    const user = await UserModel.findOne({ _id: userId });

    const productIndex = user?.data?.findIndex((prod) => prod.name === name);

    if (productIndex >= 0) {
      user.data[productIndex].TotalCount += 1;
      user.data[productIndex].TotalPoints += points;
    } else {
      user?.data.push({
        name,
        icon,
        description,
        TotalCount: 1,
        TotalPoints: points,
      });
    }

    user.totalPoints += points;

    await user.save();

    return res.status(200).json({
      message: "Product log updated successfully",
      data: user?.data,
      totalPoints: user?.totalPoints,
    });
  } catch (error) {
    console.log("Error while update productDetails : " + error.message );
  }
};

module.exports = {
  addNewProduct,
  updateProductsDetails,
};
