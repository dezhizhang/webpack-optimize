
class HashPlugin {
    constructor(options) {
        this.options = options;

    }
    apply(compler) {
        compler.hooks.compilation.tap('HashPlugin',(compilation,params) => {
            compilation.hooks.afterHash.tap('HashPlugin',() => {
                compilation.hash = 'hellohash';
                for(let chunk of compilation.chunks) {
                    chunk.contentHash = {javascript:'js','css/min-extract':''}
                }
            })
        })
    }
}