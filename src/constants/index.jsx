export const genericUsers = [
  {
    idUser: 1,
    name: "Usuario 1",
    user: "usuario1@correo.com",
    password: "CrU0r!yO6oc+@r$6RONU",
  },
];

//Var to save COLORS
export const COLORS = {
  //app colors
  primary1: "#E73439",
  primary2: "#E7686B",
  primary3: "#ED9093",
  secondary1: "#000000",
  secondary2: "#373532",
  secondary3: "#53504C",
  tertiary1: "#A19688",
  brightContrast: "#FAFAFA",
  white: "#FFFFFF",
  disabled1: "#F1F1F1",
  disabled2: "#E8E8E8",
  disabled3: "#A5A5A5",
  backgroundApp: "#FAFAFA",
  greenTrafficLight: "#7BB662",
  yellowTrafficLight: "#F5BD1E",
  redTrafficLight: "#E7686B",
  //Colors for the different stages
  preconcepcion: "#E5CFBA",
  embarazo: "#CBB7A4",
  posparto: "#B09F8F",
  infancia: "#8E8174",
  preescolar: "#5E544B",
};

export const indicators = [
  {
    idIndicator: 1,
    key: "PTNF148",
    name: "Estrategias de control de peso",
    target: "Mujeres en etapa de preconcepción",
    stage: "Preconcepción",
    color: COLORS.preconcepcion,
    evaluation: `Las estrategias de control de peso antes del embarazo pueden incluir enfoques dietéticos, de ejercicio, médicos y quirúrgicos. Cuando se implementan antes del embarazo, los beneficios para la salud pueden trasladarse a embarazos futuros.
  
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1.-A partir de los expedientes seleccionados identificar la fecha de última menstruación, la cual aparece en la historia clínica perinatal y en la primera nota médica de control de embarazo.
      2.-Se identificará las notas médicas/nutrición de evolución (sin importar el motivo de consulta) que correspondan a 3 meses previos de la fecha de última menstruación.
      3.- Dentro de las notas de evolución se identificarán recomendaciones de tipo dietético, ejercicio, médico o quirúrgico como:
      -Dietético: Se recomienda como generalidad una dieta de menos de 1200 kcal al día en pacientes adultos, Se sugiere elegir un patrón dietético de alimentos saludables, como la dieta DASH (Dietary Approaches to Stop Hypertension)
      -Ejercicio: Se recomienda la realización de actividad física al menos 5 a 7 días por semana durante 30 minutos.
      -Médico: Los candidatos para iniciar farmacoterapia son aquellos pacientes con un IMC > 30 kg/m2, o un IMC de 27 a 29.9 kg/m2 con comorbilidades, que no han alcanzado las metas de pérdida de peso, (perder al menos 5% del peso corporal total a los 3 o 6 meses) con una adecuada intervención de cambios en el estilo de vida. Dentro de los fármacos se encuentra orlistat, lorcaserina, fentermina.
      -Quirúrgico: Los candidatos a Cirugía bariátrica deben ser adultos con un IMC > 40 kg/m2, o con un IMC de 35 a 39.9 kg/m2 con al menos una comorbilidad severa (DM tipo 2, hipertensión arterial) que no han
      alcanzado las metas de pérdida de peso con dieta, ejercicio y farmacoterapia.
      **Se considerará como cumplimiento los casos en los cuales se identifiquen cualquier tipo de recomendaciones dietéticas, ejercicio, médicas o quirúrgicas.
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 1,
        Question: "Valor de IMC",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "IMC", placeholder: "IMC" },
          { value: "No encontrado", key: "998" },
          // { value: "No aplica", key: "999" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        forCalculation: true,
        Question: "Recomendaciones dietéticas",
        subindicator: 1.1,
        nameSubindicator: "Recomendaciones dietéticas",
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Recomendaciones de ejercicio",
        subindicator: 1.2,
        nameSubindicator: "Recomendaciones de ejercicio",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Comorbilidades",
        subindicator: 1.3,
        nameSubindicator: "Recomendaciones médicas",
        forCalculation: true,
        enabled: false,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Intervención de estilo de vida no exitosa",
        subindicator: 1.3,
        nameSubindicator: "Recomendaciones médicas",
        forCalculation: true,
        enabled: false,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question: "Tratamiento farmacológico no exitoso",
        subindicator: 1.4,
        nameSubindicator: "Recomendaciones quirúrgicas",
        forCalculation: true,
        enabled: false,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 7,
        typeQuestion: 3,
        Question: "Recomendaciones médicas",
        subindicator: 1.3,
        nameSubindicator: "Recomendaciones médicas",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 8,
        typeQuestion: 3,
        Question: "Recomendaciones quirúrgicas",
        subindicator: 1.4,
        nameSubindicator: "Recomendaciones quirúrgicas",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 9,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 2,
    key: "PTF150",
    name: "Suplementación con ácido fólico",
    target: "Mujeres en etapa de preconcepción",
    stage: "Preconcepción",
    color: COLORS.preconcepcion,
    evaluation: `Se recomienda la suplementación con ácido fólico (400 mcg/d) en los 3 meses previos a la concepción.
  
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados identificar la fecha de última menstruación, la cual aparece en la historia clínica perinatal y en la primera nota médica de control de embarazo.
      2. Revisar las notas médicas hasta 3 meses previos a la concepción.
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Suplementación con acido fólico (400 mcg/d)",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 3,
    key: "ETF155_2",
    name: "Suplementación en el embarazo",
    target: "Mujeres embarazadas",
    stage: "Embarazo",
    color: COLORS.embarazo,
    evaluation: `Debe recomendarse la suplementación con ácido fólico (al menos 0,4 mg) durante el embarazo.
      Debe recomendarse la suplementación con vitamina D (400 UI) durante el embarazo.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1.-Se identificarán las notas médicas de evolución del control del embarazo.
      2.- Dentro de las notas médicas de evolución en la sección de tratamiento deberá estar claramente identificado la prescripción de ácido fólico con
      una dosis mínima de 4 mg al día y vitamina D de 400 UI, en al menos una nota en el periodo de 0 a 12 semanas de gestación.`,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 1,
        Question: "Semana de gestación (de acuerdo a última nota)",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Semana" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question:
          "La paciente cuenta con consultas en las primeras 12 semanas de gestación",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Paciente cuenta con prescripción de ácido fólico",
        subindicator: 3.1,
        nameSubindicator: "Suplementación en embarazo, acido fólico",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Se describe la dosis requerida (mínimo de 4 mg)",
        subindicator: 3.1,
        nameSubindicator: "Suplementación en embarazo, acido fólico",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
          { value: "No aplica", key: "999" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Paciente cuenta con prescripción de vitamina D",
        subindicator: 3.2,
        nameSubindicator: "Suplementación en embarazo, vitamina D",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question: "Se describe la dosis requerida (400 UI)",
        subindicator: 3.2,
        nameSubindicator: "Suplementación en embarazo, vitamina D",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
          { value: "No aplica", key: "999" },
        ],
      },
      {
        idQuestion: 7,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 4,
    key: "ED211",
    name: "Detección de anemia",
    target: "Mujeres embarazadas",
    stage: "Embarazo",
    color: COLORS.embarazo,
    evaluation: `Un calendario de citas prenatales debe ser determinado por la función de las citas. Para una mujer nulípara con un embarazo sin complicaciones, un programa de 10 citas debería ser adecuado. Para una mujer que ya ha tenido hijos y tiene un embarazo sin complicaciones, un cronograma de 7 citas debería ser adecuado.
  
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. Se localiza el formato "historia clínica perinatal"
      2. Dentro del formato se buscarán lo siguiente:
      - Registro de las fechas de consulta.
      -En antecedentes personales se buscará si tiene antecedentes al menos un parto previo.
      -En cada consulta se deberá identificar si fue registrado el peso de la paciente
      3. Se identificará si el expediente (folder) o tarjeta de control contiene un sello o marca que identifique a la paciente como de riesgo.
      4. Una vez identificadas estos tres aspectos se procederá a realizar el conteo de las consultas registradas en el tarjetero o mediante las notas médicas que contenga el expediente a partir del diagnóstico de
      embarazo.
      - Para mujeres sin complicaciones y sin antecedentes de parto previo deberá tener ideal de 10 consultas, las cuales de preferencia deben distribuirse de la siguiente manera:
      1 ª consulta: entre las 6 - 8 semanas;
      2 ª consulta: entre 10 - 16 semanas;
      3 ª consulta: entre 16 - 18 semanas;
      4 ª consulta: 22 semanas;
      5 ª consulta: 28 semanas;
      6 ª consulta: 32 semanas;
      7 ª consulta: 36 semanas; y
      8 ª consulta: entre 38 - 41 semanas.
      -En caso de mujeres sin complicaciones y con antecedentes de parto previo el número adecuado de consultas es de 7.
      NOTA: Para este indicador deberán contar con 30 mediciones de pacientes embarazadas sin complicaciones.
      
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 1,
        Question: "Semana de gestación",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Semana" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Registro de semana de gestación por",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "USG", key: "0" },
          { value: "FUM", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question:
          "Solicitud de biometría hemática en la primer consulta de embarazo",
        subindicator: 4.1,
        nameSubindicator: "Biometría hemática en la primer consulta",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Solicitud de Biometría hemática alrededor de la semana 28",
        subindicator: 4.2,
        nameSubindicator: "Biometría hemática alrededor de la semana 28",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
          { value: "No aplica", key: "999" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 1,
        Question: "Número de biometrías hemáticas solicitadas",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Biometrías" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 5,
        forCalculation: false,
        enabled: true,
        Question: "Anotar las semanas de gestación cuando fueron solicitadas",
        subindicator: 0,
        nameSubindicator: "",
        possibleAnswers: [],
      },
      {
        idQuestion: 7,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 5,
    key: "ES142",
    name: "Adecuado seguimiento",
    target: "Mujeres embarazadas",
    stage: "Embarazo",
    color: COLORS.embarazo,
    evaluation: `A las mujeres embarazadas se les debe ofrecer una prueba de detección de anemia. Las pruebas de detección deben realizarse al principio del embarazo (en la primera cita) y a las 28 semanas cuando se realizan otras pruebas de detección de sangre. Esto da tiempo suficiente para el tratamiento si se detecta anemia.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados identificar los registros de la HCP y las notas médicas de control de embarazo, en particular la primera nota y la que se encuentre alrededor de la semana 28 (27,28,29).
      2. Revisar los registros en la HCP y notas médicas de control de embarazo.
      3. Se deberá identificar: solicitud de "Biometría hemática" en el primer registro tanto de la HCP o en la nota médica de control de embarazo (una vez confirmado el embarazo), así como en la semana 28 de embarazo. Se podrá contabilizar la solicitud de Biometría hemática en la consulta previa.
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 1,
        subindicator: 0,
        nameSubindicator: "",
        Question: "Semana de gestación (de acuerdo a última  nota)",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Semana" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Registro de semana de gestación por",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "USG", key: "0" },
          { value: "FUM", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Paciente con antecedentes de parto previo",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "La paciente es identificada como embarazo de riesgo",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 1,
        Question: "Número de consultas",
        subindicator: 5.1,
        nameSubindicator: "Número adecuado de consultas médicas",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Consultas" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question: "Se registró el peso de la paciente en cada consulta",
        subindicator: 5.2,
        nameSubindicator: "Registro del peso de la paciente en cada consulta",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },

      {
        idQuestion: 7,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 6,
    key: "ETF60",
    name: "Evaluación nutricional y suplementación de vitaminas en embarazo en adolescentes",
    target: "Mujeres embarazadas + adolescentes",
    stage: "Embarazo",
    color: COLORS.embarazo,
    evaluation: `Las adolescentes embarazadas deben tener una evaluación nutricional, suplementación con vitaminas si son necesarias, y acceso a una estrategia para reducir la anemia y el bajo peso al nacer y para optimizar el aumento de peso en el embarazo.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. Identificar los expedientes de mujeres adolescentes en el tarjetero o censo de embarazadas
      2. A partir de los expedientes seleccionados identificar las notas médicas de control de embarazo y en la historia clínica perinatal
      3. Revisar las notas médicas de control de embarazo y la historia clínica perinatal
      4. Se deberá identificar en la primera nota de control de embarazo el cálculo de IMC y su clasificación (bajo peso, normal, sobrepeso u obesidad).
      5. Se deberá identificar si existe el diagnóstico de anemia.
      6. Se deberá identificar la suplementación de hierro, ácido fólico y calcio.
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 1,
        Question: "Semana de gestación (de acuerdo a última  nota)",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Semana" },
          { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 1,
        Question: "Valor de IMC",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "IMC" },
          { value: "No encontrado", key: "998" },
          // { value: "No aplica", key: "999" },
        ],
      },

      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Diagnóstico nutricional",
        subindicator: 6.1,
        nameSubindicator: "Diagnóstico nutricional",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Diagnóstico de anemia",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Indicación de hierro",
        subindicator: 6.2,
        nameSubindicator: "Indicación de hierro y acido fólico",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question: "Indicación de ácido fólico",
        subindicator: 6.2,
        nameSubindicator: "Indicación de hierro y acido fólico",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 7,
        typeQuestion: 5,
        forCalculation: false,
        enabled: true,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 7,
    key: "PPTNF71",
    name: "Orientación sobre técnicas para un agarre eficaz, masaje mamario y extracción de leche",
    target: "Mujeres en periodo posparto",
    stage: "Posparto",
    color: COLORS.posparto,
    evaluation: `A todas las madres se les deberá enseñar técnicas de masaje mamario y extracción manual de leche materna durante su estancia y, si lo desean, se les enseñará a utilizar un sacaleches. Se les enseñará a las madres y familias que la obtención de sólo unos pocos mililitros es frecuente durante los primeros episodios de extracción de leche, y no significa una baja producción de leche.
      Mostrar a la madre técnicas para facilitar un agarre eficaz, con especial atención al apoyo correcto de la mandíbula y la cabeza.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos: 1. A partir de los expedientes seleccionados identificar los registros de la primera nota médica posterior a la atención del parto.
      2. Se deberá identificar: registro de orientación en relación al masaje mamario y a la extracción manual de leche materna.
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Se orienta sobre masaje mamario",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Se orienta sobre extracción manual de leche materna",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question:
          "Existe registro donde se indique que se orientó sobre técnicas para facilitar un agarre eficaz",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Se orienta sobre apoyo correcto de mandibula",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Se orienta sobre apoyo correcto de cabeza",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 8,
    key: "PPTNF161",
    name: "Control de peso en el posparto",
    target: "Mujeres en periodo posparto",
    stage: "Posparto",
    color: COLORS.posparto,
    evaluation: `Se sugiere asesoramiento sobre el control del peso en el posparto para minimizar los riesgos en embarazos posteriores.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados identificar los registros de la primera nota médica posterior a la atención del parto.
      2. Se deberá identificar: registro de orientación sobre control de peso 
      Ejemplo:
      - Reducir el uso de sal y el consumo de alimentos con alto contenido de sodio.
      - Limitar el consumo de bebidas azucaradas y de alimentos con Elevado contenido de grasas, azúcar y sal.
      - Come despacio, masticando bien, y no realices otras actividades al mismo tiempo (leer, ver TV, etc.)
      - Camina diariamente en tus desplazamientos, sube escaleras, etc.
      Además, si te es posible, realiza ejercicio físico 30-45 minutos, 3 días por semana de forma regular.
      
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Se orienta sobre control del peso",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question:
          "Se orienta sobre reducir el uso de sal y el consumo de alimentos con alto contenido de sodio",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question:
          "Se orienta sobre limitar el consumo de bebidas azucaradas y de alimentos con elevado contenido de azúcar",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question:
          "Se orienta sobre limitar el consumo de alimentos con elevado contenido de grasas",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question:
          "Se orienta sobre realizar ejercicio físico 30-45 minutos, 3 días por semana de forma regular",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 5,
        forCalculation: false,
        enabled: true,
        Question:
          "Registrar que orientación se dió, si es distinta a las señaladas",
        subindicator: 0,
        nameSubindicator: "",
        possibleAnswers: [],
      },

      {
        idQuestion: 7,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 9,
    key: "ITNF185",
    name: "Promoción de lactancia materna exclusiva, lactancia continuada y alimentación complementaria",
    target: "Infantes",
    stage: "Infancia",
    color: COLORS.infancia,
    evaluation: `Se recomienda promover y soportar la lactancia materna.
      Todos los bebés deben ser amamantados exclusivamente desde el nacimiento hasta los 6 meses de edad para lograr un crecimiento,desarrollo y salud óptimos, A partir de entonces, para satisfacer sus cambiantes necesidades nutricionales, los lactantes deben recibir alimentos complementarios  nutricionalmente adecuados y seguros mientras la lactancia materna continúa hasta los dos años de edad o másementaria.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados identificar la primera y la última nota de evolución, así como, los registros del seguimiento en la tarjeta de control, donde se señala la lactancia materna. En los casos, en los cuales la tarjeta que se encuentra activa no incluya información del menor cuando tenía menos de 6 meses, deberán identificar la tarjeta de control nutricional más antigua.
      2. En la primera nota o tarjeta (debe coincidir cuando el infante tiene entre 0 a 6 meses), revisar que esté escrito la recomendación de alimentación exclusiva al seno materno hasta los 6 meses de edad. Esta
      información servirá para evaluar "Promoción de lactancia materna"; este también podrá ser evaluado con los registros en tarjetero cuando esté marcado el ítem de "exclusiva en menores de 6 meses".
      3. Para evaluar el seguimiento a la "lactancia materna continuada", en la última nota o tarjeta de control (que corresponda cuando el infante tiene entre 6 meses a 2 años de edad) deberá revisar si se recomendó continuar con la lactancia hasta los 2 años o bien en la tarjeta de control que esté marcado en la sección de lactancia materna "de 6 meses a menores de 3 años", en este mismo periodo se evaluará si se recomendó alimentación complementaria a partir de los 6 meses, en el caso de la tarjeta deberá estar marcado el rubro de "Orientación alimentaria"
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Tiene consultas antes de los 6 meses de edad",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },

      {
        idQuestion: 2,
        typeQuestion: 3,
        Question:
          "Promoción de lactancia materna exclusiva en menores de 6 meses",
        subindicator: 9.1,
        nameSubindicator:
          "Promoción de lactancia materna exclusiva en menores de 6 meses",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
          { value: "No aplica", key: "999" },
        ],
      },

      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Promoción de lactancia materna continuada >6 meses a 2 años",
        subindicator: 9.2,
        nameSubindicator:
          "Promoción de lactancia materna continuada >6 meses a 2 años",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question:
          "Recomendación de alimentación complementaria a partir de los 6 meses de edad y no antes de esa edad",
        subindicator: 9.2,
        nameSubindicator:
          "Promoción de lactancia materna continuada >6 meses a 2 años",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 5,
        Question: "Registrar que alimentación complementaria se recomendó",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },

      {
        idQuestion: 6,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 10,
    key: "ID745",
    name: "Valoración del estado nutricional",
    target: "Infantes",
    stage: "Infancia",
    color: COLORS.infancia,
    evaluation: `Valorar el estado nutricional de la niña o del niño en cada consulta.
      La valoración del estado de nutrición debe basarse en una evaluación que comprende: historia dietética, social y económica, historia clínica con énfasis en los datos antropométricos y signos de desnutrición.
      Signos de desnutrición: irritabilidad, llanto excesivo, déficit de atención, piel seca, pérdida de pelo, falta de fuerza y disminución de la masa muscular, abdomen y piernas hinchadas.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados y de las tarjetas de control identificar lo siguiente:
      a) Historia dietética
      b) Historia social y económica
      c) Tarjeta de control (últimos 3 registros): identificar registro de peso, talla, peso para la talla, peso para la edad.
      d) En las últimas tres notas de evolución verificar si existe diagnóstico de desnutrición y si se registran signos de desnutrición en los casos que corresponda. Si en la columna se evalúa como no desnutrido, en la siguiente columna de "registro de signos de desnutrición" se colocará NA (no aplica)
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Cuenta con historia dietética",
        subindicator: 10.1,
        nameSubindicator: "Historia dietética",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Cuenta con historia social y económica",
        subindicator: 10.2,
        nameSubindicator: "Historia social y económica",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Registro de peso",
        subindicator: 10.3,
        nameSubindicator: "Diagnóstico nutricional",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Registro de talla",
        subindicator: 10.3,
        nameSubindicator: "Diagnóstico nutricional",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Registro de valoración de peso para la talla",
        subindicator: 10.3,
        nameSubindicator: "Diagnóstico nutricional",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question: "Registro de valoración de peso para la edad",
        subindicator: 10.3,
        nameSubindicator: "Diagnóstico nutricional",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 7,
        typeQuestion: 3,
        Question: "Se evalua el infante como desnutrido",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 8,
        typeQuestion: 3,
        Question: "Registro de signos de desnutrición",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
          { value: "No aplica", key: "999" },
        ],
      },
      {
        idQuestion: 9,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 11,
    key: "ITNF648",
    name: "Recomendación de reducción de ingesta energética y comida rápida en infantes con obesidad",
    target: "Infantes + obesidad",
    stage: "Infancia",
    color: COLORS.infancia,
    evaluation: `Recomendamos la reducción de la ingesta energética total y el consume de comida rápida en obesidad.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados se identificará aquellos que cuenten con el diagnóstico de obesidad de acuerdo a la tarjeta de control.
      2.- De acuerdo a la fecha en donde se confirme el diagnóstico de obesidad se localiza la nota de evolución correspondiente a la fecha del diagnóstico.
      3.- Se buscará en las primeras dos notas a partir del diagnóstico las siguientes recomendaciones.
      -Reducción de la ingesta energética total (buscar notas en las que se recomiende disminución de alimentos ricos en azúcares o de comidas que se consideren con alto contenido energético como harinas, pastas, etc.)
      - Reducción de consumo de comida rápida.    
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Recomienda reducción de la ingesta energética total",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Recomienda reducción de consumo de comida rápida",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },

      {
        idQuestion: 3,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 12,
    key: "IS879",
    name: "Seguimiento a pacientes con desnutrición",
    target: "Infantes + desnutrición",
    stage: "Infancia",
    color: COLORS.infancia,
    evaluation: `Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados se identificarán aquellos que cuenten con el diagnóstico de desnutrición de la siguiente forma:
      -Se localiza en la tarjeta de control del estado de nutrición del niño y el adolescente la variable llamada "diagnóstico nutricional"
      -Se incluirán en la medición aquellos pacientes identificados con desnutrición (D), desnutrición leve (DL), Desnutrición moderada (DM)
      2.- De acuerdo a la fecha en donde se confirme el diagnóstico de desnutrición se localiza la nota de evolución correspondiente a la fecha del diagnóstico.
      3.- Se buscará en las notas a partir del diagnóstico las siguientes acciones:
      a) Controles de hemoglobina
      b) Completar esquema de vacunación (para identificar esta variable se puede hacer de dos formas, la primera es mediante el rastreo del paciente en el censo de vacunación y la segunda que en las notas de
      evolución se encuentre anotado que el paciente cuenta con su esquema completo).
      c) Fomentar una alimentación familiar favorable
      d) Incentivar la lactancia materna
      e) Fomentar el consumo de agua segura y lavado de manos
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Controles de hemoglobina",
        forCalculation: true,
        enabled: true,
        subindicator: 0,
        nameSubindicator: "",
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 1,
        Question: "Número de controles de hemoglobina ",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [
          { value: "value", key: "", placeholder: "Controles" },
          // { value: "No encontrado", key: "998" },
          // { value: "No aplica", key: "999" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Completar esquema de vacunación completo para la edad",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Fomentar una alimentación familiar favorable",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Incentivar la lactancia materna",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question: "Fomentar el consumo de agua segura y lavado de manos",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },

      {
        idQuestion: 7,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 13,
    key: "ID451",
    name: "Detección oportuna e identificación de factores de riesgo para el desarrollo de anemia por deficiencia de hierro en pacientes menores de dos años con desnutrición",
    target: "Infantes + desnutrición",
    stage: "Infancia",
    color: COLORS.infantes,
    evaluation: `En todo paciente con desnutrición el personal de salud deberá prevenir y descartar la presencia de Anemia por Deficiencia de Hierro (ADH), sobre todo en estadios tempranos donde los niños suelen estar asintomáticos, por lo que se recomienda realizar identificación temprana de los factores de riesgo que alteran los depósitos de Fe.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados con base en la tarjeta de control nutricional que se encuentran en los apartados de desnutrición:
      2. Identificar identificar la nota donde se diagnostica desnutrición.
      3. Revisar que al momento del diagnóstico se solicite una Biometría hemática completa y coproparasitoscópico, además se registre las condiciones al nacimiento.
      4. Revisar que en los registros en tarjetero estén registrados los datos de peso al nacimiento, talla al nacimiento, y semanas de gestación, además de "tipo de alimentación" (lactancia materna, alimentación
      complementaria, integración a la dieta familiar).
      `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Solicitud de Biometría Hemática",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Solicitud de coproparasitoscopico",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Registro de tipo de alimentación",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question:
          "Registro en tarjeta de peso, talla y semanas de gestación al nacimiento",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question:
          "Registro de diagnóstico Anemia por Deficiencia de Hierro (ADH)",
        forCalculation: false,
        enabled: true,
        subindicator: 0,
        nameSubindicator: "",
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 14,
    key: "PETNF965",
    name: "Recomendaciones de actividad física y nutricionales",
    target: "Preescolares",
    stage: "Preescolar",
    color: COLORS.preescolar,
    evaluation: `Se recomienda que niños y adolescentes realicen al menos alguna de las
      siguientes actividades:
      • Actividad física 2 o 3 horas por semana,
      • Ejercicio aeróbico 3 veces por semana 30 a 90 minutos,
      • Traslados activos caminando o en bicicleta.
      
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados se identificará en notas de evolución al menos una de las siguientes recomendaciones:
      • Actividad física 2 o 3 horas por semana (caminar, juegos que impliquen movimientos como correr, saltar etc.)
      • Ejercicio aeróbico 3 veces por semana 30 a 90 minutos
      • Traslados activos caminando o en bicicleta
      2. Se identificará en las notas de evolución las siguientes
      recomendaciones:
      • Se recomienda evitar el consumo de cereales refinados (harinas blancas, pan blanco, harina de maíz) y bebidas azucaradas como jugos de frutas, jugos industrializados, aguas de sabor y refrescos.
      • Se recomienda el consumo de frutas y verduras
      • Se recomienda diario de carnes, aves, vísceras y/o pescado.
      *NOTA: se dará por cumplido, si se cuenta con esta recomendación al menos en una de las notas correspondientes al año de evaluación    
  `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Se recomienda actividad física 2 a 3 horas por semana",
        subindicator: 14.1,
        nameSubindicator: "Recomendaciones de actividad física o ejercicio",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question:
          "Se recomienda ejercicio aeróbico 3 veces por semana 30 a 90 minutos",
        subindicator: 14.1,
        nameSubindicator: "Recomendaciones de actividad física o ejercicio",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Se recomiendan traslados activos caminando o en bicicleta",
        subindicator: 14.1,
        nameSubindicator: "Recomendaciones de actividad física o ejercicio",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question:
          "Se recomienda evitar consumo de cereales refinados y bebidas azucaradas",
        subindicator: 14.2,
        nameSubindicator: "Recomendaciones nutricionales",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Se recomienda el consumo de fruta y verdura",
        subindicator: 14.2,
        nameSubindicator: "Recomendaciones nutricionales",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 3,
        Question:
          "Se recomienda consumo diario de carnes, aves, vísceras y/o pescado",
        subindicator: 14.2,
        nameSubindicator: "Recomendaciones nutricionales",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 7,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 15,
    key: "PED893",
    name: "Preescolares con valoración antropométrica",
    target: "Preescolares",
    stage: "Preescolar",
    color: COLORS.preescolar,
    evaluation: `El personal de salud deberá realizar somatometría (peso y talla) en todos los menores de cinco años y comparar el peso para la talla. talla para edad y peso para la edad con base en los estándares de la OMS por edad y sexo. Se recomienda que el profesional de la salud considere el uso de tablas específicas para niños y adolescentes que presenten alguna comorbilidad (prematuros, síndrome de Down, síndrome de sobrecrecimiento, síndrome de Turner u otras cromosomopatías y casos
        especiales).
        - 9.4.2 Los índices antropométricos a utilizar en la valoración del estado nutricional son: peso para la edad, talla para la edad y peso para la talla. Se recomienda la valoración del peso para la talla y la edad de acuerdo a tablas poblacionales de referencia para la evaluación del estado de nutrición en niños menores de 2 años de edad.
        - 9.4.6 Las unidades de salud deben disponer e incorporar en los expedientes clínicos, tablas de crecimiento y desarrollo o las gráficas que de ellas se deriven.
        - 9.5.2 Para clasificar la desnutrición, se emplean las mediciones de peso para la edad, peso para la talla o talla para la edad, y se comparan con los valores de una población de referencia que establezca indicadores.
        Actualmente se usan las tablas propuestas por la Organización Mundial de la Salud (APENDICE ""A"" al ""F""). La interpretación de estos indicadores somatométricos es como sigue:
        9.5.2.1 Peso para la edad: útil para vigilar la evolución del niño, cuando se sigue su curva de crecimiento;
        9.5.2.2 Peso para la talla: el bajo peso para la talla indica desnutrición aguda y refleja una pérdida de peso reciente.
        9.5.2.3 Talla para la edad: una talla baja para la edad, refleja desnutrición crónica.
        Para evaluar este indicador se llevarán a cabo los siguientes pasos:
        1. A partir de los expedientes seleccionados se identificará en la tarjeta de control el llenado de los siguientes apartados en cada consulta del año evaluado:
        - Peso
        -Talla
        2. En la misma tarjeta que se identificará el apartado de "diagnóstico nutricional" y se verificará que se encuentren llenos (evaluados) los subapartado de:
        - Peso para la edad
        -Peso para la talla
        -Talla para la edad
        `,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Se midió peso en cada consulta",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Se midió talla en cada consulta",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 3,
        Question: "Se valoró el peso para la edad en cada consulta",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 4,
        typeQuestion: 3,
        Question: "Se valoró el peso para la talla en cada consulta",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 5,
        typeQuestion: 3,
        Question: "Se valoró el talla para la edad en cada consulta ",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 6,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
  {
    idIndicator: 16,
    key: "ITNF648/P",
    name: "Recomendación de reducción de ingesta energética y comida rápida en preescolares con obesidad",
    target: "Preescolares + obesidad",
    stage: "Preescolar",
    color: COLORS.preescolar,
    evaluation: `Recomendamos la reducción de la ingesta energética total y el consume de comida rápida en obesidad.
      Para evaluar este indicador se llevarán a cabo los siguientes pasos:
      1. A partir de los expedientes seleccionados se identificará aquellos que cuenten con el diagnóstico de obesidad de acuerdo a la tarjeta de control.
      2.- De acuerdo a la fecha en donde se confirme el diagnóstico de obesidad se localiza la nota de evolución correspondiente a la fecha del diagnóstico.
      3.- Se buscará en las primeras dos notas a partir del diagnóstico las siguientes recomendaciones.
      -Reducción de la ingesta energética total (buscar notas en las que se recomiende disminución de alimentos ricos en azúcares o de comidas que se consideren con alto contenido energético como harinas, pastas, etc.)
      - Reducción de consumo de comida rápida.`,
    questions: [
      {
        idQuestion: 1,
        typeQuestion: 3,
        Question: "Recomienda reducción de la ingesta energética total",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 2,
        typeQuestion: 3,
        Question: "Recomienda reducción de consumo de comida rápida",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: true,
        enabled: true,
        possibleAnswers: [
          { value: "No", key: "0" },
          { value: "Sí", key: "1" },
          // { value: "No encontrado", key: "998" },
        ],
      },
      {
        idQuestion: 3,
        typeQuestion: 5,
        Question: "Observaciones",
        subindicator: 0,
        nameSubindicator: "",
        forCalculation: false,
        enabled: true,
        possibleAnswers: [],
      },
    ],
  },
];
