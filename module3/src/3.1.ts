{
    // oop -class//

class Animal{
//    public name:string;
//    public specises:string;
//    public  sound:string;

//** */ parameter Properties constructor ar vitore public key word used korle this.name lika lagve nah 

    constructor(public name:string,public specises:string,public sound:string){
        // this.name=name;
        // this.sound=sound;
        // this.specises=specises;
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