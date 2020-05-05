App = {}
/*
    Settings Collection
    Setting Functions
    Settings Helpers
*/
/*=============================================
=            Setting Collection            =
=============================================*/
Settings = new Mongo.Collection(null);
/*=============================================
=            Startup            =
=============================================*/
Meteor.startup(function () {
    Settings.insert({
        name: 'current',
        isCurrent: true
    });
});
/*============================================= 
            Setting Actions
=============================================*/
//  Settings .
App.addSetting = function (data) {
    var isExist = Settings.findOne({
        name: data.name
    });
    if (!isExist) {
        Settings.insert(data);
    }
}
// Set The Setting as Obj.
App.setSetting = function (obj) {
    Settings.update({
        isCurrent: true
    }, {
        $set: obj
    });
}
// Get The Settings
App.getSetting = function (key) {
    var setting = Settings.findOne({
        isCurrent: true
    });
    if (setting) {
        return setting[key]
    }
}
App.setSettings = (settings)=>{
    // Settings Array of Objects
    console.log('setSettings',settings)
    var settings = App.jsonString(settings);
    _.each(settings, (setting)=>{
        App.setSetting(setting);
    });
}
/*
    Reset Settings
    - settings Array
*/
App.resetSettings = (settings)=>{
    var settings = settings.replace(/\s/g, '');
    var settings = settings.split(',')
    _.each(settings,(i)=>{
        App.setSetting({[i]:null})
    })
}
/*
    # Push into array of Settings 
    ### ex. : as menu array
*/
App.pushSetting = (i) => {
    // { sets : {'h': new Date()}
    Settings.update({
        isCurrent: true
    }, {
        $push: i
    });
}
/*=============================================
=                // var action = Settings.findOne({
    //     command: i
    // });
    // var action = App.findSetting('command' , i)            =
=============================================*/
App.findSetting = (key,val) =>{
    var setting = Settings.findOne({[key] : val});
    return setting;
}
/*=============================================
=            Set Object as a Setting         =
=============================================*/
App.setSettingObj = (d) => {
    if (d && d.name) {
        App.setSetting({
            [d.name]: d
        })
    }
}
/*=============================================
=            App.toggleSetting            =
=============================================*/
App.toggleSetting = (setting)=>{
    var current = App.getSetting(setting);
    if (current) {
        App.setSetting({
            [setting]: false
        });
    } else {
        App.setSetting({
            [setting]: true
        })
    }
    console.log('App.toggleSetting : ',App.getSetting([setting]))
}
/*============================================= 
            Setting Helpers
=============================================*/
Template.registerHelper('setting', (item, key) => {
    if (item && key) {
        var obj = App.getSetting(item);
        if (obj) {
            return obj[key]
        }
    } else if (item) {
        return App.getSetting(item)
    }
})
/*=============================================
=            Section comment block            =
=============================================*/
Template.registerHelper('getSetting', (setting) => {
    return App.getSetting(setting)
})
/*=============================================
=            Get Item Object            =
=============================================*/
Template.registerHelper('getObj', (obj, o) => {
    if (o == 'key') {
        var k = _.keys(obj)[0]
        return k;
    } else if (o == 'val') {
        var v = _.values(obj)[0]
        return v;
    }
});
// JSON UI Query
/*
    JSON Query Front end
    - t/true => true , n/null = null , f/false = false
    q = "login : t , register : n"
*/
var string = '{"id": "name2", "label": "Quantity"}'
var q = "login : t , register : f";
App.jsonString = (str) => {
    // var str = '[' + strx + ']'
    // var json = JSON.parse(strx);
    // console.log(json)
    var obj = []
    var str = str.replace(/\s/g, '');
    var t = [true, 't', 'true']
    var f = [false, 'f', 'false']
    var arr = str.split(',')
    _.each(arr, (i) => {
        var o = i.split(':')
        if (_.contains(t, o[1])) {
            var p = {
                [o[0]]: true
            }
            obj.push(p)
        } else if (_.contains(f, o[1])) {
            var p = {
                [o[0]]: false
            }
            obj.push(p)
        } else {
            var p = {
                [o[0]]: o[1]
            }
            obj.push(p)
        }
    });
    console.log(obj)
    return obj
}
/*
    - Using Body events.
*/
Template.body.events({
    'click .runModal': (e) => {
        e.preventDefault();
        var modal = $(e.currentTarget).attr('data-modal');
        var options = $(e.currentTarget).attr('data-id');
        App.modal(modal, options)
    },
    'click .call': (e) => {
        e.preventDefault();
        // <label class="checkbox call" data-call="realtimeCheck" data-options="item" data-response="realtimeResponse">
        var method = $(e.currentTarget).attr('data-call');
        // var options = App.getSetting($(e.currentTarget).attr('data-options'));
        var options = $(e.currentTarget).attr('data-options')
        var response = $(e.currentTarget).attr('data-response');
        // console.log('Actions .call : ', method, options, response)
        if (method && options && response) {
            App.runMethod(method, options, response);
        }
    },
    'click .setSetting': (e) => {
        e.preventDefault();
        var setting = $(e.currentTarget).attr('data-setting');
        var value = $(e.currentTarget).attr('data-val');
        App.setSetting({
            [setting]: value
        });
    },
    'click .setSettings': (e) => {
        e.preventDefault();
        var settings = $(e.currentTarget).attr('data-settings');
        App.setSettings(settings);
    },
    'click .submitForm': (e) => {
        e.preventDefault();
        var id = $(e.currentTarget).parents("form").attr('id');
        var data = App.getFormData('#' + id);
        data.hasData = true;
        if (App.getSetting('formType') == 'custom') {
            console.log('app.control.js submitForm : Custom Form')
            data.data = App.getSetting('formData');
        }
        // actions : commands/ methods/
        var i = $('#inputCommand').val()
        if (i) {
            App.command(data);
            App.loading(true, 300);
            // [FIX] App.setDefault('settingValue')
            App.setSetting({
                actionTemplate: 'scrapForm'
            })
        } else {
            console.log(data)
            Bert.alert('There is NO command', 'warning');
        }
    },
    'click .toggleSetting': (e) => {
        e.preventDefault();
        var setting = $(e.currentTarget).attr('data-setting');
        console.log('action',setting)
        App.toggleSetting(setting)
    },
    'click .pushSetting' : (e)=>{
        e.preventDefault();
        var setting = $(e.currentTarget).attr('data-setting');
        var value =  $(e.currentTarget).attr('data-val');
        Settings.update({name : 'current'},{$push:{[setting]:value}})
    },
    'click .setNext' : (e)=>{
        e.preventDefault();
        var next = $(e.currentTarget).attr('data-next');
        App.setSetting({mainTemplate : next});
    },
    'click .setAction':(e)=>{
        e.preventDefault();
        var action = $(e.currentTarget).attr('data-action');
        if(App[action]){
            App[action]()
        }else{
            console.log('_boot.js :  action is not defined')
        }
        
    }
});

App.logout = ()=>{
    Meteor.logout()
}

App.runMethod = (method, options, response) => {
    if (method && options && response) {
        Meteor.call(method, options, (err, result) => {
            if (!err) {
                // if (_.isFunction(iDM[response])) {
                //     iDM[response](result);
                // } else {
                //     console.log('Event .call : Unidentified Response Function : ', response)
                // }
                console.log('MethodCall :'+method+' - Success')
            } else {
                console.log('Event .call', err)
            }
        })
    }
}

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

Template.registerHelper('repeat', function (max) {
    if(max){
        return _.range(parseInt(max)); 
    }else{
        return _.range(10); 
    }
});
