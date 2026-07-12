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
            bgGif: 'https://i.pinimg.com/originals/72/e3/2f/72e32fa17cd963d8d5890d0178447120.gif', 
            imageUrl: 'https://images.unsplash.com/photo-1609650793481-55b352ac866a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlciUyMG5pZ2h0fGVufDB8fDB8fHww',
            badge: 'Winter Matrix', title: 'Glacial Calm', subtitle: 'Season of frost', 
            desc: 'Experience serene snowy mornings, freezing temperatures.', 
            tags: ['0°C Average', 'Heavy Snow'], b1: 'Statistics', b2: 'View Map'
        },
        summer: {
            badgeClass: 'color-summer', 
            btnClass: 'btn-summer',
            bgGif: 'https://i.pinimg.com/originals/94/a0/07/94a0071504a8b2faf77ae446c56df37a.gif', 
            imageUrl: 'https://i.pinimg.com/1200x/48/6f/d6/486fd682fd985b52fdb1d56130e96ee3.jpg',
            badge: 'Summer Core', title: 'Solar Energy', subtitle: 'Bright days', 
            desc: 'Enjoy clear blue horizons, coastal breeze, and bright outdoors.', 
            tags: ['34°C Average', 'Full Sun'], b1: 'Travel Alert', b2: 'Check UV'
        },
        rainy: {
            badgeClass: 'color-rainy', 
            btnClass: 'btn-rainy',
            bgGif: 'https://media.licdn.com/dms/image/v2/D5612AQGBlytd4cUncA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1688994204646?e=2147483647&v=beta&t=blK3dbuKTd2NEIEpXttA7tIM9wsIdx7uNUPJrHGethY', 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpSS6ZTh0hI71bXM7-3E3eq-X1wDw0M5vlJv2j-Hh5kOlUKK2YsfWdyU&s=10',
            badge: 'Monsoon Cycle', title: 'Rain Shower', subtitle: 'Precipitation', 
            desc: 'Listen to heavy raindrops hitting windows, highly refreshing climate.', 
            tags: ['24°C Average', '90% Rain'], b1: 'Precipitation', b2: 'Live Radar'
        },
        foggy: {
            badgeClass: 'color-foggy', 
            btnClass: 'btn-foggy',
            bgGif: 'https://i.pinimg.com/originals/41/f2/fb/41f2fbe7b4cbeab056f6fd46a15887c4.gif', 
            imageUrl: 'https://purple-cdn.web-apps-prod.wo-cloud.com/purple/0f7a645f-e3c1-4a9c-a6dd-ccfa5dff68a7/ccaeda65-166e-49c6-bbcd-ece973f0339c/044d6bce-2a3e-4eef-8d0d-88ff8b1681a9/1eb899e2-918a-421a-b3e2-3d9737e43221.jpeg',
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
