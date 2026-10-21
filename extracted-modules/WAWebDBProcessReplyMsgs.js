__d("WAWebDBProcessReplyMsgs", [
    "WADeepEquals",
    "WAWebBatchedStatusIdUtils",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebGroupType",
    "WAWebMessageEditUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "filterObject",
    "isStringNullOrEmpty",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length) {
                const t = yield o("WAWebModelStorageUtils").getStorage().lock([
                    "message"
                ], (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const a = new Set;
                        e.forEach((e)=>{
                            const t = u(e);
                            if (t !== "missing-stanza-id") {
                                a.add(t.toString());
                            }
                        });
                        const i = (yield o("WAWebDBMsgUtils").getMsgsByMsgKey(Array.from(a.values()))).filter((e)=>{
                            const t = o("WAWebMessageEditUtils").getMsgEditType(e.type);
                            return t != null;
                        });
                        const l = new Map(i.map((e)=>[
                                e.id.toString(),
                                e
                            ]));
                        const s = e.filter((e)=>{
                            const t = u(e);
                            if (t === "missing-stanza-id") {
                                return false;
                            }
                            return l.has(t.toString());
                        });
                        if (s.length) {
                            const c = [];
                            s.forEach((e)=>{
                                const t = u(e);
                                if (t !== "missing-stanza-id") {
                                    const quotedMsg = r("nullthrows")(l.get(t.toString()));
                                    if (e.quotedMsg == null) {
                                        c.push(babelHelpers.extends({}, e, {
                                            quotedMsg
                                        }));
                                    } else if (d(r("nullthrows")(e.quotedMsg), quotedMsg)) {
                                        c.push(babelHelpers.extends({}, e, {
                                            quotedMsg
                                        }));
                                    }
                                }
                            });
                            if (c.length) {
                                yield n.bulkCreateOrMerge(c.map((e)=>o("WAWebDBMessageSerialization").dbRowFromMessage(e)));
                                return c;
                            }
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
                if (t != null && t.length) {
                    t.forEach((t)=>{
                        const n = r("nullthrows")(e.find((e)=>e.id.equals(t.id)));
                        n.quotedMsg = t.quotedMsg;
                    });
                }
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (r("isStringNullOrEmpty")(e.quotedStanzaID)) {
            return "missing-stanza-id";
        }
        const a = e.quotedParticipant ?? undefined;
        const i = e.quotedRemoteJid ?? e.id.remote;
        const e_quotedStanzaID = e.quotedStanzaID;
        const s = e_quotedStanzaID != null && r("WAWebWid").isStatus(i) ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e_quotedStanzaID) : e_quotedStanzaID;
        return new (r("WAWebMsgKey"))({
            id: s,
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(a),
            remote: i,
            participant: o("WAWebMsgGetters").getIsGroupMsg(e) || r("WAWebWid").isStatus(i) || a != null && a.isBot() ? a : undefined
        });
    }
    const c = {
        inviteGrpType: o("WAWebGroupType").GroupType.DEFAULT,
        thumbnail: "",
        body: "",
        caption: "",
        interactiveAnnotations: [],
        scanLengths: [],
        staticUrl: "",
        pageCount: 0
    };
    function d(e, quotedMsg) {
        const n = r("filterObject")(e, function(e, t) {
            return e != null && t !== "kind";
        });
        const a = r("filterObject")(quotedMsg, function(e, t) {
            return Object.prototype.hasOwnProperty.call(n, t) && t !== "kind";
        });
        const i = m(n);
        const l = m(a);
        return !o("WADeepEquals").deepEqual(i, l);
    }
    function m(e) {
        const t = babelHelpers.extends({}, c);
        for (const [r, o] of Object.entries(e)){
            if (o !== undefined) {
                t[r] = o;
            }
        }
        return t;
    }
    l.processReplyMsgs = e;
    l.createQuotedMsgKey = u;
}, 98);