/* =====================================================
   EL TAROT DE LOS GATOS - JavaScript App
   78 cartas: 22 Arcanos Mayores + 56 Arcanos Menores
   ===================================================== */

'use strict';

// ─── Datos de las 78 cartas ───────────────────────────

const TAROT_CARDS = [
  /* ═══════════════ ARCANOS MAYORES ═══════════════ */
  {
    id: 'loco',
    name: 'El Loco',
    number: '0',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🃏',
    keywords: ['Salto a lo desconocido', 'El buscador', 'Exploración', 'Niño interior', 'Despertar', 'Inocencia'],
    description: 'Cuando aparece el Loco en una lectura de tarot, puede indicar la ingenuidad de una persona, pero también su capacidad de impartir sabiduría, encarnando la sencillez y una especial perspicacia. Apunta hacia el niño interior, la dimensión de uno mismo que se lanza de cabeza a nuevas experiencias, impávido ante el temor o la negatividad. El Loco puede representar el comienzo de una iniciativa estimulante o un nuevo viaje espiritual. La carta le aconseja que escuche a su corazón y que persiga sus sueños. Sin embargo, no es totalmente positiva. Cuando se adentra en territorio desconocido, no está seguro de con qué puede encontrarse. Existe el riesgo de que se esté equivocando y que acabe por lamentar sus acciones, aunque el riesgo es lo que nos hace vivir en lugar de meramente existir.',
    invertida: 'El optimismo es una cosa, la temeridad es otra. El Loco invertido indica una actitud irresponsable y una falta de cuidado que será destructiva. Piénselo de nuevo.',
    element: 'Aire',
    nature: 'Inicio, aventura'
  },
  {
    id: 'mago',
    name: 'El Mago',
    number: 'I',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🔮',
    keywords: ['Adaptar las circunstancias', 'Confianza', 'Empoderamiento', 'Guía', 'Efectuar cambios', 'Aptitud'],
    description: 'La aparición del Mago indica confianza en sí mismo y maestría, el poder de hacer que las cosas ocurran. La carta nos recuerda que somos los dueños de nuestra propia vida y que poseemos la capacidad de conseguir lo que queremos. Cuando aparece el Mago en una lectura de tarot, prepárese a canalizar la confianza para poder acceder a la grandeza. El Mago es una de las figuras más poderosas del tarot. Tal vez ha aparecido una figura de poder en su vida, que le ayudará a cambiar las cosas para bien. O bien se ha dado o dará un importante avance profesional, en su vida espiritual o en temas de salud. Es el momento de salir al mundo y descubrir lo que quiere, ya se trate de una nueva pareja o de un cambio de profesión.',
    invertida: 'El poder puede estar mal dirigido. Reflexione sobre sus motivaciones antes de cambiar o manipular las cosas. El fin no siempre justifica los medios. Desconfíe de una persona encantadora o seductora que no es de fiar.',
    element: 'Fuego',
    nature: 'Poder, acción'
  },
  {
    id: 'sacerdotisa',
    name: 'La Sacerdotisa',
    number: 'II',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🌙',
    keywords: ['Inspiración', 'Intuición y secretos', 'Previsión', 'Percepción', 'Descubrimiento', 'Voz interior', 'Silencio'],
    description: 'La Sacerdotisa es una figura digna, llena de conocimiento y sabiduría. Es alguien muy intuitivo y capaz de adivinar verdades ocultas, personificando el poder sutil de lo femenino. Cuando aparece esta carta en una tirada, puede representar una revelación psíquica que llega a través de un sueño, cierto sentido de un poder superior o un trabajo intenso en su camino espiritual. Tal vez una nueva comprensión ilumina el propósito de su vida, o está a punto de hacerlo. Esta carta posee una energía serena y sugiere la necesidad de un periodo de retiro para hallar la voz interior. La Sacerdotisa es una fuerza pasiva y receptiva, no dinámica; el mensaje de la carta es que a veces es mejor quedarse quieto, observar, aprender y esperar a que nos hable la voz interior antes de responder ante un acontecimiento o tratar de dirigirlo.',
    invertida: 'Negarse a escuchar a la intuición. Un exceso de independencia y aislamiento prolongado puede llevar al egoísmo y hacer que resulte difícil relacionarse con los demás.',
    element: 'Agua',
    nature: 'Misterio, intuición'
  },
  {
    id: 'emperatriz',
    name: 'La Emperatriz',
    number: 'III',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🌿',
    keywords: ['Abundancia en el plano físico', 'Generosidad', 'Solicitud', 'Prosperidad', 'Seguridad', 'Confort'],
    description: 'La Emperatriz está dedicada a los temas terrenales y a los placeres sensuales. La carta personifica la abundancia, la fertilidad y el cuidado de los demás. La Emperatriz le recuerda que es usted un ser físico, con necesidades materiales. Cuando aparece esta carta sugiere que su vida rebosa de bienes materiales y que se siente cómodo y satisfecho: la Emperatriz es la Madre Tierra en su aspecto nutricio y práctico, que da la vida y proporciona sustento. Los negocios pueden generar riqueza y el esfuerzo del pasado se ve recompensado: recogemos lo que hemos sembrado. Su potencial creativo puede aumentar, y, si su salud no es buena, la Emperatriz le dará un vigor renovado y le proporcionará aquello que necesite. Como figura materna, la Emperatriz ve con buenos ojos la vida familiar.',
    invertida: 'Las madres pueden concentrarse más de la cuenta en las necesidades de los demás; alguien puede estar actuando de un modo sofocante con la pareja o un familiar, o puede que usted esté descuidando sus necesidades. Puede haber temas de fertilidad o el bloqueo de su creatividad.',
    element: 'Tierra',
    nature: 'Fertilidad, abundancia'
  },
  {
    id: 'emperador',
    name: 'El Emperador',
    number: 'IV',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '👑',
    keywords: ['La cabeza antes que el corazón', 'Fuerza', 'Ejercer su voluntad', 'Moldear el mundo', 'Autoridad', 'Asertividad'],
    description: 'El Emperador muestra a un líder, proveedor o disciplinario. Cuando aparece esta figura, puede que una presencia masculina haya entrado en su vida, tal vez como mentor o figura paterna, o como potencial pareja. O puede que necesite acceder a esta dimensión de sí mismo y aplicar un enfoque metódico al asunto que le ocupa. Tanto si aspira a un nuevo trabajo o bien debe afrontar las dificultades de una relación, esta carta le aconseja que un plan estructurado, realizado paso a paso, dará mejores resultados que una respuesta emocional y dispersa. Incluso el progreso espiritual precisa autodisciplina y una práctica regular, tal como personifica el Emperador.',
    invertida: 'Puede apuntar a un individuo opresor o dominante, un énfasis excesivo sobre el poder o una mentalidad cerrada; puede que tenga que abrir la mente a las ideas de otros.',
    element: 'Fuego',
    nature: 'Liderazgo, estructura'
  },
  {
    id: 'sumo-sacerdote',
    name: 'El Sumo Sacerdote',
    number: 'V',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '📿',
    keywords: ['Filósofo y guía espiritual', 'Institución', 'Tradición', 'Respeto', 'Moralidad', 'Estudios religiosos'],
    description: 'El Sumo Sacerdote es un filósofo y un guía espiritual. Cuando sale esta carta indica que el consultante está buscando respuestas al sentido de la vida. A diferencia de la carta de la Sacerdotisa, que sugiere buscar las respuestas en el interior de la persona, el Sumo Sacerdote representa un camino que otros ya han seguido antes, como una religión organizada o algún otro sistema de creencias, en especial uno que requiera trabajo en equipo. Esta carta puede representar a un maestro espiritual de confianza, un sacerdote o terapeuta, que le guía por un camino concreto de descubrimiento. No se olvide de cuestionar lo que le digan, en lugar de seguir a ciegas los pasos de otros; evite conformarse solo para complacer a los demás. La carta puede indicar también que se está centrando en las necesidades del grupo en lugar de las del individuo.',
    invertida: 'Alguien respetado o que es obedecido podría ser un hipócrita, predicando falsas verdades o pretendiendo saber más de lo que sabe. ¿Quizás está haciendo caso omiso de la verdad por respeto a un líder?',
    element: 'Tierra',
    nature: 'Sabiduría, tradición'
  },
  {
    id: 'amantes',
    name: 'Los Amantes',
    number: 'VI',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '💫',
    keywords: ['Romance y opciones de vida', 'Atracción', 'Armonía', 'Sinergia', 'Dos opciones', 'Compromiso'],
    description: 'La carta de los Amantes no necesariamente habla de romance. A veces apunta hacia una elección entre dos posibilidades, tal vez dos objetivos que resultan atractivos para dos partes o lados de sí mismo: la espiritual y la mundana, o el emocional y el intelectual. La carta puede ser señal de que ha encontrado a su alma gemela, y que la relación será duradera. Pero una relación con compromiso precisa renunciar a otras posibilidades; una vez se ha elegido, debe renunciar a las demás opciones. La carta de los Amantes indica que la elección a la que se enfrenta es importante, pero le tranquiliza diciendo que la felicidad le aguarda, siempre y cuando elija sabiamente y de forma intuitiva. También puede indicar el éxito en una situación en que dos personas o dos grupos se unen, ya sea en un negocio, amistad o relación romántica.',
    invertida: 'La indecisión o vacilación puede hacer que las oportunidades se desvanezcan. Puede haber conflictos en una relación, o tal vez ha aparecido una tercera persona. Podría haber divorcio o separación.',
    element: 'Aire',
    nature: 'Amor, elección'
  },
  {
    id: 'carro',
    name: 'El Carro',
    number: 'VII',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '⚡',
    keywords: ['Una victoria lograda con el esfuerzo', 'Ganar', 'Progreso', 'Triunfo', 'Confianza', 'Empuje'],
    description: 'El Carro celebra la parte de usted que es fuerte y que está decidida a seguir su camino. Representa la confianza y la determinación, la fuerza de voluntad y la fe en uno mismo. Cuando aparece esta carta, indica que ha vencido a la oposición y que ha salido triunfante. Su victoria puede ser grande o pequeña. Quizás haya conseguido un ascenso muy disputado con sus colegas, o por fin ha dejado de fumar tras muchos intentos fallidos. Sea cual sea la batalla, la sensación es de prevalecer, de salirse con la suya, y la carta le invita a disfrutar de la satisfacción y del orgullo que su logro le produce. Si en una tirada la carta se encuentra en la posición correspondiente al futuro, el Carro sugiere el éxito; tiene o tendrá la actitud adecuada.',
    invertida: 'El Carro representa la fuerza de carácter, pero invertida sugiere que se ha vuelto arrogante y que no le importan los sentimientos de los demás; el verdadero vencedor no se regodea ni muestra una agresión vengativa.',
    element: 'Agua',
    nature: 'Victoria, voluntad'
  },
  {
    id: 'fuerza',
    name: 'La Fuerza',
    number: 'VIII',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🦁',
    keywords: ['El valor para vencer obstáculos', 'Fortaleza', 'Equilibrio mental', 'Capacidades manifestadas', 'Fuerza de voluntad', 'Éxito'],
    description: 'Todos nos enfrentamos a dificultades en la vida, y la lucha más dura suele ser con uno mismo. La carta de la Fuerza es tanto una llamada a reunir el valor necesario para canalizar la rabia, el miedo y la duda, como la seguridad de que posee el carácter necesario para salir victorioso. Es una carta muy afortunada, una de las mejores de los arcanos mayores. Suele salir en un momento crucial de la vida, cuando las decisiones tomadas pueden tener consecuencias positivas y de largo alcance. Indica que ha desarrollado el conocimiento y la autocomprensión y que ya no está a merced del ego, con sus impulsos irrefrenables y egoístas. Posee el autocontrol necesario para usar su poder de manera inteligente y honorable, y es capaz de manifestar su potencial y su energía creativa.',
    invertida: 'Pérdida de control; quizás sus impulsos negativos están dominando y la carta invertida puede significar una adicción o un rasgo negativo de la personalidad. Se ha perdido la fuerza de voluntad y hay falta de confianza en su capacidad de triunfar. Puede que necesite ayuda del exterior para ganar esta batalla.',
    element: 'Fuego',
    nature: 'Valor, dominio'
  },
  {
    id: 'ermitano',
    name: 'El Ermitaño',
    number: 'IX',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🕯️',
    keywords: ['Un tiempo de reflexión', 'Iluminación', 'Soledad', 'Reflexión', 'Meditación', 'Autorrealización'],
    description: 'Todo camino espiritual requiere alejar las presiones y las tentaciones del mundo material para concentrar la mente en el viaje interior. El Ermitaño personifica esta sensación de retiro y de autosuficiencia. Es un arquetipo que se encuentra en los mitos y relatos de todas las civilizaciones; uno de estos personajes es el Padre Tiempo. Cuando aparece el Ermitaño en una tirada, transmite un claro mensaje sobre ir más despacio y simplificar; se precisa una reflexión serena. La meditación o la plegaria podrían ser una gran herramienta para determinar el rumbo, pero tal vez indique que debe reducir los compromisos sociales y de trabajo para tomarse un tiempo para sí mismo. No es momento de seguir los pasos de nadie; debería forjarse un nuevo camino, poco a poco y con atención plena, desarrollando una toma de conciencia de sí mismo con cada paso.',
    invertida: 'Retirarse del mundo puede ser una estrategia de defensa o evitación, o una forma de eludir las responsabilidades. Alejarse de los demás y de sus opiniones podría llevarle a erigir una base falsa. Mantenga la mente abierta.',
    element: 'Tierra',
    nature: 'Sabiduría solitaria'
  },
  {
    id: 'rueda-fortuna',
    name: 'La Rueda de la Fortuna',
    number: 'X',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🎡',
    keywords: ['Cambios y giros', 'Transición', 'Cambio repentino', 'Causa y efecto', 'Altibajos', 'Impredecibilidad'],
    description: 'Las buenas y las malas épocas forman parte de la vida. Si permitimos que los factores externos dominen nuestras emociones, estaremos siempre a merced de lo que el universo nos arroje. La Rueda de la Fortuna nos recuerda que las cosas pueden cambiar en cualquier momento, y que debemos mantener el equilibrio bajo cualquier circunstancia. Esta carta trata de los aspectos de la vida que están más allá de nuestro control. Por lo general significa un golpe de suerte o un encuentro casual que da resultados positivos. Pero nadie puede predecir ni controlar la forma en que gira la rueda; podría ser que los planes más minuciosos o una apuesta segura se vengan abajo por algo fortuito. Sea como sea, el cambio de circunstancias contiene el potencial de llevarnos hacia un nuevo crecimiento. Acepte la nueva situación con dignidad y descubra qué puede aprender de ella.',
    invertida: 'Reveses u obstáculos inesperados; no es buen momento para embarcarse en algo nuevo. No controla los acontecimientos y por ello no puede manipularlos a su favor. En lugar de ello, debe recurrir a la fuerza interior y afrontar la situación con todo el estoicismo posible.',
    element: 'Fuego',
    nature: 'Destino, ciclos'
  },
  {
    id: 'justicia',
    name: 'La Justicia',
    number: 'XI',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '⚖️',
    keywords: ['Un resultado justo o integridad', 'Equilibrio', 'Consecuencias', 'Objetividad', 'Arbitraje', 'Poner orden'],
    description: 'La balanza de la justicia de esta carta debe mantener el equilibrio entre los dos bandos opuestos, y la espada de doble filo sugiere que el resultado puede inclinarse hacia cualquier lado, o que este puede ser tanto positivo como negativo. La carta nos habla de objetividad. Sugiere que se ha llegado a la decisión correcta o que la situación es resultado de sus acciones pasadas. Puede referirse a un juicio legal, pero también aparece cuando está pensando en qué hacer; le invita a sopesar las opciones cuidadosamente y a aplicar la lógica racional y la objetividad al proceso de toma de decisiones. La Justicia puede ser el equivalente en el tarot de la ley del karma: las malas acciones del pasado podrían manifestarse ahora, o un gesto amable podría ser correspondido. La Justicia le empuja a asumir la responsabilidad y a reconocer los errores del pasado.',
    invertida: 'Indica que las circunstancias son injustas, pero protestar no servirá de nada; a veces las cosas no salen como queremos, aunque deberían. Se precisa una respuesta serena y estoica. Evite juzgar a otros porque desconoce la totalidad de los hechos.',
    element: 'Aire',
    nature: 'Karma, verdad'
  },
  {
    id: 'colgado',
    name: 'El Colgado',
    number: 'XII',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🔗',
    keywords: ['Sacrificio voluntario', 'Iniciación', 'Rendición', 'Lo desconocido', 'Visión profunda', 'Cambio de vida significativo'],
    description: 'Rara vez es posible tener todo lo que queremos sin esfuerzo. La mayoría de los mitos heroicos hablan del protagonista atravesando un tiempo de dificultades y sacrificio, que soportan porque saben que la recompensa merece el periodo de sufrimiento. La aparición de la carta del Colgado indica que una dificultad actual tiene un sentido y sus razones. A veces el sacrificio implica algo material, por ejemplo, renunciar a una carrera en la ciudad para cumplir el sueño de vivir en el campo o realizar una labor de voluntariado en el extranjero, pero también puede ser que esté renunciando a una creencia o una actitud que ha mantenido largo tiempo para hacer espacio a nuevas ideas. Dejar ir es doloroso, y la vida no volverá a ser igual, pero en última instancia hay recompensas mayores.',
    invertida: 'El sacrificio que está haciendo, ¿es necesario o responde a un excesivo sentido del deber? Cuando sale esta carta invertida, a menudo apunta a un martirio que no sirve de nada. Piense en qué le está impidiendo atender a sus propias necesidades y deseos.',
    element: 'Agua',
    nature: 'Pausa, perspectiva'
  },
  {
    id: 'muerte',
    name: 'La Muerte',
    number: 'XIII',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🌑',
    keywords: ['El final de una época', 'Cambio', 'Transformación', 'Despejar', 'Aceptación', 'Mirar hacia el futuro'],
    description: 'Aunque esta carta suele inspirar temor, casi nunca habla de una muerte física. Su significado es metafórico y trata sobre finales. Aunque un final puede generar sensación de pérdida y tristeza, también abre el camino para nuevos comienzos. Por ello, la carta de la Muerte en el tarot puede considerarse una fuerza dinámica y una oportunidad para el cambio. En la baraja de tarot, la Muerte viene a continuación del Colgado, y esto puede sugerir que lo que ahora se ha perdido corresponde a un acto voluntario. El dolor que genera el final podría estar determinado por su capacidad de reconocer que era necesario; luchar contra lo inevitable nunca es aconsejable. Esta carta nos anima a aceptar lo que no se puede cambiar y a soltar el pasado. La vida no puede permanecer estática, y todo tiene un final.',
    invertida: 'Temor de soltar algo y negarse a seguir adelante. La carta al revés a veces indica que tiene miedo de la muerte física, pero al igual que cuando sale del derecho, se suele referir más bien a un cambio y a su actitud ante el mismo.',
    element: 'Agua',
    nature: 'Transformación, final'
  },
  {
    id: 'templanza',
    name: 'La Templanza',
    number: 'XIV',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🌊',
    keywords: ['Equilibrar energías opuestas', 'Compromiso', 'Armonía', 'Cooperación', 'Tolerancia', 'Adaptación'],
    description: 'La carta de la Templanza se sitúa entre la de la Muerte y la del Diablo, y su energía armonizadora ofrece un descanso y un periodo de calma entre estas fuerzas de cambio tan intensas y potencialmente transformadoras. En la carta vemos fluir un líquido entre dos copas, representando el libre fluir de la energía vital que no es ni un extremo ni el otro, sino que existe en un estado de constante flujo y equilibrio. La carta le aconseja ser paciente, intentar hallar el punto medio y colaborar con los demás en beneficio de todos. Puede indicar una actitud madura en que se moderan los excesos y se templan los extremos de emoción. La carta de la Justicia puede indicar un dictamen positivo, y combinada con la de los Amantes apunta a una buena comunicación y a la resolución de un conflicto de un modo satisfactorio para ambas partes.',
    invertida: 'Puede indicar que la indecisión le paraliza, o que la diversidad de opiniones conduce a la discordia o a una ruptura. Las emociones están descontroladas y no hay voluntad de cooperación en una relación o grupo de personas. Tómese un tiempo para mirar hacia su interior, revaluar la situación y recuperar la perspectiva.',
    element: 'Fuego',
    nature: 'Paciencia, moderación'
  },
  {
    id: 'diablo',
    name: 'El Diablo',
    number: 'XV',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🔥',
    keywords: ['Egoísmo desmedido', 'Ambición', 'Complacencia', 'Exceso', 'Hedonismo', 'Abuso de poder'],
    description: 'La carta del Diablo representa los instintos básicos de egocentrismo, lujuria desenfrenada y codicia. Pero esta energía feroz también puede ser una fuerza creativa si somos capaces de encarrilarla. El tarot entiende que todos tenemos un diablo en nuestro interior; no podemos echar la culpa de nuestros impulsos a un factor externo, como haría un niño. Debemos reconocerlos y controlarlos. Si aparece el Diablo en una tirada es un aviso para no dejarnos llevar por el exceso de placeres y la gratificación física, ni perseguir nuestros propios deseos de forma nociva tanto para nosotros como para otras personas. Puede sugerir una situación desagradable relativa a juegos de poder, excesos, deuda o adicción. Quizás haya tomado decisiones equivocadas o desconoce la motivación de la otra persona; tome medidas para resolver esta situación enfermiza.',
    invertida: 'Ha empezado a reconocer que los hábitos negativos o las decisiones egoístas le han llevado a la infelicidad.',
    element: 'Tierra',
    nature: 'Atadura, sombra'
  },
  {
    id: 'torre',
    name: 'La Torre',
    number: 'XVI',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '⚡',
    keywords: ['Gran conmoción que anuncia un renacimiento', 'Caos', 'Disrupción', 'Cambio', 'Destrucción', 'Liberación'],
    description: 'La Torre es el único edificio que aparece en el tarot, y representa las estructuras que levantamos para sentirnos a salvo y seguros. Estas toman una forma concreta, como la casa donde vivimos; pueden ser abstractas, como la imagen profesional y social que presentamos al mundo; o bien emocional, como las relaciones que ofrecen un refugio del mundo exterior. La carta muestra a una torre alcanzada por un rayo, y esto significa una catástrofe que hace que las cosas se derrumben; tal vez el final de una relación, un despido laboral o una pérdida de fe en uno mismo. Aunque la Torre es una carta de destrucción, conlleva una oportunidad; una vez destruido lo viejo, hay espacio para lo nuevo si está dispuesto a empezar de cero. Existe la posibilidad de una vida mejor.',
    invertida: 'Indica que los acontecimientos desagradables que están teniendo lugar son consecuencia de nuestras propias acciones, o que se encuentra en un estado de negación, intentando retrasar lo inevitable. Es hora de enfrentarse a la realidad.',
    element: 'Fuego',
    nature: 'Ruptura, revelación'
  },
  {
    id: 'estrella',
    name: 'La Estrella',
    number: 'XVII',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '⭐',
    keywords: ['Una promesa de tiempos mejores', 'Inspiración', 'Idealismo', 'Guía', 'Visión', 'Amor espiritual'],
    description: 'La Estrella es una carta espiritual que nos llama hacia un futuro más brillante. Simboliza la fe, ya sea en nosotros mismos, en un poder superior o en el valor de una nueva idea o ambición. La Estrella representa nuestra parte inocente que valora la esperanza aun cuando todo parezca perdido. La carta suele aparecer en momentos de dificultad; nos dice que lo peor ya ha pasado y nos anima a creer que la vida mejorará. Nos aconseja abrirnos a la ayuda que ahora está a nuestro alcance, ya sea de las personas del entorno o del universo en general. La carta puede indicar que está a punto de iniciar un camino que le traerá plenitud espiritual o creativa. Pero es importante recordar que la Estrella no tiene en consideración el lado terrenal de la vida; su tarea podría ser combinar este bello idealismo con cosas prácticas.',
    invertida: 'La Estrella invertida puede significar egocentrismo o pérdida de idealismo; quizás una idea o una relación ha perdido su brillo y ahora ve problemas que antes no veía.',
    element: 'Aire',
    nature: 'Esperanza, renovación'
  },
  {
    id: 'luna',
    name: 'La Luna',
    number: 'XVIII',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🌕',
    keywords: ['Imaginación y emociones fluctuantes', 'Intuición', 'Creatividad', 'Malentendidos', 'Incomodidad', 'Incertidumbre'],
    description: 'En el tarot, la Luna se asocia con el subconsciente y se basa en la arraigada creencia de que la conducta humana se ve afectada por su ciclo creciente y menguante. Cuando la Luna aparece en una tirada, a menudo indica un tiempo de confusión, ya que no podemos llegar a las profundidades del subconsciente ni entender del todo la dirección hacia la que nos impulsa. Puede aparecer cuando tiene sueños especialmente vívidos, o cuando se siente atraído por una búsqueda artística, la meditación, la adivinación o quizás la psicoterapia; todas ellas le pueden ofrecer un camino hacia una mayor comprensión. Puede que se sienta inquieto, emocional o inseguro de sus sentimientos. La mejor opción suele ser aceptar la incertidumbre, explorar la propia psique del mejor modo posible y demorar la acción decisiva hasta la próxima etapa del ciclo.',
    invertida: 'Una situación que parece clara podría no ser más que una ilusión, o encubrir motivaciones ocultas. La falta de claridad podría causar dificultades, así que piense bien antes de hablar. Escuche a su voz interior: alguien está siendo engañoso.',
    element: 'Agua',
    nature: 'Ilusión, subconsciente'
  },
  {
    id: 'sol',
    name: 'El Sol',
    number: 'XIX',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '☀️',
    keywords: ['Brillar con una energía radiante', 'Fortalecimiento', 'Avance importante', 'Buena salud', 'Logro', 'Libertad'],
    description: 'Los mitos y las historias de todo el mundo, y de todas las épocas, veneran al Sol y reconocen su papel crucial para sustentar la vida. Cuando aparece el Sol en una tirada de tarot, sabe que posee la vitalidad y el entusiasmo necesarios para abordar lo que se presente, y que es probable que le esperen la aventura y la diversión. El Sol sugiere que le ha llegado el momento de destacar y que los acontecimientos van a su favor. Puede haber una promoción o algún golpe de suerte a la vista, o quizás otros se sienten atraídos por el brillo y la energía que en estos momentos irradia; es un tiempo ideal para relacionarse con otros y divertirse. No malgaste esta oportunidad. Cuando estamos en el centro del universo, nuestros deseos se vuelven factibles y tenemos que aprovechar la ocasión.',
    invertida: 'Cuando el Sol brilla con demasiada intensidad, puede cegar a otros. Cuidado con ser arrogante o mostrarse superior. En el sentido contrario, puede que su luz se esté apagando; las oportunidades se pueden desvanecer a medida que la luz solar palidece cuando se pone.',
    element: 'Fuego',
    nature: 'Vitalidad, alegría'
  },
  {
    id: 'juicio',
    name: 'El Juicio',
    number: 'XX',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🔔',
    keywords: ['Tomar las últimas decisiones', 'Rendición de cuentas', 'Decisiones', 'Perdón', 'Responsabilidad', 'Confianza en sí mismo'],
    description: 'La vida está llena de posibilidades, pero algunas decisiones son definitivas y permanentes. Pueden referirse a temas de crucial importancia o bien menores, pero una vez tomada la decisión, no hay vuelta atrás. Es aconsejable observar las cartas que rodean a la del Juicio para ver a qué ámbito se refiere. Si la carta se combina con la de los Amantes, podría ser que una relación se formalizara mediante el matrimonio o alguna otra forma, y si aparece con el Sumo Sacerdote sugeriría un compromiso con su fe o sus creencias. Sea cual sea la situación, está listo para hacer balance de sus capacidades y admitir sus defectos, rectificando según sea necesario. La aparición de esta carta le asegura que su juicio es claro y que existe un buen equilibrio entre el yo intuitivo y el pensamiento lógico.',
    invertida: 'El miedo a tomar decisiones o quizás una excesiva dependencia de la opinión de los demás podría ocasionar la pérdida de una oportunidad.',
    element: 'Fuego',
    nature: 'Renacimiento, claridad'
  },
  {
    id: 'mundo',
    name: 'El Mundo',
    number: 'XXI',
    arcano: 'Mayor',
    suit: 'mayor',
    symbol: '🌍',
    keywords: ['Culminación o totalidad', 'Objetivo alcanzado', 'Logro', 'Esfuerzos recompensados', 'Un ciclo que concluye', 'Pertenencia'],
    description: 'La última carta de los arcanos mayores indica la culminación: la conclusión feliz de un viaje o el logro de un objetivo en el que ha estado trabajando durante largo tiempo. El globo terráqueo sugiere la sensación de completar el círculo, y este es un recordatorio que aparece con frecuencia en el tarot, diciéndonos que cuando un viaje concluye, otro comienza. Cuando aparece esta carta, indica un momento de su vida en que, tras alcanzar el destino deseado, puede tomarse un descanso para apreciarlo. Tal vez es la hora de dar algo a cambio a aquellos que le han ayudado y a quienes le siguen los pasos. Podría tener un nuevo sentido de la comunidad, de pertenencia, y esto podría expresarlo con gestos amables hacia otros o con alguna obra de caridad. La carta puede aparecer también cuando se está a punto de emprender un largo viaje por el extranjero.',
    invertida: 'Se siente paralizado, atrapado por el temor de nuevos horizontes, o bien, tras lograr un objetivo, se encuentra estancado o no está seguro de cuál será el nuevo paso a dar.',
    element: 'Tierra',
    nature: 'Completud, éxito'
  },

  /* ═══════════════════ BASTOS ═══════════════════════ */
  {
    id: 'as-bastos',
    name: 'As de Bastos',
    number: 'As',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Esfuerzo', 'Planificación', 'Preparación', 'Nueva energía creativa'],
    description: 'La carta de las ideas. Cuando aparece el As de Bastos, nos habla de un incremento de la energía creativa que podría cambiar su suerte. Preste atención a las nuevas ideas, a la inspiración repentina o simplemente a una sensación de inquietud: esto indica que se encuentra al borde de una nueva aventura. Un legado o una bonificación inesperada puede hacer que las cosas avancen.',
    invertida: 'La falta de motivación o la sensación de estar acorralado podría significar que las ideas creativas han perdido impulso. O simplemente hay demasiadas cosas por hacer. No estaría de más tomarse un descanso.',
    element: 'Fuego',
    nature: 'Inicio creativo'
  },
  {
    id: 'dos-bastos',
    name: 'Dos de Bastos',
    number: '2',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Esfuerzo', 'Planificación', 'Preparación', 'Decisión'],
    description: 'Es necesario un esfuerzo sostenido para que una nueva idea dé sus frutos. Crea en su potencial, sea valiente y dé un paso adelante para hacerlo realidad. El mundo está a sus pies. La carta indica una decisión: continuar con lo que ya conoce o tomar un rumbo diferente. Hay una nueva y fructífera asociación en el horizonte.',
    invertida: 'Tenga cuidado. Los planes no se han pensado a fondo y podría haber malentendidos. Una idea puede acabar en anticlimax o decepción.',
    element: 'Fuego',
    nature: 'Planificación, decisión'
  },
  {
    id: 'tres-bastos',
    name: 'Tres de Bastos',
    number: '3',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Visión', 'Nuevos horizontes', 'Exploración', 'Objetivos'],
    description: 'La aparición de esta carta implica que sus planes han avanzado o que se ha alcanzado un objetivo a corto plazo. Pero piense en el largo plazo también y acepte los cambios que son necesarios. Los viajes, estudios y nuevos empeños serán afortunados, y una ayuda o asociación le puede ayudar a avanzar en su camino.',
    invertida: 'Está desperdigando o malgastando energía, así que reúna sus fuerzas y tome un camino diferente. Tenga cuidado con quienes le ofrecen ayuda, puede que acaben siendo un impedimento.',
    element: 'Fuego',
    nature: 'Expansión, viajes'
  },
  {
    id: 'cuatro-bastos',
    name: 'Cuatro de Bastos',
    number: '4',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Celebración', 'Hito', 'Realización', 'Armonía'],
    description: 'Una carta alegre que refleja una sensación de haber conseguido algo; tal vez ha finalizado un proyecto de trabajo, una obra artística o la renovación del hogar. Existe armonía y felicidad, y posiblemente un nuevo romance o casa. Las desavenencias se pueden subsanar y los errores del pasado quedarán atrás al avanzar hacia una fase más feliz.',
    invertida: 'Es necesario un mayor esfuerzo para lograr el resultado deseado. Puede haber conflictos en casa e inestabilidad en el trabajo o en una relación.',
    element: 'Fuego',
    nature: 'Celebración, hogar'
  },
  {
    id: 'cinco-bastos',
    name: 'Cinco de Bastos',
    number: '5',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Rivalidad', 'Competencia', 'Enfrentamientos', 'Conflicto'],
    description: 'El conflicto está a la orden del día, sobre todo en el ámbito laboral. Esto no tiene por qué ser malo: la competencia le puede estimular hacia cosas mejores, y los retos forzar un replanteamiento útil, una corrección mental. Pero la carta sugiere prudencia: ¿podría ser que todo el mundo estuviera implicado en juegos mentales carentes de sentido?',
    invertida: 'Puede que se acaben las tensiones, pero ahora tiene que afrontar las consecuencias. Los socios más débiles podrían manipular la situación en beneficio propio.',
    element: 'Fuego',
    nature: 'Competición, lucha'
  },
  {
    id: 'seis-bastos',
    name: 'Seis de Bastos',
    number: '6',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Triunfo', 'Recompensa', 'Reconocimiento', 'Victoria pública'],
    description: 'Esta carta representa la victoria tras un periodo de trabajo intenso o dificultades. Puede esperar más que una satisfacción personal; el reconocimiento público de sus logros está de camino: un ascenso, la atención de los medios, un premio, quizás un nuevo contrato. Disfrute del momento o tómese unas vacaciones, porque después tendrá que trabajar para mantener su posición.',
    invertida: 'Recuerde el dicho de que "la arrogancia precede a la caída". No se regodee ni se jacte de su éxito. La envidia de otros podría sembrar las semillas de problemas futuros.',
    element: 'Fuego',
    nature: 'Victoria, reconocimiento'
  },
  {
    id: 'siete-bastos',
    name: 'Siete de Bastos',
    number: '7',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Autoprotección', 'Oposición', 'Defensa', 'Estatus'],
    description: 'Siempre que se consigue el éxito, el reto no tarda en llegar. Esta es una carta de estatus, indicando que ha alcanzado una posición elevada y de respeto. Pero siempre habrá oposición contra aquellos que han alcanzado una posición elevada; sea firme y consolide sus logros antes de seguir adelante. Creer en sí mismo es crucial si quiere defender el prestigio que se ha ganado con su esfuerzo.',
    invertida: 'Esté preparado a enfrentarse a la negatividad o a un antagonismo declarado. Manténgase firme.',
    element: 'Fuego',
    nature: 'Defensa, perseverancia'
  },
  {
    id: 'ocho-bastos',
    name: 'Ocho de Bastos',
    number: '8',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Movimiento', 'Avance', 'Viaje', 'Rapidez'],
    description: 'La energía creativa se encuentra en su punto álgido y todo avanza con rapidez. Los proyectos llegan a una pronta conclusión; los impedimentos desaparecen. Se presentan nuevas y estimulantes oportunidades y también son probables los viajes. Asegúrese de canalizar cuidadosamente la energía en lugar de dejar que fluya en distintas direcciones, y no la malgaste en temas sin importancia.',
    invertida: 'Apresurarse de forma imprudente puede causar problemas. Demoras y perturbaciones. Ejercite la paciencia.',
    element: 'Fuego',
    nature: 'Velocidad, acción'
  },
  {
    id: 'nueve-bastos',
    name: 'Nueve de Bastos',
    number: '9',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Revés', 'Prueba', 'Resiliencia', 'Perseverancia final'],
    description: 'Un objetivo anhelado por el que lleva tiempo trabajando está ahora a la vista, pero queda un último obstáculo que superar. Esta carta le aconseja utilizar las reservas interiores y guardar energía para el empujón final. Ya se han tomado las decisiones correctas. Ahora debe ser persistente y confiar en que triunfará.',
    invertida: 'Existe oposición y tal vez el planteamiento no es correcto o los objetivos son poco realistas. Llegar a un compromiso podría ser la solución.',
    element: 'Fuego',
    nature: 'Resistencia, prueba'
  },
  {
    id: 'diez-bastos',
    name: 'Diez de Bastos',
    number: '10',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Responsabilidades', 'Cargas', 'Consecuencias', 'Agotamiento'],
    description: 'El diez de bastos aparece cuando está agotado pero se siente incapaz de descansar porque se acerca la culminación de un objetivo. O tal vez un proyecto o plan ha tenido un gran éxito, pero le ha dejado con responsabilidades adicionales que están siendo una carga. Tiene que priorizar y delegar.',
    invertida: 'Son necesarios los compromisos, y no todos los objetivos se alcanzarán. Otras personas están imponiéndole una carga injusta o bien le echan la culpa por sus problemas.',
    element: 'Fuego',
    nature: 'Carga, culminación'
  },
  {
    id: 'paje-bastos',
    name: 'Paje de Bastos',
    number: 'Paje',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Potencial', 'Idea', 'Nuevos comienzos', 'Chispa creativa'],
    description: 'El paje de bastos representa a una persona joven capacitada, pero todavía no centrada en un objetivo. La carta le pide que reconozca las primeras chispas de una llama creativa, o la sensación de inquietud o incluso insatisfacción, que podría llevarle en la dirección correcta si la aviva. La carta puede indicar buenas noticias, tal vez un nacimiento, una buena idea o un proyecto estimulante.',
    invertida: 'El miedo o la falta de ambición le retiene. La energía creativa no expresada puede crear problemas.',
    element: 'Fuego',
    nature: 'Potencial juvenil'
  },
  {
    id: 'caballero-bastos',
    name: 'Caballero de Bastos',
    number: 'Caballero',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Aventura', 'Entusiasmo', 'Cambio de rumbo', 'Impulso'],
    description: 'Puede aparecer una persona impulsiva y dinámica, determinada a triunfar, que contagiará a otros su entusiasmo. La aparición de esta carta puede apuntar a la necesidad de estímulo. El espíritu exuberante del impulso que se acerca podría llevarle a un cambio de casa, un viaje al extranjero o un nuevo proyecto.',
    invertida: 'No se deje arrastrar por los problemas o los planes insensatos de otros; piense en las consecuencias de sus acciones. Los obstáculos y las demoras son causa de frustración.',
    element: 'Fuego',
    nature: 'Acción audaz'
  },
  {
    id: 'reina-bastos',
    name: 'Reina de Bastos',
    number: 'Reina',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Intuición', 'Calidez', 'Nutrición', 'Lealtad'],
    description: 'La reina representa a una persona de buen corazón, maternal y con confianza en sí misma, que en estos momentos puede ejercer influencia. La carta personifica las cualidades de lealtad e intuición. Puede que necesite ayuda o consejo, o que tenga que desarrollar esta dimensión en su personalidad. La carta indica también empeños creativos o negocios exitosos.',
    invertida: 'Una persona madura que puede ser controladora y vanidosa. Puede que haya perdido la confianza o que dependa demasiado de otros. Tenga fe.',
    element: 'Fuego',
    nature: 'Carisma materno'
  },
  {
    id: 'rey-bastos',
    name: 'Rey de Bastos',
    number: 'Rey',
    arcano: 'Menor',
    suit: 'bastos',
    symbol: '🔥',
    keywords: ['Asumir el control', 'Autoridad', 'Visión', 'Liderazgo'],
    description: 'Esta es una carta de liderazgo. Puede sugerir la aparición de una persona fuerte y carismática en su vida, capaz de encabezar un cambio. O podría indicar que tiene que aceptar esta parte de usted mismo y aceptar el desafío que se le presenta, o seguir con una idea hasta su culminación.',
    invertida: 'Un líder arrogante puede poner en peligro el éxito de un proyecto o plan; esté preparado. Piense en si está descuidando a otros en su afán por alcanzar su objetivo.',
    element: 'Fuego',
    nature: 'Liderazgo, visión'
  },

  /* ═══════════════════ OROS ═════════════════════════ */
  {
    id: 'as-oros',
    name: 'As de Oros',
    number: 'As',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Confort', 'Disfrute', 'Abundancia', 'Prosperidad'],
    description: 'Los ases de todos los palos indican un comienzo. En el de oros, que trata sobre la seguridad y los asuntos terrenales, esta carta indica prosperidad. Posee los medios necesarios para alcanzar el objetivo, tal vez gracias a un regalo o un legado. La aparición de esta carta podría significar, asimismo, que una nueva empresa podría pagar dividendos.',
    invertida: 'El dinero no le está haciendo feliz, o bien lo está malgastando. Puede indicar enfermedad, o tal vez que se centra demasiado en los bienes materiales.',
    element: 'Tierra',
    nature: 'Inicio material'
  },
  {
    id: 'dos-oros',
    name: 'Dos de Oros',
    number: '2',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Adaptabilidad', 'Equilibrio', 'Destreza', 'Flexibilidad'],
    description: 'Esta carta pide flexibilidad, porque tiene necesidades contradictorias que resolver. Le aconseja que mantenga las opciones abiertas, porque todavía no está claro cuál es el camino correcto. Es buen momento para poner sus asuntos en orden y así estar preparado para atrapar las oportunidades cuando pasen por su lado. Un riesgo financiero puede dar buenos resultados.',
    invertida: 'Le resulta difícil mantener el equilibrio, o hay acontecimientos pasados que ensombrecen el presente. Cuidado con gastar en exceso o hacerse cargo de demasiadas cosas.',
    element: 'Tierra',
    nature: 'Malabarismo, equilibrio'
  },
  {
    id: 'tres-oros',
    name: 'Tres de Oros',
    number: '3',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Reconocimiento', 'Maestría', 'Aplicación', 'Trabajo en equipo'],
    description: 'Ha conseguido cierto éxito. Esto es bueno, pero no le satisface del todo. Tiene que seguir trabajando. La carta indica trabajo en equipo y podría recibir ayuda de un mentor o asociado. La carta denota capacidad para un oficio o una habilidad artística que trae recompensas económicas y honores.',
    invertida: 'Se siente infravalorado y esto podría reflejarse en la recompensa económica que recibe. El trabajo no se realiza con el nivel de calidad adecuado; es necesaria la atención y la destreza necesarias.',
    element: 'Tierra',
    nature: 'Artesanía, habilidad'
  },
  {
    id: 'cuatro-oros',
    name: 'Cuatro de Oros',
    number: '4',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Éxito material', 'Estabilidad', 'Satisfacción', 'Posesividad'],
    description: 'Los esfuerzos del pasado han conducido a un grado de seguridad económica y estatus, y esto le hace sentir feliz y orgulloso, además de proporcionarle una buena base sobre la que seguir avanzando. No obstante, debería refrenar la tendencia a aferrarse demasiado a lo que posee, porque la posesividad impedirá el avance.',
    invertida: 'Una actitud mezquina está bloqueando su capacidad de tirar adelante una relación, un proyecto o la vida en general.',
    element: 'Tierra',
    nature: 'Seguridad, control'
  },
  {
    id: 'cinco-oros',
    name: 'Cinco de Oros',
    number: '5',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Penuria', 'Deuda', 'Pérdida de estatus', 'Dificultad'],
    description: 'Esta carta indica una época de dificultades económicas, que puede llevarle a dudar de sí mismo. Puede que se aísle por vergüenza o que otros le juzguen y le rechacen. Las emociones que gobiernan el intelecto traen tristeza o decepción y soledad espiritual.',
    invertida: 'Puede que tenga que aceptar ayuda de otro, aunque eso hiera su orgullo. El final ya se acerca, tras un periodo de dificultades y deudas. Las desavenencias se pueden subsanar.',
    element: 'Tierra',
    nature: 'Privación, pérdida'
  },
  {
    id: 'seis-oros',
    name: 'Seis de Oros',
    number: '6',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Dar y recibir', 'Equilibrio', 'Armonía', 'Generosidad'],
    description: 'Se recupera la fe tras un periodo de dificultades. La cooperación y el trabajo en equipo benefician a todos en temas de negocios y relaciones personales. Alcanza el éxito en temas mundanos, pero, consciente de lo que se siente al estar en el otro extremo, debería ser generoso con los demás.',
    invertida: 'Hay un desequilibrio: está dando demasiado o demasiado poco, o los regalos implican condiciones. La desigualdad económica genera mala voluntad.',
    element: 'Tierra',
    nature: 'Generosidad, intercambio'
  },
  {
    id: 'siete-oros',
    name: 'Siete de Oros',
    number: '7',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Recompensa', 'Llamada superior', 'Propósito', 'Esfuerzo paciente'],
    description: 'El trabajo duro se ve recompensado. Es una buena carta para quienes se mueven en el mundo de la creatividad, porque su talento empieza a dar frutos. Pero a veces nuestros objetivos no reflejan nuestra pasión interior, por lo que el siete le advierte que debe comprometerse con sus sueños. La carta también simboliza un nuevo amor y dinero en forma de préstamo.',
    invertida: 'Ansiedad porque su duro esfuerzo acabe en nada. A veces, todo lo que uno puede hacer es trabajar diligentemente con la esperanza de una abundante cosecha.',
    element: 'Tierra',
    nature: 'Paciencia, cosecha'
  },
  {
    id: 'ocho-oros',
    name: 'Ocho de Oros',
    number: '8',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Diligencia', 'Destreza', 'Autodisciplina', 'Aprendizaje'],
    description: 'Esta carta, que a menudo indica un periodo de intenso trabajo, sugiere que ha logrado cierto éxito, aunque ahora se precisa una mayor dedicación para llegar a dominar su oficio. Puede ser necesario un sacrificio personal. Todas las formas de aprendizaje y de adquirir conocimiento son favorables.',
    invertida: 'Una falta de esfuerzo o destreza que se precisa para alcanzar su objetivo. Puede que dependa demasiado de los demás y que no se esfuerce lo suficiente.',
    element: 'Tierra',
    nature: 'Dedicación, maestría'
  },
  {
    id: 'nueve-oros',
    name: 'Nueve de Oros',
    number: '9',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Riquezas', 'Lujo', 'Seguridad económica', 'Independencia'],
    description: 'En un nivel material, esta carta indica que todo es de color de rosa: vive en la abundancia, los objetivos son realistas, el negocio va bien y la salud es buena. Pero recuerde: "El dinero no da la felicidad", y sepa que si su único objetivo es hacer dinero, podría encaminarse hacia una pobreza espiritual o emocional.',
    invertida: 'Los planes no han fructificado. Puede que esté sacrificando demasiado en su afán por ganar dinero. La salud puede resentirse por un estilo de vida falto de equilibrio.',
    element: 'Tierra',
    nature: 'Abundancia, logro'
  },
  {
    id: 'diez-oros',
    name: 'Diez de Oros',
    number: '10',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Prosperidad', 'Compartir', 'Familia', 'Culminación material'],
    description: 'Esta es una carta de abundancia; tiene a su alcance todo lo que necesita. El diez tiene que ver con la culminación: está bien establecido en su trabajo y obtiene beneficios materiales. Puede empezar a usar su riqueza y sus logros en beneficio de otros, o pensar en el siguiente paso. La familia y el dinero de la familia es crucial.',
    invertida: 'Conserve lo que ha obtenido; no es momento de correr riesgos insensatos. Asegúrese de que su hogar y su familia estén bien protegidos.',
    element: 'Tierra',
    nature: 'Herencia, familia'
  },
  {
    id: 'paje-oros',
    name: 'Paje de Oros',
    number: 'Paje',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Aprender', 'Entusiasmo', 'Intereses', 'Idealismo joven'],
    description: 'Una persona entusiasta e idealista —tal vez un estudiante o un aficionado— posee una abundancia de energía juvenil, pero carece de un plan estructurado. Cuando aparece esta carta, puede apuntar a una oportunidad para hacer algo diferente, pero no se olvide de la parte práctica del asunto.',
    invertida: 'La carta puede simbolizar a un soñador que ignora las realidades de la vida, o indicar un exceso de intereses y un enfoque disperso; concentre sus energías.',
    element: 'Tierra',
    nature: 'Estudio, curiosidad'
  },
  {
    id: 'caballero-oros',
    name: 'Caballero de Oros',
    number: 'Caballero',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Constancia', 'Formalidad', 'Diligencia', 'Método'],
    description: 'Una persona joven y formal que trabaja duro y sigue un plan de forma precisa, sin tomar ningún atajo. Es amable y compasiva, en especial con los animales, y puede ser importante en su vida. La carta puede indicar también que debe completar un proyecto, aunque este no le resulte demasiado estimulante.',
    invertida: 'No hay nada malo en un método que haya demostrado su validez, pero podría necesitar un enfoque más imaginativo. Una persona tozuda o pasivo-agresiva podría obstaculizar sus esfuerzos.',
    element: 'Tierra',
    nature: 'Trabajo metódico'
  },
  {
    id: 'reina-oros',
    name: 'Reina de Oros',
    number: 'Reina',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Sentido práctico', 'Nutrición', 'Suficiencia', 'Generosidad'],
    description: 'La reina de oros es una persona maternal y gregaria que ofrece soluciones prácticas y se interesa por las artes. Posee una seguridad económica que le permite ser generosa con sus seres queridos. Como todas las cartas de la corte, puede indicar que una persona aparecerá en su vida, o que sus cualidades se manifestarán en usted.',
    invertida: 'Invertida, esta carta puede indicar la evitación de responsabilidades. Una persona perezosa o manipuladora está dando problemas.',
    element: 'Tierra',
    nature: 'Nutrición práctica'
  },
  {
    id: 'rey-oros',
    name: 'Rey de Oros',
    number: 'Rey',
    arcano: 'Menor',
    suit: 'oros',
    symbol: '🌿',
    keywords: ['Negocios', 'Mentor', 'Sensualidad', 'Éxito financiero'],
    description: 'Una persona de negocios pasa a un primer plano. Se le dan bien las finanzas y las negociaciones, y su motivación es el dinero. Puede ser un mentor o consejero útil, o tal vez inspirarle para gestionar los asuntos terrenales. La carta le recuerda que puede disfrutar de los placeres físicos y materiales de la vida.',
    invertida: 'Un individuo motivado por el dinero podría ser débil y poco ético, poniendo el dinero por encima de las relaciones y el honor. Vaya con cuidado.',
    element: 'Tierra',
    nature: 'Negocios, autoridad'
  },

  /* ═══════════════════ ESPADAS ══════════════════════ */
  {
    id: 'as-espadas',
    name: 'As de Espadas',
    number: 'As',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Idea', 'Visión', 'Pensamiento claro', 'Inspiración súbita'],
    description: 'El as indica un momento de inspiración súbita, un avance o una nueva idea creativa. Esto podría cambiar potencialmente su mundo, pero también es posible que genere conflicto con otras personas; no deje que esto le detenga, porque al final conseguirá el éxito. El palo de espadas tiene que ver con la justicia, y esta idea podría ser para ayudar a otros, tal vez en un sentido legal.',
    invertida: 'El conflicto con los demás no le deja pensar correctamente. Acepte ayuda y sea positivo.',
    element: 'Aire',
    nature: 'Claridad mental'
  },
  {
    id: 'dos-espadas',
    name: 'Dos de Espadas',
    number: '2',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Tensión', 'Status quo', 'Punto muerto', 'Indecisión'],
    description: 'Un estado de equilibrio precario. En estos momentos, todo parece estable visto desde fuera, pero el equilibrio no puede durar. Hay una negativa a transigir tanto de un lado como del otro. El conflicto es inevitable y hay que hallar soluciones. Si su instinto no está claro, busque consejo, quizás de un consejero. La salud puede resentirse por hacer demasiado por los demás.',
    invertida: 'Los acontecimientos se suceden a un ritmo rápido y esto resulta desconcertante. Evite hacer promesas que comporten un compromiso.',
    element: 'Aire',
    nature: 'Bloqueo, tregua'
  },
  {
    id: 'tres-espadas',
    name: 'Tres de Espadas',
    number: '3',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Pena', 'Rechazo', 'Separación', 'Dolor emocional'],
    description: 'Una carta dolorosa que puede indicar una ruptura de relaciones o una separación legal; la animosidad y las palabras duras son probables. Es momento de expresar su pena y dolor para que pueda darse la sanación. Las maquinaciones de una tercera parte pueden empeorar el conflicto; un amante puede haber sido infiel. Con el tiempo, el dolor que ahora siente le convertirá en una persona más fuerte.',
    invertida: 'Lo peor ya ha pasado. El perdón es posible, aunque no pueda cambiar los acontecimientos.',
    element: 'Aire',
    nature: 'Ruptura, duelo'
  },
  {
    id: 'cuatro-espadas',
    name: 'Cuatro de Espadas',
    number: '4',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Quietud', 'Consolidación', 'Pausa', 'Descanso necesario'],
    description: 'Esta carta indica estrés y ansiedad tras un periodo de cambio. No es realista esperar un avance continuo; hace falta estabilidad. Ahora es necesario retirarse para recargar las pilas, tomar nota de lo que se ha conseguido y consolidarlo. Cuide su salud y conecte con la familia y los viejos amigos.',
    invertida: 'Agotamiento total. Si no ha tenido cuidado, un problema de salud podría cronificarse. Se han ignorado los consejos de los aliados más cercanos. Concéntrese en la recuperación.',
    element: 'Aire',
    nature: 'Reposo, recuperación'
  },
  {
    id: 'cinco-espadas',
    name: 'Cinco de Espadas',
    number: '5',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Sentirse abrumado', 'Limitación', 'Retirada', 'Derrota'],
    description: 'Esta carta indica que se ha visto implicado en un conflicto que ha resultado en pérdida. Los cincos indican alguna perturbación y, en este caso, en el palo mental, la lucha la ha producido una percepción exagerada del propio valor o de las capacidades. Quizás exista una lucha de poder, o a lo mejor se ha hecho cargo de demasiadas cosas.',
    invertida: 'La derrota le ha dejado magullado y ansioso. Pesimismo o pensamiento negativo.',
    element: 'Aire',
    nature: 'Conflicto, pérdida'
  },
  {
    id: 'seis-espadas',
    name: 'Seis de Espadas',
    number: '6',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Avance', 'Viaje', 'Solución', 'Transición'],
    description: 'La carta implica movimiento: un viaje físico, un cambio de actitud mental o la superación de un obstáculo. El cambio llega tras un periodo de agitación; ha alcanzado un punto de mayor tranquilidad, aunque quizás no sea del todo feliz. El seis de espadas puede apuntar a un visitante del extranjero, una perspectiva útil que alguien nos recomienda o la comunicación de una idea inusual.',
    invertida: 'Una idea demasiado desafiante para ser aceptada. Frustración o bloqueos. Demoras en un viaje.',
    element: 'Aire',
    nature: 'Pasaje, calma relativa'
  },
  {
    id: 'siete-espadas',
    name: 'Siete de Espadas',
    number: '7',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Diplomacia', 'Tacto', 'Observación', 'Estrategia'],
    description: 'Debe entender que un enfoque directo fracasará: es preciso presentar las ideas con tacto y astucia, aunque se sienta un farsante. La dinámica de grupo no es productiva porque choca con la opinión prevalente; dé un paso atrás por el momento y observe a la oposición de cerca antes de pensar en la mejor manera de alcanzar sus metas.',
    invertida: 'Aislamiento. Puede que intente manipular o engañar a otros para que estén de acuerdo con usted. Aunque consiga lo que quiere, habrá consecuencias negativas.',
    element: 'Aire',
    nature: 'Astucia, engaño'
  },
  {
    id: 'ocho-espadas',
    name: 'Ocho de Espadas',
    number: '8',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Decisiones difíciles', 'Dilema', 'Sentirse atrapado', 'Parálisis'],
    description: 'Hay que tomar una decisión, pero toda opción implica cierta dificultad. La situación suele ser consecuencia de no haber actuado, por temor o por un sentido de la lealtad erróneo. Puede que una relación ya no dé más de sí, pero que la vaya arrastrando porque le da miedo estar solo. El ocho le recuerda que es libre de actuar, pero para ello precisa sinceridad y estoicismo.',
    invertida: 'La indecisión le paraliza o está atrapado en una situación incómoda. Aislamiento voluntario.',
    element: 'Aire',
    nature: 'Restricción, miedo'
  },
  {
    id: 'nueve-espadas',
    name: 'Nueve de Espadas',
    number: '9',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Pena', 'Negatividad', 'Consecuencias', 'Ansiedad'],
    description: 'Esta carta indica que se da cuenta de que sus decisiones han desembocado en una situación dolorosa. El nueve puede significar ansiedad y desesperanza, tal vez una enfermedad relacionada con una acción pasada. O bien puede tratarse de la pena y el dolor que sigue a la ruptura de una relación importante, ya sea por muerte, traición o separación.',
    invertida: 'La sensación de impotencia lleva a la represión de emociones difíciles, pero hay que liberarlas para que se pueda dar la sanación.',
    element: 'Aire',
    nature: 'Pesadilla, angustia'
  },
  {
    id: 'diez-espadas',
    name: 'Diez de Espadas',
    number: '10',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Depresión', 'Desesperación', 'Desolación', 'Punto más bajo'],
    description: 'Una carta de lecciones difíciles. Representa el momento en que siente que es imposible caer más bajo o soportar nada más. Pero cuando se toca fondo, siempre hay esperanza, y el único camino que queda es el ascendente. A veces nuestros momentos más oscuros son los mejores maestros. Puede ser el momento en que aprenda la lección más importante de su vida.',
    invertida: 'Su suerte está dando un vuelco, pero queda mucho trabajo por hacer. Se puede remediar una desavenencia.',
    element: 'Aire',
    nature: 'Colapso, renacimiento'
  },
  {
    id: 'paje-espadas',
    name: 'Paje de Espadas',
    number: 'Paje',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Comunicación', 'Ideas', 'Entusiasmo', 'Curiosidad'],
    description: 'Los niños son exploradores natos; intentan encontrarle sentido al mundo y cuestionan lo que ven. Esta es la naturaleza curiosa que personifica el paje. La carta puede apuntar a una persona real o indicar el deseo de estudiar, aprender o cambiar de rumbo. Los mensajes traen noticias sorprendentes, o se revelan secretos.',
    invertida: 'Una persona joven veleidosa y voluble causa fricción. Habladurías o peleas estúpidas. Guárdese las espaldas.',
    element: 'Aire',
    nature: 'Mente ágil, noticias'
  },
  {
    id: 'caballero-espadas',
    name: 'Caballero de Espadas',
    number: 'Caballero',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Acción', 'Determinación', 'Cambio', 'Valentía'],
    description: 'El caballero de espadas emplea su agudeza mental para ganar argumentos y forzar el cambio. Es intrépido y veloz, y apunta a esa parte de usted que quiere que las cosas sucedan. Representa a una persona dinámica cuyas ideas novedosas amplían sus horizontes. La carta también se asocia con el impulso de que las cosas se muevan, las ganas de viajar y el éxito.',
    invertida: 'Una persona impaciente se aprovecha o se atribuye el mérito de ideas que no son suyas. Decisiones arriesgadas.',
    element: 'Aire',
    nature: 'Impulso, intelecto'
  },
  {
    id: 'reina-espadas',
    name: 'Reina de Espadas',
    number: 'Reina',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Sabiduría', 'Consejera', 'Tomar decisiones', 'Agudeza mental'],
    description: 'La reina de espadas sugiere una persona exitosa y de mente ágil, leal y de ideales elevados. Es la carta de la viuda y puede señalar a alguien que ha perdido a su pareja o se ha centrado en el trabajo en detrimento del amor y la amistad. La carta puede representar a alguien que le ayude en su profesión, o que le plantee un reto para que las cualidades incisivas de la reina se manifiesten en usted.',
    invertida: 'Una persona amargada como resultado de un gran dolor; cuidado con confiar o depender de una persona así.',
    element: 'Aire',
    nature: 'Claridad, independencia'
  },
  {
    id: 'rey-espadas',
    name: 'Rey de Espadas',
    number: 'Rey',
    arcano: 'Menor',
    suit: 'espadas',
    symbol: '⚔️',
    keywords: ['Lógica', 'Previsión', 'Intelecto', 'Autoridad'],
    description: 'Puede aparecer en su vida una persona con autoridad, de pensamiento claro y estratégico y de moral sólida. O bien la carta representa su propia necesidad de planificar y actuar de forma lógica para manifestar el cambio u obtener una ventaja. El rey de espadas puede indicar también juicios legales, planes de negocio sólidos o los buenos consejos de un mentor.',
    invertida: 'Una persona muy crítica que puede juzgar duramente y ser a veces abusiva. Falta de empatía.',
    element: 'Aire',
    nature: 'Razón, juicio'
  },

  /* ═══════════════════ COPAS ════════════════════════ */
  {
    id: 'as-copas',
    name: 'As de Copas',
    number: 'As',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['El amor que fluye', 'Conexión', 'Gregarismo', 'Nuevo comienzo emocional'],
    description: 'Como todos los ases, esta carta representa un nuevo comienzo. Es una carta de "ser" en lugar de "hacer"; indica el surgimiento de emociones que son el preludio de un romance, o bien anuncia una nueva etapa en una relación; también puede indicar una época de agradables relaciones sociales o una efusión de compasión o perdón. Las copas se asocian con el hogar, así que puede que haya buenas noticias en el frente doméstico.',
    invertida: 'La superficialidad o el hecho de estar absorto en sí mismo amenazan una relación. Decepción o desilusión.',
    element: 'Agua',
    nature: 'Amor, emoción'
  },
  {
    id: 'dos-copas',
    name: 'Dos de Copas',
    number: '2',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Pareja', 'Unión', 'Atracción', 'Armonía'],
    description: 'La carta de la asociación a menudo indica el comienzo de una relación amorosa, pero también puede referirse a una amistad importante, a una incipiente relación de negocios o a una reconciliación tras un periodo de separación. Las dos personas se reúnen como iguales, de forma armoniosa y respetando las necesidades del otro en una unión perfectamente equilibrada.',
    invertida: 'Discusiones o dificultades de relación debidas a intereses opuestos; un miembro de la pareja puede intentar dominar al otro. Ruptura o divorcio.',
    element: 'Agua',
    nature: 'Romance, acuerdo'
  },
  {
    id: 'tres-copas',
    name: 'Tres de Copas',
    number: '3',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Celebración', 'Comunidad', 'Realización', 'Alegría compartida'],
    description: 'Se ha logrado algún tipo de resultado emocional que evoca sentimientos de gran alegría. Tal vez una relación ha llegado a un punto importante, ha nacido un niño o ahora forma parte de un grupo donde se siente aceptado y querido. Celébrelo y disfrute, pero recuerde que es solo un alto en el camino de un viaje más prolongado. Indica sensibilidad hacia los demás y capacidad de entrega.',
    invertida: 'Las necesidades del individuo subsumidas en las del grupo. Se interesa demasiado por la diversión y se está olvidando de prepararse para el futuro.',
    element: 'Agua',
    nature: 'Amistad, fiesta'
  },
  {
    id: 'cuatro-copas',
    name: 'Cuatro de Copas',
    number: '4',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Aburrimiento', 'Descontento', 'Decepción', 'Introspección'],
    description: 'Una relación que ya no satisface ni interesa, o bien se siente deprimido y se centra demasiado en sus propias emociones. Hace falta un cambio, que los vientos de este dispersen la niebla que le envuelve. La buena noticia es que la negatividad actual puede ser el impulso necesario para un periodo de revaluación que conducirá a un nuevo camino.',
    invertida: 'Debería evitar la apatía o el ensimismamiento excesivo, porque se perderá las oportunidades y las ofertas de ayuda.',
    element: 'Agua',
    nature: 'Apatía, contemplación'
  },
  {
    id: 'cinco-copas',
    name: 'Cinco de Copas',
    number: '5',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Lucha', 'Encrucijada', 'Arrepentimiento', 'Pérdida emocional'],
    description: 'Una carta difícil que sugiere que algo se ha perdido o que se ha hecho algo malo. Debe arrepentirse y enmendarlo lo mejor que pueda. Hay que aprender las lecciones antes de seguir adelante. Tiene que soltar los "podría haber sido" y afrontar la realidad actual. No ignore su voz interior y sus necesidades espirituales.',
    invertida: 'Se está esforzando por aceptar una pérdida. La actitud pesimista y de autocompasión está siendo un obstáculo para el avance.',
    element: 'Agua',
    nature: 'Duelo, lamentación'
  },
  {
    id: 'seis-copas',
    name: 'Seis de Copas',
    number: '6',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Reunión', 'Restablecimiento', 'Nostalgia', 'Pasado'],
    description: 'Los acontecimientos positivos que indica la carta provienen del pasado; tal vez se ha reavivado una amistad, ha aparecido una pareja de la adolescencia o ha regresado a su ciudad natal. La carta puede indicar también el placer que suponen las actividades infantiles o el tiempo pasado con niños.',
    invertida: 'Cuidado con anhelar el pasado o con malgastar energía en actividades y personas que ya no se ajustan a sus necesidades.',
    element: 'Agua',
    nature: 'Nostalgia, infancia'
  },
  {
    id: 'siete-copas',
    name: 'Siete de Copas',
    number: '7',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Sueño', 'Tentación', 'Posibilidades', 'Ilusión'],
    description: 'Es un momento de múltiples posibilidades, de oportunidades estimulantes que pueden conducir a una gran felicidad. Tal vez se siente tentado por un nuevo interés romántico, o hay algún interesante proyecto creativo o camino espiritual para explorar. Pero ¿qué dirección debería tomar? Lleve la mirada hacia su interior, elija sabiamente y ponga en marcha el trabajo necesario para alcanzar su objetivo.',
    invertida: 'Se ocupa de demasiadas cosas a la vez o se está haciendo ilusiones; un objetivo anhelado puede acabar en decepción.',
    element: 'Agua',
    nature: 'Fantasía, opciones'
  },
  {
    id: 'ocho-copas',
    name: 'Ocho de Copas',
    number: '8',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Dejar ir', 'Transición', 'Cambio de rumbo', 'Alejarse'],
    description: 'El ocho no es una carta cómoda. Nos dice que sabe que el cambio es necesario, pero que no está seguro del todo de cómo hacerlo. Una relación o amistad puede haber llegado al final del camino, o las necesidades de otros son una gran carga para usted. Lo mejor podría ser alejarse, aun cuando eso signifique renunciar a lo conseguido hasta ahora.',
    invertida: 'Las dificultades forman parte de cualquier relación; necesita más tiempo para tomar una decisión.',
    element: 'Agua',
    nature: 'Abandono, búsqueda'
  },
  {
    id: 'nueve-copas',
    name: 'Nueve de Copas',
    number: '9',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Ganancia material', 'Deseos cumplidos', 'Consecución', 'Satisfacción'],
    description: 'Una carta feliz que nos dice que todo va bien y que se ha cumplido un deseo largamente anhelado. Es momento de generosidad y de bienestar; la salud es buena y se siente cómodo y satisfecho por lo alcanzado. Disfrute de los dones que se le han concedido y sea agradecido.',
    invertida: 'El contento y la abundancia pueden derivar en complacencia y codicia; no pierda de vista la moderación. Evite presumir de su buena suerte.',
    element: 'Agua',
    nature: 'Deseos cumplidos'
  },
  {
    id: 'diez-copas',
    name: 'Diez de Copas',
    number: '10',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Armonía', 'Amor y familia', 'Estabilidad', 'Final feliz'],
    description: 'Esta carta apunta a un final feliz y a una época en que todo va bien y reina el amor, la paz y la armonía. Todo el mundo colabora, sin excepción. Se ha logrado una estabilidad duradera y un compromiso sincero. La carta apunta a un matrimonio, nuevos miembros en la familia o el inicio de una relación importante.',
    invertida: 'Una traición o disputa amenaza la felicidad de la familia, grupo o asociación.',
    element: 'Agua',
    nature: 'Plenitud emocional'
  },
  {
    id: 'paje-copas',
    name: 'Paje de Copas',
    number: 'Paje',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Inspiración', 'Renovación', 'Sanación', 'Inocencia emocional'],
    description: 'El paje de copas señala la importancia que una persona joven, emotiva, ingenua e idealista tiene en su vida, o bien indica que debe cuidar de su propia libertad de espíritu. Tal vez ha recuperado la capacidad de confiar tras haber sido herido, o está disfrutando de la emoción de un romance. Los sueños pueden transmitirle información útil o buenas noticias.',
    invertida: 'Puede estar ignorando sus sueños por temor a que le hieran. Tenga valor.',
    element: 'Agua',
    nature: 'Sensibilidad, sueños'
  },
  {
    id: 'caballero-copas',
    name: 'Caballero de Copas',
    number: 'Caballero',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Pasión', 'Excitación', 'Rendición', 'Romance arrebatador'],
    description: 'Los caballeros en sus corceles tienden a representar cambios, y el de copas representa el primer arrebato romántico. Puede representarle a usted o a una pareja, o bien la pasión embriagadora y el puro placer que a veces necesitamos para aprovechar al máximo nuestra vida creativa y emocional. La carta puede apuntar también a una propuesta o invitación.',
    invertida: 'Una pasión devoradora o un interés que le está perjudicando; una persona carismática que es engañosa.',
    element: 'Agua',
    nature: 'Romance, proposición'
  },
  {
    id: 'reina-copas',
    name: 'Reina de Copas',
    number: 'Reina',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Inteligencia emocional', 'Devoción', 'Amor incondicional', 'Empatía'],
    description: 'La reina de copas es una persona afectuosa, atractiva y sensible. Cuando aparece esta carta indica que alguien así desempeña un papel importante en su vida, o bien sugiere la necesidad de explorar su vida interior y aceptar sus verdades emocionales más profundas. La carta representa el amor incondicional de una madre y tal vez la necesidad de una mayor aceptación de uno mismo o la libertad de expresión artística.',
    invertida: 'Una persona admirada no le da el apoyo que esperaba; el interés propio de otra persona le perjudica.',
    element: 'Agua',
    nature: 'Intuición maternal'
  },
  {
    id: 'rey-copas',
    name: 'Rey de Copas',
    number: 'Rey',
    arcano: 'Menor',
    suit: 'copas',
    symbol: '🌊',
    keywords: ['Seguridad emocional', 'Mentor', 'Apoyo', 'Sabiduría emocional'],
    description: 'Una persona amorosa que ofrece una actitud positiva y un apoyo incondicional que le permite florecer emocional o creativamente, como, por ejemplo, un consejero, un maestro espiritual o un mecenas. Esta carta podría indicar también que necesita encontrar estas cualidades en su interior para tener confianza en poder cumplir con su destino.',
    invertida: 'Alguien incapaz de confiar y que, por tanto, intenta hacerse con el control y dominar a los demás. Manténgase alerta contra la hipocresía o la falsedad.',
    element: 'Agua',
    nature: 'Madurez emocional'
  }
];

