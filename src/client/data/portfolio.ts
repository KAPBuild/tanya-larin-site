export interface ArtworkItem {
  id: string
  title: string
  category: Category
  image: string
  description?: string
  medium?: string
  dimensions?: string
  year?: string
  featured?: boolean
  stripePriceId?: string
  price?: number
}

export type Category =
  | 'Allegorical'
  | 'Illustration'
  | 'Jewelry'
  | 'Portraits'
  | 'Pottery'
  | 'Still Life'

export const categories: Category[] = [
  'Allegorical',
  'Illustration',
  'Jewelry',
  'Portraits',
  'Pottery',
  'Still Life',
]

export const artworks: ArtworkItem[] = [
  // ===== ALLEGORICAL (4) =====
  {
    id: 'allegorical-angel',
    title: 'Angel',
    category: 'Allegorical',
    image: '/images/portfolio/allegorical/Angel_14x12_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '14" x 12"',
    featured: true,
  },
  {
    id: 'allegorical-bride-in-blue',
    title: 'Bride in Blue',
    category: 'Allegorical',
    image: '/images/portfolio/allegorical/Bride_in_Blue_20x16_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '20" x 16"',
  },
  {
    id: 'allegorical-dream',
    title: 'Dream',
    category: 'Allegorical',
    image: '/images/portfolio/allegorical/Dream_24x20_oil_14k_Gold_Leaf_on_Canvas_Long_Island_Art_Society_Award_2003.jpg',
    medium: 'Oil, 14k gold leaf on canvas',
    dimensions: '24" x 20"',
    description: 'Long Island Art Society Award, 2003',
    featured: true,
  },
  {
    id: 'allegorical-rose',
    title: 'Rose',
    category: 'Allegorical',
    image: '/images/portfolio/allegorical/Rose_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
  },

  // ===== ILLUSTRATION (9) =====
  {
    id: 'illustration-artists-house',
    title: "Artist's House",
    category: 'Illustration',
    image: '/images/portfolio/illustration/Artist\'s_House_5x7_ink_watercolor_on_bristol_front_of_holiday_greeting_card.jpg',
    medium: 'Ink, watercolor on Bristol',
    dimensions: '5" x 7"',
    description: 'Front of holiday greeting card',
  },
  {
    id: 'illustration-couple-on-bench',
    title: 'Couple on Bench',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Couple_on_Bench_6x8_Ink_on_Bristol_Book_Cover_illustration.jpg',
    medium: 'Ink on Bristol',
    dimensions: '6" x 8"',
    description: 'Book cover illustration',
    featured: true,
  },
  {
    id: 'illustration-elisabeth-summer-hat',
    title: 'Elisabeth in Summer Hat',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Elisabeth_in_Summer_Hat_13x10_Graphite_on_paper.jpg',
    medium: 'Graphite on paper',
    dimensions: '13" x 10"',
  },
  {
    id: 'illustration-girl-talk',
    title: 'Girl Talk',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Girl_Talk_Graphite_on_Paper.jpg',
    medium: 'Graphite on paper',
    featured: true,
  },
  {
    id: 'illustration-kara-irish-dance',
    title: 'Kara in Irish Dance Dress',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Kara_in_Irish_Dance_Dress_16x9_watercolor_french_bristol.jpg',
    medium: 'Watercolor on French Bristol',
    dimensions: '16" x 9"',
  },
  {
    id: 'illustration-mice-champagne',
    title: 'Mice Celebrating With Champagne',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Mice_Celebrating_With_Champagne_5x6_Second_Page_of_greeting_card_for_Bio_Research_Lab.jpg',
    medium: 'Ink, watercolor on Bristol',
    dimensions: '5" x 6"',
    description: 'Greeting card for Bio Research Lab',
  },
  {
    id: 'illustration-mice-microscope',
    title: 'Mice Decorating Microscope',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Mice_Decortating_Microscope_8x6_Front_of_New_Year\'s_greeting_card_for_Bio_Research_Lab_Ink_watercolor_on_bristol.jpg',
    medium: 'Ink, watercolor on Bristol',
    dimensions: '8" x 6"',
    description: "Front of New Year's greeting card for Bio Research Lab",
  },
  {
    id: 'illustration-russian-girl',
    title: 'Russian Girl',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Russian_Girl_5x5_India_Ink_on_Bristol.jpg',
    medium: 'India ink on Bristol',
    dimensions: '5" x 5"',
  },
  {
    id: 'illustration-vin-santo-bar',
    title: 'Vin Santo Bar',
    category: 'Illustration',
    image: '/images/portfolio/illustration/Vin_Santo_Bar_8x10_India_Ink_on_Bristol_Make_Yourself_a_Little_Merry_Evening_and_Improvisation_for_painting.jpg',
    medium: 'India ink on Bristol',
    dimensions: '8" x 10"',
    description: 'Make Yourself a Little Merry — evening and improvisation for painting',
  },

  // ===== JEWELRY (3) =====
  {
    id: 'jewelry-antique-gold-bracelet',
    title: 'Antique Gold Cufflink and Button Bracelet',
    category: 'Jewelry',
    image: '/images/portfolio/jewelry/Antique-Gold-Cuffling-and-Button-Bracelet-2_Rubey-emerald-sapphier-and-diamond-insert-2_Pearls-Gold-Tubing-Gold-Chain-Gold-Double-Lock-With-Security-Chain.jpg',
    medium: 'Ruby, emerald, sapphire, diamond inserts; pearls, gold tubing, gold chain, gold double lock with security chain',
    featured: true,
  },
  {
    id: 'jewelry-copper-bracelet',
    title: 'Forged Copper Bracelet',
    category: 'Jewelry',
    image: '/images/portfolio/jewelry/Forged_Copper_bracelet_cutwork_8in_Diameter.jpg',
    medium: 'Forged copper, cutwork',
    dimensions: '8" diameter',
  },
  {
    id: 'jewelry-sunny-pin',
    title: 'Sunny Pin',
    category: 'Jewelry',
    image: '/images/portfolio/jewelry/Sunny_Pin_2x3_copper_and_bronze.jpg',
    medium: 'Copper and bronze',
    dimensions: '2" x 3"',
    featured: true,
  },

  // ===== PORTRAITS (18) =====
  {
    id: 'portraits-50-year-anniversary',
    title: '50 Year Anniversary',
    category: 'Portraits',
    image: '/images/portfolio/portraits/50_year_anniversary_24x36_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 36"',
    featured: true,
  },
  {
    id: 'portraits-alex',
    title: 'Alex',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Alex_20x16_oil_on_Canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '20" x 16"',
  },
  {
    id: 'portraits-christoph',
    title: 'Christoph',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Christoph_20x16_oil_on_board.jpg',
    medium: 'Oil on board',
    dimensions: '20" x 16"',
  },
  {
    id: 'portraits-christopher-drozd',
    title: 'Christopher Drozd',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Christopher_Drozd_30x40_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '30" x 40"',
  },
  {
    id: 'portraits-conall',
    title: 'Conall',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Conall_24x20_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 20"',
  },
  {
    id: 'portraits-elisabeth',
    title: 'Elisabeth',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Elisabeth_24x20_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 20"',
  },
  {
    id: 'portraits-esme',
    title: 'Esme',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Esme_24x20_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 20"',
  },
  {
    id: 'portraits-henry',
    title: 'Henry',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Henry_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
  },
  {
    id: 'portraits-madison-taylor',
    title: 'Madison Taylor',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Madison_Taylor_24x29_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 29"',
  },
  {
    id: 'portraits-peter-drozd',
    title: 'Peter Drozd',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Peter_Drozd_24x20_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 20"',
  },
  {
    id: 'portraits-sasha',
    title: 'Sasha Belotserkovski — Flowers Pillow',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Sasha_Belotserkovski_FLowers_Pillow_24x40_Oil_on_canvas_Independent_Art_Society_Award_Of_Merit_Long_Island_New_York.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 40"',
    description: 'Independent Art Society Award of Merit, Long Island, New York',
    featured: true,
  },
  {
    id: 'portraits-self-portrait',
    title: 'Self Portrait',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Self_Portrait_27x24_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '27" x 24"',
  },
  {
    id: 'portraits-tess-ivan',
    title: 'Tess & Ivan',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Tess_&_Ivan_40x30_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '40" x 30"',
  },
  {
    id: 'portraits-tess-window',
    title: 'Tess by Window',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Tess_by_window_30x27_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '30" x 27"',
  },
  {
    id: 'portraits-tess-cat',
    title: 'Tess with Cat',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Tess_with_cat_24x20_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 20"',
  },
  {
    id: 'portraits-vannya',
    title: 'Vannya',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Vannya_20x24_Dry_Brush_oil_on_canvas.jpg',
    medium: 'Dry brush oil on canvas',
    dimensions: '20" x 24"',
  },
  {
    id: 'portraits-victoria',
    title: 'Victoria',
    category: 'Portraits',
    image: '/images/portfolio/portraits/Victoria_24x20_Oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '24" x 20"',
  },
  {
    id: 'portraits-william',
    title: 'William',
    category: 'Portraits',
    image: '/images/portfolio/portraits/William_20x24_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '20" x 24"',
  },

  // ===== POTTERY (6) =====
  {
    id: 'pottery-dragons-incense',
    title: 'Dragons Incense Holder',
    category: 'Pottery',
    image: '/images/portfolio/pottery/Dragons_incense_holder_12Lx3x4_sculpture_clay_glaze.jpg',
    medium: 'Sculpture clay, glaze',
    dimensions: '12"L x 3" x 4"',
    featured: true,
  },
  {
    id: 'pottery-joker-mask',
    title: 'Joker Mask',
    category: 'Pottery',
    image: '/images/portfolio/pottery/Joker_Mask_9Hx6x3_white_porcelain_14k_Gold_Leaf_glaze.jpg',
    medium: 'White porcelain, 14k gold leaf, glaze',
    dimensions: '9"H x 6" x 3"',
    featured: true,
  },
  {
    id: 'pottery-spaghetti-vase',
    title: 'Spaghetti Vase',
    category: 'Pottery',
    image: '/images/portfolio/pottery/Spagghetti_Vase_9Hx5x5_clay_glaze.jpg',
    medium: 'Clay, glaze',
    dimensions: '9"H x 5" x 5"',
  },
  {
    id: 'pottery-stitched-vase',
    title: 'Stitched Vase',
    category: 'Pottery',
    image: '/images/portfolio/pottery/Stitched_Vase_10Hx6x6_clay_imprint_glaze.jpg',
    medium: 'Clay, imprint, glaze',
    dimensions: '10"H x 6" x 6"',
  },
  {
    id: 'pottery-tender-snake',
    title: 'Tender Snake',
    category: 'Pottery',
    image: '/images/portfolio/pottery/Tender_Snake_large_candle_holder_22Hx7x5_sculpture_clay_glaze_and_imprint.jpg',
    medium: 'Sculpture clay, glaze and imprint',
    dimensions: '22"H x 7" x 5"',
    description: 'Large candle holder',
  },
  {
    id: 'pottery-timekeeper-lady',
    title: 'Timekeeper Lady Clock',
    category: 'Pottery',
    image: '/images/portfolio/pottery/Timekeeper_Lady_clocl_20Hx15x5_sculpture_clay_glaze_14k_Gold_Leaf_Clock Mechanism.jpg',
    medium: 'Sculpture clay, glaze, 14k gold leaf, clock mechanism',
    dimensions: '20"H x 15" x 5"',
  },

  // ===== STILL LIFE (4) =====
  {
    id: 'still-life-rose-creatures',
    title: 'Rose and Creatures',
    category: 'Still Life',
    image: '/images/portfolio/still-life/rose_and_creatures_20x24_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '20" x 24"',
    featured: true,
  },
  {
    id: 'still-life-cheese',
    title: 'Still Life with Cheese',
    category: 'Still Life',
    image: '/images/portfolio/still-life/Still_Life_with_Cheese_20x16_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '20" x 16"',
  },
  {
    id: 'still-life-egg',
    title: 'Still Life with Egg',
    category: 'Still Life',
    image: '/images/portfolio/still-life/Still_Life_with_Egg_20x16_oil_on_canvas.jpg',
    medium: 'Oil on canvas',
    dimensions: '20" x 16"',
    featured: true,
  },
  {
    id: 'still-life-key',
    title: 'Still Life With Key',
    category: 'Still Life',
    image: '/images/portfolio/still-life/Still_Life_With_Key_16x20_oil_on_board.jpg',
    medium: 'Oil on board',
    dimensions: '16" x 20"',
  },
]
