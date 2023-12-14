const connection = require('../mysql');

exports.getAllNews = async () => {
    const query = 'SELECT * FROM News';
    const [newsList] = await connection.query(query);
    return newsList;
};

exports.getNewsById = async (id) => {
    const query = 'SELECT * FROM News WHERE idNews = ?';
    const [news] = await connection.query(query, [id]);
    return news[0];
};
