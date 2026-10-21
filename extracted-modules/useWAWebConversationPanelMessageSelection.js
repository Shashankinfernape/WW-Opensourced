__d("useWAWebConversationPanelMessageSelection", [
    "WAWebForwardActionUserJourneyLogger",
    "WAWebMultiSelectBar.react",
    "WAWebMultiSelection",
    "WAWebRevokeMetricUtils",
    "nullthrows",
    "react",
    "useLazyRef",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    function d(e) {
        const t = useState(false);
        const selectable = t[0];
        const a = t[1];
        const i = useState(o("WAWebMultiSelectBar.react").MultiSelectMode.DEFAULT);
        const selectionMode = i[0];
        const s = i[1];
        const d = r("useLazyRef")(function() {
            return new (r("WAWebMultiSelection"))([], function(e) {
                return e.id.toString();
            });
        });
        const handleSelectMessages = useCallback(function() {
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession();
            a(true);
        }, []);
        const p = useCallback(function(t, n, o) {
            if (!(!t || !e)) {
                const a = e.indexOf(t);
                if (a) {
                    let i = e.indexOf(n);
                    const l = i > a ? -1 : 1;
                    let s;
                    if (o) {
                        s = l;
                    } else if (i < a) {
                        s = 0;
                    } else {
                        s = l * 2;
                    }
                    for(const u = a + s; i !== u;){
                        d.current.setVal(r("nullthrows")(e.at(i)).safe(), o, true);
                        i += l;
                    }
                }
            }
        }, [
            e,
            d
        ]);
        const handleMessageSelect = useCallback(function(e, t, n, r) {
            a(true);
            if (n) {
                s(n);
            }
            const i = d.current.getSelected().pop();
            const l = r?.shiftKey === true;
            d.current.setVal(e, t, true);
            if (t) {
                o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
            }
            if (l) {
                p(i, e, t);
            }
        }, [
            d,
            p
        ]);
        const handleCancelSelection = useCallback(function() {
            if (selectable) {
                d.current.unsetAll();
                a(false);
                s(o("WAWebMultiSelectBar.react").MultiSelectMode.DEFAULT);
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.cancelInForwardToolbar();
            }
        }, [
            selectable,
            d
        ]);
        o("useWAWebListener").useListener(e, "remove", function(e) {
            if (d.current.isSelected(e)) {
                handleMessageSelect(e, false);
            }
        });
        return {
            selectable,
            selectedMessages: d.current,
            handleSelectMessages,
            handleMessageSelect,
            handleCancelSelection,
            selectionMode
        };
    }
    l.default = d;
}, 98);