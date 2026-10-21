__d("WAWebMsgKey", [
    "WALogger",
    "WARandomHex",
    "WAWebMsgKeyNewId",
    "WAWebParseMsgKeyString",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = (()=>{
        function t(n) {
            let a = n;
            if (!a) {
                throw r("err")("MsgKey error: obj is null/undefined");
            }
            if (a.id instanceof t) {
                a = a.id;
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "MsgKey error: id is already a MsgKey"
                ])));
            }
            const i = !r("isStringNullOrEmpty")(a.id);
            const l = a.from != null && a.to != null && i;
            const p = a.fromMe !== void 0 && a.remote != null && i;
            let _;
            let f;
            let g;
            let h;
            let y;
            let C;
            let b;
            const v = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (v) {
                if (l && p) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Unclear constructor MsgKey"
                    ])));
                    throw r("err")("MsgKey error: unclear which constructor to use");
                }
                if (!l && !p) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "No matching constructor MsgKey"
                    ])));
                    throw r("err")("MsgKey error: don't have a matching constructor");
                }
                if (l) {
                    const S = a;
                    _ = S.from;
                    g = S.id;
                    h = S.participant;
                    y = S.selfDir;
                    f = S.to;
                    if (!(_ instanceof r("WAWebWid")) || !(f instanceof r("WAWebWid")) || h && !(h instanceof r("WAWebWid"))) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Incorrect Wid MsgKey"
                        ])));
                        throw r("err")("MsgKey error: something is not a wid");
                    }
                    const R = r("WAWebWid").equals(_, f);
                    y = R ? y : void 0;
                    if (R && o("WAWebUserPrefsMeUser").isMePrimary(_)) {
                        C = y === "out";
                        b = f;
                    } else if (o("WAWebUserPrefsMeUser").isMePrimary(_)) {
                        C = true;
                        b = f;
                    } else if (o("WAWebUserPrefsMeUser").isMePrimary(f)) {
                        C = false;
                        b = _;
                    } else if (R && (r("WAWebWid").isGroup(_) || r("WAWebWid").isBroadcast(_))) {
                        C = true;
                        b = _;
                    } else {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "MsgKey case error"
                        ])));
                    }
                    if (C !== void 0) {
                        this.fromMe = C;
                    }
                    if (b) {
                        this.remote = b;
                    }
                    if (g) {
                        this.id = g;
                    }
                } else if (p) {
                    const L = a;
                    C = L.fromMe;
                    g = L.id;
                    h = L.participant;
                    b = L.remote;
                    if (!(b instanceof r("WAWebWid")) || h && !(h instanceof r("WAWebWid"))) {
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "Incorrect Wid MsgKey"
                        ])));
                        throw r("err")("MsgKey error: something is not a wid");
                    }
                    if (o("WAWebUserPrefsMeUser").isMePrimary(b)) {
                        y = C === true ? "out" : "in";
                    }
                    if (C !== void 0) {
                        this.fromMe = C;
                    }
                    if (b) {
                        this.remote = b;
                    }
                    if (g) {
                        this.id = g;
                    }
                }
            } else {
                throw r("err")("MsgKey error: me is undefined. Running tests? Call setupGlobalsForTests first.");
            }
            const E = [
                this.fromMe,
                this.remote,
                this.id
            ];
            if (y !== void 0) {
                this.self = y;
                E.push(this.self);
            }
            if (h !== void 0) {
                this.participant = h;
                E.push(this.participant);
            }
            this.$1 = E.join("_");
        }
        const a = t.prototype;
        a.toString = function() {
            return this.$1;
        };
        a.clone = function() {
            return new t({
                fromMe: this.fromMe,
                remote: this.remote,
                id: this.id,
                participant: this.participant
            });
        };
        a.equals = function(n) {
            return n instanceof t && this.toString() === n.toString();
        };
        t.fromString = function(n) {
            if (n == null) {
                throw r("err")("MsgKey.fromString error: str is null or not a string");
            }
            return t.from(n);
        };
        t.from = function(n) {
            if (n instanceof t) {
                return n;
            }
            let e;
            if (typeof n === "string") {
                e = r("WAWebParseMsgKeyString")(n);
            } else {
                e = n;
            }
            return new t({
                fromMe: e.fromMe,
                remote: o("WAWebWidFactory").createWidFromWidLike(e.remote),
                id: e.id,
                participant: e.participant != null ? o("WAWebWidFactory").createWidFromWidLike(e.participant) : void 0
            });
        };
        t.newId = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const e = yield o("WAWebMsgKeyNewId").getMsgKeyNewSHA256Id();
                    return e;
                } catch (e) {
                    const n = r("getErrorSafe")(e);
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "getMsgKeyNewId"
                    ]))).catching(n).sendLogs("msg_key: error generating sha256 message key");
                    return t.newId_DEPRECATED();
                }
            });
            function a() {
                return e.apply(this, arguments);
            }
            return a;
        })();
        t.newId_DEPRECATED = function() {
            return `3EB0${o("WARandomHex").randomHex(8)}`;
        };
        return t;
    })();
    l.default = _;
}, 98);