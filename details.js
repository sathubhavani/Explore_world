/**
 * ExploreWorld Master Destination Database
 * Holds background imagery, long profiles, specialties, and tiered pricing.
 */
const destinationDatabase = {
    santorini: {
        title: "Santorini, Greece",
        subtitle: "Whitewashed coastal paradises draped elegantly across volcanic cliffs.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80",
        desc: "Santorini is the jewel of the Aegean Sea. Formed by one of the largest volcanic eruptions in recorded history, the island features unique architecture built directly into the sheer caldera cliffs face.",
        specialties: [
            { icon: "fa-solid fa-cloud-sun", title: "Caldera Sunsets", text: "World-famous golden hours viewed from the historic castle ruins of Oia." },
            { icon: "fa-solid fa-wine-glass", title: "Volcanic Vineyards", text: "Wine-tasting tours exploring ancient Assyrtiko grapes grown in unique ash-rich soil." },
            { icon: "fa-solid fa-sailboat", title: "Catamaran Sailing", text: "Private daytime cruises to hidden red and black volcanic sand beach shores." },
            { icon: "fa-solid fa-archway", title: "Cycladic Design", text: "Stays inside authentic white-washed cave houses carved seamlessly into stone." }
        ],
        costs: [ { item: "Boutique Caldera Suite", price: 750 }, { item: "Private Catamaran Cruise", price: 240 }, { item: "Fine Mediterranean Dining", price: 180 }, { item: "Local Transit & Guides", price: 120 } ],
        total: "$1,290"
    },
    kyoto: {
        title: "Kyoto, Japan",
        subtitle: "The historic heart of traditional Japanese culture, shrines, and bamboo forests.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80",
        desc: "Kyoto offers a serene escape into historical Japan. Boasting thousands of classical Buddhist temples, gardens, imperial palaces, and traditional wooden merchant houses, it retains an atmosphere of timeless elegance.",
        specialties: [
            { icon: "fa-solid fa-tree", title: "Bamboo Forest Trails", text: "Early morning therapeutic walks through towering, whispering bamboo groves in Arashiyama." },
            { icon: "fa-solid fa-torii-gate", title: "Torii Gate Shrines", text: "The iconic mountain hike winding through thousands of vermilion gates at Fushimi Inari." },
            { icon: "fa-solid fa-mug-saucer", title: "Matcha Ceremonies", text: "Authentic, meditative tea rituals hosted by local master artisans in quiet wooden tea houses." },
            { icon: "fa-solid fa-person-dress", title: "Gion Heritage Walk", text: "Evening excursions through flagstone lantern-lit streets rich with geisha culture history." }
        ],
        costs: [ { item: "Luxury Ryokan Stay", price: 980 }, { item: "Artisanal Kaiseki Dinners", price: 380 }, { item: "Private Temple Curator Tour", price: 300 }, { item: "Bullet Train Transfers", price: 180 } ],
        total: "$1,840"
    },
    goa: {
        title: "Goa, India",
        subtitle: "Sunkissed golden coastlines intertwined with vibrant Portuguese colonial heritage.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=80",
        desc: "Stretching along the Arabian Sea, Goa blends scenic tropical beauty with a laid-back, rich lifestyle. Known for historic architecture, spice farms, and diverse coastal options, it caters perfectly to both relaxation and high energy.",
        specialties: [
            { icon: "fa-solid fa-umbrella-beach", title: "Unexplored Beaches", text: "Quiet retreat spaces hidden down south away from common foot traffic lanes." },
            { icon: "fa-solid fa-church", title: "Latin Quarter Architecture", text: "Guided walking trips exploring bright pastel, historic Portuguese villas in Panjim." },
            { icon: "fa-solid fa-pepper-hot", title: "Spice Plantations", text: "Sensory walking tours tracking raw vanilla, cardamon and cocoa farms with local lunches." },
            { icon: "fa-solid fa-shrimp", title: "Seafood Gastronomy", text: "Beachside culinary shacks making rich, fresh, traditional coconut-infused curry dishes." }
        ],
        costs: [ { item: "Heritage Beach Villa", price: 210 }, { item: "Spice Plantation Charter", price: 60 }, { item: "Coastal Seafood Dining", price: 100 }, { item: "Private Vehicle Hire", price: 80 } ],
        total: "$450"
    },
    maldives: {
        title: "The Maldives",
        subtitle: "An idyllic paradise of low-lying coral islands scattered across the Indian Ocean.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=80",
        desc: "The Maldives is synonymous with luxury, isolation, and unparalleled marine environments. Comprising 26 natural atolls, this geographic marvel sits perfectly atop a vast underwater mountain range, creating crystal clear lagoons protected from strong open ocean waves.",
        specialties: [
            { icon: "fa-solid fa-house-chimney-water", title: "Overwater Living", text: "Architectural wonders offering direct private ladder entry straight into live, pulsing coral reefs." },
            { icon: "fa-solid fa-fish-fins", title: "Marine Architecture", text: "Home to Baa Atoll, a UNESCO Biosphere Reserve hosting thousands of manta rays and whale sharks." },
            { icon: "fa-solid fa-utensils", title: "Sub-Aquatic Dining", text: "World-renowned restaurants situated five meters beneath the sea surface with panoramic glass views." },
            { icon: "fa-solid fa-umbrella-beach", title: "Private Sandbanks", text: "Curated experiences where an entire micro-island is booked exclusively for your afternoon dining." }
        ],
        costs: [ { item: "Luxury Overwater Lodge", price: 1650 }, { item: "Seaplane Island Transfers", price: 440 }, { item: "Guided Coral Snorkel Excursion", price: 350 }, { item: "All-Inclusive Resort Dining", price: 350 } ],
        total: "$2,790"
    },
    bali: {
        title: "Bali, Indonesia",
        subtitle: "Emerald terrace rice fields, mist-veiled temples, and pristine surf cliffs.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
        desc: "Famously known as the Island of the Gods, Bali attracts travelers via highly varied landscapes. From peaceful volcanic jungle valleys in the interior to dramatic sunset sea cliffs along the southern edge, it radiates authentic spirituality.",
        specialties: [
            { icon: "fa-solid fa-seedling", title: "Emerald Rice Terraces", text: "Sunrise valley walks checking historic Subak irrigation systems in Tegalalang." },
            { icon: "fa-solid fa-mountain", title: "Volcanic Hikes", text: "Pre-dawn guided ascents up Mount Batur to catch morning breaks above cloudy blankets." },
            { icon: "fa-solid fa-om", title: "Clifftop Sea Temples", text: "Experiencing traditional Kecak fire dances backdropped by ocean horizons at Uluwatu." },
            { icon: "fa-solid fa-spa", title: "Holistic Eco-Resorts", text: "Wellness structures made entirely of sustainable bamboo materials integrated into jungles." }
        ],
        costs: [ { item: "Jungle Pool Private Villa", price: 480 }, { item: "Mount Batur Trek & Tour", price: 120 }, { item: "Organic Wellness Meals", price: 140 }, { item: "Private Chauffeur Escort", price: 150 } ],
        total: "$890"
    },
    paris: {
        title: "Paris, France",
        subtitle: "Timeless neoclassical boulevards, unparalleled artwork galleries, and romantic bistros.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80",
        desc: "Paris remains a global epicenter for fashion, fine culinary arts, architecture, and art history. Wandering its broad cobblestone avenues means tracing the steps of legendary creatives along the banks of the River Seine.",
        specialties: [
            { icon: "fa-solid fa-palette", title: "VIP Museum Galleries", text: "After-hours curated entries into the Louvre or Musée d'Orsay escaping major tourist lines." },
            { icon: "fa-solid fa-bread-slice", title: "Artisanal Baking Courses", text: "Hands-on masterclasses matching you with French chefs to bake hot croissants and baguettes." },
            { icon: "fa-solid fa-ship", title: "Seine River Dinner Cruises", text: "Sailing under historic glowing architectural arches while eating multi-course classic French menus." },
            { icon: "fa-solid fa-champagne-glasses", title: "Secret Rooftop Lounges", text: "Sipping drinks atop hidden city balconies looking directly onto the sparkling Eiffel Tower." }
        ],
        costs: [ { item: "Haussmann Hotel Suite", price: 690 }, { item: "Private Museum Curator Tour", price: 260 }, { item: "Seine River Cruise Seating", price: 220 }, { item: "Michelin Guide Dinners", price: 180 } ],
        total: "$1,350"
    }
};

