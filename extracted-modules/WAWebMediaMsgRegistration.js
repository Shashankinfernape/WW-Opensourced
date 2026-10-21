__d("WAWebMediaMsgRegistration", [
    "Promise",
    "WALogger",
    "WAWebConsolidateMediaUpdate",
    "WAWebMediaDataUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebWamEnumWebcRmrReasonCode"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = `change:ack ${o("WAWebMediaTypes").MEDIA_MSG_PROPS.map((e)=>`change:${e}`).join(" ")}`;
    function d(e) {
        o("WAWebConsolidateMediaUpdate").consolidateMediaUpdate(e, o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_UPDATE);
    }
    function m(e) {
        e.off(null, d);
        const e_mediaObject = e.mediaObject;
        if (e_mediaObject) {
            o("WAWebMediaStorage").disassociateMediaFromMsg(e_mediaObject, e);
        }
    }
    function p(e) {
        if (!e.mimetype && e.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE) {
            e.mimetype = "image/jpeg";
        }
        if (!e.mimetype && e.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            e.mimetype = "image/webp";
        }
        e.on(c, d);
        o("WAWebConsolidateMediaUpdate").consolidateMediaUpdate(e, o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_INIT);
    }
    function _(t, n) {
        if (t.isUnsentPhoneMsg()) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "id: ",
                " type: ",
                ""
            ])), t.id.toString(), t.type).sendLogs("media-fault: registerMsgEarly msg without mediaObject");
        }
        const msgValues = {};
        for(let a = 0; a < o("WAWebMediaTypes").MEDIA_MSG_PROPS.length; a++){
            const i = o("WAWebMediaTypes").MEDIA_MSG_PROPS[a];
            const l = n[i];
            msgValues[i] = l !== undefined ? l : t[i];
        }
        if ((msgValues.mimetype == null || msgValues.mimetype === "") && msgValues.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE) {
            n.mimetype = msgValues.mimetype = "image/jpeg";
        }
        t.on(c, d);
        o("WAWebConsolidateMediaUpdate").consolidateMediaUpdateWithValues({
            msg: t,
            msgValues,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_UPDATE
        });
        const s = {};
        for(let u = 0; u < o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS.length; u++){
            const m = o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS[u];
            s[m] = msgValues[o("WAWebMediaTypes").MEDIA_TO_MSG[m]];
        }
        t.mediaData.set(s);
    }
    function f(e) {
        const e_mediaObject = e.mediaObject;
        if (e_mediaObject) {
            return e_mediaObject.resolveWhenConsolidated();
        }
        const e_mediaData = e.mediaData;
        if (e.mediaData == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "prepareMsg: no media data v2. key: ",
                " type: ",
                " subtype: ",
                ""
            ])), e.id.toString(), e.type, e.subtype);
        }
        const a_preview = e_mediaData.preview;
        if (a_preview instanceof r("WAWebMediaOpaqueData") && e_mediaData.aspectRatio === undefined && (e_mediaData.fullWidth === undefined || e_mediaData.fullHeight === undefined)) {
            return o("WAWebMediaDataUtils").getImageWidthHeight(a_preview).then(({ height, width })=>{
                if (!e.mediaObject) {
                    e.mediaData.set({
                        aspectRatio: width / height
                    });
                }
            });
        }
        return (u || (u = n("Promise"))).resolve();
    }
    l.deregisterMsg = m;
    l.registerMsg = p;
    l.registerMsgEarly = _;
    l.prepareMsg = f;
}, 98);