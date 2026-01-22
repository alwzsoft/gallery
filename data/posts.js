const posts = [
  {
    title: "치킨무 Chicken-mu",
    img: "culture/chicken_mu.jpg",
    desc: `<strong>Sweet & Sour Pickled Radish, the Ultimate Palate Cleanser</strong><br><span class="blue">"Crunchy Cubes", "Vinegar Brine", "Grease Cutter", "Korean Fried Chicken's Best Friend"</span><br>No Korean fried chicken experience is complete without these small, white, crunchy cubes of pickled radish. Served in a sweet and tangy vinegar brine, 'Chicken-mu' is specifically designed to cut through the oiliness of fried food, refreshing your taste buds between every bite.`,
    category: "food",
    date: "1/20/2026"
  },
  {
    title: "케요네즈 샐러드 Keyonejeu Salad",
    img: "culture/cabbage_salad.jpg",
    desc: `<strong>Retro Cabbage Salad with a Ketchup-Mayo Twist</strong><br><span class="blue">"Shredded Cabbage", "Pink Sauce", "Old-school Vibe", "Classic Pairing"</span><br>A nostalgic staple in traditional Korean chicken houses, this simple salad features finely shredded cabbage topped with a 'Keyonejeu' (Ketchup + Mayonnaise) sauce. While simple, its creamy and tangy flavor provides a perfect crisp contrast to the crunchy chicken skin, bringing back 'old-school' memories for many Koreans.`,
    category: "food",
    date: "1/20/2026"
  },
  {
    title: "치맥 Chimaek",
    img: "culture/chimaek.jpg",
    desc: `<strong>Chicken and Beer: Korea's Iconic Social Pairing</strong><br><span class="blue">"Chicken + Maekju", "Han River Picnic", "Sports Night Essential", "Oxford Dictionary Entry"</span><br>A portmanteau of 'Chicken' and 'Maekju' (beer), Chimaek is more than just a meal—it's a cultural phenomenon. Whether it's a picnic by the Han River, a gathering to watch a soccer match, or a late-night office dinner, Chimaek symbolizes joyful social bonding. This pairing has become so globally famous that it was even officially added to the Oxford English Dictionary!`,
    category: "food",
    date: "1/20/2026"
  },
  {
    title: "맥주 Maek-ju",
    img: "culture/beer.jpg",
    desc: `<strong>Beer. Light, Fizzy, and Extra Cold: The Perfect Chimaek Partner</strong><br><span class="blue">"Lager Style", "Crisp Carbonation", "Somaek Culture", "The Colder the Better"</span><br>Korean lagers are famous for their light body and high carbonation, making them incredibly refreshing. While some connoisseurs call them "watery," this clean finish is actually a strategic advantage—it cleanses the palate after oily chicken bites without overpowering the flavor. Best served in a chilled glass, it's the 'fizz' that completes the Chimaek experience!`,
    category: "food",
    date: "1/20/2026"
  },
  {
    title: "최강록 Choi Kang-rok",
    img: "culture/choi.png",
    desc: `<strong>The Master of Braising, a Viral Star Chef</strong><br><span class="blue">"MasterChef Korea", "Culinary Philosophy", "Humorous Quotes", "Braising King"</span><br>A renowned chef famous for his deep expertise in Japanese-style braising. Recently viral for his unique, humble personality and 'memorable' quotes on cooking shows. His meticulous approach to ingredients makes him one of the most respected chefs in Korea.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "파전 Pa-jeon",
    img: "culture/pajeon.jpg",
    desc: `<strong>Korean Savory Pancake, the Best Rainy Day Treat</strong><br><span class="blue">"Scallions", "Seafood Mix", "Crispy & Savory", "Rainy Day Tradition"</span><br>A crispy, savory pancake loaded with fresh green onions (Pa). The most popular version is 'Haemul Pajeon,' packed with various seafood. In Korea, it's a tradition to enjoy hot Pajeon with Makgeolli whenever it rains!`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "막걸리 Mak-geol-li",
    img: "culture/makgeolli.jpg",
    desc: `<strong>Cloudy Rice Wine, the Oldest Spirit in Korea</strong><br><span class="blue">"Sparkling & Creamy", "Pajeon Buddy", "Traditional Bowl", "Low Alcohol"</span><br>A refreshing, milky rice wine with a hint of sweetness and carbonation. Traditionally enjoyed in brass bowls on rainy days with savory pancakes (Pajeon), it's now trending with modern fruit flavors like peach and chestnut!`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "눈오리 Nun-o-ri",
    img: "culture/snowduck.jpg",
    desc: `<strong>Cute Snow Shapes, a Winter Trend</strong><br><span class="blue">"Duck, Heart, Star, Penguin", "Snow Maker", "K-Pop Trend", "Social Media Fun"</span><br>More than just ducks! These popular Korean snow makers now come in various adorable shapes like hearts, stars, and penguins. Join the K-Pop idols and locals in making your own cute snow army for fun social media photos!`,
    category: "culture",
    date: "1/19/2026"
  },
  {
    title: "존댓말 Jon-daet-mal",
    img: "culture/honorifics.jpg",
    desc: `<strong>Korean Honorifics, A Core of Respect</strong><br><span class="blue">"Age Hierarchy", "Formal/Informal", "Polite Speech", "Cultural Nuance"</span><br>Beyond simple politeness, 'Jondaetmal' is a complex system of honorifics embedded in Korean language. It reflects social hierarchy based on age and status, showing respect to elders and superiors through specific verb endings and vocabulary.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "태극기 Tae-geuk-gi",
    img: "culture/flag.jpg",
    desc: `<strong>The National Flag of Korea, Symbol of Harmony</strong><br><span class="blue">"White Background", "Taegeuk Circle", "Four Trigrams", "Peace"</span><br>The Korean flag symbolizes the harmony of the universe. The white background represents peace, the red and blue circle signifies balance(Yin and Yang), and the four black trigrams represent sky, earth, water, and fire.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "이재명 Lee Jae-myung",
    img: "culture/president.jpeg",
    desc: `<strong>The 21st President of the Republic of Korea</strong><br><span class="blue">"Administration", "Public Service", "Economic Policy", "Leadership"</span><br>Serving as the current President of South Korea, he is known for his extensive background in local administration. His presidency focuses on practical policies, public welfare, and strengthening Korea's global standing in technology and culture.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "소주 So-ju",
    img: "culture/soju.png",
    desc: `<strong>The Spirit of Korea, Global Best-selling Liquor</strong><br><span class="blue">"Iconic Green Bottle", "Somaek (Soju+Beer)", "Fruit Soju", "K-Drama Essential"</span><br>Meet the world's most popular spirit! Often called 'Korean Vodka,' this clear liquor in an iconic green bottle is best enjoyed chilled with friends. Experience the 'Somaek' culture or try sweet fruit flavors like peach and grape.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "감자탕 Gamja-tang",
    img: "culture/gamjatang.jpg",
    desc: `<strong>Spicy Pork Backbone Stew, a Feast for the Senses</strong><br><span class="blue">"Hearty Pork Spine", "Spicy Broth", "Fried Rice Course", "Soul Food"</span><br>Don't let the name fool you—while 'Gamja' means potato, the star of this dish is the tender pork backbones! Enjoy the deep, spicy broth with perilla seeds, and don't forget the mandatory 'Bokkeumbap' (fried rice) at the end.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "국밥 Guk-bap",
    img: "culture/gukbab.jpg",
    desc: `<strong>Hearty Hot Soup with Rice, Korea's Soul Food</strong><br><span class="blue">"Busan Pork Rice Soup", "Sundae-guk", "Regional Specialties"</span><br>A warm bowl of soup that reflects regional pride! From Busan's famous 'Dwaeji-gukbap' (Pork Rice Soup) to the savory 'Sundae-gukbap' (Blood Sausage Soup) found nationwide, each city offers a unique broth and experience.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "올리브영 Ol-live-young",
    img: "culture/oliveyoung.png",
    desc: `<strong>The "Sephora" of Korea, K-Beauty Paradise</strong><br><span class="blue">"Skincare", "Mask Packs", "Viral Items", "Global Best-sellers"</span><br>The ultimate destination for K-beauty lovers! From viral sunscreens to soothing mask packs, you can test and buy all the trending skincare and makeup products that Korean celebrities actually use.`,
    category: "shopping",
    date: "1/18/2026"
  },
  {
    title: "다이소 Dai-so",
    img: "culture/daiso.png",
    desc: `<strong>Household items, "Everything is there!"</strong><br><span class="blue">"Affordable", "K-Beauty", "Stationery", "Home Deco"</span><br>A paradise of high-quality items at incredibly low prices (usually $1~$5). From trendy K-beauty products to unique Korean stationery, it's the best place to find practical souvenirs for your friends!`,
    category: "shopping",
    date: "1/18/2026"
  },
  {
    title: "편의점 Pyeon-ui-jeom",
    img: "culture/cvs.png",
    desc: `<strong>Convenience store, 24/7</strong><br><span class="blue">"CU", "GS25", "Seven eleven", "emart24"</span><br>It's a life-saver! Beyond food, you can find emergency medicines, send parcels, charge your phone, and buy daily essentials like umbrellas or shirts anytime, anywhere in Korea.`,
    category: "shopping",
    date: "1/18/2026"
  },
  {
    title: "붕어빵 Bungeo-ppang",
    img: "culture/bungeoppang.jpg",
    desc: `<strong>Fish-shaped Pastry, the King of Winter Snacks</strong><br><span class="blue">"Sweet Red Bean", "Creamy Custard", "Winter Street Food", "Bungeo-se-kwon"</span><br>A nostalgic winter treat! These fish-shaped waffles are crispy on the outside and filled with warm sweetness. In Korea, we even have a term 'Bungeo-se-kwon' for areas lucky enough to have a street stall nearby.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "두바이 쫀득 쿠키 Du-jjon-ku",
    img: "culture/dubai_cookie.png",
    desc: `<strong>Crunchy & Chewy, the Viral Dessert Trend</strong><br><span class="blue">"Pistachio Kadayif", "Rich Chocolate", "Crunchy Texture", "K-Dessert Spin-off"</span><br>The hottest dessert trend in Korea! This unique cookie combines the nutty flavor of pistachio and the signature crunch of 'Kadayif' noodles from Dubai chocolate, reimagined into a soft, chewy Korean-style cookie.`,
    category: "food",
    date: "1/19/2026"
  }
];
