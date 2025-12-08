import asyncHandler from "express-async-handler";
import Residency from "../models/Residency.js";
import User from "../models/User.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
    startTime,
    endTime,
  } = req.body.data || req.body;

  try {
    // const user = await User.findOne({ email: userEmail });
    // if (!user) {
    //   return res.status(404).json({ message: "Owner not found" });
    // }

    const residency = await Residency.create({
      title,
      description,
      price,
      address,
      country,
      city,
      facilities,
      image,
      userEmail,
      startTime,
      endTime,
    });

    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export const getAllResidencies = async (req, res, next) => {
  try {
    const currentTime = new Date();
    const currentHours = currentTime.getHours().toString().padStart(2, "0");
    const currentMinutes = currentTime.getMinutes().toString().padStart(2, "0");
    const currentTimeString = `${currentHours}:${currentMinutes}`;

    // Find all residencies that haven't expired yet
    const residencies = await Residency.find({
      $or: [
        { endTime: { $gte: currentTimeString } },
        { endTime: { $exists: false } }, // For backward compatibility
      ],
    });

    res.status(200).send(residencies);
  } catch (err) {
    next(err);
  }
};

export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const residency = await Residency.findById(id);
  if (!residency) return res.status(404).json({ message: "Not found" });
  res.send(residency);
});

export const deleteResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const residency = await Residency.findById(id);
  if (!residency) return res.status(404).json({ message: "Not found" });
  await residency.deleteOne();
  res.send({ message: "Residency deleted successfully" });
});

export const updateResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, delete_time, country, city } = req.body;
  const residency = await Residency.findById(id);
  residency.title = title;
  residency.description = description;
  residency.price = delete_time;
  residency.country = country;
  residency.city = city;
  await residency.save();
  res.send({ message: "Residency updated successfully" });
});
