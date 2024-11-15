export interface Character {
    id: number;
    name: string;
    species: string;
    status: string;
    type: string;
    image: string;
    location: {
        name: string;
    };
    episode: string[];
}