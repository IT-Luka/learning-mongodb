console.log(
  db.listingsAndReviews.aggregate([
    {
      $group: {
        _id: "$room_type",
      },
    },
  ])
);
