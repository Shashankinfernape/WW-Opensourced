__d("WAParsableWapNode", [
    "WABinary",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAParsableXmlNode",
    "WASignalKeys",
    "WATimeUtils",
    "WAWap",
    "WAWapJid",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, `XmppParsingFailure: ${t}: ${n}`) || this;
            r.name = "XmppParsingFailure";
            r.parser = t;
            r.reason = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.toString = function() {
            return `XmppParsingFailure: ${this.parser}: ${this.reason}`;
        };
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const c = ((t)=>{
        function n(e, n) {
            return t.call(this, e, n) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.assertFromServer = function() {
            const e = this.attrString("from");
            if (e !== o("WAJids").WA_SERVER_JID_SUFFIX) {
                this.throw(`to have "from"="s.whatsapp.net", but instead has "${e}"`);
            }
        };
        a.attrUserJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            return n.botJid ?? n.userJid ?? this.throw(`to have "${t}"={UserJid}, but instead has "${e}"`);
        };
        a.attrPhoneUserJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "phoneUser") {
                return n.userJid;
            }
            return this.throw(`to have "${t}"={PhoneUserJid}, but instead has "${e}"`);
        };
        a.attrLidUserJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "lidUser") {
                return n.userJid;
            }
            return this.throw(`to have "${t}"={LidUserJid}, but instead has "${e}"`);
        };
        a.maybeAttrUserJid = function(t) {
            if (this.hasAttr(t)) {
                return this.attrUserJid(t);
            }
            return null;
        };
        a.maybeAttrPhoneUserJid = function(t) {
            if (this.hasAttr(t)) {
                return this.attrPhoneUserJid(t);
            }
            return null;
        };
        a.maybeAttrLidUserJid = function(t) {
            if (this.hasAttr(t)) {
                return this.attrLidUserJid(t);
            }
            return null;
        };
        a.attrGroupJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            return n.groupJid ?? this.throw(`to have "${t}"={GroupJid}, but instead has "${e}"`);
        };
        a.maybeAttrGroupJid = function(t) {
            if (this.hasAttr(t)) {
                return this.attrGroupJid(t);
            }
            return null;
        };
        a.attrChatJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            return n.userJid ?? n.groupJid ?? n.botJid ?? this.throw(`to have "${t}"={ChatJid}, but instead has "${e}"`);
        };
        a.attrPhoneChatJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "phoneUser") {
                return n.userJid;
            }
            if (n.jidType === "group") {
                return n.groupJid;
            }
            return this.throw(`to have "${t}"={ChatJid}, but instead has "${e}"`);
        };
        a.attrDeviceJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            return n.deviceJid ?? (n.userJid != null ? o("WAJids").defaultDeviceJidForUser(n.userJid) : n.hostedDeviceJid ?? n.hostedLidDeviceJid ?? n.botJid ?? this.throw(`to have "${t}"={DeviceJid}, but instead has "${e}"`));
        };
        a.attrPhoneDeviceJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "phoneDevice") {
                return n.deviceJid;
            }
            if (n.jidType === "phoneUser") {
                return o("WAJids").defaultPhoneDeviceJidForUser(n.userJid);
            }
            return this.throw(`to have "${t}"={PhoneDeviceJid}, but instead has "${e}"`);
        };
        a.attrLidDeviceJid = function(t) {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "lidDevice") {
                return n.deviceJid;
            }
            if (n.jidType === "lidUser") {
                return o("WAJids").defaultLidDeviceJidForLidUserJid(n.userJid);
            }
            return this.throw(`to have "${t}"={LidDeviceJid}, but instead has "${e}"`);
        };
        a.attrDeviceId = function(t) {
            const e = this.attrInt(t);
            return o("WAJids").interpretAsDeviceId(e);
        };
        a.attrFromJidChat = function() {
            const t = this.attrJidWithType();
            switch(t.jidType){
                case "msgrUser":
                    {
                        const n = t.userJid;
                        const a = o("WAJids").defaultDeviceJidForUser(n);
                        return {
                            type: "device",
                            chat: n,
                            deviceJid: a,
                            author: a
                        };
                    }
                case "interopUser":
                    {
                        const i = t.userJid;
                        const l = o("WAJids").defaultDeviceJidForUser(i);
                        return {
                            type: "device",
                            chat: i,
                            deviceJid: l,
                            author: l
                        };
                    }
                case "phoneUser":
                    {
                        const s = t.userJid;
                        const u = o("WAJids").defaultDeviceJidForUser(s);
                        return {
                            type: "device",
                            chat: s,
                            deviceJid: u,
                            author: u
                        };
                    }
                case "lidUser":
                    {
                        const c = t.userJid;
                        const d = o("WAJids").defaultLidDeviceJidForLidUserJid(c);
                        return {
                            type: "device",
                            chat: c,
                            deviceJid: d,
                            author: d
                        };
                    }
                case "phoneDevice":
                    {
                        const m = t.deviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractUserJid(m),
                            deviceJid: m,
                            author: m
                        };
                    }
                case "msgrDevice":
                    {
                        const p = t.deviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractUserJid(p),
                            deviceJid: p,
                            author: p
                        };
                    }
                case "interopDevice":
                    {
                        const _ = t.deviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractUserJid(_),
                            deviceJid: _,
                            author: _
                        };
                    }
                case "lidDevice":
                    {
                        const f = t.deviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractUserJid(f),
                            deviceJid: f,
                            author: f
                        };
                    }
                case "group":
                    {
                        const g = this.hasAttr("participant") ? this.attrDeviceJid("participant") : null;
                        if (g == null) {
                            return this.throw("expected to have participant JID for group");
                        }
                        return {
                            type: "group",
                            chat: t.groupJid,
                            groupJid: t.groupJid,
                            author: g
                        };
                    }
                case "broadcast":
                    {
                        const h = this.hasAttr("participant") ? this.attrDeviceJid("participant") : null;
                        if (h == null) {
                            return this.throw("expected to have participant JID for group");
                        }
                        return {
                            type: "broadcast",
                            broadcastJid: t.broadcastJid,
                            chat: o("WAJids").extractUserJid(h),
                            author: h
                        };
                    }
                case "hosted":
                    {
                        const y = t.hostedDeviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractUserJid(y),
                            deviceJid: y,
                            author: y
                        };
                    }
                case "hostedLid":
                    {
                        const C = t.hostedLidDeviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractUserJid(C),
                            deviceJid: C,
                            author: C
                        };
                    }
                case "call":
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ParsableWapNode: attrFromJid() is called with ",
                        ""
                    ])), t.callJid);
                    throw r("err")("ParsableWapNode: attrFromJid() does not support CallJid");
                default:
                    t.jidType;
                    return this.throw(`attrFromJidChat should not be used with jid of type ${t.jidType}`);
            }
        };
        a.attrFromJidPhoneChat = function() {
            const e = this.attrJidWithType();
            switch(e.jidType){
                case "phoneUser":
                    {
                        const t = e.userJid;
                        const n = o("WAJids").defaultPhoneDeviceJidForUser(t);
                        return {
                            type: "device",
                            chat: t,
                            deviceJid: n,
                            author: n
                        };
                    }
                case "phoneDevice":
                    {
                        const a = e.deviceJid;
                        return {
                            type: "device",
                            chat: o("WAJids").extractPhoneUserJid(a),
                            deviceJid: a,
                            author: a
                        };
                    }
                case "group":
                    {
                        const i = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
                        if (i == null) {
                            return this.throw("expected to have participant JID for group");
                        }
                        return {
                            type: "group",
                            chat: e.groupJid,
                            groupJid: e.groupJid,
                            author: i
                        };
                    }
                case "broadcast":
                    {
                        const l = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
                        if (l == null) {
                            return this.throw("expected to have participant JID for group");
                        }
                        return {
                            type: "broadcast",
                            broadcastJid: e.broadcastJid,
                            chat: o("WAJids").extractPhoneUserJid(l),
                            author: l
                        };
                    }
                case "call":
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "ParsableWapNode: attrFromJid() is called with ",
                        ""
                    ])), e.callJid);
                    throw r("err")("ParsableWapNode: attrFromJid() does not support CallJid");
                default:
                    e.jidType;
                    return this.throw(`attrFromJidChat should not be used with jid of type ${e.jidType}`);
            }
        };
        a.attrFromPhoneJid = function() {
            const e = this.attrJidWithType();
            if (e.jidType === "status") {
                const t = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
                if (t == null) {
                    return this.throw("to have participant for status msg");
                }
                return {
                    type: "status",
                    author: t
                };
            } else {
                return this.attrFromJidPhoneChat();
            }
        };
        a.attrFromJid = function() {
            const e = this.attrJidWithType();
            if (e.jidType === "status") {
                const t = this.hasAttr("participant") ? this.attrPhoneDeviceJid("participant") : null;
                if (t == null) {
                    return this.throw("to have participant for status msg");
                }
                return {
                    type: "status",
                    author: t
                };
            }
            if (e.jidType === "newsletter") {
                return {
                    type: "newsletter",
                    newsletterJid: e.newsletterJid
                };
            }
            if (e.jidType === "hosted") {
                return {
                    type: "hosted",
                    hostedDeviceJid: e.hostedDeviceJid
                };
            }
            if (e.jidType === "hostedLid") {
                return {
                    type: "hostedLid",
                    hostedLidDeviceJid: e.hostedLidDeviceJid
                };
            }
            return this.attrFromJidChat();
        };
        a.attrJidWithType = function(t = "from") {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "unknown") {
                return this.throw(`to have "${t}"={Jid}, but instead has "${e}"`);
            }
            return n;
        };
        a.attrWapJid = function(t = "from") {
            const e = this.attrString(t);
            const n = o("WAJids").interpretAndValidateJid(e);
            if (n.jidType === "unknown") {
                return o("WAWapJid").WapJid.create(null, e);
            }
            return o("WAWap").JID(o("WAJids").extractFromJid(n));
        };
        a.attrLongInt = function(t) {
            const e = this.attrString(t);
            return o("WALongInt").decimalStringToLongInt(e);
        };
        a.attrTime = function(t) {
            return o("WATimeUtils").castToUnixTime(this.attrInt(t));
        };
        a.maybeAttrTime = function(t) {
            if (this.hasAttr(t)) {
                return this.attrTime(t);
            }
            return null;
        };
        a.attrFutureTime = function(t) {
            const e = this.attrInt(t);
            return o("WATimeUtils").futureUnixTime(e);
        };
        a.contentString = function() {
            if (this.hasChildren()) {
                return this.throw("to have string content, but has children instead");
            }
            if (this.hasContent()) {
                const e = new (o("WABinary")).Binary(this.contentBytes());
                return e.readString(e.size());
            } else {
                return this.throw("to have content");
            }
        };
        a.decodeAsString = function(t) {
            return o("WAWap").decodeAsString(t);
        };
        a.contentSerializedPubKey = function() {
            if (this.hasContent()) {
                return o("WASignalKeys").serializeIdentity(this.contentBytes());
            }
            return this.throw("to have content");
        };
        a.createParseError = function(t) {
            return new u(this.name(), `expected <${this.tag()}> ${t}`);
        };
        a.throw = function(t) {
            throw this.createParseError(t);
        };
        return n;
    })(o("WAParsableXmlNode").ParsableXmlNode);
    l.XmppParsingFailure = u;
    l.ParsableWapNode = c;
}, 98);