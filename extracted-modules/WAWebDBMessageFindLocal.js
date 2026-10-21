__d("WAWebDBMessageFindLocal", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebCommonTaskScheduler",
    "WAWebDBGetEventMessagesForChat",
    "WAWebDBGetStarredMessagesForChat",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBQueryChatVisibleMessageHelper",
    "WAWebFetchMessagesInThread",
    "WAWebFtsClient",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 20;
    const m = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NoAnchorMessageError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function p({ anchor, count, threadId }) {
        return V(anchor, count, threadId).then((e)=>({
                messages: e,
                status: 200
            })).catch(o("WAFilteredCatch").filteredCatch(m, function() {
            return {
                messages: [],
                status: 404
            };
        }));
    }
    function _({ anchor, count, threadId }) {
        return G({
            anchor,
            count,
            threadId
        }).then((e)=>({
                messages: e,
                status: 200
            })).catch(o("WAFilteredCatch").filteredCatch(m, function() {
            return {
                messages: [],
                status: 404
            };
        }));
    }
    function f({ anchor, count, direction, threadId }) {
        switch(direction){
            case "before":
                return p({
                    anchor,
                    count,
                    threadId
                });
            case "after":
                return _({
                    anchor,
                    count,
                    threadId
                });
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${direction}`);
                })();
        }
    }
    function g(t, r, a, i, l) {
        const s = l == null ? (c || (c = n("Promise"))).resolve(undefined) : o("WAWebSchemaMessage").getMessageTable().equals([
            "id"
        ], l.toString());
        return s.then((n)=>{
            if (l && n != null && n.length === 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Anchor message ",
                    " does not exist in message table"
                ])), l && l.toString());
                throw new m;
            }
            const s = n?.[0];
            let u;
            let c;
            let reverse = false;
            if (a === "before") {
                u = o("WAWebDBMessageUtils").beginningOfChat(t);
                c = s == null ? o("WAWebDBMessageUtils").endOfChat(t) : o("WAWebDBMessageUtils").craftInternalId({
                    chatId: t.toString(),
                    inChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(s.internalId || "")
                });
                reverse = true;
            } else {
                u = s == null ? o("WAWebDBMessageUtils").beginningOfChat(t) : o("WAWebDBMessageUtils").craftInternalId({
                    chatId: t.toString(),
                    inChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(s.internalId || "")
                });
                c = o("WAWebDBMessageUtils").endOfChat(t);
            }
            return o("WAWebSchemaMessage").getMessageTable().between([
                "internalId",
                i
            ], [
                u,
                0
            ], [
                c,
                Infinity
            ], {
                lowerInclusive: false,
                upperInclusive: false,
                limit: r,
                reverse
            });
        });
    }
    function h({ anchor, chat, count }) {
        if (chat != null) {
            return o("WAWebDBGetStarredMessagesForChat").getStarredMessagesForChat(chat, count, anchor);
        }
        return y(count, anchor);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield b(t, function(e) {
                return e?.isStarred;
            });
            const r = n[0];
            const a = n[1];
            const i = 0;
            return o("WAWebSchemaMessage").getMessageTable().between([
                "isStarred"
            ], i, a, {
                lowerInclusive: false,
                upperInclusive: false,
                reverse: true,
                limit: e
            }).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n, r) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = "before", r = -Infinity) {
            let a = null;
            if (e != null) {
                a = yield o("WAWebSchemaMessage").getMessageTable().get(e.toString());
            }
            const i = a == null ? undefined : t(a);
            if (n === "before") {
                return [
                    r,
                    i ?? Infinity
                ];
            }
            return [
                i ?? r,
                Infinity
            ];
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        if (e.label != null) {
            return (c || (c = n("Promise"))).resolve({
                messages: [],
                eof: true,
                canceled: false,
                status: 200
            });
        }
        const r = {
            remote: e.remote?.toString(),
            page: e.page,
            limit: e.count
        };
        return o("WAWebFtsClient").ftsClient.search(e.searchTerm, r);
    }
    function R({ anchor, count }) {
        return L(count, anchor);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield b(t, function(e) {
                return e?.isCallLogMsg;
            });
            const r = n[0];
            const a = n[1];
            const i = yield o("WAWebSchemaMessage").getMessageTable().between([
                "isCallLogMsg"
            ], r, a, {
                lowerInclusive: false,
                upperInclusive: true,
                reverse: true,
                limit: e
            });
            return T(i);
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaMessage").getMessageTable().equals([
                "callOutcome"
            ], o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing);
            return T(e);
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            for(let n = 0; n < e.length; n++){
                t.push(o("WAWebDBMessageSerialization").messageFromDbRow(e[n]));
                yield r("WAWebCommonTaskScheduler").yield();
            }
            return t;
        });
        return D.apply(this, arguments);
    }
    function x() {
        const t = o("WAWebUserPrefsMultiDevice").getPairingTimestamp() ?? o("WATimeUtils").unixTime();
        return t - o("WATimeUtils").DAY_SECONDS * o("WAWebABProps").getABPropConfigValue("media_hub_history_max_days");
    }
    function $(e, t, n, r, o) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = "before", r, a) {
            const reverse = n === "before";
            const l = yield b(t, function(e) {
                return e?.t;
            }, n, r);
            const s = l[0];
            const u = l[1];
            const c = (t)=>[
                    [
                        t,
                        s
                    ],
                    [
                        t,
                        u
                    ]
                ];
            const d = yield o("WAWebSchemaMessage").getMessageTable().inAnyRange([
                "typeFlag",
                "t"
            ], a.map((e)=>c(e)), {
                reverse,
                limit: e
            });
            return d;
        });
        return P.apply(this, arguments);
    }
    function N({ anchor, chat, count, direction, mediaType }) {
        switch(mediaType){
            case "allMedia":
                return M(count, anchor, direction);
            case "allLinks":
                return A({
                    count,
                    direction,
                    msgKey: anchor
                });
            case "allDocs":
                return O({
                    chat,
                    count,
                    direction,
                    msgKey: anchor
                });
            case "url":
                if (chat != null) {
                    return g(chat, count, direction, "hasLink", anchor).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
                }
                return (c || (c = n("Promise"))).resolve([]);
            case "document":
                if (chat != null) {
                    return g(chat, count, direction, "isDocMsg", anchor).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
                }
                return (c || (c = n("Promise"))).resolve([]);
            default:
                return (c || (c = n("Promise"))).all([
                    "isMediaMsg",
                    "isDocMsg",
                    "hasLink",
                    "isCarouselMsg"
                ].map((e)=>{
                    if (chat != null) {
                        return g(chat, count, direction, e, anchor).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
                    }
                    return (c || (c = n("Promise"))).resolve([]);
                })).then(([t, n, r, o])=>{
                    const a = [
                        t,
                        r,
                        n,
                        o
                    ].flat();
                    return {
                        docCount: n.length,
                        linkCount: r.length,
                        mediaCount: t.length,
                        messages: a
                    };
                });
        }
    }
    function M(e, t, n, r) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r = x()) {
            const a = yield $(e, t, n, r, [
                o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG,
                o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG | o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK
            ]);
            return a.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, direction, limitBoundary, msgKey }) {
            let t;
            const l = yield $(count, msgKey, direction, limitBoundary, [
                (t = o("WAWebMsgType")).MESSAGE_TYPE_FLAGS.HAS_LINK,
                t.MESSAGE_TYPE_FLAGS.MEDIA_MSG | t.MESSAGE_TYPE_FLAGS.HAS_LINK,
                t.MESSAGE_TYPE_FLAGS.DOC_MSG | t.MESSAGE_TYPE_FLAGS.HAS_LINK
            ]);
            return l.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, count, direction, msgKey }) {
            if (chat != null) {
                return g(chat, count, direction, "isDocMsg", msgKey).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
            }
            const i = yield $(count, msgKey, direction, undefined, [
                o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG,
                o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG | o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK
            ]);
            return i.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
        });
        return B.apply(this, arguments);
    }
    function W({ anchor, chat, count }) {
        const a = o("WAWebModelStorageUtils").getStorage();
        if (chat != null && a.doesLocalSchemaIncludeVersion(a.versions.version(152))) {
            return o("WAWebDBGetEventMessagesForChat").getEventMessagesForChat(chat, count, anchor);
        }
        return q(count, anchor);
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield b(t, function(e) {
                return e?.isEventMsg;
            });
            const r = n[0];
            const a = n[1];
            const i = 0;
            return o("WAWebSchemaMessage").getMessageTable().between([
                "isEventMsg"
            ], i, a, {
                lowerInclusive: false,
                upperInclusive: false,
                reverse: true,
                limit: e
            }).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
        });
        return U.apply(this, arguments);
    }
    function V(e, t, n) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = d, a) {
            if (!e.remote) {
                return (c || (c = n("Promise"))).resolve([]);
            }
            const i = e.remote.toString();
            let l;
            if (e instanceof r("WAWebMsgKey")) {
                const s = yield o("WAWebSchemaMessage").getMessageTable().equals([
                    "id"
                ], e.toString());
                if (s.length === 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Anchor message ",
                        " does not exist in message table"
                    ])), e.toString());
                    throw new m;
                }
                l = s[0];
            }
            let p;
            let _;
            let f;
            if (a != null) {
                p = o("WAWebFetchMessagesInThread").beginningOfThread(a);
                _ = l != null ? o("WAWebDBMessageUtils").craftInternalThreadId(o("WAWebDBMessageUtils").getInChatMsgId(l.internalId || ""), a) : o("WAWebFetchMessagesInThread").endOfThread(a);
                f = [
                    "internalThreadIDs"
                ];
            } else {
                p = o("WAWebDBMessageUtils").beginningOfChat(e.remote);
                _ = o("WAWebDBMessageUtils").endOfChat(e.remote);
                if (l) {
                    const g = o("WAWebDBMessageUtils").getInChatMsgId(l.internalId || "");
                    _ = o("WAWebDBMessageUtils").craftInternalId({
                        chatId: i,
                        inChatMsgId: g
                    });
                }
            }
            const h = {
                lowerInclusive: true,
                upperInclusive: false
            };
            const y = yield o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
                lowerBound: p,
                upperBound: _,
                options: babelHelpers.extends({}, h, {
                    reverse: true
                }),
                count: t,
                index: f
            });
            return y.reverse().map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
        });
        return H.apply(this, arguments);
    }
    function G({ anchor, count = d, threadId }) {
        if (anchor instanceof r("WAWebMsgKey")) {
            const u = anchor.remote.toString();
            return o("WAWebSchemaMessage").getMessageTable().equals([
                "id"
            ], anchor.toString()).then((e)=>{
                if (e.length === 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Anchor message ",
                        " does not exist in message table"
                    ])), anchor.toString());
                    throw new m;
                }
                const n = e[0];
                const r = o("WAWebDBMessageUtils").getInChatMsgId(n.internalId || "");
                let a;
                let c;
                let d;
                if (threadId != null) {
                    a = o("WAWebDBMessageUtils").craftInternalThreadId(r, threadId);
                    c = o("WAWebFetchMessagesInThread").endOfThread(threadId);
                    d = [
                        "internalThreadIDs"
                    ];
                } else {
                    const p = r + count;
                    a = o("WAWebDBMessageUtils").craftInternalId({
                        chatId: u,
                        inChatMsgId: r
                    });
                    c = o("WAWebDBMessageUtils").craftInternalId({
                        chatId: u,
                        inChatMsgId: p
                    });
                    c = o("WAWebDBMessageUtils").endOfChat(anchor.remote);
                }
                const _ = {
                    lowerInclusive: false,
                    upperInclusive: true
                };
                return o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
                    lowerBound: a,
                    upperBound: c,
                    options: _,
                    count,
                    index: d
                }).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
            });
        }
        return (c || (c = n("Promise"))).resolve([]);
    }
    l.msgFindBefore = p;
    l.msgFindAfter = _;
    l.msgFindByDirection = f;
    l.queryMessageType = g;
    l.msgFindStarred = h;
    l.msgFindSearch = S;
    l.msgFindCallLog = R;
    l.getVoipOngoingCallLogMessages = k;
    l.getMediaAvailableMsgBoundary = x;
    l.msgFindMedia = N;
    l.getAllMediaMessages = M;
    l.getAllLinksMessages = A;
    l.getAllDocsMessages = O;
    l.msgFindEvents = W;
}, 98);