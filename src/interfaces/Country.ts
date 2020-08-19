export interface Country {
  id: string;
  name: string;
  capital: string;
  area: string;
  population: string;
  flag: {
    svgFile: string;
  };
  distanceToOtherCountries: {
    countryName: string;
    distanceInKm: number;
  }[];
}
