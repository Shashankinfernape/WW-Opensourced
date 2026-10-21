__d("WAWebFetchResendMissingKeyJob", [
    "Promise",
    "WALogger",
    "WAParsableXmlNode",
    "WAPromiseQueue",
    "WASmaxPreKeysFetchMissingPreKeysRPC",
    "WAWap",
    "WAWebApiDeviceList",
    "WAWebBackendErrors",
    "WAWebDeviceListPk",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPQGatingUtils",
    "WAWebProcessKeyBundle",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:475"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = new (o("WAPromiseQueue")).PromiseQueueMap;
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            const n = Array.from(new Set(t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e).toString()))).map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e));
            const r = n.map((e)=>e.toString()).join();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys ",
                ""
            ])), r);
            const a = C.waitIfPending(r);
            if (a) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchResendMissingKeys deduped ",
                    ""
                ])), r);
                return a;
            }
            return C.enqueueHandlers(r, S(n));
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys: start fetching key for ",
                " wids"
            ])), e.length);
            const t = yield L(e);
            const r = yield k(t);
            const a = new Map;
            t.forEach((e, t)=>{
                const regId = r[t];
                const i = o("WAWebWidFactory").asUserWidOrThrow(e).toString();
                const l = a.get(i) || [];
                if (regId != null) {
                    l.push({
                        id: e.device ?? 0,
                        regId
                    });
                }
                a.set(i, l);
            });
            const userArgs = [];
            a.forEach((e, t)=>{
                const userJid = o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").createUserWidOrThrow(t));
                const r = {
                    userJid,
                    hasUserReasonIdentity: false,
                    deviceArgs: e.map((e)=>({
                            deviceId: e.id,
                            registrationElementValue: o("WAWap").BIG_ENDIAN_CONTENT(e.regId)
                        }))
                };
                userArgs.push(r);
            });
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys: start sending fetching iq for ",
                " wids"
            ])), e.length);
            const l = yield o("WASmaxPreKeysFetchMissingPreKeysRPC").sendFetchMissingPreKeysRPC({
                userArgs,
                hasKeyFetchPqsupportTrue: o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
            });
            e: {
                const s = l;
                if ((typeof s === "object" && s !== null || typeof s === "function") && s.name === "FetchMissingPreKeysResponseSuccess" && "value" in s) {
                    const _ = s.value;
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchResendMissingKeys: start processing keys for ",
                        " wids"
                    ])), e.length);
                    return I(_);
                    break e;
                }
                if ((typeof s === "object" && s !== null || typeof s === "function") && s.name === "FetchMissingPreKeysResponseServerError" && "value" in s) {
                    const f = s.value;
                    const g = f.errorServerErrors.value;
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchResendMissingKeys failed: ",
                        ":",
                        ""
                    ])), g.code, g.text);
                    return (y || (y = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(g.code), g.text));
                    break e;
                }
                if ((typeof s === "object" && s !== null || typeof s === "function") && s.name === "FetchMissingPreKeysResponseRequestError" && "value" in s) {
                    const h = s.value;
                    const C = h.errorRequestErrorsFetch.value;
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchResendMissingKeys failed: ",
                        ":",
                        ""
                    ])), C.code, C.text);
                    return (y || (y = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(C.code), C.text));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${s}`);
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys: find ",
                " users"
            ])), e.length);
            const t = yield o("WAWebApiDeviceList").getDeviceIds(e);
            const n = new Map;
            t.forEach((t, r)=>{
                if (t) {
                    const a = t.devices;
                    a.forEach((e)=>{
                        if (e.id !== 0) {
                            const r = o("WAWebWidFactory").createDeviceWidFromDeviceListPk(t.id, e.id, e.isHosted);
                            n.set(r.toString(), r);
                        }
                    });
                }
                const i = o("WAWebWidFactory").asUserWidOrThrow(e[r]);
                n.set(i.toString(), i);
            });
            return Array.from(n.values());
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        const t = e.map((e)=>{
            if (o("WAWebUserPrefsMeUser").isMeDevice(e)) {
                return o("WAWebSignalProtocolStore").getSignalProtocolStore().getLocalRegistrationId();
            }
            return o("WAWebSignalProtocolStore").getSignalProtocolStore().loadSession(String(o("WAWebSignalCommonUtils").createSignalAddress(e))).then((e)=>{
                const n = e instanceof ArrayBuffer ? undefined : e;
                const r = n?.sessions;
                if (r) {
                    for(const o in r){
                        if (r[o].indexInfo.closed === -1) {
                            return r[o].registrationId;
                        }
                    }
                }
                return n?.remote?.regId;
            });
        });
        return (y || (y = n("Promise"))).all(t);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            let r = 0;
            const a = [];
            e.listUser.forEach((e)=>{
                const e_userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup = e.userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup;
                switch(e_userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup.name){
                    case "FetchMissingPreKeysUserSuccess":
                        {
                            const l = e_userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup.value;
                            const { device, jid } = l;
                            const c = o("WAWebWidFactory").createWid(jid);
                            device.forEach((e)=>{
                                const e_deviceSuccessOrFetchMissingPreKeysErrorMixinGroup = e.deviceSuccessOrFetchMissingPreKeysErrorMixinGroup;
                                if (e_deviceSuccessOrFetchMissingPreKeysErrorMixinGroup.name === "FetchMissingPreKeysDeviceError") {
                                    r++;
                                    if (a.length < 3) {
                                        a.push(`${jid}:${e.id}: ${e_deviceSuccessOrFetchMissingPreKeysErrorMixinGroup.value.errorCode}:${e_deviceSuccessOrFetchMissingPreKeysErrorMixinGroup.value.errorText}`);
                                    }
                                    return;
                                }
                                const d_value = e_deviceSuccessOrFetchMissingPreKeysErrorMixinGroup.value;
                                const { preKeyMixin, pQKeyMixin } = d_value;
                                t.push({
                                    aeaEvidence: (n("cr:475") == null ? undefined : n("cr:475").parseAeaEvidenceFromPrekey(d_value.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup)) ?? null,
                                    identity: d_value.elementValue,
                                    deviceIdentity: d_value.deviceIdentityMixin?.deviceIdentityElementValue ?? null,
                                    skey: {
                                        id: o("WAParsableXmlNode").convertBytesToUint(d_value.skeyIdKeyIDMixin.elementValue, 3),
                                        pubkey: d_value.skeyValueKeyDataMixin.elementValue,
                                        signature: d_value.skeySignatureElementValue
                                    },
                                    key: preKeyMixin && {
                                        id: o("WAParsableXmlNode").convertBytesToUint(preKeyMixin.keyIdKeyIDMixin.elementValue, 3),
                                        pubkey: preKeyMixin.keyValueKeyDataMixin.elementValue
                                    },
                                    kyberKey: pQKeyMixin ? {
                                        id: o("WAParsableXmlNode").convertBytesToUint(pQKeyMixin.idKeyIDMixin.elementValue, 3),
                                        publicKey: pQKeyMixin.valuePQKeyDataMixin.elementValue,
                                        signature: pQKeyMixin.signatureElementValue
                                    } : null,
                                    regId: o("WAParsableXmlNode").convertBytesToUint(d_value.registrationElementValue, 4),
                                    wid: o("WAWebWidFactory").createDeviceWidFromDeviceListPk(o("WAWebDeviceListPk").createDeviceListPK(c), e.id, false)
                                });
                            });
                            return;
                        }
                    case "FetchMissingPreKeysUserErrorFallback":
                    case "FetchMissingPreKeysUserError":
                        {
                            const d = e_userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup.value;
                            r++;
                            if (a.length < 3) {
                                a.push(`${e.jid}: ${d.errorCode}:${d.errorText}`);
                            }
                            return;
                        }
                }
            });
            if (r > 0) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchResendMissingKeys failed for ",
                    " users/devices => ",
                    ""
                ])), r, a).sendLogs("fetchResendMissingKeys-user-error");
            }
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys: parsed ",
                " keys"
            ])), t.length);
            if (t.length > 0) {
                const i = yield o("WAWebProcessKeyBundle").processKeyBundles(t);
                const l = i.processedPrekeyCount;
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchResendMissingKeys: ",
                    "/",
                    " E2E sessions"
                ])), l, t.length);
            }
        });
        return T.apply(this, arguments);
    }
    l.fetchResendMissingKeys = b;
}, 98);