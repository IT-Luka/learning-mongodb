console.log(
  db.listingsAndReviews
    .find({
      property_type: "House",
      amenities: "Changing table",
    })
    .count()
);
