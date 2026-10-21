__d("WAWebFetchPrekeysJob", [
    "WAJids",
    "WAParsableXmlNode",
    "WASmaxPreKeysFetchKeyBundlesRPC",
    "WAWebBackendErrors",
    "WAWebPQGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:475",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = false) {
            const i = yield o("WASmaxPreKeysFetchKeyBundlesRPC").sendFetchKeyBundlesRPC({
                userArgs: t.map((e)=>({
                        userJid: o("WAWebWidToJid").widToDeviceJid(e),
                        userReason: a ? "identity" : void 0
                    })),
                hasKeyPqsupportTrue: o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
            });
            if (i.name === "FetchKeyBundlesResponseServerError") {
                const l = i.value.errorServerErrors.value;
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(l.code), `fetchPrekeys: server error: ${l.code} ${l.text}`);
            } else if (i.name === "FetchKeyBundlesResponseRequestError") {
                const s = i.value.errorRequestErrorsFetch.value;
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(s.code), `fetchPrekeys: request error: ${s.code} ${s.text}`);
            }
            const u = [];
            const c = [];
            const d = [];
            for (const m of i.value.listUser){
                const p = m.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
                e: {
                    const _ = p;
                    if ((typeof _ === "object" && _ !== null || typeof _ === "function") && _.name === "FetchKeyBundlesUserSuccess" && "value" in _) {
                        const y = _.value;
                        const { deviceIdentityMixin: C, elementValue: b, nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup: v, pQKeyMixin: S, preKeyMixin: R, registrationElementValue: L, skeyIdKeyIDMixin: E, skeySignatureElementValue: k, skeyValueKeyDataMixin: I } = y;
                        const T = {
                            aeaEvidence: (n("cr:475") == null ? void 0 : n("cr:475").parseAeaEvidenceFromPrekey(v)) ?? null,
                            deviceIdentity: C?.deviceIdentityElementValue ?? null,
                            identity: b,
                            skey: {
                                id: o("WAParsableXmlNode").convertBytesToUint(E.elementValue, 3),
                                pubkey: I.elementValue,
                                signature: k
                            },
                            key: R ? {
                                id: o("WAParsableXmlNode").convertBytesToUint(R.keyIdKeyIDMixin.elementValue, 3),
                                pubkey: R.keyValueKeyDataMixin?.elementValue
                            } : null,
                            kyberKey: S ? {
                                id: o("WAParsableXmlNode").convertBytesToUint(S.idKeyIDMixin.elementValue, 3),
                                publicKey: S.valuePQKeyDataMixin.elementValue,
                                signature: S.signatureElementValue
                            } : null,
                            regId: o("WAParsableXmlNode").convertBytesToUint(L, 4),
                            wid: o("WAWebWidFactory").createWid(m.jid)
                        };
                        if (T.wid.device != null && T.wid.device !== o("WAJids").DEFAULT_DEVICE_ID) {
                            c.push(T);
                        } else {
                            u.push(T);
                        }
                        break e;
                    }
                    if ((typeof _ === "object" && _ !== null || typeof _ === "function") && _.name === "FetchKeyBundlesUserErrorFallback" && "value" in _) {
                        const D = _.value;
                        const { errorCode: x, errorText: $ } = D;
                        d.push(r("err")(`fetchPrekeys: list item error: ${x} ${$}`));
                        break e;
                    }
                    if ((typeof _ === "object" && _ !== null || typeof _ === "function") && _.name === "FetchKeyBundlesUserError" && "value" in _) {
                        const P = _.value;
                        const { errorCode: N, errorText: M } = P;
                        d.push(r("err")(`fetchPrekeys: list item error: ${N} ${M}`));
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${_}`);
                }
            }
            if (u.length === 0 && c.length === 0 && d.length === 0) {
                throw new e("fetchPrekeys: empty key info");
            }
            return {
                prekeyBundles: [].concat(u, c),
                errors: d
            };
        });
        return u.apply(this, arguments);
    }
    l.EmptyKeyInfoError = e;
    l.fetchPrekeys = s;
}, 98);