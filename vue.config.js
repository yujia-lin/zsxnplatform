module.exports = {
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