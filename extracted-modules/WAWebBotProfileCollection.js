__d("WAWebBotProfileCollection", [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBotGating",
    "WAWebBotProfileAction",
    "WAWebBotProfileModel",
    "WAWebPersistBotProfiles",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10195"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getDefaultBot = function() {
            return this.findFirst(function(e) {
                return e.isDefault === true;
            });
        };
        r_prototype.findImpl = function(t) {
            return this.$BotProfileCollectionImpl$p_1(t);
        };
        r_prototype.update = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                if (!t.isFbidBot()) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "update only supports FBID bots"
                    ])));
                    return;
                }
                const i = this.get(t)?.lastUpdateTs ?? 0;
                if (i + o("WAWebBotGating").ugcBotProfileSyncInterval() > Date.now()) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotProfileCollection] skip updating bot profile"
                    ])));
                    return;
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileCollection] updating bot profile"
                ])));
                yield this.$BotProfileCollectionImpl$p_1(t);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.$BotProfileCollectionImpl$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = o("WAWebWidFactory").createWidFromWidLike(e);
                if (!n.isFbidBot()) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "_findAndParse only supports FBID bots"
                    ])));
                    return null;
                }
                const r = this.get(n)?.personaId;
                const a = yield o("WAWebBotProfileAction").queryBotProfile(n, r);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileCollection] query bot profile"
                ])));
                if (a) {
                    yield o("WAWebPersistBotProfiles").persistBotProfiles([
                        a
                    ]);
                    return babelHelpers.extends({}, a);
                }
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to find bot profile with id"
                ])));
                return null;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebBaseCollection").BaseCollection);
    p.model = r("WAWebBotProfileModel");
    const _ = new p;
    l.BotProfileCollection = _;
}, 98);