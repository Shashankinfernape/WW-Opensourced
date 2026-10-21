__d("WAWebBlockContactUtils", [
    "fbt",
    "WAWebABProps",
    "WAWebBlockBusinessDialogV2.react",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlockContactAction",
    "WAWebBlockContactDialogV2.react",
    "WAWebBlockContactPopup.react",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebPsaBlockContactPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebSmb1pdConversionSignalAction",
    "WAWebStateUtils",
    "WAWebUnblockContactDialogV2.react",
    "WAWebWamChatPSALogger",
    "WDSDialogBridge",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, t) {
        const e_contact = e.contact;
        const a = o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(t);
        const onBlock = function() {
            if (e != null && o("WAWebChatGetters").getIsPSA(e)) {
                const r = e.msgs.last();
                const a = o("WAWebBlocklistUtils").getBlockPsaRemoveEntryPointFromBlockEntryPoint(t);
                if (a != null) {
                    o("WAWebWamChatPSALogger").logChatPSARemove(r, 1, a);
                }
            }
            o("WAWebBlockContactAction").blockContact({
                contact: e_contact,
                blockEntryPoint: t
            });
            o("WAWebModalManager").ModalManager.close();
        };
        const onReportSpamBlock = function() {
            o("WAWebSendSpamChatAction").sendReport({
                chat: o("WAWebStateUtils").unproxy(e),
                spamFlow: a,
                skipCtwa1pdNbfSignal: true
            });
            o("WAWebBlockContactAction").blockContact({
                contact: e_contact,
                blockEntryPoint: t,
                skipCtwa1pdNbfSignal: true
            }).then(()=>o("WAWebSmb1pdConversionSignalAction").log1pdBlockAndReportConversionSignal(e)).catch(r("WAWebNoop"));
            o("WAWebModalManager").ModalManager.close();
        };
        const s = o("WAWebABProps").getABPropConfigValue("wds_web_dialog") && !o("WAWebChatGetters").getIsPSA(e);
        let c;
        if (s && e.contact.isBusiness) {
            c = u.jsx(r("WAWebBlockBusinessDialogV2.react"), {
                chat: e,
                blockEntryPoint: t,
                withReport: true
            });
        } else if (s) {
            const Component = r("WAWebBlockContactDialogV2.react");
            c = <Component contact={e.contact} isReportPreChecked={o("WAWebBlocklistUtils").isReportPreCheckedForOneToOneChats(t)} onCancel={o("WAWebModalManager").closeModalManager} onBlock={onBlock} onReportSpamBlock={onReportSpamBlock}/>;
        } else if (o("WAWebChatGetters").getIsPSA(e)) {
            const Component = r("WAWebPsaBlockContactPopup.react");
            c = <Component onCancel={o("WAWebModalManager").closeModalManager} onBlock={onBlock}/>;
        } else if (e.contact.isBusiness) {
            c = u.jsx(r("WAWebBlockBusinessPopup.react"), {
                chat: e,
                blockEntryPoint: t,
                withReport: true
            });
        } else {
            const Component = r("WAWebBlockContactPopup.react");
            c = <Component contact={e.contact} isReportPreChecked={o("WAWebBlocklistUtils").isReportPreCheckedForOneToOneChats(t)} onCancel={o("WAWebModalManager").closeModalManager} onBlock={onBlock} onReportSpamBlock={onReportSpamBlock}/>;
        }
        if (s) {
            o("WDSDialogBridge").openWDSDialog(c);
        } else {
            o("WAWebModalManager").ModalManager.open(c);
        }
    }
    function d(e, t) {
        const n = function() {
            const n = o("WAWebChatCollection").ChatCollection.get(e.id);
            if (n != null && o("WAWebChatGetters").getIsPSA(n)) {
                const r = n.msgs.last();
                const a = o("WAWebBlocklistUtils").getUnblockPsaRemoveEntryPointFromBlockEntryPoint(t);
                if (a != null) {
                    o("WAWebWamChatPSALogger").logChatPSARemove(r, 2, a);
                }
            }
            o("WAWebBlockContactAction").unblockContact(e, t);
            o("WAWebModalManager").ModalManager.close();
        };
        if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
            const Component = r("WAWebUnblockContactDialogV2.react");
            o("WDSDialogBridge").openWDSDialog(<Component contact={e} onUnblock={n}/>);
            return;
        }
        const a = u.jsx(o("WAWebName.react").Name, {
            contact: e
        });
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component okText={r("WAWebFbtCommon")("Unblock")} onOK={n} onCancel={o("WAWebModalManager").closeModalManager} title={s._("Unblock {contact_name}?", [
            s._param("contact_name", a)
        ])}/>);
    }
    l.handleBlock = c;
    l.handleUnblock = d;
}, 226);