
import { Image, View, Text, Button, TouchableOpacity, PermissionsAndroid, } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const captureImage = async () => {
    return new Promise(async (resolve, reject) => {
        let options = {
            mediaType: 'photo',
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();

        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);
                if (response?.assets) {
                    var img = response.assets[0].uri;
                    resolve(img)
                }
                else {
                    reject(false)
                }

            });
        }
    }
    )

};

export const chooseFile = async () => {
    return new Promise(async (resolve, reject) => {
        let options = {
            mediaType: 'photo'
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchImageLibrary(options, (response) => {
                console.log('Response = ', response);
                if (response?.assets) {
                    var img = response.assets[0].uri;
                    resolve(img)
                }
                else {
                    reject(false)
                }

            });
        }
    }
    )
};

const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App needs camera permission',
                },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else return true;
};

const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'External Storage Write Permission',
                    message: 'App needs write permission',
                },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
        }
        return false;
    } else return true;
};













