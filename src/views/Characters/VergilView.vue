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
            :class="toggleStore.openList ? 'translate-y-0' : '-translate-y-72'"
          >
            <ol class="px-5 list-decimal">
              <li
                v-for="item in listItems"
                :key="item.id"
                v-scroll-to="'#' + item.id"
                class="relative cursor-pointer list before:bg-slate-200 hover:text-slate-400"
              >
                <span>
                  {{ item.name }}
                </span>
              </li>
            </ol>
          </div>
        </div>

        <div class="flex flex-col mt-5 gap-y-2">
          <p>
            Vergil is the older twin brother of Dante and one of the main antagonists of the Devil
            May Cry franchise. Following the death of their mother as children, Vergil and Dante
            went their separate ways, with Vergil rejecting his humanity and embracing his demonic
            heritage, in contrast with his younger brother's embrace of humanity and initial
            rejection of the demonic. Stoic and reserved, Vergil displays a willingness to do
            anything in his quest to obtain the power of his father, Sparda.
          </p>

          <p>
            Suffering defeat in confrontation with Mundus in the secret ending to Devil May Cry 3,
            he is tortured and transformed into the Black Knight - being encountered in Devil May
            Cry under the name Nelo Angelo. After numerous conflicts throughout the game, he is
            finally defeated by Dante.
          </p>

          <p>
            In Devil May Cry 5, years after his last encounter with Dante as Nelo Angelo, Vergil is
            now free from Mundus' control, but has become very weakened as a result. As the hooded
            figure who took back Yamato while ripping the Devil Bringer from his son Nero in the
            process, Vergil is the true main antagonist of the game after both the newcomer V and
            Urizen merge back together as himself, with both revealed to be his human and demonic
            halves.
          </p>
        </div>
      </div>

      <div class="flex flex-col w-1/4">
        <div class="text-center">
          <h4 class="text-base glitch" data-glitch="Vergil">Vergil</h4>
          <div class="py-0.5 bg-gradient-to-r from-[#101217] via-theme-100 to-[#101217]"></div>
        </div>

        <div class="flex justify-center w-full h-full">
          <img class="w-[17rem]" src="@/assets/images/characters/vergil/vergil.webp" alt="Vergil" />
        </div>
      </div>
    </section>

    <section id="itemOne" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Appearance</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        <p>
          In terms of physical appearance, Vergil has fair, yet pale skin, and white, swept back
          hair, which puts emphasis on the fierce, yet stoic expression on his face; however, when
          his hair is brushed down or becomes wet, his appearance is physically indistinguishable
          from his younger twin brother, Dante. Just like his brother, he also has the same, blue
          eyes.
        </p>

        <p>
          In terms of apparel, Vergil commonly wears a long, silver buttoned blue coat with three
          separated coattails. A white, serpentine pattern runs around the collar, with a snakes
          head hanging over the coat's left shoulder, and its tail slinking down the right, all the
          way to the bottom of the coat. A gold lining runs across the edges of the coat, and a
          silky, golden flower blossom pattern decorates the inner lining. Each cuff of the coat
          also possesses five, gold buttoned straps with gold lining; in Devil May Cry 4: Special
          Edition, the coat also features identical straps on each shoulder, decorated with silver
          buttons instead of gold. Before facing the demons, Vergil wore a long brown hooded cloak
          where he conceals his main outfit.
        </p>

        <p>
          Underneath the coat, Vergil wears a navy blue ascot wrapped around his neck, which hangs
          over a black, sleeveless vest that reveals his well-toned arms and shoulders. He wears
          tan, fingerless gloves, a brown, snakeskin belt with a silver buckle, dark green pants
          with a scale pattern running across its surface, and tall, brown boots with two golden
          buckled straps at the top.
        </p>

        <p>
          During certain in-game cutscenes in Devil May Cry 3, Vergil's golden half of the Perfect
          Amulet can be seen around his neck, yet it is not a permanent part of his character model.
        </p>

        <p>
          As Corrupt Vergil, Vergil's appearance becomes much more sinister; his skin takes on a
          sickly, almost grey pallor with blue, pulsating veins running across his face. His eyes
          become a deep red, with black pupils. In addition, he now wears his father's clothing
          instead of his own, with his half of the Perfect Amulet replacing Dante's half as its
          brooch. In Devil May Cry 4, his outfit is slightly modified to his coat split into three
          coattails similar to his old outfit.
        </p>

        <p>
          While serving as Nelo Angelo's base, Vergil has completely white skin tone, with blue
          veins and red, pupil-less eyes.
        </p>

        <p>
          In Devil May Cry 5, Vergil looks nearly identical to his younger self from the third game,
          but is older in appearance due to the passage of time. His coat is now black with light
          neon blue serpentine patterns and three separated coattails with slightly tattered edges.
          Vergil is no longer wearing an ascot tie as he was seen wearing a black sleeveless
          zippered-turtleneck beneath his midnight blue formal vest. He also wears charcoal gray
          fingerless gloves, black pants and dark boots covered by teal gaiters.
        </p>

        <p>
          When he initially appears in his weakened state and severs Nero's Devil Bringer to regain
          Yamato in order to separate his human and demon halves, creating V and Urizen in the
          process, Vergil wore a tattered long black hooded cloak to cover his outfit, and half of
          his face was shown to be pale white with blue veins, retaining these features even after
          his defeat from Dante as Nelo Angelo and being freed from Mundus' corruption, however when
          V and Urizen reunite to bring Vergil back his skin returns to normal.
        </p>
      </div>
    </section>

    <section id="itemTwo" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Personality</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        <p>
          In contrast to his twin brother Dante's boisterous, outgoing, and extroverted personality,
          Vergil is calm, cool, collected, and introverted, constantly maintaining an aura of
          fearlessness. Vergil cares little for the well-being of those around him, and is
          unflinching in his pursuit of power; however, in spite of his cold and ruthless demeanor,
          he is an honorable warrior who maintains his own set of morals and disciplines. Vergil
          despises fighting dirty and refuses to use firearms, deeming them to be unworthy of a
          "true warrior", though he will still use ranged attacks if they can be made to originate
          from a melee weapon. His code of honor still surfaces while he is corrupted as Nelo
          Angelo: he refuses to attack Dante from behind and waits until both are outside to begin
          their first fight. In Devil May Cry 5, after he was restored and then attacked by Dante,
          he noted that his brother was weak and wounded from his fight with Urizen. As such,
          despite having been able to easily kill Dante, Vergil allowed him to rest and recover,
          stating that defeating Dante while weakened had no meaning. He also has a tendency to
          speak in a very formal and somewhat antiquated manner, possibly as a consequence of
          reading a great deal of classic literature in his younger years. It should be noted
          however that his "code" is more based upon proving his dominance than any sort of
          underlying morality. As such he is perfectly willing to utilize methods or tactics that
          may be dishonorable for the sake of becoming stronger, or in situations where he simply
          has no other choice. For instance, when he tore off Nero's devil bringer arm to retrieve
          Yamato, he essentially ambushed Nero while his back was turned. However, as he was dying
          at the time, he likely lacked the time or energy to engage in a full-on battle with an
          opponent of Nero's caliber.
        </p>

        <p>
          Unlike Dante, Vergil is willing to embrace his demonic heritage, and seeks to emulate his
          father's power and cold persona. While Dante seeks to protect humanity from the demons,
          the only thing which Vergil seeks in life is even greater demonic power. His desire for
          power is an almost character defining obsession for him, and almost certainly stems from
          having not only lost his family as a child, but from being on his own from the day of his
          family's destruction on. Despite his normal personality of cold dismissal, he does cherish
          certain things - the Devil-blade Yamato, a dark katana left to him as a keepsake by his
          father, his own half of the Perfect Amulet, a keepsake from his mother and, after his own
          realization, his own son Nero. In Devil May Cry 3, Vergil seems to reveal some of his
          feelings by claiming to Dante: "Might controls everything, and without strength you cannot
          protect anything, let alone yourself.". This may be a reference to their mother's death.
          It may also imply that Vergil seeks power as compensation for failing to protect her. His
          failure may also have made him forsake close human relationships, due to his perceived
          fragility of humanity. He appeared also to link the acquisition of power to loss or
          sacrifice, complaining as Urizen to Dante during their final battle that Dante should not
          be as powerful as he is due to having "never lost anything."
        </p>

        <p>
          V is the human side of Vergil, and he is able to see his past without the coldness and
          uncaring eyes of Vergil himself. This is his human manifestation that he has kept
          suppressed all his life to attain his goals of power. V describes Vergil as "One who lost
          everything", and that the defeats he suffered only caused him to sink lower. Ashamed of
          his actions, V realized the gravity of crimes he committed and how important the things he
          threw away in the endless pursuit of power really were, such as his humanity and younger
          brother. V explained to Nero that "he", meaning Vergil, only wanted to be protected and
          loved, but since he was alone his only option was to survive.
        </p>

        <p>
          V mentioned that he originally went to Dante in the hope that he could right the wrong
          that Vergil created with the birth of Urizen and all the past horrors he had caused during
          his lifetime. The legitimacy of V's actions and words comes into question when he reveals
          in his final moments that he had manipulated Dante and Nero in order to remerge with
          Urizen, due to his fear of dying and being without power. However, either intentionally or
          not, he also achieved what he mentioned: stopping Urizen's invasion and making Vergil a
          better person. After Urizen's reintegration with V, Vergil was seen to question his
          choices as he stood atop the Qliphoth, wondering aloud if his fate might have been
          different if he had experienced Dante's life. He was also willing to leave his book of
          poems to Nero, and implied that he would be back for it at some point. His interactions
          with Dante in Hell after destroying the Qliphoth were also significantly less antagonistic
          than ever previously seen, with the two of them working in tandem to kill a demon horde
          and sparring rather than genuinely trying to kill each other.
        </p>

        <p>
          Vergil is very strong-willed, capable of fighting off Mundus' control for a time and upon
          seeing Dante's Amulet, causes Nelo Angelo mental anguish.
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
          Like his brother Dante, Vergil possesses the blood of Sparda in his veins. This makes him
          extremely powerful and due to how he had fully awakened his powers, Vergil was able to
          easily defeat Dante in their first confrontation in Devil May Cry 3 and then go toe-to-toe
          with Dante in their second confrontation after Dante had grown considerably stronger in
          his own right. However, although not going down without a challenge, Vergil was ultimately
          defeated by his brother in their final altercation. After Vergil's restoration (Prior to
          that his demon half Urizen becoming far more powerful thanks to the Qliphoth fruit) he was
          once again able to fight on even terms with Dante.
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
              >Arsenal</span
            >
          </header>

          <main>
            <div class="p-5 border" v-if="itemSection == 'Section A'">
              <ul class="flex flex-col px-5 list-disc gap-y-3">
                <li>
                  <strong>Superhuman Strength:</strong> Due to his demonic heritage, Vergil has
                  inhuman amounts of physical strength. So much so that he incorporates strikes with
                  Yamato's sheath in combat and can throw it with enough force to pierce a
                  scarecrow. Vergil is also strong enough to palm strike Rebellion through Arkham
                  powered by the Sword of Sparda. He can effortlessly overpower much larger demons.
                  Indeed, Vergil was even able to overpower Dante in a sword lock when Dante was not
                  at his full awakened state easily and could match him after he had gotten
                  considerably more powerful in his own right. After his time as Urizen and
                  accepting his human side, Vergil has come to be Dante's match once again,
                  constantly parrying his sword swings and holding Dante's blade back. Even after
                  being drastically weakened, he was able to rip off Nero's Devil Bringer with ease.
                </li>
                <li>
                  <strong>Superhuman Speed:</strong> When wielding Yamato, combined with his
                  prodigious swordsmanship, Vergil can cut and slash at speeds faster than the eye
                  can see. He is quick enough to draw multiple slashes in one draw, to stop
                  raindrops from hitting the ground in a heavy downpour, and swings Yamato fast
                  enough that he can catch bullets and even launch them. Vergil is easily capable of
                  outpacing Dante in his suppressed state and keeping up with him in all their
                  subsequent fights.
                </li>
                <li>
                  <strong>Superhuman Agility:</strong> Vergil can perform jumps much higher than a
                  normal human and perform a variety of flips and spins while doing so.
                </li>
                <li>
                  <strong>Superhuman Stamina:</strong> Despite taking a large amount of damage and
                  large amounts of physical strain, Vergil is shown to be able to continue fighting
                  and only needs a few moments of rest to move about again without strain. By Devil
                  May Cry 5 Vergil's stamina is great enough to the point he was able to fight Dante
                  continuously for weeks while they were trapped in the Demon World.
                </li>
                <li>
                  <strong>Superhuman Durability:</strong> Vergil is capable of taking brute force
                  attacks without showing signs of damage.
                </li>
                <li>
                  <strong>Accelerated Healing:</strong> Due to his demonic heritage, Vergil can heal
                  instantly as soon as whatever is injuring him has been removed from his body. It
                  is strong enough that he came out unscathed from a strike from Rebellion that
                  would have otherwise bisected him. This healing factor is extremely strong; even
                  when Vergil is physically exhausted, his healing powers work at almost full
                  strength. After his return to the human world, Vergil's body was breaking down due
                  to unknown causes.
                </li>
                <li>
                  <strong>Demonic Power Manipulation:</strong> Vergil is able to imbue his demonic
                  power into objects to augment them. He mostly uses his demonic power to create
                  weapons that can be used for various purposes. Since reuniting his human and demon
                  halves, Vergil is able to create a doppelganger of himself to aid him in the
                  battle against his opponent.
                </li>
                <li>
                  <strong>Teleportation:</strong> Vergil has advanced teleportation abilities that
                  he uses to strategically reposition himself around the battlefield. He is noted to
                  be more skilled with teleportation than Dante, as he uses it far more frequently
                  and sometimes with the aid of Yamato.
                </li>
                <li>
                  <strong>Force Field Generation:</strong> Vergil can project a purple, spherical
                  shield, made of demonic energy, around his body, whilst preparing his Devil
                  Trigger. Although it only seems to last for a few seconds, the shield is strong
                  enough to protect him from every manner of attack. The shield can also generate a
                  repulsion field that prevents enemies from getting close. Vergil can control this
                  repulsion field, disabling it when conjuring a set of Spiral Swords, which will
                  harm nearby enemies.
                </li>
                <li>
                  <strong>Devil Trigger:</strong> Vergil can unleash his demonic side to
                  significantly enhance all of his powers and abilities. When he jumps during this
                  state, wings sprout out, however he cannot glide or fly with them.
                </li>
                <li>
                  <strong>Sin Devil Trigger:</strong> In Devil May Cry 5, Vergil obtains Sin Devil
                  Trigger, it allows him to fly with new wings while retaining his regeneration
                  ability and further enhancing his power.
                </li>
                <li>
                  <strong>Doppelganger:</strong> In Devil May Cry 5: Special Edition, Vergil can
                  create a phantom doppelganger of himself.
                </li>
                <li>
                  <strong>World of V:</strong> In Devil May Cry 5: Special Edition, Vergil can use
                  Yamato to summon V & the Familiars for a short time.
                </li>
              </ul>
            </div>
            <div class="p-5 border" v-else-if="itemSection == 'Section B'">
              <ul class="flex flex-col px-5 list-disc gap-y-3">
                <li>
                  <strong>Hand-to-Hand Combatant:</strong> Though Vergil has never been shown in
                  unarmed combat, he has shown excellent hand-to-hand combat with Beowulf. He uses a
                  variety of punches and roundhouse kicks.
                </li>
                <li>
                  <strong>Weapon Proficiency:</strong> Much like Dante, Vergil can quickly grasp the
                  fundamentals of whatever weapon he picks up. He showed immense skill with Beowulf
                  and Force Edge shortly after obtaining them.
                </li>
                <li>
                  <strong>Swordsmanship:</strong> Vergil is a dangerous master swordsman wielding
                  the Yamato with unrivaled precision and versatility; his technique is based on
                  Iaijutsu, a style of samurai swordsmanship which involves quick, precise draws
                  from the sheathe, striking the opponent, and removing blood from the sword before
                  resheathing. His Iaijutsu is made more powerful by incorporating his own demonic
                  powers, developing a personalized style called the Dark Slayer. When Yamato is
                  still unsheathed, Vergil also often uses the scabbard itself as a weapon, using it
                  for blunt strikes, or to block an enemy's attack. Due to this style, Vergil
                  commonly wields Yamato with one hand, holding the scabbard with the other.
                  However, when necessary he sometimes puts the scabbard away and uses both hands
                  with Yamato. In Devil Trigger, the scabbard becomes a part of his left hand and
                  can adjust the position at will, allowing him to freely wield the blade with both
                  hands while still performing his iaijutsu techniques. After obtaining Force Edge,
                  Vergil was immediately able to fight in a style almost identical to Dante's.
                  During his short time using Rebellion, he shows competent use of it. His overall
                  skill in swordsmanship is shown to be great enough to easily rival his brother,
                  and even at times overpower him. On lesser foes, the speed, precision, and
                  discipline bestowed to him allows him to outpace and utterly them cut down as if
                  akin to an artform; with great concentration in only splits of a second and
                  issuing a number of blows at his discretion, one of Vergil's signature traits is
                  to time his victim's demise, and sheathe in sync with the damage done, resulting
                  in a display of destruction that slays the opposition before they could even
                  realize it.
                </li>
                <li>
                  <strong>Master Marksmanship:</strong> Despite Vergil's dislike of firearms, he is
                  still able to fire his Mirage Blades with great precision.
                </li>
                <li>
                  <strong>Mirage Blades:</strong> Spectral swords created by Vergil's demonic power.
                  He usually fires one at a time, but by expending Devil Trigger, he can summon
                  multiple swords that he can arrange in various formations such as a shield that
                  rotates around him or to float behind him until he decides to launch them all
                  rapid-fire.
                </li>
              </ul>
            </div>
            <div class="flex flex-col p-5 border gap-y-3" v-else-if="itemSection == 'Section C'">
              <ul class="flex flex-col px-5 list-disc gap-y-3">
                <li>
                  <strong>Yamato:</strong> A keepsake katana given to him by his father. It is
                  forged by darkness and capable of cutting through dimensions. It serves as the
                  source of his powers.
                </li>
                <li>
                  <strong>Beowulf:</strong> A set of gauntlets and greaves with the power of light.
                  This has become a staple weapon of Vergil's gameplay.
                </li>
                <li>
                  <strong>Force Edge:</strong> For a short time, Vergil wielded the dormant form of
                  the sword of Sparda. This has become a staple weapon of Vergil's gameplay, as it
                  was later replaced with Mirage Edge in Devil May Cry 5: Special Edition.
                </li>
                <li>
                  <strong>Mirage Edge:</strong> An illusionary replacement for Force Edge based on
                  his Mirage Blades, after Dante infused it as Sparda with the broken Rebellion.
                  This has become a staple weapon of Vergil's gameplay.
                </li>
              </ul>
            </div>
            <div class="p-5 border" v-else>Error Occured</div>
          </main>
        </section>
      </div>
    </section>

    <section id="itemFour" class="flex flex-col mt-5 gap-y-4">
      <div class="text-start">
        <h4 class="text-lg font-semibold">Gameplay</h4>
        <div class="py-0.5 bg-gradient-to-r from-theme-100 to-[#101217]"></div>
      </div>

      <div class="flex flex-col justify-start w-full h-full gap-y-3">
        <div class="flex flex-col my-2">
          <em>Devil May Cry 3: Special Edition</em>
          <p>
            In Devil May Cry 3: Special Edition, players may play on a separate file as Vergil.
            Vergil's scenario has a new prologue, but all other cutscenes were removed. Also, while
            the Vergil boss fights are still fought, the boss wears red instead of blue so that the
            player can see the difference.
          </p>
          <p>
            Vergil possesses his Devil Trigger and all three of his Devil Arms (Yamato, Beowulf, and
            Force Edge) from the beginning of his scenario. His signature Dark Slayer Style behaves
            somewhat like an upgraded Trickster Style, allowing to quickly move on the battlefield
            and ambush enemies. It must also be leveled in order to allow purchase of higher level
            actions for Vergil's weapons. Vergil also cannot obtain as many actions per weapon as
            Dante can, and uses his Summoned Swords instead of firearms.
          </p>
          <p>
            Vergil's Yamato is a faster weapon than Dante's Rebellion, but has weaker power and
            range. Yamato can be compared to Agni & Rudra in its role, although it has completely
            different moveset. Vergil's Beowulf cannot charge attacks like Dante's, but overall is
            more powerful. Vergil can also use Yamato and Force Edge together, and his actions with
            the pair of swords resembles Dante with the Rebellion. Finally, while firing his
            Summoned Swords cannot propel Vergil like Ebony & Ivory can propel Dante, they can still
            juggle enemies, can be used without interrupting other actions, and can be used both to
            guard himself or to surround the enemy.
          </p>
          <p>
            Vergil's Yamato is a faster weapon than Dante's Rebellion, but has weaker power and
            range. Yamato can be compared to Agni & Rudra in its role, although it has completely
            different moveset. Vergil's Beowulf cannot charge attacks like Dante's, but overall is
            more powerful. Vergil can also use Yamato and Force Edge together, and his actions with
            the pair of swords resembles Dante with the Rebellion. Finally, while firing his
            Summoned Swords cannot propel Vergil like Ebony & Ivory can propel Dante, they can still
            juggle enemies, can be used without interrupting other actions, and can be used both to
            guard himself or to surround the enemy.
          </p>
          <p>
            Instead of Dante's "Legendary Dark Knight Dante" and "Super Legendary Dark Knight Dante"
            costumes which allow him to assume Sparda Devil Trigger, Vergil possesses the "Corrupt
            Vergil" and "Super Corrupt Vergil" costumes which allow to become Nelo Angelo via Devil
            Trigger. As Nelo Angelo, Vergil becomes noticeably stronger than Dante in their first
            encounter and his entire moveset changes to that of that one he possessed in the first
            game. His armor and zweihänder serve as his weapons, represented by Beowulf and Yamato
            on the weapon wheel respectively and recognized as such by Combat statues. He attacks
            with slow but strong sword slashes, punches and kicks that generate an azure-colored
            flame. He can also charge up to fire explosive azure blasts of energy with either
            weapon. Nelo Angelo still retains Vergil's Air Trick, but comes in the form of vanishing
            in a blaze of azure flame instead of a blur. The powerful armor gives him higher
            resistance to flinching.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.glitch {
  position: relative;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #5900ff;
  z-index: -2;
}

@keyframes glitch-color {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
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
