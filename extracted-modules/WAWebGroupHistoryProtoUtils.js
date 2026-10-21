__d("WAWebGroupHistoryProtoUtils", [
    "WALogger",
    "WAWebDecodeJid",
    "WAWebProtobufMsgKeyUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t) {
        if (t == null) {
            return null;
        }
        if (t.bundleMessageKey == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "bundleMessageKey missing in GroupHistoryIndividualMsgInfo"
            ])));
            return null;
        }
        const a = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(t.bundleMessageKey);
        const i = o("WAWebDecodeJid").decodeJidAndValidate(t.bundleMessageKey?.participant, "groupHistoryIndividualMessageInfo");
        if (i instanceof r("WAWebWid")) {
            if (t.editedAfterReceivedAsHistory == null) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "editedAfterReceivedAsHistory missing in GroupHistoryMsgInfo"
                ])));
                return null;
            }
            return {
                isEditedAfterReceivedAsHistory: t.editedAfterReceivedAsHistory,
                bundleMessageKey: a,
                bundleSender: i
            };
        }
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "bundleSender missing/invalid (GroupHistoryIndividualMsgInfo)"
        ])));
        return null;
    }
    l.getGroupHistoryIndividualMessageInfoMetadataFromProto = c;
}, 98);