const home = (req, res) => {
    res.send("Home");
};

const about = (req, res) => {
    res.send("About");
};

const contact = (req, res) => {
    res.send("Contact");
};

const hello = (req, res) => {
    res.send(`Hello ${req.query.name}`);
};

export {
    home,
    about,
    contact,
    hello
};