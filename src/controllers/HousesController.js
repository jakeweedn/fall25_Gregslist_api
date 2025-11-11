import e from "express";
import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {

    constructor() {

        super('api/houses')
        this.router
            .get('', this.getAllHouses)
            .get('/search', this.searchHouses)
            .get('/:houseId', this.getHouseById)

        //The order of the get requests matters! Put the id last!
        //Put the question mark after search. In the lab reference, the endpoint is probably ''.
        // http://localhost:3000/api/houses/search?levels=2


    }


    async searchHouses(request, response, next) {

        try {
            const searchQuery = request.query
            const houses = await housesService.searchHouses(searchQuery)

            response.send(houses)


        }

        catch (error) {
            next(error)


        }



    }

    async getAllHouses(request, response, next) {

        try {
            const houses = await housesService.getAllHouses()

            console.log('Getting all houses')
            response.send(houses)


        }

        catch (error) {
            next(error)


        }

    }


    async getHouseById(request, response, next) {

        try {
            const houseId = request.params.houseId
            const houseToGet = await housesService.getHouseById(houseId)

            response.send(houseToGet)


        }
        catch (error) {
            next(error)

        }

    }



}