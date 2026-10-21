__d("WAWebPollAddOptionAssociationProcessor", [
    "WAWebCreateAssociationProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebCreateAssociationProcessor").createAssociationMsgProcessorWithDetachedMessages({
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION,
        viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_ADD_OPTION
    });
    l.default = e;
}, 98);