__d("WAWebGenerateTemplateButtonReplyMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        return {
            templateButtonReplyMessage: {
                selectedId: json.selectedId,
                selectedIndex: json.selectedIndex,
                selectedCarouselCardIndex: json.selectedCarouselCardIndex,
                selectedDisplayText: json.body,
                contextInfo
            }
        };
    }
    i.default = e;
}, 66);