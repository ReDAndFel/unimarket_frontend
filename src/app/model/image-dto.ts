export class ImageDto {

    publicId:string = "";
    url:string = "";

    constructor(publicId: string,url:string){
        this.publicId = publicId;
        this.url = url;
    }

}
