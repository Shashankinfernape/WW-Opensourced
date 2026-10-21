__d("WAWebImgRetry", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebServerErrors",
    "WAWebWebcImgErrorWamEvent",
    "WAWebXHR",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 30000;
    const d = (()=>{
        function t({ crossOrigin: t, hasPrivacyChecks: n, noXHR: r, src: o }) {
            this.crossOrigin = t;
            this.hasPrivacyChecks = n;
            this.noXHR = r;
            this.src = o;
            this.generation = 0;
            this.refCount = 0;
            this.inProgress = false;
        }
        const a = t.prototype;
        a.key = function() {
            const e = this.crossOrigin ? "Y" : "N";
            const t = this.noXHR ? "Y" : "N";
            return `co:${e},noXHR:${t},src:${this.src}`;
        };
        a.sendXHR = function() {
            const t = this;
            if (this.noXHR) {
                return (u || (u = n("Promise"))).resolve(true);
            }
            const a = this.src;
            this.inProgress = true;
            const i = new AbortController;
            const l = o("WAPromiseTimeout").promiseTimeout(o("WAWebXHR").get({
                signal: i.signal,
                url: a
            }), c, "ImgRetryTimeout");
            this.$1 = {
                promise: l,
                controller: i
            };
            return this.$1.promise.then(({ status: n })=>{
                if (n >= 200 && n < 400) {
                    return true;
                }
                if (n >= 500) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Img:Retry ",
                        " failed with error code ",
                        ". Retrying."
                    ])), a, n);
                    const r = new (o("WAWebWebcImgErrorWamEvent")).WebcImgErrorWamEvent({
                        webcImgErrorCode: n
                    });
                    r.commit();
                    return false;
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Img:Retry ",
                    " failed with error code ",
                    ". Not retrying."
                ])), a, n);
                const i = new (o("WAWebWebcImgErrorWamEvent")).WebcImgErrorWamEvent({
                    webcImgErrorCode: n
                });
                i.commit();
                throw new (o("WAWebServerErrors")).ServerStatusError(null, a, n);
            }).catch((e)=>{
                if (e instanceof o("WAWebServerErrors").ServerStatusError || r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
                    throw e;
                }
                return false;
            }).finally(()=>{
                t.inProgress = false;
            });
        };
        a.release = function() {
            this.refCount--;
            if (this.refCount <= 0) {
                if (this.$1) {
                    this.$1.controller.abort();
                }
                return true;
            }
            return false;
        };
        a.shouldRetain = function() {
            return this.refCount > 0;
        };
        return t;
    })();
    l.default = d;
}, 98);