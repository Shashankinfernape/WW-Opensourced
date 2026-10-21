__d("WAWebDBBotMsgOrphanProvider", [
    "Promise",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMessageAddOnType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred"
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
    let g;
    let h;
    let y;
    const C = r("requireDeferred")("WAWebReprocessOrphanBotMsg").__setRef("WAWebDBBotMsgOrphanProvider");
    const b = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg,
        matches: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && t.kind === o("WAWebMsgType").MsgKind.PlaceholderMessage && t.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotOrphan;
        },
        matchesFutureproof: function(t) {
            return false;
        },
        canRenderInUi: function() {
            return false;
        },
        processOrphansForNewMsg: function(t, n) {
            return v(n);
        }
    };
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = R(e);
            const { heldOrphanMsgKeys: a, orphans: i } = t;
            if (a.length > 0) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] gate off, keeping ",
                    " orphan(s) unreplayed"
                ])), a.length).tags("messaging").sendLogs("bot-orphan-skipped-gate-off", {
                    sampling: 0.01
                });
            }
            if (i.length === 0) {
                return {
                    retainedOrphanMsgKeys: a
                };
            }
            let l;
            try {
                const s = yield C.load();
                l = s.reprocessOrphanBotMsg;
            } catch (e) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] could not load the replay helper"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-orphan-replay-helper-load-failed");
                return {
                    retainedOrphanMsgKeys: [].concat(a, i.map((e)=>e.msgKey))
                };
            }
            const u = [].concat(i).sort($(x(i)));
            const c = new Set;
            const d = new Map;
            yield u.reduce((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    yield e;
                    try {
                        const { msgKey: n, parsedMsgPayload: a } = t;
                        const i = E(t, d);
                        if (i != null) {
                            if (i === "held") {
                                c.add(n);
                            }
                            return;
                        }
                        const s = yield k(t, l);
                        if (s.retain) {
                            c.add(n);
                        }
                        if (!s.replayed && a?.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST) {
                            T(t, s, d);
                        }
                    } catch (e) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[BotMsgOrphanProvider] re-processing failed for ",
                            ""
                        ])), D(t.msgKey)).catching(r("getErrorSafe")(e)).sendLogs("bot-orphan-reprocess-failed");
                        c.add(t.msgKey);
                        const p = t.parsedMsgPayload?.id?.id;
                        if (t.parsedMsgPayload?.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST && p != null && !d.has(p)) {
                            d.set(p, "held");
                        }
                    }
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })(), (y || (y = n("Promise"))).resolve());
            return {
                retainedOrphanMsgKeys: [].concat(a, Array.from(c))
            };
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        if (o("WAWebBotGating").isBotOrphanMsgEnabled()) {
            return {
                heldOrphanMsgKeys: [],
                orphans: e
            };
        }
        const t = e.filter(L);
        const n = t.length > 0 && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ? t : [];
        const r = new Set(n);
        return {
            heldOrphanMsgKeys: e.filter((e)=>!r.has(e)).map((e)=>e.msgKey),
            orphans: n
        };
    }
    function L(t) {
        try {
            return r("WAWebMsgKey").fromString(t.msgKey).remote.isGroup();
        } catch (n) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BotMsgOrphanProvider] could not parse the key of orphan ",
                ", holding it as a direct orphan"
            ])), D(t.msgKey)).catching(r("getErrorSafe")(n)).tags("messaging").sendLogs("bot-orphan-key-parse-failed", {
                sampling: 0.01
            });
            return false;
        }
    }
    function E(e, t) {
        if (O(e) === M) {
            return null;
        }
        const r = e.parsedMsgPayload?.botEditTargetId;
        if (r == null) {
            if (t.size > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] edit has no stream id, it cannot be gated on its head"
                ]))).tags("messaging").sendLogs("bot-orphan-stream-edit-unkeyable", {
                    sampling: 0.01
                });
            }
            return null;
        }
        return t.get(r);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const i = e.parsedMsgPayload;
            const l = i?.botOrphanStanza;
            const s = i?.id?.id ?? D(e.msgKey);
            if (l == null) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] discarding orphan with no replayable stanza ",
                    ""
                ])), s).tags("messaging").sendLogs("bot-orphan-unrecoverable", {
                    sampling: 0.01
                });
                return {
                    replayed: false,
                    retain: false
                };
            }
            try {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] re-processing orphan stanza ",
                    ""
                ])), s).tags("messaging");
                const u = yield t(s, l);
                return {
                    replayed: u === "replayed",
                    retain: u === "retryable"
                };
            } catch (e) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] re-processing failed for stanza ",
                    ""
                ])), s).catching(r("getErrorSafe")(e)).sendLogs("bot-orphan-reprocess-failed");
                return {
                    replayed: false,
                    retain: true
                };
            }
        });
        return I.apply(this, arguments);
    }
    function T(e, t, n) {
        const l = e.parsedMsgPayload?.id?.id ?? D(e.msgKey);
        const s = e.parsedMsgPayload?.id?.id;
        if (s == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BotMsgOrphanProvider] failed stream head has no stanza id, its edits cannot be gated"
            ]))).tags("messaging").sendLogs("bot-orphan-stream-head-unkeyable");
        } else {
            n.set(s, t.retain ? "held" : "dead");
        }
        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[BotMsgOrphanProvider] stream head ",
            " did not replay (",
            ")"
        ])), l, t.retain ? "held" : "dead").tags("messaging").sendLogs("bot-orphan-stream-head-unreplayed", {
            sampling: 0.01
        });
    }
    function D(e) {
        return e.split("_")[2] ?? "unknown";
    }
    function x(e) {
        const t = new Set;
        const n = new Set;
        for (const r of e){
            const i = O(r);
            if (r.parsedMsgPayload?.botSenderTimestampMs == null) {
                n.add(i);
            } else {
                t.add(i);
            }
        }
        const l = [];
        for (const s of n){
            if (t.delete(s)) {
                l.push(s);
            }
        }
        if (l.length > 0) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[BotMsgOrphanProvider] ranks ",
                " have a row without a sender timestamp, ordering them by arrival"
            ])), l.join(",")).tags("messaging");
        }
        return t;
    }
    function $(e) {
        return function(t, n) {
            const r = O(t);
            const o = r - O(n);
            if (o !== 0) {
                return o;
            }
            if (e.has(r)) {
                const a = P(t) - P(n);
                if (a !== 0) {
                    return a;
                }
            }
            return N(t) - N(n);
        };
    }
    function P(e) {
        return e.parsedMsgPayload?.botSenderTimestampMs ?? 0;
    }
    function N(e) {
        return e.parsedMsgPayload?.clientReceivedTsMillis ?? Number.MAX_SAFE_INTEGER;
    }
    var M = 0;
    var w = 1;
    var A = 2;
    var F = 3;
    function O({ parsedMsgPayload: t }) {
        if (t == null) {
            return F;
        }
        const n = t.botEditType;
        if (n == null) {
            return F;
        }
        const r = o("WAWebBotTypes").BotMsgEditType.cast(n);
        if (r == null) {
            return F;
        }
        if (r === o("WAWebBotTypes").BotMsgEditType.INNER) {
            return w;
        }
        if (r === o("WAWebBotTypes").BotMsgEditType.LAST) {
            return A;
        }
        if (r === o("WAWebBotTypes").BotMsgEditType.FIRST || r === o("WAWebBotTypes").BotMsgEditType.FULL) {
            return M;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        })();
    }
    l.botMsgOrphanProvider = b;
    l.processBotMsgOrphans = v;
}, 98);