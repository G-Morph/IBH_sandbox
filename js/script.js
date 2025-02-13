function switch_about(bulgarian) {
    if (bulgarian) {
        const text = `Фондация „Институт за мозъчно здраве“ (ИМЗ) е българска неправителствена организация, създадена с цел да развива мозъчното здраве в България. Фондацията е основана през 2024 г. от проф. д-р Жасмин Василева, д-р Елена Пседерска и Юлия Георгиева, като плод на тяхното дългогодишно сътрудничество и споделена ангажираност към приложението на невронауките и предоставяването на ефективни и широко достъпни интервенции за подкрепа на мозъчното здраве в България. 
        <br>
        <br>
        Фондацията е ангажирана с повишаване на обществената осведоменост относно мозъчното здраве, насърчаване на научни изследвания и разработване на интервенции за лечение на мозъчни разстройства, базирани на доказателства. Институтът цели да трансформира водещите научни открития в практически решения, които могат да бъдат интегрирани в образованието, превенцията и лечението на зависимости и други психични разстройства, като същевременно насърчава мултидисциплинарното сътрудничество за подобряване на благосъстоянието и качеството на живот в общността.
        <br>
        <br>
        Целите на Фондацията включват разработването на ефективни превантивни, терапевтични и неврорехабилитационни програми, насочени към намаляване на риска от развитие на зависимости и други психични заболявания, както и стратегии за подкрепа на възстановяването в периодите на ремисия. Институтът е пионер в създаването и адаптирането на нови методи и технологии за скрининг и оценка на личностни, неврокогнитивни, психофизиологични, мозъчни, генетични и други фактори, увеличаващи уязвимостта към мозъчни разстройства. Институтът също организира научни събития и обучения, предлага специализирани програми за обучение на професионалисти в областта на психичното здраве и насърчава развитието на приложните невронауки в България чрез международни проекти и програми за устойчиво научно развитие.`;
        document.getElementById("about").innerHTML = text;
        document.getElementById("about_title").innerHTML = "За Нас"
    } else /* english */ {
        const text = `The &quot;Institute for Brain Health&quot; Foundation (IBH) is a Bulgarian non-governmental organization aiming to develop brain health in Bulgaria by providing effective and widely accessible neuroscience-based interventions. The foundation was established in 2024 by Prof. Dr. Jasmin Vassileva, Dr. Elena Psederska, and Yulia Georgieva, as a result of their long-standing collaboration and shared commitment to advance applied neuroscience and provide effective and widely accessible interventions for improving brain health in Bulgaria. 
            <br>
            <br>
            The IBH aims to promote evidence-based neuroscience in Bulgaria by increasing public awareness of brain health, promoting research, and developing novel personalized prevention and intervention approaches for mental health disorders with the goal of increasing resilience and improving well-being. It pioneers new methods and technologies in Bulgaria for screening and assessment of personality, neurocognitive, psychophysiological, brain, genetic, and other factors that increase vulnerability to brain disorders. In addition, the IBH organizes scientific events and trainings, offers specialized training programs for mental health professionals, and promotes the development of applied neuroscience in Bulgaria through international projects and programs for sustainable research development.`;
        document.getElementById("about").innerHTML = text;
        document.getElementById("about_title").innerHTML = "About Us"
    }
}

function switch_team(bulgarian) {
    switch_jasmin(bulgarian)
    switch_elena(bulgarian)
    switch_yuliya(bulgarian)
}

