__d("WAWebDualUploadsAssociationProcessor", [
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    const e = {
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        processorType: o("WAWebAssociationProcessorConstants").AssociationProcessorType.Regular
    };
    const s = {
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        processorType: o("WAWebAssociationProcessorConstants").AssociationProcessorType.Regular
    };
    const u = {
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        processorType: o("WAWebAssociationProcessorConstants").AssociationProcessorType.Regular
    };
    l.ImageDualUploadsAssociationProcessor = e;
    l.VideoDualUploadsAssociationProcessor = s;
    l.HevcDualUploadsAssociationProcessor = u;
}, 98);