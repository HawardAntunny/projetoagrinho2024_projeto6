// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const infoImage = document.getElementById('info-image');
    const infoText = document.getElementById('info-text');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const info = button.getAttribute('data-info');
            
            // Mapeamento dos textos e imagens para cada etapa
            const content = {
                'preparacao': {
                    image: 'img/preparacao.jpeg',
                    text: 'Preparação do solo é a fase inicial crucial para garantir uma plantação saudável e produtiva. Envolve análise do solo, adubação e preparação para o plantio.'
                },
                'plantio': {
                    image: 'img/plantio.jpeg',
                    text: 'O plantio é o momento de semear as sementes no solo preparado. Deve ser feito com precisão para garantir a germinação e o crescimento adequado das plantas.'
                },
                'irrigacao': {
                    image: 'img/irrigacao.jpeg',
                    text: 'A irrigação é essencial para fornecer água suficiente às plantas. Deve ser bem planejada para atender às necessidades específicas de cada tipo de planta.'
                },
                'monitoramento': {
                    image: 'img/monitoramento.jpeg',
                    text: 'O monitoramento contínuo das plantas permite a detecção precoce de problemas como pragas e doenças. Medidas corretivas devem ser tomadas para garantir a saúde das plantas.'
                },
                'colheita': {
                    image: 'img/colheita.jpeg',
                    text: 'A colheita é a etapa final do ciclo produtivo, onde os produtos são recolhidos. Deve ser realizada no momento certo para assegurar a melhor qualidade e sabor dos produtos.'
                }
            };

            infoImage.src = content[info].image;
            infoText.textContent = content[info].text;
        });
    });
});