function switch_jasmin(bulgarian) {
    if (bulgarian) {
        const text = `Жасмин Василева е професор в Катедрите по Психиатрия и Психология на Virginia Commonwealth University (VCU) в Ричмънд,Вирджиния. Изследователската ѝ програма е фокусирана върху етиологията на зависимостите и последствията от хроничната употреба на наркотици. Централна тема в нейните проекти е изследването на хетерогенността на зависимостите чрез проучване на приликите и разликите между различни видове зависимости въз основа на специфичния вид психоактивно вещество (опиати, стимуланти, алкохол, канабис), модели на употреба (моно-зависимост, поли-зависимост) и съпътстващи екстернализиращи иинтернализиращи психиатрични разстройства. Мултидисциплинарните ѝ изследвания включват неврокогнитивни, личностни, геномни, невроизобразяващи и изчислителни подходи. Тя интегрира резултатите от тези изследвания в разработването на нови терапевтични програми базирани на невронауките, за подобряване на психичното здраве и предотвратяване на психични заболявания. Екипът ѝ е разработил мобилната Психообучителна програма за зависимости, информирана от невронауките (NIPA; Neuroscience-Informed Psychoeducation for Addiction), която в момента е в процес на адаптация за културните условия на България. Целта на програмата е да повиши осведомеността и да укрепи когнитивната и емоционалната устойчивост на младежите към ефектите на алкохола, наркотиците и други стресори. Проф. Василева е автор на над 120 рецензирани публикации и глави в книги, и има над 250 представяния в национални и международни научни форуми. Главен изследовател е на множество научни проекти,финансирани без прекъсване от Националните институти по здравеопазване (NIH; National Institutes of Health) на САЩ от 2003 г. насам. През 2021 г. получава наградата „Фулбрайт“ от Държавния Департамент на САЩ за международен културен и научен обмен с България. Създател е на първата лаборатория за неврокогнитивни изследвания на зависимостите в България и е един от основателите на Фондация "Институт за мозъчно здраве".`;
            document.getElementById("jasmin").innerHTML = text;
            document.getElementById("jasmin_title").innerHTML = "Жасмин Василева, PhD";
    } else /* english */ {
        const text = `Jasmin Vassileva is a Professor in the Departments of Psychiatry and Psychology at Virginia Commonwealth University (VCU) in Richmond, Virginia. Her research program focuses on the etiology of addiction and the consequences of chronic substance use. A central theme of her research is exploring the heterogeneity of addiction by examining similarities and differences among different types of addictions based on the specific type of substance (opiates, stimulants, alcohol, cannabis), patterns of use (mono-dependence, poly-dependence), and co-occurring externalizing and internalizing psychopathology. Her multidisciplinary approach includes neurocognitive, personality, genomic, neuroimaging, and computational methods. She integrates the results of this research into the development of novel neuroscience-based therapeutic programs aiming to improve mental health and prevent mental illness. Her team has developed the mobile Neuroscience-Informed Psychoeducation for Addiction (NIPA) program, which is currently being culturally adapted for Bulgaria. The goal of the program is to raise awareness and strengthen young people's cognitive and emotional resilience to the effects of alcohol, drugs, and other stressors. Prof. Vassileva is the author of over 120 peer-reviewed publications and book chapters and has over 250 presentations in national and international scientific forums. She is Principal Investigator of numerous research projects that have been continuously funded by the U.S. National Institutes of Health (NIH) since 2003. In 2021, she received a Fulbright U.S. Scholar Award from the U.S. Department of State for international cultural and scientific exchange with Bulgaria. She is the founder of the first laboratory for neurocognitive research in addiction in Bulgaria and one of the founders of the Institute for BrainHealth foundation.`;
        document.getElementById("jasmin").innerHTML = text;
        document.getElementById("jasmin_title").innerHTML = "Jasmin Vassileva, PhD";
    }
}

function switch_elena(bulgarian) {
    if (bulgarian) {
        const text = `Д-р Елена Пседерска е главен асистент в департамент „Когнитивна наука и психология“ на Нов български университет, съосновател и председател на Фондация “Институт за мозъчно здраве” (IBH). С над десет години активна изследователска дейност, д-рПседерска участва като изследовател и съ-изследовател в множество грантове, финансирани от Националните Институти по Здравеопазване (NIH; National Institutes of Health) на Съединените Щати, под ръководството на проф. д-р Жасмин Василева. Тези проекти целят да идентифицират общи и специфични личностни, невроповеденчески, невроизобразителни, полигенни и изчислителни маркери, свързани с употребата на опиоиди и стимуланти, които са критични за разработването на високо индивидуализирани и ефективни терапевтични интервенции. Д-р Пседерска е ангажирана с превода и културната адаптация на различни психологически инструменти за оценка и терапевтични подходи, базирани на невронауките, като целта е тяхното интегриране в рамките на българските стратегии за превенция и лечение на зависимости и други психични разстройства. В своята роля на председател на Фондация “Институт за мозъчно здраве”, д-р Пседерска се стреми да развива тези трансформативни дейности, които са насочени към насърчаване на нова ера на интегративни и базирани на доказателства решения за подобряване на психичното здраве и възстановяването от зависимости и други психични разстройства в България.`;
            document.getElementById("elena").innerHTML = text;
            document.getElementById("elena_title").innerHTML = "Елена Пседерска, PhD";
    } else /* english */ {
        const text = `Dr. Elena Psederska is an Assistant Professor in the Department of Cognitive Science and Psychology at New Bulgarian University, co-founder and President of the “Institute for Brain Health” Foundation (IBH). With a decade of extensive research experience, she has collaborated as a research scientist and co-investigator on multiple NIH-funded grants led by Prof. Jasmin Vassileva. These projects aim to identify common and specific personality, neurobehavioral, neuroimaging, polygenic, and computational markers associated with opioid and stimulant use disorders, which are crucial for facilitating the development of more personalized and targeted therapeutic interventions. Additionally, Dr. Psederska is dedicated to translating and culturally adapting various psychological assessment tools and neuroscience-based approaches, integrating them into Bulgaria’s frameworks for prevention and treatment of addictions and other mental health disorders. In her capacity as president of IBH, Dr. Psederska seeks to advance this transformative work, fostering a new era of integrative and evidence-based solutions for mental health and addiction recovery in Bulgaria.`; 
        document.getElementById("elena").innerHTML = text;
        document.getElementById("elena_title").innerHTML = "Elena Psederska, PhD";
    }
}

