__d("WAWebChatlistWrappedItem.react", [
    "fbt",
    "WAWebChatCheckboxWrapper.react",
    "WAWebChatModel",
    "WAWebErrorBoundary.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(23);
        const { checkboxAriaLabel, children, mode, model, multiSelection, onArrowKeyInChatItem, onSelect, selectableState, setCheckboxWrapperRef } = e;
        if (!selectableState) {
            let f;
            if (t[0] !== children) {
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                f = <Component name="chat-list-item">{children}</Component>;
                t[0] = children;
                t[1] = f;
            } else {
                f = t[1];
            }
            return f;
        }
        const g = `selectable-chat-list-item-${mode}`;
        const h = model instanceof o("WAWebChatModel").Chat ? model.formattedTitle : null;
        let y;
        if (t[2] !== model.id || t[3] !== setCheckboxWrapperRef) {
            y = function(t) {
                setCheckboxWrapperRef(model.id.toString(), t);
            };
            t[2] = model.id;
            t[3] = setCheckboxWrapperRef;
            t[4] = y;
        } else {
            y = t[4];
        }
        let onArrowKeyLeftRight;
        if (t[5] !== model.id || t[6] !== onArrowKeyInChatItem) {
            onArrowKeyLeftRight = function() {
                return onArrowKeyInChatItem(model.id.toString());
            };
            t[5] = model.id;
            t[6] = onArrowKeyInChatItem;
            t[7] = onArrowKeyLeftRight;
        } else {
            onArrowKeyLeftRight = t[7];
        }
        let b;
        if (t[8] !== h || t[9] !== checkboxAriaLabel) {
            b = checkboxAriaLabel ?? s._("Select chat {chat-name}", [
                s._param("chat-name", h)
            ]);
            t[8] = h;
            t[9] = checkboxAriaLabel;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== children || t[12] !== model || t[13] !== multiSelection || t[14] !== onSelect || t[15] !== selectableState || t[16] !== y || t[17] !== onArrowKeyLeftRight || t[18] !== b) {
            const Component = r("WAWebChatCheckboxWrapper.react");
            v = <Component ref={y} model={model} theme="chat-checkbox" selectableState={selectableState} multiSelection={multiSelection} onSelect={onSelect} onArrowKeyLeftRight={onArrowKeyLeftRight} checkboxAriaLabel={b} role="gridcell">{children}</Component>;
            t[11] = children;
            t[12] = model;
            t[13] = multiSelection;
            t[14] = onSelect;
            t[15] = selectableState;
            t[16] = y;
            t[17] = onArrowKeyLeftRight;
            t[18] = b;
            t[19] = v;
        } else {
            v = t[19];
        }
        let S;
        if (t[20] !== g || t[21] !== v) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            S = <Component name={g}>{v}</Component>;
            t[20] = g;
            t[21] = v;
            t[22] = S;
        } else {
            S = t[22];
        }
        return S;
    }
    l.default = c;
}, 226);