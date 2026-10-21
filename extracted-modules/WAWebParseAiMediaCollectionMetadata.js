__d("WAWebParseAiMediaCollectionMetadata", [], function(t, n, r, o, a, i) {
    function e(e) {
        const collectionId = e?.botMetadata?.aiMediaCollectionMetadata?.collectionId;
        if (collectionId != null) {
            const o = e?.botMetadata?.aiMediaCollectionMetadata?.uploadOrderIndex;
            return {
                collectionId,
                uploadOrderIndex: o ?? undefined
            };
        }
    }
    i.parseAiMediaCollectionMetadata = e;
}, 66);