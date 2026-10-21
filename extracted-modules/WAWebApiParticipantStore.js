__d("WAWebApiParticipantStore", [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebCurrentUser",
    "WAWebGroupConstants",
    "WAWebModelStorageUtils",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "GroupUnSyncedError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.toString();
            const n = yield o("WAWebSchemaParticipant").getParticipantTable().get(t);
            return g(e, n);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            const a = [];
            if (!t) {
                return {
                    skDistribList: n,
                    skList: a,
                    rotateKey: false
                };
            }
            const i = t?.participants;
            const { rotateKey: l, senderKey: s } = t;
            let p = 0;
            const _ = [];
            let f = new Set;
            s.forEach((e, t)=>{
                if (!t.includes("hosted")) {
                    const i = o("WAWebWidFactory").createWid(t);
                    try {
                        if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(i)) {
                            return;
                        }
                    } catch (e) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Participant filter error"
                        ])));
                    }
                    f = f.add(t);
                    const l = o("WAWebWidFactory").asUserWidOrThrow(i);
                    const c = s.get(l.toString()) ?? false;
                    if (e && c) {
                        a.push(i);
                    } else {
                        n.push(i);
                        if (i.isCompanion() && e && !c) {
                            if (_.length < 3) {
                                _.push(t);
                            }
                            p++;
                        }
                    }
                }
            });
            if (p > 0) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSenderKeyList: ",
                    " added, primary missing key => ",
                    ""
                ])), p, _);
            }
            if (o("WAWebCurrentUser").isEmployee()) {
                const g = i.filter((e)=>!f.has(e));
                if (g.length > 0) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "getGroupSenderKeyList: missing keys for ",
                        ": ",
                        ""
                    ])), g.length, g.join());
                }
            }
            if (!r("gkx")("26258")) {
                if (p > 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "getGroupSenderKeyList: missed ",
                        " keys on primary"
                    ])), p).sendLogs("missing-sender-key-on-primary");
                }
            }
            yield v(e, s.size);
            o("WAWebWamGroupMetricCache").cacheGroupMetrics(t);
            if (l) {
                return {
                    skDistribList: [].concat(n, a),
                    skList: [],
                    rotateKey: l
                };
            }
            return {
                skDistribList: n,
                skList: a,
                rotateKey: l
            };
        });
        return h.apply(this, arguments);
    }
    function y(t, r) {
        const a = t.toString();
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const i = yield n.get(a);
                if (!i) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "markHasSenderKey: group participant info missing for group ",
                        ""
                    ])), a);
                    return;
                }
                yield n.createOrReplace(b(i, r, true));
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function C(e, t) {
        const r = e.toString();
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.get(r);
                if (!a) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "markForgetSenderKey: participant info missing ",
                        ""
                    ])), r);
                    return;
                }
                yield n.createOrReplace(b(a, t, false));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function b(e, t, n) {
        const r = new Map(e.senderKey);
        let a = false;
        t.forEach((e)=>{
            if (!o("WAWebUserPrefsMeUser").isMeDevice(e)) {
                const t = String(e);
                if (r.has(t)) {
                    r.set(t, n);
                } else if (!e.isLid()) {
                    a = true;
                }
            }
        });
        return {
            groupId: e.groupId,
            senderKey: r,
            participants: e.participants,
            pastParticipants: e.pastParticipants,
            admins: e.admins,
            superAdmins: e.superAdmins,
            rotateKey: a,
            deviceSyncComplete: e.deviceSyncComplete
        };
    }
    function v(e, t) {
        return o("WAWebBackendApi").frontendSendAndReceive("updateCachedDeviceCount", {
            groupWid: e,
            deviceCount: t
        });
    }
    function S(e, t, n) {
        if (n !== "add") {
            return t;
        }
        const a = new Set(t.map((e)=>e.id.toString()));
        e.forEach((e)=>{
            if (a.has(e)) {
                a.delete(e);
            }
            const t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").createUserWidOrThrow(e));
            const n = t?.toString();
            if (!r("isStringNullOrEmpty")(n) && a.has(n)) {
                a.delete(n);
            }
        });
        const i = t.filter((e)=>a.has(e.id.toString()));
        return i;
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.map((e)=>e.id.toString());
            const r = yield o("WAWebSchemaParticipant").getParticipantTable().bulkGet(n);
            const a = e.map((e, n)=>{
                const i = r[n];
                if (!i) {
                    return e;
                }
                const l = i.pastParticipants?.map(function({ jid: t, leaveReason: n, leaveTs: r }) {
                    return {
                        id: o("WAWebWidFactory").createWid(t),
                        leaveTs: r,
                        leaveReason: n
                    };
                }) || [];
                const s = S(i.participants, l, t);
                return babelHelpers.extends({}, e, {
                    pastParticipants: s
                });
            });
            return a;
        });
        return L.apply(this, arguments);
    }
    function E() {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                const n = yield o("WAWebSchemaParticipant").getParticipantTable().all();
                const r = [];
                const a = o("WATimeUtils").DAY_SECONDS * o("WAWebGroupConstants").PAST_PARTICIPANT_EXPIRATION_DAYS;
                n.forEach((e)=>{
                    const n = e.pastParticipants ?? [];
                    const i = n.filter((e)=>{
                        const t = o("WATimeUtils").castToUnixTime(e.leaveTs);
                        const n = o("WATimeUtils").happenedWithin(t, a);
                        return n;
                    });
                    if (i.length !== n.length) {
                        const l = babelHelpers.extends({}, e, {
                            pastParticipants: i
                        });
                        r.push(l);
                    }
                });
                r.length > 0;
                return t.bulkCreateOrReplace(r);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    const k = new Map;
    function I(e, t) {
        k.set(e, t);
    }
    function T(e) {
        if (e != null) {
            k.delete(e);
        } else {
            k.clear();
        }
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = k.get(e);
            if (t == null) {
                const n = yield o("WAWebSchemaParticipant").getParticipantTable().get(e);
                const r = !!n && n.admins && n.admins.some((e)=>o("WAWebUserPrefsMeUser").isSerializedWidMe(e));
                k.set(e, r);
                return r;
            }
            return t;
        });
        return x.apply(this, arguments);
    }
    l.GroupUnSyncedError = p;
    l.getGroupSenderKeyList = _;
    l.getGroupSenderKeyListFromParticipantRecord = g;
    l.markHasSenderKey = y;
    l.markForgetSenderKey = C;
    l.injectPastParticipantsFromDB = R;
    l.pruneExpiredPastParticipants = E;
    l.setAdminshipCache = I;
    l.clearAdminshipCache = T;
    l.isCurrentUserGroupAdmin = D;
}, 98);