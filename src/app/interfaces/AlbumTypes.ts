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


  /**
 * to store data from Api : https://jsonplaceholder.typicode.com/users
 */
export interface User{
  id: number,
  name:string,
  userName:string,
  email?:string,
  address?:Address,
  geo?:Geo,
  phone?: string,
  website?: string,
  company?:Company
}

//sub-type from User Type
export interface Address{
  street:string,
  suite:string,
  city:string,
  zipcode:string

}

//sub-type from User Type
export interface Geo{
  lat:string,
  long:string
}

//sub-type from User Type
export interface Company{
  name:string,
  catchPhrase:string,
  bs:string
}