module.exports = {
//	build:{
//		assetsPublicPath:"./"
//	},
//	publicPath: './', // 相对于 HTML 页面（目录相同）
//  publicPath: "./" ,
	chainWebpack: (config) => {
        config.resolve.symlinks(true) // 修复热更新失效
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 75
                    })
                ]
            }
        }
    }
}