__d("WAWebConfirmationModal.react", [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSButtonGroup.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const c = {
        marginBottom10: {
            marginBottom: "xyorhqc",
            $$css: true
        }
    };
    function d(actionType, actionFailure) {
        if (actionFailure) {
            return "default";
        }
        if (actionType === "solid-warning" || actionType === "warning" || actionType === "warning-secondary") {
            return "destructive";
        }
        return "default";
    }
    function m(actionType, actionFailure) {
        if (actionFailure || actionType === "solid-warning" || actionType === "primary") {
            return "filled";
        }
        return "outline";
    }
    function p({ actionFailure, actionText, actionType, children, contentText, failureText, isInputEmpty, isRunningAction, onCancel, onSubmit, testidPrefix, tsNavigationData }) {
        const b = e_useCallback(function() {
            o("WAWebModalManager").ModalManager.close();
            onCancel?.();
        }, [
            onCancel
        ]);
        const v = actionFailure ? r("WAWebFbtCommon")("Try again") : actionText;
        const S = s.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            orientation: "horizontal",
            primaryButtonProps: {
                variant: m(actionType, actionFailure),
                type: d(actionType, actionFailure),
                onPress: onSubmit,
                testid: `${testidPrefix}-action-button`,
                disabled: isInputEmpty || isRunningAction,
                loading: isRunningAction,
                label: v
            },
            tertiaryButtonProps: {
                variant: "outline",
                type: "default",
                onPress: b,
                testid: `${testidPrefix}-cancel-button`,
                disabled: isRunningAction,
                label: r("WAWebFbtCommon")("Cancel")
            }
        });
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = o("WAWebText.react").WAWebTextLarge;
        const R = actionFailure ? <Component testid={`${testidPrefix}-failure-text`}>{failureText}</Component> : <Component_1 testid={`${testidPrefix}-content`}>{contentText}</Component_1>;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = o("WAWebModal.react").Modal;
        return <Component_3 testid={testidPrefix} type={actionFailure ? o("WAWebModal.react").ModalTheme.Small : o("WAWebModal.react").ModalTheme.DeleteNewsletter} actions={S} overflow="visible" tsNavigationData={tsNavigationData}><Component_2 xstyle={c.marginBottom10}>{R}</Component_2>{actionFailure ? null : children}</Component_3>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);