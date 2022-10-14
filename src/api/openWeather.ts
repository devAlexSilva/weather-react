
export type res = [
  coords: {
    latitude: number;
    longitude: number;
  }
]

export class Api {
    private key = "d9d9f34d0cc354287d897071b81d9873"
    
    async get(query: string) {
        console.log(query)
        const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${this.key}`
        return await (await fetch(baseUrl)).json()
    }
}
