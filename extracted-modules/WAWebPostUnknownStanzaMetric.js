__d("WAWebPostUnknownStanzaMetric", [
    "WAWebUnknownStanzaWamEvent"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        new (o("WAWebUnknownStanzaWamEvent")).UnknownStanzaWamEvent({
            unknownStanzaTag: e.tag,
            unknownStanzaType: e.attrs.type?.toString()
        }).commit();
    }
    l.postUnknownStanzaMetric = e;
}, 98);