__d("WAWebPhotoPickerLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingPhotoPicker.react",
    "WAWebPhotoPickerConstants",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebPhotoPicker.react").__setRef("WAWebPhotoPickerLoadable.react").load();
        return e;
    }), "PhotoPicker");
    const C7 = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
                svgName: "default-user",
                error: !!t.error
            });
        }
    });
    const D43 = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
                svgName: "default-group",
                error: !!t.error
            });
        }
    });
    const M25 = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
                svgName: "default-group",
                error: !!t.error
            });
        }
    });
    const P12 = r("react-loadable")({
        loader: u,
        loading: function(t) {
            return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
                error: !!t.error,
                isCoverPhoto: true
            });
        }
    });
    const _ = "cover-photo-picker";
    const f = "profile-pic-picker";
    function g(e) {
        const t = o("react-compiler-runtime").c(8);
        switch(e.type){
            case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
            case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
            case o("WAWebPhotoPickerConstants").PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP:
            case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
                {
                    let n;
                    if (t[0] !== e) {
                        n = <D43 {...babelHelpers.extends({}, e, {
                            testid: "group-pic-picker"
                        })}/>;
                        t[0] = e;
                        t[1] = n;
                    } else {
                        n = t[1];
                    }
                    return n;
                }
            case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
                {
                    let r;
                    if (t[2] !== e) {
                        r = <M25 {...babelHelpers.extends({}, e, {
                            testid: "community-pic-picker"
                        })}/>;
                        t[2] = e;
                        t[3] = r;
                    } else {
                        r = t[3];
                    }
                    return r;
                }
            case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
                {
                    let a;
                    if (t[4] !== e) {
                        a = <C7 {...babelHelpers.extends({}, e, {
                            testid: f
                        })}/>;
                        t[4] = e;
                        t[5] = a;
                    } else {
                        a = t[5];
                    }
                    return a;
                }
            case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
                {
                    let i;
                    if (t[6] !== e) {
                        i = <P12 {...babelHelpers.extends({}, e, {
                            testid: _
                        })}/>;
                        t[6] = e;
                        t[7] = i;
                    } else {
                        i = t[7];
                    }
                    return i;
                }
        }
    }
    l.requireBundle = u;
    l.PhotoPickerLoadable = g;
}, 98);