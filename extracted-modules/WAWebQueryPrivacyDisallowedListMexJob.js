__d("WAWebQueryPrivacyDisallowedListMexJob", [
    "WAWebMexGetPrivacyList",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.About) {
            return "ABOUT";
        }
        if (e === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.GroupAdd) {
            return "GROUPADD";
        }
        if (e === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.LastSeen) {
            return "LAST";
        }
        if (e === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.ProfilePicture) {
            return "PROFILE";
        }
        if (e === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.Pix) {
            return "PIX";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const l = yield o("WAWebSchemaPrivacyDisallowedList").getPrivacyDisallowedListTable().get(t);
            const s = l?.dhash ?? "";
            const u = yield o("WAWebMexGetPrivacyList").fetchPrivacyList({
                jid: n,
                dhash: s,
                category: e(t),
                type: "DENYLIST"
            });
            const c = u.xwa2_fetch_wa_users?.[0]?.privacy_contact_list;
            const d = c?.contacts ?? [];
            const m = [];
            for (const p of d){
                if (p != null) {
                    const f = p.jid ?? p.pn_jid;
                    if (f != null && f !== "") {
                        m.push(o("WAWebWidFactory").createUserWidOrThrow(f));
                    }
                }
            }
            if (m.length === 0) {
                return {
                    status: "match"
                };
            }
            return {
                status: "mismatch",
                users: m,
                dhash: c?.dhash != null ? c.dhash : ""
            };
        });
        return u.apply(this, arguments);
    }
    l.queryPrivacyDisallowedListMex = s;
}, 98);