/**
 * 
 */
export class Hexadecimal {
    private value:number;
    private hex:string;
    /**
     * constructor de la clase Hexadecimal 
     * @param val el valor del numero hexadecimal en base 10
     */
    constructor(val:number){
        this.value = val;
        this.hex = this.hexa(val)
    }   
    /**
     * Este metodo convierte un numero decimal a hexadecimal
     * @param val el valor del numero decimal que se va a convertir a hexadecimal
     */
    private hexa(val:number):string{
        let aux: string = ""
        while(val >= 16){
            if(val%16 == 10){
                aux += 'A'
            }
            else if(val%16 == 11){
                aux += 'B'
            }
            else if(val%16 == 12){
                aux += 'C'
            }
            else if(val%16 == 13){
                aux += 'D'
            }
            else if(val%16 == 14){
                aux += 'E'
            }
            else if(val%16 == 15){
                aux += 'F'
            }
            else{
                aux += String(val%16)
            }
            if (Math.trunc(val/16) < 16){
                aux += String(Math.trunc(val/16))
            }
            val = Math.trunc(val/16) 
        }
        let result: string = ""
        result += '0x'
        for(let i = aux.length; i >= 0;i--){
            result += aux[i]
        }
        return result
    }
    /**
     * Este metodo devuelve el valor en decimal del numero
     * @returns value, la variable donde se guarda el valor decimal del numero
     */
    valueOf():number{
        return this.value
    }
    /**
     * Este metodo devuelve el valor hexadecimal del numero en forma de cadena
     * @returns hex, la cadena donde esta guardado el valor hexadecimal
     */
    toString():String{
        return this.hex
    }
    /**
     * metodo que suma dos hexadecimales
     * @param otHex el otro hexadecimal que se va a sumar al numero
     * @returns el resultado de la suma en un nuevo hexadecimal
     */
    add(otHex:Hexadecimal):Hexadecimal {
        let result:Hexadecimal = new Hexadecimal(this.valueOf() + otHex.valueOf())
        return result
    }
    /**
     * metodo que resta dos hexadecimales
     * @param otHex el otro hexadecimal que se va a restar al numero
     * @returns el resultado de la resta en un nuevo hexadecimal
     */
    substract(otHex:Hexadecimal):Hexadecimal {
        let result:Hexadecimal = new Hexadecimal(this.valueOf() - otHex.valueOf())
        return result
    }
    /**
     * metodo para convertir una cadena hexadecimal en un numero decimal
     * @returns el numero en base 10
     */
    parse():number{
        let result:number = 0
        let aux:number = 0
        for(let i = this.hex.length; i >= 0; i--){
            result += Number(this.hex[i]) * 16 ^ aux
            aux++ 
        }
        return result
    }
}