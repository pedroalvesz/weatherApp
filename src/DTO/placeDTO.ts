export interface placeDTO {
  data: {
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
    }
 }
}