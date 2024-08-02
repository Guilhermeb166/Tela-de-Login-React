import styles from './css-modules/Ilustracao.module.css'
function Ilustracao (){
    return(
        <section className={styles.left}>
                <h2>Faça login e <br/>entre para o nosso time</h2>
                <img src="/img/developer.png" alt="imagem ilustrativa"/>
                {/*No Create React App, se você mover a imagem para a pasta public/img, o caminho correto deve ser /img/developer.png.*/}
        </section>
    )
}

export default Ilustracao