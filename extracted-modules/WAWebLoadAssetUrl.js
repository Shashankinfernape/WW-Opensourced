__d("WAWebLoadAssetUrl", [
    "WACustomError",
    "WALogger",
    "WAWebFeatureDetectionDetectAvifSupport",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebHttpExtendedFetch",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = false;
    const u = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, `Failed to load url. StatusCode: ${n}. Duration: ${r} ms`) || this;
            o.name = "LoadUrlError";
            o.url = t;
            o.statusCode = n;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ asset: t, resolution: n }) {
            return r("nullthrows")((yield m(t[n])));
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.avif != null && !s && (yield o("WAWebFeatureDetectionDetectAvifSupport").detectAvifSupport())) {
                return e.avif;
            }
            if (e.webp != null && e.webp !== "" && (yield o("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport())) {
                return e.webp;
            }
            return e.default;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = new AbortController;
        const n = f(e, t.signal).then(({ response: n, startTime: r, url: o })=>{
            const a = e.getConsumerPromiseResolve();
            if (n.ok && a) {
                a(o);
            } else {
                throw new u(o, n.status, Date.now() - r);
            }
        });
        e.setLoadUrlPromise(n, t);
        return n;
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = yield c(t);
            yield r("WAWebNetworkStatus").waitIfOffline();
            const i = Date.now();
            const l = yield o("WAWebHttpExtendedFetch").extendedFetch(a, {
                signal: n
            });
            if (l.ok || a !== t.asset[t.resolution].avif) {
                return {
                    response: l,
                    startTime: i,
                    url: a
                };
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "AssetLoader: AVIF asset failed with status ",
                ", using other formats"
            ])), l.status);
            s = true;
            return f(t, n);
        });
        return g.apply(this, arguments);
    }
    l.LoadUrlError = u;
    l.getSupportedImageFormatUrl = c;
    l.getSupportedFormatUrl = m;
    l.loadUrl = _;
}, 98);