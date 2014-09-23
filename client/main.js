Template.blog.events({

  'submit #blogForm': function (e, tmpl) {
    e.preventDefault();

    var title = tmpl.find('#blogTitle').value,
        body = tmpl.find('#blogBody').value;

    Meteor.call('submitPost', title, body);

  }
})

var DateFormats = {
       short: "DD MMMM - YYYY",
       long: "dddd DD.MM.YYYY HH:mm"
};