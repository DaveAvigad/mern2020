const data = require('./data.json');

exports.resturantController = {
    get(req, res) {
        if (req.params && req.params.id) {
            const { id } = req.params;

            console.log('single data requested');
            res.json(data[id - 1]);
        } else {
            console.log('all data requested');
            res.json(data);
        }
    },
    post(req, res) {
        console.log('new entity saved!');

        const { body } = req;

        data.push(body);
        res.send('new entity saved!');
    },
    put(req, res) {
        const { id } = req.params;
        const { body } = req;

        for (const { key, value } of body)
            data[id - 1][key] = value;

        res.json(data[id - 1]);
    },
};

exports.userController = {
    get(req, res) {

    },
    post(req, res) {

    },
    put(req, res) {

    },
};

exports.accountController = {
    get(req, res) {

    },
    post(req, res) {

    },
    delete(req, res) {

    },
};
