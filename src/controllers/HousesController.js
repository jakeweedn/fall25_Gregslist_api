import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {

    constructor() {

        super('api/houses')
        this.router
            .get('', this.getAllHouses)
    }

    async getAllHouses(request, response, next) {

        try {


        }

        catch (error) {
            request(error)


        }

    }



}