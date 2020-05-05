/*


*/
// Text helper  
Template.registerHelper("truncate", function (text, n) {
    if (text && !n) {
        return text.substring(0, 400)
    }

    if (text && n) {
        return text.substring(0, parseInt(n))
    }
});
// Render Array renderArr - text to array.
Template.registerHelper('renderArr', function (string) {
    if (string) {
        return string.split(',');
    }
});
// Arrayfiy
Template.registerHelper('arrayify', function (obj) {
    var obj = _.omit(obj, '_id' , 'isStat')
    var result = [];
    for (var key in obj) {
        result.push({
            name: key,
            value: obj[key]
        });
    }

    return result;
});
// Repeat 
Template.registerHelper('repeat', function (max) {
    if(max){
        return _.range(parseInt(max)); 
    }else{
        return _.range(10); 
    }
});