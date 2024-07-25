function showInfo(area) {
    const images = {
        'campo_mourao': 'https://www.pexels.com/photo/aerial-photography-of-agricultural-field-1399307/',
        'palmeira': 'https://www.pexels.com/photo/landscape-photography-of-palm-trees-1528844/',
        'cascavel': 'https://www.pexels.com/photo/landscape-photography-of-rice-fields-1929759/',
        'londrina': 'https://www.pexels.com/photo/landscape-photography-of-agricultural-field-1929759/',
        'toledo': 'https://www.pexels.com/photo/landscape-photography-of-rice-fields-1929759/',
    };

    const texts = {
        'campo_mourao': 'Campo Mourão é uma cidade localizada na região noroeste do Paraná, conhecida por suas vastas áreas de cultivo de soja e milho. A agricultura é a principal atividade econômica da região, com grandes propriedades rurais dedicadas ao plantio de grãos e produção de alimentos.',
        'palmeira': 'Palmeira é um município situado na região central do Paraná, com uma economia baseada na agropecuária e agricultura. A cidade é famosa por suas plantações de feijão e milho, além de ser um importante centro de comercialização de produtos agrícolas.',
        'cascavel': 'Cascavel é um dos principais centros agrícolas do Paraná, destacando-se pelo cultivo de soja, milho e trigo. A região possui uma infraestrutura agrícola avançada e é conhecida por suas práticas inovadoras na agricultura e pecuária.',
        'londrina': 'Londrina é uma cidade com uma economia diversificada, incluindo um setor agrícola robusto. A cidade é famosa por suas plantações de café e grãos, além de ser um importante centro de pesquisa e desenvolvimento na área agrícola.',
        'toledo': 'Toledo é um município que se destaca na produção agrícola do Paraná, especialmente na soja e milho. A cidade possui uma forte presença no setor agroindustrial, com várias cooperativas e empresas dedicadas ao processamento e comercialização de produtos agrícolas.',
    };

    document.getElementById('info-image').src = images[area] || '';
    document.getElementById('info-text').textContent = texts[area] || 'Selecione uma área rural para ver mais informações.';
}
