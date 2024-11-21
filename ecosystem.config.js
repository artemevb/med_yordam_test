module.exports = {
    apps: [
        {
            name: "med_yordam",
            script: "npm",
            args: "start",
            env: {
                PORT: 2222,
                NODE_ENV: "production",
            },
        },
    ],
};
