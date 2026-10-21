__d("WAWebDualUploadsAutoDownloadPolicy", [
    "WAWebDualUploadsAssociationTypes",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (s(e)) {
            if (e.unsafe().associationType !== o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD || !o("WAWebMediaGatingUtils").isHdImageDualUploadConsumptionEnabled()) {
                return false;
            }
            return ((e)=>{
                if (e === o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.HD || e === o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.AUTO) {
                    return true;
                }
                if (e === o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.STANDARD) {
                    return false;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })(o("WAWebMediaGatingUtils").resolveEffectiveAutoDownloadMediaQuality());
        }
        return true;
    }
    function s(e) {
        const t = e.unsafe();
        return t.parentMsgKey != null && o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(t.associationType);
    }
    l.shouldAutoDownloadAssociatedChild = e;
    l.isDualUploadHdChildMsg = s;
}, 98);