__d("WAWebProcessPhoneNumberMapping", [
    "Promise",
    "WAArrayUtils",
    "WALogger",
    "WAWebApiContact",
    "WAWebCoexV2PhoneNumberMapping",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleMsgTypes.flow",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d({ data: t, lid: n, processingResult: r, shouldWaitForJob: o }) {
        r.push({
            jobArgs: {
                lid: n,
                data: t
            },
            shouldWaitForJob: o
        });
    }
    function m(t) {
        if (t.preMatChat != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[extractMapping] using preMatChat"
            ])));
            return t.preMatChat;
        }
        return t.chat;
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            const r = [];
            const { author: a, peerRecipientPn: i, recipientLatestLid: l, recipientPn: u } = e;
            const c = m(e);
            const p = o("WAWebWidFactory").asUserLidOrThrow(a);
            if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
                const _ = t?.origin;
                if (u != null) {
                    n = {
                        lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                        pn: o("WAWebWidFactory").asUserWidOrThrow(u),
                        learningSource: "process-phone-number-mapping"
                    };
                    d({
                        lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                        data: {
                            shareOwnPn: false
                        },
                        shouldWaitForJob: true,
                        processingResult: r
                    });
                } else if (i != null) {
                    if (l != null) {
                        n = {
                            lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                            pn: i,
                            latestLid: l,
                            learningSource: "recipient-latest-lid"
                        };
                    } else {
                        n = {
                            lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                            pn: i,
                            learningSource: "peer-lid-message"
                        };
                    }
                } else if (c.isLid()) {
                    const f = yield o("WAWebApiContact").getContactRecord(c);
                    if (f == null || f?.shareOwnPn !== true) {
                        d({
                            lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                            data: {
                                shareOwnPn: true
                            },
                            shouldWaitForJob: false,
                            processingResult: r
                        });
                    }
                } else {
                    if (!c.isBot()) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[extractMappingsForOneToOneLidMessages] peer message with non-LID chat: ",
                            ""
                        ])), c.toLogString()).sendLogs("peer-message-non-lid-chat");
                    }
                }
                if (_ !== "ctwa") {
                    const g = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && e.author.isLid() && e.chat.isLid();
                    if (i == null && !g) {
                        n = "missing-peer-recipient-pn";
                    }
                }
                return {
                    mapping: n,
                    lidMetadataUpdates: r
                };
            }
            const h = e.displayName;
            if (h != null) {
                d({
                    lid: p,
                    data: {
                        displayNameLID: h
                    },
                    shouldWaitForJob: true,
                    processingResult: r
                });
            }
            const y = e.senderPn;
            if (y != null) {
                n = {
                    lid: p,
                    pn: o("WAWebWidFactory").asUserWidOrThrow(y),
                    learningSource: "process-phone-number-mapping"
                };
            }
            if (y == null) {
                d({
                    lid: p,
                    data: {
                        shareOwnPn: true
                    },
                    shouldWaitForJob: true,
                    processingResult: r
                });
            }
            return {
                mapping: n,
                lidMetadataUpdates: r
            };
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const { author: n, peerRecipientLid: r, recipientLatestLid: a, recipientLid: i } = e;
            const l = m(e);
            if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
                const s = o("WAWebWidFactory").asUserWidOrThrow(l);
                if (i != null) {
                    t = {
                        lid: i,
                        pn: s,
                        learningSource: "process-phone-number-mapping"
                    };
                } else if (r != null) {
                    if (a != null) {
                        t = {
                            pn: s,
                            lid: r,
                            latestLid: a,
                            learningSource: "recipient-latest-lid"
                        };
                    } else {
                        t = {
                            lid: r,
                            pn: s,
                            learningSource: "peer-pn-message"
                        };
                    }
                } else {
                    t = "missing-peer-recipient-lid";
                }
            }
            const u = e.senderLid;
            if (u != null) {
                t = {
                    lid: o("WAWebWidFactory").asUserLidOrThrow(u),
                    pn: o("WAWebWidFactory").asUserWidOrThrow(n),
                    learningSource: "process-phone-number-mapping"
                };
            }
            return {
                mapping: t,
                lidMetadataUpdates: []
            };
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgInfo: t, msgMeta: n }) {
            const r = o("WAWebCoexV2PhoneNumberMapping").maybeGetCoexV2PhoneNumberMappingPlan(t, n);
            if (r != null) {
                return {
                    mapping: r.mapping ?? void 0,
                    lidMetadataUpdates: []
                };
            }
            const i = t.author;
            if (i.isLid()) {
                return p(t, n);
            }
            return f(t);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.msgInfo;
            const n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && t.participantUsername != null;
            if (!n && t.chat.isGroup() && t.author.isLid() && !o("WAWebUserPrefsMeUser").isMeAccount(t.author) && t.participantPn == null && t.displayName == null) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[extractMappingsForGroupOrStatusBroadcastMessage] participantPn is missing for group message from LID author"
                ])));
            }
            if (e.bclParticipant) {
                e.msgInfo;
                const r = v(e.bclParticipant);
                if (r == null) {
                    return {
                        lidMetadataUpdates: []
                    };
                }
                return {
                    mapping: r,
                    lidMetadataUpdates: []
                };
            }
            let a;
            const i = [];
            const { author: l, participantLid: s, participantPn: c } = t;
            if (c != null) {
                a = {
                    lid: o("WAWebWidFactory").asUserLidOrThrow(l),
                    pn: c,
                    learningSource: "process-phone-number-mapping"
                };
            } else if (s != null && !n) {
                a = {
                    lid: s,
                    pn: o("WAWebWidFactory").asUserWidOrThrow(l),
                    learningSource: "process-phone-number-mapping"
                };
            }
            const m = t.displayName;
            if (!o("WAWebUserPrefsMeUser").isMeAccount(l) && m != null) {
                d({
                    lid: o("WAWebWidFactory").asUserLidOrThrow(l),
                    data: {
                        displayNameLID: m
                    },
                    shouldWaitForJob: true,
                    processingResult: i
                });
            }
            return {
                mapping: a,
                lidMetadataUpdates: i
            };
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        const { wid: t, recipientLatestLid: n } = e;
        if (t.isLid()) {
            const r = t;
            const a = e.peerRecipientPn;
            if (a == null) {
                const i = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
                if (i) {
                    return null;
                }
                return "missing-peer-recipient-pn";
            }
            if (n) {
                return {
                    lid: r,
                    latestLid: n,
                    pn: a,
                    learningSource: "recipient-latest-lid"
                };
            }
            return {
                lid: r,
                pn: a,
                learningSource: "peer-lid-message"
            };
        }
        const l = e.peerRecipientLid;
        const s = t;
        if (l == null) {
            return "missing-peer-recipient-lid";
        }
        if (n) {
            return {
                lid: l,
                latestLid: n,
                pn: s,
                learningSource: "recipient-latest-lid"
            };
        }
        return {
            lid: l,
            pn: s,
            learningSource: "peer-pn-message"
        };
    }
    function S({ flushImmediately: t, mapping: n }) {
        if (n.learningSource === "recipient-latest-lid") {
            return o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [
                    {
                        lid: n.lid,
                        pn: n.pn
                    },
                    {
                        lid: n.latestLid,
                        pn: n.pn
                    }
                ],
                flushImmediately: t,
                learningSource: "recipient-latest-lid"
            });
        }
        return o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [
                {
                    lid: n.lid,
                    pn: n.pn
                }
            ],
            flushImmediately: t,
            learningSource: n.learningSource
        });
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.msgInfo.chat;
            if (t.isUser()) {
                return h(e);
            }
            if (t.isGroup() || t.isBroadcast()) {
                return C(e);
            }
            return {
                lidMetadataUpdates: []
            };
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
                const a = e.bclParticipants.map((n)=>I({
                        msgInfo: e,
                        msgMeta: t,
                        bclParticipant: n
                    }, r));
                const i = yield (c || (c = n("Promise"))).all(a);
                return {
                    type: "peer-broadcast",
                    mappings: i
                };
            }
            return {
                type: "not-peer-broadcast",
                mapping: yield I({
                    msgInfo: e,
                    msgMeta: t
                }, r)
            };
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = yield R(e);
            const { lidMetadataUpdates: i, mapping: l } = a;
            const s = o("WAArrayUtils").groupByAndMap(i, function(e) {
                if (e.shouldWaitForJob) {
                    return "waitForJob";
                }
                return "fireAndForget";
            }, function(e) {
                return e.jobArgs;
            });
            const u = s.get("waitForJob") ?? [];
            const c = s.get("fireAndForget") ?? [];
            if (c.length > 0) {
                o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(c);
            }
            if (u.length > 0) {
                yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(u);
            }
            if (l != null && typeof l === "object") {
                yield S({
                    mapping: l,
                    flushImmediately: t
                });
            }
            return l;
        });
        return T.apply(this, arguments);
    }
    l.processPhoneNumberMappings = E;
}, 98);