__d("useWAWebGroupOrgMembershipChanges", [
    "WALogger",
    "WAWebCmd",
    "WAWebOrgContactCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgLazyActions",
    "WAWebOrgMemberLidEligibility",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useRef } = u;
    function useM(e, t) {
        const n = o("react-compiler-runtime").c(15);
        let a;
        let i;
        if (n[0] !== e) {
            a = function() {
                return e != null && o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled();
            };
            i = [
                e
            ];
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = r("useWAWebEventTargetValue")(e != null ? o("WAWebCmd").Cmd : null, "on_ab_props_update_from_bridge", a, i);
        const s = l ? e?.participants : null;
        let u;
        let m;
        if (n[3] !== e || n[4] !== s) {
            u = function() {
                return p(e, s != null);
            };
            m = [
                e,
                s
            ];
            n[3] = e;
            n[4] = s;
            n[5] = u;
            n[6] = m;
        } else {
            u = n[5];
            m = n[6];
        }
        const f = r("useWAWebEventTargetValue")(s, "add remove reset", u, m);
        const g = r("useWAWebStableCallback")(t);
        const hRef = useRef(l);
        let y;
        let C;
        if (n[7] !== l || n[8] !== g) {
            y = function() {
                if (hRef.current !== l) {
                    hRef.current = l;
                    g();
                }
            };
            C = [
                l,
                g
            ];
            n[7] = l;
            n[8] = g;
            n[9] = y;
            n[10] = C;
        } else {
            y = n[9];
            C = n[10];
        }
        useEffect(y, C);
        let b;
        let v;
        if (n[11] !== g || n[12] !== f) {
            b = function() {
                if (f !== "") {
                    const e = f.split(",");
                    const t = new Set(e);
                    const n = function(n) {
                        if (n.lids.some((e)=>t.has(e))) {
                            g();
                        }
                    };
                    o("WAWebOrgContactCollection").OrgContactCollection.on(o("WAWebOrgContactCollection").ORG_CONTACTS_APPLIED, n);
                    _(e);
                    return function() {
                        o("WAWebOrgContactCollection").OrgContactCollection.off(o("WAWebOrgContactCollection").ORG_CONTACTS_APPLIED, n);
                    };
                }
            };
            v = [
                g,
                f
            ];
            n[11] = g;
            n[12] = f;
            n[13] = b;
            n[14] = v;
        } else {
            b = n[13];
            v = n[14];
        }
        useEffect(b, v);
    }
    function p(e, t) {
        if (e == null || !t) {
            return "";
        }
        return e.participants.toArray().flatMap((e)=>{
            const t = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e.id);
            if (t == null) {
                return [];
            }
            return [
                t.user
            ];
        }).join(",");
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield o("WAWebOrgLazyActions").loadOrgRequestContactAction();
                yield n.requestOrgContacts(t);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-affiliations] could not request the group participants' memberships"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("org-group-participants-request-failed");
            }
        });
        return f.apply(this, arguments);
    }
    l.default = useM;
}, 98);