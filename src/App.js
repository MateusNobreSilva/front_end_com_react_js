import React, { useState } from 'react';

import Header from './components/Header';
/**
 * 
 * @returns Os 3 Conceitos Mais importantes do React
 * 
 *  @returns Componentes
 * 
 * 
 *  @returns Propriedades
 * Propriedades são informações que são passadas de conponentes pai para filho
 *  exemplo: <Header title="" />
 * Header é o conponente e o title é a propriedade
 * 
 * 
 * @returns  Estados & Imutailidade
 */


function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-End Web']);

    function handleAddProject() {
        //    projects.push(`Novo Projeto ${Date.now()}`);

        setProjects([...projects, `Novo Projeto ${Date.now()}`]);


        console.log(projects);
    }

    return (
        <>
            <Header title="Mateus" />

            <ul>
                {projects.map(project => <li key={project} >{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}  >Adicionar Projeto</button>

        </>
    );
}

export default App;