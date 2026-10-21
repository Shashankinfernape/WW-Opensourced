__d("WAWebReactionsUtils", [
    "fbt",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddOnBubbleType",
    "WAWebBizCtwaAGMUtils",
    "WAWebBotGating",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebDBMsgUtils",
    "WAWebDefaultReactions",
    "WAWebEmoji",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebKeepInChatMsgUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelUtils",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebRecentReactionsCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "sumBy"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = 4;
    const d = 30 * o("WATimeUtils").DAY_MILLISECONDS;
    function m(e) {
        const t = new Map;
        e.forEach((e)=>{
            let n = null;
            if (e.reactionByMe) {
                const r = e.reactionByMe.reactionText;
                n = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(r);
                const a = t.get(n);
                if (a) {
                    const s = a.reactionByMe?.timestamp || 0;
                    const u = e.reactionByMe?.timestamp || 0;
                    if (a.reactionByMe && s < u || !a.reactionByMe) {
                        a.reactionByMe = e.reactionByMe;
                    }
                }
            }
            e.reactions.forEach((n)=>{
                const n_aggregateEmoji = n.aggregateEmoji;
                const reactionSenders = n.senders.toArray();
                const a = t.get(n_aggregateEmoji);
                if (a) {
                    const i = a.reactionSenders.concat(reactionSenders);
                    a.reactionSenders = i;
                    t.set(n_aggregateEmoji, a);
                } else {
                    const l = n.hasReactionByMe ? e.reactionByMe : null;
                    const s = {
                        reactionByMe: l,
                        reactionSenders,
                        reactionAggregate: n_aggregateEmoji
                    };
                    t.set(n_aggregateEmoji, s);
                }
            });
        });
        const n = Array.from(t.values()).map((e)=>{
            const reactionSenders = e.reactionSenders.sort((e, t)=>{
                if (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) && !o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid)) {
                    return -1;
                }
                if (o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid) && !o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)) {
                    return 1;
                }
                return t.timestamp - e.timestamp;
            });
            return babelHelpers.extends({}, e, {
                reactionSenders
            });
        });
        const r = n.sort((e, t)=>{
            if (e.reactionByMe && t.reactionByMe) {
                if (t.reactionSenders.length === e.reactionSenders.length) {
                    return t.reactionByMe.timestamp - e.reactionByMe.timestamp;
                }
                return t.reactionSenders.length - e.reactionSenders.length;
            }
            if (e.reactionByMe) {
                return -1;
            }
            if (t.reactionByMe) {
                return 1;
            }
            if (t.reactionSenders.length === e.reactionSenders.length) {
                return t.reactionSenders[0].timestamp - e.reactionSenders[0].timestamp;
            }
            return t.reactionSenders.length - e.reactionSenders.length;
        });
        return r;
    }
    function p(e) {
        let t = [];
        let n = 0;
        if (e.length === 0) {
            return {
                numberOfSenderReactions: n,
                reactionArrayEmojis: t
            };
        }
        if (e.length === 1) {
            const r = e[0];
            const o = c;
            const a = r.reactions.slice(0, o);
            t = a.map((e)=>{
                e.hasReactionByMe && r.reactionByMe;
                const t = e.hasReactionByMe ? r.reactionByMe : null;
                const n = {
                    reactionByMe: t,
                    reactionAggregate: e.aggregateEmoji,
                    reactionSenders: e.senders.toArray()
                };
                return n;
            });
            n = r.reactions.sumBy(function(e) {
                return e.senders.length;
            });
        } else {
            return _(e);
        }
        return {
            numberOfSenderReactions: n,
            reactionArrayEmojis: t
        };
    }
    function _(e) {
        let t = [];
        let n = 0;
        const o = m(e);
        const a = $();
        const i = o.slice(0, a);
        t = i.map((e)=>e);
        n = r("sumBy")(o, function(e) {
            return e.reactionSenders.length;
        });
        return {
            numberOfSenderReactions: n,
            reactionArrayEmojis: t
        };
    }
    function f(e) {
        e.forEach((e)=>{
            const t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t != null && o("WAWebMsgModelUtils").isLastMsg(t)) {
                o("WAWebCmd").Cmd.reactionChangeLastMessage();
            }
        });
    }
    function g(e, t) {
        const n = t.map((e)=>{
            if (e.reactionByMe) {
                return e.reactionByMe.reactionText;
            }
            return e.reactionAggregate;
        });
        const o = r("WAWebFbtIntlList")(n, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        if (e === 1) {
            return s._("reaction {reactions_content}. View reactions", [
                s._param("reactions_content", o)
            ]);
        }
        return s._("_j{\"*\":\"Reactions {reactions_content} {num_sender_reactions} in total. View reactions\",\"_1\":\"Reactions {reactions_content} 1 in total. View reactions\"}", [
            s._plural(e, "num_sender_reactions"),
            s._param("reactions_content", o)
        ]);
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h(e, t) {
        return s._("{name} reacted with {reactionContent}", [
            s._param("name", e),
            s._param("reactionContent", t)
        ]);
    }
    function y(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.id.remote.isNewsletter();
    }
    function C(e, t) {
        if (y(e)) {
            return true;
        }
        if (!o("WAWebReactionsBEUtils").canHaveReactions(e) || t === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && e.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            return false;
        }
        const n = o("WAWebFrontendMsgGetters").getChat(e);
        const n_groupMetadata = n.groupMetadata;
        if (n_groupMetadata != null && o("WAWebGroupMetadataGetters").getIsCag(n_groupMetadata)) {
            return e.messageSecret != null;
        }
        return true;
    }
    function b(e, t) {
        const r = t.newsletterMetadata?.reactionCodesSetting;
        if (r === undefined || e === "" || r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All) {
            return true;
        }
        if (r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic) {
            return (()=>{
                const t = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e);
                return o("WAWebDefaultReactions").DEFAULT_REACTIONS.some((n)=>e === n || t === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n));
            })();
        }
        if (r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Blocklist) {
            return true;
        }
        if (r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        })();
    }
    function v(e) {
        return Date.now() - e.t * 1000 < d;
    }
    function S(e, t) {
        return o("WAWebMsgActionCapability").isNewsletterMsgOnServer(e) && o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled() && v(e) && t.newsletterMetadata?.reactionCodesSetting !== o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None;
    }
    function R(e) {
        if (!o("WAWebReactionsBEUtils").canHaveReactions(e) || e.isCarouselCard) {
            return false;
        }
        const r = o("WAWebFrontendMsgGetters").getChat(e);
        if (r.id.isAiHub() || o("WAWebChatGetters").getIsBroadcast(r)) {
            return false;
        }
        if (o("WAWebChatGetters").getIsNewsletter(r)) {
            return S(e, r);
        }
        if (o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(r) || o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(e) || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: e.ctwaContext?.automatedGreetingMessageShown,
            msgSource: e.ctwaContext?.sourceApp,
            msgSubtype: e.subtype,
            msgType: e.type
        })) {
            return false;
        }
        const a = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
        if (a != null) {
            return o("WAWebBotGating").shouldRenderStructuredRichResponseMsg(a);
        }
        const r_groupMetadata = r.groupMetadata;
        if (r_groupMetadata != null && r_groupMetadata.announce) {
            if (o("WAWebGroupMetadataGetters").getIsCag(r_groupMetadata)) {
                const l = o("WAWebChatGroupUtils").getGroupParticipantsCount(r_groupMetadata);
                return o("WAWebMiscGatingUtils").cagReactionsSend(l) && e.messageSecret != null;
            }
            return o("WAWebMsgReply").replyChecks(e);
        }
        return o("WAWebMsgReply").canReplyMsg(e);
    }
    function L({ id: msgKey, parentMsgKey, reactionText, senderUserJid }) {
        const i = {
            parentMsgKey: r("WAWebMsgKey").fromString(parentMsgKey),
            msgKey,
            reactionText,
            senderUserJid
        };
        return i;
    }
    function E(e) {
        e.reactionSenders.length;
        const i = e.reactionByMe?.reactionText ?? e.reactionSenders[0]?.reactionText;
        if (i == null) {
            return "";
        }
        return o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(i) ?? i;
    }
    function k(reactionText, timestamp) {
        if (!(reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT || reactionText === "")) {
            const n = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(reactionText);
            o("WAWebRecentReactionsCollection").RecentReactionsCollection.add({
                id: n,
                reactionText,
                timestamp
            }, {
                merge: true
            });
        }
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const i = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t.reactionParentKey);
            const l = r("nullthrows")(t.author ?? t.from);
            if (i && !o("WAWebReactionsBEUtils").canHaveReactions(i)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[createReactionsRow] reactions not allowed for msgType ",
                    ""
                ])), i.type);
                return (u || (u = n("Promise"))).resolve();
            }
            const s = o("WAWebWidFactory").asUserWidOrThrow(l);
            const c = {
                msgKey: t.id.toString(),
                parentMsgKey: t.reactionParentKey.toString(),
                senderUserJid: s.toString(),
                reactionText: t.reactionText,
                timestamp: t.reactionTimestamp,
                orphan: 0,
                orphanReason: undefined,
                read: false
            };
            return c;
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        const n = [];
        const r = e.map((e)=>o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e));
        const a = t != null ? o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t) : null;
        r.forEach((r, i)=>{
            const l = o("WAWebRecentReactionsCollection").RecentReactionsCollection.get(r);
            if (t != null && r === a) {
                n.push(t);
            } else if (l != null) {
                n.push(l.reactionText);
            } else {
                n.push(e[i]);
            }
        });
        return n;
    }
    function x({ groupMetadata }) {
        return groupMetadata != null && o("WAWebGroupMetadataGetters").getIsCag(groupMetadata);
    }
    function $() {
        return c;
    }
    function P(e) {
        if (e === -1) {
            return null;
        }
        return e;
    }
    function N(e, t) {
        if (e == null || t == null) {
            return e === t;
        }
        return o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e) === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t);
    }
    function M() {
        return r("WAWebEnvironment").isWindows === true || o("WAWebABProps").getABPropConfigValue("wa_web_hybrid_context_menu_reactions_enabled") === true;
    }
    l.getReactionAggregates = m;
    l.getReactionEmojisAndSum = p;
    l.lastMessageReactionChange = f;
    l.reactionBubbleAriaLabelString = g;
    l.reactionBubbleAriaLabelOneReaction = h;
    l.shouldShowReactionBubble = C;
    l.isNewsletterReactionAllowed = b;
    l.canReactToMessage = R;
    l.reactionSenderToReactionUpdate = L;
    l.getReactionForDisplay = E;
    l.updateRecentReaction = k;
    l.createReactionsRow = I;
    l.getReactionsForTray = D;
    l.isReactionsEnabledInCAG = x;
    l.getMaxReactionsInBubble = $;
    l.indexOrNull = P;
    l.isSameReactionAggregate = N;
    l.isContextMenuReactiondEnabled = M;
}, 226);