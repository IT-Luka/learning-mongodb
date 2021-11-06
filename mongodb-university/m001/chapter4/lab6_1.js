console.log(
  db.trips
    .find({
      "start station location.coordinates.0": { $lt: -74 },
    })
    .count()
);
