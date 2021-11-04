console.log(
  db.companies
    .find({ $expr: { $eq: ["$permalink", "$twitter_username"] } })
    .count()
);
