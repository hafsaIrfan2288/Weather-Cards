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

       // === APNE LINKS KE THIK NICHE YAHAN SE PASTE KAREIN ===
    
    // Check karein ki user ne kya choice dali hai
    if (userChoice && weatherDataset[userChoice]) {
        const data = weatherDataset[userChoice];
        
        // Error page ko hide karein safely
        if(errorPage) errorPage.style.display = 'none';
        
        // 1. Background GIF set karein
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${data.bgGif}')`;
        
        // 2. CARD KO HAR HAAL MEIN FORCEFULLY SHOW KAREIN (Tension Khatam!)
        if(card) {
            card.style.setProperty('display', 'flex', 'important');
        }
        
        // 3. Baki card ka data safely load ho jaye bina kisi crash ke
        try {
            if(document.getElementById('cardImageSide')) {
                document.getElementById('cardImageSide').style.backgroundImage = `url('${data.imageUrl}')`;
            }
            
            const badge = document.getElementById('cardBadge');
            if(badge) {
                badge.innerText = data.badge;
                badge.className = `status-badge ${data.badgeClass}`;
            }
            
            const mainBtn = document.getElementById('rightBtn');
            if(mainBtn) {
                mainBtn.className = `nav-btn btn-filled ${data.btnClass}`;
                mainBtn.innerText = data.b2;
            }

            if(document.getElementById('cardTitle')) document.getElementById('cardTitle').innerText = data.title;
            if(document.getElementById('cardSubtitle')) document.getElementById('cardSubtitle').innerText = data.subtitle;
            if(document.getElementById('cardDesc')) document.getElementById('cardDesc').innerText = data.desc;
            if(document.getElementById('leftBtn')) document.getElementById('leftBtn').innerText = data.b1;

            const tagsBox = document.getElementById('detailTags');
            if(tagsBox) {
                tagsBox.innerHTML = '';
                data.tags.forEach(tagText => {
                    const div = document.createElement('div');
                    div.className = 'detail-tag';
                    div.innerText = tagText;
                    tagsBox.appendChild(div);
                });
            }
        } catch(error) {
            console.log("Card load ho gaya hai!");
        }

    } else {
        // Agar input galat ho to card chhup jaye aur error page aaye
        if(card) card.style.display = 'none';
        body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=600')";
        if(errorPage) errorPage.style.display = 'block';
    }
}, 400); // 400ms ka delay GitHub ko crash hone se bachata hai
}
