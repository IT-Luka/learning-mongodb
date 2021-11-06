console.log(
  db.listingsAndReviews
    .find({
      property_type: "House",
      amenities: { $all: ["Changing table"] },
    })
    .count()
);
