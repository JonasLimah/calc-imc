import { Level } from "../../helpers/imc";
import styles from "/projetos/calc-imc/src/components/GridItem.module.css"
import up from "/projetos/calc-imc/src/assets/like.png";
import down from "/projetos/calc-imc/src/assets/dislike.png";
type props = {
    item: Level
}
export const GridItem = ({item}:props) => {
    
    return(

        
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === "up"? up : down} alt="" width={30}></img>
            </div>
            <div className={styles.GridTitle}>
                {item.title}
            </div>
            <div className={styles.GridInfor}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
};