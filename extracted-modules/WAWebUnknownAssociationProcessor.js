__d("WAWebUnknownAssociationProcessor", [
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = {
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        processorType: o("WAWebAssociationProcessorConstants").AssociationProcessorType.Regular
    };
    l.default = e;
}, 98);