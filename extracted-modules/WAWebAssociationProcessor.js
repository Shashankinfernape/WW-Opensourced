__d("WAWebAssociationProcessor", [
    "WAWebAlbumAssociationProcessor",
    "WAWebBotPluginAssociationProcessor",
    "WAWebDualUploadsAssociationProcessor",
    "WAWebMediaPollAssociationProcessor",
    "WAWebPollAddOptionAssociationProcessor",
    "WAWebUnknownAssociationProcessor"
], function(t, n, r, o, a, i, l) {
    const e = [
        r("WAWebAlbumAssociationProcessor"),
        r("WAWebUnknownAssociationProcessor"),
        r("WAWebBotPluginAssociationProcessor"),
        r("WAWebMediaPollAssociationProcessor"),
        r("WAWebPollAddOptionAssociationProcessor"),
        o("WAWebDualUploadsAssociationProcessor").ImageDualUploadsAssociationProcessor,
        o("WAWebDualUploadsAssociationProcessor").VideoDualUploadsAssociationProcessor,
        o("WAWebDualUploadsAssociationProcessor").HevcDualUploadsAssociationProcessor
    ];
    function s({ associationType }) {
        return e.find((e)=>e.type === associationType) ?? null;
    }
    function u(t) {
        return e.find((e)=>e.type === t) ?? null;
    }
    l.getAssociationProcessor = s;
    l.getAssociationProcessorByAssociationType = u;
}, 98);