/**
 * Page Setup Engine
 * Parses the query parameter from URL and updates DOM nodes dynamically.
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Analyze target destination key out of browser URL query string (?goto=xyz)
    const urlParams = new URLSearchParams(window.location.search);
    const targetKey = urlParams.get("goto");

    // 2. Fetch dataset record with fallback safeguard protection (defaults to santorini if missing)
    const data = destinationDatabase[targetKey] || destinationDatabase.santorini;

    // 3. Document Node Dynamic Text Injection
    document.title = `${data.title} Profile | ExploreWorld`;
    document.getElementById("destTitle").innerText = data.title;
    document.getElementById("destSubtitle").innerText = data.subtitle;
    document.getElementById("destLongDesc").innerText = data.desc;
    document.getElementById("costTotalDisplay").innerHTML = `${data.total} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">/pp</span>`;

    // 4. Update Hero Backsplash Graphics smoothly
    const dynamicHero = document.getElementById("dynamicHero");
    if (dynamicHero) {
        dynamicHero.style.backgroundImage = `linear-gradient(rgba(4, 13, 26, 0.2), rgba(4, 13, 26, 0.95)), url('${data.image}')`;
    }

    // 5. Render Specialties Interface Loop
    const specContainer = document.getElementById("specGridContainer");
    if (specContainer) {
        specContainer.innerHTML = data.specialties.map(spec => `
            <div class="spec-item">
                <h4><i class="${spec.icon}" style="color: var(--accent-orange);"></i> ${spec.title}</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${spec.text}</p>
            </div>
        `).join('');
    }

    // 6. Render Cost Metrics Breakdown Row Loop
    const costContainer = document.getElementById("costItemsContainer");
    if (costContainer) {
        costContainer.innerHTML = data.costs.map(c => `
            <div class="cost-row">
                <span>${c.item}</span>
                <strong>$${c.price}</strong>
            </div>
        `).join('');
    }
});
