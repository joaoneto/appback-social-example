var hoodie = new Hoodie();

document.getElementById('facebook-signin').addEventListener('click', function (e) {
  console.log(e);

  var options = {};

  hoodie.account.socialLogin('facebook', options)
    .done(function (data) {
      console.log(data);
    })
    .fail(function (err) {
      console.log(err);
    });

}, true);

document.getElementById('google-signin').addEventListener('click', function (e) {
  console.log(e);

  var options = {};

  hoodie.account.socialLogin('google', options)
    .done(function (data) {
      console.log(data);
    })
    .fail(function (err) {
      console.log(err);
    });

}, true);
