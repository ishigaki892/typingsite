const start_Btn = document.getElementById("start_Btn");
const start_view = document.getElementById("start_view");
const main_view = document.getElementById("main_view");
const game_result = document.getElementById("game_result");
const s_msg = document.getElementById("start_msg");
const example = document.getElementById("example");
const kana = document.getElementById("kana");
const sentence = document.getElementById("sentence");
const progressbar = document.getElementById("progress_bar");
const misstype_screen = document.getElementById("misstype_screen");
const replay_button = document.getElementById("replay_button");
const result_score = document.getElementById("result_score");
const result_rank = document.getElementById("result_rank");
const result_time = document.getElementById("result_time");
const result_char_count = document.getElementById("result_char_count");
const result_miss_count = document.getElementById("result_miss_count");
const result_wpm = document.getElementById("result_wpm");
const result_st = document.getElementById("result_stage");
const result_accuracy = document.getElementById("result_accuracy");
const result_mondai = document.getElementById("result_mondai");
const rresult_score = document.getElementById("rresult_score");
const rresult_rank = document.getElementById("rresult_rank");
const rresult_time = document.getElementById("rresult_time");
const rresult_char_count = document.getElementById("rresult_char_count");
const rresult_miss_count = document.getElementById("rresult_miss_count");
const rresult_wpm = document.getElementById("rresult_wpm");
const rresult_accuracy = document.getElementById("rresult_accuracy");
const resultcomment = document.getElementById("result_comment");
const rresult_st = document.getElementById("rresult_stage");
const gametitle = document.getElementById("game_title");
const Btnarea = document.getElementById("Btn_area");
const localdel = document.getElementById("local_del");
const showExampleCheckbox = document.getElementById("showExample");
const showKanaCheckbox = document.getElementById("showKana");
const showSentenceCheckbox = document.getElementById("showSentence");
const back_result = document.getElementById("back_result");
const inpMBtn = document.getElementById("inp_m");
const importFile = document.getElementById("importFile");
const exinpBtn = document.getElementById("exinp");
const osetBtn = document.getElementById("osets");
const modal = document.getElementById("custom-input-modal");
const closeBtn = document.querySelector("#custom-input-modal .close-btn");
const modal2 = document.getElementById("settings-modal");
const closeBtn2 = document.querySelector("#settings-modal .close-btn");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const inptwpm = document.getElementById("inptwpm");
const inptmon = document.getElementById("inptmon");
const addToMapBtn = document.getElementById("add-to-map-btn");
const addmaterBtn = document.getElementById("add-mater-btn");
const addmondaiBtn = document.getElementById("add-mondai-btn");
const audio = new Audio("./bu.mp3");
const toggleUppercase = document.getElementById("toggleUppercase");
const wpmBar = document.getElementById("wpm-meter-bar");
const wpmLabel = document.getElementById("wpm-meter-label");
const wpmContainer = document.getElementById("wpm-meter-container");
const showWpmMeterCheckbox = document.getElementById("showWpmMeter");
const virtualKeyboard = document.getElementById("virtual-keyboard");
let romanMap;
if (localStorage.getItem("romaes")) {
	romanMap = JSON.parse(localStorage.getItem("romaes"));
} else {
	romanMap = {
		'あ': ['a'],
		'い': ['i', 'yi'],
		'う': ['u', 'wu'],
		'え': ['e'],
		'お': ['o'],
		'か': ['ka', 'ca'],
		'き': ['ki'],
		'く': ['ku', 'cu', 'qu'],
		'け': ['ke'],
		'こ': ['ko', 'co'],
		'さ': ['sa'],
		'し': ['si', 'shi', 'ci'],
		'す': ['su'],
		'せ': ['se', 'ce'],
		'そ': ['so'],
		'た': ['ta'],
		'ち': ['ti', 'chi'],
		'つ': ['tu', 'tsu'],
		'て': ['te'],
		'と': ['to'],
		'な': ['na'],
		'に': ['ni'],
		'ぬ': ['nu'],
		'ね': ['ne'],
		'の': ['no'],
		'は': ['ha'],
		'ひ': ['hi'],
		'ふ': ['fu', 'hu'],
		'へ': ['he'],
		'ほ': ['ho'],
		'ま': ['ma'],
		'み': ['mi'],
		'む': ['mu'],
		'め': ['me'],
		'も': ['mo'],
		'や': ['ya'],
		'ゆ': ['yu'],
		'よ': ['yo'],
		'ら': ['ra'],
		'り': ['ri'],
		'る': ['ru'],
		'れ': ['re'],
		'ろ': ['ro'],
		'わ': ['wa'],
		'ゐ': ['wyi'],
		'ゑ': ['wye'],
		'を': ['wo'],
		'ん': ['nn', 'xn', 'n'],
		'が': ['ga'],
		'ぎ': ['gi'],
		'ぐ': ['gu'],
		'げ': ['ge'],
		'ご': ['go'],
		'ざ': ['za'],
		'じ': ['ji', 'zi'],
		'ず': ['zu'],
		'ぜ': ['ze'],
		'ぞ': ['zo'],
		'だ': ['da'],
		'ぢ': ['di'],
		'づ': ['du'],
		'で': ['de'],
		'ど': ['do'],
		'ば': ['ba'],
		'び': ['bi'],
		'ぶ': ['bu'],
		'べ': ['be'],
		'ぼ': ['bo'],
		'ぱ': ['pa'],
		'ぴ': ['pi'],
		'ぷ': ['pu'],
		'ぺ': ['pe'],
		'ぽ': ['po'],
		'うぁ': ['wha'],
		'うぃ': ['whi'],
		'うぇ': ['whe'],
		'うぉ': ['who'],
		'きゃ': ['kya'],
		'きぃ': ['kyi'],
		'きゅ': ['kyu'],
		'きぇ': ['kye'],
		'きょ': ['kyo'],
		'くぁ': ['qa', 'qwa'],
		'くぃ': ['qi', 'qwi'],
		'くぇ': ['qe', 'qwe'],
		'くぉ': ['qo', 'qwo'],
		'くゃ': ['qya'],
		'くゅ': ['qyu'],
		'くょ': ['qyo'],
		'しゃ': ['sya', 'sha'],
		'しぃ': ['syi'],
		'しゅ': ['syu', 'shu'],
		'しぇ': ['sye', 'she'],
		'しょ': ['syo', 'sho'],
		'つぁ': ['tsa'],
		'つぃ': ['tsi'],
		'つぇ': ['tse'],
		'つぉ': ['tso'],
		'ちゃ': ['tya', 'cha'],
		'ちぃ': ['tyi'],
		'ちゅ': ['tyu', 'chu'],
		'ちぇ': ['tye', 'che'],
		'ちょ': ['tyo', 'cho'],
		'てゃ': ['tha'],
		'てぃ': ['thi'],
		'てゅ': ['thu'],
		'てぇ': ['the'],
		'てょ': ['tho'],
		'とぁ': ['twa'],
		'とぃ': ['twi'],
		'とぅ': ['twu'],
		'とぇ': ['twe'],
		'とぉ': ['two'],
		'ひゃ': ['hya'],
		'ひぃ': ['hyi'],
		'ひゅ': ['hyu'],
		'ひぇ': ['hye'],
		'ひょ': ['hyo'],
		'ふぁ': ['fa'],
		'ふぃ': ['fi'],
		'ふぇ': ['fe'],
		'ふぉ': ['fo'],
		'にゃ': ['nya'],
		'にぃ': ['nyi'],
		'にゅ': ['nyu'],
		'にぇ': ['nye'],
		'にょ': ['nyo'],
		'みゃ': ['mya'],
		'みぃ': ['myi'],
		'みゅ': ['myu'],
		'みぇ': ['mye'],
		'みょ': ['myo'],
		'りゃ': ['rya'],
		'りぃ': ['ryi'],
		'りゅ': ['ryu'],
		'りぇ': ['rye'],
		'りょ': ['ryo'],
		'ヴぁ': ['va'],
		'ヴぃ': ['vi'],
		'ヴ': ['vu'],
		'ヴぇ': ['ve'],
		'ヴぉ': ['vo'],
		'ぎゃ': ['gya'],
		'ぎぃ': ['gyi'],
		'ぎゅ': ['gyu'],
		'ぎぇ': ['gye'],
		'ぎょ': ['gyo'],
		'ぐぁ': ['gwa'],
		'ぐぃ': ['gwi'],
		'ぐぅ': ['gwu'],
		'ぐぇ': ['gwe'],
		'ぐぉ': ['gwo'],
		'じゃ': ['ja', 'zya'],
		'じぃ': ['jyi', 'zyi'],
		'じゅ': ['ju', 'zyu'],
		'じぇ': ['je', 'zye'],
		'じょ': ['jo', 'zyo'],
		'でゃ': ['dha'],
		'でぃ': ['dhi'],
		'でゅ': ['dhu'],
		'でぇ': ['dhe'],
		'でょ': ['dho'],
		'ぢゃ': ['dya'],
		'ぢぃ': ['dyi'],
		'ぢゅ': ['dyu'],
		'ぢぇ': ['dye'],
		'ぢょ': ['dyo'],
		'びゃ': ['bya'],
		'びぃ': ['byi'],
		'びゅ': ['byu'],
		'びぇ': ['bye'],
		'びょ': ['byo'],
		'ぴゃ': ['pya'],
		'ぴぃ': ['pyi'],
		'ぴゅ': ['pyu'],
		'ぴぇ': ['pye'],
		'ぴょ': ['pyo'],
		'ぁ': ['la', 'xa'],
		'ぃ': ['li', 'xi'],
		'ぅ': ['lu', 'xu'],
		'ぇ': ['le', 'xe'],
		'ぉ': ['lo', 'xo'],
		'ゃ': ['lya', 'xya'],
		'ゅ': ['lyu', 'xyu'],
		'ょ': ['lyo', 'xyo'],
		'っ': ['ltu', 'xtu'],
		'ー': ['-'],
		',': [','],
		'.': ['.'],
		'、': [','],
		'。': ['.'],
		'・': ['/'],
		'0': ['0'],
		'1': ['1'],
		'2': ['2'],
		'3': ['3'],
		'4': ['4'],
		'5': ['5'],
		'6': ['6'],
		'7': ['7'],
		'8': ['8'],
		'9': ['9']
	};
}
let import_stage_info;
let MAX_WPM = 700;
let MAX_mondai = 15;
let typedHistory = [];
let currentHistory = [];
let currentRomajiOptions = [];
let romaHistory = [];
let currentKana = '';
let currentRomaji = '';
let currentPhraseIndex = 0;
let typedCharCount = 0;
let misstypecounter = 0;
let startTime = 0;
let endTime = 0;
let totalTypedChars = 0;
let showWpmMeter = showWpmMeterCheckbox.checked;
let wpmInterval = null;
let ifstart = false;
let showUppercase = false;
let stage = "jp1";
let title, moji, furi, syou, sttts;
import * as st from './type_stagelist.js';
/**
 * 問題文を読み込む
 * @param {*} stg 
 */
