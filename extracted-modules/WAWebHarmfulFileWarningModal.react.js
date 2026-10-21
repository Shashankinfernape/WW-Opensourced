__d("WAWebHarmfulFileWarningModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebHarmfulFileWamLogger",
    "WAWebWamEnumHarmfulFileWarningClickthroughAction",
    "WDSTextualLink.react",
    "react",
    "useWAWebLogHarmfulFileDialogLifecycle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ learnMoreUrl, onCancel, onOpen, senderRelationship }) {
        const l = r("useWAWebLogHarmfulFileDialogLifecycle")(senderRelationship);
        const c = function() {
            l();
            o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.CANCEL, senderRelationship);
            onCancel();
        };
        const d = function() {
            l();
            o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.OPEN, senderRelationship);
            onOpen();
        };
        const m = function() {
            o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.LEARN_MORE, senderRelationship);
        };
        const p = s._("This file may be harmful");
        const Component = r("WDSTextualLink.react");
        const _ = s._("Opening files from someone you don't know can lead to scams or put your device's safety at risk. {learnMoreLink}", [
            s._param("learnMoreLink", <Component href={learnMoreUrl} onClick={m}>{r("WAWebFbtCommon")("Learn more")}</Component>)
        ]);
        const okText = s._("Open file");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={p} okText={okText} onOK={d} onCancel={c} testid="harmful-file-warning-modal" tsNavigationData={{
            surface: "unknown",
            viewName: "harmful-file-warning"
        }}>{_}</Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);