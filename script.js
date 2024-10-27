var informacoes = [
    {
        titulo: "Topografia",
        descricao: "Levantamentos topográficos completos para mapeamento detalhado de terrenos, oferecendo precisão em medições e representações. Locação de obras para garantir o correto posicionamento de construções, respeitando as normas e especificações técnicas."
    },
    { 
        titulo: "Projetos  de Saneamento", 
        descricao: "Desenvolvimento de projetos completos de saneamento, abrangendo sistemas de abastecimento de água e coleta de esgoto sanitário. Elaboração de Estações Elevatórias de Esgoto (E.E.E.) e projetos de drenagem eficiente para o controle de águas pluviais, garantindo soluções sustentáveis e eficazes."
    },
    { 
        titulo: "Projetos  de Terraplanagem", 
        descricao: "Desenvolvimento de projetos de terraplanagem detalhados, incluindo especificações precisas de corte, aterro e cálculo de volumes. Garantimos soluções técnicas adequadas para nivelamento de terrenos, otimizando o uso do espaço e facilitando o processo construtivo." 
    },
    { 
        titulo: "Gerenciamento e Execução de obras", 
        descricao: "Gerenciamento completo de obras em loteamentos, assegurando o cumprimento de prazos, qualidade e orçamento. Execução de sistemas de drenagem, terraplanagem, redes de abastecimento de água e esgoto, com foco em eficiência e conformidade com as normas técnicas." 
    },
    { 
        titulo: "Drone", 
        descricao: "Desenvolvimento de projetos de terraplanagem detalhados, incluindo especificações precisas de corte, aterro e cálculo de volumes. Garantimos soluções técnicas adequadas para nivelamento de terrenos, otimizando o uso do espaço e facilitando o processo construtivo." 
    },
    { 
        titulo: "Estudo de Tráfego de rodovias", 
        descricao: "Desenvolvimento de estudos de tráfego rodoviário com análise detalhada de fluxo de veículos, visando a obtenção de aprovações junto às concessionárias e à ARTESP. Garantimos conformidade com as exigências legais e técnicas, otimizando a segurança e a eficiência das rodovias." 
    }
];

const serviceOption = document.getElementById("serviceOption");

informacoes.forEach((info, index) => {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("service-available");

    if (index === 0) {
        infoDiv.id = "topograph";
    }

    const whatsappText = `Olá, gostaria de conhecer mais sobre ${info.titulo}`;
    const whatsappLink = `https://wa.me/SEU_NUMERO_DE_TELEFONE?text=${encodeURIComponent(whatsappText)}`;

    infoDiv.innerHTML = `
        <div class=' container service-available-container flex-column flex-md-row w-100'>
            <div class='service-available_content'>
                <h2 class="service-available_title fw-bold">${info.titulo}</h2>
                <p class="service-available_describe">${info.descricao}</p>
            </div>
            <a class="button-service" href="${whatsappLink}" target="_blank">Consultar 
            <span class="material-icons">
                arrow_forward
            </span></a>
        </div>
    `;

    serviceOption.appendChild(infoDiv);
});



const teamMembers = [
    { nome: "João Batista Pereira", 
        cargo: "Proprietário" , 
        descricao:"Formado em Engenharia Agronômica pela Universidade do Oeste Paulista (UNOESTE) em 2004, com especialização em Agrimensura pela ETEC Professor Eufrásio de Toledo, concluído em 2013, o profissional possui ampla experiência nas áreas de agronomia e topografia. Atuando com competência em projetos que envolvem envolvimento e levantamentos, busca oferecer soluções precisas e eficientes. Com forte base técnica e foco em resultados, está sempre comprometido em garantir a excelência nos serviços prestados.",
        foto:"img/joaoBatista.png"
    },
    { nome: "Anderson Santos Camargo", cargo: "Proprietário",
        foto:"img/anderson.png",
    }
];

const container = document.getElementById('team-card-container');

teamMembers.forEach(member => {
    const cardContent = document.createElement('div');
    cardContent.className = 'team-card_content d-flex flex-column';
    cardContent.innerHTML = `
        <div class="team-card">
            <img src="${member.foto}" alt="${member.nome}">
        </div>
        <h3 class="team-name">${member.nome}</h3>
        <span class="team-profision">${member.cargo}</span>
        <button class="button-service button-service-forms" 
            data-name="${member.nome}" 
            data-descricao="${member.descricao}"
            data-foto="${member.foto}"
            >
            Mais informações
        </button>
    `;
    container.appendChild(cardContent);
});

const modal = document.getElementById('teamModal');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const modalFoto = document.getElementById('modal-foto');

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('button-service-forms')) {
        const name = event.target.getAttribute('data-name');
        const descricao = event.target.getAttribute('data-descricao');
        const foto = event.target.getAttribute('data-foto');

        modalName.textContent = name;
        modalDescription.textContent = descricao;
        modalFoto.src = foto;
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    }
});
document.getElementById('close-modal').addEventListener('click', function() {
    const bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide(); 
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var isValid = true;

    this.querySelectorAll('input, textarea').forEach(function (input) {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});