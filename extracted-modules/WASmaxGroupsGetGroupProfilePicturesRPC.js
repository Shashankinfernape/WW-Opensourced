__d("WASmaxGroupsGetGroupProfilePicturesRPC", [
    "WAComms",
    "WASmaxInGroupsGetGroupProfilePicturesResponseClientError",
    "WASmaxInGroupsGetGroupProfilePicturesResponseServerError",
    "WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures",
    "WASmaxOutGroupsGetGroupProfilePicturesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsGetGroupProfilePicturesRequest").makeGetGroupProfilePicturesRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessGroupPictures = o("WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures").parseGetGroupProfilePicturesResponseSuccessGroupPictures(r, n);
            if (SuccessGroupPictures.success) {
                return {
                    name: "GetGroupProfilePicturesResponseSuccessGroupPictures",
                    value: SuccessGroupPictures.value
                };
            }
            const i = o("WASmaxInGroupsGetGroupProfilePicturesResponseClientError").parseGetGroupProfilePicturesResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "GetGroupProfilePicturesResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsGetGroupProfilePicturesResponseServerError").parseGetGroupProfilePicturesResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "GetGroupProfilePicturesResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupProfilePictures", {
                SuccessGroupPictures,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetGroupProfilePicturesRPC = e;
}, 98);