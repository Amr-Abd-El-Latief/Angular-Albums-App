/**
 * to store data from Api : https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5
 */
export interface Album{
  userId: number,
  id:number,
  title: string
}

/**
 * to store data from Api : https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=5
 */
export interface Photo{
    albumId: number,
    id:number,
    title: string,
    url: string,
    thumbnailUrl: string
  }
