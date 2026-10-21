__d("mlcErrorHandler__INTERNAL", [
    "getPrivacyAwareEditorState"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        const document_activeElement = document.activeElement;
        let activeElement = null;
        if (document_activeElement != null) {
            activeElement = {
                activeElement: document_activeElement.nodeName,
                rootSelected: document_activeElement === t.getRootElement()
            };
        }
        const window_event = window.event;
        let l = null;
        if (window_event != null) {
            l = {
                altKey: window_event.altKey,
                ctrlKey: window_event.ctrlKey,
                data: window_event.data,
                inputType: window_event.inputType,
                isComposing: window_event.isComposing,
                keyCode: window_event.keyCode,
                metaKey: window_event.metaKey,
                shiftKey: window_event.shiftKey,
                type: window_event.type
            };
        }
        let editorState = null;
        try {
            editorState = r("getPrivacyAwareEditorState")(t.getEditorState());
        } catch (e) {}
        n(JSON.stringify({
            activeElement,
            editorState,
            error: e,
            event: l
        }));
    }
    l.default = e;
}, 98);