function GetStage(stg) {
	switch (stg) {
		case "jp1":
			sttts = st.jp1;
			break;
		case "img":
			sttts = st.img;
			break;
		case "inp":
			sttts = import_stage_info;
			break;
		case "dbg":
			sttts = st.dbg;
			break;
		case "superhavi":
			sttts = st.superhavi;
			break;
	}
	title = sttts.title;
	moji = sttts.name;
	furi = sttts.hira;
	syou = sttts.def;
	if (sttts.sets[0] === true) {
		showExampleCheckbox.checked = false;
		showExampleCheckbox.disabled = true;
	} else {
		showExampleCheckbox.checked = true;
		showExampleCheckbox.disabled = false;
	}
	if (sttts.sets[1] === true) {
		showKanaCheckbox.checked = false;
		showKanaCheckbox.disabled = true;
	} else {
		showKanaCheckbox.checked = true;
		showKanaCheckbox.disabled = false;
	}
	if (sttts.sets[2] === true) {
		showSentenceCheckbox.checked = false;
		showSentenceCheckbox.disabled = true;
	} else {
		showSentenceCheckbox.checked = true;
		showSentenceCheckbox.disabled = false;
	}
}

/**
 * 問題をシャッフル
 */
function SetTypeStr(arrA, arrB) {
	const indices = [...Array(arrA.length).keys()];
	for (let i = indices.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[indices[i], indices[j]] = [indices[j], indices[i]];
	}
	return indices.map(index => {
		return {
			a: arrA[index],
			b: arrB[index]
		};
	});
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

/**
 * 平仮名をローマ字変換
 */
function kanaToroma(hiraganaStr) {

	const keys = Object.keys(romanMap).sort((a, b) => b.length - a.length);

	function convert(input) {
		if (input.length === 0) return [""];

		const results = [];

		if (input.startsWith('っ')) {
			const remainingResults = convert(input.substring(1));
			for (const roman of remainingResults) {
				if (roman.length > 0) {
					results.push(roman[0] + roman);
				}
			}
			return results;
		}

		for (const key of keys) {
			if (input.startsWith(key)) {
				const romanjiArray = romanMap[key];
				const remainingResults = convert(input.substring(key.length));
				for (const romanji of romanjiArray) {
					if (remainingResults.length === 0) {
						results.push(romanji);
					} else {
						for (const remaining of remainingResults) {
							results.push(romanji + remaining);
						}
					}
				}
				return results;
			}
		}
		const firstChar = input[0];
		const remainingResults = convert(input.substring(1));
		for (const remaining of remainingResults) {
			results.push(firstChar + remaining);
		}
		return results;
	}

	return convert(hiraganaStr);
}

/**
 * 課題をロード
 */
function loadNextPhrase() {
	if (currentPhraseIndex >= typedata.length) {
		main_view.style.display = 'none';
		game_result.style.display = 'block';
		game_result.style.display = 'grid';
		back_result.style.display = 'block';
		back_result.style.display = 'grid';
		Btnarea.style.display = "block";
		virtualKeyboard.style.display = "none";
		endTime = performance.now();
		displayResults();
		return;
	}

	const progress = (currentPhraseIndex / typedata.length) * 100;
	progressbar.style.width = `${100 - progress}%`;
	const phraseData = typedata[currentPhraseIndex];
	currentKana = phraseData.b;
	const currentMoji = phraseData.a;

	currentRomajiOptions = kanaToroma(currentKana);

	currentRomaji = currentRomajiOptions[0];

	example.innerHTML = currentMoji;
	kana.textContent = currentKana;
	typedCharCount = 0;

	if (showExampleCheckbox.checked) {
		if (currentMoji.includes("<img")) {
		example.innerHTML = currentMoji;
		} else {
		example.innerHTML = `<div class="example">${currentMoji}</div>`;
		}
		example.classList.remove("hidden-element");
	} else {
		example.innerHTML = '';
		example.classList.add("hidden-element");
	}

	if (showKanaCheckbox.checked) {
		kana.textContent = currentKana;
		kana.classList.remove("hidden-element");
	} else {
		kana.textContent = '';
		kana.classList.add("hidden-element");
	}

	renderSentence();
}

function formatRomaji(str) {
    return showUppercase ? str.toUpperCase() : str.toLowerCase();
}

function renderSentence() {
    if (showSentenceCheckbox.checked) {
        const romaji = formatRomaji(currentRomaji);
        const typedRomaji = romaji.substring(0, typedCharCount);
        const nextChar = romaji.charAt(typedCharCount);
        const restRomaji = romaji.substring(typedCharCount + 1);

        sentence.innerHTML =
            `<span class="typed-ok">${typedRomaji}</span>` +
            `<span class="next-char">${nextChar || ""}</span>` +
            `<span class="rest-romaji">${restRomaji}</span>`;
        sentence.classList.remove("hidden-element");
		document.querySelectorAll("#virtual-keyboard .key").forEach(k => {
            k.classList.remove("highlight");
        });
        if (nextChar) {
            let keyEl = document.querySelector(`#virtual-keyboard .key[data-key="${nextChar.toLowerCase()}"]`);
            if (keyEl) {
                keyEl.classList.add("highlight");
            }
        }
    } else {
        sentence.innerHTML = '';
        sentence.classList.add("hidden-element");
    }
}

/**
 * カウントダウン
 */
function startCountdown(callback) {
    let count = 3;
    const countdownEl = document.createElement("div");
    countdownEl.id = "countdown";
    countdownEl.style.fontSize = "4rem";
    countdownEl.style.textAlign = "center";
    countdownEl.style.marginTop = "50px";
    progressbar.style.width = '100%';
    main_view.appendChild(countdownEl);

    countdownEl.textContent = count;

    const timer = setInterval(() => {
        count--;
        if (count > 0) {
            countdownEl.textContent = count;
        } else if (count === 0) {
            countdownEl.textContent = "START!";
        } else {
            clearInterval(timer);
            countdownEl.remove();
            if (showWpmMeter) {
                wpmContainer.style.display = "block";
                if (wpmInterval) clearInterval(wpmInterval);
                wpmInterval = setInterval(updateWpmMeter, 100);
            } else {
                wpmContainer.style.display = "none";
            }

            callback();
        }
    }, 1000);
}


start_Btn.addEventListener('click', function() {
	start_view.style.display = 'none';
	main_view.style.display = 'block';
	virtualKeyboard.style.display = "block";
});

/**
 * スコア、WPM、正確率、ランクとかを計算して表示する関数
 */
function displayResults() {
	if (wpmInterval) {
        clearInterval(wpmInterval);
        wpmInterval = null;
    }
	if (showWpmMeter) {
        updateWpmMeter();
    }
    const timeTaken = (endTime - startTime) / 1000;
    result_time.innerHTML = timeTaken.toFixed(2) + "秒";
    result_char_count.innerHTML = totalTypedChars;
    result_miss_count.innerHTML = misstypecounter;

    const correctChars = totalTypedChars - misstypecounter;
    const accuracy = totalTypedChars > 0 ? (correctChars / totalTypedChars) * 100 : 0;
    result_accuracy.innerHTML = accuracy.toFixed(2) + "%";
    const wpm = correctChars / (timeTaken / 60);
    result_wpm.innerHTML = wpm.toFixed(2);
    const score = wpm * Math.pow(accuracy / 100, 3);
    result_score.innerHTML = score.toFixed(0);
    result_rank.innerHTML = getRank(score);
    result_st.innerHTML = title + "-" + syou;

    result_mondai.innerHTML = "";
    for (let i = 0; i < typedata.length; i++) {
        result_mondai.innerHTML += `${typedata[i].a}<br>`;

        if (typedHistory[i]) {
            let displayStr = "";
            const correctRomaji = romaHistory[i];

            let pos = 0;
            for (let entry of typedHistory[i]) {
				if (pos >= correctRomaji.length) {
					break;
				}

				if (entry.correct) {
					displayStr += correctRomaji[pos];
				} else {
					displayStr += `<span style="color:red">${correctRomaji[pos]}</span>`;
				}
				pos++;
			}

            result_mondai.innerHTML += displayStr + "<br><br>";
        } else {
            result_mondai.innerHTML += kanaToroma(typedata[i].b)[0] + "<br><br>";
        }
    }

    getcomment(score, misstypecounter);
    getresult();
	updateWpmMeter();
    saveresult(timeTaken, totalTypedChars, misstypecounter, accuracy, wpm, score,
        result_rank.innerHTML, title, syou);
}


/**
 * ローカルストレージに前のやつを保存するのだ！
 * @param {*} time 
 * @param {*} ttc
 * @param {*} miss
 * @param {*} acc
 * @param {*} wpm
 * @param {*} score
 * @param {*} rank
 * @param {*} title
 * @param {*} syou
 */
function saveresult(time, ttc, miss, acc, wpm, score, rank, title, syou) {
	localStorage.setItem("time", time.toFixed(2));
	localStorage.setItem("totaltype", ttc);
	localStorage.setItem("totalmiss", miss);
	localStorage.setItem("accuracy", acc.toFixed(2));
	localStorage.setItem("wpm", wpm.toFixed(2));
	localStorage.setItem("scr", score.toFixed(0));
	localStorage.setItem("rnk", rank);
	localStorage.setItem("stag", title + "-" + syou);
	localStorage.setItem("romaes", JSON.stringify(romanMap));
}
/**
 * ローカルストレージから前のやつを取得するのだ！
 * @param {*} time 
 * @param {*} ttc
 * @param {*} miss
 * @param {*} acc
 * @param {*} wpm
 * @param {*} score
 * @param {*} rank
 * @param {*} title
 * @param {*} syou
 */
function getresult() {
	if (localStorage.getItem("time")) {
		rresult_time.innerHTML = localStorage.getItem("time") + "秒";
		rresult_char_count.innerHTML = localStorage.getItem("totaltype");
		rresult_miss_count.innerHTML = localStorage.getItem("totalmiss");
		rresult_accuracy.innerHTML = localStorage.getItem("accuracy") + "%";
		rresult_wpm.innerHTML = localStorage.getItem("wpm");
		rresult_score.innerHTML = localStorage.getItem("scr");
		rresult_rank.innerHTML = localStorage.getItem("rnk");
		rresult_st.innerHTML = localStorage.getItem("stag");
	}
}

/**
 * スコアに基づいてランクを決定
 */
function getRank(score) {
	if (score >= 601) return "☆12 神ムズレベル"; // ☆12
	if (score >= 501) return "☆☆☆☆☆☆☆☆☆☆☆"; // ☆11
	if (score >= 401) return "☆☆☆☆☆☆☆☆☆☆"; // ☆10
	if (score >= 301) return "☆☆☆☆☆☆☆☆☆"; // ☆9
	if (score >= 280) return "☆☆☆☆☆☆☆☆"; // ☆8
	if (score >= 243) return "☆☆☆☆☆☆☆"; // ☆7
	if (score >= 209) return "☆☆☆☆☆☆"; // ☆6
	if (score >= 158) return "☆☆☆☆☆"; // ☆5
	if (score >= 124) return "☆☆☆☆"; // ☆4
	if (score >= 90) return "☆☆☆"; // ☆3
	if (score >= 56) return "☆☆"; // ☆2
	if (score >= 0) return "☆"; // ☆1
	return "-";
}
/**
 * コメント
 * @param {*} score 
 * @param {*} misstypecounter 
 */
function getcomment(score, misstypecounter) {
	if (misstypecounter === 0) {
		resultcomment.innerHTML = "ノーミスおめでとう！次も継続できるように頑張れ！";
	} else if (misstypecounter === 1) {
		resultcomment.innerHTML = "惜しい！次こそはノーミス！";
	} else if (score >= 601) {
		let type = getRandomInt(3)
		switch (type) {
			case 0:
				resultcomment.innerHTML = "Extraordinary！その速さ、もはや神業だね。"
			case 1:
				resultcomment.innerHTML = "キーボードと一体化してるみたい！"
			case 2:
				resultcomment.innerHTML = "まるでキーボードが君の思考を読んでるみたいだね。"

		}
	} else if (score >= 401) {
		let type = getRandomInt(3)
		switch (type) {
			case 0:
				resultcomment.innerHTML = "見てるだけで気持ちいいくらいスムーズだね。"
			case 1:
				resultcomment.innerHTML = "タイプする音が心地いいリズムに聞こえるよ。"
			case 2:
				resultcomment.innerHTML = "タイピングの速さ、まさにプロだね！"

		}
	} else if (score >= 209) {
		let type = getRandomInt(4)
		switch (type) {
			case 0:
				resultcomment.innerHTML = "スコアを伸ばすには正確性が重要だよ！"
			case 1:
				resultcomment.innerHTML = "Beautiful！"
			case 2:
				resultcomment.innerHTML = "Wonderful！"
			case 3:
				resultcomment.innerHTML = "上達してくるとアルファベットは視界に入らなくなるよ"
		}
	} else {
		let type = getRandomInt(4)
		switch (type) {
			case 0:
				resultcomment.innerHTML = "キーボードを見ずに打つことに慣れてみよう！"
			case 1:
				resultcomment.innerHTML = "毎日1回でもいいから継続するのが大事"
			case 2:
				resultcomment.innerHTML = "あと1回やったら今日はおしまいだ"
			case 3:
				resultcomment.innerHTML = "昨日の自分より早くなったんじゃない？"
		}
	}
}

/**
 * ゲームの状態をリセット
 */
function resetGame() {
	ifstart = false;
	currentPhraseIndex = 0;
	currentKana = '';
	currentRomaji = '';
	currentRomajiOptions = [];
	typedCharCount = 0;
	misstypecounter = 0;
	startTime = 0;
	endTime = 0;
	totalTypedChars = 0;
	wpmInterval = 0;
　　typedHistory = [];
　　currentHistory = [];
	romaHistory = [];
	typedata = SetTypeStr(moji, furi).splice(moji.length - MAX_mondai);
	wpmContainer.style.display = 'none';
	game_result.style.display = 'none';
	back_result.style.display = 'none';
	start_view.style.display = 'block';
	s_msg.style.display = 'block';
	Btnarea.style.display = "none";
	virtualKeyboard.style.display = "none";
	example.innerHTML = '';
	kana.textContent = '';
	sentence.innerHTML = '';
	progressbar.style.width = '100%';
}

function updateWpmMeter() {
    if (!ifstart || startTime === 0) return;

    const now = performance.now();
    const elapsedMinutes = (now - startTime) / 60000;
    if (elapsedMinutes <= 0) return;

    const correctChars = totalTypedChars - misstypecounter;
    const wpm = correctChars / elapsedMinutes;

    const ratio = Math.min(wpm / MAX_WPM, 1);
    wpmBar.style.width = (ratio * 100) + "%";
    wpmLabel.textContent = `${Math.round(wpm)} WPM`;

    if (wpm < 200) {
        wpmBar.style.background = "red";
    } else if (wpm < 400) {
        wpmBar.style.background = "orange";
    } else if (wpm < 600) {
        wpmBar.style.background = "yellow";
    } else {
        wpmBar.style.background = "limegreen";
    }
}

function logmsg() {
	console.log("%c問題文の設定方法", "color: red; font-size: 20px;");
	console.log("基本的にはJSON形式で書いてください。画像を指定したい場合はインターネット上の絶対パスを使用してください。");
	console.log("プロパティ1 title タイピングのタイトルです");
	console.log("プロパティ2 def 難易度設定。")
	console.log("プロパティ3 name 問題文本体です。");
	console.log("プロパティ4 hira 問題文の平仮名です。本体とおなじインデックスに設定してください。");
	console.log("プロパティ5 sets チェックボックスのロックと問題文の表示を設定します。falseで自由設定、trueでロックです。");
	console.log(`設定例
{
	"title": "日本編",
	"def": "1章",
	"name": [
		"わんこ",
		"にょろ",
		"例のやつ",
		"カバちゃん",
		"ブタヤロウ",
		"ジャッキー・ペン",
		"ゴリさん",
		"メェメェ",
		"ゴマさま",
		"パオン",
		"カ・ンガリュ",
		"一角くん",
		"クマ先生",
		"ワニック",
		"ウサ銀",
		"リッスントゥミー",
		"カオル君"
	],
	"hira": [
		"わんこ",
		"にょろ",
		"れいのやつ",
		"かばちゃん",
		"ぶたやろう",
		"じゃっきー・ぺん",
		"ごりさん",
		"めぇめぇ",
		"ごまさま",
		"ぱおん",
		"か・んがりゅ",
		"いっかくくん",
		"くませんせい",
		"わにっく",
		"うさぎん",
		"りっすんとぅみー",
		"かおるくん"
	],
	"sets": [
		false,
		false,
		false
	]
}
`);
	console.log("%cアップデート履歴", "color: red; font-size: 20px;");
	console.log(`ver1.00 β版作成
ver1.01 進捗度バー作成
ver1.02 ミス時の音を追加
var1.03 問題文の画像に対応
var1.04 リザルト画面で間違えた文字が赤く表示
var1.05 最大問題数の設定を追加
var1.06 仮想キーボード実装
var1.07 仮想キーボードを修正`);
	console.log("%c製作者は初心者です。コードの汚さとか大目に見てほしいです...", "font-size: 5px;");
	console.log("powerd by ishigaki888");
}

document.addEventListener("DOMContentLoaded", () => {
	const stageSelectBtn = document.getElementById("stage_select");
	const stageMenu = document.getElementById("stage_menu");

	stageSelectBtn.addEventListener("click", () => {
		stageMenu.classList.toggle("open");
		if (stageMenu.classList.contains("open")) {
			stageSelectBtn.style.left = "310px";
		} else {
			stageSelectBtn.style.left = "50px";
		}
	});
	stageMenu.querySelectorAll("li").forEach(li => {
		li.addEventListener("click", () => {
			stage = li.dataset.value;
			stageMenu.classList.remove("open");
			stageSelectBtn.style.left = "50px";
			GetStage(stage);
			gametitle.innerHTML = `${title}<br>難易度:${syou}`;
			typedata = SetTypeStr(moji, furi);
		});
	});
});

localdel.addEventListener("click", () => {
	localStorage.clear();
	alert("ローカルストレージの履歴を削除しました");
})

inpMBtn.addEventListener('click', () => {
	alert("問題文の設定方法についてはconsoleをご確認ください。")
	importFile.click();
});

replay_button.addEventListener('click', function() {
	resetGame();
});

importFile.addEventListener('change', (event) => {
	const file = event.target.files[0];
	if (!file) {
		return;
	}

	const reader = new FileReader();
	reader.onload = (e) => {
		try {
			const importedData = JSON.parse(e.target.result);
			import_stage_info = importedData;
			alert("問題文をインポートしました！");
		} catch (error) {
			alert("JSONファイルの読み込みに失敗しました。ファイルが破損しているか、フォーマットが正しくありません。");
		}
	};
	reader.readAsText(file);
});

window.addEventListener('keydown', function(e) {
	if (e.code === 'Space' && !ifstart) {
		e.preventDefault();
		s_msg.style.display = 'none';
		ifstart = true;
		startCountdown(() => {
			loadNextPhrase();
			startTime = performance.now();
		});
		return;
	}
    if (!ifstart || !currentRomaji) return;

    const typedChar = e.key.toLowerCase();
    totalTypedChars++;
    let matchedOptions = currentRomajiOptions.filter(opt =>
        opt.startsWith(currentRomaji.substring(0, typedCharCount) + typedChar)
    );

    if (matchedOptions.length > 0) {
        currentHistory.push({ correct: true });
        typedCharCount++;
        currentRomajiOptions = matchedOptions;
        currentRomaji = matchedOptions[0];
        renderSentence();

        if (typedCharCount >= currentRomaji.length) {
            typedHistory.push(currentHistory);
			romaHistory.push(currentRomaji);
            currentHistory = [];
            currentPhraseIndex++;
            setTimeout(loadNextPhrase, 1);
        }
    } else {
        misstypecounter++;
        currentHistory.push({ correct: false });

        misstype_screen.classList.add("flash-red");
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
            misstype_screen.classList.remove("flash-red");
        }, 100);
    }
});

