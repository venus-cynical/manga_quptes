const mangaInfo = {
  NARUTO: {
    description: "忍の世界を舞台に、主人公うずまきナルトが火影を目指し成長していく物語。友情、努力、勝利をテーマに描かれる忍者アクション漫画です。",
    quotes: [
      {
        text: "諦めたらそこで試合終了だってばよ！",
        character: "うずまきナルト",
        image: "/images/naruto/naruto.jpg",
      },
      {
        text: "自分の忍道は曲げねぇ",
        character: "うずまきナルト",
        image: "/images/naruto/naruto.jpg",
      },
      {
        text: "一人じゃないって事を教えてくれた",
        character: "我愛羅",
        image: "/images/naruto/gaara.jpg",
      },
    ],
  },
  BLEACH: {
    description: "死神の少年・黒崎一護を主人公に、現世とソウル・ソサエティを舞台にした壮大なファンタジー活劇です。",
    quotes: [
      {
        text: "心か技か体か",
        character: "更木剣八",
        image: "/images/bleach/kenpachi.jpg",
      },
      {
        text: "俺は守りたい人を守れる強さが欲しいだけだ",
        character: "黒崎一護",
        image: "/images/bleach/ichigo.jpg",
      },
      {
        text: "迷うな。進め",
        character: "朽木白哉",
        image: "/images/bleach/byakuya.jpg",
      },
    ],
  },
  "ONE PIECE": {
    description: "海賊王を目指す少年モンキー・D・ルフィと仲間たちの大冒険。夢と友情、自由を追い求める海洋冒険ファンタジーです。",
    quotes: [
      {
        text: "海賊王に、俺はなる！",
        character: "モンキー・D・ルフィ",
        image: "/images/onepiece/luffy.jpg",
      },
      {
        text: "仲間だから",
        character: "モンキー・D・ルフィ",
        image: "/images/onepiece/luffy.jpg",
      },
      {
        text: "もっと自由に生きろよ！",
        character: "ポートガス・D・エース",
        image: "/images/onepiece/ace.jpg",
      },
    ],
  },
  ジョジョの奇妙な冒険: {
    description: "ジョースター家の血を巡る長編物語。独特な作風とポーズ、スタンドバトルで知られる伝説的な作品です。",
    quotes: [
      {
        text: "やれやれだぜ",
        character: "空条承太郎",
        image: "/images/jojo/jotaro.jpg",
      },
      {
        text: "この味は嘘をついている味だぜ！",
        character: "ブローノ・ブチャラティ",
        image: "/images/jojo/bruno.jpg",
      },
      {
        text: "無駄無駄無駄無駄！",
        character: "DIO",
        image: "/images/jojo/dio.jpg",
      },
    ],
  },
};

function showQuotes(manga) {
  const quoteSection = document.getElementById('quote-section');
  const quoteContent = document.getElementById('quote-content');
  
  // すべての漫画の情報をリセット
  quoteContent.innerHTML = '';
  
  const quotes = mangaInfo[manga].quotes;
  quotes.forEach(quote => {
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quote');
    
    const img = document.createElement('img');
    img.src = quote.image;
    img.alt = quote.character;
    img.classList.add('quote-image');
    
    const text = document.createElement('p');
    text.textContent = `『${quote.text}』`;
    text.classList.add('quote-text');
    
    const character = document.createElement('p');
    character.textContent = `- ${quote.character}`;
    character.classList.add('quote-character');
    
    quoteDiv.appendChild(img);
    quoteDiv.appendChild(text);
    quoteDiv.appendChild(character);
    
    quoteContent.appendChild(quoteDiv);
  });
  
  // Quoteセクションを表示
  quoteSection.style.display = 'block';
}

function hideQuotes() {
  const quoteSection = document.getElementById('quote-section');
  quoteSection.style.display = 'none';
}
