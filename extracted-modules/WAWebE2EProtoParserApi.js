__d("WAWebE2EProtoParserApi", [
    "WABase64",
    "WALogger",
    "WAWebGroupType",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWid",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        if (e === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.PARENT) {
            return o("WAWebGroupType").GroupType.COMMUNITY;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.SUB) {
            return o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT_SUB) {
            return o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT) {
            return o("WAWebGroupType").GroupType.DEFAULT;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _(e) {
        if (e != null && !e.includes("/u/")) {
            return e;
        }
    }
    function f(e) {
        if (e) {
            return o("WABase64").encodeB64(e);
        }
    }
    function g(t, n) {
        if (h(t, n)) {
            const r = t.type;
            if (!o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(t)) {
                if (n.directPath == null) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "directPath missing from msg type ",
                        ""
                    ])), r).sendLogs(`${r}-unencrypted-message-missing-direct-path`);
                }
                return;
            }
            if (n.directPath == null && n.fileEncSha256 == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "directPath and fileEncSha256 missing from msg type ",
                    ""
                ])), r).sendLogs(`${r}-message-missing-direct-path-and-file-enc`);
            } else if (n.directPath == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "directPath missing from msg type ",
                    ""
                ])), r).sendLogs(`${r}-message-missing-direct-path`);
            } else if (n.fileEncSha256 == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "fileEncSha256 missing from msg type ",
                    ""
                ])), r).sendLogs(`${r}-message-missing-file-enc`);
            }
            if (n.url == null && n.directPath == null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "url(deprecatedMms3Url) is missing from msg type ",
                    ""
                ])), r).sendLogs(`${r}-message-missing-mms3-url`);
            }
            if (n.mediaKey == null) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "mediaKey is missing from msg type ",
                    ""
                ])), r).sendLogs(`${r}-message-missing-media-key`);
            }
        }
    }
    function h(e, t) {
        return !(r("gkx")("26258") && Math.random() > 0.001 || !e.id || e.id.remote?.user === "status" && r("WAWebWid").isPSA(e.author) && t.staticUrl == null);
    }
    l.parseInviteGrpType = p;
    l.decodeUrl = _;
    l.decodeBytes = f;
    l.validateRequiredMediaProperties = g;
    l.shouldLogE2eProtoValidation = h;
}, 98);