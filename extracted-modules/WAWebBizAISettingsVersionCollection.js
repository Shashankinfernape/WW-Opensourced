__d("WAWebBizAISettingsVersionCollection", [
    "WALogger",
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAISettingsVersionModel",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = ((t)=>{
        function r(...a_1) {
            let e;
            e = t.call(this, ...a_1) || this;
            e.findImpl = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const a = o("WAWebBizAISettingsCategoryRegistry").getCategoryHandler(t);
                    if (a == null) {
                        return null;
                    }
                    yield a.fetch();
                    const i = e.get(t);
                    return {
                        id: t,
                        version: i?.version ?? 0,
                        updatedAtMs: i?.updatedAtMs ?? 0
                    };
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.handleNudge = function(n, r, updatedAtMs) {
            const l = String(n);
            const u = this.get(l);
            if (u != null && u.version >= r && u.updatedAtMs >= updatedAtMs) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] nudge cat=",
                    " up-to-date (local=v",
                    "@",
                    " >= in=v",
                    "@",
                    ")"
                ])), l, u.version, u.updatedAtMs, r, updatedAtMs);
                return;
            }
            const c = u?.version ?? 0;
            const d = u?.updatedAtMs ?? 0;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] nudge cat=",
                " stale (local=v",
                "@",
                " < in=v",
                "@",
                ")"
            ])), l, c, d, r, updatedAtMs);
            const m = this.gadd({
                id: l,
                version: r,
                updatedAtMs
            });
            m.markStale();
        };
        r_prototype.incrementVersion = function(t, updatedAtMs) {
            const r = String(t);
            const o = this.get(r);
            const a = (o?.version ?? 0) + 1;
            this.gadd({
                id: r,
                version: a,
                updatedAtMs
            });
            return a;
        };
        r_prototype.getByCategory = function(t) {
            return this.get(String(t));
        };
        return r;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebBizAISettingsVersionModel").BizAISettingsVersionModel;
    const c = new u;
    l.BizAISettingsVersionCollection = c;
}, 98);