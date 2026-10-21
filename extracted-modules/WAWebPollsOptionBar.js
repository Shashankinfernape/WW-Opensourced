__d("WAWebPollsOptionBar", [
    "WAWebBar.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        barContainerReceiver: {
            backgroundColor: "x3x0x6p",
            $$css: true
        },
        barContainerSender: {
            backgroundColor: "x3x0x6p",
            $$css: true
        },
        barReceiver: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        barSender: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        quizCheckedCorrectOption: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        quizCheckedWrongOption: {
            backgroundColor: "xk0ssx3",
            $$css: true
        },
        quizUnchecked: {
            backgroundColor: "x1518k6t",
            $$css: true
        }
    };
    function c(e) {
        const n = o("react-compiler-runtime").c(4);
        const { checked, isAdminOrOwner, isCorrectOption, isPollSentByMe, result } = e;
        let barXStyle;
        if (isCorrectOption != null) {
            if (checked) {
                barXStyle = isCorrectOption ? u.quizCheckedCorrectOption : u.quizCheckedWrongOption;
            } else {
                barXStyle = isCorrectOption && !isAdminOrOwner ? u.quizCheckedCorrectOption : u.quizUnchecked;
            }
        } else {
            barXStyle = isPollSentByMe ? u.barSender : u.barReceiver;
        }
        const containerXStyle = isPollSentByMe ? u.barContainerSender : u.barContainerReceiver;
        const percentage = result?.percentageOfMostVotedForOption ?? 0;
        let f;
        if (n[0] !== barXStyle || n[1] !== containerXStyle || n[2] !== percentage) {
            f = s.jsx(r("WAWebBar.react"), {
                barXStyle,
                containerXStyle,
                percentage
            });
            n[0] = barXStyle;
            n[1] = containerXStyle;
            n[2] = percentage;
            n[3] = f;
        } else {
            f = n[3];
        }
        return f;
    }
    l.default = c;
}, 98);