__d("WAWebProxyStateFactory", [
    "WACustomError",
    "WALogger",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        "collections",
        "derived",
        "props",
        "session"
    ];
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "DuplicatedProxyProperty";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const m = {};
    function p(t, n, a) {
        const { collections, derived, props, session } = n;
        const f = babelHelpers.objectWithoutPropertiesLoose(n, c);
        const g = function(t) {
            this.$ProxyState$state = t;
        };
        const h = {};
        [
            props,
            session,
            collections,
            derived
        ].forEach((n)=>{
            if (n) {
                Object.keys(n).forEach((n)=>{
                    h[n] = {
                        get: function() {
                            if (r("gkx")("26258")) {
                                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    '[ProxyState] read "',
                                    ".",
                                    '" in <',
                                    "/> not in concerns"
                                ])), t, n, this.$ProxyState$ComponentName);
                            } else {
                                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    '[ProxyState] read "',
                                    ".",
                                    '" in <',
                                    "/> not in concerns"
                                ])), t, n, this.$ProxyState$ComponentName).sendLogs("Invalid ProxyState Access");
                            }
                            return this.$ProxyState$state[n];
                        },
                        set: function(r) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                '[ProxyState] write "',
                                ".",
                                '" in <',
                                "/> not in concerns"
                            ])), t, n, this.$ProxyState$ComponentName).sendLogs("Invalid ProxyState Write");
                            this.$ProxyState$state[n] = r;
                        }
                    };
                });
            }
        });
        h.proxyName = {
            value: t
        };
        h.mirrorMask = {
            value: a
        };
        [
            "set",
            "get"
        ].concat(Object.keys(f)).forEach((e)=>{
            h[e] = {
                value: function() {
                    const $ProxyState$state = this.$ProxyState$state;
                    return $ProxyState$state[e](...arguments);
                }
            };
        });
        g.prototype = Object.create(null, h);
        g.prototype.constructor = g;
        if (t in m) {
            throw new d(`Duplicated proxy property "${t}".`);
        }
        m[t] = g;
    }
    l.ProxyStates = m;
    l.ProxyStateFactory = p;
}, 98);