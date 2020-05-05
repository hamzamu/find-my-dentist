/*
    Routes
*/
BlazeLayout.setRoot('body');
Routes = [];
var main = {
    name: 'main',
    url: '/',
    template: 'main',
    layout: 'mainLayout'
}
// Routes.push(main)

_.each(Routes, function (route) {
    FlowRouter.route(route.url, {
        name: route.name,
        action: function () {
            BlazeLayout.render(route.layout, {
                content: route.template
            });
        }
    });
});
App.route = function (route) {
    Routes.push(route)
}
//
FlowRouter.notFound = {
    name: 'notFound',
    action: function () {
        BlazeLayout.render('mainLayout', {
            content: 'notFound'
        });
    }
};