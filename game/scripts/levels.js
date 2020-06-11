export class Level{
    constructor(){
        this.level = 1;
    }

    setup() {
        switch(this.level){
            case 1:
                this.character_position = new THREE.Vector3(-34,3,31);
                this.target_position = new THREE.Vector3(-28,2,-60);
                this.forward = function(){ return -0.1};
                this.left = Math.PI/2250;
                this.backward = function(){ return 0.1};
                this.right = -Math.PI/2250;
                this.walk_speed = 0.01;
                this.music_src = "./assets/music-and-video/Sonic Theme.mp3";
                this.message = "Go get a Redbull in the area between MSB and MSL to speed you up !!HURRY!"
            break;
    
            case 2:
                this.character_position =  new THREE.Vector3(65,0,-70);
                this.target_position =  new THREE.Vector3(-62,2,-3);
                this.forward = function(){ return -2};
                this.left = Math.PI/50;
                this.backward = function(){ return 2};
                this.right = -Math.PI/50;
                this.walk_speed = 1;
                this.music_src = "./assets/music-and-video/Doom Theme.mp3";
                this.message = "Go get that bottle of sparkling water just behind the stands to level your senses !!HURRY!"
                break;
    
            case 3:
                this.move_val = 0
                this.character_position =  new THREE.Vector3(-28,0,-55);
                this.target_position =  new THREE.Vector3(-38,2,65);
                this.forward = function(){ 
                    this.move_val += Math.PI/100;
                    return Math.sin(this.move_val)};
                this.left = Math.PI/100;
                this.backward = function() { 
                    this.move_val -= Math.PI/100;
                    return Math.sin(this.move_val)};
                this.right = -Math.PI/100;
                this.walk_speed = 0.1;
                this.music_src = "./assets/music-and-video/Eye of the Tiger.mp3";
                this.message = "Go get that bottle of Coke Zero next to WSS to restore yourself to normal !!HURRY!"
                break;
        }
    }

    next() {
        this.level += 1;
        this.setup(this.level);
    }
}