Meteor.publish('blogs', function () {
  return Blogs.find();
})

Meteor.methods({
  'submitPost': function  ( title , body ) {
    console.log(title);
    console.log(body);

    Blogs.insert({
      title: title,
      body: body
    })
  }
})