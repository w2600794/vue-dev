// export const dev =
// export const devImg =

module.exports = {
    isApp: false,
    dev: process.env.NODE_ENV == 'development' ? 'http://test.eyubao.net' : '/',
    devImg: process.env.NODE_ENV == 'development' ? 'http://timg.eyubao.net' : 'http://img.eyubao.net'
}



// export const dev =  'http://test.eyubao.net'
// export const devImg = 'http://timg.eyubao.net'
// export const tactivity = 'http://tactivity.eyubao.net';
// export const tsso = 'http://tsso.eyubao.net';
// export const mall = 'http://tmall.eyubao.net';