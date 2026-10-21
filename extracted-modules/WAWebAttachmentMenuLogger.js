__d("WAWebAttachmentMenuLogger", [
    "$InternalEnum",
    "WAWebAttachmentTrayActionsWamEvent",
    "WAWebChatGetters",
    "WAWebWamEnumAttachmentTrayActionTargetType",
    "WAWebWamEnumAttachmentTrayActionType",
    "WAWebWamNumberToClientGroupSizeBucket",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "OPEN",
        "CLOSE"
    ]);
    const s = n("$InternalEnum").Mirrored([
        "SEND",
        "CANCEL"
    ]);
    class u {
        constructor(){
            this.$1 = null;
        }
        logAttachmentMenuOpen(n) {
            const t = new (o("WAWebAttachmentTrayActionsWamEvent")).AttachmentTrayActionsWamEvent(babelHelpers.extends({}, c(e.OPEN, n), {
                actionDurationMs: 0
            }));
            this.$2();
            t.commit();
        }
        logAttachmentMenuClose(n) {
            const t = new (o("WAWebAttachmentTrayActionsWamEvent")).AttachmentTrayActionsWamEvent(babelHelpers.extends({}, c(e.CLOSE, n), {
                actionDurationMs: this.$3()
            }));
            this.$2();
            t.commit();
        }
        logAttachMenuClick(t, n) {
            const e = new (o("WAWebAttachmentTrayActionsWamEvent")).AttachmentTrayActionsWamEvent(babelHelpers.extends({
                attachmentTrayActionTarget: n,
                attachmentTrayAction: o("WAWebWamEnumAttachmentTrayActionType").ATTACHMENT_TRAY_ACTION_TYPE.CLICK
            }, m(t), {
                actionDurationMs: this.$3()
            }));
            this.$2();
            e.commit();
        }
        logAttachmentSend(t, n) {
            const e = new (o("WAWebAttachmentTrayActionsWamEvent")).AttachmentTrayActionsWamEvent(babelHelpers.extends({}, d(s.SEND, n, t), {
                actionDurationMs: this.$3()
            }));
            this.$2();
            e.commit();
        }
        logAttachmentCancel(t, n) {
            const e = new (o("WAWebAttachmentTrayActionsWamEvent")).AttachmentTrayActionsWamEvent(babelHelpers.extends({}, d(s.CANCEL, n, t), {
                actionDurationMs: this.$3()
            }));
            this.$2();
            e.commit();
        }
        $2() {
            this.$1 = Date.now();
        }
        $3() {
            return Date.now() - r("nullthrows")(this.$1);
        }
    }
    function c(t, n) {
        return babelHelpers.extends({
            attachmentTrayActionTarget: o("WAWebWamEnumAttachmentTrayActionTargetType").ATTACHMENT_TRAY_ACTION_TARGET_TYPE.ATTACHMENT_TRAY,
            attachmentTrayAction: t === e.OPEN ? o("WAWebWamEnumAttachmentTrayActionType").ATTACHMENT_TRAY_ACTION_TYPE.CLICK : o("WAWebWamEnumAttachmentTrayActionType").ATTACHMENT_TRAY_ACTION_TYPE.CANCEL
        }, m(n));
    }
    function d(e, t, n) {
        return babelHelpers.extends({
            attachmentTrayActionTarget: t,
            attachmentTrayAction: e === s.SEND ? o("WAWebWamEnumAttachmentTrayActionType").ATTACHMENT_TRAY_ACTION_TYPE.SEND : o("WAWebWamEnumAttachmentTrayActionType").ATTACHMENT_TRAY_ACTION_TYPE.CANCEL
        }, m(n));
    }
    function m(e) {
        return {
            isAGroup: o("WAWebChatGetters").getIsGroup(e),
            groupSizeBucket: o("WAWebChatGetters").getIsGroup(e) ? r("WAWebWamNumberToClientGroupSizeBucket")(e.getParticipantCount()) : undefined
        };
    }
    const p = new u;
    l.AttachmentMenuTarget = o("WAWebWamEnumAttachmentTrayActionTargetType").ATTACHMENT_TRAY_ACTION_TARGET_TYPE;
    l.AttachmentMenuLogger = p;
}, 98);