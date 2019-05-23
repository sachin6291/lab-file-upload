const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const YoloSchema = Schema({
  creatorId: Schema.Types.ObjectId,
  content: String,
  imgName: String,
  imgPath: String
});

const Yolo = mongoose.model("Yolo", YoloSchema);

module.exports = Yolo;