// ─── Config por palo ─────────────────────────────────

const SUIT_CONFIG = {
  mayor:   { gradient: 'var(--cat-mayor)',  accentColor: '#9b5fc7', lineColor: 'rgba(155,95,199,0.5)',  label: 'Arcano Mayor',  catIcon: '🐈‍⬛' },
  bastos:  { gradient: 'var(--cat-bastos)', accentColor: '#d4801a', lineColor: 'rgba(212,128,26,0.5)',  label: 'Palo de Bastos', catIcon: '🐾' },
  oros:    { gradient: 'var(--cat-oros)',   accentColor: '#d4a847', lineColor: 'rgba(212,168,71,0.5)',  label: 'Palo de Oros',   catIcon: '😺' },
  espadas: { gradient: 'var(--cat-espadas)',accentColor: '#4a90c4', lineColor: 'rgba(74,144,196,0.5)', label: 'Palo de Espadas', catIcon: '🐱' },
  copas:   { gradient: 'var(--cat-copas)', accentColor: '#2ab5a3', lineColor: 'rgba(42,181,163,0.5)', label: 'Palo de Copas',  catIcon: '😸' }
};

// ─── DOM helpers ────────────────────────────────────

const $ = (id) => document.getElementById(id);
const cardsGrid  = $('cardsGrid');
const modal      = $('modalOverlay');
const modalClose = $('modalClose');
const searchInput= $('searchInput');

