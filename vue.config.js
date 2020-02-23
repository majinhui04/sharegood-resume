const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const YAML = require('yamljs');
const _config = YAML.load('./_config.yml');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const isProd = process.env.NODE_ENV === 'production';
const port = _config.port;
const VUE_APP_BASE_TARGET = process.env.VUE_APP_BASE_TARGET || `http://localhost:${port}/mock`;
console.log('VUE_APP_BASE_TARGET:::', VUE_APP_BASE_TARGET);

module.exports = {
    outputDir: 'dist',
    publicPath: '/',
    productionSourceMap: false,
    lintOnSave: false,
    pages: {
        index: {
            entry: './src/main.js',
            title: _config.title,
            template: './src/index.html'
        }
    },
    configureWebpack: config => {
        if (isProd) {
            config.optimization = {
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                drop_debugger: true,
                                drop_console: true
                            }
                        }
                    })
                ]
            };
        }
    },
    // 允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
        // 命名
        config.resolve.alias.set('@', resolve('src'));
        // 打包文件带hash
        config.output.filename('[name].[hash].js').end();

        // 为了补删除换行而加的配置
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // modify the options...
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });
        // 把动态配置合并到process.env
        config.plugin('define').tap(args => {
            const name = 'process.env';
            // 使用 merge 合并，保证原始值不变
            args[0][name] = merge(args[0][name], _config.env);
            return args;
        });
    },
    devServer: {
        port: port,
        // 配置自动启动浏览器
        open: _config.open,
        proxy: {
            // change xxx-api/login => mock/login
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                target: VUE_APP_BASE_TARGET,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
        // after: require('./mock/mock-server.js')
    }
};

// 全局样式 变量、函数
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                resolve('src/styles/variables.less'),
                resolve('src/styles/mixin.less')
            ]
        });
}
