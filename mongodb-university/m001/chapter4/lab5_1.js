console.log(
  db.companies
    .find({
      offices: { $elemMatch: { city: "Seattle" } },
    })
    .count()
);
