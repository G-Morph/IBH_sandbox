function switch_about(bulgarian) {
    if (bulgarian) {
        const text = `Фондация „Институт за мозъчно здраве“ (ИМЗ) е българска неправителствена
        организация, създадена с цел да развива мозъчното здраве в България. Фондацията е
        основана през 2024 г. от проф. д-р Жасмин Василева, д-р Елена Пседерска и Юлия
        Георгиева, като плод на тяхното дългогодишно сътрудничество и споделена ангажираност
        към приложението на невронауките и предоставяването на ефективни и широко достъпни
        интервенции за подкрепа на мозъчното здраве в България.
        <br>
        <br>
        Фондацията е ангажирана с повишаване на обществената осведоменост относно
        мозъчното здраве, насърчаване на научни изследвания и разработване на интервенции
        за лечение на мозъчни разстройства, базирани на доказателства. Институтът цели да
        трансформира водещите научни открития в практически решения, които могат да бъдат
        интегрирани в образованието, превенцията и лечението на зависимости и други психични
        разстройства, като същевременно насърчава мултидисциплинарното сътрудничество за
        подобряване на благосъстоянието и качеството на живот в общността.
        <br>
        <br>
        Целите на Фондацията включват разработването на ефективни превантивни,
        терапевтични и неврорехабилитационни програми, насочени към намаляване на риска от
        развитие на зависимости и други психични заболявания, както и стратегии за подкрепа на
        възстановяването в периодите на ремисия. Институтът е пионер в създаването и
        адаптирането на нови методи и технологии за скрининг и оценка на личностни,
        неврокогнитивни, психофизиологични, мозъчни, генетични и други фактори, увеличаващи
        уязвимостта към мозъчни разстройства. Институтът също организира научни събития и
        обучения, предлага специализирани програми за обучение на професионалисти в
        областта на психичното здраве и насърчава развитието на приложните невронауки в
        България чрез международни проекти и програми за устойчиво научно развитие.`;
        document.getElementById("about").innerHTML = text;
        document.getElementById("about_title").innerHTML = "За Нас"
    } else /* english */ {
        const text = `The &quot;Institute for Brain Health&quot; Foundation (IBH) is a Bulgarian non-governmental organization
            aiming to develop brain health in Bulgaria by providing effective and widely accessible
            neuroscience-based interventions. The foundation was established in 2024 by Prof. Dr. Jasmin
            Vassileva, Dr. Elena Psederska, and Yulia Georgieva, as a result of their long-standing
            collaboration and shared commitment to advance applied neuroscience and provide effective
            and widely accessible interventions for improving brain health in Bulgaria.
            <br>
            <br>
            The IBH aims to promote evidence-based neuroscience in Bulgaria by increasing public
            awareness of brain health, promoting research, and developing novel personalized prevention
            and intervention approaches for mental health disorders with the goal of increasing resilience
            and improving well-being. It pioneers new methods and technologies in Bulgaria for screening
            and assessment of personality, neurocognitive, psychophysiological, brain, genetic, and other
            factors that increase vulnerability to brain disorders. In addition, the IBH organizes scientific
            events and trainings, offers specialized training programs for mental health professionals, and
            promotes the development of applied neuroscience in Bulgaria through international projects
            and programs for sustainable research development.`;
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
        const text = `Д-р Жасмин Василева е професор по психиатрия и психология във Virginia
            Commonwealth University (VCU) в Ричмънд, Вирджиния, САЩ. Централна тема на нейните
            научни изследвания са етиологичните фактори при зависимостите и тяхната
            хетерогенност, които тя изследва използвайки неврокогнитивни, личностни, геномни,
            невроизобразителни и изчислителни подходи. Тя интегрира резултатите от тези
            изследвания в разработването на нови терапевтични и превантивни програми за
            подобряване на психичното здраве. Нейният екип наскоро разработи базираната на
            невронауките прихообучителна програма за пристрастяване и зависимост (NIPA), целяща
            повишаване на осведомеността и изграждане на устойчивост към ефектите на алкохола и
            наркотиците върху мозъка и когнитивните функции, която в момента се адаптира за
            България.
            <br>
            <br>
            Проф. Василева е носител на наградата Фулбрайт (България, 2021) от Държавния
            Департамент на САЩ. Тя е главен изследовател на множество мултидисциплинарни
            международни проекти, част от които се провеждат в България. Публикувала е широко в
            областта на невронауката на зависимостите и изчислителните невронауки и е автор на
            над 120 рецензирани статии и глави. Международната ѝ изследователската програма е
            финансирана без прекъсване от Националните институти по здравеопазване на САЩ
            (NIH) от 2003 г. През 2008 г. създава първата неврокогнитивна изследователска
            лаборатория за изследване на зависимости в България. Като един от основателите на
            фондация „Институт за мозъчно здраве“, проф. Василева активно развива
            международния научен обмен на фондацията и адаптирането и създаването на нови
            методи за оценка, превенция, и интервенция при психиатрични заболявания и програми
            за укрепване на психичното здраве в България.`;
            document.getElementById("jasmin").innerHTML = text;
            document.getElementById("jasmin_title").innerHTML = "Жасмин Василева, PhD";
    } else /* english */ {
        const text = `Dr. Jasmin Vassileva is a tenured Professor of Psychiatry and Psychology at Virginia
            Commonwealth University (VCU) in Richmond, Virginia, USA. A central theme of her research
            is exploring the heterogeneity of addiction using neurocognitive, personality, genomic,
            neuroimaging, and computational approaches. She integrates these findings into the
            development of novel neuroscience-based programs for improving mental health. Her team
            developed the Neuroscience-Informed Psychoeducation for Addiction (NIPA) program, aiming to
            increase awareness and build resilience to the effects of alcohol, drugs and other emotional
            triggers on brain and cognitive function. The program is currently being adapted for Bulgaria.
            <br>
            <br>
            Vassileva is a Fulbright Scholar alumna (Bulgaria, 2021) and a principal investigator of
            numerous multidisciplinary multi-site international projects, many of which take place in
            Bulgaria. She is widely published in the field of computational and addiction neuroscience and
            has authored over 120 peer-reviewed publications and chapters. Her international program of
            research has been continuously funded by the U.S. National Institutes of Health (NIH) since
            2003. In 2008, she established the first neurocognitive research laboratory for the study of
            addictions in Bulgaria as a satellite of her lab in the United States. As one of the founders of the
            Institute for Brain Health foundation, Prof. Vassileva leads the international research efforts of
            the foundation, and the development and adaptation of novel evidence-based methods for
            assessment, prevention, and intervention in neuropsychiatric disorders and programs for
            increasing cognitive resilience and improving brain health in Bulgaria.`;
        document.getElementById("jasmin").innerHTML = text;
        document.getElementById("jasmin_title").innerHTML = "Jasmin Vassileva, PhD";
    }
}

