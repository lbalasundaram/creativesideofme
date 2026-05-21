/* ========================================
   CREATIVE SIDE OF ME - Data & Interactivity
   ======================================== */

// ===== ALL BLOG POSTS DATA =====
let posts = [
  // ===================== KOLAM / BLOG =====================
  { cat: "kolam", date: "2026-03-12", title: "Woman's Day", desc: "Dedicated to women's strength and grace, featuring a kolam centered on a white lotus. Flowing lines and circular patterns describe women's roles in families.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/03/womens-day-kolam.jpg", link: "https://readmybloghere0.wordpress.com/2026/03/12/womans-day/" },
  { cat: "kolam", date: "2026-01-15", title: "Margazhi 2025\u201326: Sacred Mosaic of Mornings", desc: "Overview of the entire Margazhi season \u2014 thirty conversations with dawn. Lotuses, brahmamudi knots, padi kolams, Vaishnava symbols, and Nataraja\u2019s rhythm.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/margazhi-overview.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/15/margazhi-2025-26/" },
  { cat: "kolam", date: "2026-01-13", title: "Margazhi Day 30: Pongal Kolam", desc: "Final kolam celebrating Pongal with pots brimming with abundance and kites representing freedom \u2014 the meeting of earth and sky.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6730.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/13/margazhi-day-30/" },
  { cat: "kolam", date: "2026-01-12", title: "Margazhi Day 29: Lotus Rhythm", desc: "Lotus motifs in quiet rhythm \u2014 flowing curves that meet without breaking. Unity of many forms, one flow, and calm joy.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6720.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/12/margazhi-day-29/" },
  { cat: "kolam", date: "2026-01-11", title: "Margazhi Day 28: Sacred Geometry Lattice", desc: "Intricate interlacing loops creating a dense lattice. Dots as seeds held in sacred geometry, with corner lotuses providing gentle contrast.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6710.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/11/margazhi-day-28/" },
  { cat: "kolam", date: "2026-01-10", title: "Margazhi Day 27: Koodaravalli Kolam", desc: "Kolam interpreted as jewelry \u2014 a sweeping necklace, paired earrings. Unity strung bead by bead, devotion worn close to the heart.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6700.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/10/margazhi-day-27/" },
  { cat: "kolam", date: "2026-01-09", title: "Margazhi Day 26: Heart Motif Kolam", desc: "Heart-shaped curves repeating with shaded strokes. Lotus motifs guard edges as sentinels of purity and grace.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6690.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/09/margazhi-day-26/" },
  { cat: "kolam", date: "2026-01-08", title: "Margazhi Day 25: Friday Padi Kolam", desc: "Parallel lines echo like gentle resonance with stepped rhythm. A quiet flower at center holds stillness amid motion \u2014 geometry becomes prayer.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6680.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/08/margazhi-day-25/" },
  { cat: "kolam", date: "2026-01-07", title: "Margazhi Day 24: Vishnu Symbolism", desc: "Sacred protective square with interlacing loops. Center features Vishnu symbolism: Thirumanam, Conch, and Chakra \u2014 geometry as prayer.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6670.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/07/margazhi-day-24/" },
  { cat: "kolam", date: "2026-01-06", title: "Margazhi Day 23: Butterfly & Diamond", desc: "Flowers bloom within diamond frames in four directions. Butterflies emerge between forms \u2014 the coexistence of stability and change.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6660.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/06/margazhi-day-23/" },
  { cat: "kolam", date: "2026-01-05", title: "Margazhi Day 22: Warmth in Repetition", desc: "Repeated motifs in four directions using warm, earthy colors. Simple actions with intention create calm, warmth, and gentle joy.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6665.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/05/margazhi-day-22/" },
  { cat: "kolam", date: "2026-01-04", title: "Margazhi Day 21: A Kolam of Togetherness", desc: "Central radiant flower with four-directional symmetry, lotus forms, and budding lotuses representing family unity.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6655.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/04/margazhi-day-21/" },
  { cat: "kolam", date: "2026-01-04", title: "Margazhi Day 20: Mandala Kolam", desc: "A mandala-like design with continuous lines, eight-petalled flower at center, and diamond grids emphasizing discipline and devotion.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6641.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/04/margazhi-day-20/" },
  { cat: "kolam", date: "2026-01-02", title: "Margazhi Day 19: Arudra Dharisanam", desc: "Teardrop-form kolam featuring Nataraja in the center, symbolizing creation and destruction through cosmic dance.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6631.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/02/margazhi-day-19/" },
  { cat: "kolam", date: "2026-01-02", title: "Margazhi Day 18: Friday Padi Kolam", desc: "Two crossing squares at 45\u00b0 create the base, with spirals and lotus petals. Order turning into music, discipline melting into grace.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6621.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/02/margazhi-day-18/" },
  { cat: "kolam", date: "2026-01-01", title: "Margazhi Day 17: New Year Welcome Carpet", desc: "Large welcome carpet with Madhubani-style fish transitioning from 2025 to 2026. Lotus tags on all edges.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6613.jpg", link: "https://readmybloghere0.wordpress.com/2026/01/01/margazhi-day-17/", extra: ["https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6609.jpg","https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6616.jpg","https://readmybloghere0.wordpress.com/wp-content/uploads/2026/01/img_6617.jpg"] },
  { cat: "kolam", date: "2025-12-30", title: "Margazhi Day 16: Flame Motif", desc: "Diamond-shaped core containing flame motif. Small crosses, loops, and bead-like chains creating balance and rhythm.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6590.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/30/margazhi-day-16/" },
  { cat: "kolam", date: "2025-12-29", title: "Margazhi Day 15: Vaikunta Ekadasi", desc: "Sacred design representing the celestial gateway. Divine face with ascending kireedam and floral ornaments.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6583.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/29/margazhi-day-15/" },
  { cat: "kolam", date: "2025-12-28", title: "Margazhi Day 14: Geometry in Grace", desc: "Central six-petalled flower with conch forms expanding outward through rhombuses into hexagon. Abundance from mindful movement.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6565.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/28/margazhi-day-14/" },
  { cat: "kolam", date: "2025-12-27", title: "Margazhi Day 13: From Plan to Petal", desc: "Fifteen dots arranged in reducing lines, centered four-petalled flower, border of corner lotuses. Simple plan, lovingly executed.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6555.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/27/margazhi-day-13/" },
  { cat: "kolam", date: "2025-12-26", title: "Margazhi Day 12: Anklet into Infinity", desc: "Flowing around dots, centered on Krishna\u2019s anklet, extending into brahmamudi patterns. One continuous breath of curves and crossings.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6552.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/26/margazhi-day-12/" },
  { cat: "kolam", date: "2025-12-25", title: "Margazhi Day 11: Padi Kolam (Friday)", desc: "Parallel lines and eight-petalled flower with lotus tips. Different beginnings, one timeless path.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6544.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/25/margazhi-day-11/" },
  { cat: "kolam", date: "2025-12-24", title: "Margazhi Day 10: Christmas & Margazhi", desc: "Kolam integrating Christmas elements \u2014 bells, candles, star \u2014 with Margazhi tradition. Cultures do not compete; they converse.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6536.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/24/margazhi-day-10/" },
  { cat: "kolam", date: "2025-12-23", title: "Margazhi Day 9: Even-Number Grid", desc: "Even-number grid kolam exploring hand-grip technique and discipline in drawing.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6520.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/23/margazhi-day-9/" },
  { cat: "kolam", date: "2025-12-22", title: "Margazhi Day 8: Star-Framed Kolam", desc: "Star-framed design with rhombuses, triangles, and Aishwarya motif. Brain coordination and bilateral hand balance.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6509.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/22/margazhi-day-8/" },
  { cat: "kolam", date: "2025-12-21", title: "Margazhi Day 7: Negative Space", desc: "Krishna anklet corners and lotus forms. Silence gives depth to music, pauses give meaning.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6486.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/21/margazhi-day-7/" },
  { cat: "kolam", date: "2025-12-20", title: "Margazhi Day 6: Bilva Leaves Hexagon", desc: "Six-petalled flower with triple bilva leaves and hexagonal rhythm. Meditative refinement.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6469.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/20/margazhi-day-6/" },
  { cat: "kolam", date: "2025-12-19", title: "Margazhi Day 5: Geometry Felt", desc: "Dot-based kolam exploring finger grip and uniform rice flour flow. Geometry is not taught; it is felt.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6463.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/19/margazhi-day-5/" },
  { cat: "kolam", date: "2025-12-18", title: "Margazhi Day 4: Lines of Breath & Devotion", desc: "Padi kolam with spiral corners referencing Andal\u2019s kondai, aligned with Hanuman Jayanthi. Each line is a prayer.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6450.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/18/margazhi-day-4/" },
  { cat: "kolam", date: "2025-12-17", title: "Margazhi Day 3: Yantra Kolam", desc: "Interlocked triangles and angled lotuses at six corners. Discipline, coordination, and beauty flow as one.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_4895.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/17/margazhi-day-3/" },
  { cat: "kolam", date: "2025-12-16", title: "Margazhi Day 2: Meditative Lines", desc: "Lines and curves flowing gently through the design, like spiritual adornment during the sacred month.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6440.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/16/margazhi-day-2/" },
  { cat: "kolam", date: "2025-12-16", title: "Margazhi Day 1: Geometry, Gravity & Mind Yoga", desc: "The sacred Tamil month of Margazhi and Earth\u2019s closest approach to the Sun. Geometric kolam as mind yoga.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/img_6430.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/16/margazhi-day-1/" },
  { cat: "kolam", date: "2025-12-04", title: "Kuppai Karthigai: Deepam of Protection", desc: "Third day of Karthigai \u2014 lamps placed throughout homes as spiritual guardians, coinciding with a Cold Supermoon.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/kuppai-karthigai.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/04/kuppai-karthigai/" },
  { cat: "kolam", date: "2025-12-03", title: "Karthigai Deepam: Maha Deepam of Shiva", desc: "Main festival day honoring Lord Shiva and Muruga. The sacred Maha Deepam at Arunachala as an endless flame.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/karthigai-deepam.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/03/karthigai-deepam/" },
  { cat: "kolam", date: "2025-12-02", title: "Festival of Lights of the South", desc: "Introduction to Karthigai Deepam festival and Bharani Deepam \u2014 purifying spiritual significance across generations.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/12/festival-of-lights.jpg", link: "https://readmybloghere0.wordpress.com/2025/12/02/festival-of-lights/" },
  { cat: "kolam", date: "2025-11-04", title: "Growing Through Repetition", desc: "Kolam design evolution through repeated motifs. Repetition is not routine \u2014 it\u2019s rhythm.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/11/growing-repetition.jpg", link: "https://readmybloghere0.wordpress.com/2025/11/04/growing-through-repetition/" },
  { cat: "kolam", date: "2025-10-27", title: "Kandha Sashti Day 6: Soorasamharam", desc: "The triumph of light. Kolam featuring peacocks and roosters, symbolizing victory over darkness.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/soorasamharam.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/27/kandha-sashti-day-6/" },
  { cat: "kolam", date: "2025-10-26", title: "Kandha Sashti Day 5: Bloom of Victory", desc: "Kolam with lotuses representing the moment when strength meets compassion.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/bloom-victory.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/26/kandha-sashti-day-5/" },
  { cat: "kolam", date: "2025-10-25", title: "Kandha Sashti Day 4: Clash of Illusions", desc: "Murugan\u2019s Vel cuts through each illusion, teaching that truth destroys maya.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/clash-illusions.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/25/kandha-sashti-day-4/" },
  { cat: "kolam", date: "2025-10-24", title: "Kandha Sashti Day 3: War Intensifies", desc: "Bold lines radiating like spears in motion in the mythological narrative.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/war-intensifies.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/24/kandha-sashti-day-3/" },
  { cat: "kolam", date: "2025-10-24", title: "Kandha Sashti Day 2: First Confrontation", desc: "Murugan\u2019s army advancing \u2014 the march and first confrontation.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/first-confrontation.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/24/kandha-sashti-day-2/" },
  { cat: "kolam", date: "2025-10-24", title: "Kandha Sashti Prelude: The Divine Warrior", desc: "Introduction to the six-day festival and Murugan\u2019s origin story.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/divine-warrior.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/24/kandha-sashti-prelude/" },
  { cat: "kolam", date: "2025-10-22", title: "Diwali: 61 Diyas and Kolam Art", desc: "Lighting up Diwali with decorative floor designs and oil lamps \u2014 a celebration of light.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/diwali-kolam.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/22/diwali-kolam/" },
  { cat: "kolam", date: "2025-10-09", title: "Everyday Kolam Series", desc: "A ritual of harmony and grace \u2014 daily traditional floor art patterns and their spiritual significance.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/everyday-kolam.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/09/everyday-kolam-series/" },
  { cat: "kolam", date: "2025-10-02", title: "Navaratri Finale: Saraswati Yantra", desc: "Concluding Navaratri with wisdom deity symbolism \u2014 the Saraswati Yantra kolam.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/saraswati-yantra.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/02/saraswati-yantra/" },
  { cat: "kolam", date: "2025-10-02", title: "Navaratri: Ten Divine Astras of Maa Durga", desc: "Sacred weapons and their symbolic meanings across the nine festival days.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/ten-astras.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/02/ten-divine-astras/" },
  { cat: "kolam", date: "2025-10-01", title: "Navaratri Day 10: Lotus of Purity", desc: "The lotus symbol representing inner purity and spiritual victory.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/10/navaratri-day10.jpg", link: "https://readmybloghere0.wordpress.com/2025/10/01/navaratri-day-10/" },
  { cat: "kolam", date: "2025-09-30", title: "Navaratri Day 9: The Axe", desc: "The axe weapon symbolizing detachment and ego-dissolution.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day9.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/30/navaratri-day-9/" },
  { cat: "kolam", date: "2025-09-29", title: "Durgashtami: Sacred Yantra", desc: "Sacred yantra kolam honoring goddess power on the eighth night.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/durgashtami.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/29/durgashtami/" },
  { cat: "kolam", date: "2025-09-29", title: "Navaratri Day 8: The Thunderbolt", desc: "The thunderbolt representing divine strength and unwavering power.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day8.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/29/navaratri-day-8/" },
  { cat: "kolam", date: "2025-09-28", title: "Navaratri Day 7: The Serpent", desc: "Symbol of power and transformation \u2014 kundalini energy and renewal.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day7.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/28/navaratri-day-7/" },
  { cat: "kolam", date: "2025-09-27", title: "Navaratri Day 6: The Sword", desc: "Astra of clarity and righteous power \u2014 cutting through ignorance.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day6.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/27/navaratri-day-6/" },
  { cat: "kolam", date: "2025-09-25", title: "Navaratri Day 5: Bow and Arrow", desc: "Astra of focus and precision \u2014 divine aim and unwavering purpose.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day5.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/25/navaratri-day-5/" },
  { cat: "kolam", date: "2025-09-24", title: "Navaratri Day 4: The Trishul", desc: "The Divine Trident of Maa Durga \u2014 destroyer of ego, illusion, and desire.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day4.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/24/navaratri-day-4/" },
  { cat: "kolam", date: "2025-09-23", title: "Navaratri Day 3: The Spear", desc: "Shakti Astra of Maa Durga \u2014 piercing through darkness with divine energy.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day3.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/23/navaratri-day-3/" },
  { cat: "kolam", date: "2025-09-22", title: "Navaratri Day 2: The Chakra", desc: "Divine Disc of Maa Durga \u2014 the wheel of cosmic order.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day2.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/22/navaratri-day-2/" },
  { cat: "kolam", date: "2025-09-22", title: "Navaratri Day 1: Kolam of the Shankh", desc: "Divine conch shell symbolizing the primordial sound of creation.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/navaratri-day1.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/22/navaratri-day-1/" },
  { cat: "kolam", date: "2025-09-21", title: "Kalasam Kolam", desc: "Anthakshari kolam design with vertical mirror symmetry \u2014 sacred vessel of abundance.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/09/kalasam.jpg", link: "https://readmybloghere0.wordpress.com/2025/09/21/kalasam-kolam/" },
  { cat: "kolam", date: "2025-05-12", title: "Flower Moon Kolam", desc: "Full moon-inspired kolam celebrating the spring blooms of May.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/05/flower-moon.jpg", link: "https://readmybloghere0.wordpress.com/2025/05/12/flower-moon-kolam/" },
  { cat: "kolam", date: "2025-05-01", title: "Anklets of Grace, Petals of Stillness", desc: "First-of-month kolam featuring fish motifs and Krishna\u2019s anklets.", img: "https://readmybloghere0.wordpress.com/wp-content/uploads/2025/05/anklets-of-grace.jpg", link: "https://readmybloghere0.wordpress.com/2025/05/01/anklets-of-grace/" },

  // ===================== CROCHET =====================
  { cat: "crochet", date: "2026-01-06", title: "Dual Color Scarf", desc: "Beautiful dual-color scarf project with textured stitches.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2026/01/img_6661.jpg?w=768", link: "https://findmycrochet.wordpress.com/2026/01/06/dual-color-scarf/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2026/01/img_6662.jpg?w=460","https://findmycrochet.wordpress.com/wp-content/uploads/2026/01/img_6663.jpg?w=768"] },
  { cat: "crochet", date: "2025-12-11", title: "Rainbow Keyhole Scarf", desc: "Vibrant rainbow keyhole scarf with a PDF pattern.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2025/12/img_6370.jpg?w=890", link: "https://findmycrochet.wordpress.com/2025/12/11/rainbow-keyhole-scarf/" },
  { cat: "crochet", date: "2025-12-11", title: "Velvety Scarf", desc: "Soft, textured velvety scarf in warm tones.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2025/12/img_5735-1.jpg?w=879", link: "https://findmycrochet.wordpress.com/2025/12/11/velvety-scarf/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2025/12/img_5733-1.jpg?w=768"] },
  { cat: "crochet", date: "2024-11-24", title: "Planned Pooling Holiday Scarf", desc: "Festive planned pooling scarf with holiday colors.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2024/11/img_0579.jpg?w=768", link: "https://findmycrochet.wordpress.com/2024/11/24/planned-pooling-holiday-scarf/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2024/11/img_0580.jpg?w=768"] },
  { cat: "crochet", date: "2023-02-13", title: "Wrist Warmers", desc: "Cozy crocheted wrist warmers \u2014 perfect winter accessories.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2023/02/img_0782.jpg", link: "https://findmycrochet.wordpress.com/2023/02/13/wrist-warmers/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2023/02/img_0781.jpg?w=1024","https://findmycrochet.wordpress.com/wp-content/uploads/2023/02/img_0778.jpg?w=814"] },
  { cat: "crochet", date: "2023-01-25", title: "Neck Warmer", desc: "Traverse Bay Crochet-inspired neck warmer for chilly days.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2023/01/img_0481.jpg", link: "https://findmycrochet.wordpress.com/2023/01/25/neck-warmer/" },
  { cat: "crochet", date: "2022-09-05", title: "Tote Bag", desc: "Handmade crocheted tote bag \u2014 functional and fashionable.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2022/09/img_8188.jpg", link: "https://findmycrochet.wordpress.com/2022/09/05/tote-bag/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2022/09/img_8191.jpg","https://findmycrochet.wordpress.com/wp-content/uploads/2022/09/img_8192.jpg?w=819"] },
  { cat: "crochet", date: "2022-03-13", title: "Baby Blanket \u2014 Pastel Peaks", desc: "Soft pastel peaks baby blanket in gentle colors.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2022/03/img_5537.jpg", link: "https://findmycrochet.wordpress.com/2022/03/13/baby-blanket/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2022/03/img_5536.jpg?w=768"] },
  { cat: "crochet", date: "2022-02-11", title: "Baby Brights C2C Blanket", desc: "Corner-to-corner baby blanket in bright, cheerful colors.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2022/02/img_5108.jpg", link: "https://findmycrochet.wordpress.com/2022/02/11/baby-brights-c2c/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2022/02/img_5118.jpg?w=1024"] },
  { cat: "crochet", date: "2022-01-22", title: "Toodie (Turtleneck Hoodie)", desc: "Innovative turtleneck-hoodie combo from The Crochet Crowd.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2022/01/img_4824.jpg", link: "https://findmycrochet.wordpress.com/2022/01/22/toodie/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2022/01/img_4827.jpg?w=768"] },
  { cat: "crochet", date: "2022-01-07", title: "Ear Warmer", desc: "Snug crocheted ear warmer for winter outings.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2022/01/img_4574.jpg?w=1024", link: "https://findmycrochet.wordpress.com/2022/01/07/ear-warmer/" },
  { cat: "crochet", date: "2022-01-03", title: "Keyhole Scarf", desc: "Classic keyhole scarf design with a self-fastening loop.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2022/01/img_4459.jpg", link: "https://findmycrochet.wordpress.com/2022/01/03/keyhole-scarf/" },
  { cat: "crochet", date: "2021-12-16", title: "Bandana Cowl", desc: "Harvest Bandana Cowl \u2014 stylish crocheted cowl with bandana silhouette.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/12/img_4155.jpg", link: "https://findmycrochet.wordpress.com/2021/12/16/bandana-cowl/" },
  { cat: "crochet", date: "2021-12-11", title: "Bead Stitch Cowl", desc: "Textured cowl using the elegant bead stitch technique.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/12/img_4095.jpg?w=1024", link: "https://findmycrochet.wordpress.com/2021/12/11/bead-stitch-cowl/" },
  { cat: "crochet", date: "2021-12-08", title: "Velvet Twist Headband & Neck Warmer", desc: "Luxurious velvet yarn headband and neck warmer set.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/12/img_4066.jpg?w=1024", link: "https://findmycrochet.wordpress.com/2021/12/08/velvet-twist/" },
  { cat: "crochet", date: "2021-11-29", title: "Leg Warmers", desc: "Vintage-style crocheted leg warmers.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/11/img_3917.jpg?w=768", link: "https://findmycrochet.wordpress.com/2021/11/29/leg-warmers/" },
  { cat: "crochet", date: "2021-10-28", title: "Celtic Weave Head Wrap", desc: "Decorative head wrap with Celtic-inspired weave pattern.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/img_3363.jpg?w=1024", link: "https://findmycrochet.wordpress.com/2021/10/28/celtic-weave/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/img_3369.jpg?w=1024"] },
  { cat: "crochet", date: "2021-10-25", title: "Divine Hat", desc: "Beautifully crafted crocheted hat with divine stitch pattern.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/img_3337.jpg", link: "https://findmycrochet.wordpress.com/2021/10/25/divine-hat/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/img_3340.jpg?w=768"] },
  { cat: "crochet", date: "2021-10-24", title: "Pebbled Textured Hat", desc: "Hat featuring unique pebbled stitch pattern for texture.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/img_3312.jpg?w=1024", link: "https://findmycrochet.wordpress.com/2021/10/24/pebbled-textured-hat/" },
  { cat: "crochet", date: "2021-10-24", title: "Rainbow Hat", desc: "Colorful rainbow hat bringing joy and warmth.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/c204c36e-1eb9-4496-9311-d35e8939f531.png?w=1024", link: "https://findmycrochet.wordpress.com/2021/10/24/rainbow-hat/", extra: ["https://findmycrochet.wordpress.com/wp-content/uploads/2021/10/img_3308.jpg?w=768"] },
  { cat: "crochet", date: "2021-02-19", title: "Flowered Rug", desc: "Beautiful crocheted rug with floral design for home decor.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/02/flowered-rug.jpg", link: "https://findmycrochet.wordpress.com/2021/02/19/flowered-rug/" },
  { cat: "crochet", date: "2021-02-19", title: "Dragonfly Bandana", desc: "Crocheted bandana cowl with delicate dragonfly motif.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/02/dragonfly-bandana.jpg", link: "https://findmycrochet.wordpress.com/2021/02/19/dragonfly-bandana/" },
  { cat: "crochet", date: "2021-02-19", title: "Nap Blanket (Moss Stitch)", desc: "Cozy nap blanket using the classic moss stitch technique.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/02/nap-blanket.jpg", link: "https://findmycrochet.wordpress.com/2021/02/19/nap-blanket/" },
  { cat: "crochet", date: "2021-01-16", title: "Neck Warmer", desc: "Simple yet elegant crocheted neck warmer.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/01/neck-warmer.jpg", link: "https://findmycrochet.wordpress.com/2021/01/16/neck-warmer-2/" },
  { cat: "crochet", date: "2021-01-16", title: "Cosmos Circles Cowl", desc: "Stunning cowl with circular cosmos-inspired motifs.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/01/cosmos-circles.jpg", link: "https://findmycrochet.wordpress.com/2021/01/16/cosmos-circles-cowl/" },
  { cat: "crochet", date: "2021-01-11", title: "Puppy Sweater", desc: "Adorable crocheted sweater for a furry friend.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/01/puppy-sweater.jpg", link: "https://findmycrochet.wordpress.com/2021/01/11/puppy-sweater/" },
  { cat: "crochet", date: "2021-01-11", title: "Beautiful Hues Scarf", desc: "Multi-colored scarf with vibrant, shifting hues.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2021/01/beautiful-hues.jpg", link: "https://findmycrochet.wordpress.com/2021/01/11/beautiful-hues-scarf/" },
  { cat: "crochet", date: "2020-12-29", title: "Granny Crochet Scarf", desc: "Traditional granny square scarf \u2014 a timeless classic.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/granny-scarf.jpg", link: "https://findmycrochet.wordpress.com/2020/12/29/granny-crochet-scarf/" },
  { cat: "crochet", date: "2020-12-28", title: "C2C Crochet Cowl", desc: "Corner-to-corner crochet technique in a cozy cowl.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/c2c-cowl.jpg", link: "https://findmycrochet.wordpress.com/2020/12/28/c2c-crochet-cowl/" },
  { cat: "crochet", date: "2020-12-28", title: "Baby Cocoon", desc: "Adorable baby chick cocoon for newborn photography.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/baby-cocoon.jpg", link: "https://findmycrochet.wordpress.com/2020/12/28/baby-cocoon/" },
  { cat: "crochet", date: "2020-12-14", title: "Primrose Crochet Cowl", desc: "Delicate primrose stitch cowl in soft pastels.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/primrose-cowl.jpg", link: "https://findmycrochet.wordpress.com/2020/12/14/primrose-crochet-cowl/" },
  { cat: "crochet", date: "2020-12-10", title: "Holiday Pom Neck Warmer", desc: "Festive neck warmer with playful pom-pom accents.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/holiday-pom.jpg", link: "https://findmycrochet.wordpress.com/2020/12/10/holiday-pom-neck-warmer/" },
  { cat: "crochet", date: "2020-12-09", title: "Holiday Cowl", desc: "Seasonal crocheted cowl perfect for holiday gatherings.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/holiday-cowl.jpg", link: "https://findmycrochet.wordpress.com/2020/12/09/holiday-cowl/" },
  { cat: "crochet", date: "2020-12-04", title: "Triangle Shawlette", desc: "Elegant triangle shawlette for layering.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/triangle-shawlette.jpg", link: "https://findmycrochet.wordpress.com/2020/12/04/triangle-shawlette/" },
  { cat: "crochet", date: "2020-12-04", title: "Neck Warmer Cowl", desc: "Versatile cowl that doubles as a neck warmer.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/12/neckwarmer-cowl.jpg", link: "https://findmycrochet.wordpress.com/2020/12/04/neck-warmer-cowl/" },
  { cat: "crochet", date: "2020-11-19", title: "Baby Blanket", desc: "Soft, cuddly baby blanket in gentle colors.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/11/baby-blanket.jpg", link: "https://findmycrochet.wordpress.com/2020/11/19/baby-blanket-2/" },
  { cat: "crochet", date: "2020-09-14", title: "Shell Stitch Scarf", desc: "Classic shell stitch scarf with beautiful drape.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/09/shell-stitch.jpg", link: "https://findmycrochet.wordpress.com/2020/09/14/shell-stitch-scarf/" },
  { cat: "crochet", date: "2020-05-30", title: "Rainbow Toddler Dress", desc: "Cheerful rainbow dress for a little one.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/05/rainbow-dress.jpg", link: "https://findmycrochet.wordpress.com/2020/05/30/rainbow-toddler-dress/" },
  { cat: "crochet", date: "2020-05-25", title: "Bobble Stitch Cowl", desc: "Textured cowl with playful bobble stitches.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/05/bobble-cowl.jpg", link: "https://findmycrochet.wordpress.com/2020/05/25/bobble-stitch-cowl/" },
  { cat: "crochet", date: "2020-04-26", title: "Side to Side Scarf", desc: "Unique side-to-side construction for a flowing scarf.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/04/side-to-side.jpg", link: "https://findmycrochet.wordpress.com/2020/04/26/side-to-side-scarf/" },
  { cat: "crochet", date: "2020-04-14", title: "Rainbow Cowl", desc: "Bright rainbow colors in a warm cowl.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/04/rainbow-cowl.jpg", link: "https://findmycrochet.wordpress.com/2020/04/14/rainbow-cowl/" },
  { cat: "crochet", date: "2020-04-10", title: "Rainbow Scarf", desc: "Full spectrum rainbow scarf for a pop of color.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/04/rainbow-scarf.jpg", link: "https://findmycrochet.wordpress.com/2020/04/10/rainbow-scarf/" },
  { cat: "crochet", date: "2020-04-06", title: "Suffolk Baby Afghan", desc: "Traditional Suffolk pattern baby afghan.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/04/suffolk-afghan.jpg", link: "https://findmycrochet.wordpress.com/2020/04/06/suffolk-baby-afghan/" },
  { cat: "crochet", date: "2020-03-31", title: "Baby Hat", desc: "Sweet crocheted baby hat for newborns.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/03/baby-hat.jpg", link: "https://findmycrochet.wordpress.com/2020/03/31/baby-hat/" },
  { cat: "crochet", date: "2020-03-31", title: "Toddler Cupcake Purse", desc: "Adorable cupcake-shaped purse for little ones.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/03/cupcake-purse.jpg", link: "https://findmycrochet.wordpress.com/2020/03/31/toddler-cupcake-purse/" },
  { cat: "crochet", date: "2020-02-23", title: "Beanie", desc: "Classic crocheted beanie in warm tones.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/02/beanie.jpg", link: "https://findmycrochet.wordpress.com/2020/02/23/beanie/" },
  { cat: "crochet", date: "2020-02-23", title: "Red Purse", desc: "Bold red crocheted purse \u2014 a statement accessory.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/02/red-purse.jpg", link: "https://findmycrochet.wordpress.com/2020/02/23/red-purse/" },
  { cat: "crochet", date: "2020-01-24", title: "Rainbow Mesh Scarf", desc: "Light and airy rainbow mesh scarf.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/01/rainbow-mesh.jpg", link: "https://findmycrochet.wordpress.com/2020/01/24/rainbow-mesh-scarf/" },
  { cat: "crochet", date: "2020-01-02", title: "Jazzing Stripes Scarf", desc: "Fun jazzy striped scarf with bold color combos.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2020/01/jazzing-stripes.jpg", link: "https://findmycrochet.wordpress.com/2020/01/02/jazzing-stripes-scarf/" },
  { cat: "crochet", date: "2019-12-30", title: "Gemstone Stripes Set", desc: "Matching gemstone-colored striped scarf and hat set.", img: "https://findmycrochet.wordpress.com/wp-content/uploads/2019/12/gemstone-stripes.jpg", link: "https://findmycrochet.wordpress.com/2019/12/30/gemstone-stripes-set/" },

  // ===================== EMBROIDERY =====================
  { cat: "embroidery", date: "2019-09-06", title: "Baby Giraffe", desc: "Charming embroidered baby giraffe \u2014 handstitched animal artwork.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/bg2.jpg?w=480", link: "https://myembroiderywork.wordpress.com/2019/09/06/baby-giraffe/", extra: ["https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/bg1.jpg?w=480"] },
  { cat: "embroidery", date: "2019-09-05", title: "July Creations", desc: "Monthly collection of July embroidery projects featuring birds and nature.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/d2338-img_1945.jpg", link: "https://myembroiderywork.wordpress.com/2019/09/05/july-creations/", extra: ["https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/89f74-img_1952.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/caf37-img_1946.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/2fde8-img_1947.jpg"] },
  { cat: "embroidery", date: "2019-09-05", title: "August Creations", desc: "Showcase of ten August embroidery designs in various styles.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/63fde-img_2319.jpg", link: "https://myembroiderywork.wordpress.com/2019/09/05/august-creations/", extra: ["https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/fbaef-img_2321.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/6c155-img_2241.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/f403c-img_2259.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/f4261-img_2226.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/7ee77-img_2233.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/1d1c6-img_2288.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/ad6b8-img_2251.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/9925b-img_2224.jpg","https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/55056-img_2185.jpg"] },
  { cat: "embroidery", date: "2013-12-27", title: "Butterflies", desc: "Delicate embroidered butterfly designs in vibrant colors.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/bd71e-d3.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/27/butterflies/" },
  { cat: "embroidery", date: "2013-12-27", title: "Lady Bug", desc: "Cheerful embroidered ladybug artwork.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2019/09/69496-d2.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/27/lady-bug/" },
  { cat: "embroidery", date: "2013-12-27", title: "Caterpillar", desc: "Playful embroidered caterpillar in bright colors.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2013/12/caterpillar.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/27/caterpillar/" },
  { cat: "embroidery", date: "2013-12-27", title: "Golden Princess", desc: "Decorative embroidery piece with golden accents.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2013/12/golden-princess.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/27/golden-princess/" },
  { cat: "embroidery", date: "2013-12-27", title: "Sea Horse", desc: "Marine-themed embroidery of an elegant seahorse.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2013/12/sea-horse.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/27/sea-horse/" },
  { cat: "embroidery", date: "2013-12-23", title: "Ice Cream", desc: "Fun food-themed embroidery of a colorful ice cream cone.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2013/12/ice-cream.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/23/ice-cream/" },
  { cat: "embroidery", date: "2013-12-23", title: "Butterfly", desc: "Individual butterfly embroidery with detailed wing patterns.", img: "https://myembroiderywork.wordpress.com/wp-content/uploads/2013/12/butterfly.jpg", link: "https://myembroiderywork.wordpress.com/2013/12/23/butterfly/" },

  // ===================== CAKES =====================
  { cat: "cakes", date: "2015-05-01", title: "Black Forest Cake", desc: "Classic Black Forest cake with rich chocolate and cherries.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFe2GLupLfmiDOpBEN9pj8LL6Iyq2f2PuoxbSML702_LF1Uhob00rr0h9fXeu7MYR4civDWibBl2jJqAvmdlSuEFoSpHd1AHlCn8FqQqFxw_O9W5fPDgJtvkQoDGTdOPcaOLdM55i98g0/s640/blogger-image-766481313.jpg", link: "https://cakesbylatha.blogspot.com/2015/05/black-forest-cake.html", extra: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1R_TVZeikuCpb1ClTGFhO2h338GmOmJ-BIkvA-Z5o_LI44PoR8dQ1v7BxJPJOkScXSH7WrbXjRL16kCeO2E5taF6ixBmJsruo3lNOWwhl8e_GzGlKFbcH_qpx_QD0z4ymDiyhOvQpnJA/s640/blogger-image-62761278.jpg"] },
  { cat: "cakes", date: "2015-05-01", title: "Shortcake", desc: "Light and fluffy shortcake with fresh fruit.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYhIcBv_7xUthY5hlKRQs6SwayBxpXOvKzHWVXk9YT5K1a9-YLeOS-aNYpKVdnQpAWAoxHhqv9sqrdzijPj3nG4D6pBgyxFaFwms7M0QktCD3hmlN4a0s2dUJsVlT9Q2uYbbP4DUM_fHY/s640/blogger-image--465540714.jpg", link: "https://cakesbylatha.blogspot.com/2015/05/shortcake.html" },
  { cat: "cakes", date: "2015-03-22", title: "Yuvan 3rd Birthday", desc: "Special birthday cake celebration for Yuvan's 3rd birthday.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqaLZ1P562MiTblga_VbGzKRa4AmBib7ZSGJH12sQ5FFKlU37AeJ894CHYCr6oPJGZbmSPexGqCNP97qh2C7pCJyvciQ9tTQdZS9rAsLM9d58-3ccx_1mG2qichduV0rKW98LDDRaLrtY/s640/blogger-image-874954807.jpg", link: "https://cakesbylatha.blogspot.com/2015/03/yuvan-3rd-birthday.html" },
  { cat: "cakes", date: "2013-04-23", title: "Banana Bread", desc: "Homemade banana bread recipe from Food Network.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggm6dwkkL91OoMXpTO5nF7yi-uuMJmb25c5Z5ySVYsnejtf2aIvsJ5-VZlby_EoHpU4a_gK8oXS-mJ54bLA6QYojFKBxwrqOClypM1_68d2IdQbYZHxKC-N2lOfC96K86d38Yr2-jV3sY/s640/blogger-image-1574974575.jpg", link: "https://cakesbylatha.blogspot.com/2013/04/banana-bread.html" },
  { cat: "cakes", date: "2013-03-24", title: "Barnyard Theme Cake", desc: "Elaborate barnyard-themed cake with fondant farm animals.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrpFhg8miOSSxGBvnMqnDaAevL0HNz9wwU_gsMmemKAj4NbUYRmSElxS6fYZVJRMw8GybFuHMwKrP25co4Qd_QVNLXp8TfZvC2dsMTsdopgU9Tw22DYoDzVbcOlDbxIrzVGvndMQVeoHE/s640/blogger-image--338999964.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/barnyard-theme-cake.html", extra: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimnBQf8zWtR_q6ZIHNGpGBr_lY_3itmlPKWjxHlw7vApymaU34FtMsSfGrmvh7wQc0r2b-XBXkZ36NNU49X2V5O_oHLkY2CaJC3TzLkk1TGFIHWeWYD39c20nJvBGPVOcMWvMD8CqLAos/s640/blogger-image--1385725617.jpg","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCYbbxilEulYGq5crNWJxNtUbS_6a1rHRUOKkJbuiRaJEsB8Oz7vraYafpvi1f5MrmcGoOJsGTDnFb6560akyFwxsZbvrnVp_m1BGxcZotf3AwGSL4Xh6jyyfVCtdHO5UxD3PgOV71SDk/s640/blogger-image-1856808439.jpg"] },
  { cat: "cakes", date: "2013-03-24", title: "Barn House Cake", desc: "Charming barn house cake design with detailed fondant work.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhym-yIEc9oSFIJu87Muc5uo_mZ_HtWWTZV1uD9UC3tnRFoO-ispG6rtb74n2De_XqykBSIVK6RKE_2Ih49KjGXQJi37T4v3RXwitevtSibrFASFV1xkqqeIaV_FJJ8aF33A59GXXv1vHg/s640/blogger-image-1387011985.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/barn-house-cake.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Tractor & Little Farmer", desc: "Adorable fondant tractor and farmer figure cake toppers.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghon-uEPEY5pmZGuA-B0j-92bgF8VMW5ooz-co3iZGw570VkBeLXdAoNwkWUGmfaB-JZpFNf-d4CHjHO7-sixpWnfrXCA8Im_OJZFqQAstdOQoHSX9GPO9ICssEP6KJW0FnLutv9qmeSE/s640/blogger-image-317078819.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-tractor.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Bugs", desc: "Collection of cute fondant insect decorations.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_IDln2vCmVEF-uhiqsns_O4kBdc-KEDg-YktiMST6lrr5y8Icb52YyDRJ236HtYE3IImD7qpFPgHo3NpGIw_3vsKE8M4R3SfPw62oepTv0vUqYGlwPNL7etTJyCAZtYwuBkqHn5CcTPU/s640/blogger-image-217025915.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-bugs.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Pigs", desc: "Playful fondant pig figurines for cake decoration.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcloQyJjVyG6SwhQr2ZS6lIO14dZAwJtgJ4VYWLlGOGbYx3M4AYqFaTbAxJs0dH257ztMxL0cRVex8ltAzLuZFBvB-eBfkIuljEBGVn__sO2dtFL973A7jkPkKI0SG8cSO6rNu3Yz27Qg/s640/blogger-image--943498122.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-pigs.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Rabbit", desc: "Sweet fondant rabbit cake topper.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhsaZrmjw_2g-hOeGW-eTuCGO0CoemuorGUGQVCXewwxqTowBMDk_PnbMzqMdV7seWnZe_wG_sLRt8c2ItccIhyKqy2rQQ_MCXd3Vd-jE1LykObUKt5MHrTQUAh1d01Xt2NK8Ev-9pRSQ/s640/blogger-image--310367564.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-rabbit.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Rooster", desc: "Colorful fondant rooster cake decoration.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-QvbJ8gDM4jlYJI8HjM2Vy49SAxoqqyg8uZHGUuDZXMQz-CO60UhqvyrKhpCGQMzEXOsWc3aZ_UwXyYgzjCTr_1n8PLDAboDyVoHY5gFBjJe7ADjQyVz2aPz9JfMNoljNpSJCKX7PBvs/s640/blogger-image--991821792.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-rooster.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Sheep", desc: "Fluffy fondant sheep cake topper.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf_X5AdJnncxy0yrNT7bHmH9lmxmxROHc6QzlQe_NIUdJPsXDBeZqxeWz5duYEdyXPxaOVqU78Ia-5jHax22DXzLGSwoF64d_SwnS3QKCKr2mb23N5dtpiUxpjFboOoQEBRqUxdk9FpJM/s640/blogger-image-1793486669.jpg", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-sheep.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Horse", desc: "Elegant fondant horse figure.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDBGOjqJozERNVNrkJYVjylAEf-WPY-5YFHLrem_wJyYVgMx89YSxOEhfPUBE-a29oNTX_NkZdVE-tco39HjEwmmJwVn4D4SKLj1CdJoRG7i7CmJBA8w_iLr2YRaSNfaM/s220/IMG_2976.JPG", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-horse.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Ducks", desc: "Adorable fondant duck pair for cake decoration.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDBGOjqJozERNVNrkJYVjylAEf-WPY-5YFHLrem_wJyYVgMx89YSxOEhfPUBE-a29oNTX_NkZdVE-tco39HjEwmmJwVn4D4SKLj1CdJoRG7i7CmJBA8w_iLr2YRaSNfaM/s220/IMG_2976.JPG", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-ducks.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Cow", desc: "Friendly fondant cow cake topper.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDBGOjqJozERNVNrkJYVjylAEf-WPY-5YFHLrem_wJyYVgMx89YSxOEhfPUBE-a29oNTX_NkZdVE-tco39HjEwmmJwVn4D4SKLj1CdJoRG7i7CmJBA8w_iLr2YRaSNfaM/s220/IMG_2976.JPG", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-cow.html" },
  { cat: "cakes", date: "2013-03-24", title: "Fondant Goat", desc: "Cute fondant goat figurine for cakes.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDBGOjqJozERNVNrkJYVjylAEf-WPY-5YFHLrem_wJyYVgMx89YSxOEhfPUBE-a29oNTX_NkZdVE-tco39HjEwmmJwVn4D4SKLj1CdJoRG7i7CmJBA8w_iLr2YRaSNfaM/s220/IMG_2976.JPG", link: "https://cakesbylatha.blogspot.com/2013/03/fondant-goat.html" },
  { cat: "cakes", date: "2011-04-28", title: "Tiramisu", desc: "Classic Italian tiramisu \u2014 layered coffee and mascarpone.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/tiramisu.jpg", link: "https://cakesbylatha.blogspot.com/2011/04/tiramisu.html" },
  { cat: "cakes", date: "2011-03-28", title: "Cakes Collection", desc: "Showcase of various cake designs and decorations.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/cakes-collection.jpg", link: "https://cakesbylatha.blogspot.com/2011/03/cakes.html" },
  { cat: "cakes", date: "2011-03-27", title: "Lightning McQueen Car Cake", desc: "Disney Cars-themed Lightning McQueen birthday cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/lightning-mcqueen.jpg", link: "https://cakesbylatha.blogspot.com/2011/03/lightning-mc-queen-car-cake.html" },
  { cat: "cakes", date: "2011-03-27", title: "Aladdin Theme Cake", desc: "Magical Aladdin-themed cake with fondant details.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/aladdin-theme.jpg", link: "https://cakesbylatha.blogspot.com/2011/03/aladdin-theme-cake.html" },
  { cat: "cakes", date: "2011-03-10", title: "Fondant and Gumpaste Figures", desc: "Collection of handcrafted fondant and gumpaste figures.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/fondant-gumpaste.jpg", link: "https://cakesbylatha.blogspot.com/2011/03/fondant-and-gumpaste-figures.html" },
  { cat: "cakes", date: "2010-12-25", title: "Elmo Musical Band Cake", desc: "Sesame Street Elmo musical band themed cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/elmo-musical.jpg", link: "https://cakesbylatha.blogspot.com/2010/12/elmo-musical-band-cake.html" },
  { cat: "cakes", date: "2010-12-25", title: "Minnie Mouse Cake", desc: "Disney Minnie Mouse themed birthday cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/minnie-mouse.jpg", link: "https://cakesbylatha.blogspot.com/2010/12/minnie-mouse-cake.html" },
  { cat: "cakes", date: "2010-11-23", title: "Butterscotch Cake", desc: "Rich and creamy butterscotch-flavored cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/butterscotch.jpg", link: "https://cakesbylatha.blogspot.com/2010/11/butterscotch-cake.html" },
  { cat: "cakes", date: "2010-11-07", title: "Diwali Theme Cake 2010", desc: "Festive Diwali-themed cake with traditional motifs.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/diwali-2010.jpg", link: "https://cakesbylatha.blogspot.com/2010/11/diwali-theme-cake-2010.html" },
  { cat: "cakes", date: "2010-11-07", title: "Grapes Vine Cake", desc: "Elegant grape vine decorated cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/grapes-vine.jpg", link: "https://cakesbylatha.blogspot.com/2010/11/grapes-vine.html" },
  { cat: "cakes", date: "2010-10-30", title: "Airplane Cake", desc: "High-flying airplane themed birthday cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/airplane-cake.jpg", link: "https://cakesbylatha.blogspot.com/2010/10/airplane-cake.html" },
  { cat: "cakes", date: "2010-10-25", title: "Celebration Sweetheart Cake", desc: "Romantic sweetheart cake for celebrations.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/sweetheart-cake.jpg", link: "https://cakesbylatha.blogspot.com/2010/10/celebration-sweetheart-cake.html" },
  { cat: "cakes", date: "2010-05-17", title: "Happiest Clown", desc: "Joyful clown-themed cake bringing smiles to the party.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/happiest-clown.jpg", link: "https://cakesbylatha.blogspot.com/2010/05/happiest-clown.html" },
  { cat: "cakes", date: "2010-05-10", title: "Princess in the Butterfly Garden", desc: "Enchanting princess cake set in a butterfly garden.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/princess-butterfly.jpg", link: "https://cakesbylatha.blogspot.com/2010/05/princess-in-butterfly-garden.html" },
  { cat: "cakes", date: "2010-05-06", title: "Mickey Mouse Theme Cake", desc: "Classic Disney Mickey Mouse birthday cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/mickey-mouse.jpg", link: "https://cakesbylatha.blogspot.com/2010/05/mickey-mouse-theme-cake.html" },
  { cat: "cakes", date: "2009-12-28", title: "Pretty Pinky Cake", desc: "Beautiful pink-themed celebration cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/pretty-pinky.jpg", link: "https://cakesbylatha.blogspot.com/2009/12/pretty-pinky.html" },
  { cat: "cakes", date: "2009-12-28", title: "Black Forest Cake (2009)", desc: "Rich Black Forest cake with layers of chocolate and cream.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/black-forest-2009.jpg", link: "https://cakesbylatha.blogspot.com/2009/12/black-forest-cake.html" },
  { cat: "cakes", date: "2009-12-28", title: "Christmas Cake", desc: "Festive Christmas cake with holiday decorations.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/christmas-cake.jpg", link: "https://cakesbylatha.blogspot.com/2009/12/christmas-cake.html" },
  { cat: "cakes", date: "2009-12-14", title: "Cake with Balloons", desc: "Playful balloon-decorated celebration cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/cake-balloons.jpg", link: "https://cakesbylatha.blogspot.com/2009/12/cake-with-ballons.html" },
  { cat: "cakes", date: "2009-12-09", title: "Fleur de Lis Fantasy", desc: "Elegant Fleur de Lis-inspired fantasy cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/fleur-de-lis.jpg", link: "https://cakesbylatha.blogspot.com/2009/12/fleur-de-lis-fantasy.html" },
  { cat: "cakes", date: "2009-08-24", title: "Blue Flower Garden Cake", desc: "Garden-themed cake with beautiful blue flowers.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/blue-flower.jpg", link: "https://cakesbylatha.blogspot.com/2009/08/blue-flower-garden.html" },
  { cat: "cakes", date: "2009-08-24", title: "Daisies on a Basketweave", desc: "Daisy flowers on elegant basketweave frosting.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/daisies-basketweave.jpg", link: "https://cakesbylatha.blogspot.com/2009/08/daises-on-basketweave.html" },
  { cat: "cakes", date: "2009-06-05", title: "Strawberry Shortcake", desc: "Classic strawberry shortcake with fresh berries.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/strawberry-shortcake.jpg", link: "https://cakesbylatha.blogspot.com/2009/06/strawberry-shortcake.html" },
  { cat: "cakes", date: "2009-05-26", title: "Fondant Teddy Bear", desc: "Adorable fondant teddy bear cake topper.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/fondant-teddy.jpg", link: "https://cakesbylatha.blogspot.com/2009/05/fondant-teddy-bear.html" },
  { cat: "cakes", date: "2009-05-18", title: "Rose Bouquet Cake", desc: "Elegant cake decorated with a bouquet of roses.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/rose-bouquet.jpg", link: "https://cakesbylatha.blogspot.com/2009/05/rose-bouquet-cake.html" },
  { cat: "cakes", date: "2009-05-11", title: "Baby Clothes Cake", desc: "Creative baby shower cake with fondant baby clothes.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/baby-clothes.jpg", link: "https://cakesbylatha.blogspot.com/2009/05/baby-clothes-cake.html" },
  { cat: "cakes", date: "2009-05-11", title: "Fancy Fruit Cake", desc: "Beautifully decorated fruit-topped cake.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/fancy-fruit.jpg", link: "https://cakesbylatha.blogspot.com/2009/05/fancy-fruit-cake.html" },
  { cat: "cakes", date: "2009-05-11", title: "Flowers and Confetti", desc: "Celebration cake with flowers and confetti decorations.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/flowers-confetti.jpg", link: "https://cakesbylatha.blogspot.com/2009/05/flowers-and-confetti.html" },
  { cat: "cakes", date: "2009-04-20", title: "Spring Flowers Cake", desc: "Seasonal cake blooming with spring flowers.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/spring-flowers.jpg", link: "https://cakesbylatha.blogspot.com/2009/04/spring-flowers-cake.html" },
  { cat: "cakes", date: "2009-03-02", title: "Blue Roses Cake", desc: "Stunning cake with blue rose decorations.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/blue-roses.jpg", link: "https://cakesbylatha.blogspot.com/2009/03/blue-roses-cake.html" },

  // ===================== MEHANDHI =====================
  { cat: "mehandhi", date: "2025-03-13", title: "Henna Tattoos Gallery", desc: "Gallery of 25+ henna tattoo designs on hands and arms \u2014 intricate traditional and modern patterns.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN1bzButPvqbZOdab6DHsWXsQlNXGlnuVJ94y5RLy9JNGH1UTdz3jE_gtAiWsQEHyTdZpYAWMxuG1h4qX7fb55V6Vf5HEwnfrLTZ_iEkIi1L2MSw_aoL4IY8lIqZViMEeYHPHB0P8Lm7xRbl30JtoUys0lLwllGekXct4BvkrHTpNsneLNw3k6GDcnhc/s2048/IMG_1965.JPEG", link: "https://mymehandhigallery.blogspot.com/2025/03/henna-tatoos.html", extra: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn1mesLtqunzr5NpYvCsNssbPBnaEP6sUHaoBrQT1mgS3xo6mxMNUabhsxg-uqZva8txPbc4yyUsAxx68LVAdl8x-NSien-MqeXOdGTUmAQbBSrwFlRa0VZgitOQVlE7t2uYocTTAXq4BNtgZakFrfBTIFbFgp5h-JbB82rTUCU7OWfpS7rlHohDeejIg/s1008/Resized_20230507_105401.JPEG","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ9JMCZpH_09pQ_XEg_flZwH7c-HYos6rM1leLbjOro30pWaaA6eMtRtMrAFN7LMBiwPB4v4_SOW_Z2R-Nn702M8diHZEa326iixR7m9M9458Lk8q308ecFI5nG8O1ukgSotU1G9U9rbAhdE6bB6iOBYlZrLtN5JAs-PCnEN-OdTY_kfEAhghiLXl_JsU/s2048/IMG_1966.JPEG"] },
  { cat: "mehandhi", date: "2025-03-13", title: "Henna Portfolio", desc: "Three high-resolution close-up images of elaborate henna work.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN1bzButPvqbZOdab6DHsWXsQlNXGlnuVJ94y5RLy9JNGH1UTdz3jE_gtAiWsQEHyTdZpYAWMxuG1h4qX7fb55V6Vf5HEwnfrLTZ_iEkIi1L2MSw_aoL4IY8lIqZViMEeYHPHB0P8Lm7xRbl30JtoUys0lLwllGekXct4BvkrHTpNsneLNw3k6GDcnhc/s2048/IMG_1965.JPEG", link: "https://mymehandhigallery.blogspot.com/2025/03/henna.html" },
  { cat: "mehandhi", date: "2020-02-28", title: "Mehandhi Collection", desc: "Seven beautiful henna design photographs showcasing diverse patterns.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN1bzButPvqbZOdab6DHsWXsQlNXGlnuVJ94y5RLy9JNGH1UTdz3jE_gtAiWsQEHyTdZpYAWMxuG1h4qX7fb55V6Vf5HEwnfrLTZ_iEkIi1L2MSw_aoL4IY8lIqZViMEeYHPHB0P8Lm7xRbl30JtoUys0lLwllGekXct4BvkrHTpNsneLNw3k6GDcnhc/s2048/IMG_1965.JPEG", link: "https://mymehandhigallery.blogspot.com/2020/02/" },
  { cat: "mehandhi", date: "2020-01-18", title: "Mehandi Designs", desc: "Traditional mehandi patterns with intricate detailing.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN1bzButPvqbZOdab6DHsWXsQlNXGlnuVJ94y5RLy9JNGH1UTdz3jE_gtAiWsQEHyTdZpYAWMxuG1h4qX7fb55V6Vf5HEwnfrLTZ_iEkIi1L2MSw_aoL4IY8lIqZViMEeYHPHB0P8Lm7xRbl30JtoUys0lLwllGekXct4BvkrHTpNsneLNw3k6GDcnhc/s2048/IMG_1965.JPEG", link: "https://mymehandhigallery.blogspot.com/2020/01/mehandi.html" },
  { cat: "mehandhi", date: "2020-01-18", title: "Back Hand Henna", desc: "Four stunning backhand henna application patterns.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn1mesLtqunzr5NpYvCsNssbPBnaEP6sUHaoBrQT1mgS3xo6mxMNUabhsxg-uqZva8txPbc4yyUsAxx68LVAdl8x-NSien-MqeXOdGTUmAQbBSrwFlRa0VZgitOQVlE7t2uYocTTAXq4BNtgZakFrfBTIFbFgp5h-JbB82rTUCU7OWfpS7rlHohDeejIg/s1008/Resized_20230507_105401.JPEG", link: "https://mymehandhigallery.blogspot.com/2020/01/back-hand.html" },
  { cat: "mehandhi", date: "2020-01-18", title: "Hand Henna Art", desc: "Three detailed henna hand designs.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ9JMCZpH_09pQ_XEg_flZwH7c-HYos6rM1leLbjOro30pWaaA6eMtRtMrAFN7LMBiwPB4v4_SOW_Z2R-Nn702M8diHZEa326iixR7m9M9458Lk8q308ecFI5nG8O1ukgSotU1G9U9rbAhdE6bB6iOBYlZrLtN5JAs-PCnEN-OdTY_kfEAhghiLXl_JsU/s2048/IMG_1966.JPEG", link: "https://mymehandhigallery.blogspot.com/2020/01/hand.html" },
  { cat: "mehandhi", date: "2009-02-01", title: "Henna Art (2009)", desc: "Early henna designs showcasing traditional application techniques.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN1bzButPvqbZOdab6DHsWXsQlNXGlnuVJ94y5RLy9JNGH1UTdz3jE_gtAiWsQEHyTdZpYAWMxuG1h4qX7fb55V6Vf5HEwnfrLTZ_iEkIi1L2MSw_aoL4IY8lIqZViMEeYHPHB0P8Lm7xRbl30JtoUys0lLwllGekXct4BvkrHTpNsneLNw3k6GDcnhc/s2048/IMG_1965.JPEG", link: "https://mymehandhigallery.blogspot.com/2009/02/blog-post.html" },
  { cat: "mehandhi", date: "2008-10-01", title: "Henna Art (2008)", desc: "Earliest henna creations \u2014 four linked images of original designs.", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn1mesLtqunzr5NpYvCsNssbPBnaEP6sUHaoBrQT1mgS3xo6mxMNUabhsxg-uqZva8txPbc4yyUsAxx68LVAdl8x-NSien-MqeXOdGTUmAQbBSrwFlRa0VZgitOQVlE7t2uYocTTAXq4BNtgZakFrfBTIFbFgp5h-JbB82rTUCU7OWfpS7rlHohDeejIg/s1008/Resized_20230507_105401.JPEG", link: "https://mymehandhigallery.blogspot.com/2008/10/blog-post.html" },
];

// ===== CATEGORY METADATA =====
const categoryMeta = {
  crochet:    { label: "Crochet",    color: "#7b68ae", icon: "\uD83E\uDDF6" },
  embroidery: { label: "Embroidery", color: "#c06070", icon: "\uD83E\uDEA1" },
  cakes:      { label: "Cakes",      color: "#d4956a", icon: "\uD83C\uDF82" },
  mehandhi:   { label: "Mehandhi",   color: "#6a9a6a", icon: "\u270B" },
  kolam:      { label: "Kolam & Blog", color: "#5a8ab5", icon: "\u2728" },
  mywork:     { label: "My Work",    color: "#b8835a", icon: "\ud83d\udcc2" },
};

// ===== STATE =====
let activeCategory = "all";
let viewMode = "grid"; // grid or timeline
let lightboxImages = [];
let lightboxIndex = 0;

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderPosts();
  setupFilters();
  setupViewToggle();
  setupLightbox();
  setupBackToTop();
  loadMyWorkFromFolder();
});

// ===== STATS =====
function renderStats() {
  const counts = {};
  posts.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  const years = new Set(posts.map(p => p.date.slice(0,4)));

  document.getElementById("stat-total").textContent = posts.length;
  document.getElementById("stat-years").textContent = `${Math.min(...[...years])}–${Math.max(...[...years])}`;
  document.getElementById("stat-categories").textContent = Object.keys(counts).length;
}

// ===== RENDER POSTS =====
function renderPosts() {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  const filtered = activeCategory === "all"
    ? [...posts]
    : posts.filter(p => p.cat === activeCategory);

  // Sort by date descending
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results">No posts found</div>';
    return;
  }

  container.className = viewMode === "timeline" ? "posts-grid timeline-view" : "posts-grid";

  let currentYear = null;

  filtered.forEach((post, idx) => {
    const year = post.date.slice(0, 4);

    if (year !== currentYear) {
      currentYear = year;
      const divider = document.createElement("div");
      divider.className = "year-divider";
      divider.style.gridColumn = "1 / -1";
      divider.innerHTML = `<span class="year-label">${year}</span><span class="year-line"></span>`;
      container.appendChild(divider);
    }

    const card = document.createElement("article");
    card.className = "post-card";
    card.style.animationDelay = `${(idx % 10) * 0.05}s`;

    const dateFormatted = new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });

    const meta = categoryMeta[post.cat];
    const allImages = [post.img, ...(post.extra || [])];

    let galleryHtml = "";
    if (post.extra && post.extra.length > 0) {
      galleryHtml = '<div class="card-gallery">' +
        allImages.map((url, i) =>
          `<img src="${url}" alt="${post.title} ${i+1}" loading="lazy" data-images='${JSON.stringify(allImages)}' data-index="${i}" class="gallery-thumb" onerror="this.style.display='none'">`
        ).join("") +
        "</div>";
    }

    card.innerHTML = `
      <div class="card-image">
        <span class="card-badge badge-${post.cat}">${meta.icon} ${meta.label}</span>
        <img src="${post.img}" alt="${post.title}" loading="lazy"
             onerror="this.classList.add('error'); this.parentElement.innerHTML += '<div class=\\'img-fallback\\'>${meta.icon} ${meta.label}</div>'" >
      </div>
      <div class="card-body">
        <div class="card-date">${dateFormatted}</div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-desc">${post.desc}</p>
      </div>
      ${galleryHtml}
    `;

    // Click to open lightbox on main image
    const mainImg = card.querySelector(".card-image");
    mainImg.addEventListener("click", () => {
      openLightbox(allImages, 0, post.title);
    });

    // Click on original blog
    const cardBody = card.querySelector(".card-body");
    cardBody.addEventListener("click", () => {
      window.open(post.link, "_blank");
    });
    cardBody.style.cursor = "pointer";

    container.appendChild(card);
  });
}

