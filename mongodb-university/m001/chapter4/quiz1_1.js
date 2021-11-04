console.log(db.inspections.find({'result': {'$eq': 'Out of Business'}, 'sector': {'$eq': 'Home Improvement Contractor - 100'}}).count())
