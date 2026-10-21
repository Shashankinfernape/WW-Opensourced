__d("WAWebAlbumAssociationProcessor", [
    "WAWebCreateAssociationProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebCreateAssociationProcessor").createAssociationMsgProcessorWithDetachedMessages({
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM,
        viewMode: o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM
    });
    l.default = e;
}, 98);