function switch_elena(bulgarian) {
    if (bulgarian) {
        const text = `Д-р Елена Пседерска е главен асистент в департамент „Когнитивна наука и психология“
            на Нов български университет, съосновател и председател на Фондация “Институт за
            мозъчно здраве” (IBH). С над десет години активна изследователска дейност, д-р
            Пседерска участва като изследовател и съ-изследовател в множество грантове,
            финансирани от Националните Институти по Здравеопазване (NIH; National Institutes of
            Health) на Съединените Щати, под ръководството на проф. д-р Жасмин Василева. Тези
            проекти целят да идентифицират общи и специфични личностни, невроповеденчески,
            невроизобразителни, полигенни и изчислителни маркери, свързани с употребата на
            опиоиди и стимуланти, които са критични за разработването на високо
            индивидуализирани и ефективни терапевтични интервенции.
            <br>
            <br>
            Д-р Пседерска е ангажирана с превода и културната адаптация на различни психологически
            инструменти за оценка и терапевтични подходи, базирани на невронауките, като целта е 
            тяхното интегриране в рамките на българските стратегии за превенция и лечение на
            зависимости и други психични разстройства. В своята роля на председател на Фондация
            “Институт за мозъчно здраве”, д-р Пседерска се стреми да развива тези трансформативни
            дейности, които са насочени към насърчаване на нова ера на интегративни и базирани
            на доказателства решения за подобряване на психичното здраве и възстановяването от
            зависимости и други психични разстройства в България.`;
            document.getElementById("elena").innerHTML = text;
            document.getElementById("elena_title").innerHTML = "Елена Пседерска, PhD";
    } else /* english */ {
        const text = `Dr. Elena Psederska is an Assistant Professor in the Department of Cognitive Science and
            Psychology at New Bulgarian University, co-founder and President of the “Institute for Brain
            Health” Foundation (IBH). With a decade of extensive research experience, she has
            collaborated as a research scientist and co-investigator on multiple NIH-funded grants led by
            Prof. Jasmin Vassileva. These projects aim to identify common and specific personality,
            neurobehavioral, neuroimaging, polygenic, and computational markers associated with opioid
            and stimulant use disorders, which are crucial for facilitating the development of more
            personalized and targeted therapeutic interventions.
            <br>
            <br>
            Additionally, Dr. Psederska is dedicated to translating and culturally adapting various
            psychological assessment tools and neuroscience-based approaches, integrating them into
            Bulgaria’s frameworks for prevention and treatment of addictions and other mental health
            disorders. In her capacity as president of IBH, Dr. Psederska seeks to advance this
            transformative work, fostering a new era of integrative and evidence-based solutions for 
            mental health and addiction recovery in Bulgaria.`;
        document.getElementById("elena").innerHTML = text;
        document.getElementById("elena_title").innerHTML = "Elena Psederska, PhD";
    }
}

