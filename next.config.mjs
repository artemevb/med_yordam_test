/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/', // Исходный маршрут
                destination: '/mirzaev_batyr_bahramovich', // Целевой маршрут
                permanent: true, // Устанавливает редирект как постоянный (для SEO)
            },
        ];
    },
};

export default nextConfig;
