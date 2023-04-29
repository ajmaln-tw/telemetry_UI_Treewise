import { all, call, fork, put, select, take, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { fetUserById, uploadProfileImageApi } from "./api";
import { handleAPIRequest } from "../../utils/http";
import { getProfileImageFile } from "./selectors";
import { errorNotify, successNotify } from "../../utils/notificationUtils";
import { actions as sliceActions } from "./slice";


export function* fetchUser({ payload: id }) {
    yield call(handleAPIRequest, fetUserById, { id });
}

export function* uploadProfilePicture() {
    const image = yield select(getProfileImageFile);
    if (image) {
        yield fork(handleAPIRequest, uploadProfileImageApi, image);
        const responseAction = yield take([ACTION_TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS, ACTION_TYPES.UPLOAD_PROFILE_IMAGE_FAILURE]);
        if (responseAction.type === ACTION_TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS) {
            yield put(successNotify({ title: "Success", message: "File Uploaded Successfully" }));
            yield put(sliceActions.clearProfileImageFile());
        }
        // try {
        //     const formData = new FormData();
        //     formData.append("file", image);
        //     yield put({ type: ACTION_TYPES.UPLOAD_PROFILE_IMAGE_REQUEST });
        //     yield call(uploadAxios.post, API_URL.USER.UPLOAD_PROFILE_IMAGE, formData);
        //     yield put({ type: ACTION_TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS });
        //     yield put(successNotify({ title: "Success", message: "File Uploaded Successfully" }));
        //     yield put(sliceActions.clearProfileImageFile());
        // } catch (error) {
        //     yield put({ type: ACTION_TYPES.UPLOAD_PROFILE_IMAGE_FAILURE, error });
        //     yield put(error({ title: "Error", message: error.message }));
        // }

    } else {
        yield put(errorNotify({ id: "File Error", title: "Error! Failed to upload ", message: "you are not chosen any image file" }));
    }

}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.FETCH_USER_BY_ID, fetchUser),
        takeLatest(ACTION_TYPES.UPLOAD_PROFILE_IMAGE, uploadProfilePicture)

    ]);
}
