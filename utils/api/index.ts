import * as PATH from "./path";
import axiosService from "./axiosService";


export const getRandomFace = (animalType: string = 'cat', amount: number = 2) => {
    return axiosService.request({
        url: `${PATH.FACE_RANDOM}?animal_type=${animalType}&amount=${amount}`
        ,
        method: 'GET'
    })
}

export const getRandomCatFace = (n: number=3) => {
    return getRandomFace('cat', n)
}