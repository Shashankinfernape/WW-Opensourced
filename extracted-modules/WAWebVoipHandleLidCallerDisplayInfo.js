__d("WAWebVoipHandleLidCallerDisplayInfo", [
    "WAPromiseEach",
    "WAWebVoipLidUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e == null) {
            return null;
        }
        const t = e.trim();
        if (t === "") {
            return null;
        }
        return t;
    }
    function s(t) {
        const n = t.split(";");
        const r = [];
        n.forEach((t)=>{
            if (t.trim()) {
                const n = t.split(",");
                const a = n[0];
                const i = n[1];
                const l = n[2];
                const s = n[3];
                r.push({
                    pn: o("WAWebWidFactory").createUserWidOrThrow(a),
                    lid: o("WAWebWidFactory").createUserWidOrThrow(i),
                    displayName: e(l),
                    username: e(s),
                    accountKind: null
                });
            }
        });
        return r;
    }
    function u(t) {
        const n = JSON.parse(t);
        const n_participants = n.participants;
        if (n_participants == null) {
            return [];
        }
        const a = [];
        n_participants.forEach((t)=>{
            const i = t.lid_user_jid?.raw_jid;
            if (!(i == null || i === "")) {
                const l = t.phone_user_jid?.raw_jid;
                a.push({
                    lid: o("WAWebWidFactory").createUserWidOrThrow(i),
                    pn: l != null && l !== "" ? o("WAWebWidFactory").createUserWidOrThrow(l) : null,
                    displayName: e(t.push_name),
                    username: e(t.username),
                    accountKind: e(t.account_kind)
                });
            }
        });
        return a;
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAPromiseEach").promiseEach(e, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                    const flushImmediately = n === e.length - 1;
                    const { accountKind, displayName, lid, pn, username } = t;
                    yield o("WAWebVoipLidUtils").attemptPersistLidMappingAndUserAttributes({
                        jid: lid,
                        phoneNumber: pn,
                        username,
                        pushName: displayName,
                        accountKind,
                        flushImmediately
                    });
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = s(e);
            yield c(t);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = u(e);
            yield c(t);
        });
        return f.apply(this, arguments);
    }
    l.parseWAWebVoipLidCallerDisplayInfoPayload = s;
    l.parseWAWebVoipLidCallerDisplayInfoJsonPayload = u;
    l.handleWAWebVoipLidCallerDisplayInfo = m;
    l.handleWAWebVoipLidCallerDisplayInfoJson = _;
}, 98);