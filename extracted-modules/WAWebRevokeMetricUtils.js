__d("WAWebRevokeMetricUtils", [
    "WARandomHex",
    "WAWebUiRevokeActionWamEvent",
    "WAWebWamEnumUiRevokeActionType"
], function(t, n, r, o, a, i, l) {
    class e {
        $4(messageAction) {
            const e = Date.now();
            const uiRevokeActionDuration = this.$2 != null ? e - this.$2 : 0;
            new (o("WAWebUiRevokeActionWamEvent")).UiRevokeActionWamEvent({
                messageAction,
                uiRevokeActionDuration,
                uiRevokeActionSessionId: this.$1
            }).commit();
            this.$2 = e;
        }
        startSession() {
            this.$1 = o("WARandomHex").randomHex(16);
            this.$2 = null;
            this.$3 = 0;
        }
        endSession() {
            this.startSession();
        }
        messageSelected() {
            if (!(this.$3 > 0)) {
                this.$4(o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE.MESSAGE_SELECTED);
                this.$3 = 1;
            }
        }
        trashCanSelected() {
            if (!(this.$3 > 1)) {
                this.$4(o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE.TRASH_CAN_SELECTED);
                this.$3 = 2;
            }
        }
        adminRevoke() {
            this.$4(o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE.ADMIN_DELETE_FOR_EVERYONE);
        }
        senderRevoke() {
            this.$4(o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE.SENDER_DELETE_FOR_EVERYONE);
            this.endSession();
        }
        adminAndSenderRevoke() {
            this.$4(o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE.ADMIN_AND_SENDER_DELETE_FOR_EVERYONE);
        }
        revokeConfirmed() {
            this.$4(o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE.DELETE_FOR_EVERYONE_SELECTED);
            this.endSession();
        }
    }
    const s = new e;
    l.UiRevokeActionHelper = s;
}, 98);