__d("WAWebMexFetchAboutStatusJob", [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAboutStatusJobQuery.graphql",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ tcToken, wid }) {
            if (!r("WAWebWid").isWid(wid) || !wid.isUser()) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][about_status] expected user wid, got: ",
                    ""
                ])), wid).tags("mex", "about_status").sendLogs("mex-about-status-wrong-wid");
                return (c || (c = n("Promise"))).resolve({
                    id: wid
                });
            }
            const l = e !== undefined ? e : e = n("WAWebMexFetchAboutStatusJobQuery.graphql");
            const d = {
                user_id: wid.user
            };
            if (tcToken != null) {
                d.privacy_token = {
                    tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(tcToken)
                };
            }
            const m = {
                user: d
            };
            try {
                const f = yield o("WAWebMexClient").fetchQuery(l, m);
                const g = f.xwa2_users_updates_since?.[0];
                if (g == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][about_status] empty return list"
                    ]))).tags("mex", "about_status").sendLogs("mex-about-status-empty-return-list");
                }
                const h = g?.updates?.[0]?.text;
                return {
                    id: wid,
                    status: h
                };
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    const y = error.statusCode;
                    if (y === 401) {
                        return {
                            id: wid,
                            status: ""
                        };
                    }
                    return {
                        id: wid,
                        error: {
                            errorCode: y,
                            errorText: error.message
                        }
                    };
                }
                throw error;
            }
        });
        return m.apply(this, arguments);
    }
    l.mexGetAbout = d;
}, 98);