__d("WAWebMemberLabelCollection", [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebIdentityFunction",
    "WAWebMemberLabelActions",
    "WAWebMemberLabelModel",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$MemberLabelCollection$p_1 = new Map;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$MemberLabelCollection$p_2 = function(t, n) {
            const e = this;
            if (t && t.length > 0) {
                t.filter(Boolean).forEach((t)=>{
                    e.trigger(t.id.toString(), n(t));
                });
            }
        };
        a_prototype.add = function(n, r) {
            const e = t.prototype.add.call(this, n, r);
            this.$MemberLabelCollection$p_2(e, o("WAWebIdentityFunction").identityFunction);
            return e;
        };
        a_prototype.remove = function(n, r = {}) {
            const e = t.prototype.remove.call(this, n, r);
            this.$MemberLabelCollection$p_2(e, o("WAWebNullFunc").returnNull);
            return e;
        };
        a_prototype.initializeLabelsForChat = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this.$MemberLabelCollection$p_1.get(e);
                if (t != null) {
                    return t;
                }
                const n = this.$MemberLabelCollection$p_3(e);
                this.$MemberLabelCollection$p_1.set(e, n);
                return n;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$MemberLabelCollection$p_3 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                try {
                    yield o("WAExponentialBackoff").exponentialBackoff({
                        minTimeout: 1000,
                        retries: 3,
                        signal: new AbortController().signal
                    }, (()=>{
                        const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, i) {
                            return o("WAWebMemberLabelActions").getMemberLabelsForGroupAction(t).then((e)=>{
                                if (e != null) {
                                    a.add(e);
                                }
                            }).catch((a)=>{
                                const l = i + 1;
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[MemberLabelCollection][initialize] attempt ",
                                    " failed ",
                                    ""
                                ])), l, t);
                                const s = a instanceof Error ? a : r("err")(String(a));
                                return n(s);
                            });
                        });
                        return function(e, t) {
                            return i.apply(this, arguments);
                        };
                    })());
                } catch (e) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[MemberLabelCollection][initialize] all retries failed ",
                        ""
                    ])), t);
                    this.$MemberLabelCollection$p_1.delete(t);
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebMemberLabelModel");
    const c = new u;
    l.default = c;
}, 98);