__d("WAWebMsgBarActions", [
    "WAWebABPropsSaga",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebContactFormWrapper.react",
    "WAWebContactsModalLoadable",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebWamEnumSupportAiEventType",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = function() {};
    const onSend = function(t) {};
    function d(entityId) {
        o("WAWebModalManager").ModalManager.close();
        if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED
            }).commit();
        }
        const Component = r("WAWebContactFormWrapper.react");
        o("WAWebModalManager").ModalManager.open(<Component onCancel={u} onSend={onSend} supportTag={o("WAWebSuspendedGroupUtils").SUSPENDED_GROUP_SUPPORT_TAG} entityId={entityId}/>, {
            transition: "modal-flow"
        });
    }
    function m(e, t) {
        const n = (n)=>{
            o("WAWebFindChatAction").findOrCreateLatestChat(n, "msgBarActions").then(({ chat })=>{
                chat.quotedMsgAdminGroupJid = e.id;
                chat.quotedMsgAdminGroupSubject = null;
                chat.quotedMsgAdminParentGroupJid = null;
                o("WAWebCmd").Cmd.openChatBottom({
                    chat,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MessageAdmin
                });
            });
        };
        const onSelect = function(t) {
            n(t.id);
            o("WAWebModalManager").ModalManager.close();
        };
        const a = e.participants.getAdmins();
        if (a.length === 1) {
            n(a[0].id);
            return;
        }
        const contacts = a.map((e)=>e.contact);
        const Component = o("WAWebContactsModalLoadable").WAWebContactsModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component title={t} contacts={contacts} onCancel={o("WAWebModalManager").closeModalManager} onSelect={onSelect}/>);
    }
    l.handleContactUs = d;
    l.handleMsgAdmin = m;
}, 98);