__d("useWAWebReactionEmojiPicker", [
    "WAWebDropdown.react",
    "WAWebReactionsPanel.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const { msgId, onCloseDetailsPane, onCloseEmojiPicker, onEmojiSelected, onOpenEmojiPicker } = e;
        let c;
        if (t[0] !== msgId || t[1] !== onCloseDetailsPane || t[2] !== onCloseEmojiPicker || t[3] !== onEmojiSelected || t[4] !== onOpenEmojiPicker) {
            c = function(t, c) {
                onCloseDetailsPane?.();
                self.setTimeout(function() {
                    const a = function(t) {
                        onEmojiSelected(t);
                        onCloseEmojiPicker?.();
                    };
                    const Component = r("WAWebReactionsPanel.react");
                    onOpenEmojiPicker?.({
                        menu: <Component msgId={msgId} onSelection={a}/>,
                        dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                        type: o("WAWebDropdown.react").MenuType.ReactionPicker,
                        anchor: c.current ?? t.currentTarget
                    });
                }, 150);
            };
            t[0] = msgId;
            t[1] = onCloseDetailsPane;
            t[2] = onCloseEmojiPicker;
            t[3] = onEmojiSelected;
            t[4] = onOpenEmojiPicker;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = u;
}, 98);