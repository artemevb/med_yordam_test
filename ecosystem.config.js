module.exports = {
    apps: [
        {
            name: "med_yordam",
            script: "npm",
            args: "start",
            env: {
                PORT: 2223,
                NODE_ENV: "production",
            },
        },
    ],
};