function switch_yuliya(bulgarian) {
    if (bulgarian) {
        const text = `Юлия Георгиева е is a veteran Bulgarian harm reduction activist, съосновател и председател на Фондация „Център за хуманни политики“, бивш съпредседател на Евразийската асоциация за намаляване на вредите, съосновател и член на управителния съвет на Фондация „Институт за мозъчно здраве“ (IBH). Тя притежава дълбоко разбиране и експертиза в теорията и практическото прилагане на принципите за намаляване на здравните щети от употребата на наркотици в България. Юлия има богат опит в установяването и поддържането на контакти с международни организации за разработване и прилагане на ефективни наркополитики. Нейните проекти целят да оптимизират и трансформират българските политики по отношение на наркотиците, преминавайки от криминализация към методи, базирани на научни доказателства и хуманизъм. В своята роля във Фондация „Институт за мозъчно здраве“, Юлия активно развива и подкрепя инициативи и програми, които не само усъвършенстват политиките и практиките за намаляване на вредите, но и включват базирани на доказателства стратегии за превенция на зависимости.`;
            document.getElementById("yuliya").innerHTML = text;
            document.getElementById("yuliya_title").innerHTML = "Юлия Георгиева";
    } else /* english */ {
        const text = `Yuliya Georgieva is a veteran Bulgarian harm reduction activist, co-founder and Chairperson of the “Center for Humane Policy” Foundation, former co-chair of the Eurasian Harm Reduction Association, and a member of the Board of Directors at the “Institute for Brain Health” (IBH). She possesses a deep understanding and extensive experience in the theory and practical implementation of harm reduction principles. Yuliya is also proficient in establishing and sustaining relationships with international organizations for developing effective drug policies. Her projects are dedicated to transforming Bulgarian drug policies from punitive approaches based on criminalization of drug use to public health approaches grounded in scientific evidence and humanism. In her capacity at IBH, she actively develops and supports initiatives and programs that not only refine harm reduction policies and practices but also integrate evidence-based strategies for addiction prevention.`;
        document.getElementById("yuliya").innerHTML = text;
        document.getElementById("yuliya_title").innerHTML = "Yuliya Georgieva";
    }
}

function switch_announcement(bulgarian) {
    if (bulgarian) {
        const text = `Заповядайте на международния научен симпозиум по зависимости
            <br>
            на <span style="font-size: larger; font-weight: 800;">22 март</span> в <span style="font-weight: 800;">хотел Милениум в София</span>.
            <br>
            Вижте по-долу
            <br>
            ↓`;
        document.getElementById("announcement").innerHTML = text;
    } else /* english */ {
        const text = `Join us for the International Scientific Symposium on Addictions
            <br>
            on <span style="font-size: larger; font-weight: 800;">22 March</span> at <span style="font-weight: 800;">Hotel Millennium in Sofia</span>.
            <br>
            See below
            <br>
            ↓`;
        document.getElementById("announcement").innerHTML = text;
    }
}

function switch_menu(bulgarian) {
    menu_about(bulgarian)
    menu_team(bulgarian)
    menu_events(bulgarian)
    menu_contact(bulgarian)
}

function menu_about(bulgarian) {
    let text = ``;
    if (bulgarian) {
        text = `ЗА НАС`;
    } else /* english */ {
        text = `ABOUT`;
    }
    document.getElementById("menu-about").innerHTML = text;
}

function menu_team(bulgarian) {
    let text = ``;
    if (bulgarian) {
        text = `ЕКИП`;
    } else /* english */ {
        text = `TEAM`;
    }
    document.getElementById("menu-team").innerHTML = text;
}

function menu_events(bulgarian) {
    let text = ``;
    if (bulgarian) {
        text = `СЪБИТИЯ`;
    } else /* english */ {
        text = `EVENTS`;
    }
    document.getElementById("menu-events").innerHTML = text;
}

function menu_contact(bulgarian) {
    let text = ``;
    if (bulgarian) {
        text = `КОНТАКТИ`;
    } else /* english */ {
        text = `CONTACT`;
    }
    document.getElementById("menu-contact").innerHTML = text;
}