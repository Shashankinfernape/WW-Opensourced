__d("WAWebIcdcHandlerApi", [
    "Promise",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAdvExpectedTsApi",
    "WAWebApiDeviceList",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendEventBus",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexOfflineICDCHandledCache",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebPromiseQueue",
    "WAWebProtobufsAdv.pb",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = new (o("WAWebPromiseQueue")).PromiseQueue;
    function _(e, t, r) {
        if (r == null) {
            return (m || (m = n("Promise"))).resolve();
        }
        return p.enqueue(function() {
            return h(e, t, r);
        });
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            const l = {
                hostedBizEncMismatch: false,
                senderOrRecipientAccountTypeHosted: false
            };
            if (o("WAWebUserPrefsMeUser").isMeAccount(t) || !t.isUser()) {
                return l;
            }
            const c = r?.deviceListMetadata;
            if (c == null) {
                return l;
            }
            const d = o("WAWebUserPrefsMeUser").isMeAccount(n);
            const m = d ? c.receiverAccountType : c.senderAccountType;
            const p = d ? t : n;
            if (m == null) {
                return l;
            }
            if (m === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
                o("WAWebBizCoexOfflineICDCHandledCache").removeFromOfflineBizHostedSenderICDCProcessedCache(p);
                return l;
            }
            if (m !== o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                return l;
            }
            if (o("WAWebBizCoexOfflineICDCHandledCache").hasOfflineBizHostedSenderICDCProcessedForSender(p)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleHostedIcdcMetadataInline] skip, already processed ",
                    ""
                ])), p?.toLogString());
                return {
                    hostedBizEncMismatch: false,
                    senderOrRecipientAccountTypeHosted: true
                };
            }
            o("WAWebBizCoexOfflineICDCHandledCache").addToOfflineBizHostedSenderICDCProcessedCache(p);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleIcdcMetadataInline: add to coex cache for ",
                ""
            ])), p?.toLogString());
            o("WAWebBizCoexHostedAddVerification").addToCoexHostedVerificationCache(p);
            const _ = yield o("WAWebApiDeviceList").getDeviceRecord(p);
            const f = o("WALongInt").numberOrThrowIfTooLarge(c.senderTimestamp ?? 0);
            const g = _?.timestamp ?? 0;
            if (f >= g) {
                if (_?.advAccountType !== o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
                    yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(p, _?.devices ?? [], !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd, o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE, o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED);
                    if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                        o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([
                            p
                        ], null, null);
                    } else {
                        yield o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([
                            p.toString()
                        ]);
                    }
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "handleHostedIcdcMetadataInline: update ADV type for ",
                        ""
                    ])), p?.toLogString());
                    return {
                        hostedBizEncMismatch: _?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE || _?.deletedChangedToHost !== true,
                        senderOrRecipientAccountTypeHosted: true
                    };
                }
                return {
                    hostedBizEncMismatch: false,
                    senderOrRecipientAccountTypeHosted: true
                };
            }
            return l;
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { deviceListMetadata: r }) {
            if (r == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "get empty device list metadata"
                ]))).tags("handleICDCData");
                return;
            }
            if ((e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID) && r.senderTimestamp != null && r.senderKeyHash == null) {
                const a = o("WALongInt").numberOrThrowIfTooLarge(r.senderTimestamp) + 1;
                const i = yield o("WAWebHandleAdvForUsyncApi").handleADVSyncResult({
                    deviceResponse: {
                        deviceList: [
                            {
                                id: o("WAJids").DEFAULT_DEVICE_ID,
                                keyIndex: 0
                            }
                        ],
                        keyIndex: {
                            ts: o("WATimeUtils").castToUnixTime(a),
                            signedKeyIndexBytes: null
                        }
                    },
                    localDeviceRecord: null,
                    localPrimaryIdentity: null,
                    userWid: e
                });
                if (i?.identityUpdatePromise != null) {
                    yield i.identityUpdatePromise;
                }
                return;
            }
            const l = [];
            const s = o("WAWebUserPrefsMeUser").isMeAccount(e);
            l.push({
                id: e,
                ts: r.senderTimestamp
            });
            if (s && t != null) {
                l.push({
                    id: t,
                    ts: r.recipientTimestamp
                });
            }
            const u = yield o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime();
            const m = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(l.map((e)=>e.id));
            const p = [];
            m.forEach((e, t)=>{
                const n = l[t].ts;
                if (!(e == null || e.deleted || n == null)) {
                    const r = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
                        deviceRecord: e,
                        incomingTs: o("WALongInt").numberOrThrowIfTooLarge(n),
                        lastDeviceJobTs: u
                    });
                    if (r.expectedTs !== e.expectedTs || r.expectedTsLastDeviceJobTs !== e.expectedTsLastDeviceJobTs || r.expectedTsUpdateTs !== e.expectedTsUpdateTs) {
                        p.push(babelHelpers.extends({}, e, r));
                    }
                }
            });
            if (p.length > 0) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleICDCData: updated expected timestamp for ",
                    " records => ",
                    ""
                ])), p.length, p.slice(0, 3).map((e)=>e.id));
                return o("WAWebApiDeviceList").bulkCreateOrReplaceDeviceRecord(p);
            }
        });
        return y.apply(this, arguments);
    }
    l.handleICDCData = _;
    l.handleHostedIcdcMetadataInline = f;
}, 98);