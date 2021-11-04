console.log(db.zips.find({ pop: { $lt: 1000000, $gt: 5000 } }).count());
