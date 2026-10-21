__d("WAWebQueryPrivacySettingsJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebMexGetPrivacySetting",
    "WAWebPrivacySettings",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(t, n) {
        const r = n.maybeChild("error");
        const a = r && r.maybeAttrString("code");
        const i = r && r.maybeAttrString("text");
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "getPrivacy error: ",
            " - code ",
            " text ",
            ""
        ])), t, a, i).sendLogs("getPrivacy", {
            sampling: 0.01
        });
    }
    const _ = new (r("WADeprecatedWapParser"))("privacyParser", function(e) {
        e.assertAttr("type", "result");
        const t = {};
        e.child("privacy").forEachChildWithTag("category", function(e) {
            const n = e.attrString("name");
            e: {
                if (n === "readreceipts") {
                    const r = e.attrEnum("value", o("WAWebPrivacySettings").ALL_NONE_WITH_ERROR);
                    if (r !== "error") {
                        t.readReceipts = r;
                    } else {
                        p("readreceipts", e);
                    }
                    break e;
                }
                if (n === "last") {
                    const a = e.attrEnum("value", o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                    if (a !== "error") {
                        t.lastSeen = a;
                    } else {
                        p("last", e);
                    }
                    break e;
                }
                if (n === "online") {
                    const i = e.attrEnum("value", o("WAWebPrivacySettings").ONLINE_VISIBILITY_WITH_ERROR);
                    if (i !== "error") {
                        t.online = i;
                    } else {
                        p("online", e);
                    }
                    break e;
                }
                if (n === "profile") {
                    const l = e.attrEnum("value", o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                    if (l !== "error") {
                        t.profilePicture = l;
                    } else {
                        p("profile", e);
                    }
                    break e;
                }
                if (n === "status") {
                    const s = e.attrEnum("value", o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                    if (s !== "error") {
                        t.about = s;
                    } else {
                        p("status", e);
                    }
                    break e;
                }
                if (n === "groupadd") {
                    const u = e.attrEnum("value", o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                    if (u !== "error") {
                        t.groupAdd = u;
                    } else {
                        p("groupadd", e);
                    }
                    break e;
                }
                if (n === "calladd") {
                    const c = e.attrEnum("value", o("WAWebPrivacySettings").CALL_ADD_WITH_ERROR);
                    if (c !== "error") {
                        t.callAdd = c;
                    } else {
                        p("calladd", e);
                    }
                    break e;
                }
                if (n === "messages") {
                    const d = e.attrEnum("value", o("WAWebPrivacySettings").ALL_CONTACTS);
                    t.messages = d;
                    break e;
                }
                if (n === "defense") {
                    const m = e.attrEnum("value", o("WAWebPrivacySettings").DEFENSE_MODE_STATE);
                    t.defenseMode = m;
                    break e;
                }
                if (n === "pix") {
                    const _ = e.attrEnum("value", o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                    if (_ !== "error") {
                        t.pix = _;
                    } else {
                        p("pix", e);
                    }
                    break e;
                }
                if (n === "linked_profiles" || n === "stickers" || n === "dependentaccountmessages" || n === "cover_photo" || n === "dependent_account_calling" || n === "groupcreation") {
                    break e;
                }
                {
                    p(`${n} is unknown type`, e);
                    break e;
                }
            }
        });
        return t;
    });
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            if (o("WAWebABProps").getABPropConfigValue("mex_get_privacy_settings_mode") === 1) {
                return yield h(e);
            }
            if (o("WAWebABProps").getABPropConfigValue("mex_get_privacy_settings_mode") === 2) {
                const n = yield v(e);
                R(n);
                return n.xmlPrivacyResult.response ?? {};
            }
            return yield C();
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebMexGetPrivacySetting").fetchPrivacySettings({
                jid: e,
                privacyFeatures: [
                    "LAST",
                    "ONLINE",
                    "PROFILE",
                    "ABOUT",
                    "READRECEIPTS",
                    "GROUPADD",
                    "CALLADD",
                    "STICKERS",
                    "MESSAGES",
                    "DEFENSE"
                ]
            });
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            const t = (e = o("WAWap")).wap("iq", {
                xmlns: "privacy",
                to: e.S_WHATSAPP_NET,
                type: "get",
                id: e.generateId()
            }, e.wap("privacy", null));
            const n = yield o("WADeprecatedSendIq").deprecatedSendIq(t, _);
            if (n.success) {
                return n.result;
            }
            if (o("WAWebABProps").getABPropConfigValue("mex_get_privacy_settings_mode") === 2) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getPrivacyShadowMode: Request failed over SMAX errorCode:  ",
                    ":",
                    ""
                ])), n.errorCode, n.errorType).sendLogs("getPrivacyShadowMode", {
                    sampling: 0.01
                });
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(n.errorCode, n.errorText);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            let n;
            const r = yield C().then((e)=>{
                n = true;
                return e;
            }).catch((e)=>{
                t = e;
            });
            let o;
            let a;
            const i = yield h(e).then((e)=>{
                a = true;
                return e;
            }).catch((e)=>{
                o = e;
            });
            return {
                xmlPrivacyResult: {
                    response: r,
                    isSuccess: n === true,
                    error: t
                },
                mexPrivacyInfo: {
                    response: i,
                    isSuccess: a === true,
                    error: o
                }
            };
        });
        return S.apply(this, arguments);
    }
    function R({ mexPrivacyInfo, xmlPrivacyResult }) {
        const mexPrivacyInfo_response = mexPrivacyInfo.response;
        const xmlPrivacyResult_response = xmlPrivacyResult.response;
        if (xmlPrivacyResult.isSuccess && mexPrivacyInfo.isSuccess && mexPrivacyInfo_response != null && xmlPrivacyResult_response != null) {
            const i = [];
            if (mexPrivacyInfo_response.readReceipts !== xmlPrivacyResult_response.readReceipts) {
                i.push("readReceipts");
            }
            if (mexPrivacyInfo_response.groupAdd !== xmlPrivacyResult_response.groupAdd) {
                i.push("groupAdd");
            }
            if (mexPrivacyInfo_response.profilePicture !== xmlPrivacyResult_response.profilePicture) {
                i.push("profilePicture");
            }
            if (mexPrivacyInfo_response.about !== xmlPrivacyResult_response.about) {
                i.push("about");
            }
            if (mexPrivacyInfo_response.lastSeen !== xmlPrivacyResult_response.lastSeen) {
                i.push("lastSeen");
            }
            if (mexPrivacyInfo_response.online !== xmlPrivacyResult_response.online) {
                i.push("online");
            }
            if (mexPrivacyInfo_response.callAdd !== xmlPrivacyResult_response.callAdd) {
                i.push("callAdd");
            }
            if (mexPrivacyInfo_response.messages !== xmlPrivacyResult_response.messages) {
                i.push("messages");
            }
            if (mexPrivacyInfo_response.defenseMode !== xmlPrivacyResult_response.defenseMode) {
                i.push("defenseMode");
            }
            if (i.length > 0) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getPrivacy: MEX/XML settings mismatch"
                ]))).sendLogs(`getPrivacy-xml-mex-privacySettings-notEqual mismatched fields: ${JSON.stringify(i)}`, {
                    sampling: 0.01
                });
            }
        }
        if (xmlPrivacyResult.isSuccess && !mexPrivacyInfo.isSuccess) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "getPrivacy: xml query succeeded but mex query failed"
            ]))).sendLogs("getPrivacy-xml-succeeded-mex-failed", {
                sampling: 0.01
            });
        }
        if (!xmlPrivacyResult.isSuccess && mexPrivacyInfo.isSuccess) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "getPrivacy: mex query succeeded but xml query failed "
            ]))).sendLogs("getPrivacy-mex-succeeded-xml-failed", {
                sampling: 0.01
            });
        }
        if (!xmlPrivacyResult.isSuccess && !mexPrivacyInfo.isSuccess) {
            if (xmlPrivacyResult.error?.statusCode !== mexPrivacyInfo.error?.statusCode) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getPrivacy: xml/mex error codes mismatch"
                ]))).sendLogs("getPrivacy-error-codes-notEqual", {
                    sampling: 0.01
                });
            }
        }
        if (!xmlPrivacyResult.isSuccess) {
            throw xmlPrivacyResult.error;
        }
    }
    l.getPrivacy = f;
}, 98);