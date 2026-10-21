__d("WAWebUnscheduleMsgAction", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebScheduledMsgActionLogger",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgUnscheduleDirectSend",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { shouldLogTap = true } = {}) {
            const l = yield g(t);
            yield (d || (d = n("Promise"))).all(l.map((t)=>_(e, t, false)));
            yield _(e, t, shouldLogTap);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            const l = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(n);
            if (l == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule][action] no reveal-key for ",
                    ""
                ])), n);
                return;
            }
            const d = o("WAWebChatCollection").ChatCollection.get(t);
            if (d == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule][action] chat ",
                    " not in collection"
                ])), t).sendLogs("scheduled-msg-unschedule-no-chat");
                throw r("err")("[scheduled_msg] cannot resolve chat for unschedule");
            }
            const m = d.id;
            if (a) {
                o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(d, 1);
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][unschedule][action] unscheduling ",
                ""
            ])), n);
            const p = r("WAWebMsgKey").fromString(l.msgId);
            const _ = m.isGroup() && d.groupMetadata?.isLidAddressingMode === true;
            const f = _ ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const g = m.isGroup() ? f : undefined;
            const h = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: m,
                fromMe: true,
                participant: g
            });
            const y = new (o("WAWebMsgModel")).Msg({
                id: h,
                from: f,
                to: m,
                author: g,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageUnschedule,
                protocolMessageKey: p,
                local: true,
                viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                isNewMsg: true
            });
            yield o("WAWebScheduledMsgUnscheduleDirectSend").sendUnscheduleStanza({
                msgRecord: {
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                    data: y
                },
                metricReporter: o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(y, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS),
                chatWid: m,
                originalMsgKey: p,
                revealKeyId: l.revealKeyId
            });
            try {
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l.msgId);
            } catch (error) {
                const C = r("getErrorSafe")(error);
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule][action] reveal-key del failed ",
                    ": ",
                    ""
                ])), n, C).sendLogs("scheduled-msg-unschedule-delete-reveal-key-failed");
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.includes("_")) {
                return [];
            }
            const t = yield o("WAWebDBGetAssociatedMsgsByParentMsgKey").bulkGetMessagesByParentMsgKey([
                r("WAWebMsgKey").fromString(e)
            ]);
            return t.map((e)=>e.msgKey);
        });
        return h.apply(this, arguments);
    }
    l.unscheduleMsgAction = m;
}, 98);