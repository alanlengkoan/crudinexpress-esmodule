const home = (req, res) => {
    var data = {
        layout: 'pages/base',
        halaman: 'Home',
    };
    res.render('pages/home/view', data);
};

const about = (req, res) => {
    var data = {
        layout: 'pages/base',
        halaman: 'About',
    };
    res.render('pages/about/view', data);
};

const contact = (req, res) => {
    var data = {
        layout: 'pages/base',
        halaman: 'Contact',
    };
    res.render('pages/contact/view', data);
};

export {
    home,
    about,
    contact
};