const texto = "La constancia hace la diferencia"

class DefaultMap extends Map {
    constructor(defaultValue) {
        super();                          
        this.defaultValue = defaultValue; 
    }

    get(key) {
        if (this.has(key)) {              
            return super.get(key);       
        }
        else {
            return this.defaultValue;     
        }
    }
}

class Histrogram {
    
    constructor(){
        this.letterCounts = new DefaultMap(0);  
        this.totalLetters = 0;    
    }

    add(text) {
        //letterCounts es un objeto como un mapa de java
         text = text.replace(/\s/g, "").toUpperCase();
 
         for(let character of text) {
             let count = this.letterCounts.get(character); 
             this.letterCounts.set(character, count+1);    
             this.totalLetters++;
         }
     }

     toString() {
        ///????? escribe aqui el problema
        for (const letter of this.letterCounts) {
            console.log(letter.toString())
        }
        // return lines.join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}


histogramFromStdin().then(
  histogram => { 
    console.log(histogram.toString()); 
  }
);

let histogram = new Histrogram();
histogram.add(texto)
histogram.toString()

