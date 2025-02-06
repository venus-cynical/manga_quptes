"use client";
import React from "react";

function MainComponent() {
  const [selectedManga, setSelectedManga] = useState(null);
  const mangaInfo = {
    NARUTO: {
      description:
        "忍の世界を舞台に、主人公うずまきナルトが火影を目指し成長していく物語。友情、努力、勝利をテーマに描かれる忍者アクション漫画です。",
      bgColor: "bg-[#FFE5E5]",
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
      description:
        "死神の少年・黒崎一護を主人公に、現世とソウル・ソサエティを舞台にした壮大なファンタジー活劇です。",
      bgColor: "bg-[#E5F1FF]",
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
      description:
        "海賊王を目指す少年モンキー・D・ルフィと仲間たちの大冒険。夢と友情、自由を追い求める海洋冒険ファンタジーです。",
      bgColor: "bg-[#E5FFE5]",
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
      description:
        "ジョースター家の血を巡る長編物語。独特な作風とポーズ、スタンドバトルで知られる伝説的な作品です。",
      bgColor: "bg-[#FFE5FF]",
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

  return (
    <div className="min-h-screen bg-black font-noto-sans flex flex-col">
      <header className="bg-black text-white py-6 mb-8">
        <h1 className="text-3xl text-center font-bold">人気漫画名言集</h1>
      </header>

      <div className="container mx-auto px-4 flex-grow bg-white py-8">
        {!selectedManga ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(mangaInfo).map(([title, info]) => (
              <div key={title} className="flex flex-col items-center">
                <button
                  onClick={() => setSelectedManga(title)}
                  className={`${info.bgColor} rounded-full w-32 h-32 flex items-center justify-center text-lg font-bold hover:opacity-80 transition-opacity mb-4 shadow-lg`}
                >
                  {title}
                </button>
                <div className="text-center max-w-xs">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedManga(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              戻る
            </button>
            <div
              className={`${mangaInfo[selectedManga].bgColor} rounded-lg p-8 shadow-lg`}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedManga}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">名言集</h3>
                {mangaInfo[selectedManga].quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="relative bg-white bg-opacity-50 p-4 rounded-lg overflow-hidden"
                  >
                    <div className="relative z-10">
                      <p className="text-lg mb-2">『{quote.text}』</p>
                      <p className="text-sm text-gray-600 text-right">
                        - {quote.character}
                      </p>
                    </div>
                    <div
                      className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
                      style={{
                        backgroundImage: `url(${quote.image})`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">© 2025 人気漫画名言集</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
