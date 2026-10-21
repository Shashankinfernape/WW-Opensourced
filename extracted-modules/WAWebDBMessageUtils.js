__d("WAWebDBMessageUtils", [
    "$InternalEnum",
    "WAWebDBCAPIPermissions",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderPreservingHex",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebVcardParsingUtils"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        Default: "",
        GroupStatus: "gs",
        NewsletterStatus: "ns"
    });
    function s(e) {
        return `${e.toString()}_/`;
    }
    function u(e) {
        return `${e.toString()}_g`;
    }
    function c({ chatId, inChatMsgId, internalIdPrefix = e.Default }) {
        const l = o("WAWebOrderPreservingHex").orderPreservingHex(inChatMsgId);
        return `${internalIdPrefix}${chatId}_${l}_m`;
    }
    function d(e) {
        const t = e.split("_")[1];
        return o("WAWebOrderPreservingHex").undoOrderPreservingHex(t);
    }
    function m(e) {
        const t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
        return `${String(t)}_${e.key.toString()}_`;
    }
    function p(e, t) {
        const n = o("WAWebOrderPreservingHex").orderPreservingHex(e);
        const r = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(t.type);
        return `${String(r)}_${t.key.toString()}_${n}`;
    }
    function _(e) {
        const t = e.split("_");
        return r("WAWebThreadId").from(t.slice(0, t.length - 1).join("_"));
    }
    function f({ internalThreadIDs }, t) {
        if (internalThreadIDs == null || internalThreadIDs.length === 0) {
            return false;
        }
        const r = m(t);
        return internalThreadIDs.some((e)=>e.startsWith(r));
    }
    function g({ internalThreadIDs }) {
        if (internalThreadIDs == null || internalThreadIDs.length === 0) {
            return [];
        }
        return internalThreadIDs.map((e)=>_(e));
    }
    function h(e) {
        let t = [];
        if (e.type === "vcard") {
            t = [
                e.body
            ];
        } else if (e.kind === "multiVcard") {
            t = e.vcardList.map((e)=>e.vcard);
        } else {
            return;
        }
        return t.filter(Boolean).reduce((acc, item)=>{
            const n = o("WAWebVcardParsingUtils").vcardAllWids(o("WAWebVcardParsingUtils").parseVcard(item));
            return acc.concat(n.map((e)=>e.toString()));
        }, []);
    }
    function y({ isGroupStatus, isNewsletterStatus }) {
        let e_Default = e.Default;
        if (isGroupStatus === true) {
            e_Default = e.GroupStatus;
        } else if (isNewsletterStatus === true) {
            e_Default = e.NewsletterStatus;
        }
        return e_Default;
    }
    function C(e) {
        if (e.type !== "interactive" || e?.interactivePayload == null) {
            return false;
        }
        return e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
    }
    function b({ quotedMsg }) {
        if (quotedMsg?.type !== "interactive" || quotedMsg?.interactivePayload == null) {
            return false;
        }
        return quotedMsg.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
    }
    function v({ quotedMsg }) {
        if (quotedMsg?.type !== "interactive") {
            return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
        }
        const r = quotedMsg.interactivePayload?.buttons;
        if (r == null || r.length === 0) {
            return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
        }
        const buttonParamsJson = r[0].buttonParamsJson;
        if (buttonParamsJson == null) {
            return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
        }
        try {
            const l = JSON.parse(buttonParamsJson);
            const s = l?.action_selected?.type;
            if (s === "permanent_allow" || s === "temporary_allow" || s === "yes") {
                return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.ALLOW;
            }
            if (s === "disallow" || s === "no") {
                return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.DENIED;
            }
        } catch (e) {
            return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
        }
        return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
    }
    l.InternalIdPrefix = e;
    l.beginningOfChat = s;
    l.endOfChat = u;
    l.craftInternalId = c;
    l.getInChatMsgId = d;
    l.craftInternalThreadIdPrefix = m;
    l.craftInternalThreadId = p;
    l.getThreadIdFromInternalThreadId = _;
    l.messageHasThreadId = f;
    l.getThreadIdsFromMessage = g;
    l.getVcardWids = h;
    l.getPrefixForInternalId = y;
    l.isCoexCallingPermissionsRequestMessage = C;
    l.isCoexCallingPermissionsResponseMessage = b;
    l.getSelectedCallingPermissions = v;
}, 98);