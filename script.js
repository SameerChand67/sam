const QUOTES = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect when it comes to typing.",
  "Under a bright morning sky, the small village came alive with the sounds of roosters crowing, children laughing on their way to school, and shopkeepers arranging colorful displays of fruit, bread, and spices for curious passersby to enjoy.",
  "Despite the heavy rain falling outside, the cozy café was filled with warmth and chatter, as friends sipped steaming cups of coffee, flipped through books, and exchanged stories about travels to distant, exotic places they longed to revisit.",
"The old library smelled faintly of paper and history, its tall shelves stacked with weathered books whose pages whispered forgotten tales, while shafts of sunlight streamed through stained-glass windows, casting rainbow patterns across the polished wooden floors.",
"A gentle breeze rustled through the tall grass, carrying the scent of wildflowers and the faint hum of bees, as a narrow dirt path wound toward the horizon where mountains met the soft blush of the evening sky.",
"On the quiet shore, waves lapped steadily against the sand, leaving behind tiny shells and bits of seaweed, while gulls circled lazily overhead and the salty air clung to the skin like a comforting reminder of the ocean’s presence.",
"Through the bustling marketplace, merchants called out their prices in cheerful tones, offering fresh vegetables, handcrafted jewelry, and fragrant spices, while children darted between stalls, chasing each other and laughing beneath strings of colorful paper lanterns swaying in the breeze.",
"As the train rumbled steadily across the countryside, golden fields stretched endlessly toward the horizon, dotted with grazing cattle and clusters of wildflowers, while the passengers inside quietly read books, sipped tea, and gazed out at the passing scenery.",
"In the heart of the forest, sunlight streamed through the canopy in shifting patterns, illuminating patches of moss and tiny mushrooms, while the distant sound of a flowing stream mingled with the occasional rustle of animals moving through the undergrowth.",
"The painter stood before his canvas, dabbing vibrant colors onto the surface, capturing the soft light of dawn on the water’s edge, while a gentle mist clung to the riverbank and birds began their first tentative songs of the day.",
"Beneath the star-speckled sky, a small campfire crackled, casting a warm glow on the faces gathered around it, as stories were told, marshmallows toasted, and the distant howl of a lone wolf echoed softly through the still night air.",
"The city streets glistened under the fading rain, neon lights reflecting in puddles, as people hurried along with umbrellas in hand, weaving through the crowd in search of warm cafés, late-night dinners, or simply shelter from the lingering drizzle.",
"High in the mountains, the crisp air carried the scent of pine and snow, while distant peaks stood like silent guardians, their jagged edges glowing faintly in the golden light of a sun slowly sinking behind the horizon.",
"A cat lounged lazily on the windowsill, its tail flicking rhythmically as it watched raindrops race down the glass, occasionally glancing at the flickering fireplace where the scent of freshly baked bread filled the warm, inviting living room.",
"In the narrow alleyway, a street musician played a haunting melody on his violin, each note echoing softly between the brick walls, while curious onlookers paused to listen, their faces lit by the soft glow of a nearby lamppost.",
"The classroom buzzed with quiet chatter as students unpacked their books, sharpened pencils, and exchanged whispered jokes, while sunlight streamed through the tall windows, catching dust particles that floated lazily in the still, warm air of the early afternoon.",
"The ocean waves rolled steadily toward the shore, each one breaking into white foam that shimmered in the sunlight, while seabirds dipped low over the water, calling out in sharp cries that echoed across the endless blue horizon.",
"At the old train station, the scent of oil and steel lingered in the air, while conductors called out destinations, luggage carts rattled across the platform, and travelers clutched tickets tightly in anticipation of the long journeys ahead.",
"The farmer rose before dawn, pulling on worn boots and a faded coat, stepping out into the chilly morning to feed the animals, check the fences, and watch the sunrise spill gold across the rolling fields.",
"Children played in the park, their laughter mingling with the hum of cicadas, as swings creaked, kites danced high above the trees, and the scent of freshly cut grass drifted lazily on the warm summer breeze.",
"In the candlelit room, shadows flickered across the walls, highlighting stacks of dusty books, an open journal filled with looping handwriting, and a steaming cup of tea that sent gentle wisps of fragrance curling into the quiet evening air.",
"The marketplace bustled with energy as vendors shouted their offers, carts rattled over uneven cobblestones, and the scent of sizzling street food filled the air, mingling with the sweet aroma of fresh flowers arranged in colorful woven baskets.",
"Through the dusty window of the café, passersby could be seen hurrying along the rain-soaked street, their coats pulled tight, while inside the warmth of fresh coffee and soft music wrapped around every customer like a familiar embrace.",
"The lighthouse stood tall against the crashing waves, its beam sweeping slowly across the dark sea, guiding fishing boats safely to shore as gulls wheeled overhead and the salty wind tugged playfully at the keeper’s heavy coat.",
"At the edge of the meadow, a cluster of wildflowers swayed gently in the breeze, their bright petals catching the sunlight, while bees hovered busily and a distant brook sang softly among the rocks and moss.",
"Night settled over the city, wrapping the streets in shadows while windows glowed with warm light, traffic hummed faintly in the distance, and the scent of fresh bread drifted from a bakery still working long after dark.",
"The old clock tower chimed softly in the distance, its sound drifting across the quiet town square where shop windows glowed warmly, benches sat empty, and a gentle wind carried the faint scent of freshly baked pies from the nearby bakery.",
"In the golden light of late afternoon, children raced along the riverbank, skipping stones across the shimmering surface, their laughter ringing out as dragonflies darted above the water and willow branches swayed gently in the summer breeze.",
"A thin mist curled over the lake, blurring the line between water and sky, as a fisherman cast his line from the wooden pier, the quiet broken only by the occasional splash of a jumping fish.",
"Under the towering oak tree, a young woman sat sketching in her notebook, her pencil moving quickly as squirrels darted across the branches above and the scent of freshly cut grass drifted in from a nearby field.",
"The mountain trail wound steeply upward, lined with wildflowers and moss-covered rocks, while the distant roar of a waterfall echoed through the valley, mingling with the songs of unseen birds hidden deep in the surrounding forest.",
"Lanterns glowed softly along the narrow street, casting golden light on the cobblestones as couples strolled hand in hand, shopkeepers tidied their stalls, and the aroma of roasted chestnuts lingered in the crisp night air.",
"The quiet library was filled with the faint rustle of turning pages, the occasional squeak of a chair, and the warm glow of lamps illuminating rows of books that seemed to hold endless worlds within their worn covers.",
"As the sun dipped below the horizon, the sky blazed with shades of orange, pink, and violet, while waves rolled steadily toward the shore, scattering seashells along the wet sand that glistened in the fading light.",
"A lone cyclist pedaled along the country road, passing golden fields of wheat swaying in the breeze, while a cluster of clouds gathered overhead, promising rain before the day’s end and a cool night ahead.",
"Inside the small workshop, the air was rich with the scent of sawdust and varnish, as the craftsman carefully carved intricate designs into a block of wood, his hands steady despite the years etched into his weathered face.",
"The festival was alive with color and sound, as dancers in bright costumes twirled to the rhythm of drums, fireworks lit the night sky, and the crowd cheered, their faces glowing in the flickering torchlight.",
"Through the open window, the sound of rain tapping on the roof mixed with the distant rumble of thunder, while inside, a cat purred contentedly beside the fireplace, its fur warm from the crackling flames.",
"A row of fishing boats bobbed gently in the harbor, their hulls painted in peeling shades of blue and red, while gulls swooped low, searching for scraps left behind by the early morning catch.",
"On the hillside, a blanket of wildflowers stretched as far as the eye could see, swaying gently in the wind, while butterflies flitted between blossoms and the distant mountains stood in quiet, timeless majesty.",
"The bakery’s display case gleamed under the soft light, showcasing rows of golden croissants, frosted cupcakes, and rustic loaves of bread, while the sweet scent of cinnamon drifted through the air, drawing customers in from the street.",
"The desert stretched endlessly beneath the blazing sun, its dunes shifting like golden waves, while a lone camel caravan moved slowly toward the horizon, leaving a winding trail of footprints in the soft, wind-swept sand.",
"In the quiet café, a man scribbled notes into a worn journal, pausing occasionally to sip his coffee, as the hum of conversation, clinking cups, and faint music from an old radio filled the warm, inviting space.",
"The narrow hiking path wound along the cliffside, offering breathtaking views of the turquoise sea far below, where white foam crashed against jagged rocks and seabirds soared gracefully in the salty, sunlit breeze.",
"On the snowy evening, soft flakes drifted lazily through the air, covering rooftops and streets in a glistening blanket, while streetlamps cast halos of light and chimneys released thin spirals of smoke into the crisp night sky.",
"The orchestra played with precision and passion, violins singing sweetly over the deep rumble of cellos, while the conductor’s baton moved gracefully through the air, guiding the musicians toward a final, triumphant crescendo that filled the grand hall.",
"Morning sunlight spilled across the bustling harbor, where fishermen unloaded their nets, merchants shouted prices for the day’s catch, and seagulls circled overhead, hoping for scraps to fall from the wooden crates stacked along the dock.",
"A gentle fog hung over the meadow, softening the outlines of distant trees, while dew sparkled on the grass and the first light of day painted the sky in delicate shades of peach and lavender.",
"In the old attic, dust motes danced in the sunlight streaming through a small round window, illuminating boxes filled with yellowed letters, faded photographs, and forgotten treasures from generations long past.",
"The carnival was alive with flashing lights, spinning rides, and the scent of popcorn drifting through the cool evening air, as children’s laughter mixed with the calls of game operators tempting passersby to try their luck.",
"Beyond the rolling hills, a small stone cottage sat nestled among flowering bushes, its chimney puffing smoke, while a narrow stream trickled nearby, reflecting the pale blue sky and the occasional cloud drifting lazily overhead.",
];

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timerText = document.getElementById("timer");
const wpmText = document.getElementById("wpm");
const accuracyText = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");

