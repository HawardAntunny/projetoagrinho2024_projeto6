function showContent(section) {
    const images = {
        agricultura: 'img/plantio.jpeg',
        pecuaria: 'img/pecuaria.jpeg',
        artesanato: 'img/artesanato.jpeg',
        eventos: 'img/eventos.jpeg',
        turismo: 'img/turismo.jpeg'
    };

    const texts = {
        agricultura: 'A agricultura em Nova Londrina é uma parte vital da economia local. Os produtores trabalham em diversas culturas, desde grãos até hortaliças. As práticas agrícolas aqui são conhecidas por sua sustentabilidade e inovação.',
        pecuaria: 'A pecuária é outra atividade essencial na região. Nova Londrina é conhecida por suas fazendas de gado, onde técnicas modernas são aplicadas para garantir a saúde e produtividade do rebanho.',
        artesanato: 'O artesanato local é um reflexo da cultura rica e diversificada da região. Artesãos de Nova Londrina criam peças únicas, que vão desde produtos de cerâmica até tecidos tradicionais.',
        eventos: 'Nova Londrina realiza diversos eventos que celebram suas tradições e cultura. Desde feiras agrícolas até festivais locais, há sempre algo acontecendo para envolver a comunidade.',
        turismo: 'O turismo rural em Nova Londrina oferece uma experiência autêntica e imersiva. Os visitantes podem explorar as paisagens naturais, participar de atividades agrícolas e conhecer mais sobre a vida no campo.'
    };

    document.getElementById('info-image').src = images[section];
    document.getElementById('info-text').innerText = texts[section];
}
