document.addEventListener('DOMContentLoaded', () => {

    // 1. O "DICIONÁRIO" DE TRADUÇÕES
    const translations = {
        'pt': {
            'navInicio': 'Início',
            'navExperiencia': 'Experiência',
            'navProjetos': 'Projetos',
            'navHabilidades': 'Habilidades',
            'navContato': 'Contato',
            'btnCV': 'Download CV',
            'heroSubtitle': 'Programador Full Stack',
            'heroTitle': 'Eu sou Gustavo do Prado Partica',
            'heroDescription': 'Busco uma posição de Desenvolvedor Fullstack onde eu possa alavancar minha expertise completa no ciclo de desenvolvimento, desde o front-end(HTML, CSS, JavaScript/TypeScript, React) até o back-end (Node.js, Python), para projetar e entregar soluções web robustas, eficientes e escaláveis. Meu conhecimento em Bancos de Dados (SQL Server e NoSQL), DevOps (Docker, Git/GitHub) me permite contribuir com valor em todas as etapas do projeto.',
            'heroButton': 'Vamos Conversar',
            'titleExperiencia': 'Experiência Profissional',
            'expCargo': 'Analista de Suporte (com foco em Dev)',
            'expData': '2023 - Atual',
            'expEmpresa': 'FGVTN Brasil',
            'expDesc1': 'Projeto de sistema de agendamento de frota com Node.js/Express e MySQL.',
            'expDesc2': 'Desenvolvimento de um sistema E-commerce interno (Full Stack) com Python, HTML, CSS e Javascript.',
            'expDesc3': 'Criação de sistema de "Boas-Vindas" para TV corporativa (Python, HTML, CSS).',
            'expDesc4': 'Administração e manutenção de Servidor Windows e Active Directory (AD).',
            'expDesc5': 'Prestação de suporte técnico (HelpDesk) a usuários internos e externos.',
            'titleProjetos': 'Projetos em Destaque',
            'proj1Title': 'SilverLimp - Site Institucional e Catálogo Digital',
            'proj1Desc': 'Desenvolvimento de um site institucional focado em estabelecer a identidade visual da marca e servir como um catálogo digital. Implementação de design responsivo focado na experiência do usuário (UX).',
            'proj1BtnVer': 'Ver Projeto',
            'proj1BtnRepo': 'Repositório',
            'titleHabilidades': 'Habilidades e Formação',
            'subtitleTecnologias': 'Tecnologias',
            'subtitleIdiomas': 'Idiomas',
            'idioma1': 'Inglês',
            'idioma1Nivel': 'Nível B2 (Upper-Intermediate)',
            'idioma2': 'Português',
            'idioma2Nivel': 'Nativo',
            'subtitleFormacao': 'Formação Acadêmica',
            'formacao1': 'Pós-Graduação em Desenvolvimento Full Stack',
            'formacao1Local': 'FIAP (Faculdade de Informática e Administração Paulista)',
            'formacao1Data': 'Conclusão prevista: Abril 2026',
            'formacao2': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
            'formacao2Local': 'UP (Universidade Positivo)',
            'formacao2Data': 'Concluído: 2023',
            'titleContato': 'Vamos Conversar?',
            'contatoDesc': 'Estou aberto a novas oportunidades e propostas de colaboração.',
            'contatoLocal': 'Baseado em Curitiba - PR',
            'modalCVTitle': 'Escolha o idioma do currículo',
            'modalCVBtnPT': 'Português',
            'modalCVBtnEN': 'Inglês'
        },
        'en': {
            'navInicio': 'Home',
            'navExperiencia': 'Experience',
            'navProjetos': 'Projects',
            'navHabilidades': 'Skills',
            'navContato': 'Contact',
            'btnCV': 'Download CV',
            'heroSubtitle': 'Full Stack Developer',
            'heroTitle': 'I am Gustavo do Prado Partica',
            'heroDescription': 'I am seeking a Fullstack Developer position where I can leverage my complete expertise in the development lifecycle, from front-end (HTML, CSS, JavaScript/TypeScript, React) to back-end (Node.js, Python), to design and deliver robust, efficient, and scalable web solutions. My knowledge of Databases (SQL Server and NoSQL) and DevOps (Docker, Git/GitHub) allows me to contribute value at every stage of the project.',
            'heroButton': "Let's Talk",
            'titleExperiencia': 'Professional Experience',
            'expCargo': 'Support Analyst (Dev Focus)',
            'expData': '2023 - Present',
            'expEmpresa': 'FGVTN Brazil',
            'expDesc1': 'Fleet scheduling system project with Node.js/Express and MySQL.',
            'expDesc2': 'Development of an internal E-commerce system (Full Stack) with Python, HTML, CSS, and Javascript.',
            'expDesc3': 'Creation of a "Welcome" system for corporate TV (Python, HTML, CSS).',
            'expDesc4': 'Administration and maintenance of Windows Server and Active Directory (AD).',
            'expDesc5': 'Providing technical support (HelpDesk) to internal and external users.',
            'titleProjetos': 'Featured Projects',
            'proj1Title': 'SilverLimp - Institutional Site & Digital Catalog',
            'proj1Desc': 'Development of an institutional website focused on establishing the brand\'s visual identity and serving as a digital product catalog. Implemented responsive design with a focus on user experience (UX).',
            'proj1BtnVer': 'View Project',
            'proj1BtnRepo': 'Repository',
            'titleHabilidades': 'Skills and Education',
            'subtitleTecnologias': 'Technologies',
            'subtitleIdiomas': 'Languages',
            'idioma1': 'English',
            'idioma1Nivel': 'B2 Level (Upper-Intermediate)',
            'idioma2': 'Portuguese',
            'idioma2Nivel': 'Native',
            'subtitleFormacao': 'Academic Education',
            'formacao1': 'Postgraduate in Full Stack Development',
            'formacao1Local': 'FIAP (Faculdade de Informática e Administração Paulista)',
            'formacao1Data': 'Expected conclusion: April 2026',
            'formacao2': 'Technologist in Systems Analysis and Development',
            'formacao2Local': 'UP (Universidade Positivo)',
            'formacao2Data': 'Completed: 2023',
            'titleContato': "Let's Talk?",
            'contatoDesc': 'I am open to new opportunities and collaboration proposals.',
            'contatoLocal': 'Based in Curitiba - PR',
            'modalCVTitle': 'Choose the CV language',
            'modalCVBtnPT': 'Portuguese',
            'modalCVBtnEN': 'English'
        }
    };

    // 2. SELETORES
    const btnPT = document.getElementById('btn-pt');
    const btnEN = document.getElementById('btn-en');
    const cvModal = document.getElementById('cv-modal');
    const btnOpenModal = document.getElementById('btn-open-cv-modal');
    const btnCloseModal = document.getElementById('modal-close');

    // 3. FUNÇÃO DE MUDAR IDIOMA (Lógica robusta)
    const changeLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                
                // Lógica para botões com <span data-key="...">
                if (element.tagName === 'SPAN') {
                    element.textContent = translations[lang][key];
                } 
                // Lógica para botões com <a data-key="...">Texto <i..></a>
                else if (element.querySelector('i')) {
                    let textNode = Array.from(element.childNodes).find(node => node.nodeType === 3); // Node.TEXT_NODE
                    if (textNode) {
                        textNode.textContent = translations[lang][key] + ' '; // Adiciona espaço
                    }
                } 
                // Lógica para todos os outros (h1, p, li, etc.)
                else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Atualiza a classe 'active' nas bandeiras
        if (lang === 'pt') {
            btnPT.classList.add('active');
            btnEN.classList.remove('active');
        } else {
            btnPT.classList.remove('active');
            btnEN.classList.add('active');
        }
    };

    // 4. EVENT LISTENERS (IDIOMA)
    btnPT.addEventListener('click', (e) => {
        e.preventDefault(); 
        changeLanguage('pt');
    });

    btnEN.addEventListener('click', (e) => {
        e.preventDefault();
        changeLanguage('en');
    });

    // 5. EVENT LISTENERS (MODAL)
    btnOpenModal.addEventListener('click', (e) => {
        e.preventDefault(); 
        cvModal.classList.add('active');
    });

    btnCloseModal.addEventListener('click', () => {
        cvModal.classList.remove('active');
    });

    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) {
            cvModal.classList.remove('active');
        }
    });

    // 6. DEFINE O IDIOMA INICIAL
    changeLanguage('pt');
});