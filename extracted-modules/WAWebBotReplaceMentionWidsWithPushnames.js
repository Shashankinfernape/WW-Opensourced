__d("WAWebBotReplaceMentionWidsWithPushnames", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "escapeRegex",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = "Meta AI";
    const d = [
        function(e) {
            const e_extendedTextMessage = e.extendedTextMessage;
            if (e_extendedTextMessage?.text == null) {
                return null;
            }
            return {
                text: e_extendedTextMessage.text,
                quotedMessage: e_extendedTextMessage.contextInfo?.quotedMessage,
                mentionedJids: e_extendedTextMessage.contextInfo?.mentionedJid,
                apply: function(n, o) {
                    let t = babelHelpers.extends({}, e_extendedTextMessage, {
                        text: n
                    });
                    if (o != null && e_extendedTextMessage.contextInfo != null) {
                        t = babelHelpers.extends({}, t, {
                            contextInfo: babelHelpers.extends({}, e_extendedTextMessage.contextInfo, {
                                quotedMessage: o
                            })
                        });
                    }
                    e.extendedTextMessage = t;
                }
            };
        },
        function(e) {
            const e_imageMessage = e.imageMessage;
            if (e_imageMessage?.caption == null) {
                return null;
            }
            return {
                text: e_imageMessage.caption,
                quotedMessage: e_imageMessage.contextInfo?.quotedMessage,
                mentionedJids: e_imageMessage.contextInfo?.mentionedJid,
                apply: function(n, o) {
                    let t = babelHelpers.extends({}, e_imageMessage, {
                        caption: n
                    });
                    if (o != null && e_imageMessage.contextInfo != null) {
                        t = babelHelpers.extends({}, t, {
                            contextInfo: babelHelpers.extends({}, e_imageMessage.contextInfo, {
                                quotedMessage: o
                            })
                        });
                    }
                    e.imageMessage = t;
                }
            };
        },
        function(e) {
            const e_videoMessage = e.videoMessage;
            if (e_videoMessage?.caption == null) {
                return null;
            }
            return {
                text: e_videoMessage.caption,
                quotedMessage: e_videoMessage.contextInfo?.quotedMessage,
                mentionedJids: e_videoMessage.contextInfo?.mentionedJid,
                apply: function(n, o) {
                    let t = babelHelpers.extends({}, e_videoMessage, {
                        caption: n
                    });
                    if (o != null && e_videoMessage.contextInfo != null) {
                        t = babelHelpers.extends({}, t, {
                            contextInfo: babelHelpers.extends({}, e_videoMessage.contextInfo, {
                                quotedMessage: o
                            })
                        });
                    }
                    e.videoMessage = t;
                }
            };
        },
        function(e) {
            const e_documentMessage = e.documentMessage;
            if (e_documentMessage?.caption == null) {
                return null;
            }
            return {
                text: e_documentMessage.caption,
                quotedMessage: e_documentMessage.contextInfo?.quotedMessage,
                mentionedJids: e_documentMessage.contextInfo?.mentionedJid,
                apply: function(n, o) {
                    let t = babelHelpers.extends({}, e_documentMessage, {
                        caption: n
                    });
                    if (o != null && e_documentMessage.contextInfo != null) {
                        t = babelHelpers.extends({}, t, {
                            contextInfo: babelHelpers.extends({}, e_documentMessage.contextInfo, {
                                quotedMessage: o
                            })
                        });
                    }
                    e.documentMessage = t;
                }
            };
        }
    ];
    function m(e, t) {
        if (e === "" || t.size === 0) {
            return e;
        }
        const n = [].concat(Array.from(t.keys())).sort((e, t)=>t.length - e.length);
        const o = new RegExp(`(${n.map(r("escapeRegex")).join("|")})(?!\\d)`, "g");
        return e.replace(o, (e)=>t.get(e) ?? e);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r = "pushnameOrVerifiedName") {
            const a = new Map;
            const i = e ?? [];
            const l = i.filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid);
            const s = i.filter((e)=>!o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) && !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e));
            i.filter(o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid).forEach((e)=>{
                a.set(`@${e.user}`, `@${c}`);
            });
            const d = yield (u || (u = n("Promise"))).all([
                s.length > 0 ? o("WAWebApiContact").bulkGetContactRecord(s) : [],
                l.length > 0 ? g(l) : []
            ]);
            const m = d[0];
            const p = d[1];
            s.forEach((e, t)=>{
                const n = f(e, m[t], r);
                if (n != null && n !== "") {
                    a.set(`@${e.user}`, `@${n}`);
                }
            });
            l.forEach((e, t)=>{
                const n = p[t];
                if (n != null && n !== "") {
                    a.set(`@${e.user}`, `@${n}`);
                }
            });
            for (const _ of t ?? []){
                const { groupJid, groupSubject } = _;
                if (groupSubject != null && groupSubject !== "") {
                    a.set(`@${groupJid.toString()}`, `@${groupSubject}`);
                }
            }
            return a;
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n) {
        if (n === "pushname" && !e.isBot()) {
            return t?.pushname;
        }
        return t?.pushname || t?.verifiedName;
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebSchemaBotProfile").getBotProfileTable().bulkGet(e.map((e)=>e.toString()));
                return t.map((e)=>e?.name);
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[botReplaceMentionWidsWithPushnames] bot profile read failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("bot-mention-agent-profile-read-failed");
                return [];
            }
        });
        return h.apply(this, arguments);
    }
    const y = [
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension",
        "documentWithCaptionMessage",
        "ephemeralMessage",
        "groupMentionedMessage",
        "spoilerMessage"
    ];
    function C(e) {
        for (const t of d){
            const n = t(e);
            if (n != null) {
                return n;
            }
        }
        return b(e);
    }
    function b(e) {
        const t = (n)=>{
            const t = e[n];
            const r = t?.message;
            if (t != null && r != null) {
                const o = babelHelpers.extends({}, r);
                const a = C(o);
                if (a != null) {
                    return {
                        v: babelHelpers.extends({}, a, {
                            apply: function(i, l) {
                                a.apply(i, l);
                                e[n] = babelHelpers.extends({}, t, {
                                    message: o
                                });
                            }
                        })
                    };
                }
            }
        };
        let n;
        for (const r of y){
            n = t(r);
            if (n) {
                return n.v;
            }
        }
        return null;
    }
    function v(e, t) {
        const n = C(e);
        if (n != null) {
            const r = m(n.text, t);
            if (r !== n.text) {
                n.apply(r, null);
            }
        }
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                const a = C(e);
                if (a != null) {
                    const i = a.quotedMessage != null ? C(babelHelpers.extends({}, a.quotedMessage))?.mentionedJids : null;
                    if (!(t.length === 0 && (i?.length ?? 0) === 0 || !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled())) {
                        const l = E(t, L(i));
                        if (l.length !== 0) {
                            const s = yield p(l, null, "pushname");
                            if (s.size !== 0) {
                                const u = new Set(t.map((e)=>`@${e.user}`));
                                const c = new Map(Array.from(s).filter(([t])=>u.has(t)));
                                const d = m(a.text, c);
                                let _ = null;
                                if (a.quotedMessage != null) {
                                    _ = babelHelpers.extends({}, a.quotedMessage);
                                    v(_, s);
                                }
                                if (d !== a.text || _ != null) {
                                    a.apply(d, _);
                                }
                            }
                        }
                    }
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(t) {
        const n = [];
        const a = [];
        for (const i of t ?? []){
            try {
                const l = o("WAWebWidFactory").createWid(i);
                if (l.isUser() || l.isBot()) {
                    n.push(l);
                }
            } catch (error) {
                a.push(error);
            }
        }
        if (a.length > 0) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[botReplaceMentionWidsWithPushnames] skipped ",
                " invalid quoted mention jids"
            ])), a.length).catching(r("getErrorSafe")(a[0])).sendLogs("bot-mention-quoted-jid-invalid");
        }
        return n;
    }
    function E(e, t) {
        const n = new Map;
        [].concat(e, t).forEach((e)=>{
            n.set(e.toString(), e);
        });
        return Array.from(n.values());
    }
    l.replaceMentionsInText = m;
    l.buildMentionMap = p;
    l.replaceMentionsInMsgText = v;
    l.replaceMentionWidsWithPushnames = S;
}, 98);