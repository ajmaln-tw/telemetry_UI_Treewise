import { all, call, fork, put, select, take, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { updateProfileApi, uploadProfileImageApi, profileDataApi, updateImageApi } from "./api";
import { handleAPIRequest } from "../../utils/http";
import { getProfileImageFile } from "./selectors";
import { errorNotify, loaderNotify, successNotify } from "../../utils/notificationUtils";
import { actions as sliceActions } from "./slice";
import { dismissNotification } from "reapop";
import { removeStringPortion } from "../../utils/commonUtils";


export function* updateProfile({ payload = {} }) {
    yield fork(handleAPIRequest, updateProfileApi, payload);
    const responseAction = yield take([ACTION_TYPES.PROFILE_UPDATE_SUCCESS, ACTION_TYPES.PROFILE_UPDATE_FAILURE]);
    if (responseAction.type === ACTION_TYPES.PROFILE_UPDATE_SUCCESS) {
        yield put(successNotify({ title: "Success", message: "Profile Data updated" }));
    }
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

export function* profileData() {
    yield call(handleAPIRequest, profileDataApi);
}

export function* profileImage() {
    yield call(handleAPIRequest, updateImageApi);
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.PROFILE_DATA, profileData),
        takeLatest(ACTION_TYPES.PROFILE_IMAGE, profileImage),
        takeLatest(ACTION_TYPES.PROFILE_UPDATE, updateProfile),
        takeLatest(ACTION_TYPES.UPLOAD_PROFILE_IMAGE, uploadProfilePicture)

    ]);
}
