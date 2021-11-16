import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import empty from '../../style/assets/images/empty.png';

class CurrentProjects{

    $currentProjects = document.createElement('wrapper');
    url = 'http://localhost:3000/myProjects';
    post;
    user;

    constructor(){

        this.$currentProjects.className = 'currentProjects';

        // this.projects = JSON.parse(sessionStorage.getItem('individualPost'));
        this.user = JSON.parse(sessionStorage.getItem('user'));


        this.$currentProjects.appendChild(new Navbar());

        this.$currentProjects.appendChild(new Header());


        if(this.user){
            this.loadProjects();
        }


        return this.$currentProjects;

    }

    isEmpty(){
        return `
            <h2 class="title-empty">Aun no tienes ningun proyecto</h2>
            <img src="${empty}">
        `
    }

    async loadProjects(){
        
        const projects = await this.getProjects();

        const section = document.createElement('section');

            if(projects.length == 0){
                
                section.innerHTML += this.isEmpty();

            }else{
                
                const articleOpen = document.createElement('article');
                const projectsOpen = projects.filter(project => project.status != 'close');
                const $projectsOpen = projectsOpen.map(p => this.renderProjects(p));
 
                articleOpen.innerHTML += `
                    <h2 class="title">Proyectos Activos</h2>
                `
                if(projectsOpen.length == 0){
                    articleOpen.innerHTML += this.isEmpty();
                }else{
                    $projectsOpen.forEach($project => articleOpen.appendChild($project, $project.status != 'close'));
                }
                section.appendChild(articleOpen);


                const articleClose = document.createElement('article');
                const projectsClose = projects.filter(project => project.status == 'close');
                const $projectsClose = projectsClose.map(this.renderProjects);

                articleClose.innerHTML += `
                    <h2 class="title">Proyectos Finalizados</h2>
                `
                if(projectsClose.length == 0){
                    articleClose.innerHTML += this.isEmpty();
                }else{
                    $projectsClose.forEach($project => articleClose.appendChild($project, $project.status != 'close'));
                }
                section.appendChild(articleClose);

            }

        this.$currentProjects.appendChild(section);
       
    }

    renderProjects(project){
        
        const {name} = project;

        const $btn = document.createElement('button');
        $btn.className = 'open-card';
        $btn.addEventListener('click', () => {
            sessionStorage.setItem('project', JSON.stringify(project));
            alert('boy')
        })
        
        $btn.innerHTML += `
            <a href="/advances.html">
                <h2>${name}</h2>
                <div class="btn">Abrir</div> 
            </a>
        `

        return $btn;

    }

    async getProjects(){

        const res = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify({id: this.user.id})
        })

        const projects = await res.json();

        return projects;

    }
    
}

export default CurrentProjects;