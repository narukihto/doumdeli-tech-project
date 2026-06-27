// ==========================================
// 1. COMPOSANTE LOGICIELLE : API FAKE DES SERVICES TECHNOLOGIQUES
// ==========================================
const TECH_SERVICES_DATA = [
  {
    id: "frp-bypass",
    name: "Déblocage FRP & Sécurité OS Avancée",
    description: "Solutions logicielles chirurgicales pour le contournement des verrous de sécurité Google (FRP Lock), réinitialisation de comptes iCloud, suppression de schémas et flashage de micrologiciels (firmwares) d'usine officiels.",
    specs: ["Bypass Google Account (FRP)", "iCloud Bypass & MDM", "Flashage & Unbrick de bootloaders"],
    imageUrl: "https://images.unsplash.com/photo-1603964525715-f6c9dee643c6?w=600",
    localImage: "./images/frp-bypass.jpg"
  },
  {
    id: "smartphone-repair",
    name: "Maintenance Matérielle Smartphones & Tablettes",
    description: "Remplacement d'écrans OLED/AMOLED de haute qualité, vitres tactiles, batteries haute capacité et connecteurs de charge USB-C. Réparation des lignes de pannes complexes suite à des chocs ou oxydation liquide.",
    specs: ["Changement écrans et vitres", "Diagnostic de pannes d'alimentation", "Désoxydation complète en cuve"],
    imageUrl: "https://images.unsplash.com/photo-1511707171638-0281c7f794b3?w=600",
    localImage: "./images/smartphone-repair.jpg"
  },
  {
    id: "pc-engineering",
    name: "Ingénierie & Dépannage PC / Mac / Serveurs",
    description: "Diagnostic de précision et optimisation de parcs informatiques. Remplacement de composants défectueux, mise à niveau de stockage vers des SSD NVMe ultra-rapides, et réinstallation sécurisée des systèmes d'exploitation.",
    specs: ["Réparation cartes mères PC/Mac", "Upgrade RAM & Stockage SSD", "Optimisation thermique & nettoyage"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    localImage: "./images/pc-engineering.jpg"
  },
  {
    id: "micro-soldering",
    name: "Micro-Soudure Électronique sous Microscope",
    description: "Interventions d'élite sur les circuits imprimés et chipsets miniatures. Réparation des puces de gestion de charge (Power IC), rebillage de processeurs (BGA) et reconstruction de pistes de circuits coupées.",
    specs: ["Soudure de puces CMS & IC", "Rebillage de processeurs BGA", "Restauration de circuits imprimés"],
    imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600",
    localImage: "./images/micro-soldering.jpg"
  },
  {
    id: "data-recovery",
    name: "Récupération Forensique de Données",
    description: "Extraction avancée et récupération de données critiques depuis des supports de stockage physiquement endommagés ou corrompus, disques durs (HDD), clés USB et mémoires Flash intégrées (eMMC/UFS).",
    specs: ["Extraction sur disques HS", "Restauration de partitions effacées", "Récupération sur puces Flash"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600",
    localImage: "./images/data-recovery.jpg"
  },
  {
    id: "network-security",
    name: "Réseaux, Systèmes & Sécurité Informatique",
    description: "Audit complet, déploiement d'architectures réseaux filaires et Wi-Fi hautement sécurisées pour les entreprises, configuration de serveurs NAS locaux et mise en place de pare-feux (Firewalls) industriels.",
    specs: ["Configuration Routeurs & Switchs", "Déploiement VPN & Firewalls", "Solutions de sauvegarde NAS"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010c78bd6f?w=600",
    localImage: "./images/network-security.jpg"
  }
];

// ==========================================
// 2. FONCTION DE RENDU DYNAMIQUE DE L'INTERFACE TECHNOLOGIQUE
// ==========================================
function renderTechServices() {
  const gridContainer = document.getElementById('services-grid');
  if (!gridContainer) return;

  // تفريغ لودر الانتظار المؤقت
  gridContainer.innerHTML = '';

  // توليد كروت الخدمات التكنولوجية بشكل ديناميكي
  TECH_SERVICES_DATA.forEach((service) => {
    const card = document.createElement('div');
    // تنسيق سيبراني متناسق مع الخلفية الداكنة والحدود الزرقاء عند تمرير الفأرة
    card.className = "bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col text-left group";

    card.innerHTML = `
      <div class="relative h-56 w-full bg-slate-900 overflow-hidden">
        <!-- نظام جلب الصور الفيك الذكي في حال عدم وجود صور محلية -->
        <img src="${service.localImage}" 
             onerror="this.onerror=null; this.src='${service.imageUrl}';" 
             alt="${service.name}" 
             class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
        <div class="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-md border border-blue-400/20">
          <i class="fa-solid fa-microchip mr-1 text-cyan-300"></i> Pôle Technique
        </div>
      </div>
      
      <div class="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h4 class="text-xl font-black text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">${service.name}</h4>
          <p class="text-slate-400 text-sm font-medium leading-relaxed mb-6">${service.description}</p>
        </div>
        
        <div class="mt-auto pt-4 border-t border-slate-800/60">
          <span class="text-xs font-bold text-slate-500 block mb-2">Spécifications d'intervention :</span>
          <div class="flex flex-wrap gap-1.5">
            ${service.specs.map(spec => `
              <span class="bg-slate-900 text-slate-300 text-xs font-bold px-2.5 py-1.5 rounded-lg border border-slate-800">
                <i class="fa-solid fa-bolt text-cyan-400 mr-1"></i> ${spec}
              </span>
            `).join('')}
          </div>
          
          <a href="#ticket" class="w-full mt-5 text-center bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 text-xs flex items-center justify-center gap-2">
            <i class="fa-solid fa-circle-info"></i> Ouvrir un Ticket d'Intervention
          </a>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

// ==========================================
// 3. ENREGISTREMENT DU SERVICE WORKER TECHNOLOGIQUE
// ==========================================
function registerTechServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('💻 [Doumdeli Technologie Internationale] SW d\'accès hors-ligne activé !', reg.scope))
        .catch(err => console.error('⚠️ [Doumdeli Technologie Internationale] Échec du SW :', err));
    });
  }
}

// تشغيل الدوال فور تحميل المتصفح بالكامل
document.addEventListener('DOMContentLoaded', () => {
  renderTechServices();
  registerTechServiceWorker();
});
