console.log(
  db.companies
    .find({
      $and: [
        { $or: [{ founded_year: 2004 }, { founded_month: 10 }] },
        { $or: [{ category_code: "social" }, { category_code: "web" }] },
      ],
    })
    .count()
);
