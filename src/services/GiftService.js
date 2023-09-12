
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftService {

    async getGifts() {
        const res = await api.get('/api/gifts')
        logger.log(res.data)
        AppState.gifts = res.data.map(gift => new Gift(gift))

    }

    async createGift(formData) {
        console.log(formData)
        const res = await api.post('api/gifts', formData)
        const newGift = new Gift(res.data)
        AppState.gifts.push(newGift)
        AppState.emit('gifts')
    }

}


export const giftService = new GiftService