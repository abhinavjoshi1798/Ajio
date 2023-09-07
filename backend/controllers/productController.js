const { ProductModel } = require("../models/productModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getProduct = async (req, res) => {
  const {
    minPrice,
    maxPrice,
    category,
    minDiscount,
    maxDiscount,
    page,
    order,
  } = req.query;
  const categoryFilter = category ? { category: category } : {};
  if (order === "desc") {
    price = -1;
  } else {
    price = 1;
  }
  const priceFilter = {};
  if (maxPrice && minPrice) {
    priceFilter.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
  }
  const discountFilter = {};
  if (maxDiscount && minDiscount) {
    discountFilter.discount = {
      $gte: parseInt(minDiscount),
      $lte: parseInt(maxDiscount),
    };
  }
  const pageNumber = page || 1;
  const limitNumber = 10;
  let skip = (pageNumber - 1) * limitNumber;

  try {
    const total = await ProductModel.find({
      ...priceFilter,
      ...discountFilter,
      ...categoryFilter,
    }).countDocuments();
    const products = await ProductModel.find({
      ...priceFilter,
      ...discountFilter,
      ...categoryFilter,
    })
      .skip(skip)
      .limit(limitNumber)
      .sort({ price });
    res.send({
      message: "All Products",
      err: false,
      products,
      total,
      status: 200,
    });
  } catch (err) {
    res.send({
      message: "Something went wrong",
      err: true,
      status: 400,
      err,
    });
  }
};

const addProduct = async (req, res) => {
  const { image, brand, name, price, category, quantity } = req.body;
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.SecretKey);
    const product = new ProductModel({
      image,
      brand,
      name,
      price,
      category,
      quantity,
      adminId: decoded.userId,
    });
    await product.save();
    res.send({
      message: "Product added successfully!",
      err: false,
      product,
      status: 200,
    });
  } catch (err) {
    res.send({
      status: 400,
      err,
      message: "Something went wrong",
    });
  }
};

const singleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findById({ _id: id });
    res.send({
      message: "singleProduct",
      err: false,
      status: 200,
      product,
    });
  } catch (err) {
    res.send({
      status: 400,
      err,
      message: "Something went wrong",
    });
  }
};

const DeleteProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    await ProductModel.findByIdAndDelete(_id);
    res.send({
      message: "product deleted Succefully",
      err: false,
      status: 200,
    });
  } catch (err) {
    res.send({
      message: "Something went wrong",
      err,
      err: true,
      stateus: 400,
    });
  }
};

const UpdateProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    await ProductModel.findByIdAndUpdate(_id);
    res.send({
      message: "product updated Succefully",
      err: false,
      status: 200,
    });
  } catch (err) {
    res.send({
      message: "Something went wrong",
      err,
      err: true,
      stateus: 400,
    });
  }
};

const SearchProduct = async (req, res) => {
  const { q } = req.query;

  try {
    ProductModel.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: new RegExp(`${q}`, `i`) } },
            { category: { $regex: new RegExp(`${q}`, `i`) } },
            { brand: { $regex: new RegExp(`${q}`, `i`) } },
          ],
        },
      },
      {
        $facet: {
          data: [{ $limit: 6 }],
          count: [{ $count: "total" }],
        },
      },
    ])
      .then((result) => {
        let data = result[0].data;
        let count = result[0].count[0].total;
        res.send({
          message: "Query successful",
          status: 1,
          data: data,
          total: count,
          error: false,
        });
      })
      .catch((error) => {
        res.send({
          message: "Something went wrong" + error,
          status: 0,
          error: true,
        });
      });
  } catch (err) {
    console.log(err);
    res.send({
      message: "Something went wrong",
      err,
      err: true,
      stateus: 400,
    });
  }
};

module.exports = {
  getProduct,
  addProduct,
  singleProduct,
  DeleteProduct,
  UpdateProduct,
  SearchProduct,
};
