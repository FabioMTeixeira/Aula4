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
    // let enabledUsers = [];

    // for(let i = 0; i < USERS.length; i++) {
    //     const user = USERS[i]; 
    //     if(user.enabled) {
    //         enabledUsers.push(user);
    //     }
    // }

    // return enabledUsers;

    return USERS.filter((user) => {
        return user.enabled;
    });
}

