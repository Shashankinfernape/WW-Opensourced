__d("WAWebAdvDeviceNotificationApi", [
    "Promise",
    "WALogger",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebBizCoexHostedAddVerification",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(accountTypeChangedUser, n) {
            const a = {
                notifications: [],
                chatIds: []
            };
            const i = [];
            if (o("WAWebUserPrefsMeUser").isMeAccount(accountTypeChangedUser)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "SMB unexpected self adv system msg"
                ]))).tags("generateAdvAccountTypeChangeNotifications");
            } else {
                if (n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "accountTypeChangeNotification: check coex cache for ",
                        ""
                    ])), accountTypeChangedUser?.toLogString());
                    o("WAWebBizCoexHostedAddVerification").assertThrowsWidAdvTypeFromVerificationCache(accountTypeChangedUser);
                }
                try {
                    const l = yield o("WAWebSchemaChat").getChatTable().get(String(accountTypeChangedUser), false);
                    if (l) {
                        i.push(o("WAWebWidFactory").createWid(l.id));
                    }
                } catch (e) {
                    throw r("err")("get chays failed");
                }
            }
            const u = r("compactMap")(i, function(e) {
                return o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeChangeNotificationMsg({
                    accountTypeChangedUser,
                    chatId: e,
                    newAdvAccountType: n,
                    useEncryptNowSubtype: true
                });
            });
            a.notifications = u;
            a.chatIds = i.map(String);
            return a;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let notifications = [];
            const r = new Set;
            const o = yield (u || (u = n("Promise"))).all(e.map(({ newAdvAccountType, wid })=>{
                if (newAdvAccountType != null) {
                    return c(wid, newAdvAccountType);
                }
                return (u || (u = n("Promise"))).resolve(null);
            }));
            o.forEach((e)=>{
                if (e) {
                    notifications = notifications.concat(e.notifications);
                    e.chatIds.forEach((e)=>r.add(e));
                }
            });
            if (notifications.length > 0) {
                return {
                    notifications,
                    chatIds: Array.from(r)
                };
            }
            return {
                notifications: [],
                chatIds: []
            };
        });
        return p.apply(this, arguments);
    }
    l.bulkGenerateDeviceAndAdvAccountTypeChangeNotifications = m;
}, 98);