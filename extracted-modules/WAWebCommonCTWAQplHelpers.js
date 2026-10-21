__d("WAWebCommonCTWAQplHelpers", [
    "WAWebGraphQLServerError",
    "WAWebQplFlowWrapper"
], function(t, n, r, o, a, i, l) {
    function e({ error: t, errorAnnotationName: n, errorMessageAnnotationName: r, event: a }) {
        let i;
        if (t instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
            i = {
                string: {
                    [n]: t.name ?? "UNKNOWN",
                    [r]: t.source.errors.map((e)=>`[${e.code}] ${e.message ?? ""}`).join("|")
                }
            };
        } else if (t instanceof Error) {
            i = {
                string: {
                    [n]: t.name ?? "UNKNOWN",
                    [r]: t.message ?? ""
                }
            };
        } else {
            i = {
                string: {
                    [n]: String(t),
                    [r]: ""
                }
            };
        }
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(a, i);
    }
    l.qplAnnotateGraphQLError = e;
}, 98);