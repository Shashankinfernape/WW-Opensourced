__d("WAWebReactionsCollection", [
    "WALogger",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgReactionsBridge",
    "WAWebReactionsBEUtils",
    "WAWebReactionsModels",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function a(...a) {
            let e;
            e = t.call(this, ...a) || this;
            e.findImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
                        e
                    ]);
                    const n = t[0];
                    return o("WAWebMsgReactionsBridge").sendQueryReactions(n);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.findAddressingModeInsensitive = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield this.find(e, t);
                if (n != null) {
                    return n;
                }
                const a = o("WAWebLidMigrationUtils").getAlternateMsgKey(r("WAWebMsgKey").fromString(String(e)));
                if (a != null) {
                    return this.find(a, t);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getAddressingModeInsensitive = function(t) {
            return this.get(t) ?? this._getByAltId(t);
        };
        a_prototype._getByAltId = function(n) {
            const e = n instanceof r("WAWebMsgKey") ? n : r("WAWebMsgKey").from(String(n));
            const a = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            if (a != null) {
                return t.prototype.get.call(this, a);
            }
        };
        a_prototype.addOrUpdateReaction = function(t) {
            if (t.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                return this.removeReaction(t);
            }
            const e = this.getAddressingModeInsensitive(t.parentMsgKey);
            if (e) {
                const n = this.getAggregateEmojiAndSender(e, t.senderUserJid);
                const { reactionAggregateWithSender, reactionSenderModel } = n;
                if (reactionAggregateWithSender && reactionSenderModel) {
                    if (reactionSenderModel.id.toString() === t.msgKey && reactionSenderModel.ack !== t.ack) {
                        reactionSenderModel.ack = t.ack;
                        if (reactionSenderModel.isSendFailure === true && t.ack != null && t.ack >= o("WAWebAck").ACK.SENT) {
                            reactionSenderModel.isSendFailure = false;
                            reactionSenderModel.trigger("change:isSendFailure");
                        }
                        reactionSenderModel.trigger("change:ack");
                        return;
                    } else if (t.timestamp > reactionSenderModel.timestamp) {
                        if (o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid)) {
                            reactionSenderModel.trigger("revoked");
                            reactionAggregateWithSender.set({
                                hasReactionByMe: false
                            });
                        }
                        this._addNewReactionToAggregate(t, e);
                        if (reactionAggregateWithSender.aggregateEmoji === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t.reactionText)) {
                            reactionAggregateWithSender.senders.remove(reactionSenderModel.id);
                            e.reactions.trigger("change:senders");
                        } else {
                            this._removeAggregateEmojiAndSender(e, reactionSenderModel, reactionAggregateWithSender);
                        }
                        return;
                    }
                    return;
                }
                this._addNewReactionToAggregate(t, e);
            }
        };
        a_prototype.removeReaction = function(n) {
            if (o("WAWebUserPrefsMeUser").isSerializedWidMe(n.senderUserJid)) {
                return this._removeSelfReaction(n);
            }
            const t = this.get(n.parentMsgKey);
            if (t) {
                const r = this.getAggregateEmojiAndSender(t, n.senderUserJid);
                const { reactionAggregateWithSender, reactionSenderModel } = r;
                if (reactionAggregateWithSender && reactionSenderModel) {
                    this._removeAggregateEmojiAndSender(t, reactionSenderModel, reactionAggregateWithSender);
                    reactionSenderModel.trigger("revoked");
                }
            } else {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "reactions_collection:removeReaction no reactions model found"
                ])));
            }
        };
        a_prototype._addNewReactionToAggregate = function(reactionByMe, n) {
            const e = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(reactionByMe.reactionText);
            const a = n.reactions.get(e);
            const i = r("WAWebMsgKey").fromString(reactionByMe.msgKey);
            const l = new (o("WAWebReactionsModels")).ReactionsSenders(babelHelpers.extends({}, reactionByMe, {
                id: i
            }));
            const hasReactionByMe = o("WAWebUserPrefsMeUser").isSerializedWidMe(reactionByMe.senderUserJid);
            if (a) {
                if (hasReactionByMe) {
                    a.set({
                        hasReactionByMe: true
                    });
                    n.set({
                        reactionByMe
                    });
                }
                a.senders.add(l);
                n.reactions.sort();
                a.trigger("change:senders");
            } else {
                if (hasReactionByMe) {
                    n.set({
                        reactionByMe
                    });
                }
                n.reactions.add({
                    aggregateEmoji: e,
                    hasReactionByMe,
                    id: e,
                    senders: [
                        l
                    ]
                });
            }
        };
        a_prototype._removeAggregateEmojiAndSender = function(t, n, r) {
            r.senders.remove(n.id);
            if (r.senders.length === 0) {
                t.reactions.remove(r.id);
            } else {
                t.reactions.sort();
            }
            r.trigger("change:senders");
        };
        a_prototype.getAggregateEmojiAndSender = function(t, n) {
            let reactionSenderModel = null;
            let reactionAggregateWithSender = null;
            const a = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").createUserWidOrThrow(n));
            for(let i = 0; i < t.reactions.length; i++){
                const l = t.reactions.at(i);
                const s = l == null ? undefined : l.senders.findFirst(function(e) {
                    return e.senderUserJid === n || a != null && e.senderUserJid === a.toString();
                });
                if (s) {
                    reactionSenderModel = s;
                    reactionAggregateWithSender = l;
                    break;
                }
            }
            return {
                reactionSenderModel,
                reactionAggregateWithSender
            };
        };
        a_prototype._removeSelfReaction = function(t) {
            const e = this.get(t.parentMsgKey);
            e?.set({
                reactionByMe: null
            });
            if (e) {
                const n = this.getAggregateEmojiAndSender(e, t.senderUserJid);
                const { reactionAggregateWithSender, reactionSenderModel } = n;
                reactionAggregateWithSender?.set({
                    hasReactionByMe: false
                });
                if (reactionAggregateWithSender && reactionSenderModel) {
                    this._removeAggregateEmojiAndSender(e, reactionSenderModel, reactionAggregateWithSender);
                    reactionSenderModel.trigger("revoked");
                }
            }
        };
        a_prototype.markReactionsAsRead = function(t) {
            for (const e of this._getSendersByMsgKeys(t)){
                e.read = true;
            }
        };
        a_prototype._getSendersByMsgKeys = function(t) {
            if (t.length === 0) {
                return [];
            }
            const e = new Set(t);
            const n = [];
            for (const r of this.toArray()){
                for (const a of r.reactions.toArray()){
                    for (const i of e){
                        const l = a.senders.get(i);
                        if (l != null && (n.push(l), e.delete(i), e.size === 0)) {
                            return n;
                        }
                    }
                }
            }
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[markReactionsAsRead] sender model not found"
            ])));
            return n;
        };
        a_prototype.getSenderByMsgKey = function(t) {
            for (const e of this.toArray()){
                for (const n of e.reactions.toArray()){
                    const r = n.senders.get(t);
                    if (r != null) {
                        return r;
                    }
                }
            }
        };
        a_prototype.getExistingSenderModelFromReactionDetails = function({ msgKey, parentMsgKey, reactionText }) {
            const a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(reactionText);
            const i = this.get(parentMsgKey);
            if (i) {
                const l = i.reactions.get(a);
                const s = l == null ? undefined : l.senders.get(msgKey);
                return s;
            }
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[getExistingSenderModelFromReactionDetails] sender not found"
            ])));
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebReactionsModels").Reactions;
    const d = new c;
    l.ReactionsCollection = d;
}, 98);