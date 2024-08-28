var obj = {

    fullName: "Matti Meikäläinen",

    greet: function(){
        console.log(`Hello ${this.fullName}`);
    }
}

obj.greet(); 
obj.greet.call({fullName: 'Maija Mehiläinen'});
obj.greet.apply({fullName: 'Taina Ampiainen'});