const born1998 = db.trips.find({'birth year': {'$eq': 1998}}).count();
const bornAfter1998 = db.trips.find({'birth year': {'$gt': 1998}}).count();

console.log(bornAfter1998 - born1998);
