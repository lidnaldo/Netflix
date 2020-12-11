import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

export const GetLocationPromise = () => {
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


// export const GetCountry = ({ lat, lng }) => {
//     Geocoder.geocodePosition({ lat, lng }).then((address) => {
//         console.log("address", address);
//     })
// };


export const GetCountry = ({ lat, lng }) => {
    
    return new Promise((resolve, reject) => {
        Geocoder.geocodePosition({
            lat,
            lng
        })
        .then((location)=> {
            console.log("GetCountry OK ");
            console.log("location[0].countryCode", location[0].countryCode);
            resolve(location[0].countryCode)
        })
        .catch((error) => {
            console.log("GetCountry ERROR ", error);
            reject(error)
        });
    });
};


export const GetLocation = () => {
    /** obtendo localizacao ****************************************** */
    const onObtainPosition = (position) => {
        console.log('position', position)
        // https://github.com/devfd/react-native-geocoder
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        Geocoder.geocodePosition(pos).then(address => {  // res is an Array of geocoding object (see below)
            // Position Geocoding
            console.log("Endereco:", address);
        })
            .catch(err => console.log(err))
    }
    const onObtainError = (error) => {
        console.log(error)
    }

    // https://github.com/react-native-geolocation/react-native-geolocation
    // geolocation.getCurrentPosition(geo_success, [geo_error], [geo_options]);
    Geolocation.getCurrentPosition(
        onObtainPosition,
        onObtainError
    );

    // return new Promise((resolve, reject)=>{
    //     const onReceiveLocation = (Geolocation)
    // })
}
