__d("WAWebDualUploadsAssociationTypes", [
    "WAWebMessageAssociation.flow"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD
    ]);
    function s(t) {
        if (t != null) {
            return e.has(t);
        }
        return false;
    }
    l.isDualUploadAssociationType = s;
}, 98);