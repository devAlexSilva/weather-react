export class Api {
    private key = import.meta.env.VITE_API_KEY
    
    async get(query: string) {
        console.log(query)
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&lang=pt_br&appid=${this.key}`
        return await (await fetch(baseUrl)).json()
    }
}
