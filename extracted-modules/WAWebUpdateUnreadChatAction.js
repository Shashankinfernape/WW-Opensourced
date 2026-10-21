__d("WAWebUpdateUnreadChatAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebApiChat",
    "WAWebBackendErrors",
    "WAWebChatSeenBridge",
    "WAWebChatSendConversationSeen",
    "WAWebChatUnreadConstants",
    "WAWebCmd",
    "WAWebCurrentUser",
    "WAWebDBUpdateChatTable",
    "WAWebNoop",
    "WAWebPromiseQueue",
    "WAWebSendReadReceiptJob",
    "WAWebStateUtils",
    "WAWebStreamModel",
    "WAWebToastManager",
    "WAWebUim",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = f || (f = o("react"));
    function h(e, unread, allowAction = true) {
        return E({
            allowAction,
            chat: o("WAWebStateUtils").unproxy(e),
            unread
        });
    }
    function y() {
        let e = null;
        const t = new (o("WAShiftTimer")).ShiftTimer(function(t) {
            v(t);
            e = null;
        });
        return (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ afterAvailable = true, chat, threadId }) {
                const s = e;
                if (s != null) {
                    const u = s.chat.id.toString();
                    const c = chat.id.toString();
                    if (u !== c) {
                        t.cancel();
                        v(s);
                        e = null;
                    }
                }
                if (!t.isScheduled()) {
                    const d = o("WAWebABProps").getABPropConfigValue("web_resume_optimized_read_receipt_send_interval");
                    t.onOrAfter(d, {
                        chat,
                        threadId,
                        afterAvailable
                    });
                }
                e = {
                    chat,
                    threadId,
                    afterAvailable
                };
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })();
    }
    const C = y();
    function b(e) {
        if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd) {
            return v(e);
        }
        return C(e);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ afterAvailable = true, chat, threadId = null }) {
            if (o("WAWebCurrentUser").isEmployee() && o("WAWebUim").isCmdPressed()) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSeen: skip since cmd is pressed"
                ])));
                return;
            }
            const s = o("WAWebStateUtils").unproxy(chat);
            yield (_ || (_ = n("Promise"))).all([
                I({
                    chat: s,
                    threadId,
                    afterAvailable
                }),
                W({
                    chat: s,
                    threadId,
                    afterAvailable
                })
            ]).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSeen: got status ",
                    ""
                ])), e.status);
            }));
        });
        return S.apply(this, arguments);
    }
    function R(e, seenCount, shouldUpdatePendingSeenCount) {
        return x({
            chat: o("WAWebStateUtils").unproxy(e),
            seenCount,
            shouldUpdatePendingSeenCount
        });
    }
    function L(e) {
        return P(o("WAWebStateUtils").unproxy(e));
    }
    function E({ allowAction, chat, toastId = o("WAWebActionToast.react").genId(), unread }) {
        if (unread) {
            if (chat.active) {
                chat.markedUnread = true;
            }
        } else {
            chat.markedUnread = false;
        }
        const chat_promises = chat.promises;
        if (chat_promises.markUnread) {
            return chat_promises.markUnread;
        }
        const m = chat_promises.markUnread = unread ? T(chat) : (_ || (_ = n("Promise"))).all([
            I({
                chat
            }),
            W({
                chat
            })
        ]);
        const p = unread ? new (o("WAWebActionToast.react")).ActionType(s._("Marking as unread")) : new (o("WAWebActionToast.react")).ActionType(s._("Marking as read"));
        const f = m.then(()=>{
            const e = unread ? s._("Marked as unread") : s._("Marked as read");
            if (allowAction) {
                return new (o("WAWebActionToast.react")).ActionType(e, {
                    actionText: s._("Undo"),
                    actionHandler: function() {
                        return E({
                            allowAction,
                            chat,
                            toastId,
                            unread: !unread
                        });
                    }
                });
            }
            return new (o("WAWebActionToast.react")).ActionType(e);
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (e.status >= 400) {
                if (unread) {
                    return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mark chat as unread."));
                }
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mark chat as read."));
            }
            throw r("err")("invalid response status");
        })).catch(()=>{
            const e = unread ? s._("Couldn't mark chat as unread.") : s._("Couldn't mark chat as read.");
            if (allowAction) {
                return new (o("WAWebActionToast.react")).ActionType(e, {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return E({
                            allowAction,
                            chat,
                            toastId,
                            unread
                        });
                    }
                });
            }
            return new (o("WAWebActionToast.react")).ActionType(e);
        });
        o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebActionToast.react").ActionToast, {
            id: toastId,
            initialAction: p,
            pendingAction: f
        }));
        return m.then(r("WAWebNoop")).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "markUnread: got status ",
                ""
            ])), t.status);
        })).finally(()=>{
            chat_promises.markUnread = null;
        });
    }
    function k(e) {
        if (!r("gkx")("26258")) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[update-unread]: ",
                ""
            ])), e);
        }
    }
    function I({ afterAvailable = true, chat, threadId = null }) {
        k("sendSeen: start");
        const m = threadId != null && (chat.aiThreads?.get(threadId)?.unreadCount ?? 0) > 0;
        if (chat.markedUnread || chat.unreadCount === 0 && !m) {
            k(`markedUnread: ${String(chat.markedUnread)}`);
            k(`unreadCount: ${chat.unreadCount}`);
            k(`threadHasUnread: ${String(m)}`);
            k("sendSeen: end-1");
            return (_ || (_ = n("Promise"))).resolve();
        }
        if (!o("WAWebStreamModel").Stream.available && afterAvailable) {
            k("stream unavailable");
            chat.listenToOnce(o("WAWebStreamModel").Stream, "change:available", function() {
                return I({
                    chat,
                    threadId
                });
            });
            k("sendSeen: end-2");
            return (_ || (_ = n("Promise"))).resolve();
        }
        k("stream available");
        k(`unreadCount: ${chat.unreadCount}`);
        k(`pendingSeenCount: ${chat.pendingSeenCount}`);
        const unreadDelta = chat.unreadCount - chat.pendingSeenCount;
        k(`unreadCountDelta: ${unreadDelta}`);
        const f = chat.unreadCount === -1 && unreadDelta === -1;
        if (unreadDelta <= 0 && !f && threadId == null) {
            k("sendSeen: end-3");
            return (_ || (_ = n("Promise"))).resolve();
        }
        chat.disableUnreadAnchor = true;
        chat.pendingSeenCount = chat.unreadCount;
        k(`pendingSeenCount set to: ${chat.unreadCount}`);
        const g = ()=>{
            chat.pendingSeenCount -= unreadDelta;
            k(`pendingSeenCount set to ${chat.pendingSeenCount}`);
            if (chat.pendingSeenCount < 0) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendSeen unread ",
                    " pending: ",
                    " delta: ",
                    ""
                ])), chat.unreadCount, chat.pendingSeenCount, unreadDelta);
                chat.pendingSeenCount = 0;
            }
        };
        let h = r("gkx")("26258") ? chat.getLastMsgKeyForAction() : chat.lastReceivedKey;
        if (threadId != null) {
            const C = chat.aiThreads?.get(threadId);
            if (C?.lastReceivedKey != null) {
                h = C.lastReceivedKey;
                k(`using thread-specific lastReceivedKey: ${C.lastReceivedKey.toString()}`);
            }
        }
        return o("WAWebChatSendConversationSeen").sendConversationSeen({
            chat,
            key: h,
            threadId: threadId ?? undefined,
            unreadDelta
        }).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatUnreadUpdate, fullyReadThreadIds }) {
                if (chatUnreadUpdate != null) {
                    A(chat, chatUnreadUpdate);
                } else {
                    yield M(chat, unreadDelta);
                }
                for (const r of fullyReadThreadIds){
                    const a = chat.aiThreads?.get(r);
                    if (a) {
                        a.set({
                            unreadCount: 0
                        });
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            g();
            return (_ || (_ = n("Promise"))).reject(e);
        })).then(()=>{
            k("sendSeen: end-4");
        });
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.getLastMsgKeyForAction();
            try {
                yield o("WAWebChatSeenBridge").sendConversationUnseen(e.id, t);
                yield L(e);
            } catch (error) {
                return o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
                    e.markedUnread = false;
                    return (_ || (_ = n("Promise"))).reject(t);
                })(error);
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, seenCount, shouldUpdatePendingSeenCount = false }) {
            k(`markSeen: start - ${String(seenCount)}`);
            let l = null;
            if (seenCount != null) {
                if (seenCount > 0 && seenCount <= chat.unreadCount) {
                    l = chat.unreadCount - seenCount;
                } else if (seenCount === -1 && chat.unreadCount <= 0) {
                    l = 0;
                }
            } else {
                l = 0;
            }
            const s = l == null ? (_ || (_ = n("Promise"))).resolve() : o("WAWebChatSeenBridge").markConversationSeen(chat.id, l);
            yield s;
            if (seenCount != null && shouldUpdatePendingSeenCount) {
                const u = chat.pendingSeenCount - seenCount;
                chat.pendingSeenCount = Math.max(0, u);
                k(`pendingSeenCount set to ${chat.pendingSeenCount}`);
            }
            if (l != null) {
                chat.unreadCount = l;
                k(`unreadCount set to ${l}`);
            }
            chat.unreadMsgAnchor = undefined;
            chat.markedUnread = false;
            chat.unreadDividerOffset = 0;
            k("markSeen: end");
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.unreadCount === 0 || e.unreadCount === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD) {
                if (e.active) {
                    e.markedUnread = true;
                }
                return o("WAWebChatSeenBridge").markConversationUnseen(e.id).then(()=>{
                    e.unreadCount = o("WAWebChatUnreadConstants").MARKED_AS_UNREAD;
                });
            }
        });
        return N.apply(this, arguments);
    }
    function M(e, t, n) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = true) {
            const r = yield o("WAWebApiChat").getChatMeta(e.id);
            const r_unreadCount = r.unreadCount;
            k(`updateUnreadCount: old ${e.unreadCount}, new ${r_unreadCount}`);
            e.unreadCount = r_unreadCount;
            e.unreadDividerOffset = 0;
            e.unreadMsgAnchor = undefined;
            e.markedUnread = false;
            if (n) {
                const i = e.pendingSeenCount - t;
                e.pendingSeenCount = Math.max(0, i);
            }
        });
        return w.apply(this, arguments);
    }
    function A(chat, chatUnreadUpdate) {
        chat.unreadCount = chatUnreadUpdate.unreadCount;
        chat.unreadDividerOffset = chatUnreadUpdate.unreadDividerOffset;
        const n = chat.pendingSeenCount - chatUnreadUpdate.markedAsReadCount;
        chat.pendingSeenCount = Math.max(0, n);
        k(`sendSeen: updated chat unread count to ${chatUnreadUpdate.unreadCount}`);
    }
    function F(e) {
        e.unreadMentionMetadata.reset();
    }
    function O(e) {
        if (!r("gkx")("26258")) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit/send-seen] ",
                ""
            ])), e);
        }
    }
    var B = new (o("WAWebPromiseQueue")).PromiseQueue;
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ afterAvailable = true, chat, threadId = null }) {
            const u = threadId != null ? chat.aiThreads?.get(threadId) : null;
            const c = u != null ? u.unreadEditTimestampMs : chat.unreadEditTimestampMs;
            if (c != null) {
                O(`sendSeen: start - ${String(c)}`);
                if (!o("WAWebStreamModel").Stream.available && afterAvailable) {
                    chat.listenToOnce(o("WAWebStreamModel").Stream, "change:available", function() {
                        return W({
                            chat,
                            threadId
                        });
                    });
                    O("sendSeen: end - stream unavailable");
                    return;
                }
                yield B.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = u != null ? u.unreadEditTimestampMs : chat.unreadEditTimestampMs;
                    if (e == null) {
                        O("sendSeen: end - no unread edits");
                        return;
                    }
                    const t = yield o("WAWebSendReadReceiptJob").markEditedMsgsRead(chat.id, {
                        trusted: chat.trusted
                    }, threadId ?? undefined);
                    const { chatUnreadUpdate, fullyReadThreadIds } = t;
                    if (chatUnreadUpdate != null) {
                        A(chat, chatUnreadUpdate);
                    }
                    if (fullyReadThreadIds.length > 0) {
                        for (const a of fullyReadThreadIds){
                            chat.aiThreads?.get(a)?.set({
                                unreadCount: 0,
                                unreadEditTimestampMs: null
                            });
                        }
                        O(`sendSeen: updated ${fullyReadThreadIds.length} thread unread counts and cleared timestamps`);
                    }
                    O("sendSeen: marked edit as read");
                    if (threadId == null) {
                        if (c !== chat.unreadEditTimestampMs) {
                            O("sendSeen: end - has new unread edits");
                            return;
                        }
                        chat.unreadEditTimestampMs = null;
                        yield o("WAWebDBUpdateChatTable").updateChatTable(chat.id, {
                            unreadEditTimestampMs: null
                        });
                        O("sendSeen: end - all edits are marked as read");
                    } else {
                        O("sendSeen: end - thread edits marked as read");
                    }
                }));
            }
        });
        return q.apply(this, arguments);
    }
    l.markUnread = h;
    l.sendSeenDebounced = b;
    l.sendSeen = v;
    l.markSeen = R;
    l.markUnseen = L;
    l.updateUnreadCountMD = M;
    l.clearUnreadMentions = F;
}, 226);