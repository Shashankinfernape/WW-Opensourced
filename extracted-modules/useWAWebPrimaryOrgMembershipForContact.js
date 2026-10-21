__d("useWAWebPrimaryOrgMembershipForContact", [
    "WAJids",
    "WAWebCmd",
    "WAWebOrgContactGetters",
    "WAWebOrgGatingUtils",
    "WAWebOrgGetters",
    "WAWebOrgLazyActions",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebOrgContactValues",
    "useWAWebOrgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(21);
        let n;
        if (t[0] !== e) {
            n = e == null ? null : o("WAJids").lidFromLidUserJid(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = n;
        const i = a != null && a !== "";
        let l;
        let s;
        if (t[2] !== i) {
            l = function() {
                return i && o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled();
            };
            s = [
                i
            ];
            t[2] = i;
            t[3] = l;
            t[4] = s;
        } else {
            l = t[3];
            s = t[4];
        }
        const c = r("useWAWebEventTargetValue")(i ? o("WAWebCmd").Cmd : null, "on_ab_props_update_from_bridge", l, s);
        let d;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebOrgContactGetters").getOrgContactMemberName,
                o("WAWebOrgContactGetters").getOrgContactPrimaryOrgId,
                o("WAWebOrgContactGetters").getOrgContactPrimaryOrgMemberTag
            ];
            t[5] = d;
        } else {
            d = t[5];
        }
        const p = r("useWAWebOrgContactValues")(c ? a : null, d);
        let _;
        if (t[6] !== p) {
            _ = p ?? [];
            t[6] = p;
            t[7] = _;
        } else {
            _ = t[7];
        }
        const f = _;
        const g = f[0];
        const orgID = f[1];
        const y = f[2];
        let C;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                o("WAWebOrgGetters").getOrgName,
                o("WAWebOrgGetters").getOrgIconThumbUrl
            ];
            t[8] = C;
        } else {
            C = t[8];
        }
        const b = r("useWAWebOrgValues")(orgID, C);
        let v;
        if (t[9] !== b) {
            v = b ?? [];
            t[9] = b;
            t[10] = v;
        } else {
            v = t[10];
        }
        const S = v;
        const orgName = S[0];
        const L = S[1];
        let E;
        let k;
        if (t[11] !== c || t[12] !== a) {
            E = function() {
                let e = true;
                if (c && a != null && a !== "") {
                    o("WAWebOrgLazyActions").loadOrgRequestContactAction().then((t)=>{
                        if (e) {
                            t.requestOrgContact(a);
                        }
                    }, m);
                }
                return function() {
                    e = false;
                };
            };
            k = [
                c,
                a
            ];
            t[11] = c;
            t[12] = a;
            t[13] = E;
            t[14] = k;
        } else {
            E = t[13];
            k = t[14];
        }
        useEffect(E, k);
        let I;
        if (t[15] !== g || t[16] !== y || t[17] !== L || t[18] !== orgName || t[19] !== orgID) {
            I = g == null || orgID == null || orgName == null ? null : {
                memberName: g,
                memberTag: y == null || y === "" ? null : y,
                orgIconURI: L ?? null,
                orgID,
                orgName
            };
            t[15] = g;
            t[16] = y;
            t[17] = L;
            t[18] = orgName;
            t[19] = orgID;
            t[20] = I;
        } else {
            I = t[20];
        }
        return I;
    }
    function m() {}
    l.default = useD;
}, 98);