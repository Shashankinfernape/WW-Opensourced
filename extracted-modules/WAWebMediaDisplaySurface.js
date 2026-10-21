__d("WAWebMediaDisplaySurface", [
    "WAWebDisplayType",
    "WAWebTypesMedia"
], function(t, n, r, o, a, i, l) {
    function e({ displayTheme, displayType, hasOverlay }) {
        return o("WAWebDisplayType").isConversationDisplay(displayType) && displayTheme !== o("WAWebTypesMedia").DisplayTheme.PhotoPoll && !hasOverlay;
    }
    l.isPairedMediaSurface = e;
}, 98);