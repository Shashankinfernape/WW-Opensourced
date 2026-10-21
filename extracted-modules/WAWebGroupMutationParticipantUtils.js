__d("WAWebGroupMutationParticipantUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebMiscErrors",
    "WAWebUsernameTypes",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n) {
        return m(o("WAWebWidFactory").asUserWidOrThrow(e.id), e.phoneNumber, e.username == null ? null : o("WAWebUsernameTypes").serializeUsername(e.username), t, n);
    }
    function d(e, t, n) {
        const r = o("WAWebWidFactory").asUserWidOrThrow(e.id);
        if (r.isFbidBot()) {
            return {
                phoneNumber: r
            };
        }
        return c(e, t, n);
    }
    function m(t, n, r, a, i) {
        const l = t.isLid() ? n : t;
        if (o("WAWebABProps").getABPropConfigValue("username_group_mutation_enabled") && a) {
            const c = t.isLid() ? t : o("WAWebApiContact").getCurrentLid(t);
            if (c == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupMutationParticipant: ",
                    ": no lid"
                ])), i).sendLogs(`getGroupMutationParticipant-${i}-missing-lid`);
                throw new (o("WAWebMiscErrors")).ActionError;
            }
            if (r != null) {
                return {
                    lid: c,
                    username: r
                };
            }
            if (l != null) {
                return {
                    lid: c,
                    phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(l)
                };
            }
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupMutationParticipant: ",
                ": username and pn is null"
            ])), i).sendLogs(`getGroupMutationParticipant-${i}-missing-username-and-pn`);
            throw new (o("WAWebMiscErrors")).ActionError;
        }
        if (l == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupMutationParticipant: ",
                ": no pn"
            ])), i).sendLogs(`getGroupMutationParticipant-${i}-missing-pn`);
            throw new (o("WAWebMiscErrors")).ActionError;
        }
        return {
            phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(l)
        };
    }
    l.getGroupMutationParticipant = c;
    l.getGroupAddParticipant = d;
    l.getGroupMutationParticipantFromIdentity = m;
}, 98);