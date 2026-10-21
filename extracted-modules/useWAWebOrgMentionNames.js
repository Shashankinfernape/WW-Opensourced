__d("useWAWebOrgMentionNames", [
    "WALogger",
    "WAWebMentionsPluginUtil",
    "WAWebOrgCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgLazyActions",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebGroupOrgMembershipChanges"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useState } = u;
    function m(e, t) {
        const n = o("react-compiler-runtime").c(6);
        const a = useState(f);
        const i = a[0];
        const l = a[1];
        let s;
        if (n[0] !== t) {
            s = t && o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled();
            n[0] = t;
            n[1] = s;
        } else {
            s = n[1];
        }
        const u = s;
        let m;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = function() {
                return l(p);
            };
            n[2] = m;
        } else {
            m = n[2];
        }
        r("useWAWebGroupOrgMembershipChanges")(u ? e : null, m);
        let _;
        let h;
        if (n[3] !== u) {
            _ = function() {
                const e = u ? o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId() : null;
                if (e != null) {
                    g(e);
                }
            };
            h = [
                u
            ];
            n[3] = u;
            n[4] = _;
            n[5] = h;
        } else {
            _ = n[4];
            h = n[5];
        }
        useEffect(_, h);
        return i;
    }
    function p() {
        return _;
    }
    function _(e) {
        return o("WAWebMentionsPluginUtil").getMentionOrgMemberDisplayName(e);
    }
    function f() {
        return o("WAWebMentionsPluginUtil").getMentionOrgMemberDisplayName;
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield o("WAWebOrgLazyActions").loadOrgFetchDirectoryAction();
                yield n.fetchOrgDirectory(t, {
                    createModels: true
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-mentions] could not load the primary org directory"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("org-mention-directory-failed");
            }
        });
        return h.apply(this, arguments);
    }
    l.default = m;
}, 98);