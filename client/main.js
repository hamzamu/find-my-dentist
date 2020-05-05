import {
    Template
} from 'meteor/templating';
import './main.html';
import './app/app.html';
import './_boot/settings.js';
import './_boot/_routes.js';
import './_boot/actions.js';
// import './_boot/actions.js';
import './_boot/tools.js';
import '/imports/data.js'
// Auth
import './auth/auth.actions.js'
// DEMO JUNK
import '/imports/demo.js'
// CFForm JSON
import './algo.js'

// console.log(Algo)
// BULMA Calender
import bulmaCalendar from '/node_modules/bulma-calendar/dist/js/bulma-calendar.min.js';
import '/node_modules/bulma-calendar/dist/css/bulma-calendar.min.css';
//ww
// import 'conversational-form';
import cf from 'conversational-form';
Options = {
    default: 'home'
}
// MOBILE DEMO TESi
import './app/mobile.demo.html'

App.scrollBottom = ()=>{
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
}
Meteor.startup(() => {
    var main = 'home';
    // var main = "dentists";
    // var main = "dentistProfile";
    // var main = "FormAppointment";
    // var main = "formSuccess"
    // var main = "dentistMain"
    App.setSetting({
        main: main
    });
    // $("head").append('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/space10-community/conversational-form@0.9.83/dist/conversational-form.min.js" crossorigin></script>');

    Tracker.autorun(() => {
        var m = App.getSetting('main');
        if (m) {
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        }
    })


      
});
Template.mainLayout.onRendered(() => {
    // var main = 'home';
    // App.setSetting({
    //     main: main
    // });
    // 
    
    // WORKING*
    // var cfInstance = cf.startTheConversation(Algo);
    // document.getElementById("cf-contextx").appendChild(cfInstance.el);
    // // cfInstance.addTags(cformTags, true);
    
})
// 
Template.registerHelper('main', () => {
    return App.getSetting('main')
})
// 
// MODAL
Template.body.events({
    'click .setModal': (e) => {
        e.preventDefault();
        // Init The FullScreenModal
        var t = $(e.currentTarget).attr('data-template');
        App.setSetting({
            modal: t
        });
    },
    'click .closeModal': (e) => {
        e.preventDefault();
        App.setSetting({
            modal: null
        });
    }
})

// 

Template.body.events({
    'click .setSelectMod': (e) => {
        e.preventDefault()
        var type = $(e.currentTarget).attr('data-type')
        var val = $(e.currentTarget).attr('data-val');
        // console.log(type,val)
        App.setSetting({
            [type]: val,
            modal: null
        })
    },
    // used to set default view on clicks
    'click .setDefaultView': (e) => {
        e.preventDefault();
        App.setSetting({
            main: Options.default
        })
    }
})
Template.registerHelper("modal", () => {
    return App.getSetting('modal')
});
// Modal Init.
Meteor.startup(() => {
    Blaze.render(Template.shFSModal, $('body')[0]);
    Tracker.autorun(() => {
        var modal = App.getSetting('modal');
        if (modal) {
            Meteor.setTimeout(() => {
                $('.fsModal').addClass('active animated bounceInDown')
            }, 100)
        } else {
            Meteor.setTimeout(() => {
                // $('.fsModal').addClass('animated bounceOutDown')
                $('.fsModal').removeClass('active')
            }, 500)
        }
    });
})
// Random Animation
Template.registerHelper('randomAnimation', () => {
    var animation = ["bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rollIn", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "slideInDown", "slideInLeft", "slideInRight", "slideInUp"];
    return _.sample(animation);
})
// Repeat
Template.registerHelper('repeat', function (max) {
    if (max) {
        return _.range(parseInt(max));
    } else {
        return _.range(10);
    }
});
// @import url('/node_modules/bulma-calendar/dist/css/bulma-calendar.min.css');
Template.mDateForm.onRendered(() => {
    const calendars = bulmaCalendar.attach('[type="date"]',{
        minDate: new Date(),
        maxDate: '2018-12-31',
        dateFormat: 'yyyy-mm-dd',
    });
    calendars.forEach(calendar => {
        // Add listener to date:selected event
        calendar.on('date:selected', date => {
            // console.log(date);
            App.setSetting({
                selectedDate: date
            })
            Session.set('selectedDate', date)
            App.setSetting({modal:false});
        });
    });
})
// 
FlowRouter.route("/mob", {
    name: "appointment",
    action: () => {
        BlazeLayout.render('routeLayout', {
            content: 'mobileDemo'
        })
    }
})
Template.FormAppointment.onCreated(() => {})
Template.FormAppointment.onRendered(() => {


    App.scrollBottom()
    // const calendars = bulmaCalendar.attach('[type="date"]');
    var conversationalForm = $('#cform').conversationalForm({
        context: document.getElementById("cf-context"),
        robotImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg",
        userImage: "https://s3.amazonaws.com/uifaces/faces/twitter/sachagreif/128.jpg",
        flowStepCallback: function (dto, success, error) {
            console.log("dto....", dto, success, error);
            var currentStep = conversationalForm.flowManager.getStep() + 1;
            // var maxSteps = conversationalForm.flowManager.maxSteps; 
            // var ga_action = "Step " + currentStep + "/" + maxSteps;
            // var ga_label = "Field name - " + dto.tag.name; 
            // console.log('STEPS',currentStep,'maxSteps',maxSteps,'label',ga_label)
            // WORKING CODE TO OPEN MODAL AND SELECT FROM IT  //
            //-----------
            if (dto.tag.name == "Date") {
                App.setSetting({
                    modal: 'mDateForm'
                })
                Tracker.autorun(() => {
                    var date = Session.get('selectedDate')
                    if (date) {
                        // console.log('date', date.start)
                        // $('#date-x').val('Date..', date.start)
                        conversationalForm.addUserChatResponse('date  :' + String(date.start))
                        App.scrollBottom()
                        // console.log('s')
                        success();
                    }
                })
            } else {
                App.scrollBottom()
                // console.log('s')
                success()
            }
            //-----------
            // App.scrollBottom()
            // console.log('s')
            // success()
            // console.log('t',dto.tag.name,currentStep)
        },
        submitCallback: function () {
            // alert("Submit: check dev tools console for more");
            // be aware that this prevents default form submit.
            var formData = conversationalForm.getFormData();
            var formDataSerialized = conversationalForm.getFormData(true);
            console.log("Formdata:", formData);
            console.log("Formdata, serialized:", formDataSerialized);
            // conversationalForm.addRobotChatResponse("Check the dev console for FormatData output.");
            conversationalForm.addRobotChatResponse("You are done. Thank you.  <span class='Action tag is-dark is-outlined is-rounded is-small'>Done</span>");
            conversationalForm.remove();
            App.setSetting({
                main: 'formSuccess'
            })
            // FlowRouter.go('/')
        }
    })
})
// Template.FormAppointment.
/*
    Scroll Hidden Fix
    $('.inBox').height()
    $('.inBox')[0].scrollHeight
*/
Template.FormAppointment.events({
    'click .Action': (e) => {
        e.preventDefault()
        console.log('s')
    }
});

Template.registerHelper('getContent', (setting, key, def) => {
    var setting = App.getSetting(setting, key)
    if (setting) {
        return setting
    } else {
        return def
    }

})

Template.registerHelper('isValueSelected', (setting, key, style) => {
    var setting = App.getSetting(setting, key)
    if (setting) {
        return style
    }

})