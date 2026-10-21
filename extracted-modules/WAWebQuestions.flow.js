__d("WAWebQuestions.flow", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "Question",
        "Reply",
        "Response"
    ]);
    const l = n("$InternalEnum").Mirrored([
        "ALL",
        "CONTACTS",
        "REPLIED",
        "STARRED"
    ]);
    i.QuestionType = e;
    i.ResponsesFilterType = l;
}, 66);