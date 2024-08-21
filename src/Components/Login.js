import { BiShow,BiHide  } from "react-icons/bi";
import { useState } from 'react'
import styles from '../Components/css-modules/Login.module.css'

function Login (){

    const [user,setUser] = useState()
    const [senha,setSenha] = useState()
    const [showPassword,setShowPassword] = useState(false)
    /*Estado e função para atualizar a visibilidade da senha (true para mostrar a senha, false para ocultar). */

    function Logar(e){
        e.preventDefault()
        alert(`Logado como ${user} e senha: ${senha}`)
    }
    function  mostrarSenha(){
        setShowPassword(!showPassword)
        //Inverte o valor atual de showPassword (se showPassword é false, muda para true e vice-versa).
    }

    return(
        <section className={styles.right}>
            <div className={styles.Login}>
                <h2 className={styles.title}>Login</h2>
                <form>
                    <div className={styles.textfield}>
                        <label htmlFor='user'>Usuário</label>
                        <div>
                            <input className={styles.user} type="text" placeholder='Usuário' id='user' name='user'autoComplete='off' required onChange={(e)=>setUser(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.textfield}>
                        <label htmlFor='senha'>Senha</label>
                        <div className={styles.senhaField}>
                            <input className={styles.senha} type={showPassword ? 'text' : 'password'}
                            //utiliza o operador ternário para definir o tipo de input (text ou password) com base no estado showPassword. Se showPassword for true, o tipo de input será 'text', mostrando a senha em texto claro.
                            placeholder='Senha' id='senha' name='senha' required onChange={(e)=>setSenha(e.target.value)}/>
                            <p className={styles.PasswordView}  onClick={mostrarSenha}>
                                {showPassword ? <BiShow/> : <BiHide/>}
                            {/*também utiliza o operador ternário para definir a classe do ícone com base no estado showPassword.*/}
                           
                            </p>
                        </div>
                    </div>
                    <button className={styles.btn} onClick={Logar}>LOGIN</button>
                </form>
            </div>
        </section>
    )
}
export default Login