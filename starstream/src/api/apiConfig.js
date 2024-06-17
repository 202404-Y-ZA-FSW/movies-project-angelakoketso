const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd1296bd66e7521efa2f1facf5b9ea2fe',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;