__d("WAWebScheduledMsgCreatedNotification", [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDrawerManager",
    "WAWebFormatCTAText",
    "WAWebMsgType",
    "WAWebScheduledMessagesListLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebShowScheduledMsgsBulkDeleteToast",
    "WAWebSystemMessageGatingUtils",
    "WAWebUnscheduleMsgAction",
    "WAWebWamEnumScheduledMessageEntrypoint",
    "WDSIconIcSchedule.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        icon: {
            color: "xhslqc4",
            display: "x1rg5ohu",
            marginInlineEnd: "x7g7pl8",
            verticalAlign: "x523cq2",
            $$css: true
        }
    };
    function m(t, a) {
        const i = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() ? s._("You scheduled a message") : s._("You scheduled a message. Click to view");
        const ctaText = r("WAWebFormatCTAText")({
            type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated
        });
        const u = c.jsx(r("WDSIconIcSchedule.react"), {
            height: 14,
            width: 14,
            xstyle: d.icon
        });
        const handleClick = function() {
            o("WAWebScheduledMsgActionLogger").logScheduledMsgViewListForChat(t, o("WAWebWamEnumScheduledMessageEntrypoint").SCHEDULED_MESSAGE_ENTRYPOINT.SYSTEM_MESSAGE);
            const Component = o("WAWebScheduledMessagesListLoadable").WAWebScheduledMessagesListLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chatId={o("WAJids").unsafeCoerceToChatJid(t.id.toJid())} onBack={o("WAWebDrawerManager").closeDrawerRight} allowSelection onDeleteSelected={function(n) {
                o("WAWebShowScheduledMsgsBulkDeleteToast").showScheduledMsgsBulkDeleteToast(o("WAJids").unsafeCoerceToChatJid(t.id.toJid()), n);
            }} onDeleteMessage={(()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    try {
                        yield o("WAWebUnscheduleMsgAction").unscheduleMsgAction(o("WAJids").unsafeCoerceToChatJid(t.id.toJid()), n);
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to unschedule message: ",
                            ""
                        ])), error).sendLogs("unschedule-msg-fail");
                        a({
                            type: "error",
                            message: s._("Couldn't delete message")
                        });
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })()}/>);
        };
        return {
            text: i,
            ctaText,
            icon: u,
            handleClick
        };
    }
    l.getScheduledMsgCreatedNotification = m;
}, 226);