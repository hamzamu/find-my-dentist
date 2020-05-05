/*
 */
import _ from 'lodash';
Demo = {}
Demo.names = ["Jerrie Sung", "Omega Gillies", "Deedee Marinelli", "Evangelina Turek", "Rosann Brunk", "Ka Larocco", "Ginger Amar", "Leann Jaimes", "Solange Dahm", "Melani Barrientez", "Marcellus Hower", "Angelia Brainard", "Penelope Lafler", "Bridgett Ryman", "Alla Ahn", "Laurena Decaro", "Milissa Sequeira", "Hector Unsworth", "Bulah Stough", "Clyde Mcewan"];
Demo.fname = ["Marcus", "Shaquana", "Cleo", "Shawanda", "Oscar", "Dorothy", "Louie", "Pandora", "Evelyne", "Berenice", "Arletta", "Daisey", "Allan", "Harley", "Carletta", "Rosalva", "Myrtice", "Elijah", "Rusty", "Erasmo", "Bonita", "Charley", "Carrol", "Sharleen", "Virgil", "Kyra", "Lourdes", "Louis", "Afton", "Meredith", "Ines", "Joane", "Leona", "Dawne", "Rigoberto", "Marcela", "Tameka", "Ardelle", "Ahmed", "Joannie", "Holly", "Adrienne", "Darlena", "Marlin", "Lilla", "Elfrieda", "Jorge", "Cinderella", "Graig", "Mignon"]
Demo.int = _.range(5);
Demo.bool = [true, false];
Demo.lorem = [];
Demo.emails = ["tangsh@yahoo.com", "alias@outlook.com", "jbuchana@me.com", "kodeman@aol.com", "hermes@verizon.net", "bbirth@live.com", "bryanw@gmail.com", "wetter@optonline.net", "csilvers@att.net", "frikazoyd@live.com", "osrin@optonline.net", "crobles@mac.com", "tromey@comcast.net", "jmorris@verizon.net", "wayward@hotmail.com", "phish@live.com", "bastian@gmail.com", "mxiao@icloud.com", "gbacon@att.net", "mpiotr@sbcglobal.net", "mbrown@me.com", "chance@aol.com", "sabren@hotmail.com", "markjugg@verizon.net", "zilla@outlook.com", "rohitm@icloud.com", "saridder@live.com", "ingolfke@me.com", "cgcra@mac.com", "kramulous@sbcglobal.net", "yxing@gmail.com", "madanm@comcast.net", "skythe@yahoo.ca", "nimaclea@yahoo.ca", "ntegrity@mac.com", "arnold@verizon.net", "ghost@att.net", "panolex@optonline.net", "rjones@msn.com", "khris@me.com", "pdbaby@yahoo.com", "stinson@yahoo.ca", "frederic@mac.com", "violinhi@icloud.com", "frosal@outlook.com", "jonadab@msn.com", "gordonjcp@verizon.net", "citizenl@verizon.net", "webteam@hotmail.com", "jmmuller@gmail.com"];
Demo.status = ["active", "disabled", "trashed"];
Demo.time = ["today", "tomorrow", "nextWeek", "lastWeek", "nextMonth", "thisMonth", "lastMonth", "thisYear", "lastYear"];
Demo.range = []
Demo.address = ["26 Schoolhouse St.", "Cumberland, RI 02864", "8263 School Street", "North Olmsted, OH 44070", "9498 Squaw Creek Drive", "Roanoke Rapids, NC 27870", "92 Rockwell Ave.", "Mason City, IA 50401", "178 Pumpkin Hill St.", "Buffalo, NY 14215", "635 West Warren Ave.", "Saint Paul, MN 55104", "9617 Oakland Street", "New York, NY 10002", "13 S. San Pablo Drive", "Saginaw, MI 48601", "7831 Elmwood St.", "Youngstown, OH 44512", "541 W. Pilgrim Court", "Brainerd, MN 56401", "8771 W. Tarkiln Hill St.", "West Hempstead, NY 11552", "308 N. Cedar Rd.", "Painesville, OH 44077", "7016 Gonzales Dr.", "Lakeland, FL 33801", "9026 Summit Street", "Fort Mill, SC 29708", "61 South Lake Forest Street", "Camas, WA 98607", "7183 Grove St.", "Teaneck, NJ 07666", "482 Meadow Drive", "Morrisville, PA 19067", "89 Garden Ave.", "Summerfield, FL 34491", "8558 Valley St.", "Toms River, NJ 08753", "9559 Miller St.", "Lake Jackson, TX 77566", "7388 Virginia St.", "Saint Cloud, MN 56301", "56 Bellevue Rd.", "Goldsboro, NC 27530", "32 Plumb Branch Road", "Williamstown, NJ 08094", "3 Center Drive", "Evansville, IN 47711", "779 Lake View Rd.", "Burnsville, MN 55337", "76 Bank Street", "Durham, NC 27703", "72 Shub Farm St.", "Dekalb, IL 60115", "8704 Lyme Street", "Hamden, CT 06514", "2 Longfellow Street", "Southington, CT 06489", "529 Elm Street", "Eugene, OR 97402", "694 Fairground Street", "Cape Coral, FL 33904", "703 Honey Creek Drive", "Piscataway, NJ 08854", "75 Princess St.", "Owatonna, MN 55060", "942 North Park St.", "Lancaster, NY 14086", "8 School Drive", "Muskogee, OK 74403", "887 Lincoln Drive", "Jamaica, NY 11432", "9588 Maple Ave.", "Chelsea, MA 02150", "1 Corona Road", "Mundelein, IL 60060", "7081 Ramblewood Rd.", "Greenwood, SC 29646", "635 San Pablo Rd.", "Jacksonville, NC 28540", "8978 Linda Ave.", "Westbury, NY 11590", "9517 Chapel Street", "Venice, FL 34293", "63 Glenwood Street", "San Lorenzo, CA 94580", "274 S. Airport Dr.", "Schererville, IN 46375", "8696 Wall St.", "Janesville, WI 53546", "1 Jackson St.", "Downers Grove, IL 60515", "7351 Prospect St.", "Mount Laurel, NJ 08054", "9465 State Avenue", "Garland, TX 75043", "418 Taylor St.", "Brick, NJ 08723", "31 West Rockland Avenue", "Rockledge, FL 32955"]
Demo.workerStatus = ['inDuty', 'offDuty']
Demo.areas = [""]
Demo.colors = ["danger", "success", "primary", "warning", "dark", "info", "light", "orange"]
Demo.tags = ["danger", "success", "primary", "warning", "dark", "info", "light"]
Demo.check1 = ["Bedside oxygen & suction", "Patient bedside notes holder", "Clinical stations, corridors & bays", "Commodes", "Patient weighing scales", "Blood analysis machines", "Clean & dirty utility", "PDAs (VitalPac)", "Patient hoist", "Medical/clinical equipment (inc. items attached to patients)", "Bed frames", "Crash trolley"]
Demo.phones = ["(269) 872-5346","(803) 616-5571","(947) 758-3481","(273) 445-7235","(987) 652-0984","(327) 578-0635","(805) 463-3845","(551) 511-0564","(376) 896-1666","(293) 687-9606"]
Dummy = new Mongo.Collection(null);
Missing = new Mongo.Collection(null);
Meteor.startup(() => {})
Meteor.startup(() => {

    var isExists = Dummy.findOne({
        type: 'ints'
    });
    if (!isExists) {
        Dummy.insert({
            numbers: _.range(100),
            type: 'ints'
        });
    }
    // 
    // Meteor.setInterval(()=>{
    //     Demo.createRandomArrayInt()
    // },_.random(100,200)*1000)
    // Create 100 Document
    _.each(_.range(100), (i) => {
        Dummy.insert({
            isDoc: true,
            id: i,
            int: _.sample(Demo.int),
            nu: _.random(10, 40),
            type: 'ints',
            b: _.sample(Demo.bool),
            chInt: _.random(100),
            val: _.random(10, 40)
        });
    });
    //  Adding Missing 
    _.each(_.range(10), (i) => {
        Missing.insert({
            u: 'j',
            int: _.random(10),
            b: _.sample(Demo.bool),
            createdAt: new Date()
        })
    })
    //  Adding missings with Interval
    Meteor.setInterval(() => {
        var x = _.range(_.random(1, 2));
        _.each(x, (i) => {
            Meteor.setTimeout(() => {
                Missing.insert({
                    u: 'j',
                    int: _.random(10),
                    b: _.sample(Demo.bool),
                    createdAt: new Date()
                })
            })
        }, _.random(4) * 5700)
    }, _.random(3000, 12000))
    // REMOVE 
    Meteor.setInterval(() => {
        Meteor.setTimeout(() => {
            Missing.remove({
                int: _.random(10),
            });
        }, _.random(9) * 1190);
    }, _.random(3000, 15000))
    //
});
Template.registerHelper('m', () => {
    return Missing.find().count()
})
Demo.createRandomArrayInt = () => {
    c = _.range(_.random(10, 40))
    _.each(c, (i) => {
        var id = _.random(1, 100);
        Dummy.update({
            id: id
        }, {
            val: _.random(10, 40)
        })
    })
}
Template.registerHelper('random', (n,m) => {
    var r = Missing.find().count()
    if (r) {
        return r + _.random(parseInt(n),parseInt(m))
    } else {
        return _.random(parseInt(n),parseInt(m))
    }
})
// Get Single or List from Array or Object 
// if  single => _.sample , or array
Demo.get = (arr) => {
    // if ( type ) => sample or List
    return _.sample(arr);
}
// Get Object Card
Demo.getCard = (src, type, filter) => {}
// Get Array From Objects 
Demo.getArr = () => {}
//  Render Array String into Array of Objects
Demo.renderArrStr = () => {}
// 
Demo.randomInt = (n, m) => {
    return _.random(parseInt(n), parseInt(m))
}
Demo.randomInt(10, 100)
// 
Demo.push = () => {}
Demo.manager = () => {}
Demo.rtBot = (speed, col) => {}
Demo.setSettings = () => {}
Demo.watcher = () => {}
//  DEMO Template Helpers

