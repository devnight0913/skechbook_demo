const mongoose = require("mongoose");

const SubmissionsSchema = new mongoose.Schema({
  lid: String,
  createdAt: {
    $date: Date,
  },
  updatedAt: {
    $date: Date,
  },
  ownerId: String,
  projectId: String,
  digitized: Boolean,
  digitizationFiles: [String],
  frontPage: String,
  status: String,
  identifier: String,
  title: String,
  theme: String,
  artistName: String,
  artistEmail: String,
  artistAge: Number,
  returnedAt: {
    $date: Date,
  },
  artistStatement: String,
  address: {
    countryCode: String,
    city: String,
    stateName: String,
    zip: String,
  },
  mediums: [
    {
      tagId: String,
      tag: String,
    },
  ],
  subjects: [
    {
      tagId: String,
      tag: String,
    },
  ],
  tags: [
    {
      tagId: String,
      tag: String,
    },
  ],
  occupation: {
    tagId: String,
    tag: String,
  },
  catalog: {
    id: String,
    themeNum: String,
    section: Number,
    number: Number,
  },
  views: Number,
  mobileCheckouts: Number,
  migrated: Boolean,
  twoSpread: Boolean,
  digitizationId: String,
  oldCatalogId: String,
  damagedInFire: Boolean,
});

module.exports = Submissions = mongoose.model("submissions", SubmissionsSchema);
