__d("WAWebAttachScheduledAssociationChildren", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const parentMsgKey = n ?? t;
            try {
                const i = yield o("WAWebDBAssociatedMsgsAttachDetachAPI").getAssociatedMsgsByParentMsgKeyFromAssociationTable([
                    parentMsgKey
                ]);
                if (i.length === 0) {
                    return;
                }
                yield o("WAWebBackendApi").frontendSendAndReceive("loadAssociationChildrenIntoCollection", {
                    parentMsgKey,
                    childMsgKeys: i.map((e)=>e.msgKey)
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] attaching association children failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("scheduled-msg-attach-association-children-failed");
            }
        });
        return u.apply(this, arguments);
    }
    l.attachScheduledAssociationChildren = s;
}, 98);