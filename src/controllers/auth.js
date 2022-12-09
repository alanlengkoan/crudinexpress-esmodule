const signin = (req, res) => {
    var data = {
        layout: 'auth/base',
        halaman: 'Sign In',
    };
    res.render('auth/signin/view', data);
};

const signup = (req, res) => {
    var data = {
        layout: 'auth/base',
        halaman: 'Sign Up',
    };
    res.render('auth/signup/view', data);
};

const signout = (req, res) => {
    res.send('Halaman Signout');
};

export {
    signin,
    signup,
    signout
};