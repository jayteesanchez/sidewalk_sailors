var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:1234@ds041583.mongolab.com:41583/heroku_nq7f61dg');
var Pirate = require('./models/Pirate');
var Treasure = require('./models/Treasure');

// Remove all pirates
Pirate.remove({}, function(err, entry) {
    if (err) console.log(err);
    console.log('Pirates cleared out.');
});

Treasure.remove({}, function(err, entry) {
    if (err) console.log(err);
    console.log('Treasures cleared out.');
});

// Let's add some users
var dummyData = function() {};
Pirate.register(new Pirate({
    _id: "55d2ad76f7985b32e5f68ad2",
    username: 'bob@bob.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "15d2ad76f7985b32e5f68ad2",
    username: 'gary@gary.com',
    zipcode: '900017',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d2b5ed71fb50e2ec88caa9",
    username: 'maria@maria.com',
    zipcode: '90007',
    treasure_count: 200
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3599d71fb50e2ec88caab",
    username: 'mar@gmail.com',
    zipcode: '90001',
    treasure_count: 10
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3692cd1f6c10014ce825b",
    username: 'abe@gmail.com',
    zipcode: '90001',
    treasure_count: 90
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3693dd1f6c10014ce825c",
    username: 'rick@rick.com',
    zipcode: '90001',
    treasure_count: 140
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d36950d1f6c10014ce825d",
    username: 'shep@me.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d36b52d1f6c10014ce825e",
    username: 'one@two.com',
    zipcode: '90001',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e38def72d",
    username: 'howley.phil@gmail.com',
    zipcode: '90001',
    treasure_count: 1000
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e38def72e",
    username: 'one@maria.com',
    zipcode: '90001',
    treasure_count: 500
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e38def71d",
    username: 'a@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
  _id: "55d3d455d381c25e38def74d",
    username: 'b@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e38def82d",
    username: 'c@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e38def92d",
    username: 'd@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "65d3d455d381c25e38def72d",
    username: 'e@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d655d381c25e38def72d",
    username: 'f@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c34e38def72d",
    username: 'g@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "85d3d455d381c25e38def72d",
    username: 'h@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "25d3d455d381c25e38def72d",
    username: 'i@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d355d381c25e38def72d",
    username: 'j@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e22def72d",
    username: 'k@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "85d3d455d381c25e38def72d",
    username: 'l@ga.com',
    zipcode: '90065',
    treasure_count: 100
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d321c25e38def72d",
    username: 'm@ga.com',
    zipcode: '90076',
    treasure_count: 10
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455b381c25e38def72d",
    username: 'n@ga.com',
    zipcode: '90076',
    treasure_count: 20
}), '123', dummyData);
Pirate.register(new Pirate({
    _id: "55d3d455d381c25e38def72d",
    username: 'bryan@ga.com',
    zipcode: '90076',
    treasure_count: 60000
}), '123', dummyData);
Pirate.register(new Pirate({
  _id: "55d3d455d320c25e38def72d",
    username: 'maria@ga.com',
    zipcode: '90076',
    treasure_count: 700000
}), '123', dummyData);
Pirate.register(new Pirate({
  _id: "55d3d455d381c25e38def70d",
    username: 'jaytee@ga.com',
    zipcode: '90076',
    treasure_count: 80000
}), '123', dummyData);
Pirate.register(new Pirate({
    username: 'phil@ga.com',
    zipcode: '90076',
    treasure_count: 9000
}), '123', dummyData);

