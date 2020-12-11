import Geocoder from 'react-native-geocoder';

export const GetLocation = () => {
    return new Promise((resolve, reject) => {
        const getLocation = (info) => {
            resolve(info);
        };

        const getLocationError = (error) => {
            reject(error);
        };

        Geolocation.getCurrentPosition(getLocation, getLocationError);
    })

    /** obtendo localizacao ****************************************** */
    // const onObtainPosition = (position) => {
    //     // https://github.com/devfd/react-native-geocoder
    //     const pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //     };
    //     Geocoder.geocodePosition(pos).then(address => {  // res is an Array of geocoding object (see below)
    //         // Position Geocoding
    //         console.log("Endereco:", address);
    //     })
    //         .catch(err => console.log(err))
    // }
    // const onObtainError = (error) => {
    //     console.log(error)
    // }
    // https://github.com/react-native-geolocation/react-native-geolocation
    // geolocation.getCurrentPosition(geo_success, [geo_error], [geo_options]);
    // Geolocation.getCurrentPosition(
    //     onObtainPosition,
    //     onObtainError
    // );


}

export const GetLocationPromisse = () => {
    return new Promise((resolve, reject) => {
        const getLocation = (info) => {
            resolve(info);
        };

        const getLocationError = (error) => {
            reject(error);
        };

        Geolocation.getCurrentPosition(getLocation, getLocationError);
    })
}

export const GetCountry = ({ lat, long }) => {

    return new Promise((resolve, reject) => {
        const location = Geocoder.geocodePosition({
            lat,
            long
        }).catch((error) => {
            reject(error)
        })
        resolve(location[0].countryCode)

    })
};


