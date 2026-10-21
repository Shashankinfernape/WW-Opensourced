__d("WAWebMapFileOriginToUploadOrigin", [
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumUploadSourceType"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (t) {
            return o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.OTHER;
        }
        if (e === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY) {
            return o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.GALLERY;
        }
        if (e === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.MENU_CAMERA_CAPTURE) {
            return o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.CAMERA;
        }
        if (e === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.PASTE) {
            return o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.SHARE;
        }
        return o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.OTHER;
    }
    l.default = e;
}, 98);