__d("WAWebDualUploadsPreferredMsg", [
    "WAWebMediaGatingUtils",
    "WAWebMediaLocalAvailability",
    "WAWebMediaTypes",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    const e = new Map([
        [
            o("WAWebMsgType").MSG_TYPE.IMAGE,
            {
                associationType: o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
                isEnabled: o("WAWebMediaGatingUtils").isHdImageDualUploadConsumptionEnabled
            }
        ]
    ]);
    function s(e) {
        const t = new Set;
        const n = [];
        for (const r of e){
            const o = u(r);
            if (!t.has(o)) {
                t.add(o);
                n.push(o);
            }
        }
        return n;
    }
    function u(e) {
        const t = c(e);
        const n = t?.mediaData;
        if (t != null && n != null && n.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && n.filehash != null && o("WAWebMediaLocalAvailability").isMsgMediaAvailableLocally(t)) {
            return t;
        }
        return e;
    }
    function c(e) {
        return d(o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id), e.type);
    }
    function d(t, n) {
        const r = e.get(n);
        if (r == null) {
            return null;
        }
        const o = t.find((e)=>e.associationType === r.associationType);
        if (o != null && r.isEnabled()) {
            return o;
        }
        return null;
    }
    l.getPreferredMediaMsgs = s;
    l.getPreferredMediaMsg = u;
    l.getHdChildMsg = c;
    l.findHdChildMsg = d;
}, 98);