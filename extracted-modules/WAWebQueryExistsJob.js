__d("WAWebQueryExistsJob", [
    "WALogger",
    "WAPhoneFindCC",
    "WAWebABProps",
    "WAWebApiContactUsernameFields",
    "WAWebBackendErrors",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleUsernameSync",
    "WAWebMexUsersGetUsername",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        if (e.isLid()) {
            return m({
                type: "lid",
                wid: e
            }, t);
        }
        return m({
            type: "phone",
            phone: `+${e.toString()}`
        }, t);
    }
    function d(phone, t) {
        return m({
            type: "phone",
            phone
        }, t);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (o("WAWebUsyncUser")).USyncUser;
            const r = new (o("WAWebUsync")).USyncQuery;
            if (e.type === "phone") {
                r.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID);
                n.withPhone(e.phone);
            } else {
                n.withId(e.wid);
            }
            if (o("WAWebABProps").getABPropConfigValue("username_antiscraping_send_cached_un") === true) {
                yield f(n, e);
            }
            r.withUser(n);
            r.withBusinessProtocol();
            r.withDisappearingModeProtocol();
            r.withUsernameProtocol();
            const a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
                requestOrigin: t ?? o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                requestedCount: 1,
                protocols: r.protocols
            });
            const i = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(a, function() {
                return r.execute();
            }, o("WAWebContactSyncErrorCodes").QUERY_EXIST);
            const l = i.error.all || i.error.contact;
            if (l) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(a, l.errorCode, i, o("WAWebContactSyncErrorCodes").QUERY_EXIST);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode, l.errorText);
            }
            const i_list = i.list;
            if (i_list.length !== 1) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
                return null;
            }
            const u = i_list[0];
            const { business, contact, id, lid, pn, username } = u;
            const disappearingMode = i_list[0].disappearingMode;
            if (e.type === "phone" && contact?.type !== "in") {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
                return null;
            }
            const y = {
                wid: id,
                biz: business != null,
                bizInfo: business,
                isUsernameSearch: e.type === "phone" ? false : undefined
            };
            if (o("WAWebUsernameGatingUtils").usernameSearchEnabled() && username != null) {
                y.username = username;
            }
            if (disappearingMode) {
                y.disappearingMode = {
                    duration: disappearingMode.duration,
                    settingTimestamp: disappearingMode.t
                };
                if (disappearingMode.ephemeralityDisabled) {
                    y.disappearingMode.isEphemeralityDisabled = true;
                }
            }
            let C = null;
            let b = null;
            if (id.isLid()) {
                C = pn;
                b = id;
            } else {
                C = id;
                if (lid != null) {
                    b = o("WAWebWidFactory").createUserWidOrThrow(lid, "lid");
                }
            }
            if (C != null && b != null) {
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: [
                        {
                            pn: C,
                            lid: b
                        }
                    ],
                    flushImmediately: true,
                    learningSource: "usync"
                });
                if (!id.isLid()) {
                    y.wid = b;
                }
            }
            yield o("WAWebHandleUsernameSync").handleUsernameSync(i);
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
            return y;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        if (e.type === "lid") {
            return e.wid;
        }
        const t = `${o("WAPhoneFindCC").extractDigits(e.phone)}@c.us`;
        if (r("WAWebWid").isWid(t)) {
            return o("WAWebWidFactory").createUserWidOrThrow(t);
        }
        return null;
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = _(t);
            if (n != null) {
                const r = o("WAWebUsernameTypes").serializeMaybeUsername((yield o("WAWebApiContactUsernameFields").getContactUsername(n)));
                if (r != null) {
                    e.withUsername(r);
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] querying contact: ",
                " for username info"
            ])), t);
            const r = new (o("WAWebUsyncUser")).USyncUser;
            const a = new (o("WAWebUsync")).USyncQuery;
            r.withId(t);
            a.withUser(r);
            a.withUsernameProtocol();
            const i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
                requestOrigin: n ?? o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                requestedCount: 1,
                protocols: a.protocols
            });
            const l = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(i, function() {
                return a.execute();
            }, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_DEPRECATED);
            const u = l.error.all || l.error.contact || l.error.username;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[usync] username info response"
            ])));
            if (u) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(i, u.errorCode, l, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_DEPRECATED);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(u.errorCode, u.errorText);
            }
            const l_list = l.list;
            if (l_list.length !== 1) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
                return null;
            }
            const d = l_list[0];
            if (d.id != null) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
                return {
                    id: d.id,
                    username: d.username,
                    shouldDelete: !Object.hasOwn(d, "username")
                };
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isLid()) {
                let t;
                let n;
                let r;
                if (o("WAWebABProps").getABPropConfigValue("mex_usync_username_query")) {
                    const a = o("WAWebWidFactory").createUserWidOrThrow(e.toString());
                    const i = yield o("WAWebMexUsersGetUsername").getMexUserUsername(a);
                    n = a;
                    if (i.error === true) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[usync] username MEX lookup failed"
                        ]))).sendLogs("username-mex-query-failed");
                        return {
                            username: undefined,
                            usernameChanged: false,
                            wasPreviouslyKnown: false,
                            errored: true
                        };
                    }
                    if (i.username != null) {
                        t = o("WAWebUsernameTypes").serializeMaybeUsername(i.username);
                    } else {
                        r = true;
                    }
                } else {
                    const l = yield h(e);
                    if (l != null) {
                        t = l.username;
                        n = l.id;
                        r = l.shouldDelete;
                    }
                }
                if (n != null) {
                    let usernameChanged = false;
                    let wasPreviouslyKnown = false;
                    let isPhoneNumberKnown = false;
                    let m;
                    const p = o("WAWebUsernameTypes").asMaybeUsername(t);
                    if (p != null) {
                        const _ = yield o("WAWebSetUsernameJob").setUsernamesJob([
                            {
                                userId: n,
                                username: p
                            }
                        ]);
                        const f = _.get(n.toString());
                        usernameChanged = f?.usernameChanged === true;
                        wasPreviouslyKnown = f?.wasPreviouslyKnown === true;
                        isPhoneNumberKnown = f?.isPhoneNumberKnown === true;
                        m = o("WAWebUsernameTypes").serializeMaybeUsername(f?.oldUsername);
                    } else if (r === true) {
                        const g = yield o("WAWebSetUsernameJob").setUsernamesJob([
                            {
                                userId: n,
                                deleteUsername: true
                            }
                        ]);
                        const y = g.get(n.toString());
                        usernameChanged = y?.usernameChanged === true;
                        wasPreviouslyKnown = y?.wasPreviouslyKnown === true;
                        isPhoneNumberKnown = y?.isPhoneNumberKnown === true;
                        m = o("WAWebUsernameTypes").serializeMaybeUsername(y?.oldUsername);
                    }
                    return {
                        username: t,
                        usernameChanged,
                        wasPreviouslyKnown,
                        isPhoneNumberKnown,
                        oldUsername: m ?? undefined
                    };
                }
            }
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e.length < o("WAWebUsernameTypes").USERNAME_MIN_LENGTH || e.length > o("WAWebUsernameTypes").USERNAME_MAX_LENGTH) {
                return null;
            }
            const r = new (o("WAWebUsyncUser")).USyncUser;
            const a = new (o("WAWebUsync")).USyncQuery;
            a.withUser(r);
            a.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID);
            a.withBusinessProtocol();
            r.withUsername(e);
            if (t != null) {
                r.withUsernameKey(t);
            }
            const i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query"),
                requestOrigin: n ?? o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                requestedCount: 1,
                protocols: a.protocols
            });
            const l = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(i, function() {
                return a.execute();
            }, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST);
            const s = l.error.all || l.error.contact;
            if (s) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(i, s.errorCode, l, o("WAWebContactSyncErrorCodes").QUERY_USERNAME_EXIST);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(s.errorCode, s.errorText);
            }
            const l_list = l.list;
            if (l_list.length !== 1) {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
                return null;
            }
            const c = l_list[0];
            const { business, contact, id } = c;
            const { type, username } = contact;
            if (type === "out") {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
                return null;
            }
            if (id != null) {
                if (id.isLid() && business != null && business.pn != null) {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                        mappings: [
                            {
                                pn: business.pn,
                                lid: id
                            }
                        ],
                        flushImmediately: true,
                        learningSource: "usync"
                    });
                }
                let wasUpdated = false;
                const h = o("WAWebUsernameTypes").asMaybeUsername(username);
                if (h != null) {
                    const y = yield o("WAWebSetUsernameJob").setUsernamesJob([
                        {
                            userId: id,
                            username: h
                        }
                    ]);
                    const C = y.get(id.toString());
                    wasUpdated = C?.usernameChanged === true || C?.countryCodeChanged === true;
                } else {
                    const b = yield o("WAWebSetUsernameJob").setUsernamesJob([
                        {
                            userId: id,
                            deleteUsername: true
                        }
                    ]);
                    const v = b.get(id.toString());
                    wasUpdated = v?.usernameChanged === true || v?.countryCodeChanged === true;
                }
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
                return {
                    wid: id,
                    biz: business != null,
                    bizInfo: business,
                    username,
                    wasUpdated,
                    isUsernameSearch: true
                };
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
            return {
                keyRequired: true,
                username,
                isUsernameSearch: true
            };
        });
        return S.apply(this, arguments);
    }
    l.queryWidExists = c;
    l.queryPhoneExists = d;
    l.queryExist = m;
    l.queryWidUsernameExists = C;
    l.queryUsernameExists = v;
}, 98);