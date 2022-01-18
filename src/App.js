import React, { useState, useEffect } from 'react';
import apifrom from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';
import api from './services/api';
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

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        //    projects.push(`Novo Projeto ${Date.now()}`);

        // setProjects([...projects, `Novo Projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Astora"
        });

        const project = response.data;

        setProjects([...projects, project]);

        // console.log(projects);
    }

    return (
        <>
            <Header title="Mateus" />

            <img width={100} src={backgroundImage} />

            <ul>
                {projects.map(project => <li key={project.id} >{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}  >Adicionar Projeto</button>

        </>
    );
}

export default App;