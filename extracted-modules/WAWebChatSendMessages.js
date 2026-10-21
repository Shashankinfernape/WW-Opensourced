__d("WAWebChatSendMessages", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebActionToast.react",
    "WAWebAddonDeleteAddons",
    "WAWebAllMediaCollection",
    "WAWebAssociatedMessagesRevokeUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendErrors",
    "WAWebChatSendDeleteMsgsBridge",
    "WAWebChatSendStarMsgsBridge",
    "WAWebCmd",
    "WAWebDBStoreRevokeMsgs",
    "WAWebDBUpdateChatTable",
    "WAWebFavoriteStickerAction",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebGroupMetadataCollection",
    "WAWebKeepInChatMsgUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebRevokeMsgAction",
    "WAWebSchemaMessage",
    "WAWebSendMsgChatAction",
    "WAWebStarredMsgCollection",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    function _(t) {
        const r = o("WAWebStateUtils").unproxy(t);
        if (r.promises.sendDismissChangeNumber) {
            return r.promises.sendDismissChangeNumber;
        }
        const a = (d || (d = n("Promise"))).resolve({
            status: 200
        });
        r.promises.sendDismissChangeNumber = a;
        const i = new (o("WAWebActionToast.react")).ActionType(s._("Dismissing change number notification."));
        const l = a.then((e)=>{
            if (e.status === 200) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Change number notification dismissed."));
            }
            if (e.status >= 400) {
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't dismiss change number notification."));
            }
        }).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:chat:sendDismissChangeNumber dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't dismiss change number notification."), {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return _(r);
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: i,
            pendingAction: l
        }));
        return a.then((e)=>{
            if (e.status === 200) {
                return o("WAWebDBUpdateChatTable").updateChatTable(r.id, {
                    changeNumberNewJid: undefined,
                    changeNumberOldJid: undefined
                }).then(()=>{
                    r.changeNumberOldJid = r.changeNumberNewJid = undefined;
                });
            }
        }).finally(()=>{
            r.promises.sendDismissChangeNumber = null;
        });
    }
    function f(e, t, n) {
        const r = o("WAWebStateUtils").unproxy(e);
        if (r.promises.sendStarMsgs) {
            return r.promises.sendStarMsgs;
        }
        return r.promises.sendStarMsgs = o("WAWebChatSendStarMsgsBridge").sendStarMsgs(r.id, t, n).then(()=>{
            t.forEach((e)=>{
                const e_associationType = e.associationType;
                if (e_associationType != null) {
                    const r = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(e_associationType);
                    if (r && r.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                        e.detachAssociatedMsg();
                    }
                }
                e.set("star", n);
            });
            if (n) {
                o("WAWebStarredMsgCollection").addStarredMsgs(t);
                if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
                    const e = t.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.STICKER);
                    o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites(e);
                }
            } else {
                o("WAWebStarredMsgCollection").removeStarredMsgs(t);
            }
        }).finally(()=>{
            r.promises.sendStarMsgs = null;
        });
    }
    function g(e, t, r) {
        const a = o("WAWebStateUtils").unproxy(e);
        if (a.promises.sendRevokeMsgs) {
            return a.promises.sendRevokeMsgs;
        }
        let i;
        let l = [];
        if (t.type === "addon") {
            i = t.list.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = h(e);
                    return o("WAWebRevokeMsgAction").sendRevoke({
                        type: "addon",
                        data: e
                    }, t, r);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        } else {
            i = t.list.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = h(e);
                    try {
                        yield y(e, t);
                    } catch (e) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[sendRevokeMsgs] bot plugin revoke failed"
                        ])));
                    }
                    l = yield o("WAWebAssociatedMessagesRevokeUtils").getAssociatedChildMessageRevokePromises(e, function(e) {
                        return o("WAWebRevokeMsgAction").sendAssociatedChildMsgRevoke(e, t, r);
                    });
                    return o("WAWebRevokeMsgAction").sendRevoke({
                        type: "message",
                        data: e
                    }, t, r);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        }
        return a.promises.sendRevokeMsgs = (d || (d = n("Promise"))).all([].concat(i, l)).finally(()=>{
            a.promises.sendRevokeMsgs = null;
        });
    }
    function h(e) {
        if (o("WAWebMsgActionCapability").canSenderRevokeMsg(e) || o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(e)) {
            return o("WAWebCmd").Revoke.Sender;
        }
        return o("WAWebCmd").Revoke.Admin;
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const i = o("WAWebMsgGetters").getBotPluginSearchUrl(e) != null || o("WAWebMsgGetters").getBotPluginMaybeParent(e);
            if (i) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot revoke] handling sendAssociatedBotPluginRevoke"
                ])));
                const l = yield o("WAWebSchemaMessage").getMessageTable().get(e.id.toString());
                if (!(l == null || l.internalId == null || l.botResponseTargetId == null)) {
                    const s = yield o("WAWebDBStoreRevokeMsgs").findAssociatedPluginMsgs({
                        internalId: l.internalId,
                        targetId: l.botResponseTargetId
                    });
                    s?.pluginLinkMsgIds?.forEach((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            let n = o("WAWebMsgCollection").MsgCollection.get(r("WAWebMsgKey").fromString(e));
                            if (n != null) {
                                n = (yield o("WAWebMsgCollection").MsgCollection.getMessagesById([
                                    e
                                ]))?.messages?.[0];
                            }
                            if (n != null) {
                                o("WAWebRevokeMsgAction").sendAssociatedBotPluginRevoke(n, t);
                            }
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat_, clearMedia, record }) {
            const l = o("WAWebStateUtils").unproxy(chat_);
            if (l.promises.sendDeleteMsgs) {
                return l.promises.sendDeleteMsgs;
            }
            if (record.type === "addon") {
                const s = record.list;
                l.promises.sendDeleteMsgs = o("WAWebAddonDeleteAddons").sendDeleteAddonsForMe(s, clearMedia).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return s.length;
                })).finally(()=>{
                    l.promises.sendDeleteMsgs = null;
                });
            }
            if (record.type === "message") {
                const u = record.list;
                const c = yield o("WAWebAssociatedMessagesRevokeUtils").getHydratedAssociatedChildMessageModelsFromParentMsgs(u);
                l.promises.sendDeleteMsgs = o("WAWebChatSendDeleteMsgsBridge").sendDeleteMsgs([].concat(u, c), clearMedia, l.id).then(()=>{
                    u.forEach((e)=>{
                        e.delete();
                        o("WAWebAllMediaCollection").AllMediaCollection.remove(e);
                    });
                    return u.length;
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function() {
                    let e = 0;
                    u.forEach((t)=>{
                        if (t.ack === o("WAWebAck").ACK.FAILED || o("WAWebKeepInChatMsgUtils").isExpired(t)) {
                            t.delete();
                            e++;
                        }
                    });
                    c.forEach((e)=>{
                        if (e.ack === o("WAWebAck").ACK.FAILED || o("WAWebKeepInChatMsgUtils").isExpired(e)) {
                            e.delete();
                        }
                    });
                    return e;
                })).finally(()=>{
                    l.promises.sendDeleteMsgs = null;
                });
            }
            return l.promises.sendDeleteMsgs ?? (d || (d = n("Promise"))).resolve(0);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ caption, chat_, code, exp, gid, name, thumb }) {
            const d = o("WAWebStateUtils").unproxy(chat_);
            const m = r("WAWebGroupMetadataCollection").get(gid)?.isLidAddressingMode === true;
            const p = m ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const _ = d.id;
            const f = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                from: p,
                to: _,
                participant: undefined,
                selfDir: "out"
            });
            const g = babelHelpers.extends({
                id: f,
                from: p,
                to: _,
                ack: o("WAWebAck").ACK.CLOCK,
                local: true,
                t: o("WATimeUtils").unixTime(),
                type: "groups_v4_invite",
                isNewMsg: true,
                inviteGrpJpegThum: thumb,
                inviteCode: code,
                inviteCodeExp: exp,
                inviteGrp: gid,
                inviteGrpName: name,
                comment: caption
            }, o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(d));
            return o("WAWebSendMsgChatAction").addAndSendMsgToChat(d, g)[1];
        });
        return R.apply(this, arguments);
    }
    l.sendDismissChangeNumber = _;
    l.sendStarMsgs = f;
    l.sendRevokeMsgs = g;
    l.sendDeleteMsgs = b;
    l.sendGroupInviteMessage = S;
}, 226);