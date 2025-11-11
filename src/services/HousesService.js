import { dbContext } from "../db/DbContext.js"


class HousesService {

    async getAllHouses() {

        const houses = await dbContext.Houses.find()
        return houses
    }

    async getHouseById(houseId) {

        const houseToGet = await dbContext.Houses.findById(houseId)
        if (!houseToGet) {

            throw new Error("There is no house there. Bad id")
        }

        return houseToGet




    }


}

export const housesService = new HousesService()