const USERS = [
    {
        id: 1,
        name: 'Zisa',
        enabled: true
    },
    {
        id: 2,
        name: 'Fábio',
        enabled: false
    }
];

exports.all = () => {
    return USERS;
};

exports.enabled = () => {
    return USERS;
}

