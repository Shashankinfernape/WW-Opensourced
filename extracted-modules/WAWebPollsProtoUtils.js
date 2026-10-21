__d("WAWebPollsProtoUtils", [
    "WALogger",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    function d({ pollContentType, options }) {
        if (pollContentType === o("WAWebProtobufsE2E.pb").Message$PollContentType.IMAGE) {
            if (options == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Missing options in pollCreationMessage"
                ]))).sendLogs("missing-options-in-pollCreationMessage");
                return;
            }
            const a = options.some(({ optionHash })=>optionHash == null || optionHash === "");
            if (a) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Outgoing photo poll with missing option hashes"
                ]))).sendLogs("outgoing-photo-poll-missing-option-hashes");
            }
        }
    }
    function m({ correctAnswer, pollType }) {
        if (pollType === o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ) {
            if (correctAnswer == null) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Missing correctAnswer in pollCreationMessage"
                ]))).sendLogs("missing-correctAnswer-in-pollCreationMessage");
                return;
            }
        } else if (correctAnswer) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "correctAnswer present in pollCreationMessage"
            ]))).sendLogs("invalid-correctAnswer-in-pollCreationMessage");
            return;
        }
    }
    l.validatePhotoPollCreationMessage = d;
    l.validatePollCreationMessage = m;
}, 98);