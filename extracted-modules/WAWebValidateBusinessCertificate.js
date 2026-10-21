__d("WAWebValidateBusinessCertificate", [
    "WAWebProtobufsVnameCert.pb",
    "decodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = "ent:wa";
    const s = "smb:wa";
    function u(t) {
        return {
            serial: t.serial,
            name: t.verifiedName,
            isApi: t.issuer === e,
            isSmb: t.issuer === s
        };
    }
    function c(e) {
        if (!e) {
            return null;
        }
        const cert = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsVnameCert.pb").VerifiedNameCertificateSpec, e);
        if (!cert.details) {
            throw r("err")("verifyCertificate cert missing details");
        }
        const details = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsVnameCert.pb").VerifiedNameCertificate$DetailsSpec, cert.details);
        return {
            cert,
            details
        };
    }
    l.extractCertificateDetailsParams = u;
    l.getParsedProtoObjects = c;
}, 98);