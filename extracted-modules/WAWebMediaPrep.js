__d("WAWebMediaPrep", [
    "WALogger",
    "WAPromiseCallSync",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaData",
    "WAWebMediaPrepSendToChat",
    "WAWebMediaTypes",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t(t, n) {
            const a = this;
            this.baseType = t;
            this.mediaData = new (r("WAWebMediaData"))({
                mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING
            });
            this.$1 = n.then((t)=>{
                a.mediaData.set(t);
                if (!t.filehash) {
                    const n = t.mediaBlob;
                    if (!n) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("media-fault: no hash or blob");
                    }
                    return o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(r("nullthrows")(n)).then((e)=>{
                        a.mediaData.filehash = e;
                    });
                }
            }, (e)=>{
                a.mediaData.mediaStage = o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED;
                throw e;
            });
        }
        const t_prototype = t.prototype;
        t_prototype.sendToChat = function({ chat, earlyUpload, options }) {
            return o("WAPromiseCallSync").promiseCallSync(r("WAWebMediaPrepSendToChat"), null, {
                chat,
                earlyUpload,
                options,
                prep: this
            });
        };
        t_prototype.waitForPrep = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield this.$1;
                return this.mediaData;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    l.default = s;
}, 98);