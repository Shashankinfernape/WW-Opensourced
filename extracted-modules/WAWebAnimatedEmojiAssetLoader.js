__d("WAWebAnimatedEmojiAssetLoader", [
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebEmojiConst",
    "WAWebMediaHostsUtil",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "/wa/static/network_resource";
    const cat = "nw_media";
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            u = u ?? new Map;
            c = c ?? new Map;
            const t = new (r("WAConcurrentPriorityPromiseQueue"))(5, {
                emojis: 5
            });
            const a = yield o("WAWebMediaHostsUtil").getStaticMediaHostName();
            const i = `${a}${d}`;
            o("WAWebEmojiConst").getSupportedAnimatedEmojisAssetIdsMapping(e).forEach((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, a]) {
                    try {
                        const u = r("WAWebURLUtils").build(i, {
                            cat,
                            id: a,
                            _nc_cat: 1
                        });
                        const d = yield t.enqueue(function() {
                            return r("WAWebPonyfillsFetch")(u);
                        }, {
                            group: "emojis",
                            priority: 1
                        });
                        const p = yield d.text();
                        c?.set(n, p);
                    } catch (e) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "initAnimatedEmojiAssets: fetch failed"
                        ])));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return _.apply(this, arguments);
    }
    function f(t) {
        const a = u?.get(t);
        if (a != null) {
            return a;
        }
        const i = c?.get(t);
        if (i != null) {
            try {
                const d = JSON.parse(i);
                u?.set(t, d);
                c?.delete(t);
                return d;
            } catch (t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "initAnimatedEmojiAssets: parse failed"
                ])));
            }
        }
    }
    l.initAnimatedEmojiAssets = p;
    l.getAnimatedEmojiAsset = f;
}, 98);