import config from './config'

export default class RestoApi {
    constructor(){
        this.urlApi = config.serverApi;
    }

    fechApi (url = '') {
        return fetch(`${this.urlApi}${url}`)
            .then((response) => {
                return response.json();
            })
            .then((serverData) => {
                return serverData.data
            })
    }

    async getCards() {
        return await this.fechApi("cards");
    }

    async getCard(id) {
        const cards = await this.fechApi("cards");
        const index = cards.findIndex((el)=>{
           return el._id === id
        })

        return cards[index]
    }
}