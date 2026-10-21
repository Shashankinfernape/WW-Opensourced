__d("WAWebHandleAdvDeviceNotificationUtils", [
    "WALogger",
    "WAWebAdvKeyIndexSignatureVerify",
    "WAWebCryptoCurve25519",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        let n;
        try {
            n = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedKeyIndexListSpec, t);
        } catch (e) {
            return null;
        }
        if (!o("WAWebAdvKeyIndexSignatureVerify").verifyKeyIndexListAccountSignature(n, e)) {
            return null;
        }
        let r;
        try {
            r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVKeyIndexListSpec, n.details);
        } catch (e) {
            return null;
        }
        const a = r;
        const { accountType, currentIndex, rawId, timestamp, validIndexes } = a;
        if (timestamp == null || rawId == null) {
            return null;
        }
        return {
            timestamp,
            rawId,
            validIndexes,
            currentIndex,
            accountType
        };
    }
    function p(t, n) {
        let r;
        try {
            r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVSignedKeyIndexListSpec, n);
        } catch (e) {
            return null;
        }
        const r_accountSignatureKey = r.accountSignatureKey;
        if (r_accountSignatureKey == null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "accountSignatureKey is null"
            ]))).tags("verifySKeyIndexWithAccSigKey");
            return null;
        }
        if (!o("WAWebAdvKeyIndexSignatureVerify").verifyKeyIndexListAccountSignature(r, r_accountSignatureKey)) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "account signature verification failed"
            ]))).tags("verifySKeyIndexWithAccSigKey");
            return null;
        }
        let i;
        try {
            i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsAdv.pb").ADVKeyIndexListSpec, r.details);
        } catch (e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "decode failed"
            ]))).tags("verifySKeyIndexWithAccSigKey");
            return null;
        }
        const l = i;
        const { accountType, currentIndex, rawId, timestamp, validIndexes } = l;
        if (timestamp == null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "timestamp is null"
            ]))).tags("verifySKeyIndexWithAccSigKey");
            return null;
        }
        if (rawId == null) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "rawId is null"
            ]))).tags("verifySKeyIndexWithAccSigKey");
            return null;
        }
        const identityUpdatePromise = o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(o("WAWebSignalCommonUtils").createSignalAddress(t).toString(), o("WAWebCryptoCurve25519").toSignalCurvePubKey(r_accountSignatureKey));
        return {
            timestamp,
            rawId,
            validIndexes,
            currentIndex,
            accountType,
            identityUpdatePromise
        };
    }
    l.decodeSignedKeyIndexBytes = m;
    l.verifySKeyIndexWithAccSigKey = p;
}, 98);