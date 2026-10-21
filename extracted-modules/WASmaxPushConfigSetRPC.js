__d("WASmaxPushConfigSetRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = p(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = m(r, n);
            if (a.success) {
                return {
                    name: "SetResponseSuccess",
                    value: a.value
                };
            }
            const i = u(r, n);
            if (i.success) {
                return {
                    name: "SetResponseBadRequest",
                    value: i.value
                };
            }
            const l = d(r, n);
            if (l.success) {
                return {
                    name: "SetResponseInternalServerError",
                    value: l.value
                };
            }
            const s = c(r, n);
            if (s.success) {
                return {
                    name: "SetResponseConflict",
                    value: s.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Set", {
                Success: a,
                BadRequest: i,
                InternalServerError: l,
                Conflict: s
            }));
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = f(r.value);
        if (!a.success) {
            return a;
        }
        const i = y(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorBadRequestMixin: a.value
            }, i.value));
        }
        return i;
    }
    function c(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = g(r.value);
        if (!a.success) {
            return a;
        }
        const i = y(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorConflictMixin: a.value
            }, i.value));
        }
        return i;
    }
    function d(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = h(r.value);
        if (!a.success) {
            return a;
        }
        const i = y(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorInternalServerErrorMixin: a.value
            }, i.value));
        }
        return i;
    }
    function m(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = C(e, t);
        r.success;
        return r;
    }
    function p({ setSetConfigOrSetClearMixinGroupArgs: t }) {
        const n = _(v(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "urn:xmpp:whatsapp:push"
        })), t);
        return n;
    }
    function _(e, t) {
        if (t.setSetConfig) {
            return E(e, t.setSetConfig);
        }
        if (t.setClear) {
            return R(e, t.setClear);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function f(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "bad-request");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 400);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "conflict");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 409);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function h(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "internal-server-error");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 500);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function y(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function C(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function b() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "set"
        });
        return e;
    }
    function v(e) {
        const t = b();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function S({ clearPlatform: t }) {
        const n = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("clear", {
            platform: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t)
        }));
        return n;
    }
    function R(e, t) {
        const n = S(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L({ configMixinsArgs: t }) {
        const n = o("WASmaxJsx").smax("iq", null, k(o("WASmaxJsx").smax("config", null), t));
        return n;
    }
    function E(e, t) {
        const n = L(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e, t) {
        if (t.fBClient) {
            return x(e, t.fBClient);
        }
        if (t.androidClient) {
            return F(e, t.androidClient);
        }
        if (t.appleClient) {
            return W(e, t.appleClient);
        }
        if (t.wNSClient) {
            return P(e, t.wNSClient);
        }
        if (t.enterpriseClient) {
            return T(e, t.enterpriseClient);
        }
        if (t.webClient) {
            return M(e, t.webClient);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function I({ configId: t }) {
        const n = o("WASmaxJsx").smax("config", {
            platform: "ent",
            id: o("WAWap").CUSTOM_STRING(t)
        });
        return n;
    }
    function T(e, t) {
        const n = I(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D({ configAppid: t, configDeviceid: n, configFbid: r }) {
        const a = o("WASmaxJsx").smax("config", {
            platform: "fb",
            appid: o("WAWap").CUSTOM_STRING(t),
            deviceid: o("WAWap").CUSTOM_STRING(n),
            fbid: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r)
        });
        return a;
    }
    function x(e, t) {
        const n = D(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e) {
        let t;
        const { configVersion: n, configId: r, configPkey: a, configSettings: i } = e;
        const l = o("WASmaxJsx").smax("config", {
            platform: "wns",
            version: o("WASmaxAttrs").OPTIONAL((t = o("WAWap")).CUSTOM_STRING, n),
            id: t.CUSTOM_STRING(r),
            pkey: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
            settings: o("WASmaxAttrs").OPTIONAL(t.INT, i)
        });
        return l;
    }
    function P(e, t) {
        const n = $(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
        let t;
        const { configEndpoint: n, configAuth: r, configP256dh: a, configLg: i, configLc: l } = e;
        const s = o("WASmaxJsx").smax("config", {
            platform: "web",
            endpoint: (t = o("WAWap")).CUSTOM_STRING(n),
            auth: t.CUSTOM_STRING(r),
            p256dh: t.CUSTOM_STRING(a),
            lg: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
            lc: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, l)
        });
        return s;
    }
    function M(e, t) {
        const n = N(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w({ itemJid: t, itemMute: n }) {
        const r = o("WASmaxJsx").smax("item", {
            jid: o("WAWap").GROUP_JID(t),
            mute: o("WAWap").INT(n)
        });
        return r;
    }
    function A(e) {
        const t = e.itemArgs;
        const n = U(o("WASmaxJsx").smax("config", null, o("WASmaxChildren").REPEATED_CHILD(w, t, 0, 1 / 0)), e);
        return n;
    }
    function F(e, t) {
        const n = A(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
        let t;
        const { itemJid: n, itemMute: r, itemNotify: a, itemCall: i } = e;
        const l = o("WASmaxJsx").smax("item", {
            jid: (t = o("WAWap")).JID(n),
            mute: o("WASmaxAttrs").OPTIONAL(t.INT, r),
            notify: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
            call: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i)
        });
        return l;
    }
    function B(e) {
        let t;
        let n;
        const { itemArgs: r, configPlatform: a, hasConfigVersion2: i, configId: l, configVoip: s, configPreview: u, configDefault: c, configGroups: d, configCall: m, configStatusSound: p, configLg: _, configLc: f, configBackgroundLocation: g, configNseVer: h, configNseCall: y, configNseRead: C, configNseRetry: b, configRegPush: v, configPkey: S, configVoipPayloadType: R, configSettings: L, configAppMute: E, configCallMute: k, configAppleWatchId: I, configAppleWatchPkey: T } = e;
        const D = o("WASmaxJsx").smax("config", {
            platform: (t = o("WAWap")).CUSTOM_STRING(a),
            version: (n = o("WASmaxAttrs")).OPTIONAL_LITERAL("2", i),
            id: n.OPTIONAL(t.CUSTOM_STRING, l),
            voip: n.OPTIONAL(t.CUSTOM_STRING, s),
            preview: t.CUSTOM_STRING(u),
            default: t.CUSTOM_STRING(c),
            groups: t.CUSTOM_STRING(d),
            call: t.CUSTOM_STRING(m),
            status_sound: n.OPTIONAL(t.CUSTOM_STRING, p),
            lg: t.CUSTOM_STRING(_),
            lc: t.CUSTOM_STRING(f),
            background_location: n.OPTIONAL(t.CUSTOM_STRING, g),
            nse_ver: n.OPTIONAL(t.CUSTOM_STRING, h),
            nse_call: n.OPTIONAL(t.CUSTOM_STRING, y),
            nse_read: n.OPTIONAL(t.CUSTOM_STRING, C),
            nse_retry: n.OPTIONAL(t.CUSTOM_STRING, b),
            reg_push: n.OPTIONAL(t.CUSTOM_STRING, v),
            pkey: n.OPTIONAL(t.CUSTOM_STRING, S),
            voip_payload_type: t.CUSTOM_STRING(R),
            settings: n.OPTIONAL(t.INT, L),
            app_mute: n.OPTIONAL(t.INT, E),
            call_mute: n.OPTIONAL(t.INT, k),
            apple_watch_id: n.OPTIONAL(t.CUSTOM_STRING, I),
            apple_watch_pkey: n.OPTIONAL(t.CUSTOM_STRING, T)
        }, o("WASmaxChildren").REPEATED_CHILD(O, r, 0, 1 / 0));
        return D;
    }
    function W(e, t) {
        const n = B(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q(e) {
        let t;
        let n;
        const { configPlatform: r, configId: a, configAppid: i, configAppMute: l, configPkey: s, configVoipPayloadType: u, configNumAcc: c, configSettings: d } = e;
        const m = o("WASmaxJsx").smax("config", {
            platform: (t = o("WAWap")).CUSTOM_STRING(r),
            id: t.CUSTOM_STRING(a),
            appid: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, i),
            app_mute: n.OPTIONAL(t.INT, l),
            pkey: n.OPTIONAL(t.CUSTOM_STRING, s),
            voip_payload_type: n.OPTIONAL(t.CUSTOM_STRING, u),
            num_acc: n.OPTIONAL(t.INT, c),
            settings: n.OPTIONAL(t.INT, d)
        });
        return m;
    }
    function U(e, t) {
        const n = q(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.sendSetRPC = e;
    l.parseSetResponseBadRequest = u;
    l.parseSetResponseConflict = c;
    l.parseSetResponseInternalServerError = d;
    l.parseSetResponseSuccess = m;
    l.makeSetRequest = p;
    l.mergeSetSetConfigOrSetClearMixinGroup = _;
    l.parseIQErrorBadRequestMixin = f;
    l.parseIQErrorConflictMixin = g;
    l.parseIQErrorInternalServerErrorMixin = h;
    l.parseIQErrorResponseMixin = y;
    l.parseIQResultResponseMixin = C;
    l.mergeBaseIQSetRequestMixin = v;
    l.mergeSetClearMixin = R;
    l.mergeSetSetConfigMixin = E;
    l.mergeConfigMixins = k;
    l.mergeEnterpriseClientMixin = T;
    l.mergeFBClientMixin = x;
    l.mergeWNSClientMixin = P;
    l.mergeWebClientMixin = M;
    l.makeAndroidClientItem = w;
    l.mergeAndroidClientMixin = F;
    l.makeAppleClientItem = O;
    l.mergeAppleClientMixin = W;
    l.mergeAndroidClientConfigMixin = U;
}, 98);