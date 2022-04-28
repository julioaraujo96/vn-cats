export interface Breed {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
  }

  export interface CatfactBreedResponse {
    data: Breed[];
  }