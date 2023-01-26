import { useEffect,useState } from "react";
import styles from "./App.module.css"
import downloadImage from "./assets/download.png"
import { Levels,calculateImc } from "./helpers/imc";
import { GridItem } from "./components/grid-item";
const App = () => {
  const [height,setHeight] = useState<number>(0);
  const [weight,setWeight] = useState<number>(0);
  const handleCalculate = () => {
    if(height && weight) {

    }else {
      alert("preencha todos os campos!!")
    }
  }
  return (
    <div className={styles.main}>
      <header>
          <div className={styles.headerContainer}>
            <img src = {downloadImage} alt=" logo" width={100}/>
          </div>
          <div className={styles.container}>
              <div className={styles.leftSide}>
                  <h1>
                    Calcule seu IMC
                  </h1>
                  <p>
                    O que é o IMC?<br/>
                    Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.
                  </p>
                  <input type="number" placeholder="Digite a sua Altura ex: 1.5(em Metros)" value={height>0 ? height:"" } onChange={e => setHeight(parseFloat(e.target.value))}/>

                  <input type="number" placeholder="Digite a seu peso em kg " value={weight>0 ? weight:"" } onChange={e => setWeight(parseFloat(e.target.value))} />
                  <button onClick={handleCalculate}>Calcular</button>
              </div>
              <div className={styles.rightSide}>
                  <div className= {styles.grid}>
                      {Levels.map((item,key)=> (
                        <GridItem key={key} item={item} />
                      ))}
                  </div>

              </div>
          </div>

      </header>
    </div>
  );
}
export default App;