function Fetch() {
    const username = localStorage.getItem('username');
    const AccountName = localStorage.getItem('AccountName');
    const MTASerial = localStorage.getItem('MTASerial');
    const JoinValue = localStorage.getItem('JoinValue');
    const AcceptValue = localStorage.getItem('AcceptValue');
    const statsValue = localStorage.getItem('statsValue');
    const punishlogValue = localStorage.getItem('punishlogValue');
    const historyValue = localStorage.getItem('historyValue');

    const gapps = document.getElementById("test1");
    const gappsText = `To
Office of Recruitment,
Codeblack of San Andreas

I, ${username}, officially represented as ${AccountName} & ${MTASerial}, humbly extend my application to join the ranks of Codeblack as an Apprentice. This endeavor is born of both admiration for the profound reputation that Codeblack has cultivated and a deep personal yearning to align myself with an organization that epitomizes excellence, discipline, and mastery. My intention in submitting this essay is to convey not only my interest but also my commitment to embracing the rigorous expectations that come with being part of such an illustrious group.

My desire to join Codeblack stems from ${JoinValue}. I believe Codeblack should consider my application because ${AcceptValue}

As part of this application, I have compiled a detailed record of my in-game  stats ${statsValue}, history ${historyValue}, and punishlog ${punishlogValue}, which are included as screenshots. These documents provide an unfiltered view of my journey thus far, highlighting my capabilities as well as areas for improvement.`
    gapps.value += gappsText

    const bbcode = document.getElementById("test2");
    const bbcodeTest = `[font=georgia][color=gray][i][size=10pt]
To
Office of Recruitment,
Codeblack of San Andreas

[color=#BDA141]I, ${username}, officially represented as ${AccountName} & ${MTASerial}[/color], humbly extend my application to join the ranks of Codeblack as an Apprentice. This endeavor is born of both admiration for the profound reputation that Codeblack has cultivated and a deep personal yearning to align myself with an organization that epitomizes excellence, discipline, and mastery. My intention in submitting this essay is to convey not only my interest but also my commitment to embracing the rigorous expectations that come with being part of such an illustrious group.

[color=#BDA141]My desire to join Codeblack stems from[/color] ${JoinValue}. 

[color=#BDA141]I believe Codeblack should consider my application because[/color] ${AcceptValue}

As part of this application, I have compiled a detailed record of my [color=#BDA141]in-game [url=http://${statsValue}]stats[/url], [url=http://${historyValue}]history[/url], and [url=http://${punishlogValue}]punishlog[/url][/color], which are included as screenshots. These documents provide an unfiltered view of my journey thus far, highlighting my capabilities as well as areas for improvement.

I acknowledge the significance of this opportunity and wholeheartedly commit to upholding the rules, principles, and ethics that define Codeblack, recognizing them as the foundation of its integrity and excellence. If granted the honor of apprenticeship, I will strive to reflect these values through my conduct and character, approaching this role with sincerity, respect, and a readiness to contribute, grow, and uphold the legacy of excellence that Codeblack represents.

Sincerely and respectfully,
[color=#BDA141]${username}[/color]
[/size][/i][/color][/font]`
    bbcode.value += bbcodeTest
}

window.onload = Fetch;