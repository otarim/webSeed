fis.config.merge({
    project: {
        exclude: ['**/_*.scss','template','node_modules','dest']
    },
    modules: {
        parser: {
            scss: 'sass',
            sass: 'sass'
        },
        spriter: 'csssprites',
        preprocessor: {
            css: 'cssprefixer'
        },
        postpackager: ['simple']
    },
    optimizer: {
        js : 'uglify-js',
        css : 'clean-css',
        png : 'png-compressor'
    },
    roadmap : {
        path: [{
            reg: /([^\/]*.css)$/i,
            release: '/static/css/$1',
            useSprite: true,
            useHash: false
        },{
            // reg: /([^\/]*.js)$/i,
            reg: /\/thirdparts.*\/(.*.js)$/i,
            release: '/static/js/$1',
            useHash: false
        },{
            reg: /\/module.*\/(.*.js)$/i,
            release: '/static/js/module/$1',
            useHash: false
        },{
            reg: /([^\/]*.js)$/i,
            release: '/static/js/$1',
            useHash: false
        }],
        ext: {
            sass: 'css',
            scss: 'css'
        },
        domain: {
            image: '.',
            '**.css': '.',
            '**.js': '.'
        }
    },
    settings: {
        spriter: {
            csssprites: {
                margin: 1,
                layout: 'matrix'
            }
        },
        optimizer: {
            'uglify-js': {
                mangle: {
                    except: 'exports, module, require, define, $'
                }
            },
            'png-compressor' : {
                type : 'pngquant'
            }
        },
        preprocessor : {
          cssprefixer : {
              "browsers": ["Chrome > 1"],
              "cascade": true
            }
        },
        postpackager: {
            simple: {
                autoCombine: false
            }
        }
    },
    pack: {
    },
    deploy: {
        local: {
            to: './dest'
        }
    }
})