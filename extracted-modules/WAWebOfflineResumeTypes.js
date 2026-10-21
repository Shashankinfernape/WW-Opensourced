__d("WAWebOfflineResumeTypes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum")({
        Toastbar: "toastbar",
        ButterBar: "butterbar",
        None: "none"
    });
    const l = n("$InternalEnum").Mirrored([
        "Blocking",
        "NonBlocking",
        "Worker"
    ]);
    i.ResumeUIProgressBarType = e;
    i.ResumeType = l;
}, 66);