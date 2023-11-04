import { API_KEY } from '../dist/APIKEY'

export function getMapPreview({lat, lng}) {
    const APIKEY = API_KEY;
    const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${APIKEY}`;
    return imagePreview;
};

export async function getAddress(lat, lng) {
    const APIKEY = API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${APIKEY}`;
    const response  = await fetch(url);

    if (!response.ok) {
        throw new Error('주소를 가져올 수 없습니다.');
    };

    const data = await response.json();
    // console.log(data);
    const address = data.results[0].formatted_address;

    return address;
};