// ===== FILTERS =====
function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      renderPosts();
    });
  });
}

// ===== VIEW TOGGLE =====
function setupViewToggle() {
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      viewMode = btn.dataset.view;
      renderPosts();
    });
  });
}

// ===== LIGHTBOX =====
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  prevBtn.addEventListener("click", () => navigateLightbox(-1));
  nextBtn.addEventListener("click", () => navigateLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Gallery thumb clicks
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("gallery-thumb")) {
      e.stopPropagation();
      const images = JSON.parse(e.target.dataset.images);
      const index = parseInt(e.target.dataset.index);
      openLightbox(images, index, "");
    }
  });
}

function openLightbox(images, index, caption) {
  lightboxImages = images;
  lightboxIndex = index;
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
  updateLightboxImage(caption);
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage("");
}

function updateLightboxImage(caption) {
  const img = document.querySelector("#lightbox img");
  const cap = document.querySelector(".lightbox-caption");
  img.src = lightboxImages[lightboxIndex];
  cap.textContent = caption || `${lightboxIndex + 1} / ${lightboxImages.length}`;

  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");
  prevBtn.style.display = lightboxImages.length > 1 ? "flex" : "none";
  nextBtn.style.display = lightboxImages.length > 1 ? "flex" : "none";
}

// ===== BACK TO TOP =====
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== MY WORK FOLDER LOADER =====
// Reads images from the "My Work/" folder on GitHub at runtime so the user can
// drop new images into the folder and have them appear without code changes.
const MYWORK_REPO = "lbalasundaram/creativesideofme";
const MYWORK_BRANCH = "main";
const MYWORK_FOLDER = "My Work";
const IMG_EXT = /\.(jpe?g|png|gif|webp|bmp|svg)$/i;

async function loadMyWorkFromFolder() {
  const apiUrl = `https://api.github.com/repos/${MYWORK_REPO}/contents/${encodeURIComponent(MYWORK_FOLDER)}?ref=${MYWORK_BRANCH}`;
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      if (res.status !== 404) console.warn(`My Work folder load failed: ${res.status}`);
      return;
    }
    const items = await res.json();
    if (!Array.isArray(items)) return;

    const today = new Date().toISOString().slice(0, 10);
    const newPosts = items
      .filter(it => it.type === "file" && IMG_EXT.test(it.name))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(it => ({
        cat: "mywork",
        date: today,
        title: it.name.replace(IMG_EXT, "").replace(/[-_]+/g, " "),
        desc: "",
        img: it.download_url,
        link: it.html_url
      }));

    if (newPosts.length === 0) return;

    posts = posts.concat(newPosts);
    renderStats();
    renderPosts();
  } catch (err) {
    console.warn("My Work folder load error:", err);
  }
}
