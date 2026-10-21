__d("WAWebBotPluginAssociationProcessor", [
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = {
        processorType: o("WAWebAssociationProcessorConstants").AssociationProcessorType.Regular,
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.BOT_PLUGIN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
    };
    l.default = e;
}, 98);