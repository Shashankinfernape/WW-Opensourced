__d("WAWebWid", [
    "WAJids",
    "WALogger",
    "WATypeUtils",
    "WAWebABPropsCAPISupportNumber",
    "WAWebABPropsSupportGroup",
    "WAWebABPropsSupportLid",
    "WAWebWidError",
    "WAWebWidValidator",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = "server@c.us";
    const _ = "0@c.us";
    const f = "16508638904@c.us";
    const g = "165332417282214";
    const h = "1807055946647698";
    const y = "16505361212@c.us";
    const C = new Set([
        "12485302707",
        "12485302708",
        "12485302709",
        "113074241552586",
        "179818150817991",
        "32101239943362"
    ]);
    const b = /^1313555\d{4}$|^131655500\d{2}$/;
    const v = 99;
    const S = 4;
    var R = (()=>{
        function t(t, { intentionallyUsePrivateConstructor: a }) {
            if (!a) {
                throw r("err")("You should use WidFactory.createWid() instead of the Wid constructor. If you absolutely must use the constructor, pass {intentionallyUsePrivateConstructor: true} as a second parameter.");
            }
            if (t === "call") {
                this.user = "call";
                this.device = null;
                this._serialized = "call";
                return;
            }
            const i = o("WAWebWidValidator").validateAndGetParts(t);
            if (i == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid wid: ",
                    ""
                ])), t);
                throw new (o("WAWebWidError")).InvalidWidError("wid error: invalid wid");
            }
            const l = [];
            const { userPart: d, devicePart: m } = i;
            const p = i.serverPart.toLowerCase();
            let _;
            switch(p){
                case "s.whatsapp.net":
                    _ = "c.us";
                    break;
                default:
                    _ = p;
                    break;
            }
            this.server = _;
            if (d == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "wid represents server and should not be used: ",
                    ""
                ])), t);
                throw r("err")("wid error: wid represents server and should not be used");
            }
            this.user = d;
            l.push(this.user);
            if (m != null) {
                if (this.server !== "c.us" && this.server !== "lid" && this.server !== "hosted" && this.server !== "hosted.lid" && this.server !== "bot") {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "wrong server for wid with device present: ",
                        ""
                    ])), t);
                    throw r("err")("wid error: wrong server for wid with device present");
                }
                const f = parseInt(m, 10);
                if (f) {
                    l.push(":");
                    l.push(f);
                    this.device = f;
                }
            }
            if (this.isHosted() && (this.device == null || this.device !== v)) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "@hosted jid must have device id of 99"
                ])));
                throw r("err")("wid error: unexpected device id in hosted wid");
            }
            l.push("@");
            l.push(this.server);
            this._serialized = l.join("");
        }
        const n = t.prototype;
        n.$1 = function() {
            if (!r("gkx")("26258")) {
                return this.user;
            }
            if (this.isGroup()) {
                const e = this.user.split("-");
                if (e.length === 2) {
                    const t = e[0];
                    const n = e[1];
                    return `${t.slice(-S)}-${n}`;
                }
            }
            return this.user.slice(-S);
        };
        n.toString = function(t) {
            if (t) {
                let e;
                let n;
                const r = t.legacy && this.server === "c.us" ? "s.whatsapp.net" : this.server;
                if (t.formatFull === true || t.formatIncludeDevice === true) {
                    n = `:${this.device || 0}`;
                } else {
                    n = this.device != null && this.device !== 0 ? `:${this.device}` : "";
                }
                if (t.formatFull === true || t.formatIncludeAgent === true) {
                    e = ".0";
                }
                const o = t.forLog === true ? this.$1() : this.user;
                if (t.forLog === true || t.formatFull === true || t.legacy && this.server === "c.us") {
                    return [
                        o,
                        e,
                        n,
                        "@",
                        r
                    ].join("");
                }
            }
            return this._serialized;
        };
        n.toLogString = function() {
            return this.toString({
                forLog: true,
                legacy: false
            });
        };
        n.toJid = function() {
            return this.toString({
                legacy: true
            });
        };
        n.getJidServer = function() {
            if (this.server === "c.us") {
                return o("WAJids").WA_USER_JID_SUFFIX;
            }
            return this.server;
        };
        n.getDeviceId = function() {
            const e = this.device;
            return e ?? 0;
        };
        n.equals = function(n) {
            return n instanceof t && this.toString() === n.toString();
        };
        n.isLessThan = function(n) {
            return n instanceof t && this.toString() < n.toString();
        };
        n.isGreaterThan = function(n) {
            return n instanceof t && this.toString() > n.toString();
        };
        n.isCompanion = function() {
            return this.device != null && this.device !== o("WAJids").DEFAULT_DEVICE_ID;
        };
        n.isSameAccountAndAddressingMode = function(t) {
            if (this.device === v || t.device === v) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "isSameAccount check for hosted : ",
                    " : ",
                    ""
                ])), this.toLogString(), t.toLogString()).tags("coex");
                let e = false;
                switch(this.server){
                    case "hosted":
                        e = t.server === "c.us";
                        break;
                    case "hosted.lid":
                        e = t.server === "lid";
                        break;
                    case "c.us":
                        e = t.server === "hosted";
                        break;
                    case "lid":
                        e = t.server === "hosted.lid";
                        break;
                    default:
                        break;
                }
                if (e) {
                    return this.user === t.user;
                }
            }
            return this.server === t.server && this.user === t.user;
        };
        n.isUser = function() {
            return this.server === "c.us" || this.server === "lid" || this.server === "bot" || this.server === "hosted" || this.server === "hosted.lid";
        };
        n.isLid = function() {
            return this.server === "lid";
        };
        n.isHostedLid = function() {
            return this.server === "hosted.lid";
        };
        n.isUserNotPSA = function() {
            return this.isUser() && !this.isPSA();
        };
        n.isRegularUser = function() {
            return this.isUser() && !this.isPSA() && !this.isBot();
        };
        n.isRegularUserPn = function() {
            return this.isRegularUser() && !this.isLid();
        };
        n.isBroadcast = function() {
            return this.server === "broadcast";
        };
        n.isBroadcastList = function() {
            return this.server === "broadcast" && !this.isStatus();
        };
        n.isOfficialBizAccount = function() {
            return this.toString() === y;
        };
        n.isEligibleForUSync = function() {
            return this.isUser() && !this.isPSA();
        };
        n.isGroup = function() {
            return this.server === "g.us";
        };
        n.isGroupCall = function() {
            return this.server === "call";
        };
        n.isServer = function() {
            return this.user.toLowerCase() === "server" && this.server === "c.us";
        };
        n.isPSA = function() {
            return this.user === "0" && this.server === "c.us";
        };
        n.isIAS = function() {
            return this.user === "16508638904" && this.server === "c.us";
        };
        n.isAiHub = function() {
            return this.user === g && this.server === "lid" || this.user === h && this.server === "bot";
        };
        n.isMetaForBusiness = function() {
            return this.isUser() && C.has(this.user);
        };
        n.isStatus = function() {
            return this.user.toLowerCase() === "status" && this.server === "broadcast";
        };
        n.isSupportAccount = function() {
            if (this.isLid()) {
                return o("WAWebABPropsSupportLid").getIsWaSupportLid(this.user);
            }
            if (this.isFbidBot()) {
                return o("WAWebABPropsSupportLid").getIsWaSupportBotFbid(this.user);
            }
            return r("WAWebABPropsSupportGroup")(this.user);
        };
        n.isCAPISupportAccount = function() {
            if (this.isLid()) {
                return o("WAWebABPropsSupportLid").getIsWaCAPISupportLid(this.user);
            }
            if (this.isFbidBot()) {
                return o("WAWebABPropsSupportLid").getIsWaCAPISupportBotFbid(this.user);
            }
            return r("WAWebABPropsCAPISupportNumber")(this.user);
        };
        n.isSupportAgentBot = function() {
            return this.isFbidBot() && this.isSupportAccount();
        };
        n.isPaymentSupportAgentBot = function() {
            return this.isFbidBot() && o("WAWebABPropsSupportLid").getIsWaPaymentSupportBotFbid(this.user);
        };
        n.isNewsletter = function() {
            return this.server === "newsletter";
        };
        n.isBot = function() {
            return this.isPnBot() || this.isFbidBot();
        };
        n.isPnBot = function() {
            return this.server === "c.us" && b.test(this.user) && (this.device == null || this.device === 0);
        };
        n.isFbidBot = function() {
            return this.server === "bot" && (this.device == null || this.device === 0);
        };
        n.toJSON = function() {
            return this.toString();
        };
        n.isHosted = function() {
            return this.server === "hosted" || this.server === "hosted.lid" || this.device === v;
        };
        t.isXWid = function(n, r) {
            if (o("WATypeUtils").isString(r)) {
                return r.split("@")[1] === n;
            }
            if (r instanceof t) {
                return r.server === n;
            }
            if (r !== void 0) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "wid:isXWid called on typeof: ",
                    ""
                ])), typeof r);
            }
            return false;
        };
        t.isUser = function(n) {
            return t.isXWid("c.us", n) || t.isXWid(o("WAJids").WA_USER_JID_SUFFIX, n) || t.isXWid("lid", n) || t.isXWid("bot", n);
        };
        t.isStringLid = function(n) {
            return t.isXWid("lid", n);
        };
        t.isBroadcast = function(n) {
            return t.isXWid("broadcast", n);
        };
        t.isGroup = function(n) {
            return t.isXWid("g.us", n);
        };
        t.isNewsletter = function(n) {
            return t.isXWid("newsletter", n);
        };
        t.isHosted = function(n) {
            return t.isXWid("hosted", n) || t.isXWid("hosted.lid", n);
        };
        t.isFbidBot = function(n) {
            return t.isXWid("bot", n);
        };
        t.isPnBot = function(n) {
            const o = n?.toString()?.split("@")[0] ?? "";
            return t.isXWid("c.us", n) && b.test(o);
        };
        t.isBot = function(n) {
            return t.isFbidBot(n) || t.isPnBot(n);
        };
        t.isRegularUserNoImply = function(t) {
            return L(t);
        };
        t.isGroupCall = function(n) {
            return t.isXWid("call", n);
        };
        t.isWid = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return o("WAWebWidValidator").validateWid(n);
            }
            return n instanceof t;
        };
        t.isServer = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return n.toLowerCase() === p;
            }
            if (n instanceof t) {
                return n.isServer();
            }
            return false;
        };
        t.isPSA = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return n.toLowerCase() === _;
            }
            if (n instanceof t) {
                return n.isPSA();
            }
            return false;
        };
        t.isIAS = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return n.toLowerCase() === f;
            }
            if (n instanceof t) {
                return n.isIAS();
            }
            return false;
        };
        t.isAiHub = function(n) {
            if (o("WATypeUtils").isString(n)) {
                const e = n.toLowerCase();
                return e === g || e === h;
            } else if (n instanceof t) {
                return n.isAiHub();
            }
            return false;
        };
        t.isMetaForBusiness = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return t.isUser(n) && C.has(n.split("@")[0]);
            }
            if (n instanceof t) {
                return n.isMetaForBusiness();
            }
            return false;
        };
        t.isStatus = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return n.toLowerCase() === o("WAJids").STATUS_JID;
            }
            if (n instanceof t) {
                return n.isStatus();
            }
            return false;
        };
        t.isSupportAccount = function(n) {
            if (o("WATypeUtils").isString(n)) {
                if (t.isStringLid(n)) {
                    return o("WAWebABPropsSupportLid").getIsWaSupportLid(n.split("@")[0]);
                }
                if (t.isFbidBot(n)) {
                    const e = E(n);
                    return e != null && o("WAWebABPropsSupportLid").getIsWaSupportBotFbid(e);
                }
                return r("WAWebABPropsSupportGroup")(n.split("@")[0]);
            } else if (n instanceof t) {
                if (n.isLid()) {
                    return o("WAWebABPropsSupportLid").getIsWaSupportLid(n.user);
                }
                return n.isSupportAccount();
            }
            return false;
        };
        t.isCAPISupportAccount = function(n) {
            if (o("WATypeUtils").isString(n)) {
                if (t.isStringLid(n)) {
                    return o("WAWebABPropsSupportLid").getIsWaCAPISupportLid(n.split("@")[0]);
                }
                if (t.isFbidBot(n)) {
                    const e = E(n);
                    return e != null && o("WAWebABPropsSupportLid").getIsWaCAPISupportBotFbid(e);
                }
                return r("WAWebABPropsCAPISupportNumber")(n.split("@")[0]);
            } else if (n instanceof t) {
                if (n.isLid()) {
                    return o("WAWebABPropsSupportLid").getIsWaCAPISupportLid(n.user);
                }
                return n.isCAPISupportAccount();
            }
            return false;
        };
        t.isOfficialBizAccount = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return n.toLowerCase() === y;
            }
            if (n instanceof t) {
                return n.isOfficialBizAccount();
            }
            return false;
        };
        t.isEligibleForUSync = function(n) {
            return t.isUser(n) && !t.isPSA(n);
        };
        t.user = function(n) {
            if (o("WATypeUtils").isString(n)) {
                return n.split("@")[0];
            }
            if (n instanceof t) {
                return n.user;
            }
        };
        t.equals = function(n, r) {
            if (!(n instanceof t) && !(r instanceof t)) {
                return n === r;
            }
            return n instanceof t && n.equals(r);
        };
        t.compare = function(t, n) {
            const e = t.toJid();
            const r = n.toJid();
            if (e < r) {
                return -1;
            }
            if (e > r) {
                return 1;
            }
            return 0;
        };
        return t;
    })();
    function L(e) {
        return R.isUser(e) && !R.isPSA(e) && !R.isBot(e);
    }
    function E(e) {
        return o("WAWebWidValidator").validateAndGetParts(e)?.userPart;
    }
    l.default = R;
}, 98);