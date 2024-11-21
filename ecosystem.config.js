module.exports = {
    apps: [
        {
            name: "med_yordam_testnp",
            script: "./server.js", // Основной файл приложения
            args: "--port 2222",
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
