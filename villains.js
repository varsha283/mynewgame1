class villains{
    constructor(x,y,w,h) {
        this.x=x;
        this.y=y;
this.w=w;
this.h=h;
this.sprite=createSprite(x,y,w,h);
   this.sprite.addImage(thanosimg); 
   this.sprite.scale=0.8;   
    }
      display(){
       this.edges=createEdgeSprites();
       this.sprite.bounceOff(this.edges);
      }
    }