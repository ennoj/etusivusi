module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated) {
      return next();
    }
    req.flash('error_msg', 'Kirjaudu ensin sisään'); // Poista kun React
    res.redirect('/users/login');
  }
};
