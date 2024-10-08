import styles from './Sidebar.module.css';

import { Avatar } from './avatar'

import { PencilSimple, PersonSimpleRun } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1689594016155-3f912af12e59?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
            <Avatar src="https://github.com/alexaakie.png" alt=""/>

                <strong>Alexsandro Fischer</strong>
                <span>Desenvolvedor triste</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimple size={20}/> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}