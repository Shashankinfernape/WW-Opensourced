__d("WAWebBlockContactAction", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBlockUserJob",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebFrontendContactGetters",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebNoop",
    "WAWebSmb1pdConversionSignalAction",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUpdateBlocklistDbJob",
    "WAWebWamBlockEventReporter",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    function _({ bizOptOutArgs, blockEntryPoint, contact, skipCtwa1pdNbfSignal }) {
        const l = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(blockEntryPoint);
        o("WAWebWamBlockEventReporter").logBlockEvent({
            contact,
            blockEntryPoint: l,
            isBlock: true
        });
        const s = o("WAWebChatCollection").ChatCollection.get(contact.id);
        o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingBlockVerificationEvent({
            blockEntryPoint,
            chat: s,
            reason: bizOptOutArgs?.reason,
            blockEntryPointMetric: l
        });
        o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserBlockWithReasonEvent({
            chat: s,
            reason: bizOptOutArgs?.reason,
            blockEntryPointMetric: l
        });
        const u = y(o("WAWebStateUtils").unproxy(contact), true, blockEntryPoint, bizOptOutArgs);
        if (skipCtwa1pdNbfSignal !== true && s != null) {
            u.then(()=>o("WAWebSmb1pdConversionSignalAction").log1pdBlockConversionSignal(s)).catch(r("WAWebNoop"));
        }
        return u;
    }
    function f(e, t) {
        const n = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(t);
        o("WAWebWamBlockEventReporter").logBlockEvent({
            contact: e,
            blockEntryPoint: n,
            isBlock: false
        });
        return y(o("WAWebStateUtils").unproxy(e), false, t);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebUpdateBlocklistDbJob").updateBlockingStatusForPSAUser(e);
            const n = e;
            if (t) {
                o("WAWebBlocklistCollection").BlocklistCollection.add({
                    id: n
                });
            } else {
                o("WAWebBlocklistCollection").BlocklistCollection.remove(n);
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, block, r, bizOptOutArgs, toastId) {
        const e_isContactBlocked = e.isContactBlocked;
        const s = block && e_isContactBlocked;
        const u = !block && !e_isContactBlocked;
        if (s || u) {
            return (d || (d = n("Promise"))).resolve();
        }
        const c = b({
            action: block ? "block" : "unblock",
            bizOptOutArgs,
            contact: e,
            entryPoint: r
        }).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e && e.errorCode != null) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(e.errorCode, e.errorText);
                }
                const e_targetWid = e.targetWid;
                yield o("WAWebUpdateBlocklistDbJob").updateBlocklistDbJob(e_targetWid, block);
                if (block) {
                    o("WAWebBlocklistCollection").BlocklistCollection.add({
                        id: e_targetWid
                    });
                } else {
                    o("WAWebBlocklistCollection").BlocklistCollection.remove(e_targetWid);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
        const undo = function() {
            return y(e, !block, r, bizOptOutArgs, toastId);
        };
        const redo = function() {
            return y(e, block, r, bizOptOutArgs, toastId);
        };
        C({
            action: c,
            block,
            contact: e,
            redo,
            toastId,
            undo
        });
        return c;
    }
    function C({ action, block, contact, redo, toastId = o("WAWebActionToast.react").genId(), undo }) {
        const d = o("WAWebFrontendContactGetters").getFormattedName(contact);
        const m = block ? new (o("WAWebActionToast.react")).ActionType(s._("Blocking {member}", [
            s._param("member", d)
        ])) : new (o("WAWebActionToast.react")).ActionType(s._("Unblocking {member}", [
            s._param("member", d)
        ]));
        const _ = action.then(()=>{
            const e = block ? s._("{member} blocked", [
                s._param("member", d)
            ]) : s._("{member} unblocked", [
                s._param("member", d)
            ]);
            return new (o("WAWebActionToast.react")).ActionType(e, {
                actionText: s._("Undo"),
                actionHandler: undo
            });
        }).catch((t)=>{
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if (t.statusCode >= 400) {
                    throw block ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't block {member}", [
                        s._param("member", d)
                    ])) : new (o("WAWebActionToast.react")).ActionType(s._("Couldn't unblock {member}", [
                        s._param("member", d)
                    ]));
                }
            } else {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "action:setBlock dropped"
                ])));
                const n = block ? s._("Couldn't block {member}", [
                    s._param("member", d)
                ]) : s._("Couldn't unblock {member}", [
                    s._param("member", d)
                ]);
                throw new (o("WAWebActionToast.react")).ActionType(n, {
                    actionText: s._("Try again."),
                    actionHandler: redo
                });
            }
        });
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebActionToast.react").ActionToast, {
            id: toastId,
            initialAction: m,
            pendingAction: _
        }));
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action, bizOptOutArgs, contact, entryPoint }) {
            if (contact.id.isPSA()) {
                const i = yield o("WAWebBlockUserJob").blockUnblockPSAUser(action);
                if (i != null && i.errorCode) {
                    return i;
                }
                return {
                    targetWid: contact.id
                };
            }
            if (o("WAWebBlocklistMigration").isBlocklistMigrated()) {
                const l = S(contact, entryPoint);
                const s = yield o("WAWebBlockUserJob").blockUnblockUser({
                    lid: l,
                    action,
                    bizOptOutArgs
                });
                if (s != null && s.errorCode) {
                    return s;
                }
                return {
                    targetWid: l
                };
            }
            const { id, phoneNumber } = contact;
            const d = action === "block" && id.isLid();
            const m = d && phoneNumber != null ? phoneNumber : id;
            const p = yield o("WAWebBlockUserJob").blockUnblockUser({
                wid: m,
                action,
                bizOptOutArgs
            });
            if (p != null && p.errorCode) {
                return p;
            }
            return {
                targetWid: m
            };
        });
        return v.apply(this, arguments);
    }
    function S({ id }, entryPoint) {
        if (id.isLid()) {
            return id;
        }
        const r = o("WAWebChatCollection").ChatCollection.get(id);
        if (r) {
            if (r.accountLid) {
                return r.accountLid;
            }
            const a = `[blocklist] no accountLid for chat: ${r.id.toLogString()}, entryPoint: ${entryPoint ?? "null"}`;
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ""
            ])), a).sendLogs("blocklist-no-accountlid-chat");
            throw a;
        }
        const i = `[blocklist] trying to block a pn contact (id: ${id.toLogString()}) without a chat,  entryPoint: ${entryPoint ?? "null"}`;
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "",
            ""
        ])), i).sendLogs("blocklist-pn-contact-without-chat");
        throw i;
    }
    l.blockContact = _;
    l.unblockContact = f;
    l.updatePSAUserBlockingStatus = g;
}, 226);