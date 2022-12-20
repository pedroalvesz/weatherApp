export interface placeDTO {
  data: {
    currentFullDate: string | number,
    coord: {
      lat: number,
      lon: number,
  },
    name: string,
    weather: [{
      description: string,
      main: string,
    }],
    wind: {
      speed: number,
    },
    main: {
      temp: number,
      feels_like: number,
      humidity: number,
    },
 }
}