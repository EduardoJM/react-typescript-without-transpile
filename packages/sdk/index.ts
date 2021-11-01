import axios from 'axios';

export interface CatImageItem {
    id: number;
    url: string;
    webpurl: string;
    x: number;
    y: number;
}

export async function getCat(): Promise<CatImageItem> {
    const result = await axios.get<CatImageItem>('https://thatcopy.pw/catapi/rest/');
    return result.data;
}
