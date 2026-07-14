function revealCards() {

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';

        }

    });

}

window.addEventListener('scroll', revealCards);

window.addEventListener('load', revealCards);


/* ================= GALLERY FILTER ================= */

const filterButtons = document.querySelectorAll('.filter-btn');
const subButtons = document.querySelectorAll(".sub-filter-btn");

const galleryGrid = document.querySelector('.gallery-grid');

const galleryCards = Array.from(
    document.querySelectorAll('.gallery-card')
);

if (filterButtons.length && galleryGrid) {

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            /* REMOVE ACTIVE */

            filterButtons.forEach(btn => {

                btn.classList.remove('active');

            });

            button.classList.add('active');

            /* FILTER TYPE */

            const filter = button.getAttribute('data-filter');
            const subMenu=document.querySelector(".mechanical-subfilters");

            if (filter === "mechanical") {

                subMenu.style.display = "flex";

                /* Reset to All every time Mechanical is opened */

                subButtons.forEach(btn => btn.classList.remove("active"));

                const allBtn = document.querySelector('.sub-filter-btn[data-sub="all"]');

                if (allBtn) {

                    allBtn.classList.add("active");

                }

            } else {

                subMenu.style.display = "none";

            }


            galleryGrid.innerHTML = '';

            let filteredCards = [];

            /* ================= ALL ================= */
            if (filter === "all") {

                const craneCards = galleryCards.filter(card =>
                    card.dataset.category === "cranes"
                );

                const mechanicalCards = galleryCards.filter(card =>
                    card.dataset.category === "mechanical"
                );

                const civilCards = galleryCards.filter(card =>
                    card.dataset.category === "civil"
                );

                const girderCards = galleryCards.filter(card =>
                    card.dataset.category === "girders"
                );

                const maxLength = Math.max(
                    craneCards.length,
                    mechanicalCards.length,
                    civilCards.length,
                    girderCards.length
                );

                for (let i = 0; i < maxLength; i++) {

                    if (craneCards[i]) {
                        filteredCards.push(craneCards[i]);
                    }

                    if (mechanicalCards[i]) {
                        filteredCards.push(mechanicalCards[i]);
                    }

                    if (civilCards[i]) {
                        filteredCards.push(civilCards[i]);
                    }

                    if (girderCards[i]) {
                        filteredCards.push(girderCards[i]);
                    }

                }

            }

            /* ================= CRANES ================= */

            else if (filter === "cranes") {

                filteredCards = galleryCards.filter(card =>
                    card.dataset.category === "cranes"
                );

            }

            /* ================= CIVIL ================= */

            else if (filter === "civil") {

                filteredCards = galleryCards.filter(card =>
                    card.dataset.category === "civil"
                );

            }

            /* ================= MECHANICAL ================= */

            else if (filter === "mechanical") {

                filteredCards = galleryCards.filter(card =>
                    card.dataset.category === "mechanical"
                );

                galleryGrid.innerHTML = "";

                filteredCards.forEach((card, index) => {

                    card.style.opacity = "0";

                    card.style.transform = "translateY(50px)";

                    galleryGrid.appendChild(card);

                    setTimeout(() => {

                        card.style.opacity = "1";

                        card.style.transform = "translateY(0)";

                    }, index * 80);

                });

                return;

            }

            /* ================= GIRDERS ================= */

            else if (filter === "girders") {

                filteredCards = galleryCards.filter(card =>
                    card.dataset.category === "girders"
                );

            }

            /* ================= APPEND FILTERED ================= */

            filteredCards.forEach((card, index) => {

                card.style.opacity = '0';

                card.style.transform = 'translateY(50px)';

                galleryGrid.appendChild(card);

                setTimeout(() => {

                    card.style.opacity = '1';

                    card.style.transform = 'translateY(0)';

                }, index * 80);

            });

        });

    });

}
/* ================= MECHANICAL SUB FILTER ================= */


subButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        subButtons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const type = btn.dataset.sub;

        galleryGrid.innerHTML = "";

        let cards = [];

        if (type === "all") {

            cards = galleryCards.filter(card =>
                card.dataset.category === "mechanical"
            );

        } else {

            cards = galleryCards.filter(card =>
                card.dataset.category === "mechanical" &&
                card.dataset.subcategory === type
            );

        }

        cards.forEach((card, index) => {

            card.style.opacity = "0";
            card.style.transform = "translateY(50px)";

            galleryGrid.appendChild(card);

            setTimeout(() => {

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }, index * 80);

        });

    });

});

/* ================= INITIAL GALLERY LOAD ================= */

window.addEventListener('load', () => {

    galleryCards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add('show');

        }, index * 100);

    });

});

/* ================= SAFE CONTACT FORM ================= */

// const form = document.getElementById('contactForm');

// if (form) {

//     form.addEventListener('submit', (e) => {

//         e.preventDefault();

//     });

// }


/* ================= FORCE INITIAL REVEAL ================= */

window.dispatchEvent(new Event('scroll'));
/* ================= SERVICE DETAILS ================= */

const services = {

    mechanical: {

        title: "Mechanical Works",

        description:
            "SBI Group provides reliable and high-quality mechanical engineering solutions for industrial, commercial, and infrastructure projects. Our expertise includes fabrication, piping, structural erection, machinery installation, equipment alignment, and industrial maintenance. We are committed to delivering precision, safety, and efficiency while maintaining the highest industry standards and ensuring timely project completion.\n\nESP (Electrostatic Precipitator) Works: We specialize in ESP works for sponge iron plants, including fabrication, installation, structural erection, maintenance, and shutdown support. Our experienced team ensures efficient dust collection systems, reduced emissions, improved plant performance, and full compliance with environmental and industrial safety standards.",

        features: [
            "Fabrication",
            "Structural Erection",
            "Alignment",
            "Industrial Maintenance",
            "ESP Works for Sponge Iron Plants",
            "Machinery Installation"
        ],

        images: [
            "images/mechanicalworks/IMG-20260713-WA0031.jpg",
            "images/mechanicalworks/WhatsApp Image 2026-06-05 at 16.58.14 (4).jpeg",            
            "images/esp.jpg",
            "images/esp 2.jpg"
        ]

    },

    construction: {

        title: "Civil Construction",

        description:
            "SBI Group delivers comprehensive civil construction solutions for industrial, commercial, and infrastructure projects. Our expertise includes site development, foundations, RCC works, structural construction, industrial buildings, warehouses, roads, drainage systems, and infrastructure development. We are committed to delivering durable, high-quality, and cost-effective construction solutions while adhering to the highest standards of safety, quality, and timely project execution.\n\nOur civil construction team specializes in executing large-scale industrial projects with precision and efficiency. From planning and excavation to structural completion and finishing works, we ensure every project is completed using modern construction techniques, premium materials, and strict quality control measures to meet client expectations and industry standards.",

        features: [
            "Industrial Building Construction",
            "RCC & Foundation Works",
            "Structural Construction",
            "Warehouse Construction",
            "Road & Drainage Works",
            "Infrastructure Development"
        ],
        images: [
            "images/civilpics/apartment-building-construction.jpg",
            "images/civilpics/apartment-construction-works.jpg",
            "images/civilpics/images.jpeg",
            "images/civilpics/plot-layout-marking.jpg"
        ]

    },

    machinery: {

        title: "Heavy Crane Operations",

        description:
            "SBI Group provides safe, reliable, and efficient heavy crane operation services for industrial, construction, and infrastructure projects. Our expertise includes heavy equipment lifting, machinery shifting, structural erection, equipment installation, material handling, and precision lifting operations. With experienced operators and modern lifting equipment, we ensure every project is executed with maximum safety, accuracy, and efficiency while meeting industry standards.\n\nOur team specializes in handling complex lifting operations for steel structures, heavy machinery, industrial equipment, and oversized components. From project planning and lift execution to equipment positioning and installation, we follow strict safety protocols and advanced lifting techniques to minimize downtime and ensure successful project completion.",

        features: [
            "Heavy Equipment Lifting",
            "Crane Operations",
            "Structural Erection",
            "Machinery Installation",
            "Material Handling",
            "Precision Equipment Positioning"
        ],

        images: [
            "images/cranepics/IMG-20260103-WA0011.jpg",
            "images/cranepics/product-jpeg.jpg",
            "images/cranepics/images (1).jpg",
            "images/cranepics/Customize-Towing-Crane-For-Recovery-Truck-manufacturers-in-nagapattainam.jpg"
        ]

    },
    consulting: {

    title: "Civil and Structural Girder Launching Works",

    description:
        "SBI Group specializes in Civil and Structural Girder Launching Works for bridges, flyovers, industrial structures, and infrastructure projects. Our expertise includes girder transportation, lifting, launching, alignment, erection, and installation using advanced equipment and proven engineering techniques. We ensure every operation is executed with precision, safety, and strict quality standards.\n\nOur experienced team carefully plans and executes each girder launching project, ensuring structural stability, accurate positioning, minimal project delays, and compliance with industry and safety regulations.",

    features: [
        "Girder Transportation",
        "Girder Launching",
        "Structural Erection",
        "Bridge Construction",
        "Precision Alignment",
        "Safety Compliance"
    ],

    images: [
        "images/mechanicalworks/electrostatic-precipitators.jpg",
        "images/mechanicalworks/WhatsApp Image 2026-06-05 at 16.58.14 (1).jpeg",
        "images/mechanicalworks/WhatsApp Image 2026-06-05 at 16.58.14 (13).jpeg",
        "images/mechanicalworks/IMG-20260713-WA0026.jpg"
    ]

    },
    management: {

    title: "Project Management",

    description:
        "SBI Group offers comprehensive project management services to ensure successful execution of industrial, mechanical, and civil construction projects. Our team oversees planning, scheduling, resource allocation, budgeting, quality assurance, and project coordination to deliver projects on time and within budget.\n\nWe focus on efficient communication, risk management, cost control, and continuous monitoring to ensure smooth project execution while maintaining the highest standards of safety and quality.",

    features: [
        "Project Planning",
        "Resource Management",
        "Quality Assurance",
        "Cost Control",
        "Risk Management",
        "Timely Delivery"
    ],

    images: [
        "images/girder pics/IMG_9376_487KB.jpeg",
        "images/girder pics/IMG_0285_518KB.jpeg",
        "images/civilpics/IMG_20250319_172554.jpg",
        "images/mechanicalworks/electrostatic-precipitator-esp-500x500.jpeg"
    ]

    },
    safety: {

    title: "Safety Audits",

    description:
        "SBI Group provides professional safety audit services to ensure industrial facilities comply with safety regulations and operational standards. Our audits identify potential hazards, evaluate existing safety systems, and recommend effective corrective measures to create a safe working environment.\n\nOur experienced professionals conduct detailed inspections, risk assessments, safety training evaluations, and compliance reviews to improve workplace safety, minimize operational risks, and enhance overall productivity.",

    features: [
        "Risk Assessment",
        "Safety Inspection",
        "Compliance Audits",
        "Hazard Identification",
        "Safety Training Review",
        "Industrial Safety Standards"
    ],

    images: [
        "images/cranepics/IMG-20260522-WA0007.jpg",
        "images/girder pics/IMG_9376_487KB.jpeg",
        "images/girder pics/IMG_0285_518KB.jpeg",
        "images/civilpics/IMG_20250319_172554.jpg"
    ]

}

};
const serviceCards = document.querySelectorAll(".service-card");
const serviceDetails = document.getElementById("service-details");
const serviceTitle = document.getElementById("service-title");

