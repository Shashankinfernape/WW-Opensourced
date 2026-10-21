__d("useWAWebOrgMemberSearch", [
    "WALogger",
    "WAWebOrgLazyActions",
    "WAWebOrgMemberSearchRows",
    "WAWebOrgMemberSearchStrings",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useRef, useState } = u;
    function p(t, n, a) {
        const i = o("react-compiler-runtime").c(17);
        const l = useState(o("WAWebOrgMemberSearchRows").EMPTY_ORG_RENDER_SECTIONS);
        const s = l[0];
        const u = l[1];
        const pRef = useRef(0);
        let f;
        if (i[0] !== n || i[1] !== t) {
            f = n ? t.trim() : "";
            i[0] = n;
            i[1] = t;
            i[2] = f;
        } else {
            f = i[2];
        }
        const g = f;
        let h;
        if (i[3] !== g) {
            h = function(n) {
                const t = pRef.current = pRef.current + 1;
                const a = ()=>t === pRef.current;
                if (g === "") {
                    u(o("WAWebOrgMemberSearchRows").EMPTY_ORG_RENDER_SECTIONS);
                    n?.();
                    return;
                }
                o("WAWebOrgLazyActions").loadOrgSearchMembersAction().then((e)=>e.searchOrgMembers(g, function({ orgId, orgName }) {
                        if (a()) {
                            u([
                                {
                                    failure: null,
                                    loading: true,
                                    members: [],
                                    orgId,
                                    orgName
                                }
                            ]);
                        }
                    })).then((e)=>{
                    if (a()) {
                        u(_(e));
                        if (n != null) {
                            n();
                        }
                    }
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[org-search] could not show org member results"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("org-member-search-render-failed");
                    if (a()) {
                        u(o("WAWebOrgMemberSearchRows").EMPTY_ORG_RENDER_SECTIONS);
                        if (n != null) {
                            n();
                        }
                    }
                });
            };
            i[3] = g;
            i[4] = h;
        } else {
            h = i[4];
        }
        const y = r("useWAWebStableCallback")(h);
        const C = r("useWAWebDebouncedCallback")(y, o("WAWebOrgMemberSearchStrings").ORG_MEMBER_SEARCH_DEBOUNCE_MS);
        let b;
        if (i[5] !== C || i[6] !== a || i[7] !== y) {
            b = function() {
                C.cancel();
                y(a);
            };
            i[5] = C;
            i[6] = a;
            i[7] = y;
            i[8] = b;
        } else {
            b = i[8];
        }
        const v = r("useWAWebStableCallback")(b);
        let S;
        let R;
        if (i[9] !== C || i[10] !== y || i[11] !== g) {
            S = function() {
                if (g === "") {
                    y();
                } else {
                    C();
                }
                return C.cancel;
            };
            R = [
                C,
                y,
                g
            ];
            i[9] = C;
            i[10] = y;
            i[11] = g;
            i[12] = S;
            i[13] = R;
        } else {
            S = i[12];
            R = i[13];
        }
        useEffect(S, R);
        let L;
        if (i[14] !== v || i[15] !== s) {
            L = [
                s,
                v
            ];
            i[14] = v;
            i[15] = s;
            i[16] = L;
        } else {
            L = i[16];
        }
        return L;
    }
    function _(e) {
        if (e == null || e.failure == null && e.members.length === 0) {
            return o("WAWebOrgMemberSearchRows").EMPTY_ORG_RENDER_SECTIONS;
        }
        return [
            babelHelpers.extends({}, e, {
                loading: false
            })
        ];
    }
    l.default = p;
}, 98);