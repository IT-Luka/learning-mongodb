console.log(
  db.listingsAndReviews.find({
    accommodates: { $gt: 6 },
    reviews: { $size: 50 },
  })
);