const serviceDescription = document.getElementById("service-description");

const serviceFeatures = document.getElementById("service-features");

const serviceGallery = document.getElementById("service-gallery");

console.log(serviceTitle);

console.log(serviceDescription);

console.log(serviceFeatures);

console.log(serviceGallery);


function loadService(serviceName) {

    const service = services[serviceName];
    console.log(service);

    if (!service) return;

    /* ---------- Title ---------- */

    serviceTitle.textContent = service.title;

    /* ---------- Description ---------- */

    serviceDescription.textContent = service.description;

    /* ---------- Features ---------- */

    serviceFeatures.innerHTML = "";
    serviceTitle.textContent = service.title;
    console.log("Title changed");

    serviceDescription.textContent = service.description;
    console.log("Description changed");

    serviceFeatures.innerHTML = "";
    console.log("Features cleared");

    service.features.forEach(feature => {

        const li = document.createElement("li");

        li.textContent = feature;

        serviceFeatures.appendChild(li);

    });

    /* ---------- Gallery ---------- */

    serviceGallery.innerHTML = "";

    service.images.forEach(image => {

        serviceGallery.innerHTML += `

            <div class="gallery-card">

                <img src="${image}" alt="${service.title}">

            </div>

        `;

    });

}
serviceCards.forEach(card => {

    card.addEventListener("click", () => {

        /* Remove active from all cards */

        serviceCards.forEach(c => {

            c.classList.remove("active");

        });

        /* Add active to clicked card */

        card.classList.add("active");

        loadService(card.dataset.service);
        serviceDetails.style.display = "flex";

        // Optional smooth scroll
        serviceDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
const projects = {

1:{

    category:"Civil Works",

    title:"Apartment Construction",

    description:"SBI Group specializes in apartment construction projects, delivering high-quality multi-storey residential buildings with modern engineering practices and superior workmanship. Our experienced team manages structural construction, brick masonry, RCC works, and finishing activities while maintaining strict quality standards, ensuring durable, safe, and timely project completion.",

    image:"images/civilpics/apartment-building-construction.jpg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
2:{

    category:"Mechanical",

    title:"ESP Installation",

    description:"SBI Group specializes in Electrostatic Precipitator (ESP) installation services for industrial plants, ensuring efficient dust collection systems and environmental compliance. Our experienced team executes fabrication, structural erection, equipment installation, and commissioning with precision while maintaining the highest standards of safety, quality, and operational excellence.",

    image:"images/mechanicalworks/electrostatic-precipitator-esp-500x500.jpeg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},

    
3:{

    category:"Cranes",

    title:"Pick and Carry Crane Operations",

    description:"SBI Group provides professional Pick and Carry crane services for industrial, construction, and infrastructure projects. Our experienced operators perform safe lifting, material handling, equipment shifting, and precision load positioning using modern Pick and Carry cranes while adhering to the highest safety standards and industry best practices.",

    image:"images/cranepics/59728bdad92bf000616509c9316733ce.jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
4:{

    category:"Girders",

    title:"Civil Girder Installation",

    description:"SBI Group specializes in the lifting, transportation, and installation of precast civil girders for bridge and infrastructure projects. Our experienced team uses high-capacity cranes and advanced lifting techniques to ensure precise positioning, structural stability, and safe execution while complying with the highest engineering and safety standards.",

    image:"images/girder pics/IMG_0285_518KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},

5:{

    category:"Civil Works",

    title:"Apartment Construction",

    description:"SBI Group delivers high-quality apartment construction services with a focus on structural strength, modern engineering practices, and superior workmanship. Our experienced team manages every phase of construction, including RCC works, masonry, plastering, and finishing, ensuring durable, safe, and aesthetically appealing residential buildings completed within the project timeline.",

    image:"images/civilpics/apartment-construction-works.jpg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
6:{

    category:"Mechanical",

    title:"ESP Erection",

    description:"SBI Group provides professional Electrostatic Precipitator (ESP) erection services for industrial plants, ensuring safe lifting, structural assembly, equipment installation, and precision alignment. Our experienced team executes every stage of the project with advanced lifting equipment while maintaining the highest standards of safety, quality, and engineering excellence.",

    image:"images/mechanicalworks/electrostatic-precipitators.jpg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},
7:{

    category:"Cranes",

    title:"Hydra Crane Operations",

    description:"SBI Group provides reliable Hydra crane services for industrial, construction, and infrastructure projects. Our experienced operators perform safe lifting, equipment shifting, loading, unloading, and material handling using modern Hydra cranes while ensuring precision, efficiency, and compliance with the highest safety standards.",

    image:"images/cranepics/Customize-Towing-Crane-For-Recovery-Truck-manufacturers-in-nagapattainam.jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},

8:{

    category:"Girders",

    title:"Bridge Girder Installation",

    description:"SBI Group specializes in the installation of precast bridge girders for highway, railway, and infrastructure projects. Our experienced team performs girder lifting, transportation, positioning, and installation using high-capacity cranes with precision engineering techniques, ensuring structural stability, safe execution, and timely project completion while maintaining the highest safety and quality standards.",

    image:"images/girder pics/IMG_0303_485KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
9:{

    category:"Civil Works",

    title:"CC Road Construction",

    description:"SBI Group specializes in the construction of high-quality Cement Concrete (CC) roads for residential, commercial, industrial, and infrastructure projects. Our experienced team ensures proper ground preparation, reinforcement, concrete laying, finishing, and curing while maintaining the highest standards of durability, quality, and safety for long-lasting road performance.",

    image:"images/civilpics/images (1).jpeg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
10:{

    category:"Mechanical",

    title:"Structural Steel Erection",

    description:"SBI Group specializes in structural steel erection services for industrial, commercial, and infrastructure projects. Our experienced team performs safe lifting, positioning, alignment, and installation of steel trusses and structural members using high-capacity cranes while ensuring precision, structural stability, and compliance with the highest safety and engineering standards.",

    image:"images/mechanicalworks/IMG-20241024-WA0015.jpg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},
11:{

    category:"Cranes",

    title:"Fork Lift Operations",

    description:"SBI Group provides professional forklift services for industrial, warehouse, and construction projects. Our experienced operators ensure safe material handling, loading, unloading, stacking, and transportation of heavy goods using modern forklift equipment while maintaining the highest standards of safety, efficiency, and operational excellence.",

    image:"images/cranepics/Forklift-truck_144507.png",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
    
12:{

    category:"Girders",

    title:"Precast Civil Girder Erection",

    description:"SBI Group provides professional precast civil girder erection services for bridge, highway, and infrastructure projects. Our skilled team performs safe lifting, transportation, positioning, and installation of heavy concrete girders using high-capacity cranes, ensuring precise alignment, structural stability, and adherence to the highest engineering and safety standards.",

    image:"images/girder pics/IMG_0304_505KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
13:{

    category:"Civil Works",

    title:"CC Road Development",

    description:"SBI Group delivers high-quality Cement Concrete (CC) road development services for residential, commercial, industrial, and infrastructure projects. Our skilled team performs site preparation, reinforcement, concrete laying, surface finishing, and curing with precision, ensuring durable, smooth, and long-lasting roads that meet the highest quality and safety standards.",

    image:"images/civilpics/images (2).jpeg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
14:{

    category:"Mechanical",

    title:"Mechanical Crane Operations",

    description:"SBI Group provides specialized mechanical crane services for heavy industrial lifting, equipment installation, and large component handling. Our experienced operators safely lift and position oversized equipment using high-capacity cranes, ensuring precision, operational efficiency, and strict compliance with industry safety standards.",

    image:"images/cranepics/IMG-20241030-WA0018.jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
15:{

    category:"Cranes",

    title:"Crawler Crane Operations",

    description:"SBI Group provides professional crawler crane services for heavy industrial, infrastructure, and construction projects. Our skilled operators perform safe lifting, transportation, and installation of oversized equipment and structural components using high-capacity crawler cranes, ensuring precision, stability, and compliance with the highest safety and engineering standards.",

    image:"images/cranepics/images (1).jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
16:{

    category:"Girders",

    title:"Steel Girder Installation",

    description:"SBI Group specializes in the lifting, transportation, and installation of fabricated steel girders for bridge, industrial, and infrastructure projects. Our experienced team performs safe handling, precise positioning, and secure installation using high-capacity cranes, ensuring structural accuracy, durability, and compliance with the highest engineering and safety standards.",

    image:"images/girder pics/IMG_9232_503KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
17:{

    category:"Civil Works",

    title:"Layout Development Works",

    description:"SBI Group provides professional layout development services for residential, commercial, and industrial projects. Our experienced team executes site grading, internal road development, drainage, utility planning, landscaping, and plot infrastructure with precision, delivering well-planned layouts that meet modern engineering standards and ensure long-term durability.",

    image:"images/civilpics/images.jpeg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
    
18:{

    category:"Mechanical",

    title:"Industrial Structure Erection",

    description:"SBI Group provides professional industrial structure erection services for factories, power plants, and infrastructure projects. Our experienced team specializes in lifting, positioning, and installing heavy steel structures, conveyor galleries, and industrial frameworks using high-capacity cranes while ensuring precision, structural stability, and compliance with the highest safety and engineering standards.",

    image:"images/mechanicalworks/IMG-20241108-WA0028.jpg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},
19:{

    category:"Cranes",

    title:"Boom Lift Operations",

    description:"SBI Group provides professional boom lift services for construction, industrial, and maintenance projects. Our skilled operators use modern boom lifts to safely access elevated work areas for installation, inspection, painting, maintenance, and structural activities while ensuring maximum safety, efficiency, and productivity.",

    image:"images/cranepics/images.jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
20:{

    category:"Girders",

    title:"Steel Bridge Girder Installation",

    description:"SBI Group specializes in the lifting and installation of fabricated steel bridge girders for railway, highway, and infrastructure projects. Our experienced team performs safe handling, accurate positioning, and secure erection of heavy steel girders using high-capacity cranes, ensuring structural precision, durability, and compliance with the highest engineering and safety standards.",

    image:"images/girder pics/IMG_9376_487KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
21:{

    category:"Civil Works",

    title:"Building Construction",

    description:"SBI Group specializes in the construction of commercial, institutional, and industrial buildings with a commitment to quality, safety, and timely project delivery. Our experienced team executes RCC structural works, masonry, formwork, and civil construction using modern engineering practices to deliver durable and reliable buildings that meet the highest industry standards.",

    image:"images/civilpics/IMG_20250319_172554.jpg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
22:{

    category:"Mechanical",

    title:"Rotary Equipment Alignment",

    description:"SBI Group provides precision alignment services for heavy rotary equipment used in cement plants, power plants, and other industrial facilities. Our experienced engineers perform accurate positioning, girth gear alignment, shell alignment, and equipment assembly to ensure smooth operation, maximum efficiency, reduced vibration, and long-term equipment reliability while maintaining the highest engineering and safety standards.",

    image:"images/mechanicalworks/IMG-20260527-WA0003.jpg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},
23:{

    category:"Cranes",

    title:"Telescopic Crane Operations",

    description:"SBI Group provides professional telescopic crane services for heavy lifting, equipment installation, structural erection, and infrastructure projects. Our experienced operators use high-capacity telescopic cranes to lift and position heavy components with precision, ensuring safe execution, operational efficiency, and compliance with the highest engineering and safety standards.",

    image:"images/cranepics/IMG-20251029-WA0004.jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
24:{

    category:"Girders",

    title:"Steel Girder Erection",

    description:"SBI Group specializes in the erection of fabricated steel girders for railway, highway, metro, and infrastructure projects. Our experienced team performs safe lifting, positioning, alignment, and installation of heavy steel girders using high-capacity cranes, ensuring structural accuracy, reliable performance, and compliance with the highest engineering and safety standards.",

    image:"images/girder pics/IMG_9453_495KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
25:{

    category:"Civil Works",

    title:"Commercial Building Construction",

    description:"SBI Group delivers professional commercial building construction services with a strong focus on structural quality, precision, and timely execution. Our experienced team carries out RCC framework, slab concreting, column construction, formwork, reinforcement, and masonry works while maintaining the highest standards of safety, durability, and engineering excellence throughout every stage of the project.",

    image:"images/civilpics/IMG_20250325_165211.jpg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
26:{

    category:"Mechanical",

    title:"Industrial Chimney Erection",

    description:"SBI Group provides professional industrial chimney and stack erection services for power plants, cement plants, and heavy industrial facilities. Our experienced team specializes in lifting, positioning, assembling, and erecting tall industrial structures using high-capacity cranes while ensuring precise alignment, structural integrity, and strict compliance with the highest safety and engineering standards.",

    image:"images/mechanicalworks/IMG-20260605-WA0114.jpg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},
27:{

    category:"Heavy Crane Operations",

    title:"220 Ton All-Terrain Crane",

    description:"SBI Group operates high-capacity 220 Ton All-Terrain Cranes for heavy lifting, structural erection, industrial equipment installation, bridge construction, and infrastructure projects. Our experienced operators ensure safe lifting operations, precise load handling, and efficient project execution while adhering to the highest safety and quality standards.",

    image:"images/cranes/IMG-20251029-WA0006.jpg",

    features:[
        "220 Ton Lifting Capacity",
        "Heavy Equipment Handling",
        "Structural Erection",
        "Safe Crane Operations"
    ]

},
28:{

    category:"Girders",

    title:"Steel Bridge Girder Installation",

    description:"SBI Group provides specialized steel bridge girder installation services for railway, highway, metro, and infrastructure projects. Our skilled team performs safe lifting, positioning, alignment, and installation of fabricated steel girders using high-capacity cranes, ensuring structural precision, durability, and timely project completion while maintaining the highest engineering and safety standards.",

    image:"images/girder pics/IMG_9461_490KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
29:{

    category:"Civil Works",

    title:"Commercial Building Construction",

    description:"SBI Group delivers professional commercial building construction services with a strong focus on structural quality, precision, and timely execution. Our experienced team carries out RCC framework, slab concreting, column construction, formwork, reinforcement, and masonry works while maintaining the highest standards of safety, durability, and engineering excellence throughout every stage of the project.",

    image:"images/civilpics/IMG_20250325_165211.jpg",

    features:[
        "Building Construction",
        "Apartment Construction",
        "CC Roads",
        "Layout Works"
    ]

},
30:{

    category:"Mechanical",

    title:"Industrial Gearbox Alignment",

    description:"SBI Group specializes in precision gearbox alignment and assembly services for heavy industrial equipment used in cement plants, power plants, steel plants, and manufacturing industries. Our experienced engineers perform gear alignment, shaft positioning, bearing installation, and mechanical adjustments with high precision to ensure smooth operation, maximum efficiency, reduced vibration, and long-term equipment reliability.",

    image:"images/mechanicalworks/WhatsApp Image 2026-06-05 at 16.58.14 (1).jpeg",

    features:[
        "Fabrication",
        "Erection",
        "ESP",
        "Alignment"
    ]

},
31:{

    category:"Cranes",

    title:"Heavy Mechanical Crane Operations",

    description:"SBI Group provides heavy mechanical crane services for industrial plants, infrastructure projects, and large-scale construction works. Our experienced operators use high-capacity truck-mounted cranes to perform safe lifting, heavy equipment handling, structural installation, and precision load positioning while maintaining the highest standards of safety, reliability, and operational excellence.",

    image:"images/cranepics/IMG-20251103-WA0020.jpg",

    features:[
        "Pick and Carry",
        "Hydra",
        "Farana",
        "Telescopic",
        "Mechanical Cranes",
        "Fork Lift",
        "Boom Lift"
    ]

},
32:{

    category:"Girders",

    title:"Civil Girder Installation",

    description:"SBI Group specializes in the lifting, transportation, and installation of precast civil girders for bridge and infrastructure projects. Our experienced team uses high-capacity cranes and advanced lifting techniques to ensure precise positioning, structural stability, and safe execution while complying with the highest engineering and safety standards.",

    image:"images/girder pics/IMG_0285_518KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},
33:{

    category:"Civil Works",

    title:"Layout Development & Infrastructure Works",

    description:"SBI Group delivers complete layout development and infrastructure works for residential, commercial, and industrial projects. Our expertise includes road construction, drainage systems, street lighting, landscaping, utility development, and plot infrastructure, ensuring durable, well-planned, and aesthetically developed layouts that meet modern engineering standards.",

    image:"images/civil/plot-layout-marking.jpg",

    features:[
        "Layout Development",
        "Internal Road Construction",
        "Street Lighting & Landscaping",
        "Drainage & Utility Infrastructure"
    ]

},
34:{

    category:"Mechanical Works",

    title:"Industrial Dust Collector Installation",

    description:"SBI Group specializes in the erection and installation of industrial dust collectors, bag filter systems, and pollution control equipment for power plants, steel plants, cement plants, and manufacturing industries. Our skilled team ensures accurate structural alignment, safe equipment positioning, and reliable mechanical installation while complying with industrial safety and quality standards.",

    image:"images/mechanical/IMG-20260713-WA0026.jpg",

    features:[
        "Dust Collector Installation",
        "Bag Filter System Erection",
        "Industrial Equipment Alignment",
        "Safe Mechanical Installation"
    ]

},
35:{

    category:"Heavy Crane Operations",

    title:"Hydraulic Truck Mounted Crane",

    description:"SBI Group operates Hydraulic Truck Mounted Cranes for heavy lifting, structural erection, machinery installation, industrial maintenance, and infrastructure projects. These cranes provide excellent mobility, lifting efficiency, and precise load handling, ensuring safe and reliable operations across diverse construction and industrial environments.",

    image:"images/cranes/IMG-20260103-WA0009.jpg",

    features:[
        "Hydraulic Lifting Operations",
        "Truck Mounted Crane",
        "Structural Erection",
        "Heavy Material Handling"
    ]

},
36:{

    category:"Girders",

    title:"Bridge Girder Installation",

    description:"SBI Group specializes in the installation of precast bridge girders for highway, railway, and infrastructure projects. Our experienced team performs girder lifting, transportation, positioning, and installation using high-capacity cranes with precision engineering techniques, ensuring structural stability, safe execution, and timely project completion while maintaining the highest safety and quality standards.",

    image:"images/girder pics/IMG_0303_485KB.jpeg",

    features:[
        "Civil Girders",
        "Steel Girders"
    ]

},

}
/* ================= PROJECT DETAILS ================= */

const projectCards = document.querySelectorAll(".gallery-card");

projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const projectId = card.dataset.project;

        if(projectId){

            window.location.href = `project-details.html?id=${projectId}`;

        }

    });

});
/* ================= LOAD PROJECT DETAILS ================= */

const projectTitle = document.getElementById("project-title");
const projectCategory = document.getElementById("project-category");
const projectDescription = document.getElementById("project-description");
const projectFeatures = document.getElementById("project-features");
const projectImage = document.getElementById("project-image");
const params = new URLSearchParams(window.location.search);

const projectId = params.get("id");
if (
    projectId &&
    projects[projectId] &&
    projectTitle
) {

    const project = projects[projectId];

    projectCategory.textContent = project.category;

    projectTitle.textContent = project.title;

    projectDescription.textContent = project.description;

    projectImage.src = project.image;

    projectFeatures.innerHTML = "";

    project.features.forEach(feature => {

        const li = document.createElement("li");

        li.textContent = feature;

        projectFeatures.appendChild(li);

    });

}