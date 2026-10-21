__d("WASmaxInMdSetRegRequest", [
    "WAResultOrError",
    "WASmaxInMdAESEncryptionMetadataMixin",
    "WASmaxInMdBaseIQSetRequestMixin",
    "WASmaxInMdEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "biz");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: n.value
            });
        }
        return n;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "client-props");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "encryption-metadata");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInMdAESEncryptionMetadataMixin").parseAESEncryptionMetadataMixin(e);
        n.success;
        return n;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "companion_recovery_server_token");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentString(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function d(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "pair-success");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "jurisdiction");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "device-identity");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "device");
        if (!l.success) {
            return l;
        }
        const d = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "platform");
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").optionalChildWithTag(r.value, "biz", e);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxParseUtils").optionalChildWithTag(r.value, "client-props", s);
        if (!p.success) {
            return p;
        }
        const _ = o("WASmaxParseUtils").optionalChildWithTag(r.value, "encryption-metadata", u);
        if (!_.success) {
            return _;
        }
        const f = o("WASmaxParseUtils").optionalChildWithTag(r.value, "companion_recovery_server_token", c);
        if (!f.success) {
            return f;
        }
        const g = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, t, "from", "s.whatsapp.net");
        if (!g.success) {
            return g;
        }
        const h = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "xmlns", "md");
        if (!h.success) {
            return h;
        }
        const y = o("WASmaxParseUtils").attrString(a.value, "iso");
        if (!y.success) {
            return y;
        }
        const C = o("WASmaxParseUtils").attrString(a.value, "cc");
        if (!C.success) {
            return C;
        }
        const b = o("WASmaxParseUtils").contentBytesRange(i.value, 1, 500);
        if (!b.success) {
            return b;
        }
        const v = o("WASmaxParseJid").attrDeviceJid(l.value, "jid");
        if (!v.success) {
            return v;
        }
        const S = o("WASmaxParseJid").attrDeviceJid(l.value, "lid");
        if (!S.success) {
            return S;
        }
        const R = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, l.value, "beta", o("WASmaxInMdEnums").ENUM_FALSE_TRUE);
        if (!R.success) {
            return R;
        }
        const L = o("WASmaxParseUtils").attrString(d.value, "name");
        if (!L.success) {
            return L;
        }
        const E = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(t);
        if (E.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: g.value,
                xmlns: h.value,
                pairSuccessJurisdictionIso: y.value,
                pairSuccessJurisdictionCc: C.value,
                pairSuccessDeviceIdentityElementValue: b.value,
                pairSuccessDeviceJid: v.value,
                pairSuccessDeviceLid: S.value,
                pairSuccessDeviceBeta: R.value,
                pairSuccessPlatformName: L.value
            }, E.value, {
                pairSuccessBiz: m.value,
                pairSuccessClientProps: p.value,
                pairSuccessEncryptionMetadata: _.value,
                pairSuccessCompanionRecoveryServerToken: f.value
            }));
        }
        return E;
    }
    l.parseSetRegRequestPairSuccessBiz = e;
    l.parseSetRegRequestPairSuccessClientProps = s;
    l.parseSetRegRequestPairSuccessEncryptionMetadata = u;
    l.parseSetRegRequestPairSuccessCompanionRecoveryServerToken = c;
    l.parseSetRegRequest = d;
}, 98);