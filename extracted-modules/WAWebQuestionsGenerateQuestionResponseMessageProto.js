__d("WAWebQuestionsGenerateQuestionResponseMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return {
            questionResponseMessage: {
                key: o("WAWebE2EProtoUtils").encodeKey(json.id),
                text: json.body
            }
        };
    }
    l.default = e;
}, 98);