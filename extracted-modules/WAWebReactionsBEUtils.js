__d("WAWebReactionsBEUtils", [
    "WALogger",
    "WALongInt",
    "WAWebAddonQueryUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebDBGetReactions",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationConstants",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new Set([
        (u = o("WAWebMsgType")).MSG_TYPE.CIPHERTEXT,
        u.MSG_TYPE.REVOKED,
        u.MSG_TYPE.DEBUG,
        u.MSG_TYPE.DEBUG_PLACEHOLDER,
        u.MSG_TYPE.GP2,
        u.MSG_TYPE.NOTIFICATION,
        u.MSG_TYPE.NEWSLETTER_NOTIFICATION,
        u.MSG_TYPE.NOTIFICATION_TEMPLATE,
        u.MSG_TYPE.E2E_NOTIFICATION
    ]);
    const d = new Set([
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
    ]);
    function m({ associationType, futureproofType, subtype, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
            return futureproofType != null && futureproofType !== o("WAWebMsgType").MSG_TYPE.MUSIC && o("WAWebMessageAssociationConstants").orphanIneligibleFutureproofTypes.has(futureproofType);
        }
        return !(c.has(type) || associationType != null && d.has(associationType) || type === o("WAWebMsgType").MSG_TYPE.CHAT && subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = [];
            const a = [];
            t.forEach((e)=>{
                if (e) {
                    a.push(e.reactionParentKey);
                }
            });
            const i = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(a);
            let l = 0;
            let u = 0;
            t.forEach((e)=>{
                const c = e.author ?? e.from;
                if (!c || !e) {
                    l++;
                    return;
                }
                const d = i.get(e.reactionParentKey.toString());
                if (d && !m(d)) {
                    u++;
                    return;
                }
                const p = o("WAWebWidFactory").asUserWidOrThrow(c);
                const _ = {
                    msgKey: e.id.toString(),
                    parentMsgKey: (d == null ? undefined : d.id.toString()) ?? e.reactionParentKey.toString(),
                    senderUserJid: p.toString(),
                    reactionText: e.reactionText ?? o("WAWebDBGetReactions").REVOKED_REACTION_TEXT,
                    timestamp: e.reactionTimestamp,
                    orphan: 0,
                    orphanReason: undefined,
                    read: false,
                    t: r("nullthrows")(o("WALongInt").maybeNumberOrThrowIfTooLarge(e.t))
                };
                n.push(_);
            });
            if (l > 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[createReactionsRowFromMsg] null sender/msg: ",
                    ""
                ])), l);
            }
            if (u > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[createReactionsRowFromMsg] reactions blocked: ",
                    ""
                ])), u);
            }
            return n;
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            const n = [];
            e.forEach(({ orphan, parentMsgKey, reactionText })=>{
                if (orphan !== 1) {
                    if (reactionText !== o("WAWebDBGetReactions").REVOKED_REACTION_TEXT) {
                        const l = {
                            id: parentMsgKey,
                            hasReaction: true
                        };
                        n.push(l);
                    } else {
                        t.push(parentMsgKey);
                    }
                }
            });
            const r = yield o("WAWebDBGetReactions").getFilteredReactionsFromParentMsgs(t);
            t.forEach((e)=>{
                const t = r.get(e);
                const hasReaction = t && t.length > 0 || false;
                const a = {
                    id: e,
                    hasReaction
                };
                n.push(a);
            });
            return o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
        });
        return g.apply(this, arguments);
    }
    l.REVOKED_REACTION_TEXT = o("WAWebDBGetReactions").REVOKED_REACTION_TEXT;
    l.canHaveReactions = m;
    l.createReactionsRowFromMsg = p;
    l.updateHasReactionFromParent = f;
}, 98);