// ─── Audio Synthesizer (Web Audio API) ──────────────

class TarotSoundSynth {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported in this browser');
    }
  }

  playChime() {
    this.init();
    if (!this.ctx) return;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const t = this.ctx.currentTime;
    
    // Synthesize a major/pentatonic celestial chime
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C chord notes
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.05);
      
      gain.gain.setValueAtTime(0.08, t + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.05 + 1.5);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(t + idx * 0.05);
      osc.stop(t + idx * 0.05 + 1.5);
    });
  }

  playShuffle(durationMs = 1200) {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const interval = 120;
    const tStart = this.ctx.currentTime;
    const ticksCount = Math.floor(durationMs / interval);

    for (let i = 0; i < ticksCount; i++) {
      const t = tStart + (i * interval) / 1000;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(80, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.08);
      
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(t);
      osc.stop(t + 0.1);
    }
  }
}

const synth = new TarotSoundSynth();

// ─── Stars generator ────────────────────────────────

function generateStars() {
  const container = $('stars');
  if (!container) return;
  const N = 120;
  for (let i = 0; i < N; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = [
      `width:${size}px`, `height:${size}px`,
      `top:${Math.random()*100}%`, `left:${Math.random()*100}%`,
      `--dur:${(Math.random()*4+2).toFixed(1)}s`,
      `--delay:${(Math.random()*5).toFixed(1)}s`,
      `--max-op:${(Math.random()*0.6+0.2).toFixed(2)}`
    ].join(';');
    container.appendChild(s);
  }
}

