__d("WAWebMexGetPrivacySetting", [
    "WAHasProperty",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetPrivacySettingsQuery.graphql",
    "WAWebPrivacySettings",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexGetPrivacySettingsQuery.graphql");
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebMexClient").fetchQuery(u, {
                input: {
                    query_input: [
                        {
                            jid: e.jid.toString(),
                            privacy_features: e.privacyFeatures
                        }
                    ]
                }
            });
            return m(t);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        const r = {};
        if (e.xwa2_fetch_wa_users?.[0].privacy_settings == null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(400, "privacy_settings is null");
        }
        e.xwa2_fetch_wa_users?.[0].privacy_settings?.settings?.forEach(function({ feature, setting }) {
            if (!(feature == null || setting == null)) {
                switch(feature){
                    case "READRECEIPTS":
                        {
                            const a = p(feature, setting, o("WAWebPrivacySettings").ALL_NONE_WITH_ERROR);
                            if (a !== "error") {
                                r.readReceipts = a;
                            } else {
                                f("readReceipts", `${a} is unknown type`);
                            }
                            break;
                        }
                    case "LAST":
                        {
                            const i = p(feature, setting, o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                            if (i !== "error") {
                                r.lastSeen = i;
                            } else {
                                f("last", `${i} is unknown type`);
                            }
                            break;
                        }
                    case "ONLINE":
                        {
                            const l = p(feature, setting, o("WAWebPrivacySettings").ONLINE_VISIBILITY_WITH_ERROR);
                            if (l !== "error") {
                                r.online = l;
                            } else {
                                f("online", "categoryValue is unknown type");
                            }
                            break;
                        }
                    case "PROFILE":
                        {
                            const s = p(feature, setting, o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                            if (s !== "error") {
                                r.profilePicture = s;
                            } else {
                                f("profile", "categoryValue is unknown type");
                            }
                            break;
                        }
                    case "ABOUT":
                        {
                            const u = p(feature, setting, o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                            if (u !== "error") {
                                r.about = u;
                            } else {
                                f("about", "categoryValue is unknown type");
                            }
                            break;
                        }
                    case "GROUPADD":
                        {
                            const c = p(feature, setting, o("WAWebPrivacySettings").VISIBILITY_WITH_ERROR);
                            if (c !== "error") {
                                r.groupAdd = c;
                            } else {
                                f("groupAdd", "categoryValue is unknown type");
                            }
                            break;
                        }
                    case "CALLADD":
                        {
                            const d = p(feature, setting, o("WAWebPrivacySettings").CALL_ADD_WITH_ERROR);
                            if (d !== "error") {
                                r.callAdd = d;
                            } else {
                                f("callAdd", "categoryValue is unknown type");
                            }
                            break;
                        }
                    case "MESSAGES":
                        {
                            const m = p(feature, setting, o("WAWebPrivacySettings").ALL_CONTACTS);
                            r.messages = m;
                            break;
                        }
                    case "DEFENSE":
                        {
                            const _ = p(feature, setting, o("WAWebPrivacySettings").DEFENSE_MODE_STATE);
                            r.defenseMode = _;
                            break;
                        }
                    case "PIX":
                    case "LINKED_PROFILES":
                    case "DEPENDENT_ACCOUNT_MESSAGES":
                    case "DEPENDENT_ACCOUNT_CALLING":
                    case "STICKERS":
                        break;
                    default:
                        {
                            f("Feature parsing", `${feature} is unknown type`);
                            break;
                        }
                }
            }
        });
        return r;
    }
    function p(feature, setting, n) {
        let o = setting.toLowerCase();
        switch(setting){
            case "MYCONTACTS":
                o = "contacts";
                break;
            case "MYCONTACTSEXCEPT":
                o = "contact_blacklist";
                break;
            default:
                break;
        }
        if (!r("WAHasProperty")(n, o)) {
            const a = Object.keys(n).join("|");
            throw new _(r("err")(`to have "${feature}"={${a}} but has value "${o}"`));
        }
        return n[o];
    }
    var _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.name = "MexPrivacyParsingError";
            n.error = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function f(e, t) {
        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "mexGetPrivacy error: ",
            " - text ",
            ""
        ])), e, t).sendLogs("mexGetPrivacy", {
            sampling: 0.01
        });
    }
    l.fetchPrivacySettings = c;
    l.MexPrivacyParsingError = _;
}, 98);