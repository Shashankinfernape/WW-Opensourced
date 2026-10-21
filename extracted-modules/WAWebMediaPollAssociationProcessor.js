__d("WAWebMediaPollAssociationProcessor", [
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = {
        processorType: "Regular",
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL,
        viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA
    };
    l.default = e;
}, 98);