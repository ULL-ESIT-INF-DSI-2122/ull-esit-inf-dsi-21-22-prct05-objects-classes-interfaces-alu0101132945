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
        this.hex = '0x'
        this.hex += val.toString(16)
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