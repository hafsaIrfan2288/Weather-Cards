const userChoice = prompt("Choose weather mood:\n- winter\n- summer\n- rainy\n- foggy");

        const card = document.getElementById('weatherCard');
        const errorPage = document.getElementById('errorPage');
        const body = document.body;

        const weatherDataset = {
            winter: {
                badgeClass: 'color-winter',
                btnClass: 'btn-winter',
                bgGif: 'https://i.pinimg.com/originals/72/e3/2f/72e32fa17cd963d8d5890d0178447120.gif' ,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlpTrbcaqLHhv6o2OKKCxKLPXCaC0BSJhLB2Nyjwiog&s=10' ,
                badge: 'Winter Matrix',
                title: 'Glacial Calm',
                subtitle: 'Season of frost and white landscapes',
                desc: 'Experience serene snowy mornings, freezing temperatures, and comfortable warm indoor setups perfect for productivity.',
                tags: ['0°C Average', 'Heavy Snow', 'Low UV Index'],
                b1: 'Statistics',
                b2: 'View Map'
            },
            summer: {
                badgeClass: 'color-summer',
                btnClass: 'btn-summer',
                bgGif: 'https://i.pinimg.com/originals/94/a0/07/94a0071504a8b2faf77ae446c56df37a.gif' ,
                imageUrl: 'https://i.pinimg.com/1200x/48/6f/d6/486fd682fd985b52fdb1d56130e96ee3.jpg' ,
                badge: 'Summer Core',
                title: 'Beach Time',
                subtitle: 'Long days with high solar intensity',
                desc: 'Enjoy clear blue horizons, extreme warmth, coastal breeze, and bright lively outdoors perfect for exploration.',
                tags: ['34°C Average', 'Full Sun', 'High Humidity'],
                b1: 'Travel Alert',
                b2: 'Check UV'
            },
            rainy: {
                badgeClass: 'color-rainy',
                btnClass: 'btn-rainy',
                bgGif: 'https://animesher.com/orig/2/213/2130/21301/animesher.com_gif-anime-background-rain-2130197.gif' ,
                imageUrl: 'https://img.magnific.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_hybrid&w=740&q=80',
                badge: 'Monsoon Cycle',
                title: 'Rain Shower',
                subtitle: 'Precipitation and vibrant nature',
                desc: 'Listen to heavy raindrops hitting windows, highly refreshing climate, humid air, and blooming green environments.',
                tags: ['24°C Average', '90% Rain', 'Fresh Air'],
                b1: 'Precipitation',
                b2: 'Live Radar'
            },
            foggy: {
                badgeClass: 'color-foggy',
                btnClass: 'btn-foggy',
                bgGif: 'https://i.pinimg.com/originals/29/9f/38/299f387c22dcf938ddd553f1e8d99d45.gif' ,
                imageUrl: 'https://images.stockcake.com/public/e/2/7/e272569f-255c-4fe5-bdb1-a33fa2cae436_large/foggy-street-morning-stockcake.jpg',
                badge: 'Misty Horizon',
                title: 'Dense Fog',
                subtitle: 'Low atmospheric visibility',
                desc: 'A mysterious and completely quiet atmosphere. Perfect calm morning walks with mist covered streets and cold air.',
                tags: ['12°C Average', 'Foggy Cover', 'Zero Wind'],
                b1: 'Visibility Report',
                b2: 'Safety Rules'
            }
        };

        if (userChoice && weatherDataset[userChoice.toLowerCase().trim()]) {
            const data = weatherDataset[userChoice.toLowerCase().trim()];
            
            
            body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${data.bgGif}')`;
            
            
            document.getElementById('cardImageSide').style.backgroundImage = `url('${data.imageUrl}')`;
            
            
            const badge = document.getElementById('cardBadge');
            badge.innerText = data.badge;
            badge.className = `status-badge ${data.badgeClass}`;
            
            const mainBtn = document.getElementById('rightBtn');
            mainBtn.className = `nav-btn btn-filled ${data.btnClass}`;

            
            document.getElementById('cardTitle').innerText = data.title;
            document.getElementById('cardSubtitle').innerText = data.subtitle;
            document.getElementById('cardDesc').innerText = data.desc;
            document.getElementById('leftBtn').innerText = data.b1;
            mainBtn.innerText = data.b2;

            
            const tagsBox = document.getElementById('detailTags');
            tagsBox.innerHTML = '';
            data.tags.forEach(tagText => {
                const div = document.createElement('div');
                div.className = 'detail-tag';
                div.innerText = tagText;
                tagsBox.appendChild(div);
            });

            } else {
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://www.shutterstock.com/image-illustration/abstract-beautiful-blue-neon-404-260nw-2691720719.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    
    errorPage.style.display = 'block';
}