// ─── Build card element ──────────────────────────────

function buildCard(card, index) {
  const cfg = SUIT_CONFIG[card.suit] || SUIT_CONFIG.mayor;
  const article = document.createElement('article');
  article.className = 'tarot-card';
  article.setAttribute('tabindex', '0');
  article.setAttribute('role', 'button');
  article.setAttribute('aria-label', `Carta: ${card.name}`);
  article.dataset.id = card.id;
  article.dataset.suit = card.suit;
  article.style.setProperty('--card-delay', `${(index * 0.03).toFixed(2)}s`);

  const topText = card.arcano === 'Mayor' ? card.number : card.suit.toUpperCase();
  const bottomText = card.arcano === 'Mayor' ? 'ARCANO MAYOR' : card.number;

  article.innerHTML = `
    <div class="card-inner" style="background:${cfg.gradient}">
      <div class="card-accent-line top" style="background:${cfg.lineColor}"></div>
      <span class="card-number">${topText}</span>
      <span class="card-symbol">${card.symbol}</span>
      <span class="card-name">${card.name}</span>
      <span class="card-suit-badge">${bottomText}</span>
      <div class="card-accent-line bot" style="background:${cfg.lineColor}"></div>
    </div>
  `;

  article.addEventListener('click', () => {
    synth.init();
    openModal(card);
  });
  article.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      synth.init();
      openModal(card);
    }
  });

  return article;
}

