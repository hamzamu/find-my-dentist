import {
    Template
} from 'meteor/templating';
import './auth.html'
/*=============================================
    UI Configuration
=============================================*/
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
})
/*=============================================
=           Lock    =
=============================================*/
App.lock = () => {
    App.setSetting({
        locked: true,
        user: Meteor.user().username
    })
    Meteor.logout();
    FlowRouter.go('/lock');
}
/*=============================================
=            Logout            =
=============================================*/
App.logout = () => {
    Meteor.logout()
}
/*=============================================
=            Startup         =
=============================================*/
Meteor.startup(() => {
    // Logout Function
    // var timeout = null;
    // $(document).on('mousemove', function () {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(function () {
    //         console.log('You have been idle for 3 mins');
    //         App.lock()
    //     }, 60000 * 3);
    // });
})
/*=============================================
=            Logout            =
=============================================*/
FlowRouter.route('/login', {
    name: 'login',
    action: function () {
        BlazeLayout.render("authLayout", {
            content: "login"
        });
    },
    triggersEnter: [function (context, redirect) {
        if (Meteor.userId()) {
            FlowRouter.go('/');
        }
    }]
});


FlowRouter.route('/lock', {
    name: 'lock',
    action: function () {
        BlazeLayout.render("authLayout", {
            content: "lockScreen"
        });
    },
    triggersEnter: [function (context, redirect) {
        if (Meteor.userId()) {
            FlowRouter.go('/');
        }
    }]
});


/*=============================================
                Login
=============================================*/
Template.loginForm.events({
    'click .doLogin': function (e) {
        e.preventDefault();
        var username = $('.username').val();
        var password = $('.password').val();
        // App.loading(true, 540)
        Meteor.loginWithPassword(username, password, function (err) {
            if (err) {
                console.log(err)
                App.alert('Login Error', err.message, 'error')
            } else {
                // App.alert('Login Success', '', 'success')
                FlowRouter.go('/')
            }
        })
    }
})
/*
    Lock Screen
*/
Template.lockScreen.onRendered(()=>{
    Tracker.autorun(()=>{
        var  isLocked = App.getSetting('user') || null;
        if(!isLocked){
            FlowRouter.go('/login')
        }
    })
})
Template.lockScreen.events({
    'click .unlock': (e) => {
        e.preventDefault();
        let username = App.getSetting('user') || null;
        var password = $('.pass').val()
        Meteor.loginWithPassword(username, password, function (err) {
            if (err) {
                console.log(err)                
                App.alert('Access Error', err.message, 'error')
                FlowRouter.go('/login')
            } else {
                FlowRouter.go('/')
            }
        })
    }
})
/*=============================================
=          Register          =
=============================================*/
Template.registerForm.events({
    'click .register': function (e) {
        e.preventDefault();
        var username = $('.username').val()
        var email = $('.email').val()
        var password = $('.password').val()
        var password2 = $('.password2').val();
        if (password !== password2) {
            App.alert('Password Error', 'The password does not match. Please try again', 'error');
            return
        }
        var user = {
            username: username,
            password: password,
            email: email
        }
        Meteor.call('newUser', user, (err) => {
            if (!err) {
                App.resetSettings('register')
                App.alert('Account Created: Awaiting Permission', 'Awaiting Access Permission from Admins', 'success');
            } else {
                App.alert('Registeration Error', 'Choose another username', 'error');
            }
        })
    },
    'change .npasword': function (e) {
        e.preventDefault()
    }
});