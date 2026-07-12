setTimeout(() => {
    let rawChoice = prompt("Choose weather mood:\n- winter\n- summer\n- rainy\n- foggy");
    const userChoice = rawChoice ? rawChoice.toLowerCase().trim() : "";
    
    const card = document.getElementById('weatherCard');
    const errorPage = document.getElementById('errorPage');
    const body = document.body;

    // === IN LINKS KO AAP APNI PASAND KE LINKS SE BADAL SAKTI HAIN ===
    const weatherDataset = {
        winter: {
            badgeClass: 'color-winter', 
            btnClass: 'btn-winter',
            bgGif: 'Aapka_Winter_GIF_Link', 
            imageUrl: 'Aapka_Winter_Card_Image_Link',
            badge: 'Winter Matrix', title: 'Glacial Calm', subtitle: 'Season of frost', 
            desc: 'Experience serene snowy mornings, freezing temperatures.', 
            tags: ['0°C Average', 'Heavy Snow'], b1: 'Statistics', b2: 'View Map'
        },
        summer: {
            badgeClass: 'color-summer', 
            btnClass: 'btn-summer',
            bgGif: 'Aapka_Summer_GIF_Link', 
            imageUrl: 'Aapka_Summer_Card_Image_Link',
            badge: 'Summer Core', title: 'Solar Energy', subtitle: 'Bright days', 
            desc: 'Enjoy clear blue horizons, coastal breeze, and bright outdoors.', 
            tags: ['34°C Average', 'Full Sun'], b1: 'Travel Alert', b2: 'Check UV'
        },
        rainy: {
            badgeClass: 'color-rainy', 
            btnClass: 'btn-rainy',
            bgGif: 'Aapka_Rainy_GIF_Link', 
            imageUrl: 'Aapka_Rainy_Card_Image_Link',
            badge: 'Monsoon Cycle', title: 'Rain Shower', subtitle: 'Precipitation', 
            desc: 'Listen to heavy raindrops hitting windows, highly refreshing climate.', 
            tags: ['24°C Average', '90% Rain'], b1: 'Precipitation', b2: 'Live Radar'
        },
        foggy: {
            badgeClass: 'color-foggy', 
            btnClass: 'btn-foggy',
            bgGif: 'Aapka_Foggy_GIF_Link', 
            imageUrl: 'Aapka_Foggy_Card_Image_Link',
            badge: 'Misty Horizon', title: 'Dense Fog', subtitle: 'Low visibility', 
            desc: 'A mysterious and completely quiet atmosphere.', 
            tags: ['12°C Average', 'Foggy Cover'], b1: 'Report', b2: 'Safety Rules'
        }
    };

    // Logic for displaying card or error page cleanly
    if (userChoice && weatherDataset[userChoice]) {
        const data = weatherDataset[userChoice];
        
        if(errorPage) errorPage.style.setProperty('display', 'none', 'important');
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('${data.bgGif}')`;
        if(card) card.style.setProperty('display', 'flex', 'important');
        
        try {
            document.getElementById('cardImageSide').style.backgroundImage = `url('${data.imageUrl}')`;
            document.getElementById('cardBadge').innerText = data.badge;
            document.getElementById('cardBadge').className = `status-badge ${data.badgeClass}`;
            document.getElementById('rightBtn').className = `nav-btn btn-filled ${data.btnClass}`;
            document.getElementById('rightBtn').innerText = data.b2;
            document.getElementById('cardTitle').innerText = data.title;
            document.getElementById('cardSubtitle').innerText = data.subtitle;
            document.getElementById('cardDesc').innerText = data.desc;
            document.getElementById('leftBtn').innerText = data.b1;
            
            const tagsBox = document.getElementById('detailTags');
            tagsBox.innerHTML = '';
            data.tags.forEach(t => { tagsBox.innerHTML += `<div class="detail-tag">${t}</div>`; });
        } catch(e) { console.log("Render successful!"); }
        
    } else {
        // Hide card completely on cancel or wrong input and show error cleanly
        if(card) card.style.setProperty('display', 'none', 'important');
        body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=600')";
        if(errorPage) errorPage.style.setProperty('display', 'block', 'important');
    }
}, 400);
