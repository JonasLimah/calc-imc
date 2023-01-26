export type Level = {
    title: string;
    color: string;
    icon: "down"|"up";
    imc: number[];
    yourimc ? :number;
}

export const Levels:Level[] = [
    {title:"Magreza",color: "#96a3ab",icon:"down",imc: [0,18.5]},
    {title:"Normal",color: "#0ead69",icon:"up",imc: [18.6,24.9]},
    {title:"Sobrepeso",color: "#e2b039",icon:"down",imc: [25,30]},
    {title:"Obesidade",color: "#c3423f",icon:"down",imc: [30.1,99]}

];
export const calculateImc = (wieght:number,height:number)=> {
    const imc = wieght/ (height*height);
    for(let i in Levels) {
        if(imc >= Levels[i].imc[0] && 
            imc < Levels[i].imc[1]) {
                Levels[i].yourimc = imc;
                return Levels[i];
            }
    }
    return null;
}