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

const hello = (req, res) => {
    if (req.query.lastName === undefined) {
        res.send(`Hello ${req.query.firstName}`);
    } else {
        res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
    }
};

const hai = (req, res) => {
    res.send(`Hai`);
};

const urlTest = (req, res) => {
    res.json({
        path: req.path,
        hostname: req.hostname,
        protocol: req.protocol,
        baseUrl: req.baseUrl,
        originalUrl: req.originalUrl,
        secure: req.secure,
    });
};

export {
    home,
    about,
    contact,
    hello,
    hai,
    urlTest
};