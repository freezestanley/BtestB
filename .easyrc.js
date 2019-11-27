module.exports = {
    type: 'vue',
    mfe: true,
    perset: ['less','sass','babel','images','eslint','react','normal'],
    configureWebpack: cfg => {
        let config = cfg.config
        config.mode('development')
        const fileType = ['.ts', '.tsx', '.js', '.json', '.vue', '.jsx']
        fileType.map((ele) => {
            config.resolve.extensions.add(ele)
        })
        config.resolve.extensions.end()
    }
}