document.addEventListener('DOMContentLoaded', function() {
    const mangaData = {
        naruto: {
            title: "NARUTO",
            description: "忍の世界を舞台に、主人公うずまきナルトが火影を目指し成長していく物語。友情、努力、勝利をテーマに描かれる忍者アクション漫画。",
            quotes: [
                { text: "『諦めたらそこで試合終了だってばよ！』", author: "うずまきナルト", image: "images/naruto/naruto.jpg" },
                { text: "『俺が諦めるのを諦めろ！』", author: "うずまきナルト", image: "images/naruto/naruto.jpg" },
                { text: "『忍者ってのは背中で語るんだ』", author: "はたけカカシ", image: "images/naruto/kakashi.jpg" },
                { text: "『いつか必ず…夢を叶えてやる！』", author: "うずまきナルト", image: "images/naruto/naruto.jpg" }
            ]
        },
        bleach: {
            title: "BLEACH",
            description: "死神の少年・黒崎一護を主人公に、現世とソウル・ソサエティを舞台にした壮大なファンタジー活劇です。",
            quotes: [
                { text: "『心は誰にも見えない。でも、心遣いは見える。』", author: "黒崎一護", image: "images/bleach/ichigo.jpg" },
                { text: "『生きている限りはその生を信じろ』", author: "黒崎一護", image: "images/bleach/ichigo.jpg" },
                { text: "『戦いを止めるつもりはない』", author: "黒崎一護", image: "images/bleach/ichigo.jpg" },
                { text: "『絶望を跳ね返して進む、それが俺の生き方だ』", author: "黒崎一護", image: "images/bleach/ichigo.jpg" }
            ]
        },
        onepiece: {
            title: "ONE PIECE",
            description: "海賊王を目指す少年モンキー・D・ルフィと仲間たちの大冒険。夢と友情、自由を追い求める海洋冒険漫画です。",
            quotes: [
                { text: "『海賊王に俺はなる！』", author: "モンキー・D・ルフィ", image: "images/onepiece/luffy.jpg" },
                { text: "『仲間がいるから、俺は強くなれるんだ！』", author: "モンキー・D・ルフィ", image: "images/onepiece/luffy.jpg" },
                { text: "『夢を追い続けることが、海賊の自由なんだ』", author: "モンキー・D・ルフィ", image: "images/onepiece/luffy.jpg" },
                { text: "『絶対にあきらめない。それが俺の信条だ！』", author: "モンキー・D・ルフィ", image: "images/onepiece/luffy.jpg" }
            ]
        },
        jojo: {
            title: "ジョジョの奇妙な冒険",
            description: "ジョースター家の血を巡る冒険譚。独特な作風とポーズ、スタンドバトルで知られる伝説的な作品。",
            quotes: [
                { text: "『俺のそばに近寄るな。オラオラオラ！』", author: "空条承太郎", image: "images/jojo/jotaro.jpg" },
                { text: "『決して引かない、それがジョースターの誇りだ』", author: "ジョナサン・ジョースター", image: "images/jojo/jonathan.jpg" },
                { text: "『時は止まる！』", author: "ディオ・ブランドー", image: "images/jojo/dio.jpg" },
                { text: "『お前はもう死んでいる』", author: "空条承太郎", image: "images/jojo/jotaro.jpg" }
            ]
        }
    };

    const mangaGrid = document.querySelector('.manga-grid');
    const quoteSection = document.querySelector('.quote-section');
    const backButton = document.querySelector('.back-button');
    const quotesContainer = document.querySelector('.quotes-container');

    function setupEventListeners() {
        mangaGrid.addEventListener('click', function(event) {
            if (event.target.classList.contains('manga-button')) {
                const mangaKey = event.target.classList[1];
                showQuotes(mangaKey);
            }
        });

        backButton.addEventListener('click', function() {
            showMain();
        });
    }

    function showMain() {
        mangaGrid.style.display = 'grid';
        quoteSection.style.display = 'none';
        setupEventListeners(); // 再度イベントリスナーを設定
    }

    function showQuotes(mangaKey) {
        const manga = mangaData[mangaKey];
        const mangaTitle = document.querySelector('.manga-title');
        mangaTitle.textContent = manga.title;

        quotesContainer.innerHTML = '';
        manga.quotes.forEach(quote => {
            const quoteCard = document.createElement('div');
            quoteCard.classList.add('quote-card');

            const quoteContent = document.createElement('div');
            quoteContent.classList.add('quote-content');
            quoteContent.innerHTML = `<p class="quote-text">${quote.text}</p><p class="quote-author">- ${quote.author}</p>`;

            const characterImage = document.createElement('div');
            characterImage.classList.add('character-image');
            characterImage.style.backgroundImage = `url('${quote.image}')`;

            quoteCard.appendChild(quoteContent);
            quoteCard.appendChild(characterImage);
            quotesContainer.appendChild(quoteCard);
        });

        mangaGrid.style.display = 'none';
        quoteSection.style.display = 'block';
    }

    setupEventListeners();
    showMain();
});
