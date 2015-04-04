var hoodie = new Hoodie();

(function () {
  var options = {
    roles: ['email', 'public_profile', 'user_friends']
  };

  $('[data-social-signin]').on('click', function () {
    var provider = $(this).data('socialSignin');

    hoodie.account.socialLogin(provider, options)
      .done(function (data) {
        console.log(data);
      })
      .fail(function (err) {
        console.log(err);
      });
  });
})();