let startTime;
let timerInterval;
let currentQuote = "";

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function renderNewQuote() {
  currentQuote = getRandomQuote();
  quoteDisplay.innerText = currentQuote;
  quoteInput.value = "";
  quoteInput.disabled = false;
  quoteInput.focus();
  startTime = null;
  timerText.textContent = "0";
  wpmText.textContent = "0";
  accuracyText.textContent = "100%";
  clearInterval(timerInterval);
}

quoteInput.addEventListener("input", () => {
  const typedText = quoteInput.value;
  const correct = currentQuote.startsWith(typedText);
  quoteInput.style.borderColor = correct ? "green" : "red";

  if (!startTime) {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
  }

  if (typedText === currentQuote) {
    clearInterval(timerInterval);
    const timeTaken = (new Date() - startTime) / 1000;
    const words = currentQuote.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);
    const accuracy = calculateAccuracy(typedText, currentQuote);
    wpmText.textContent = wpm;
    accuracyText.textContent = accuracy + "%";
    quoteInput.disabled = true;
  }
});

function updateTimer() {
  if (startTime) {
    const time = Math.floor((new Date() - startTime) / 1000);
    timerText.textContent = time;
  }
}

function calculateAccuracy(typed, original) {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === original[i]) correct++;
  }
  return Math.round((correct / original.length) * 100);
}

startBtn.addEventListener("click", renderNewQuote);

// Initial load
renderNewQuote();
