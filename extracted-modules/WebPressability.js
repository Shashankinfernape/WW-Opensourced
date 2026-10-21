__d("WebPressability", [
    "ReactContextMenuEvent.react",
    "ReactFocusEvent.react",
    "ReactHoverEvent.react",
    "ReactPressEvent.react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, { disabled, onBlur, onContextMenu, onFocus, onFocusChange, onFocusVisibleChange, onHoverChange, onHoverEnd, onHoverMove, onHoverStart, onPressChange, onPressEnd, onPressMove, onPressStart, preventContextMenu }) {
        o("ReactHoverEvent.react").useHover(e, {
            disabled,
            onHoverChange,
            onHoverEnd,
            onHoverMove,
            onHoverStart
        });
        o("ReactPressEvent.react").usePress(e, {
            disabled,
            onPressChange,
            onPressEnd,
            onPressMove,
            onPressStart
        });
        o("ReactFocusEvent.react").useFocus(e, {
            disabled,
            onBlur,
            onFocus,
            onFocusChange,
            onFocusVisibleChange
        });
        o("ReactContextMenuEvent.react").useContextMenu(e, {
            disabled,
            onContextMenu,
            preventDefault: preventContextMenu || false
        });
    }
    l.usePressability = e;
}, 98);