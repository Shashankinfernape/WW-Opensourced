__d("WAWebCommonSocketPlatformDetails", [
    "WALogger",
    "WAVerifyChainCertificateWA6",
    "WAWapDict",
    "WAWebProtobufsWa6.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Uint8Array([
        87,
        65,
        6,
        o("WAWapDict").DICT_VERSION
    ]);
    function u(e) {
        return o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, {
            clientHello: e
        }).readByteArrayView();
    }
    function c(e) {
        return o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, {
            clientFinish: e
        }).readByteArrayView();
    }
    function d(e) {
        return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, e).serverHello;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ certificate: n, serverStatic: a }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "processCertificate start"
            ])));
            const i = yield o("WAVerifyChainCertificateWA6").verifyChainCertificateWA6(n, a);
            if (!i.success) {
                throw r("err")(`verifyCertificateWA6 - ${i.error}`);
            }
        });
        return p.apply(this, arguments);
    }
    function _() {
        return null;
    }
    function f(e) {
        if (e == null) {
            return null;
        }
        const t = e ?? {};
        const { intermediate: n, leaf: r } = t;
        if (r && n) {
            return r.key;
        }
        return null;
    }
    l.WA_WEB_PROTO_HEADER = s;
    l.encodeHandshakeHello = u;
    l.encodeHandshakeFinish = c;
    l.decodeServerHello = d;
    l.processCertificate = m;
    l.serverInfoIfKnown = _;
    l.makeServerInfoIfKnown = f;
}, 98);