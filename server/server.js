const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const path = require('path');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/public')));

//JIM'S ROUTES ===============

app.use('/api/header/movie', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
}));

app.use('/api/header/titles', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
}));

//BRANDON'S ROUTES ===========

app.use('/api/reviews/sort/*', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));

app.use('/api/reviews', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));

app.use('/api/reviews/*', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));

app.use('/api/movies/*', createProxyMiddleware({
    target: 'http://localhost:3005',
    changeOrigin: true,
}));


//JUSTIN'S ROUTES ============

app.use('/api/descriptions', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
}));

app.use('/api/similars', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
}));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});