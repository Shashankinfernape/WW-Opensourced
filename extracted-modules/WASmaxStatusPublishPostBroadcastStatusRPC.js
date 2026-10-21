__d("WASmaxStatusPublishPostBroadcastStatusRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInStatusPublishStatusAckMixin",
    "WASmaxInStatusPublishStatusNegativeAckMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
    "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
    "WASmaxOutStatusPublishStatusContentTypeTextMixin",
    "WASmaxOutStatusPublishStatusRevokeMixin",
    "WASmaxParseJid",
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
            const n = m(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const Negative = u(r, n);
            if (Negative.success) {
                return {
                    name: "PostBroadcastStatusResponseNegative",
                    value: Negative.value
                };
            }
            const i = c(r, n);
            if (i.success) {
                return {
                    name: "PostBroadcastStatusResponseSuccess",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PostBroadcastStatus", {
                Negative,
                Success: i
            }));
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrDeviceJid, e, "participant");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInStatusPublishStatusNegativeAckMixin").parseStatusNegativeAckMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = U(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            participant: r.value
        }, a.value, {
            deviceListStaleMixin: i.success ? i.value : null
        }));
    }
    function c(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrDeviceJid, e, "participant");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = U(e);
        const l = V(e);
        const s = d(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            participant: r.value
        }, a.value, {
            deviceListStaleMixin: i.success ? i.value : null,
            fanoutCountMixin: l.success ? l.value : null,
            statusAckRcatMixin: s.success ? s.value : null
        }));
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytes(n.value);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                rcatElementValue: r.value
            });
        }
        return r;
    }
    function m({ statusId, statusT, deviceIdentityMixinArgs, statusEncSettingMixinArgs, statusEncHashMetaAttributeMixinArgs, statusContentTypeMediaFanoutMixinArgs, statusEncMentionedUsersMixinArgs, hasStatusEncMentionMessage, hasStatusEncSessionScope, statusEncContentTypeMixinArgs, statusSenderContentBindingMixinArgs, anonPaddingMixinArgs, statusEncMessageAssociationTypeMixinArgs, hasStatusSgCapture, statusBroadcastPublishTypeMixinsArgs, statusEncContentTypeMixinsArgs }) {
        let t;
        const R = S(p((t = o("WASmaxMixins")).optionalMerge(q, t.optionalMerge($, t.optionalMerge(G, t.optionalMerge(B, t.optionalMerge(v, t.optionalMerge(N, t.optionalMerge(k, t.optionalMerge(D, t.optionalMerge(C, t.optionalMerge(L, t.optionalMerge(w, t.optionalMerge(j, o("WASmaxJsx").smax("status", {
            id: o("WAWap").STANZA_ID(statusId),
            to: o("WAWap").STATUS_BROADCAST,
            t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, statusT)
        }), deviceIdentityMixinArgs), statusEncSettingMixinArgs), statusEncHashMetaAttributeMixinArgs), statusContentTypeMediaFanoutMixinArgs), statusEncMentionedUsersMixinArgs), hasStatusEncMentionMessage), hasStatusEncSessionScope), statusEncContentTypeMixinArgs), statusSenderContentBindingMixinArgs), anonPaddingMixinArgs), statusEncMessageAssociationTypeMixinArgs), hasStatusSgCapture), statusBroadcastPublishTypeMixinsArgs), statusEncContentTypeMixinsArgs);
        return R;
    }
    function p(e, t) {
        if (t.statusBroadcastRegular) {
            return g(e, t.statusBroadcastRegular);
        }
        if (t.statusBroadcastDirected) {
            return ee(e, t.statusBroadcastDirected);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function _({ encMediaTypeMixinArgs, hasStatusEncHideDecryptFail, encRetryMixinArgs, encVersionArgs, encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroupArgs }) {
        const l = K(tt(o("WASmaxMixins").optionalMerge(Pe, o("WASmaxMixins").optionalMerge(ut, o("WASmaxMixins").optionalMerge(ht, o("WASmaxJsx").smax("enc", null), encMediaTypeMixinArgs), hasStatusEncHideDecryptFail), encRetryMixinArgs), encVersionArgs), encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroupArgs);
        return l;
    }
    function f({ encArgs, statusParticipantHashMixinArgs, statusEncFanoutMixinArgs, statusReportingMixinArgs, statusSenderKeyBucketingModeMixinArgs, statusEditOrRevokeMixinGroupArgs }) {
        let t;
        const u = (t = o("WASmaxMixins")).optionalMerge(ae, t.optionalMerge(_e, t.optionalMerge(me, t.optionalMerge(qe, t.optionalMerge(F, o("WASmaxJsx").smax("status", null, o("WASmaxChildren").REPEATED_CHILD(_, encArgs, 1, 5)), statusParticipantHashMixinArgs), statusEncFanoutMixinArgs), statusReportingMixinArgs), statusSenderKeyBucketingModeMixinArgs), statusEditOrRevokeMixinGroupArgs);
        return u;
    }
    function g(e, t) {
        const n = f(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h({ encMediatype, hasEncStickerTypeAvatar }) {
        const r = o("WASmaxJsx").smax("to", null, o("WASmaxJsx").smax("enc", {
            mediatype: o("WAWap").CUSTOM_STRING(encMediatype),
            sticker_type: o("WASmaxAttrs").OPTIONAL_LITERAL("avatar", hasEncStickerTypeAvatar)
        }));
        return r;
    }
    function y({ toArgs }) {
        const n = o("WASmaxOutStatusPublishStatusContentTypeMediaMixin").mergeStatusContentTypeMediaMixin(o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").HOMOGENEOUS_CHILD(h, toArgs))));
        return n;
    }
    function C(e, t) {
        const n = y(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b({ metaContentType }) {
        const n = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            content_type: o("WAWap").CUSTOM_STRING(metaContentType)
        }));
        return n;
    }
    function v(e, t) {
        const n = b(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S(e, t) {
        if (t.isStatusContentTypeText) {
            return o("WASmaxOutStatusPublishStatusContentTypeTextMixin").mergeStatusContentTypeTextMixin(e);
        }
        if (t.isStatusContentTypeMedia) {
            return o("WASmaxOutStatusPublishStatusContentTypeMediaMixin").mergeStatusContentTypeMediaMixin(e);
        }
        if (t.isStatusContentTypeReaction) {
            return o("WASmaxOutStatusPublishStatusContentTypeReactionMixin").mergeStatusContentTypeReactionMixin(e);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function R({ metaStatusH, metaStatusOts }) {
        const r = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            status_h: o("WAWap").CUSTOM_STRING(metaStatusH),
            status_ots: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, metaStatusOts)
        }));
        return r;
    }
    function L(e, t) {
        const n = R(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E() {
        const e = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            is_status_mention: "true"
        }));
        return e;
    }
    function k(e) {
        const t = E();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function I({ toJid }) {
        const n = o("WASmaxJsx").smax("to", {
            jid: o("WAWap").JID(toJid)
        });
        return n;
    }
    function T({ toArgs }) {
        const n = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", null, o("WASmaxJsx").smax("mentioned_users", null, o("WASmaxChildren").REPEATED_CHILD(I, toArgs, 1, 5))));
        return n;
    }
    function D(e, t) {
        const n = T(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x({ metaMessageAssociationType }) {
        const n = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            message_association_type: o("WAWap").CUSTOM_STRING(metaMessageAssociationType)
        }));
        return n;
    }
    function $(e, t) {
        const n = x(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P() {
        const e = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            session_scope: "status"
        }));
        return e;
    }
    function N(e) {
        const t = P();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function M({ metaStatusSetting }) {
        const n = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            status_setting: o("WAWap").CUSTOM_STRING(metaStatusSetting)
        }));
        return n;
    }
    function w(e, t) {
        const n = M(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A({ statusPhash }) {
        const n = o("WASmaxJsx").smax("status", {
            phash: o("WAWap").CUSTOM_STRING(statusPhash)
        });
        return n;
    }
    function F(e, t) {
        const n = A(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O({ senderContentBindingElementValue }) {
        const n = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("sender_content_binding", null, senderContentBindingElementValue));
        return n;
    }
    function B(e, t) {
        const n = O(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W() {
        const e = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("meta", {
            sg_capture: "1"
        }));
        return e;
    }
    function q(e) {
        const t = W();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function U(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "phash");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                phash: n.value
            });
        }
        return n;
    }
    function V(e) {
        const t = o("WASmaxParseUtils").attrInt(e, "count");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                count: t.value
            });
        }
        return t;
    }
    function H({ taPadElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("ta_pad", null, taPadElementValue));
        return n;
    }
    function G(e, t) {
        const n = H(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function z({ deviceIdentityElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("device-identity", null, deviceIdentityElementValue));
        return n;
    }
    function j(e, t) {
        const n = z(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function K(e, t) {
        if (t.encTypeSenderKey) {
            return J(e, t.encTypeSenderKey);
        }
        if (t.encTypeOneTimeSenderKey) {
            return X(e, t.encTypeOneTimeSenderKey);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function Q({ encElementValue, encSenderKeyBucketMixinArgs }) {
        const r = o("WASmaxMixins").optionalMerge(be, o("WASmaxJsx").smax("enc", {
            type: "otsk"
        }, encElementValue), encSenderKeyBucketMixinArgs);
        return r;
    }
    function X(e, t) {
        const n = Q(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Y(e) {
        const e_encSenderKeyBucketMixinArgs = e.encSenderKeyBucketMixinArgs;
        const n = mt(o("WASmaxMixins").optionalMerge(be, o("WASmaxJsx").smax("enc", {
            type: "skmsg"
        }), e_encSenderKeyBucketMixinArgs), e);
        return n;
    }
    function J(e, t) {
        const n = Y(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Z({ statusReportingMixinArgs, statusDeprecatedParticipantHashMixinArgs, statusSenderKeyBucketingModeMixinArgs, statusDirectedRetryParticipantMixinArgs, hasStatusNoExtraFanout, tCTokenMixinArgs, statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs, statusEditOrRevokeMixinGroupArgs }) {
        let t;
        const d = (t = o("WASmaxMixins")).optionalMerge(ae, ie(t.optionalMerge(ge, t.optionalMerge(ce, t.optionalMerge(oe, t.optionalMerge(_e, t.optionalMerge(ne, t.optionalMerge(me, o("WASmaxJsx").smax("status", null), statusReportingMixinArgs), statusDeprecatedParticipantHashMixinArgs), statusSenderKeyBucketingModeMixinArgs), statusDirectedRetryParticipantMixinArgs), hasStatusNoExtraFanout), tCTokenMixinArgs), statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs), statusEditOrRevokeMixinGroupArgs);
        return d;
    }
    function ee(e, t) {
        const n = Z(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function te({ statusPhash }) {
        const n = o("WASmaxJsx").smax("status", {
            phash: o("WAWap").CUSTOM_STRING(statusPhash)
        });
        return n;
    }
    function ne(e, t) {
        const n = te(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function re({ statusParticipant }) {
        const n = o("WASmaxJsx").smax("status", {
            participant: o("WAWap").JID(statusParticipant)
        });
        return n;
    }
    function oe(e, t) {
        const n = re(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ae(e, t) {
        if (t.isStatusEdit) {
            return Te(e);
        }
        if (t.isStatusRevoke) {
            return o("WASmaxOutStatusPublishStatusRevokeMixin").mergeStatusRevokeMixin(e);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function ie(e, t) {
        if (t.statusEncFanoutSenderKeyEmpty) {
            return xe(e, t.statusEncFanoutSenderKeyEmpty);
        }
        if (t.statusEncRetry) {
            return se(e, t.statusEncRetry);
        }
        if (t.statusEncFanout) {
            return qe(e, t.statusEncFanout);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function le({ encTypeIndividualMixinArgs, hasStatusEncHideDecryptFail, encRetryMixinArgs, encVersionArgs }) {
        const i = o("WASmaxJsx").smax("status", null, tt(o("WASmaxMixins").optionalMerge(Pe, o("WASmaxMixins").optionalMerge(ut, et(o("WASmaxJsx").smax("enc", null), encTypeIndividualMixinArgs), hasStatusEncHideDecryptFail), encRetryMixinArgs), encVersionArgs));
        return i;
    }
    function se(e, t) {
        const n = le(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ue() {
        const e = o("WASmaxJsx").smax("status", {
            device_fanout: "false"
        });
        return e;
    }
    function ce(e) {
        const t = ue();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function de({ serverReportingTokenMixinArgs, clientReportingTokenMixinArgs }) {
        const r = o("WASmaxMixins").optionalMerge(ye, o("WASmaxMixins").optionalMerge(ke, o("WASmaxJsx").smax("status", null), serverReportingTokenMixinArgs), clientReportingTokenMixinArgs);
        return r;
    }
    function me(e, t) {
        const n = de(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function pe({ statusBucketing }) {
        const n = o("WASmaxJsx").smax("status", {
            bucketing: o("WAWap").CUSTOM_STRING(statusBucketing)
        });
        return n;
    }
    function _e(e, t) {
        const n = pe(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function fe({ tctokenT, privacyTokenContentsMixinArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, Se(o("WASmaxJsx").smax("tctoken", {
            t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, tctokenT)
        }), privacyTokenContentsMixinArgs));
        return r;
    }
    function ge(e, t) {
        const n = fe(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function he({ reportingTokenElementMixinArgs }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxMixins").optionalMerge(Le, o("WASmaxJsx").smax("reporting", null), reportingTokenElementMixinArgs));
        return n;
    }
    function ye(e, t) {
        const n = he(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ce({ encBucket }) {
        const n = o("WASmaxJsx").smax("enc", {
            bucket: o("WAWap").CUSTOM_STRING(encBucket)
        });
        return n;
    }
    function be(e, t) {
        const n = Ce(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ve({ anyElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, anyElementValue);
        return n;
    }
    function Se(e, t) {
        const n = ve(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Re({ reportingTokenV, reportingTokenElementValue }) {
        const r = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("reporting_token", {
            v: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, reportingTokenV)
        }, reportingTokenElementValue));
        return r;
    }
    function Le(e, t) {
        const n = Re(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ee(e) {
        const t = o("WASmaxJsx").smax("smax$any", null, Oe(o("WASmaxJsx").smax("reporting", null), e));
        return t;
    }
    function ke(e, t) {
        const n = Ee(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ie() {
        const e = o("WASmaxJsx").smax("status", {
            edit: "1"
        });
        return e;
    }
    function Te(e) {
        const t = Ie();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function De(e) {
        const { encTypeSenderKeyEmptyMixinArgs, encMediaTypeMixinArgs, hasStatusEncHideDecryptFail, encRetryMixinArgs, encVersionArgs } = e;
        const l = qe(o("WASmaxJsx").smax("status", null, tt(o("WASmaxMixins").optionalMerge(Pe, o("WASmaxMixins").optionalMerge(ut, o("WASmaxMixins").optionalMerge(ht, Me(o("WASmaxJsx").smax("enc", null), encTypeSenderKeyEmptyMixinArgs), encMediaTypeMixinArgs), hasStatusEncHideDecryptFail), encRetryMixinArgs), encVersionArgs)), e);
        return l;
    }
    function xe(e, t) {
        const n = De(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $e({ encCount }) {
        const n = o("WASmaxJsx").smax("enc", {
            count: o("WAWap").INT(encCount)
        });
        return n;
    }
    function Pe(e, t) {
        const n = $e(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ne({ encElementValue }) {
        const n = Ae(o("WASmaxJsx").smax("enc", null, encElementValue));
        return n;
    }
    function Me(e, t) {
        const n = Ne(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function we() {
        const e = o("WASmaxJsx").smax("enc", {
            type: "skmsg"
        });
        return e;
    }
    function Ae(e) {
        const t = we();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Fe({ reportingTagElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("reporting_tag", null, reportingTagElementValue));
        return n;
    }
    function Oe(e, t) {
        const n = Fe(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Be({ statusToContentBindingMixinArgs, statusTCTokenMixinArgs, senderKeyBucketParticipantMixinArgs, statusToDeviceOrUserMixinGroupArgs }) {
        const i = ze(o("WASmaxMixins").optionalMerge(Xe, o("WASmaxMixins").optionalMerge(Ve, o("WASmaxMixins").optionalMerge(Ge, o("WASmaxJsx").smax("to", null), statusToContentBindingMixinArgs), statusTCTokenMixinArgs), senderKeyBucketParticipantMixinArgs), statusToDeviceOrUserMixinGroupArgs);
        return i;
    }
    function We({ toArgs }) {
        const n = o("WASmaxJsx").smax("status", null, o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").REPEATED_CHILD(Be, toArgs, 1, 9990998)));
        return n;
    }
    function qe(e, t) {
        const n = We(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ue({ tctokenElementValue }) {
        const n = o("WASmaxJsx").smax("to", null, o("WASmaxJsx").smax("tctoken", null, tctokenElementValue));
        return n;
    }
    function Ve(e, t) {
        const n = Ue(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function He({ contentBindingElementValue }) {
        const n = o("WASmaxJsx").smax("to", null, o("WASmaxJsx").smax("content_binding", null, contentBindingElementValue));
        return n;
    }
    function Ge(e, t) {
        const n = He(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ze(e, t) {
        if (t.statusToDevice) {
            return Je(e, t.statusToDevice);
        }
        if (t.statusToUser) {
            return Ke(e, t.statusToUser);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function je({ toJid }) {
        const n = o("WASmaxJsx").smax("to", {
            jid: o("WAWap").JID(toJid)
        });
        return n;
    }
    function Ke(e, t) {
        const n = je(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Qe({ toBucket }) {
        const n = o("WASmaxJsx").smax("to", {
            bucket: o("WAWap").CUSTOM_STRING(toBucket)
        });
        return n;
    }
    function Xe(e, t) {
        const n = Qe(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ye({ toJid, encTypeIndividualMixinArgs, hasStatusEncHideDecryptFail, encVersionArgs }) {
        const i = o("WASmaxJsx").smax("to", {
            jid: o("WAWap").JID(toJid)
        }, tt(o("WASmaxMixins").optionalMerge(ut, et(o("WASmaxJsx").smax("enc", null), encTypeIndividualMixinArgs), hasStatusEncHideDecryptFail), encVersionArgs));
        return i;
    }
    function Je(e, t) {
        const n = Ye(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ze(e) {
        const { encType, encStateOrSessionTypeMixinGroupArgs, encMediaTypeOrListMixinGroupArgs } = e;
        const a = o("WASmaxMixins").optionalMerge(ct, o("WASmaxMixins").optionalMerge(pt, mt(o("WASmaxJsx").smax("enc", {
            type: o("WAWap").CUSTOM_STRING(encType)
        }), e), encStateOrSessionTypeMixinGroupArgs), encMediaTypeOrListMixinGroupArgs);
        return a;
    }
    function et(e, t) {
        const n = Ze(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function tt(e, t) {
        if (t.isEncVersion2) {
            return rt(e);
        }
        if (t.isEncVersion3) {
            return at(e);
        }
        if (t.encVersionFutureproof) {
            return lt(e, t.encVersionFutureproof);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function nt() {
        const e = o("WASmaxJsx").smax("enc", {
            v: "2"
        });
        return e;
    }
    function rt(e) {
        const t = nt();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ot() {
        const e = o("WASmaxJsx").smax("enc", {
            v: "3"
        });
        return e;
    }
    function at(e) {
        const t = ot();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function it({ encV }) {
        const n = o("WASmaxJsx").smax("enc", {
            v: o("WAWap").INT(encV)
        });
        return n;
    }
    function lt(e, t) {
        const n = it(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function st() {
        const e = o("WASmaxJsx").smax("enc", {
            "decrypt-fail": "hide"
        });
        return e;
    }
    function ut(e) {
        const t = st();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ct(e, t) {
        if (t.encMediaType) {
            return ht(e, t.encMediaType);
        }
        if (t.isEncList) {
            return ft(e);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function dt({ encElementValue }) {
        const n = o("WASmaxJsx").smax("enc", null, encElementValue);
        return n;
    }
    function mt(e, t) {
        const n = dt(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function pt(e, t) {
        if (t.encState) {
            return vt(e, t.encState);
        }
        if (t.isEncSessionType) {
            return Ct(e);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function _t() {
        const e = o("WASmaxJsx").smax("enc", {
            mediatype: "list"
        });
        return e;
    }
    function ft(e) {
        const t = _t();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function gt(e) {
        const { encNativeFlowName, hasAvatarStickerType } = e;
        const r = o("WASmaxMixins").optionalMerge(Et, Rt(o("WASmaxJsx").smax("enc", {
            native_flow_name: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, encNativeFlowName)
        }), e), hasAvatarStickerType);
        return r;
    }
    function ht(e, t) {
        const n = gt(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function yt() {
        const e = o("WASmaxJsx").smax("enc", {
            session_type: "pq"
        });
        return e;
    }
    function Ct(e) {
        const t = yt();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function bt({ encState }) {
        const n = o("WASmaxJsx").smax("enc", {
            state: o("WAWap").CUSTOM_STRING(encState)
        });
        return n;
    }
    function vt(e, t) {
        const n = bt(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function St({ encMediatype }) {
        const n = o("WASmaxJsx").smax("enc", {
            mediatype: o("WAWap").CUSTOM_STRING(encMediatype)
        });
        return n;
    }
    function Rt(e, t) {
        const n = St(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Lt() {
        const e = o("WASmaxJsx").smax("enc", {
            sticker_type: "avatar"
        });
        return e;
    }
    function Et(e) {
        const t = Lt();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendPostBroadcastStatusRPC = e;
    l.parsePostBroadcastStatusResponseNegative = u;
    l.parsePostBroadcastStatusResponseSuccess = c;
    l.parseStatusAckRcatMixin = d;
    l.makePostBroadcastStatusRequest = m;
    l.mergeStatusBroadcastPublishTypeMixins = p;
    l.makeStatusBroadcastRegularEnc = _;
    l.mergeStatusBroadcastRegularMixin = g;
    l.makeStatusContentTypeMediaFanoutParticipantsTo = h;
    l.mergeStatusContentTypeMediaFanoutMixin = C;
    l.mergeStatusEncContentTypeMixin = v;
    l.mergeStatusEncContentTypeMixins = S;
    l.mergeStatusEncHashMetaAttributeMixin = L;
    l.mergeStatusEncMentionMessageMixin = k;
    l.makeStatusEncMentionedUsersMetaMentionedUsersTo = I;
    l.mergeStatusEncMentionedUsersMixin = D;
    l.mergeStatusEncMessageAssociationTypeMixin = $;
    l.mergeStatusEncSessionScopeMixin = N;
    l.mergeStatusEncSettingMixin = w;
    l.mergeStatusParticipantHashMixin = F;
    l.mergeStatusSenderContentBindingMixin = B;
    l.mergeStatusSgCaptureMixin = q;
    l.parseDeviceListStaleMixin = U;
    l.parseFanoutCountMixin = V;
    l.mergeAnonPaddingMixin = G;
    l.mergeDeviceIdentityMixin = j;
    l.mergeEncTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroup = K;
    l.mergeEncTypeOneTimeSenderKeyMixin = X;
    l.mergeEncTypeSenderKeyMixin = J;
    l.mergeStatusBroadcastDirectedMixin = ee;
    l.mergeStatusDeprecatedParticipantHashMixin = ne;
    l.mergeStatusDirectedRetryParticipantMixin = oe;
    l.mergeStatusEditOrRevokeMixinGroup = ae;
    l.mergeStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup = ie;
    l.mergeStatusEncRetryMixin = se;
    l.mergeStatusNoExtraFanoutMixin = ce;
    l.mergeStatusReportingMixin = me;
    l.mergeStatusSenderKeyBucketingModeMixin = _e;
    l.mergeTCTokenMixin = ge;
    l.mergeClientReportingTokenMixin = ye;
    l.mergeEncSenderKeyBucketMixin = be;
    l.mergePrivacyTokenContentsMixin = Se;
    l.mergeReportingTokenElementMixin = Le;
    l.mergeServerReportingTokenMixin = ke;
    l.mergeStatusEditMixin = Te;
    l.mergeStatusEncFanoutSenderKeyEmptyMixin = xe;
    l.mergeEncRetryMixin = Pe;
    l.mergeEncTypeSenderKeyEmptyMixin = Me;
    l.mergeEncTypeSkmsgMixin = Ae;
    l.mergeReportingTagElementMixin = Oe;
    l.makeStatusEncFanoutParticipantsTo = Be;
    l.mergeStatusEncFanoutMixin = qe;
    l.mergeStatusTCTokenMixin = Ve;
    l.mergeStatusToContentBindingMixin = Ge;
    l.mergeStatusToDeviceOrUserMixinGroup = ze;
    l.mergeStatusToUserMixin = Ke;
    l.mergeSenderKeyBucketParticipantMixin = Xe;
    l.mergeStatusToDeviceMixin = Je;
    l.mergeEncTypeIndividualMixin = et;
    l.mergeEncVersion = tt;
    l.mergeEncVersion2Mixin = rt;
    l.mergeEncVersion3Mixin = at;
    l.mergeEncVersionFutureproofMixin = lt;
    l.mergeStatusEncHideDecryptFailMixin = ut;
    l.mergeEncMediaTypeOrListMixinGroup = ct;
    l.mergeEncPayloadMixin = mt;
    l.mergeEncStateOrSessionTypeMixinGroup = pt;
    l.mergeEncListMixin = ft;
    l.mergeEncMediaTypeMixin = ht;
    l.mergeEncSessionTypeMixin = Ct;
    l.mergeEncStateMixin = vt;
    l.mergeMediaTypeMixin = Rt;
    l.mergeAvatarStickerTypeMixin = Et;
}, 98);