const videoConteiners = document.querySelectorAll('.divideo'); //para selecionar todos os containers com o nome "divideo"

videoConteiners.forEach((container) => {
    //para selecionar as "img" e "iframe" e criar uma variavel que coloca essas tags nela para eu trabalhar com elas
    const img = container.querySelector('img');
    const iframe = container.querySelector('iframe');

    //para "ouvir" quando o user passar o mouse na div (o tittlecard)
    container.addEventListener('mouseenter', () => {
        const videoId = container.getAttribute('data-video-id');
    
        if(videoId && videoId.trim() !== ' ')
        {
            if(!iframe.src)
            {
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
            }

            img.style.display = 'none';
            iframe.style.display = 'block';
        }
    });

    // Esconde o iframe e volta a mostrar o tittlecard
    container.addEventListener('mouseleave', () => {
        iframe.style.display = 'none';
        img.style.display = 'block';
    })

})