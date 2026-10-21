__d("WAWebQuarantinedAttachmentInterstitial.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebDefenseModeUtilsWAWebDefenseModeLearnMoreClickableLink",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebQuarantineDataStore",
    "WAWebUnquarantineMessageJob",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    function D4Component({ msgKey, quarantineData }) {
        const i = e_useState(false);
        const l = i[0];
        const d = i[1];
        const m = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreConfirm();
                d(true);
                try {
                    yield o("WAWebUnquarantineMessageJob").unquarantineMessageJob(msgKey, quarantineData);
                    o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreSuccess();
                    o("WAWebModalManager").ModalManager.close();
                } catch (e) {
                    o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreFailed();
                    o("WAWebModalManager").ModalManager.close();
                    p();
                } finally{
                    d(false);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const _ = function() {
            o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreDismiss();
            o("WAWebModalManager").ModalManager.close();
        };
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component testid="quarantined-attachment-interstitial" title={s._("Attachment blocked by Strict account settings")} onOK={_} okText={r("WAWebFbtCommon")("OK")} onCancel={m} cancelText={r("WAWebFbtCommon")("Unblock")} okDisabled={l} cancelDisabled={l} tsNavigationData={{
            surface: "unknown",
            viewName: "quarantined-attachment"
        }}>{s._("Files from unknown senders may put your personal info or device security at risk. Only unblock this attachment if you trust this sender. {learnMoreLink}", [
            s._param("learnMoreLink", u.jsx(o("WAWebDefenseModeUtilsWAWebDefenseModeLearnMoreClickableLink").WAWebDefenseModeLearnMoreClickableLink, {}))
        ])}</Component>;
    }
    D4Component.displayName = `${D4Component.name} [from ${i.id}]`;
    function M8Component() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component testid="unquarantine-error-modal" title={s._("Content no longer available")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("OK")} tsNavigationData={{
            surface: "unknown",
            viewName: "quarantined-attachment-error"
        }}>{s._("Make sure you are using the latest version of WhatsApp, or ask the other person to resend the attachment.")}</Component>;
    }
    M8Component.displayName = `${M8Component.name} [from ${i.id}]`;
    function p() {
        o("WAWebModalManager").ModalManager.open(<M8Component/>);
    }
    function _(e) {
        o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreClick();
        o("WAWebQuarantineDataStore").getQuarantineData(e.toString()).then((quarantineData)=>{
            if (quarantineData == null) {
                p();
                return;
            }
            o("WAWebModalManager").ModalManager.open(<D4Component msgKey={e} quarantineData={quarantineData}/>);
        }).catch(()=>{
            p();
        });
    }
    l.openQuarantinedAttachmentInterstitial = _;
}, 226);