// DUMMY
Template.registerHelper('randomStatic', (n, m) => {
    return Demo.randomInt(n, m)
})
// 
Template.registerHelper('dummy', (arr) => {
    return Demo.get(Demo[arr])
})
// 
Template.registerHelper('dummySetting',(arr)=>{
    return _.sample(App.getSetting(arr))
})
// 
Template.registerHelper('getDummyStatus', () => {
    return _.sample(['is-danger', 'is-success'])
});
Template.registerHelper('renderStatus', (st) => {
    var stats = {};
    stats.active = 'is-success';
    stats.inActive = 'is-danger';
    stats.missing = 'is-danger has-border-danger';
    stats.critical = 'is-success';
    stats.hasManager = 'is-success'
    if (stats[st]) {
        return stats[st]
    }
});
Template.registerHelper('drandom', (n, m, t) => {
    x = _.sample(App.getSetting('random'))
    // var x = _.range(1000)
    // var x = x[_.random(parseInt(n))];
    // x =  _.sample(App.getSetting('random'))
    return x;
})
//  USING MISSING COLLECTION ( USED DUMMY CONNECTION INSTEAD AND INSERT RANDOM STUFF )
Template.registerHelper('missingDemo', (n) => {
    var n = parseInt(n) || _.random(5);
    return Missing.find({
        b: _.sample(Demo.bool),
        // int : _.random(10)
    }, {
        sort: {
            createdAt: -1
        },
        limit: n
    }).fetch()
})

Template.registerHelper('dummySampleArray', (src) => {
    var arr = App.getSetting(src);
    return arr;
})
// 