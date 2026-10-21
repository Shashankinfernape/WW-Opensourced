__d("WAWebCommonParsersVerifiedName", [
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebNonEmptyString",
    "WAWebValidateBusinessCertificate"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebValidateBusinessCertificate").getParsedProtoObjects(e);
        if (t != null && t.details) {
            const n = o("WAWebValidateBusinessCertificate").extractCertificateDetailsParams(t.details);
            const { isApi, isSmb, name, serial } = n;
            return {
                name,
                serial: String(serial),
                isApi,
                isSmb
            };
        }
    }
    function s(t) {
        const level = t.attrEnum("verified_level", o("WAWebHandleMsgCommon").MSG_VERIFIED_LEVEL);
        const r = t.hasContent() ? t.contentBytes() : null;
        const a = o("WAWebNonEmptyString").asMaybeNonEmptyString(t.maybeAttrString("serial"));
        const i = r && e(r) || {};
        const { isApi, isSmb, name, serial } = i;
        const d = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(t.maybeAttrInt("actual_actors"));
        const m = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(t.maybeAttrInt("host_storage"));
        const privacyModeTs = t.maybeAttrInt("privacy_mode_ts");
        const privacyMode = d != null && m != null && privacyModeTs != null ? {
            actualActors: d,
            hostStorage: m,
            privacyModeTs
        } : null;
        return {
            level,
            serial: a ?? serial,
            name,
            isApi: isApi === true,
            isSmb: isSmb === true,
            privacyMode
        };
    }
    l.default = s;
}, 98);