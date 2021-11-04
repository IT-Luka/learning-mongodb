console.log(db.zips.find({pop: {'$lt': 1000}}).count())
