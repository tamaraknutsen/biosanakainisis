Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/',
            {name: 'index'},
            function () { this.render('index') }
            );
Router.route('/location',
            {name: 'location'},
            function () { this.render('location') }
            );
Router.route('/schedule',
            {name: 'schedule'},
            function () { this.render('schedule') }
            );
Router.route('/rsvp',
            {name: 'rsvp'},
            function () { this.render('rsvp') }
            );
Router.route('/registry',
            {name: 'registry'},
            function () { this.render('registry') }
            );
Router.route('/lodging',
            {name: 'lodging'},
            function () { this.render('lodging') }
            );