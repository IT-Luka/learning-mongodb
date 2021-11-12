console.log(
  db.trips
    .find({ "birth year": { $gt: 1 } }, { "birth year": 1 })
    .sort({ "birth year": -1 })
    .limit(1)
);
