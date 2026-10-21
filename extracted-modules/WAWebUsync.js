__d("WAWebUsync", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebUsyncBackoff",
    "WAWebUsyncBotProfile",
    "WAWebUsyncBusiness",
    "WAWebUsyncContact",
    "WAWebUsyncDevice",
    "WAWebUsyncDisappearingMode",
    "WAWebUsyncFeature",
    "WAWebUsyncLid",
    "WAWebUsyncPicture",
    "WAWebUsyncStatus",
    "WAWebUsyncTextStatus",
    "WAWebUsyncUsername",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        PN: "pn",
        LID: "lid"
    };
    const c = {
        FEATURE: "feature",
        DEVICE: "devices",
        CONTACT: "contact",
        PICTURE: "picture",
        STATUS: "status",
        BUSINESS: "business",
        DISAPPEARING_MODE: "disappearing_mode",
        LID: "lid",
        BOT: "bot",
        USERNAME: "username",
        TEXT_STATUS: "text_status"
    };
    const d = {
        feature: o("WAWebUsyncFeature").featureParser,
        devices: o("WAWebUsyncDevice").deviceParser,
        contact: o("WAWebUsyncContact").contactParser,
        picture: o("WAWebUsyncPicture").pictureParser,
        status: o("WAWebUsyncStatus").statusParser,
        business: o("WAWebUsyncBusiness").businessParser,
        disappearing_mode: o("WAWebUsyncDisappearingMode").disappearingModeParser,
        lid: o("WAWebUsyncLid").lidParser,
        bot: o("WAWebUsyncBotProfile").botProfileParser,
        username: o("WAWebUsyncUsername").usernameParser,
        text_status: o("WAWebUsyncTextStatus").textStatusParser
    };
    function m(e) {
        const t = [];
        e.forEachChildWithTag("user", function(e) {
            const n = {};
            const r = e.maybeChild(c.CONTACT);
            if (!(!e.hasAttr("jid") && r == null)) {
                Object.keys(c).forEach((t)=>{
                    const r = c[t];
                    const o = e.maybeChild(r);
                    if (o && d[r]) {
                        n[r] = d[r](o);
                    }
                });
                if (e.hasAttr("jid")) {
                    n.id = o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("jid"));
                }
                if (e.hasAttr("pn_jid")) {
                    n.pn = o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("pn_jid"));
                }
                t.push(n);
            }
        });
        return t;
    }
    const p = new (r("WADeprecatedWapParser"))("usyncParser", function(t) {
        t.assertAttr("type", "result");
        const n = {
            error: {},
            refresh: {},
            list: []
        };
        const r = t.child("usync");
        const a = r.child("result");
        const i = r.child("list");
        Object.keys(c).forEach((e)=>{
            const t = c[e];
            const r = a.maybeChild(t);
            if (r) {
                const o = r.maybeChild("error");
                if (o) {
                    n.error[t] = {
                        errorCode: o.attrInt("code"),
                        errorText: o.attrString("text"),
                        errorBackoff: o.attrInt("backoff")
                    };
                } else if (r.hasAttr("refresh")) {
                    n.refresh[t] = r.attrInt("refresh", 0);
                }
            }
        });
        n.list = m(i);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "usync query success!"
        ])));
        return n;
    });
    const _ = (()=>{
        function e() {
            this.context = "interactive";
            this.mode = "query";
            this.protocols = [];
            this.users = [];
            this.$1 = false;
        }
        const e_prototype = e.prototype;
        e_prototype.withMode = function(t) {
            this.mode = t;
            return this;
        };
        e_prototype.withContext = function(t) {
            this.context = t;
            return this;
        };
        e_prototype.withContactProtocol = function(t) {
            this.protocols.push(new (o("WAWebUsyncContact")).USyncContactProtocol(t));
            return this;
        };
        e_prototype.withBusinessProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncBusiness")).USyncBusinessProtocol);
            return this;
        };
        e_prototype.withDeviceProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncDevice")).USyncDeviceProtocol);
            return this;
        };
        e_prototype.withDisappearingModeProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncDisappearingMode")).USyncDisappearingModeProtocol);
            return this;
        };
        e_prototype.withPictureProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncPicture")).USyncPictureProtocol);
            return this;
        };
        e_prototype.withStatusProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncStatus")).USyncStatusProtocol);
            return this;
        };
        e_prototype.withTextStatusProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncTextStatus")).USyncTextStatusProtocol);
            return this;
        };
        e_prototype.withFeaturesProtocol = function(t) {
            this.protocols.push(new (o("WAWebUsyncFeature")).USyncFeaturesProtocol(t));
            return this;
        };
        e_prototype.withLidProtocol = function() {
            if (!this.$1) {
                this.protocols.push(new (o("WAWebUsyncLid")).USyncLidProtocol);
                this.$1 = true;
            }
            return this;
        };
        e_prototype.withBotProfileProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncBotProfile")).USyncBotProfileProtocol);
            return this;
        };
        e_prototype.withUser = function(t, n = false) {
            const e = t.getId();
            if (n && this.$1 && e != null) {
                if (e.isLid()) {
                    t.withLid(e);
                } else if (e.isRegularUserPn()) {
                    this.$2(t, e);
                }
            }
            this.users.push(t);
            return this;
        };
        e_prototype.$2 = function(t, n) {
            const e = o("WAWebApiContact").getCurrentLid(n);
            if (e != null) {
                t.withLid(e);
            }
        };
        e_prototype.withUsernameProtocol = function() {
            this.protocols.push(new (o("WAWebUsyncUsername")).USyncUsernameProtocol);
            return this;
        };
        e_prototype.$3 = function() {
            const e = this;
            if (this.protocols.length === 0) {
                throw r("err")("a usync query must have at least one protocol");
            }
            const t = this.users.filter((e)=>{
                const t = e.getId();
                if (t && r("WAWebWid").isServer(t)) {
                    return false;
                }
                return e.validate();
            });
            if (t.length === 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Usync warning: a usync query must have at least one user"
                ])));
            }
            const n = o("WAWap").wap("query", null, this.protocols.map((e)=>e.getQueryElement()));
            const a = t.map((t)=>{
                const n = t.getId();
                const r = t.getPnJid();
                return o("WAWap").wap("user", {
                    jid: n ? o("WAWebCommsWapMd").USER_JID(n) : o("WAWap").DROP_ATTR,
                    pn_jid: r ? o("WAWebCommsWapMd").USER_JID(r) : o("WAWap").DROP_ATTR
                }, e.protocols.map((e)=>e.getUserElement(t)));
            });
            const i = o("WAWap").wap("list", null, a);
            return o("WAWap").wap("iq", {
                to: o("WAWap").S_WHATSAPP_NET,
                xmlns: "usync",
                type: "get",
                id: o("WAWap").generateId()
            }, o("WAWap").wap("usync", {
                sid: o("WAWap").generateId(),
                index: "0",
                last: "true",
                mode: o("WAWap").CUSTOM_STRING(this.mode),
                context: o("WAWap").CUSTOM_STRING(this.context)
            }, n, i));
        };
        e_prototype.execute = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.$3();
                yield o("WAWebUsyncBackoff").waitForBackoff(this);
                const t = yield o("WADeprecatedSendIq").deprecatedSendIq(e, p);
                if (t.success) {
                    f(t.result);
                    return t.result;
                }
                return {
                    error: {
                        all: {
                            errorCode: t.errorCode,
                            errorText: t.errorText,
                            errorType: t.errorType
                        }
                    },
                    refresh: {},
                    list: []
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    function f(result) {
        Object.keys(c).forEach((t)=>{
            const n = c[t];
            const r = result.error[n];
            if (r != null && r.errorBackoff != null) {
                o("WAWebUsyncBackoff").setProtocolBackoffMs(n, r.errorBackoff * 1000);
            }
        });
    }
    l.USYNC_ADDRESSING_MODE = u;
    l.USyncQuery = _;
}, 98);