// ─── Render cards ────────────────────────────────────

function renderCards(list) {
  cardsGrid.innerHTML = '';
  if (list.length === 0) {
    cardsGrid.innerHTML = `<div class="empty-state"><span class="empty-icon">🐾</span>No se encontraron cartas con ese nombre.</div>`;
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach((card, i) => frag.appendChild(buildCard(card, i)));
  cardsGrid.appendChild(frag);
}

// ─── Filter logic ────────────────────────────────────

let currentFilter = 'all';
let currentSearch = '';

function applyFilters() {
  let list = TAROT_CARDS;

  if (currentFilter !== 'all') {
    if (currentFilter === 'mayor') {
      list = list.filter(c => c.suit === 'mayor');
    } else {
      list = list.filter(c => c.suit === currentFilter);
    }
  }

  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.keywords.some(k => k.toLowerCase().includes(q))
    );
  }

  renderCards(list);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value.trim();
  applyFilters();
});

// ─── Modal ───────────────────────────────────────────

function openModal(card) {
  const cfg = SUIT_CONFIG[card.suit] || SUIT_CONFIG.mayor;

  $('modalArcanoBadge').textContent = `${cfg.catIcon} ${cfg.label} · ${card.number}`;
  $('modalCardName').textContent = card.name;
  $('modalDesc').textContent = card.description;
  $('modalInv').textContent = card.invertida;
  $('modalCatIcon').textContent = card.symbol;

  const kw = $('modalKeywords');
  kw.innerHTML = '';
  card.keywords.forEach(k => {
    const pill = document.createElement('span');
    pill.className = 'keyword-pill';
    pill.textContent = k;
    kw.appendChild(pill);
  });

  const meta = $('modalMeta');
  meta.innerHTML = [
    { label: 'Arcano', value: card.arcano },
    { label: 'Palo',   value: card.suit === 'mayor' ? 'Arcanos Mayores' : `Palo de ${card.suit.charAt(0).toUpperCase() + card.suit.slice(1)}` },
    { label: 'Número', value: card.number },
    { label: 'Elemento', value: card.element || '—' },
    { label: 'Naturaleza', value: card.nature || '—' }
  ].map(m => `<span class="meta-chip"><span>${m.label}:</span> ${m.value}</span>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

// ─── Tab Navigation Logic ────────────────────────────

const tabCatalog = $('tabCatalog');
const tabReading = $('tabReading');
const catalogView = $('catalogView');
const readingView = $('readingView');

function switchTab(target) {
  synth.init();
  if (target === 'catalog') {
    tabCatalog.classList.add('active');
    tabReading.classList.remove('active');
    catalogView.classList.add('active');
    readingView.classList.remove('active');
  } else {
    tabCatalog.classList.remove('active');
    tabReading.classList.add('active');
    catalogView.classList.remove('active');
    readingView.classList.add('active');
  }
}

tabCatalog.addEventListener('click', () => switchTab('catalog'));
tabReading.addEventListener('click', () => switchTab('reading'));

// ─── Tarot Reading Logic ─────────────────────────────

const readingBoard = $('readingBoard');
const readingInterpretation = $('readingInterpretation');

const SPREADS = {
  1: {
    name: 'Tirada Rápida',
    cardsCount: 1,
    labels: ['Consejo del día']
  },
  3: {
    name: 'Tirada del Destino',
    cardsCount: 3,
    labels: ['Pasado', 'Presente', 'Futuro']
  },
  5: {
    name: 'La Pata del Gato',
    cardsCount: 5,
    labels: [
      'Carta 1 (Base): Dónde se encuentra ahora',
      'Carta 2 (Dedo Izquierdo): Hacia dónde se dirige',
      'Carta 3 (Dedo Medio Izquierdo): Fuerzas exteriores',
      'Carta 4 (Dedo Medio Derecho): Fuerzas interiores',
      'Carta 5 (Dedo Derecho): Consejo o resultado'
    ]
  }
};

let activeReading = {
  spreadId: null,
  cards: [],
  flippedCount: 0
};

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initReading(spreadId) {
  synth.init();
  activeReading.spreadId = spreadId;
  activeReading.cards = [];
  activeReading.flippedCount = 0;

  document.querySelectorAll('.reading-btn').forEach(btn => {
    if (parseInt(btn.dataset.spread) === spreadId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  readingInterpretation.style.display = 'none';
  readingInterpretation.innerHTML = '';

  readingBoard.className = 'reading-board shuffling-active';
  synth.playShuffle(1200);

  readingBoard.innerHTML = `
    <div class="spread-row-layout">
      <div class="reading-card-wrapper shuffling"><div class="reading-card-inner"><div class="reading-card-back"><div class="card-back-ornament"><span class="back-symbol">🐾</span></div></div></div></div>
      <div class="reading-card-wrapper shuffling"><div class="reading-card-inner"><div class="reading-card-back"><div class="card-back-ornament"><span class="back-symbol">🐾</span></div></div></div></div>
      <div class="reading-card-wrapper shuffling"><div class="reading-card-inner"><div class="reading-card-back"><div class="card-back-ornament"><span class="back-symbol">🐾</span></div></div></div></div>
    </div>
  `;

  setTimeout(() => {
    drawCardsForSpread(spreadId);
  }, 1200);
}

function drawCardsForSpread(spreadId) {
  const config = SPREADS[spreadId];
  const shuffledDeck = shuffleArray(TAROT_CARDS);
  
  for (let i = 0; i < config.cardsCount; i++) {
    activeReading.cards.push({
      card: shuffledDeck[i],
      inverted: Math.random() < 0.5,
      flipped: false
    });
  }

  readingBoard.className = 'reading-board';
  readingBoard.innerHTML = '';

  let layoutContainer;
  if (spreadId === 5) {
    layoutContainer = document.createElement('div');
    layoutContainer.className = 'paw-layout';
    
    layoutContainer.innerHTML = `
      <div class="paw-background">
        <div class="paw-pad main-pad"></div>
        <div class="paw-pad toe-pad toe-1"></div>
        <div class="paw-pad toe-pad toe-2"></div>
        <div class="paw-pad toe-pad toe-3"></div>
        <div class="paw-pad toe-pad toe-4"></div>
      </div>
    `;
  } else {
    layoutContainer = document.createElement('div');
    layoutContainer.className = 'spread-row-layout';
  }

  activeReading.cards.forEach((item, index) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = `reading-card-wrapper ${spreadId === 5 ? `pos-${index + 1}` : ''}`;
    
    const cardInner = document.createElement('div');
    cardInner.className = 'reading-card-inner';
    
    const cardBack = document.createElement('div');
    cardBack.className = 'reading-card-back';
    cardBack.innerHTML = `
      <div class="card-back-ornament">
        <span class="back-symbol">🐾</span>
        <span class="back-stars">✦ ✦ ✦</span>
      </div>
    `;
    
    const cardFront = document.createElement('div');
    cardFront.className = 'reading-card-front';
    const faceEl = buildCard(item.card, index);
    cardFront.appendChild(faceEl);

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    cardWrapper.appendChild(cardInner);

    const label = document.createElement('span');
    label.className = 'slot-label';
    label.textContent = config.labels[index].split(': ')[0];
    cardWrapper.appendChild(label);

    cardInner.addEventListener('click', (e) => {
      e.stopPropagation();
      if (item.flipped) return;

      item.flipped = true;
      synth.playChime();
      
      cardWrapper.classList.add('flipped');
      if (item.inverted) {
        cardWrapper.classList.add('is-inverted');
      }

      activeReading.flippedCount++;
      
      if (activeReading.flippedCount === config.cardsCount) {
        setTimeout(showReadingInterpretation, 1500);
      }
    });

    layoutContainer.appendChild(cardWrapper);
  });

  readingBoard.appendChild(layoutContainer);
}

function showReadingInterpretation() {
  const config = SPREADS[activeReading.spreadId];
  
  let reportHtml = `
    <div class="interpretation-header">
      <h3 class="interpretation-title">✦ Interpretación de tu Tirada: ${config.name} ✦</h3>
      <span class="interpretation-divider">🐾 ✦ 🐾 ✦ 🐾</span>
    </div>
    <div class="interpretation-list">
  `;

  activeReading.cards.forEach((item, index) => {
    const card = item.card;
    const posLabel = config.labels[index];
    const isInv = item.inverted;
    
    const cardPreviewHtml = `
      <div class="interpretation-card-preview">
        <span class="interpretation-pos-badge">${posLabel.split(': ')[0]}</span>
        <div class="tarot-card ${isInv ? 'is-inverted' : ''}" style="transform: ${isInv ? 'rotate(180deg)' : 'none'}; pointer-events: none;">
          <div class="card-inner" style="background: ${(SUIT_CONFIG[card.suit] || SUIT_CONFIG.mayor).gradient}">
            <div class="card-accent-line top" style="background: ${(SUIT_CONFIG[card.suit] || SUIT_CONFIG.mayor).lineColor}"></div>
            <span class="card-number">${card.arcano === 'Mayor' ? card.number : card.suit.toUpperCase()}</span>
            <span class="card-symbol">${card.symbol}</span>
            <span class="card-name">${card.name}</span>
            <span class="card-suit-badge">${card.arcano === 'Mayor' ? 'ARCANO MAYOR' : card.number}</span>
            <div class="card-accent-line bot" style="background: ${(SUIT_CONFIG[card.suit] || SUIT_CONFIG.mayor).lineColor}"></div>
          </div>
        </div>
      </div>
    `;

    const nameText = isInv ? `${card.name} <span class="inverted-indicator">(Invertida)</span>` : card.name;
    const meaningText = isInv ? card.invertida : card.description;

    const keywordsList = card.keywords.map(k => `<span class="keyword-pill">${k}</span>`).join('');

    reportHtml += `
      <div class="interpretation-item">
        ${cardPreviewHtml}
        <div class="interpretation-text">
          <h4 class="interpretation-card-name ${isInv ? 'is-inverted-text' : ''}">${posLabel.includes(': ') ? posLabel.split(': ')[1] : posLabel}: ${nameText}</h4>
          <p class="interpretation-desc ${isInv ? 'is-inverted-meaning' : ''}">${meaningText}</p>
          <div class="interpretation-keywords">
            ${keywordsList}
          </div>
        </div>
      </div>
    `;
  });

  reportHtml += `</div>`;
  
  readingInterpretation.innerHTML = reportHtml;
  readingInterpretation.style.display = 'block';
  
  readingInterpretation.scrollIntoView({ behavior: 'smooth' });
}

$('btnSpread1').addEventListener('click', () => initReading(1));
$('btnSpread3').addEventListener('click', () => initReading(3));
$('btnSpread5').addEventListener('click', () => initReading(5));

// ─── Init ────────────────────────────────────────────

generateStars();
renderCards(TAROT_CARDS);

// Log card count
console.log(`🐱 El Tarot de los Gatos cargado con ${TAROT_CARDS.length} cartas.`);