GetStage(stage);
logmsg();
gametitle.innerHTML = `${title}<br>難易度:${syou}`;
Btnarea.style.display = "none";
let typedata = SetTypeStr(moji, furi).splice(MAX_mondai);

exinpBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

osetBtn.addEventListener("click", () => {
    modal2.style.display = "flex";
});

closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});

addToMapBtn.addEventListener("click", () => {
    const charA = inputA.value.trim();
    const charB = inputB.value.trim();

    if (charA && charB) {
        if (romanMap[charA]) {
            if (!romanMap[charA].includes(charB)) {
                romanMap[charA].push(charB);
                alert(`「${charA}」に「${charB}」を追加しました。`);
            } else {
                alert(`「${charA}」の入力設定に「${charB}」はすでに存在します。`);
            }
        } else {
            romanMap[charA] = [charB];
            alert(`「${charA}」と「${charB}」を新たに追加しました。`);
        }
        inputA.value = "";
        inputB.value = "";
    } else {
        alert("文字Aと文字Bの両方を入力してください。");
    }
});

addmaterBtn.addEventListener("click", () => {
    const wpminp = inptwpm.value;
    if (wpminp) {
		MAX_WPM = wpminp;
		alert(`基準値が${MAX_WPM}WPMに設定されました`)
    } else {
        alert("数値を入力してください。");
    }
});

addmondaiBtn.addEventListener("click", () => {
	const moninp = inptmon.value;
	
	if (moninp) {
		MAX_mondai = moninp;
		typedata = SetTypeStr(moji, furi).splice(moji.length - MAX_mondai);
		alert(`最大問題数が${MAX_mondai}問に設定されました`);
	} else {
		alert("数値を入力してください");
	}
})

toggleUppercase.addEventListener("change", () => {
    showUppercase = toggleUppercase.checked;
    renderSentence();
});
