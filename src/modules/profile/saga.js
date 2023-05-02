import { all, call, fork, put, select, take, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { updateProfileApi, uploadProfileImageApi } from "./api";
import { handleAPIRequest } from "../../utils/http";
import { getProfileImageFile } from "./selectors";
import { errorNotify, loaderNotify, successNotify } from "../../utils/notificationUtils";
import { actions as sliceActions } from "./slice";
import { dismissNotification } from "reapop";
import { removeStringPortion } from "../../utils/commonUtils";


export function* updateProfile({ payload = {} }) {
    yield call(handleAPIRequest, updateProfileApi, payload);
}

export function* uploadProfilePicture() {
    const image = yield select(getProfileImageFile);
    if (image) {
        yield fork(handleAPIRequest, uploadProfileImageApi, image);
        yield put(loaderNotify({ id: "profile-picture-upload", title: "Uploading File", message: `${removeStringPortion(image.name)} ${image.type}` }));
        const responseAction = yield take([ACTION_TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS, ACTION_TYPES.UPLOAD_PROFILE_IMAGE_FAILURE]);
        if (responseAction.type === ACTION_TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS) {
            yield put(dismissNotification("profile-picture-upload"));
            yield put(successNotify({ title: "Success", message: "File Uploaded Successfully" }));
            yield put(sliceActions.clearProfileImageFile());
        }

    } else {
        yield put(errorNotify({ id: "File Error", title: "Error! Failed to upload ", message: "you are not chosen any image file" }));
    }

}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.PROFILE_UPDATE, updateProfile),
        takeLatest(ACTION_TYPES.UPLOAD_PROFILE_IMAGE, uploadProfilePicture)

    ]);
}
