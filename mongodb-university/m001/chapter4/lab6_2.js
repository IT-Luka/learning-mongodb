console.log(
  db.inspections
    .find({
      "address.city": "NEW YORK",
    })
    .count()
);
