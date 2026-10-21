__d("WAWebStreamTypes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "OFFLINE",
        "OPENING",
        "PAIRING",
        "SYNCING",
        "RESUMING",
        "CONNECTING",
        "NORMAL"
    ]);
    const l = n("$InternalEnum").Mirrored([
        "SHOW",
        "OBSCURE",
        "HIDE"
    ]);
    i.StreamInfo = e;
    i.Obscurity = l;
}, 66);