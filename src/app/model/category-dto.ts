export class CategoryDTO {
  

  id:string = "";
  name:string = "";
  url_image:string = "";

  constructor(id: string, name: string, url_image: string) {
    this.id = id;
    this.name = name;
    this.url_image = url_image;
  }
}
