import { dbContext } from "../db/DbContext.js"


class HousesService {


    async searchHouses(searchQuery) {

        const houses = await dbContext.Houses.find(searchQuery)

        return houses



    }

    // Yes, I can manually enter the specifics in the find like the lab does, but much easier to just put SearchQuery in the find, and then I can filter however I want in postman.



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