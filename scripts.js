function showInfo(area) {
    const images = {
        'campo_mourao': {
            top1: 'img/campo1.jpeg',
            top2: 'img/campo2.jpeg',
            bottom1: 'img/campo3.jpeg',
            bottom2: 'img/campo4.jpeg'
        },
        'palmeira': {
            top1: 'img/palmeira1.jpeg',
            top2: 'img/palmeira2.jpeg',
            bottom1: 'img/palmeira3.jpeg',
            bottom2: 'img/palmeira4.jpeg'
        },
        'cascavel': {
            top1: 'img/cascavel1.jpeg',
            top2: 'img/cascavel2.jpeg',
            bottom1: 'img/cascavel3.jpeg',
            bottom2: 'img/cascavel4.jpeg'
        },
        'londrina': {
            top1: 'img/londrina1.jpeg',
            top2: 'img/londrina2.jpeg',
            bottom1: 'img/londrina3.jpeg',
            bottom2: 'img/londrina4.jpeg'
        },
        'toledo': {
            top1: 'img/toledo1.jpeg',
            top2: 'img/toledo2.jpeg',
            bottom1: 'img/toledo3.jpeg',
            bottom2: 'img/toledo4.jpeg'
        }
    };

    const texts = {
        'campo_mourao': 'Campo Mourão é uma cidade localizada na região noroeste do Paraná, conhecida por suas vastas áreas de cultivo de soja e milho. A agricultura é a principal atividade econômica da região, com grandes propriedades rurais dedicadas ao plantio de grãos e produção de alimentos.',
        'palmeira': 'Palmeira é um município situado na região central do Paraná, com uma economia baseada na agropecuária e agricultura. A cidade é famosa por suas plantações de feijão e milho, além de ser um importante centro de comercialização de produtos agrícolas.',
        'cascavel': 'Cascavel é um dos principais centros agrícolas do Paraná, destacando-se pelo cultivo de soja, milho e trigo. A região possui uma infraestrutura agrícola avançada e é conhecida por suas práticas inovadoras na agricultura e pecuária.',
        'londrina': 'Londrina é uma cidade com uma economia diversificada, incluindo um setor agrícola robusto. A cidade é famosa por suas plantações de café e grãos, além de ser um importante centro de pesquisa e desenvolvimento na área agrícola.',
        'toledo': 'Toledo é um município que se destaca na produção agrícola do Paraná, especialmente na soja e milho. A cidade possui uma forte presença no setor agroindustrial, com várias cooperativas e empresas dedicadas ao processamento e comercialização de produtos agrícolas.'
    };

    document.getElementById('info-image-top1').src = images[area].top1 || '';
    document.getElementById('info-image-top2').src = images[area].top2 || '';
    document.getElementById('info-image-bottom1').src = images[area].bottom1 || '';
    document.getElementById('info-image-bottom2').src = images[area].bottom2 || '';
    document.getElementById('info-text').textContent = texts[area] || 'Selecione uma área rural para ver mais informações.';
}