// Let's add some Treasures
var newTreasure = [
  // {
  //   name: "Couch",
  //   description: "fluffy and white",
  //   img_url: "http://farm6.static.flickr.com/5111/7245407644_321c720428_m.jpg",
  //   cross_street: "8th and S Hobart Blvd",
  //   pirate_id: mongoose.Types.ObjectId("15d2ad76f7985b32e5f68ad2")
  // },{
  //   name: "Sofa",
  //   description: "chair",
  //   img_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAcQjRxqFQoTCJPYt7TgsccCFcqXiAodPPEKBQ&url=http%3A%2F%2Fflickrhivemind.net%2FTags%2Fbookcase%2Ctexas%2FInteresting&ei=_K7SVZPqBMqvogS84qso&bvm=bv.99804247,d.cGU&psig=AFQjCNHPuq0EkEyvbX2oPfbSkVrUT7Rwnw&ust=1439957098658864",
  //   cross_street: "8th and S Hobart Blvd",
  //   pirate_id: "55d3d455d320c25e38def72d"
  // },
  {
    name: "Bookcase",
    description: "Small bookcase, Okay condition. ",
    img_url: "http://farm6.static.flickr.com/5111/7245407644_321c720428_m.jpg",
    cross_street: "Walnut Dr and Nadeau",
    pirate_id: "55d2ad76f7985b32e5f68ad2",
    zipcode: "90001"
  },
  {
    name: "Couch",
    description: "Yellow old couch",
    img_url: "http://farm1.static.flickr.com/51/179159309_d66ec63c1d.jpg",
    cross_street: "E Gage and Compton",
    pirate_id: "55d2ad76f7985b32e5f68ad2",
    zipcode: "90001"
  },
  {
    name: "Sofa",
    description: "Striped Couch, okay condition",
    img_url: "http://farm1.static.flickr.com/8/8499493_a002ca837d.jpg",
    cross_street: "Florence and S Central",
    pirate_id: "55d3d455d381c25e38def70d",
    zipcode: "90001"
  },  {
    name: "Bookcase and Chair",
    description: "Good condition. ",
    img_url: "https://aroomwithaviewinsf.files.wordpress.com/2014/05/littefreelibrary013_web.jpg",
    cross_street: "Walnut Dr and Nadeau",
    pirate_id: "55d2ad76f7985b32e5f68ad2",
    zipcode: "90001"
  },
  {
    name: "Velvet Couch",
    description: "Velvet pink old couch.",
    img_url: "http://www.joshshalek.com/wp-content/uploads/2012/08/halsey-couch2.jpg",
    cross_street: "E Gage and Compton",
    pirate_id: "55d2ad76f7985b32e5f68ad2",
    zipcode: "90001"
  },
  {
    name: "Couch and Rug!",
    description: "Two for one. Good rug.",
    img_url: "https://ladyandria.files.wordpress.com/2009/07/misc2-110.jpg",
    cross_street: "Florence and S Central",
    pirate_id: "55d3d455d381c25e38def70d",
    zipcode: "90001"
  },  {
    name: "Bookcase Headboard",
    description: "Great condition. ",
    img_url: "http://api.ning.com/files/MV0OCTH05XW0uYGbxNbXIoxRtK0DOAx6sddPKL4x8ZNi6ua9WM8RxIuBRuP3P7Pf2Ph8w3I6i124-Kusxy0D6L32lx*-bi4y/594.JPG",
    cross_street: "Walnut Dr and Nadeau",
    pirate_id: "55d2ad76f7985b32e5f68ad2",
    zipcode: "90001"
  },
  {
    name: "Loveseat",
    description: "Leather, loveseat. Nice.",
    img_url: "http://cache2.asset-cache.net/gc/88640326-bright-orange-couch-on-city-sidewalk-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=d1tVENS9v1HNRIYnkW6O6zf2reARnIcoOK1854mj8xg%3D",
    cross_street: "7th and Western Ave",
    pirate_id: "55d3d455d321c25e38def72d",
    zipcode: "90076"
  },
  {
    name: "Glass Bookcase",
    description: "Sweetness",
    img_url: "https://ashandorange.files.wordpress.com/2012/09/bookcaseafer2.jpg?w=620",
    cross_street: "8th and Serrano Ave",
    pirate_id: "55d3d455d321c25e38def72d",
    zipcode: "90076"
  },
  {
    name: "Flower Couch",
    description: "Flower design, okay condition",
    img_url: "http://latimesblogs.latimes.com/photos/uncategorized/2008/03/25/chintz_2.jpg",
    cross_street: "Florence and S Central",
    pirate_id: "55d3d455d321c25e38def72d",
    zipcode: "90076"
  },
  {
    name: "Red reader chair",
    description: "Flower design, old",
    img_url: "http://4.bp.blogspot.com/-MGM-tH9t6as/UHHkZhoQL9I/AAAAAAAAB_8/DYzraq7nbXE/s1600/frank-hodel.jpg",
    cross_street: "7th and Western Ave",
    pirate_id: "55d3d455d321c25e38def72d",
    zipcode: "90076"
  },
  {
    name: "Two Tv's",
    description: "Idk if they work",
    img_url: "https://a0.muscache.com/locations/uploads/photo/image/21901/0_4000_0_2667_one_free-tv-sidewalk-devon0359.jpg",
    cross_street: "8th and Bronson",
    pirate_id: "55d3d455d321c25e38def72d",
    zipcode: "90076"
  },
  {
    name: "Black and White Drawers",
    description: "Where's the rest?",
    img_url: "http://www.retailhellunderground.com/.a/6a00e54f10a0988834014e600fef58970c-500wi",
    cross_street: "Florence and S Central",
    pirate_id: "55d3d455d321c25e38def72d",
    zipcode: "90076"
  },
  {
    name: "Single Chair",
    description: "Folding chair",
    img_url: "http://photos-public-domain.com/wp-content/uploads/2010/12/empty_chair-600x400.jpg",
    cross_street: "Figueroa and W 30th",
    pirate_id: "55d2b5ed71fb50e2ec88caa9",
    zipcode: "90007"
  },
  {
    name: "Water Damaged Chair",
    description: ";/",
    img_url: "http://lioninoil.net/blog/wp-content/uploads/2008/03/chair04.jpg",
    cross_street: "Jefferson and McClintock",
    pirate_id: "55d2b5ed71fb50e2ec88caa9",
    zipcode: "90007"
  },
  {
    name: "Mattress and Box",
    description: "Not bad",
    img_url: "http://seeclickfix.com/files/issue_images/0008/1472/mattress.jpg",
    cross_street: "Flower and 33rd",
    pirate_id: "55d2b5ed71fb50e2ec88caa9",
    zipcode: "90007"
  },
  {
    name: "Leather Sofa",
    description: "Super nice. Got rained on ",
    img_url: "http://www.theamericanconservative.com/wp-content/uploads/2014/09/Brookyln-sidewalk-couch-dresser-554x416.jpg",
    cross_street: "Division and Sunny Heights Dr",
    pirate_id: "55d3d455d381c34e38def72d",
    zipcode: "90065"
  },
  {
    name: "Old Tv",
    description: "Works Apparently",
    img_url: "http://sfcitizen.com/blog/wp-content/uploads/2013/01/7J7C7346-copy.jpg",
    cross_street: "Verdugo and Arthur",
    pirate_id: "55d3d455d381c34e38def72d",
    zipcode: "90065"
  },
  {
    name: "Really Old Tv",
    description: "Vintage-ish",
    img_url: "https://c1.staticflickr.com/9/8067/8200730407_6350345fc0.jpg",
    cross_street: "Division and Sunny Heights Dr",
    pirate_id: "55d3d455d381c34e38def72d",
    zipcode: "90065"
  },
  {
    name: "Glass Bookcase",
    description: "Old school",
    img_url: "https://ashandorange.files.wordpress.com/2012/09/bookcase-before.jpg?w=620",
    cross_street: "Fletcher and Delay",
    pirate_id: "55d3d455d381c34e38def72d",
    zipcode: "90065"
  },

];

Treasure.create(newTreasure, function(err, treasures){
  if (err) console.log(err);
  console.log(Treasures.length + 'Treasures created!');
  mongoose.disconnect();
});

console.log('Disconnected from MongoDB.');
