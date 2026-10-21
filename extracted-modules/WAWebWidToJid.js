__d("WAWebWidToJid", [
    "WAJids",
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    function g(t) {
        const n = t.toJid();
        const a = o("WAJids").interpretAndValidateJid(n);
        if (a.jidType === "unknown") {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                'widToJidWithType: "',
                '" is not a valid jid'
            ])), n);
            throw r("err")("widToJidWithType: unknown jid type");
        }
        return a;
    }
    function h(e) {
        if (e.isPSA()) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "widToUserJid: wid is a PSA jid"
            ]))).sendLogs("invalid-psa-user-jid");
            throw r("err")("widToUserJid: can not convert wid to UserJid");
        }
        const t = g(e);
        if (t.jidType === "phoneUser" || t.jidType === "lidUser") {
            return t.userJid;
        }
        if (t.jidType === "bot") {
            return t.botJid;
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            'widToUserJid: "',
            '" is not a UserJid'
        ])), e.toString());
        throw r("err")("widToUserJid: can not convert wid to UserJid");
    }
    function y(e) {
        const t = g(e);
        if (t.jidType === "lidUser") {
            return t.userJid;
        }
        throw r("err")(`userLidtoLidUserJid: ${e.toLogString()} is not not a userLid`);
    }
    function C(e) {
        const t = g(e);
        if (t.jidType === "phoneDevice" || t.jidType === "lidDevice") {
            return t.deviceJid;
        }
        if (t.jidType === "hosted") {
            return t.hostedDeviceJid;
        }
        if (t.jidType === "hostedLid") {
            return t.hostedLidDeviceJid;
        }
        if (t.jidType === "phoneUser") {
            return o("WAJids").defaultDeviceJidForUser(t.userJid);
        }
        if (t.jidType === "lidUser") {
            return o("WAJids").defaultLidDeviceJidForLidUserJid(t.userJid);
        }
        if (t.jidType === "bot") {
            return o("WAJids").defaultDeviceJidForBot(t.botJid);
        }
        t.jidType;
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            'widToDeviceJid: "',
            '" is not a DeviceJid'
        ])), e.toString());
        throw r("err")("widToDeviceJid: can not convert wid to DeviceJid");
    }
    function b(e) {
        const t = g(e);
        if (t.jidType === "group") {
            return t.groupJid;
        }
        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            'widToGroupJid: "',
            '" is not a GroupJid'
        ])), e.toString());
        throw r("err")("widToGroupJid: can not convert wid to GroupJid");
    }
    function v(e) {
        const t = g(e);
        if (t.jidType === "newsletter") {
            return t.newsletterJid;
        }
        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            'widToNewsletterJid: "',
            '" is not a NewsletterJid'
        ])), e.toString());
        throw r("err")("widToNewsletterJid: can not convert wid to NewsletterJid");
    }
    function S(e) {
        const t = g(e);
        if (t.jidType === "group") {
            return t.groupJid;
        }
        if (t.jidType === "phoneUser" || t.jidType === "lidUser") {
            return t.userJid;
        }
        if (t.jidType === "bot") {
            return t.botJid;
        }
        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            'widToChatJid: "',
            '" is not a ChatJid'
        ])), e.toString());
        throw r("err")("widToChatJid: can not convert wid to ChatJid");
    }
    function R(e) {
        const t = g(e);
        if (t.jidType === "broadcast") {
            return t.broadcastJid;
        }
        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
            'widToBroadcastJid: "',
            '" is not a BroadcastJid'
        ])), e.toString());
        throw r("err")("widToBroadcastJid: can not convert wid to BroadcastJid");
    }
    function L(e) {
        const t = g(e);
        if (t.jidType === "group") {
            return t.groupJid;
        }
        if (t.jidType === "status") {
            return t.statusJid;
        }
        if (t.jidType === "broadcast") {
            return t.broadcastJid;
        }
        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
            'widToMulticastJid: "',
            '" is not a MulticastJid'
        ])), e.toString());
        throw r("err")("widToMulticastJid: can not convert wid to MulticastJid");
    }
    function E(e) {
        if (e != null) {
            const t = C(e);
            return {
                userJid: o("WAJids").extractUserJid(t),
                deviceJid: t
            };
        }
    }
    l.widToJidWithType = g;
    l.widToUserJid = h;
    l.userLidtoLidUserJid = y;
    l.widToDeviceJid = C;
    l.widToGroupJid = b;
    l.widToNewsletterJid = v;
    l.widToChatJid = S;
    l.widToBroadcastJid = R;
    l.widToMulticastJid = L;
    l.widToMyJids = E;
}, 98);