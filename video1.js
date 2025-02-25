let videoData = [
    {
       url: 'https://javct.net/v/start-245-rm',
            title: '[START-245] “Nonstop sex with MINAMO” From morning till night, continuous big dick instant insertion sex', 
            category: 'All,JAV',
            tags: 'minamo', 
            thumbnail: 'https://cdn.javsts.com/wp-content/uploads/2025/02/1start245pl.jpg', 
    }
];

let gallery = document.querySelector('.gallery');
videoData.forEach(video => {
    let container = document.createElement('div');
    container.className = 'video';
    container.dataset.category = video.category;
    container.dataset.tags = video.tags;

    let img = document.createElement('img');
    img.src = video.thumbnail;
    img.alt = video.title;
    img.onclick = () => openPlayer(video.url);

    let title = document.createElement('span');
    title.className = 'video-title';
    title.textContent = video.title;

    container.appendChild(img);
    container.appendChild(title);
    gallery.appendChild(container);
});
