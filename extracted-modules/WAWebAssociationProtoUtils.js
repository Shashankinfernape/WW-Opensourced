__d("WAWebAssociationProtoUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebAssociationProcessor",
    "WAWebE2EProtoUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationValidation",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = new Set([
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.STICKER_ANNOTATION,
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.POLL_ADD_OPTION
    ]);
    function m(e) {
        const t = o("WAWebMessageAssociation.flow").MessageAssociationType.cast(o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.getName(e));
        if (t === o("WAWebMessageAssociation.flow").MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD || t === o("WAWebMessageAssociation.flow").MessageAssociationType.STREAMED_HD_VIDEO_DUAL_UPLOAD) {
            return o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN;
        }
        return t ?? o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN;
    }
    function p(e) {
        switch(e){
            case o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.STREAMED_HD_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION:
                throw r("err")("Invalid outgoing association type");
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD:
                return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.HD_IMAGE_DUAL_UPLOAD;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM:
                return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.MEDIA_ALBUM;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.BOT_PLUGIN:
                return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.BOT_PLUGIN;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL:
                return o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.MEDIA_POLL;
        }
    }
    function _(e) {
        switch(e){
            case o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HD_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.STREAMED_HD_VIDEO_DUAL_UPLOAD:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.POLL_ADD_OPTION:
                return false;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD:
                return true;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL:
                return false;
            case o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM:
            case o("WAWebMessageAssociation.flow").MessageAssociationType.BOT_PLUGIN:
                return false;
        }
    }
    function f(e, t) {
        if (!(e == null || t == null)) {
            return {
                messageAssociation: {
                    associationType: p(e),
                    parentMessageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(t)
                }
            };
        }
    }
    function g({ baseMessage, msgContext, parentMessageKey }) {
        const i = r("WAWebNewsletterIsNewsletterMsg")(baseMessage);
        if (msgContext === "history" && !i) {
            return o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(parentMessageKey);
        }
        return o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(parentMessageKey, baseMessage);
    }
    function h(e, baseMessage, msgContext) {
        const a = g({
            baseMessage,
            msgContext,
            parentMessageKey: e.parentMessageKey
        });
        const associationType = m(e.associationType);
        const l = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(associationType);
        if (l == null) {
            throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.UNSUPPORTED_ASSOCIATION_TYPE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
        }
        return {
            associationParentMsgKey: r("nullthrows")(a, "associationParentMsgKey can't be null"),
            associationType,
            viewMode: l.viewMode
        };
    }
    function y(t, n, a, i) {
        const l = n?.messageAssociation;
        if (l != null) {
            if (a === "history_quoted" || a === "quoted") {
                return null;
            }
            const { parentMessageKey, associationType } = l;
            if (associationType === o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.STATUS_NOTIFICATION) {
                return null;
            }
            if (parentMessageKey == null) {
                throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.MISSING_PARENT_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (associationType == null) {
                throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.MISSING_ASSOCIATION_TYPE, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            if (a === "history") {
                return {
                    associationType,
                    parentMessageKey
                };
            }
            const _ = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(parentMessageKey, t);
            if (_ == null) {
                throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.INVALID_PARENT_MESSAGE_KEY, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
            }
            const f = _.fromMe === t.id.fromMe && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(_.remote, t.id.remote)) && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(_.participant, t.id.participant));
            if (!f && !d.has(associationType)) {
                const k = _.participant;
                const I = t.id.participant;
                const T = k != null && k.isLid() ? k : null;
                const D = I != null && I.isLid() ? I : null;
                const x = i?.length ?? 0;
                const $ = T != null ? i?.find(function(e) {
                    return e.lid.equals(T);
                }) : null;
                const P = D != null ? i?.find(function(e) {
                    return e.lid.equals(D);
                }) : null;
                const N = k != null ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(k)) : null;
                const M = I != null ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(I)) : null;
                const w = o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.getName(associationType);
                const A = _.remote.toLogString();
                const F = t.id.remote.toLogString();
                const O = _.participant?.toLogString() ?? "null";
                const B = N?.toLogString() ?? "null";
                const W = t.id.participant?.toLogString() ?? "null";
                const q = M?.toLogString() ?? "null";
                const U = parentMessageKey.participant ?? "null";
                const V = t.type ?? "null";
                const H = t.subtype ?? "null";
                const G = $ != null ? `${$.lid.toLogString()} -> ${$.pn.toLogString()}` : "null";
                const z = P != null ? `${P.lid.toLogString()} -> ${P.pn.toLogString()}` : "null";
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MsgAssoc] sender mismatch type=",
                    " pRemote=",
                    " bRemote=",
                    ""
                ])), w, A, F);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MsgAssoc] pPart=",
                    " pPartAlt=",
                    " bPart=",
                    " bPartAlt=",
                    ""
                ])), O, B, W, q);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MsgAssoc] protoPart=",
                    " msgType=",
                    " subtype=",
                    " ctx=",
                    ""
                ])), U, V, H, a);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[MsgAssoc] maps=",
                    " parentMap=",
                    " baseMap=",
                    ""
                ])), x, G, z);
                throw new (o("WAWebMessageAssociationValidation")).MessageAssociationValidationError(o("WAWebMessageAssociationValidation").MessageAssociationValidationErrorCode.MISMATCH_SENDER, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.ERROR_PARENT_CHILD_SENDER_JID_MISMATCH);
            }
            return {
                associationType,
                parentMessageKey
            };
        }
        return null;
    }
    l.convertAssociationTypeFromProtoToClientSupportedAssociationType = m;
    l.convertAssociationTypeFromClientToProtoSupportedAssociationType = p;
    l.shouldWrapAssociatedChildForType = _;
    l.getValidatedOutgoingMessageAssociationContextInfo = f;
    l.getValidatedAssociationFieldsFromProto = h;
    l.validateMessageAssociationInMessageContextInfo = y;
}, 98);