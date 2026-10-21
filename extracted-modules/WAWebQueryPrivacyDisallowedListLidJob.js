__d("WAWebQueryPrivacyDisallowedListLidJob", [
    "WALogger",
    "WASmaxPrivacyGetContactBlacklistRPC",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let anyName;
            if (t === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.About) {
                anyName = "status";
            } else if (t === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.GroupAdd) {
                anyName = "groupadd";
            } else if (t === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.LastSeen) {
                anyName = "last";
            } else if (t === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.ProfilePicture) {
                anyName = "profile";
            } else if (t === o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.Pix) {
                anyName = "pix";
            } else {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "invalid privacyType: ",
                    ""
                ])), t);
                throw r("err")("GetContactBlacklist lid request invalid privacyType");
            }
            const a = {
                getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs: {
                    getContactBlacklistGetContactBlacklistLID: {
                        categoryNamesForContactBlacklistMixinArgs: {
                            anyName
                        }
                    }
                }
            };
            const i = yield o("WASmaxPrivacyGetContactBlacklistRPC").sendGetContactBlacklistRPC(a);
            if (i.name === "GetContactBlacklistResponseError") {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GetContactBlacklist lid err: ",
                    ""
                ])), i.value.errorGetPrivacyListError.name);
                throw r("err")("GetContactBlacklist lid request invalid response");
            }
            const i_value = i.value;
            const { privacyAddressingMode, privacyList } = i_value;
            const g = privacyList?.user;
            if (privacyList == null || g == null || g.length === 0) {
                return {
                    status: "mismatch",
                    users: [],
                    dhash: privacyList?.dhash
                };
            }
            if (i.name === "GetContactBlacklistResponseSuccess") {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "retrieved pn response for GetContactBlacklist lid request"
                ])));
                throw r("err")("GetContactBlacklist lid request invalid response");
            }
            if (privacyAddressingMode !== "lid") {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "response privacyAddressingMode should be lid but it is pn"
                ])));
                throw r("err")("GetContactBlacklist lid request invalid response");
            }
            const h = [];
            const y = [];
            const C = g.map((e)=>{
                const e_jid = e.jid;
                let a;
                if (e_jid == null) {
                    const l = e.privacyContactListIdentifierMixin?.contactListIds;
                    if (l == null || l.name !== "PnJid") {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "contactListIds should be PnJid for user without LID"
                        ])));
                        throw r("err")("GetContactBlacklist lid request invalid response");
                    }
                    const s = o("WAWebJidToWid").userJidToUserWid(l.value.pnJid);
                    const u = o("WAWebLidMigrationUtils").toUserLid(s);
                    if (u == null) {
                        return s;
                    }
                    a = o("WAWebLidMigrationUtils").toUserLidOrThrow(u);
                } else {
                    const c = o("WAWebJidToWid").userJidToUserWid(e_jid);
                    a = o("WAWebLidMigrationUtils").toUserLidOrThrow(c);
                }
                const _ = e.privacyContactListIdentifierMixin?.contactListIds;
                if (_?.name === "Username") {
                    h.push({
                        userId: a,
                        username: o("WAWebUsernameTypes").asUsername(_.value.username)
                    });
                } else if (_?.name === "PnJid") {
                    y.push({
                        lid: a,
                        pn: o("WAWebJidToWid").userJidToUserWid(_.value.pnJid)
                    });
                } else if (_?.name === "EmptyContactListIdentifier") {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "response contactListIds name is EmptyContactListIdentifier"
                    ])));
                } else {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "response contactListIds name is unexpected ",
                        ""
                    ])), _?.name);
                    throw r("err")("GetContactBlacklist lid request invalid response");
                }
                return a;
            });
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappingsInBatches({
                mappings: y,
                flushImmediately: true,
                learningSource: "query-privacy-disallowed-list"
            });
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && h.length > 0) {
                yield o("WAWebSetUsernameJob").setUsernamesJob(h);
            }
            const privacyList_dhash = privacyList.dhash;
            return {
                status: "mismatch",
                users: C,
                dhash: privacyList_dhash
            };
        });
        return f.apply(this, arguments);
    }
    l.queryPrivacyDisallowedListLid = _;
}, 98);