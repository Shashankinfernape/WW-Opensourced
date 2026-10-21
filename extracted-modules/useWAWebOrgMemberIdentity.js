__d("useWAWebOrgMemberIdentity", [
    "WAWebContactGetters",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMemberLidEligibility",
    "WAWebWidToJid",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebPrimaryOrgMembershipForContact"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(19);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebContactGetters")).getName,
                i.getPushname,
                i.getIsBusiness,
                i.getVerifiedLevel,
                i.getVerifiedName
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        const l = o("useWAWebContactValues").useOptionalContactValues(e?.id, a);
        let u;
        if (n[1] !== e || n[2] !== t) {
            u = s(e, t);
            n[1] = e;
            n[2] = t;
            n[3] = u;
        } else {
            u = n[3];
        }
        const membership = r("useWAWebPrimaryOrgMembershipForContact")(u);
        const m = membership?.memberName;
        if (m == null || e == null) {
            let p;
            if (n[4] !== membership) {
                p = {
                    displayName: null,
                    membership
                };
                n[4] = membership;
                n[5] = p;
            } else {
                p = n[5];
            }
            return p;
        }
        let _;
        if (n[6] !== e || n[7] !== l) {
            _ = l ?? [
                o("WAWebContactGetters").getName(e),
                o("WAWebContactGetters").getPushname(e),
                o("WAWebContactGetters").getIsBusiness(e),
                o("WAWebContactGetters").getVerifiedLevel(e),
                o("WAWebContactGetters").getVerifiedName(e)
            ];
            n[6] = e;
            n[7] = l;
            n[8] = _;
        } else {
            _ = n[8];
        }
        const f = _;
        const savedName = f[0];
        const pushName = f[1];
        const isBusiness = f[2];
        const verifiedLevel = f[3];
        const verifiedName = f[4];
        let v;
        if (n[9] !== isBusiness || n[10] !== m || n[11] !== pushName || n[12] !== savedName || n[13] !== verifiedLevel || n[14] !== verifiedName) {
            v = o("WAWebOrgMemberDisplayName").resolveWAWebOrgMemberDisplayName({
                isBusiness,
                memberName: m,
                pushName,
                savedName,
                verifiedLevel,
                verifiedName
            });
            n[9] = isBusiness;
            n[10] = m;
            n[11] = pushName;
            n[12] = savedName;
            n[13] = verifiedLevel;
            n[14] = verifiedName;
            n[15] = v;
        } else {
            v = n[15];
        }
        let S;
        if (n[16] !== membership || n[17] !== v) {
            S = {
                displayName: v,
                membership
            };
            n[16] = membership;
            n[17] = v;
            n[18] = S;
        } else {
            S = n[18];
        }
        return S;
    }
    function s(e, t) {
        if (e != null && o("WAWebContactGetters").getIsMe(e) || t == null || t.isAiHub()) {
            return null;
        }
        const n = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(t);
        if (n == null) {
            return null;
        }
        return o("WAWebWidToJid").userLidtoLidUserJid(n);
    }
    l.default = e;
}, 98);