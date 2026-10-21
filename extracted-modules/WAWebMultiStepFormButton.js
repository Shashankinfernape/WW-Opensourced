__d("WAWebMultiStepFormButton", [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMultiStepFormPayloadParser"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (e.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE) {
            return null;
        }
        const n = e.interactivePayload?.messageParamsJson;
        if (n == null) {
            return null;
        }
        return o("WAWebMultiStepFormPayloadParser").parseMultiStepFormPayload(n);
    }
    function u(e) {
        return o("WAWebMultiStepFormPayloadParser").parseMultiStepFormPayload(e);
    }
    l.A2UI_FORM_PAYLOAD_TYPE = (e = o("WAWebMultiStepFormPayloadParser")).A2UI_FORM_PAYLOAD_TYPE;
    l.A2UI_FORM_VERSION = e.A2UI_FORM_VERSION;
    l.A2UIChoicePickerVariant = e.A2UIChoicePickerVariant;
    l.A2UIComponentType = e.A2UIComponentType;
    l.getMultiStepFormInfo = s;
    l.parseMultiStepFormButton = u;
}, 98);