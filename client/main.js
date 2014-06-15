Template.blog.events({

  'submit #blogForm': function (e, templ) {
    e.preventDefault();

    var title = templ.find('#blogTitle').value,
        body = templ.find('#blogBody').value;

    Meteor.call('submitPost', title, body);

  }
})

Template.listBlogs.blogs = function () {
  return Blogs.find();
}