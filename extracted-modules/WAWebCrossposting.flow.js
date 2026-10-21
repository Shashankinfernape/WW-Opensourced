__d("WAWebCrossposting.flow", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    let e;
    const l = (e = n("$InternalEnum"))({
        PENDING: "CROSSPOSTING_REQUEST_PENDING",
        HARD_FAILURE: "CROSSPOSTING_REQUEST_HARD_FAILURE",
        OFFLINE_FAILURE: "CROSSPOSTING_REQUEST_OFFLINE_FAILURE",
        SUCCESS: "CROSSPOSTING_REQUEST_SUCCESS"
    });
    const s = e({
        FACEBOOK: 0,
        INSTAGRAM: 1
    });
    const u = e({
        FACEBOOK: "F",
        INSTAGRAM: "I"
    });
    const c = e({
        FACEBOOK: "FB",
        INSTAGRAM: "IG"
    });
    const d = "0";
    const m = e({
        ClientKey: "client_key",
        ServerKey: "server_key"
    });
    const p = 64;
    const _ = "WAFFLE_CROSSPOSTING";
    const f = e({
        V1: 1
    });
    const g = "STORY";
    const h = 4;
    const y = e({
        OK: 0,
        UNKNOWN_ERROR: 1,
        DUPLICATE_REQUEST: 2,
        ALREADY_SHARED: 3,
        ACCOUNT_LINK_ERROR: 4,
        DEACTIVATED_ACCOUNT: 5
    });
    i.CrosspostingState = l;
    i.CrosspostingDestination = s;
    i.CrosspostingDestinationGQLValue = u;
    i.CrosspostingDestinationIQValue = c;
    i.NoPreviousCrosspostingRecord = d;
    i.SharedKey = m;
    i.SHARED_KEY_LENGTH = p;
    i.HKDF_INFO = _;
    i.PurposeEncryptionVersion = f;
    i.CROSSPOSTING_SURFACE_STORY = g;
    i.PurposeEncryptionVersionBytesLength = h;
    i.CrosspostResponseCodes = y;
}, 66);