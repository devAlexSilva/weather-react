export type res = [
  coords: {
    latitude: number;
    longitude: number;
  }
]

export class Api {
    private key = import.meta.env.VITE_API_KEY
    
    async get(query: string) {
        console.log(query)
        const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${this.key}`
        return await (await fetch(baseUrl)).json()
    }
}
