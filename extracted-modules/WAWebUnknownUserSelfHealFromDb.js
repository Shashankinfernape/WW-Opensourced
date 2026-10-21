__d("WAWebUnknownUserSelfHealFromDb", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebWidFactory",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new Set;
    const d = new Set;
    function m(e) {
        return d.has(e);
    }
    function p(t, n) {
        try {
            const lidPhoneNumberMappings = [];
            const usernameUpdates = [];
            const i = [];
            const l = [];
            for(let s = 0; s < t.length; s++){
                const u = t[s];
                const d = n[s];
                if (!(d == null || !u.isLid()) && !c.has(u)) {
                    let m = false;
                    if (f(u, d, lidPhoneNumberMappings)) {
                        m = true;
                    }
                    if (g(u, d, usernameUpdates)) {
                        m = true;
                    }
                    if (h(u, d, i)) {
                        m = true;
                    }
                    if (m) {
                        c.add(u);
                        l.push(u);
                    }
                }
            }
            const p = [];
            if (lidPhoneNumberMappings.length > 0) {
                p.push(o("WAWebBackendApi").frontendSendAndReceive("bulkUpdatePhoneNumberJids", {
                    lidPhoneNumberMappings
                }));
            }
            if (usernameUpdates.length > 0) {
                p.push(o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateUsernames", {
                    usernameUpdates
                }));
            }
            if (i.length > 0) {
                p.push(o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateContactPushnames", {
                    pushnameUpdates: i
                }));
            }
            if (l.length > 0) {
                _(l, p);
            }
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "healUnknownUsersFromDbRows: heal failed"
            ]))).sendLogs("unknown-user-self-heal-failed");
        }
    }
    function _(e, t) {
        for (const r of e){
            d.add(r);
        }
        (u || (u = n("Promise"))).all(t).catch((e)=>{
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "healUnknownUsersFromDbRows: heal dispatch failed"
            ]))).sendLogs("unknown-user-self-heal-dispatch-failed");
        }).then(()=>{
            for (const t of e){
                d.delete(t);
            }
        });
    }
    function f(e, t, lidPhoneNumberMappings) {
        const t_phoneNumber = t.phoneNumber;
        if (t_phoneNumber == null) {
            return false;
        }
        lidPhoneNumberMappings.push({
            lid: e.toString(),
            phoneNumber: t_phoneNumber
        });
        if (o("WAWebApiContact").getPhoneNumber(e) == null) {
            o("WAWebApiContact").warmUpLidPnMapping(e, o("WAWebWidFactory").createUserWidOrThrow(t_phoneNumber), t.phoneNumberCreatedAt ?? 0);
        }
        return true;
    }
    function g(e, t, usernameUpdates) {
        const t_username = t.username;
        if (t_username == null) {
            return false;
        }
        usernameUpdates.push({
            id: e.toString(),
            username: t_username,
            usernameCountryCode: t.usernameCountryCode,
            displayNameLID: t.displayNameLID
        });
        return true;
    }
    function h(e, { pushname }, n) {
        if (r("isStringNullOrEmpty")(pushname)) {
            return false;
        }
        n.push({
            contactId: e,
            pushname
        });
        return true;
    }
    l.isSelfHealInFlight = m;
    l.healUnknownUsersFromDbRows = p;
}, 98);