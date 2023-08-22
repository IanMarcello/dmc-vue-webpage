<script setup>
import { ref } from 'vue'
import IcRoundFormatListNumbered from '~icons/ic/round-format-list-numbered'
import IcRoundExpandMore from '~icons/ic/round-expand-more'
import IcRoundArrowBack from '~icons/ic/round-arrow-back'
import { useToggleStore } from '@/stores/state'

const toggleStore = useToggleStore()

const listItems = [
  {
    id: 'itemOne',
    name: 'Appearance'
  },
  {
    id: 'itemTwo',
    name: 'Personality'
  },
  {
    id: 'itemThree',
    name: 'Powers and Abilities'
  },
  {
    id: 'itemFour',
    name: 'Equipment'
  },
  {
    id: 'itemFive',
    name: 'Gameplay'
  }
]

const itemSection = ref('Section A')
</script>

<template>
  <main class="p-5 mx-5">
    <section class="flex flex-row justify-between mt-5">
      <div class="flex flex-col w-3/4">
        <div class="px-2">
          <div>
            <router-link
              :to="{ name: 'home' }"
              class="flex text-base font-medium text-theme-100 hover:text-theme-50"
            >
              <IcRoundArrowBack class="w-6 h-6" />
              Back to HeroSection
            </router-link>
          </div>
        </div>

        <div class="m-2 overflow-hidden rounded-sm w-80">
          <div class="relative z-10 flex flex-row justify-between p-4 border-2 bg-theme-700">
            <div class="flex flex-row">
              <IcRoundFormatListNumbered class="w-6 h-6 mr-1" />
              <span class="font-semibold">Contents</span>
            </div>

            <div
              class="transition-all duration-300 cursor-pointer"
              @click.prevent="toggleStore.toggleList"
              :class="toggleStore.openList ? 'rotate-0' : '-rotate-180 '"
            >
              <IcRoundExpandMore class="w-6 h-6" />
            </div>
          </div>

          <div
            class="px-4 py-2 border-b-2 border-x-2"
            :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-72 h-0'"
          >
            <ol class="px-5 list-decimal">
              <li
                v-for="item in listItems"
                :key="item.id"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                <span v-scroll-to="'#' + item.id">
                  {{ item.name }}
                </span>
              </li>
            </ol>
          </div>
        </div>

        <div class="my-5">
          <p>
            Dante is one of the main protagonists of the Devil May Cry franchise, and the main
            playable character for the majority of the games in the series. He is the second son of
            the demon Sparda and the human Eva, the younger twin brother of Vergil, and the uncle of
            Nero. Dante is a paranormal mercenary, private investigator and vigilante Devil Hunter
            dedicated to exterminating evil demons and other malevolent supernatural forces; a
            mission he follows in pursuit of those that killed his mother and corrupted his brother.
          </p>
        </div>
      </div>

      <div class="flex flex-col w-1/4">
        <div class="text-center">
          <h4 class="text-base glitch-transform">Dante</h4>
          <div class="py-0.5 bg-gradient-to-r from-[#101217] via-theme-100 to-[#101217]"></div>
        </div>

        <div class="flex justify-center w-full h-full">
          <img
            class="w-40"
            src="@/assets/images/characters/dante/dante_heroicon.webp"
            alt="Dante"
          />
        </div>
      </div>
    </section>

    <section id="itemOne" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Appearance</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-5">
        <p>
          As stated in an interview with original series creator Hideki Kamiya in the Devil May Cry
          Graphic Edition artbook, the earliest ideas he had for Dante's design were centered around
          three key points; "long, stylish coat" to make the character "showy", "British man" as
          Kamiya wanted him to be a "witty, yet traditional fighting man", and "doesn't smoke
          cigarette", believing that the character was too cool to smoke.
        </p>

        <p>
          In the same interview, another noted influence on Dante both design-wise and
          character-wise was Cobra of the acclaimed Japanese manga and anime series Space Adventure
          Cobra. Kamiya believed Cobra's cocky attitude and red attire were key points for a
          "heroic" character. Ironically, despite Cobra being a heavy cigar smoker, Dante himself
          does not smoke, as Kamiya believed Dante to be cooler without a cigarette.
        </p>

        <p>
          Ever since Devil May Cry started development as Resident Evil 4, Dante has had white hair.
          It's remained in a consistent style throughout the series, although there are a few
          differences between installments.
        </p>

        <p>
          In Devil May Cry, Devil May Cry 4, and Devil May Cry 5, his hair is somewhat parted with
          his bangs brushed down; in Devil May Cry 3 his hair is brushed down with his bangs
          partially covering his eyes, and in Devil May Cry 2 his hair is much thicker, with his
          bangs parted in front of his right eye.
        </p>

        <p>
          Dante has worn a myriad of clothing throughout his many appearances, yet his most glaring
          trait is his affinity for red-colored apparel, often in the form of long, two-tailed
          coats.
        </p>

        <p>
          In Devil May Cry 3, Dante wears long, tan-colored jeans, black fingerless gloves, and
          military-style boots. His coat has zippers on the sleeves and a buckle around the waist,
          and two brown, leather holsters on the back to carry Ebony & Ivory. Contrary to later
          games, Dante does not wear any form of clothing underneath his coat, going shirtless
          throughout the whole game, displaying his silver half of the Perfect Amulet around his
          neck, as well as his bare, well-toned chest and muscular physique. Following Dante's first
          battle with Vergil, his half of the amulet is stolen and the right sleeve of his coat is
          damaged, with Dante tearing it off afterward. In his final confrontation with Vergil, his
          left glove is slashed across the palm by Yamato, and the epilogue shows that Dante keeps
          it on his desk, perhaps in remembrance of his lost brother.
        </p>

        <p>
          In the original Devil May Cry and the 2007 anime adaptation, Dante wears red pants with
          two black belts wrapped around his right thigh, a black, leather belt, black gloves, and
          high, black boots. Dante's coat is much basic in design, with an upturned collar and short
          sleeves with black cuffs, though the coat lacks coattails. Underneath the coat, Dante
          wears what appears to be a black long-sleeved shirt, with a red vest with black clasps
          over it. In numerous cutscenes, his half of the Perfect Amulet is once again on display,
          yet it appears infrequently and is not a permanent feature on his character model.
        </p>

        <p>
          In Devil May Cry 2, Dante's outfit is reminiscent of the one seen in the first game, but
          with more pronounced and poignant features. He wears high black boots and red jeans once
          more, yet has a single belt wrapped around each thigh. A belt featuring a skull-themed
          buckle wraps around his waist, and he wears black, gauntlet shaped gloves with three
          buckled straps on each one. His coat is a deeper red than in the previous game, with two
          coattails, yet the coat has a more pronounced buckled collar and a black strap going over
          his right shoulder wrapping around his chest, with two golden studs on the front. The
          front of the coat is also patterned individually from the rest of it, resembling a sort of
          vest or body armor, with a zipper closed all the way up from the waist to the bottom of
          Dante's neck, perhaps reflecting his introverted nature seen in the game.
        </p>

        <p>
          In his appearance in Devil May Cry 4, Dante's outfit arguably takes on its most flamboyant
          look. Dante once more wears red pants, yet they are almost completely covered sans his
          crotch and rear by long, black leather motorcycle chaps featuring a brown, cowboy boot
          design around the ankles. He wears black, loafer looking boots, and black gloves exposing
          his knuckles and index finger on each hand, and his pants are wrapped with a black belt
          featuring a silver emblem decorated with a demonic skull. The coat is given a much more
          detailed and stylish look, with Western and Italian features, and a deep red, almost
          crimson color. Once more the coat is short-sleeved, with numerous gold-colored studs
          decorating the shoulders, collar, and chest, and a single zipper on the front, yet Dante
          is never seen zipping it up in-game. Underneath the coat, Dante wears a black, zipped up
          undershirt with three clasps closed together with ornate, golden buckles, and
          medium-length sleeves that can be seen passing his shoulders. This undershirt is also
          zipped up just below his neck and features an upturned collar which complements the one on
          his coat. Another noticeable design choice separate from Dante's outfit is his chin,
          covered with short, black stubble, reflecting his older age, as stated by designer Tatsuya
          Yoshikawa in the Devil May Cry: 3142 Graphic Arts book that Dante is "around 40" by the
          events of Devil May Cry 4.
        </p>

        <p>
          In Devil May Cry 5, Dante's outfit takes on its most simple look. His red jacket is faded,
          has a washed-out look, a skull on his back and also resembles his Devil May Cry 4 jacket.
          He wears an ordinary black Henley T-shirt with three buttons as the sleeves itself reach
          through his elbows, where it also features torn details, for his wrists he wears black
          driving gloves and white bandages. For his legs, he wears a black belt with golden
          accents, black leather pants, and brown boots. His hair and beard also grow after being in
          a coma for a month. This gives Dante a more grungy look. Dante's black Henley T-Shirt also
          appears dark blue during the daylight when he battles Vergil during their duel and their
          sparring match in the epilogue.
        </p>

        <p>
          Following his defeat by Urizen, Dante's hair had grown out considerably during his
          recovery and is now the same length as it was in Devil May Cry 2, albeit styled similarly
          to that in Devil May Cry. Along with his hair, from stubble to beard. His clothes are also
          muted in color and dirtier as well.
        </p>
      </div>
    </section>

    <section id="itemTwo" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Personality</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-5">
        <p>
          As seen at the beginning of the series, Dante is incredibly flippant, casually mouthing
          off to even the most powerful of demons, and he generally enjoys showing off and taunting
          his adversaries as often as he can. Dante also displays a fearless, almost disinterested
          attitude towards incredibly dangerous situations, such as assuming Trish simply had to use
          the bathroom after crashing through his office's front door on a motorcycle, being
          attacked by the 7 Hells in his office, being swallowed by Echidna, and effortlessly
          shrugging off wounds such as a headshot or impalement numerous times, the latter of which
          happens quite frequently for the Devil Hunter.
        </p>

        <p>
          While maturing as time goes by, Dante never loses his care-free, devil-may-care attitude,
          except in Devil May Cry 2. He can be serious when the situation calls for it, but still
          maintains an overall laid-back demeanor during tense situations, and is never without a
          witty taunt or comeback. Although seemingly shown at times to be uncaring or callous,
          Dante maintains a very strong sense of justice like his father, and prefers to fight fair.
          He can be counted on to do the right thing, even if he makes humorously cynical quips
          about it the entire time.
        </p>

        <p>
          Unusually, while he has displayed discomfort with his own demonic side, only coming to
          accept it following the events of Devil May Cry 3: Dante's Awakening, Dante has little
          qualms about accepting demons that choose the side of good and admires their desire to be
          human, such as Trish and Bradley. Though Dante has been quoted as believing that "Humans
          are often worse than demons," in the anime, he refuses to kill full-blooded humans for any
          reason, believing it would make him no better than any Devil.
        </p>

        <p>
          In addition, Dante values family and friends very highly. He cared deeply for his mother
          and, despite their differences and conflicting ideals, for his brother, Vergil. Even after
          their intense duels and conflicts in Devil May Cry 3, Dante still tries to prevent Vergil
          from throwing himself off the edge of the Human World into the Demon World, and goes so
          far as to cry over losing him. While he says little about his father, Sparda, over the
          course of the series, Dante has been shown to clearly maintain a level of respect for, but
          for a time bitterly resented him due to his absence and inability to prevent Eva's death.
          While bitterly claiming that "[he doesn't] have a father" in his first fight with Vergil
          in 3, he eventually comes to accept that he is a son of Sparda and grows to respect him as
          the game goes on, proudly claiming in his final duel with his brother in the game that not
          only do they carry Sparda's blood but his soul as well. He also makes a humorous comment
          towards Arkham, as he smugly claims that his father wasn't as hideous as his twisted form,
          citing his own physical appearance as proof. He even shows a degree of paternal concern
          for his nephew, Nero in Devil May Cry 5, as was shown by his warnings of the dangers of
          facing Urizen again. Dante's concern for his nephew is further demonstrated by telling
          Nero the truth of their relationship and attempting to protect him from the darkness of
          killing his own father while displaying a great deal of familial bond with his brother's
          son.
        </p>

        <p>
          Dante also enjoys fighting, as is shown when he restrains himself from using his full
          potential but he is also quick to unleash his full power if his opponent proves to be
          sufficiently powerful. In Devil May Cry 4, he was clearly going easy on Nero in their
          first confrontation despite having seen his nephew in action, as he overpowered him in
          their second clash with only a mediocre amount of effort. In the anime, Dante gets bored
          with fighting weak opponents and only finds entertainment in fighting strong opponents who
          will give him a challenge. Dante's enjoyment of fighting was further emphasized in his
          pre-battle banter with Echidna, asking her if she agreed with him that "a fight every now
          and then makes life more interesting". After it is hinted that Vergil is still alive
          through Urizen, Dante at first sought to kill his brother thinking he was corrupted beyond
          salvation. However, after Urizen and V merged to be once again the Vergil he knew, they
          clashed again in a battle to the death until Nero stopped them with his newfound Devil
          Trigger. After entering the rubicon of the task of saving the world by entering the
          Underworld, Dante and Vergil decide to stay behind in order to finish the job,
          occasionally slaying demons and dueling each other. It is through this time that their
          sibling bond was somewhat rekindled, with both brothers enjoying the battles and banter.
        </p>

        <p>
          Despite Dante's handsome appearance, he often has terrible luck with women, a condition he
          ironically reflects upon in Devil May Cry 3 when Lady shoots him through the head after he
          attempts to keep her from falling.
        </p>

        <p>
          In the animated series, Dante was shown to be one of the few characters in the Devil May
          Cry series to swear. Dante was frequently shown to be foul-mouthed, repeatedly swearing in
          almost every episode. Although this attitude wasn't present in the games, in Devil May Cry
          5, he is shown using coarse language when angered, which is noticeable in his final
          battles against Urizen/Vergil.
        </p>

        <p>
          Despite verbally complaining about being in debt, Dante seems quite willing to perform
          missions solely for the good of them, and rarely, if ever, enforces payment from poor
          clients. In fact, Dante will typically refuse any job he dislikes, regardless of how much
          it pays, but will immediately take on any paranormal cases, especially those involving
          demon hunting, with or without pay. Many of his clients take advantage of his hospitable
          nature, and leave bills for property damage caused during the mission instead of paying
          for his services. Interestingly, despite his claims of having low funds, Dante still
          manages to pool up enough money to purchase pricey luxuries for his office, such as a pool
          table, a jukebox, and several expensive pieces of musical equipment such as electric
          guitars.
        </p>

        <p>
          He often borrows from Lady, and often attempts to gamble to repay his debts to her and
          others. However, he has extremely bad luck with all forms of gambling, even with something
          as simple as a coin toss, and loses any game not involved with demon hunting. As a result,
          he is deep in debt to Lady, and is often left with no money at all after she takes her
          cut. However, in Devil May Cry 4, Lady actually pays him a small, single role of bills for
          his "assistance".
        </p>

        <p>
          While Dante is generally easygoing, he feels a immense of guilt for the tragedies that
          happen around him. As a form of atonement for the death of Grue, Dante regularly sends his
          surviving children money and pays Enzo a fee to hold his Devil Arms in his pawn shop,
          feeling responsible for having to cut off Enzo's arm.
        </p>

        <p>
          Dante has a fondness for pizza, usually with "everything" on it, and while he complains
          about olives, he always ends up with them on his pizza. In the animated series, he is also
          shown to favor strawberry sundaes as well, with it being pointed out on several occasions
          that those two foods are seemingly all he eats. He also has a fondness for alcohol,
          specifically whiskey.
        </p>

        <p>
          In spite of his carefree and cocky attitude another one of Dante's most strongest traits
          is his love for humanity. He dearly loves the world that he lives in and will go to
          extreme lengths to ensure its protection from demonic threats. Dante also believes that
          humans possess something that demons don't and that tears are a "gift only humans have."
        </p>

        <p>
          Dante also treasures certain things. He kept his signature Rebellion with him which was a
          keepsake passed down to him by his father and would continue to use the weapon up until it
          was destroyed by Urizen after their first fight and despite the sword being destroyed
          Dante would still keep the weapon with him and later transform it into the Devil Sword
          Dante. He would also stay loyal to using Ebony & Ivory as well in which he kept with him
          in every game of the series. Dante also treasures the memories of his family as well and
          would hold them in high regard. An example of this is when he keeps a portrait of his
          mother in his office.
        </p>
      </div>
    </section>

    <section id="itemThree" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Powers and Abilities</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        <p>
          Dante is a half-human and half-demon hybrid, born from the demon Sparda and his human
          wife, Eva. His father, Sparda, was reputed to be an immensely powerful demon, to the point
          that certain individuals (e.g. the Order of the Sword) worshipped him as a god. Despite
          being a half-demon, his demonic power level is still immensely powerful and as such he is
          able to overpower high level demons. Testaments to his power are the replication or
          surpassing of several of Sparda's legendary accomplishments, such as resealing Mundus and
          killing Argosax.
        </p>

        <section class="flex flex-col gap-y-5">
          <header class="flex flex-row gap-x-4">
            <span
              @click.prevent="itemSection = 'Section A'"
              class="p-2 transition-all ease-in cursor-pointer hover:border hover:bg-theme-400 hover:tracking-widest border-theme-100"
              >Powers</span
            >
            <span
              @click.prevent="itemSection = 'Section B'"
              class="p-2 transition-all ease-in cursor-pointer hover:border hover:bg-theme-400 hover:tracking-widest border-theme-100"
              >Abilities</span
            >
            <span
              @click.prevent="itemSection = 'Section C'"
              class="p-2 transition-all ease-in cursor-pointer hover:border hover:bg-theme-400 hover:tracking-widest border-theme-100"
              >Devil Trigger</span
            >
          </header>

          <main>
            <div class="p-5 border" v-if="itemSection == 'Section A'">
              <ul class="flex flex-col px-5 list-disc gap-y-3">
                <li>
                  <strong>Superhuman Strength:</strong> Dante possesses incredible raw bodily
                  strength even while in human form. He is able to easily throw around street thugs
                  and an obese prison warden. He is also able to easily snap handcuffs. He can
                  shatter stone with little difficulty, and often overpowers demons much larger and
                  more imposing than himself with ease. Dante also once easily blocked a punch from
                  Nero's Devil Bringer and even casually forced him back with enough force to
                  destroy a wall behind him and knocked down Nero with a single push to the back.
                  He's even strong enough to block The Savior's punch with Rebellion without showing
                  much strain. Dante's display of superhuman strength, endurance, and resistance to
                  injury shows that his physical condition is much tougher and more efficient than
                  that of even most of the powerful demons, allowing him to exert his supernaturally
                  enhanced muscle power to vast proportions without fear of injury or fatigue.
                </li>
                <li>
                  <strong>Superhuman Speed:</strong> Dante is superhumanly fast, and in some cases
                  appears to be teleporting. During his younger years, was capable of swinging his
                  sword so fast that rain drops cannot escape his blade over a wide area. Also while
                  Dante was running down the side of Temi-Ni-Gru, he shot Rebellion, causing it to
                  fall so quickly it began superheating the air around it, then he chased his sword
                  fast enough to catch up to it and eventually reaching a speed great enough that
                  the air around his hand became superheated as well. Dante's reflexes are fast
                  enough that he can dodge bullets, slice them, shoot them out of the air, and even
                  catch them with his teeth.
                </li>
                <li>
                  <strong>Superhuman Agility:</strong> Dante is extremely agile as well; able to
                  jump to great heights or even balance himself on a flying rocket, as well as run
                  up vertical walls. In addition, his agility allows him to perform amazing feats of
                  acrobatics that easily surpass even the finest human acrobat.
                </li>
                <li>
                  <strong>Superhuman Stamina:</strong> Despite some of the physically punishing
                  things Dante has gone through, he has the ability to move forward with little
                  difficulty. Even while impaled with Hell Pride's scythes lodged in his torso and
                  arms, he casually walks about his office. He often went on hours long missions
                  with constant fighting, no rest, food, or water and shows no fatigue. However, his
                  endurance does have its limits, a fact that was taken advantage of by Arkham.
                </li>
                <li>
                  <strong>Superhuman Durability:</strong> Dante's durability has been shown to allow
                  him to simply shrug off wounds that would either disable or outright kill a normal
                  demon, such as being impaled through the chest with his own sword. He was also
                  punched by Beowulf so hard that his body made an imprint in the stone ground, but
                  Dante showed no signs of injury. His teeth are also strong enough to catch
                  bullets. He is capable of withstanding Hellfire and lightning strikes with no
                  signs of injury. He was even capable of withstanding impale-like attack from Sid
                  empowered by Abigail with no response of pain.
                </li>
                <li>
                  <strong>Accelerated Healing:</strong> Dante can rapidly heal even serious wounds;
                  even the Hell Prides were surprised when he ignored their attacks. Combined with
                  his great resilience, Dante's healing factor makes him nearly unkillable.
                </li>
                <li>
                  <strong>Demonic Power Manipulation:</strong> Dante is able to channel his demonic
                  energies into various physical objects, ranging from his guns to the air itself.
                </li>
                <li>
                  <strong>Telekinesis:</strong> Dante demonstrates telekinetic abilities, stopping
                  Trish's motorcycle in mid-air before shooting it with Ebony and Ivory. He also
                  appeared to show telekinetic abilities in the anime, shown when he splayed his
                  hand and Rebellion smashed through the ceiling window before landing in his hand,
                  although this could also be related to Dante's metaphysical connection to the
                  sword.
                </li>
              </ul>
            </div>
            <div class="p-5 border" v-else-if="itemSection == 'Section B'">
              <ul class="flex flex-col px-5 list-disc gap-y-3">
                <li>
                  <strong>Skilled Hand-to-Hand Combatant:</strong> While using gauntlet weapons,
                  Dante has been shown to be highly proficient at hand-to-hand combat, using various
                  martial arts techniques, including Bruce Lee's one-inch punch. He is also capable
                  of defeating lesser demons completely unarmed with little difficulty. In his
                  second fight with Nero, Dante outclassed his nephew with solely hand-to-hand
                  combat upon being disarmed, soundly knocking him down and taking Yamato from him.
                </li>
                <li>
                  <strong>Weapon Proficiency:</strong> Dante is proficient with a variety of
                  weapons, including swords, scythes, gauntlets, and even unorthodox supernatural
                  weapons. He displays an impressive ability to judge the capabilities of weapons
                  almost as soon as he picks them up.
                </li>
                <li>
                  <strong>Swordsmanship:</strong> As Dante's primary fighting style, he is
                  incredibly skilled with various types of swords including broadswords, katanas,
                  and scimitars.
                </li>
                <li>
                  <strong>Marksmanship:</strong> Although he is aided by his superhuman precision in
                  gunfights, Dante has an innate mastery of any firearm he comes in contact with. He
                  is capable of shooting Ebony and Ivory in two different directions at once, and
                  can aim with such accuracy that his bullets stack on the hilt of Yamato.
                </li>
                <li>
                  <strong>Keen Intellect:</strong> An often overlooked aspect about Dante's
                  abilities is his analytical skills. He showcases these skills in the form of a
                  talent for reading people; he accurately assessed that the seemingly gentle Modeus
                  was interested in killing him for his soul, and that Modeus was going to try to
                  take revenge against him for killing Baul. He's also easily deduced and figured
                  out the Familiars' intentions to atone during Mission 18 of Devil May Cry 5. His
                  knowledge about demons and demon world, as well as his work as a private
                  investigator put his intelligence to be above average. He's also a combat genius,
                  comes up with various tricks and cunning fighting styles to destroy his enemies.
                  As described by the alternate universe version of Shadow, Dante has a sharp mind,
                  able to instantly understand the true extent of Mundus' generals' power in the
                  alternate universe and that they got enough power to form an independent
                  government to oppose the Demon King. He also displayed a great knowledge about
                  magic, as he easily figured out the magic used by the alternate Trish.
                </li>
                <li>
                  <strong>Musical Aptitude:</strong> While using Nevan, Dante performs a more
                  hardcore version of the first three verses of "Taste The Blood". He also has a
                  guitar and drumset in his office.
                </li>
              </ul>
            </div>
            <div class="flex flex-col p-5 border gap-y-3" v-else-if="itemSection == 'Section C'">
              <p>
                Due to his half-demon physiology, Dante can release his demonic power through his
                Devil Trigger. This allows him to shift from his human guise to his demonic visage.
                Not being purely cosmetic, Dante's already superior physical capabilities are
                amplified significantly and this form grants him the ability to fly.
              </p>

              <p>
                The appearance of this form varies throughout the games — in Devil May Cry and Devil
                May Cry 3, the form is influenced by which Devil Arm he carries, while in Devil May
                Cry 2 and Devil May Cry 4 he has a pair of Devil Forms believed to be his "true"
                Devil form. These abilities could be chosen in Devil May Cry 2 by selecting the
                different pieces in the Amulet together. In Devil May Cry 5, Dante gains access to a
                new form called Sin Devil Trigger after stabbing himself with Rebellion and
                absorbing the Devil Sword Sparda.
              </p>
            </div>
            <div class="p-5 border" v-else>Error Occured</div>
          </main>
        </section>
      </div>
    </section>

    <section id="itemFour" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Equipment</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        <span>Though Dante has an extensive collection of weapons, he most commonly carries:</span>

        <ul class="pl-5 list-disc">
          <li>Rebellion: A keepsake sword from his father and a manifestation of his power.</li>
          <li>Ebony & Ivory: Dante's twin handguns, custom-built for rapid-fire.</li>
          <li>
            Force Edge/Devil Sword Sparda: Dante temporarily replaced Rebellion as his main sword
            from the end of the events of Devil May Cry 3 until giving it to Trish at the end of
            Devil May Cry.
          </li>
          <li>
            Devil Sword Dante: A blade born when Dante absorbed the Rebellion and the Sparda into
            his body. The weapon carries both his name and his will.
          </li>
        </ul>

        <p>
          He has also used a shotgun in every title in the series, though its exact form changes
          throughout the games. Over the course of the first four games, Dante has collected a wide
          variety of weapons in addition to his regular arsenal, ranging from a quite literal
          electric guitar and several pairs of gauntlets/greaves to twin rocket launchers and a
          shape-changing, demonic briefcase. He keeps many weapons and trophies displayed within his
          office, so it is likely that he keeps old weapons there as well.
        </p>
      </div>
    </section>

    <section id="itemFive" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Gameplay</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        <div class="flex flex-col">
          <em>Devil May Cry</em>
          <div class="flex flex-col my-2">
            <span>Devil Arms: Force Edge, Alastor, Ifrit, Sparda</span>
            <span>Guns: Ebony & Ivory, Shotgun, Grenadegun, Needlegun, Nightmare-β</span>
            <span>Bangle of Time</span>
            <span>Devil Trigger</span>
          </div>
        </div>
        <div>
          <em>Devil May Cry 2</em>
          <div class="flex flex-col my-2">
            <span>Swords: Rebellion, Vendetta, Merciless, Force Edge</span>
            <span>Guns: Ebony & Ivory, Shotgun, Missile Launcher, Submachine Guns</span>
            <span>Devil Trigger (Devil Hearts), Ultimate Devil Trigger</span>
          </div>
        </div>
        <div>
          <em>Devil May Cry 3</em>
          <div class="flex flex-col my-2">
            <span>Devil Arms: Rebellion, Cerberus, Agni & Rudra, Nevan, Beowulf</span>
            <span>Guns: Ebony & Ivory, Shotgun, Artemis, Spiral, Kalina Ann</span>
            <span
              >Styles: Trickster, Swordmaster, Gunslinger, Royalguard, Quicksilver,
              Doppelganger</span
            >
            <span>Devil Trigger</span>
          </div>
        </div>
        <div>
          <em>Devil May Cry 4</em>
          <div class="flex flex-col my-2">
            <span>Swords: Rebellion, Gilgamesh, Lucifer, Yamato</span>
            <span>Guns: Ebony & Ivory, Coyote-A, Pandora</span>
            <span>Styles: Trickster, Swordmaster, Gunslinger, Royalguard, Dark Slayer</span>
            <span>Devil Trigger</span>
          </div>
        </div>
        <div>
          <em>Devil May Cry 5</em>
          <div class="flex flex-col my-2">
            <span
              >Swords: Rebellion, Balrog, Devil Sword Sparda, Cavaliere, Devil Sword Dante, King
              Cerberus</span
            >
            <span>Guns: Ebony & Ivory, Coyote-A, Kalina Ann (II, Double), Dr. Faust</span>
            <span>Styles: Trickster, Swordmaster, Gunslinger, Royalguard</span>
            <span>Devil Trigger, Sin Devil Trigger</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.glitch-transform {
  position: relative;
  animation: shift 4s ease-in-out infinite alternate;
  transform: skewX(0deg);
  z-index: 1;
}

@keyframes shift {
  0%,
  40%,
  44%,
  58%,
  61%,
  65%,
  69%,
  73%,
  100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg);
  }

  60% {
    transform: skewX(-40deg);
  }

  63% {
    transform: skewX(10deg);
  }

  70% {
    transform: skewX(-50deg);
  }

  71% {
    transform: skewX(10deg);
  }
}

.list {
  padding: 2px 0px 2px 0px;
}

.list::before {
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  bottom: 0;
  left: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.list:hover::before {
  transform-origin: left;
  transform: scaleX(1.1);
}
</style>
