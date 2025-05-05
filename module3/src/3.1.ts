{
    // oop -class//

class Animal{
    name:string;
    specises:string;
    sound:string;
    constructor(name:string,specises:string,sound:string){
        this.name=name;
        this.sound=sound;
        this.specises=specises;
    }

    makesound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
}
const dog=new Animal('German Shepard Bhai','dog','gew gew')
  const cat=new Animal('Persian','cat','mew mew')
  cat.makesound()
dog.makesound() 




}