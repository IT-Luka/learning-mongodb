console.log(
  db.inspections
    .find({
      result: "Out of Business",
      sector: "Home Improvement Contractor - 100",
    })
    .count()
);
