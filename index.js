
[
    { hz: '你', py: 'Nǐ', en: 'you' },
    { hz: '好', py: 'Hǎo', en: 'fine, good, nice, OK, it\'s settled' },
    { hz: '请', py: 'Qǐng', en: 'please' },
    { hz: '问', py: 'Wèn', en: 'to ask (a question)' },
    { hz: '贵', py: 'Guì', en: 'honorable, expensive' },
    { hz: '姓', py: 'Xìng', en: 'last name, surname' },
    { hz: '我', py: 'Wǒ', en: 'I, me' },
    { hz: '呢', py: 'Ne', en: '(question particle)' },
    { hz: '姐', py: 'Jiě', en: 'older sister' },
    { hz: '叫', py: 'Jiào', en: 'to be called, to call' },
    { hz: '什', py: 'Shén', en: 'what' },
    { hz: '么', py: 'Me', en: '(question particle)' },
    { hz: '名', py: 'Míng', en: 'name' },
    { hz: '字', py: 'Zì', en: 'character' },
    { hz: '先', py: 'Xiān', en: 'first' },
    { hz: '生', py: 'Shēng', en: 'to give birth, to be born' },
    { hz: '李', py: 'Lǐ', en: '(a family name), plum' },
    { hz: '友', py: 'Yǒu', en: 'friend' },
    { hz: '王', py: 'Wáng', en: '(a family name), king' },
    { hz: '朋', py: 'Péng', en: 'friend' },
    { hz: '是', py: 'Shì', en: 'to be' },
    { hz: '老', py: 'Lǎo', en: 'old' },
    { hz: '师', py: 'Shī', en: 'teacher' },
    { hz: '吗', py: 'Ma', en: '(question particle)' },
    { hz: '不', py: 'Bù', en: 'not, no' },
    { hz: '学', py: 'Xué', en: 'to study' },
    { hz: '也', py: 'Yě', en: 'also, too' },
    { hz: '人', py: 'Rén', en: 'person' },
    { hz: '中', py: 'Zhōng', en: 'middle, center' },
    { hz: '国', py: 'Guó', en: 'country' },
    { hz: '北', py: 'Běi', en: 'north' },
    { hz: '京', py: 'Jīng', en: 'capital city' },
    { hz: '美', py: 'Měi', en: 'beautiful' },
    { hz: '纽', py: 'Niǔ', en: 'knob, button' },
    { hz: '约', py: 'Yuē', en: 'agreement, appointment' },
]
.forEach((value) => {
    let dummy = document.createElement('div')
    dummy.innerHTML = `
        <div class="hanzi-outer">
            <div class="hanzi-upper">
                <div class="hanzi-hz">
                    ${value.hz}
                </div>
                <div class="hanzi-py">
                    ${value.py}
                </div>
            </div>
            <div class="hanzi-en">
                ${value.en}
            </div>
        </div>
    `
    document.getElementById('hanzi-container').appendChild(dummy.firstElementChild)
})