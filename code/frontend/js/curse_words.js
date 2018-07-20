var Curse_Words = function () {
    var WORD_LIST = {
            affenarsch: true,
            affenmensch: true,
            allmachtsdackel: true,
            ameisenficker: true,
            analbaron: true,
            analraupe: true,
            analzone: true,
            arschbratze: true,
            arschforscher: true,
            arschfotzengesicht: true,
            arschgesicht: true,
            arschhaarbartfratze: true,
            arschkeks: true,
            arschkopf: true,
            arschlocke: true,
            ashley: true,
            aso: true,
            atomspast: true,
            auspuffbumser: true,
            bachel: true,
            badkapp: true,
            bangen: true,
            berber: true,
            besen: true,
            birkenstockfotzenkopf: true,
            birl: true,
            bodendompteuse: true,
            brunskuh: true,
            buckelhur: true,
            bumsnuss: true,
            buschmensch: true,
            butterkuh: true,
            cholerator: true,
            dauerlutscher: true,
            dollbohrer: true,
            donnerfotze: true,
            doofmannsgehilfe: true,
            doppeldepp: true,
            dreilochnutte: true,
            eibemme: true,
            eichelarschkopf: true,
            fitch: true,
            flachgeist: true,
            flattermuschi: true,
            flodder: true,
            fontanellenfick: true,
            fotze: true,
            fotzklotz: true,
            gargamel: true,
            gaylon: true,
            geburtsfehlermiss: true,
            gesichtseintopf: true,
            gesichtsmorph: true,
            gnarf: true,
            gnogel: true,
            grasdackel: true,
            gratler: true,
            hackfresse: true,
            halbaffe: true,
            halma: true,
            hannefatzke: true,
            hartzig: true,
            hausschuhgesicht: true,
            hdv: true,
            hodenbussard: true,
            hodenkopf: true,
            hodenschrubbler: true,
            hohlbratze: true,
            honk: true,
            hosenlottle: true,
            hrsn: true,
            huru: true,
            hutze: true,
            intelligenzverweigerer: true,
            kackbatzen: true,
            kackstuhl: true,
            kanisterkopf: true,
            klapskalli: true,
            klitzmorchel: true,
            klufenmichel: true,
            knallarsch: true,
            kotlutscher: true,
            kotzkannenfressbrett: true,
            krapfengesicht: true,
            kuttenluder: true,
            larve: true,
            lattenheinrich: true,
            lattenschreck: true,
            liam: true,
            loser: true,
            mangelbegent: true,
            missi: true,
            mongo: true,
            muschischeps: true,
            nafti: true,
            napfwurst: true,
            nougatnutte: true,
            nuddebumber: true,
            ogerlurch: true,
            orgasmusbremse: true,
            oshig: true,
            otzenfrosch: true,
            paragrafenschubse: true,
            partyopfer: true,
            paselacke: true,
            peniskopf: true,
            pfeifenheini: true,
            pferdefresse: true,
            pfingstochse: true,
            pimmel: true,
            pimmelfresse: true,
            pimmelkopf: true,
            pimmelpapagei: true,
            pisskajole: true,
            plempe: true,
            pleppo: true,
            peterficker: true,
            pottmolch: true,
            rotzpupsi: true,
            sackfotze: true,
            schlampe: true,
            schlabberlappen: true,
            schmalzgrab: true,
            schmalztitte: true,
            schmongo: true,
            schmudel: true,
            senfgurke: true,
            sheamus: true,
            simbel: true,
            slut: true,
            spaltenspengler: true,
            spammailautor: true,
            spastard: true,
            spastophil: true,
            spoastie: true,
            spongebob: true,
            sponk: true,
            staubbeutel: true,
            steroidbeule: true,
            steroidmutant: true,
            tapetengerippe: true,
            topmoppel: true,
            unwerk: true,
            vollaffe: true,
            vollmongo: true,
            vongo: true,
            wachsfresse: true,
            waldwichtel: true,
            wichsbazille: true,
            wichsfisch: true,
            wikidiot: true,
            wulfer: true,
            wulffen: true,
            zahnspangenbettler: true,
            aasgeier: true,
            abspritzer: true,
            sdfds: true,
            ackerfresse: true,
            affenhirn: true,
            affenkotze: true,
            afterlecker: true,
            almosenarsch: true,
            amazing: true,
            anal: true,
            analadmiral: true,
            analbesamer: true,
            analbohrer: true,
            analdrill: true,
            analentjungferer: true,
            analerotiker: true,
            analfetischist: true,
            analförster: true,
            analnegerdildo: true,
            analratte: true,
            analritter: true,
            armleuchter: true,
            arsch: true,
            arschaufreißer: true,
            arschbackenschänder: true,
            arschbesamer: true,
            ärsche: true,
            arschentjungferer: true,
            arschficker: true,
            arschgeburt: true,
            arschgeige: true,
            arschhaarfetischist: true,
            arschhaarrasierer: true,
            arschhöhlenforscher: true,
            arschkrampe: true,
            arschkratzer: true,
            arschlecker: true,
            arschloch: true,
            arschlöcher: true,
            arschmade: true,
            arschratte: true,
            arschzapfen: true,
            arsebandit: true,
            arsehole: true,
            arsejockey: true,
            arselicker: true,
            arsenuts: true,
            arsewipe: true,
            assel: true,
            assfuck: true,
            assfucking: true,
            assgrabber: true,
            asshol: true,
            asshole: true,
            assi: true,
            assrammer: true,
            assreamer: true,
            asswipe: true,
            astlochficker: true,
            auspufflutscher: true,
            badass: true,
            badenutte: true,
            bananenstecker: true,
            bastard: true,
            bauernschlampe: true,
            behindis: true,
            bekloppter: true,
            muttergeficktes: true,
            beklopter: true,
            bettnässer: true,
            bettpisser: true,
            bettspaltenficker: true,
            biatch: true,
            bimbo: true,
            bitch: true,
            bitches: true,
            bitchnutte: true,
            bitsch: true,
            bizzach: true,
            blechfotze: true,
            blödmann: true,
            blogspoint: true,
            bohnenfresser: true,
            boob: true,
            boobes: true,
            boobie: true,
            boobies: true,
            boobs: true,
            booby: true,
            breasts: true,
            brechfurz: true,
            buggery: true,
            bullensohn: true,
            bullshit: true,
            bummsen: true,
            bumsen: true,
            bumsklumpen: true,
            buschnutte: true,
            busty: true,
            buttfuc: true,
            buttfuck: true,
            buttfucker: true,
            buttfucking: true,
            carpetlicker: true,
            carpetlickers: true,
            chausohn: true,
            clitsuck: true,
            clitsucker: true,
            clitsucking: true,
            cock: true,
            cockpouch: true,
            cracka: true,
            crap: true,
            craper: true,
            crapers: true,
            crapping: true,
            craps: true,
            cunt: true,
            cunts: true,
            dachlattengesicht: true,
            dackelficker: true,
            dickhead: true,
            dicklicker: true,
            diplomarschloch: true,
            doofi: true,
            douglette: true,
            drecksack: true,
            drecksau: true,
            dreckschlitz: true,
            drecksfotze: true,
            drecksnigger: true,
            drecksnutte: true,
            dreckspack: true,
            dreckvotze: true,
            dumbo: true,
            dumpfbacke: true,
            dünnpfifftrinker: true,
            eichellecker: true,
            eierkopf: true,
            eierlutscher: true,
            eiswürfelpisser: true,
            ejaculate: true,
            entenfisterer: true,
            epilepi: true,
            epilepis: true,
            epileppis: true,
            fagette: true,
            fagitt: true,
            fäkalerotiker: true,
            faltenficker: true,
            fatass: true,
            ferkelficker: true,
            fettarsch: true,
            fettsack: true,
            fettsau: true,
            feuchtwichser: true,
            fick: true,
            fickarsch: true,
            fickdreck: true,
            ficken: true,
            ficker: true,
            fickfehler: true,
            fickfetzen: true,
            fickfresse: true,
            fickfrosch: true,
            fickfucker: true,
            fickgelegenheit: true,
            fickgesicht: true,
            fickmatratze: true,
            ficknudel: true,
            ficksau: true,
            fickschlitz: true,
            fickschnitte: true,
            fickschnitzel: true,
            fingerfuck: true,
            fingerfucking: true,
            fistfuck: true,
            fistfucking: true,
            flachtitte: true,
            flussfotze: true,
            fotzenforscher: true,
            fotzenfresse: true,
            fotzenknecht: true,
            fotzenkruste: true,
            fotzenkuchen: true,
            fotzenlecker: true,
            fotzenpisser: true,
            fotzenschmuser: true,
            fotzhobel: true,
            fritzfink: true,
            froschfotze: true,
            froschfotzenficker: true,
            froschfotzenleder: true,
            fucked: true,
            fucking: true,
            fuckup: true,
            fudgepacker: true,
            futtgesicht: true,
            geilriemen: true,
            gesichtsfotze: true,
            göring: true,
            großmaul: true,
            gummifotzenficker: true,
            gummipuppenbumser: true,
            gummisklave: true,
            hafensau: true,
            hartgeldhure: true,
            hinterlader: true,
            hirni: true,
            hitler: true,
            hodenbeißer: true,
            hodensohn: true,
            homo: true,
            hosenpisser: true,
            hosenscheißer: true,
            hühnerficker: true,
            huhrensohn: true,
            hundeficker: true,
            hundesohn: true,
            hurenlecker: true,
            hurenpeter: true,
            hurensohn: true,
            hurentocher: true,
            idiot: true,
            idioten: true,
            itakker: true,
            ittaker: true,
            jackass: true,
            jackshit: true,
            jizz: true,
            judensau: true,
            kackarsch: true,
            kacke: true,
            kacken: true,
            kackfass: true,
            kackfresse: true,
            kacknoob: true,
            kaktusficker: true,
            kanacke: true,
            kanake: true,
            kanaken: true,
            kanaldeckelbefruchter: true,
            kartoffelficker: true,
            kinderficken: true,
            kinderficker: true,
            kinderporno: true,
            klapposkop: true,
            klolecker: true,
            klötenlutscher: true,
            knoblauchfresser: true,
            konzentrationslager: true,
            kotgeburt: true,
            kotnascher: true,
            kümmeltürke: true,
            kümmeltürken: true,
            lackaffe: true,
            lebensunwert: true,
            lesbian: true,
            lurchi: true,
            lustbolzen: true,
            lutscher: true,
            magerschwanz: true,
            manwhore: true,
            masturbate: true,
            missgeburt: true,
            mistsau: true,
            miststück: true,
            mitternachtsficker: true,
            mohrenkopf: true,
            möse: true,
            mösenficker: true,
            mösenlecker: true,
            mösenputzer: true,
            motherfucker: true,
            muschilecker: true,
            muschischlitz: true,
            mutterficker: true,
            nazi: true,
            nazis: true,
            neger: true,
            nigga: true,
            nigger: true,
            niggerlover: true,
            niggers: true,
            niggerschlampe: true,
            nignog: true,
            nippelsauger: true,
            nutte: true,
            nuttensohn: true,
            nuttenstecher: true,
            nuttentochter: true,
            ochsenpimmel: true,
            penis: true,
            penislecker: true,
            penislutscher: true,
            penissalat: true,
            penner: true,
            pferdearsch: true,
            phentermine: true,
            pimmellutscher: true,
            pimmelpirat: true,
            pimmelprinz: true,
            pimmelschimmel: true,
            pimmelvinni: true,
            pindick: true,
            pisse: true,
            pisser: true,
            pissetrinker: true,
            pissfisch: true,
            pissflitsche: true,
            pissnelke: true,
            polacke: true,
            polacken: true,
            poop: true,
            popellfresser: true,
            popostecker: true,
            popunterlage: true,
            porn: true,
            porno: true,
            pornografie: true,
            pornoprengel: true,
            pottsau: true,
            prick: true,
            quiff: true,
            randsteinwichser: true,
            rimjob: true,
            rindsriemen: true,
            ritzenfummler: true,
            rollbrooden: true,
            rosettenhengst: true,
            rosettenlecker: true,
            rosettentester: true,
            sackfalter: true,
            sackgesicht: true,
            sacklutscher: true,
            sackratte: true,
            saftarsch: true,
            sakfalter: true,
            schamhaarlecker: true,
            schandmaul: true,
            scheisse: true,
            scheisser: true,
            scheissgesicht: true,
            scheisshaufen: true,
            schlammfotze: true,
            schlitzpisser: true,
            schmalspurficker: true,
            schmeue: true,
            schmuckbert: true,
            schnuddelfresser: true,
            schnurbeltatz: true,
            schrumpelfotze: true,
            schwanzlurch: true,
            schwanzlutscher: true,
            schweinepriester: true,
            schweineschwanzlutscher: true,
            schwuchtel: true,
            schwutte: true,
            sex: true,
            shiter: true,
            shiting: true,
            shitlist: true,
            shitomatic: true,
            shits: true,
            shitty: true,
            shlong: true,
            sitzpisser: true,
            skullfuck: true,
            skullfucker: true,
            skullfucking: true,
            smegmafresser: true,
            spack: true,
            spacko: true,
            spaghettifresser: true,
            spasti: true,
            spastis: true,
            spermafresse: true,
            spermarutsche: true,
            spritzer: true,
            stinkschlitz: true,
            stricher: true,
            threesome: true,
            tittenficker: true,
            tittenspritzer: true,
            titties: true,
            titty: true,
            tunte: true,
            untermensch: true,
            vagina: true,
            vergasen: true,
            viagra: true,
            volldepp: true,
            volldeppen: true,
            vollhorst: true,
            vollidiot: true,
            vollpfosten: true,
            vollspack: true,
            vollspacken: true,
            vollspasti: true,
            vorhaut: true,
            votze: true,
            votzenkopf: true,
            wanker: true,
            wankers: true,
            weichei: true,
            whoar: true,
            whore: true,
            wichsbart: true,
            wichsbirne: true,
            wichser: true,
            wichsfrosch: true,
            wichsgriffel: true,
            wichsvorlage: true,
            wickspickel: true,
            wixa: true,
            wixen: true,
            wixer: true,
            wixxer: true,
            wixxxer: true,
            wixxxxer: true,
            wurstsemmelfresser: true,
            yankee: true,
            zappler: true,
            zyclon: true,
            zyklon: true
        },

        is_curse_word = function (word) {
            return WORD_LIST.hasOwnProperty(word.toLowerCase());
        };

    return {
        is_curse_word: is_curse_word
    }
};