function switch_yuliya(bulgarian) {
    if (bulgarian) {
        const text = `Юлия Георгиева е is a veteran Bulgarian harm reduction activist, съосновател и
            председател на Фондация „Център за хуманни политики“, бивш съпредседател на
            Евразийската асоциация за намаляване на вредите, съосновател и член на управителния
            съвет на Фондация „Институт за мозъчно здраве“ (IBH). Тя притежава дълбоко разбиране
            и експертиза в теорията и практическото прилагане на принципите за намаляване на
            здравните щети от употребата на наркотици в България. 
            <br>
            <br>
            Юлия има богат опит в установяването и поддържането на контакти с международни организации
            за разработване и прилагане на ефективни наркополитики. Нейните проекти целят да оптимизират
            и трансформират българските политики по отношение на наркотиците, преминавайки от
            криминализация към методи, базирани на научни доказателства и хуманизъм. В своята роля във
            Фондация „Институт за мозъчно здраве“, Юлия активно развива и подкрепя инициативи и програми,
            които не само усъвършенстват политиките и практиките за намаляване на вредите, но и включват
            базирани на доказателства стратегии за превенция на зависимости.`;
            document.getElementById("yuliya").innerHTML = text;
            document.getElementById("yuliya_title").innerHTML = "Юлия Георгиева";
    } else /* english */ {
        const text = `Yuliya Georgieva is a veteran Bulgarian harm reduction activist, co-founder and Chairperson of
            the “Center for Humane Policy” Foundation, former co-chair of the Eurasian Harm Reduction
            Association, and a member of the Board of Directors at the “Institute for Brain Health” (IBH).
            She possesses a deep understanding and extensive experience in the theory and practical
            implementation of harm reduction principles.
            <br>
            <br>
            Yuliya is also proficient in establishing and sustaining relationships with international
            organizations for developing effective drug policies. Her projects are dedicated to
            transforming Bulgarian drug policies from punitive approaches based on criminalization of
            drug use to public health approaches grounded in scientific evidence and humanism. In her
            capacity at IBH, she actively develops and supports initiatives and programs that not only
            refine harm reduction policies and practices but also integrate evidence-based strategies
            for addiction prevention.`;
        document.getElementById("yuliya").innerHTML = text;
        document.getElementById("yuliya_title").innerHTML = "Yuliya Georgieva";
    }
}
