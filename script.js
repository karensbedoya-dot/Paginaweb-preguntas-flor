// Concept Data for Rentas
const conceptsData = {
    'impuesto-predial': {
        title: 'Impuesto Predial',
        description: 'Es un impuesto que deben pagar los dueños de bienes inmuebles (casas, apartamentos, terrenos, etc.) por el simple hecho de tener esa propiedad.',
        factura: 'Centros Comerciales - MasCerca Belén y MasCerca Poblado - Servicios Tributarios',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: true,
        abonos: true,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        bancosEspecificos: ''
    },
    'impuesto-telefonico': {
        title: 'Impuesto Telefónico',
        description: 'El impuesto telefónico en el Distrito de Medellín es un tributo local que se aplica a los servicios de telefonía fija prestados dentro del territorio del distrito. Aunque no es uno de los impuestos más conocidos, su existencia tiene fundamentos legales y objetivos específicos.',
        factura: 'Centros Comerciales - MasCerca Belén y MasCerca Poblado - Servicios Tributarios',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: false,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: false,
        botonPagos: false,
        bancosEspecificos: ''
    },
    'ica': {
        title: 'Industria y Comercio (ICA)',
        description: 'El Impuesto de Industria y Comercio (ICA) en el Distrito de Medellín se genera como una obligación tributaria para todas las personas naturales o jurídicas que realicen actividades comerciales, industriales o de servicios dentro del territorio, ya sea de forma permanente u ocasional, con o sin establecimiento de comercio.',
        factura: 'Centros Comerciales - MasCerca Belén y MasCerca Poblado - Servicios Tributarios',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: true,
        abonos: true,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        bancosEspecificos: ''
    },
    'multas-policia': {
        title: 'Multas Código de Policía',
        description: 'El cobro de una multa de Policía en Colombia, incluyendo en el Distrito de Medellín, se genera como una medida correctiva establecida por el Código Nacional de Seguridad y Convivencia Ciudadana (Ley 1801 de 2016). Su propósito es promover la convivencia pacífica y el respeto por las normas en el espacio público.',
        factura: 'Piso 3 OFICINA 315 Del Distrito de Medellín o Casa de Justicia el Bosque',
        dudas: 'Piso 3 OFICINA 315 Del Distrito de Medellín o Casa de Justicia el Bosque',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: false,
        botonPagaFacil: false,
        botonPagos: false,
        bancosEspecificos: 'Bancolombia',
        asesoriaFacilidades: true
    },
    'pot': {
        title: 'POT - Obligaciones Urbanísticas',
        description: 'El cobro de una obligación urbanística en el Distrito de Medellín se genera como una compensación que deben hacer los constructores o desarrolladores a la ciudad por el aprovechamiento del suelo urbano. Esta obligación está regulada por el Plan de Ordenamiento Territorial (POT) y otras normas urbanísticas locales.',
        factura: 'Distrito de Medellín Primer piso Taquilla 6 y 7',
        dudas: 'Distrito de Medellín Primer piso Taquilla 6 y 7',
        virtual: false,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: false,
        botonPagos: false,
        bancosEspecificos: 'Davivienda'
    },
    'publicidad': {
        title: 'Publicidad Exterior Visual',
        description: 'El Impuesto de Publicidad Exterior Visual en el Distrito de Medellín se cobra por la instalación y exhibición de elementos publicitarios visibles desde el espacio público, como vallas, carteles, pantallas digitales, entre otros.',
        factura: 'Mediante correo electrónico: publicidad.exteriorvisual@medellin.gov.co',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: true,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        email: 'publicidad.exteriorvisual@medellin.gov.co'
    },
    'espacio-publico': {
        title: 'Aprovechamiento Espacio Público',
        description: 'Se genera como contraprestación por la realización de una actividad económica en el espacio público. Busca Revitalizar espacios públicos de la ciudad, contribuyendo con la reactivación de los sectores económicos.',
        factura: 'Acercarse a las oficinas de Espacio Público en la CR 42 No 47 – 15 Torres de Bomboná. Taquillas 11 o 12 de la Agencia APP en las oficinas de Servicio a la Ciudadanía. Por correo electrónico: solicitudes@app.gov.co, aprovechamientoep@medellin.gov.co. Comunicarse al WhatsApp 305 4509017 del equipo de AEEP de la subsecretaría',
        dudas: 'CR 42 No 47 – 15 Torres de Bomboná. Taquillas 11 o 12. WhatsApp: 305 4509017',
        virtual: false,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: false,
        botonPagos: false,
        bancosEspecificos: '',
        whatsapp: '305 4509017',
        emails: ['solicitudes@app.gov.co', 'aprovechamientoep@medellin.gov.co']
    },
    'espectaculos': {
        title: 'Espectáculos Públicos',
        description: 'El cobro del impuesto de espectáculos públicos en Medellín se genera como parte de las obligaciones tributarias municipales, con el objetivo de regular y gravar la realización de eventos públicos que impliquen la venta de entradas o tiquetes.',
        factura: 'Servicios Tributarios',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: true,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true
    },
    'ingresos-no-tributarios': {
        title: 'Ingresos No Tributarios',
        description: 'Los ingresos no tributarios se cobran porque son recursos económicos que provienen de fuentes no impositivas, como multas, sanciones, ventas de bienes y servicios, y donaciones. Aunque no son la principal fuente de ingresos del gobierno, complementan el presupuesto y permiten cubrir gastos específicos sin depender exclusivamente de impuestos.',
        factura: 'Se debe identificar el dueño de la renta en FPL9 para orientar el Contribuyente',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: true,
        abonos: false,
        facilidad: false,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        asesoriaFacilidades: true
    },
    'multas-salud': {
        title: 'Multas de Salud',
        description: 'Estas multas se generan por infringir la norma sanitaria en un establecimiento abierto al público, la secretaría de salud de Medellín adelantó un proceso sancionatorio que terminó en la imposición de una multa.',
        factura: 'Oficina de Atención al Ciudadano, taquillas 40, 41 y 42, ubicadas en Calle 44 # 52 – 165 Sótano. Puede escribir al correo sancionatorios.salud@medellin.gov.co',
        dudas: 'Oficina de Atención al Ciudadano, taquillas 40, 41 y 42, ubicadas en Calle 44 # 52 – 165 Sótano',
        virtual: true,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        email: 'sancionatorios.salud@medellin.gov.co'
    },
    'credito-vivienda': {
        title: 'Crédito de Vivienda',
        description: 'El cobro se genera debido a las obligaciones hipotecarias en mora de los deudores del Programa de Vivienda.',
        factura: 'Taquillas 52, 53 Y 54 de Vivienda ubicada en el Sótano A del Centro Administrativo Distrital (CAD)- Alpujarra, dirección calle 44 No. 52-165, o al correo vivienda@medellin.gov.co',
        dudas: 'Taquillas 52, 53 Y 54 de Vivienda ubicada en el Sótano A del Centro Administrativo Distrital (CAD)- Alpujarra, dirección calle 44 No. 52-165. Línea de atención institucional del Programa de Vivienda (604) 3855555 extensiones 9428, 2062, 7628, 6765, 7244.',
        virtual: true,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        email: 'vivienda@medellin.gov.co',
        telefono: '(604) 3855555 ext. 9428, 2062, 7628, 6765, 7244'
    },
    'arrendamientos': {
        title: 'Arrendamientos Bienes Inmuebles',
        description: 'El cobro se genera porque a la fecha el arrendatario presenta mora en el pago de los cánones mensuales correspondientes a los bienes inmuebles propiedad del Distrito.',
        factura: 'Unidad de Administración de Bienes Inmuebles de la Alcaldía de Medellín, oficina 701. Martes y jueves de 8 a 12 m y de 2 a 5 p.m. o en el número 604-3855555 ext 4857. Por correo electrónico: francisco.dominguez@medellin.gov.co, jorgee.arango@medellin.gov.co',
        dudas: 'Unidad de Administración de Bienes Inmuebles de la Alcaldía de Medellín, oficina 701. Martes y jueves de 8 a 12 m y de 2 a 5 p.m. o en el número 604-3855555 ext 4857',
        virtual: true,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        emails: ['francisco.dominguez@medellin.gov.co', 'jorgee.arango@medellin.gov.co'],
        telefono: '604-3855555 ext 4857',
        bancosEspecificos: 'Banco AV Villas, Bancolombia, Banco BBVA, Banco de Bogotá, Banco Davivienda, Banco Caja Social, Banco Colpatria, Banco de Occidente, Banco Sudameris, Confiar, Coofinep, Cotrafa, CFA, Punto de Red, Punto de Pago.'
    },
    'circulacion-transito': {
        title: 'Circulación y Tránsito',
        description: 'Este cobro se genera para las personas naturales o jurídicas propietarias o poseedoras de vehículos de servicio público registrados (matriculados) en el Distrito de Medellín y que presentan mora en el pago. Por ejemplo, taxis, vehículos placa blanca y volquetas.',
        factura: 'Centros Comerciales - MasCerca Belén y MasCerca Poblado - Servicios Tributarios',
        dudas: 'Servicios Tributarios, se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a.m. a 5:00 p.m. y viernes de 7:30 a.m. hasta las 4:00 p.m.',
        virtual: true,
        abonos: false,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: false
    },
    'multas-urbanisticas': {
        title: 'Multas Urbanísticas',
        description: 'Las multas urbanísticas son sanciones pecuniarias impuestas por la autoridad competente, por incumplir la normativa sobre el uso y la edificación del suelo. Ocurren al construir o intervenir en terrenos sin los permisos necesarios (licencias) o sin ajustarse a las condiciones de la licencia existente.',
        factura: 'Remitir para Asesoría Facilidades de Pago (Virtual o presencialmente)',
        dudas: 'Remitir para Asesoría Facilidades de Pago (Virtual o presencialmente)',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: false,
        botonPagaFacil: false,
        botonPagos: false,
        asesoriaFacilidades: true
    },
    'costas-procesales': {
        title: 'Costas Procesales',
        description: 'Las costas procesales son los gastos que se generan durante un proceso judicial y que deben ser cubiertos por una de las partes, usualmente la que pierde el caso. Estas costas buscan compensar a la parte ganadora por los gastos en los que incurrió para hacer valer sus derechos ante la justicia. Las costas procesales se le cobran a los Contribuyentes que demandaron al Distrito de Medellín y perdieron, por lo tanto deben asumir los gastos en que incurrieron en el proceso.',
        factura: 'Remitir para Asesoría Facilidades de Pago (Virtual o presencialmente)',
        dudas: 'Remitir para Asesoría Facilidades de Pago (Virtual o presencialmente)',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: false,
        botonPagaFacil: false,
        botonPagos: false,
        asesoriaFacilidades: true
    },
    'sancion-no-responder': {
        title: 'Sanción por No Responder',
        description: 'El Acuerdo 093 de 2023 (normatividad vigente), en su artículo 358 establece la "SANCIÓN POR OMISIONES RELACIONADAS CON EL ENVÍO DE INFORMACIÓN", para las personas y entidades obligadas a suministrar información tributaria, así como aquellas a quienes se les haya solicitado información o pruebas, que no la suministren, la suministren por fuera del plazo establecido o cuyo contenido esté incompleto presente errores. Esta sanción no podrá superar 7.500 UVT.',
        factura: 'La factura es remitida por la Administración Distrital de acuerdo en la etapa en la cual se encuentra el proceso sancionatorio o solicitud del sancionado a través de la radicación de una PQRSD, por la página WEB, se envía vía correo electrónico o de forma física según la información que reposa en el sistema SAP (transacción RIT) o al correo y/o dirección física que informe el sancionado.',
        dudas: 'Taquillas de Servicios Tributarios en el primer piso al lado del Concejo de Medellín o a través de la radicación de una PQRSD',
        virtual: true,
        abonos: true,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true
    },
    'cuotas-partes': {
        title: 'Cuotas Partes Pensionales',
        description: 'El cobro de cuotas partes pensionales es un mecanismo de financiación que permite distribuir el costo de una pensión entre varias entidades públicas en las que un trabajador prestó sus servicios. Cada entidad pública debe asumir la proporción del valor de la pensión a prorrata del tiempo servido.',
        factura: 'Las facturas son remitidas a cada una de las entidades concurrentes, bien de manera física o a su canal digital. Asimismo, esta puede ser solicitada al correo electrónico: cuotaspartesporcobrar@medellin.gov.co',
        dudas: 'Puede dirigirse a los liquidadores a cargo de las entidades concurrentes, los cuales se encuentran ubicados en el equipo de pensiones, piso 6, oficina 604. Igualmente, pueden escribir al correo electrónico: cuotaspartesporcobrar@medellin.gov.co',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: true,
        botonPagaFacil: false,
        botonPagos: false,
        email: 'cuotaspartesporcobrar@medellin.gov.co'
    },
    'sanciones-fiscalizacion': {
        title: 'Sanciones Fiscalización',
        description: 'El Acuerdo 093 de 2023 establece las sanciones relativas a las declaraciones que se originan en los procesos de investigación del impuesto de Industria y Comercio. Incluye: Sanción por no declarar (5% de ingresos brutos), Sanción por inexactitud (100% de la diferencia), y Corrección de sanciones (incremento del 30%).',
        factura: 'Las facturas son remitidas por la Administración Distrital de forma física, según la información que reposa en el sistema SAP (transacción BP) o puede ser solicitada por el contribuyente en las Taquillas de servicios tributarios o a través de la radicación de una PQRSD en la página WEB.',
        dudas: 'Taquillas de Servicios Tributarios en el primer piso al lado del Concejo de Medellín o a través de la radicación de una PQRSD',
        virtual: true,
        abonos: true,
        facilidad: true,
        bancos: true,
        botonPagaFacil: true,
        botonPagos: true,
        bancosEspecificos: 'Bancolombia, Banco de Bogotá, BBVA (Solo virtual), Davivienda, Banco de Occidente, Banco GNB Sudameris, Banco AV Villas, COTRAFA, CFA, Confiar COOP'
    },
    'estampilla-pro-cultura': {
        title: 'Estampilla Pro Cultura',
        description: '',
        factura: '',
        dudas: '',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: false,
        botonPagaFacil: false,
        botonPagos: false
    },
    'banco-distrital': {
        title: 'Banco Distrital',
        description: 'El programa Banco Distrital de Medellín es un instrumento de política pública adscrito a la Secretaría de Desarrollo Económico orientado a mejorar la calidad de vida de la población mediante acceso a líneas de crédito y microcrédito, y apoyar la creación, formalización y fortalecimiento del tejido empresarial.',
        factura: 'Actualmente contamos con dos tipos de carteras: la primera es la cartera activa, para la cual nuestros dos operadores Fomentamos y Cooperativa Financiera de Antioquia se encargan de informar el valor de la cuota del mes. Y la segunda es cartera vencida, la cual desde el banco se informa el valor que debe pagar por el total de la deuda en mora.',
        dudas: 'Se deben dirigir al Banco Distrital de Medellín, ubicado en el Edificio Vásquez Cr 52#44-31 piso 1',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: false,
        botonPagaFacil: false,
        botonPagos: false,
        bancosEspecificos: 'Para las carteras activas debe pagar ante los dos operadores, CFA y Fomentamos. Para la cartera vencida debe realizar el pago en la cuenta: Ahorros Davivienda 037600064093, Titular: Alcaldía de Medellín, NIT: 890.905.211.1'
    },
    'delineacion-urbana': {
        title: 'Delineación Urbana',
        description: '',
        factura: '',
        dudas: '',
        virtual: false,
        abonos: false,
        facilidad: false,
        bancos: false,
        botonPagaFacil: false,
        botonPagos: false
    }
};

const bancosAutorizados = [
    'Bancolombia',
    'Banco de Bogotá',
    'BBVA (Solo virtual)',
    'Davivienda',
    'Colpatria',
    'Banco de Occidente',
    'Banco GNB Sudameris',
    'Banco AV Villas',
    'COTRAFA',
    'CFA',
    'Confiar COOP',
    'JFK'
];

// Preguntas Flor Data
const preguntasFlorData = {
    'predial': {
        title: 'Impuesto Predial',
        content: [
            {
                subtitle: '¿Cómo generar el documento de cobro de Predial?',
                description: 'Puedes generar el documento de cobro para pago por medio del portal tributario seleccionando la opción de "Botón de pagos". Ingresando en el siguiente link:',
                items: [
                    'Link de acceso: 🔗 https://www.medellin.gov.co/irj/portal/medellin/documento-cobro-predial'
                ]
            },
            {
                subtitle: 'PASO A PASO ABONOS A PREDIAL',
                description: 'Sigue estos pasos para realizar abonos a predial:',
                items: [
                    'Paso 1: Ingresa a través de la página institucional www.medellin.gov.co',
                    'Paso 2: Realiza registro o inicia sesión con NIT o Cédula y contraseña',
                    'Paso 3: Baja con el cursor y ubica la franja naranja "Secretaria de Hacienda"',
                    'Paso 4: Ingresa al campo "portal tributario"',
                    'Paso 5: Selecciona "Impuesto predial unificado"',
                    'Paso 6: Da clic en la casilla "Generación de documento de abono" Allí podremos visualizar las matrículas asociadas al contribuyente',
                    'Paso 7: Clic en "ver cartera"',
                    'Paso 8: Clic en "Ver desgloses o abonos por vigencia"',
                    'Paso 9: Ingresar el valor en la casilla de la vigencia a la cual desea abonar',
                    'Paso 10: Clic en "Generar Documento"',
                    'Paso 11: Iniciar el pago por PSE'
                ]
            },
            {
                subtitle: '¿Puedo solicitar la prescripción de una deuda?',
                description: 'Sí, puedes solicitar la prescripción de una deuda tributaria. Para ello debes presentar una solicitud por escrito, ya sea de forma virtual a través del canal de PQRSD o de manera presencial en los puntos de atención autorizados.',
                items: [
                    'Nota importante: La solicitud será analizada y evaluada por la Administración Distrital, quien determinará si cumple con los requisitos legales para proceder con la prescripción.',
                    'La presentación de la solicitud no implica la suspensión ni eliminación automática de la deuda.'
                ]
            },
            {
                subtitle: 'Certificación de Pago',
                description: 'Para generar la certificación del pago, debes acercarte al Distrito de Medellín, en el primer piso (Tesorería), taquillas 1 y 2, llevando el soporte del pago realizado. Allí te entregarán el documento correspondiente.',
                items: []
            },
            {
                subtitle: 'Copia de factura 2024 para declarar',
                description: 'Ingresa al siguiente enlace, selecciona "Duplicados de documento de cobro", luego elige el año y el trimestre que necesitas.',
                items: [
                    'Enlace de acceso: 🔗 https://www.medellin.gov.co/irj/portal/medellin/documento-cobro-predial'
                ]
            },
            {
                subtitle: '¿Puedo solicitar devolución si tengo saldo a favor?',
                description: 'Sí, puedes presentar la solicitud mediante el formulario de devolución y/o compensación debidamente diligenciada, a nombre del titular, sea persona natural o jurídica que registre el saldo a favor. En caso de que la solicitud sea presentada por un apoderado, este deberá adjuntar el poder original con presentación personal ante autoridad competente.',
                items: [
                    'El formulario lo puedes descargar a través del siguiente enlace: https://www.medellin.gov.co/irj/go/km/docs/pccdesign/SubportaldelCiudadano_2/PlandeDesarrollo_0_9/ProgramasyProyectos/Shared%20Content/Documentos/PortalTributario/Formulario %20Devoluciones.pdf',
                    'Junto con el formulario, deben anexarse los requisitos generales y, de ser aplicable, los requisitos especiales según la calidad del contribuyente, los cuales se encuentran en el formulario.'
                ]
            },
            {
                subtitle: 'Para regenerar el documento de cobro de Predial',
                description: 'Puedes regenerar el documento de cobro para realizar el pago a través del portal tributario, seleccionando la opción "Regenerar Documento de Cobro". Puedes acceder directamente mediante el siguiente enlace:',
                items: [
                    '🔗 https://www.medellin.gov.co/irj/portal/medellin/documento-cobro-predial'
                ]
            },
            {
                subtitle: 'PAZ Y SALVO TASA DE ASEO (Lotes)',
                description: 'La solicitud debe realizarse en Emvarias de manera presencial, oficinas de atención al ciudadano, ubicadas en la Calle 44 #50-42, Punto Limpio San Juan.',
                items: [
                    'Horario de atención:',
                    'Lunes a jueves: de 7:30 a.m. a 4:00 p.m. (jornada continua)',
                    'Viernes: de 7:30 a.m. a 3:00 p.m. (jornada continua)'
                ]
            },
            {
                subtitle: 'Paz y Salvo Predial',
                description: 'Puedes regenerar el documento de cobro para realizar el pago a través del portal tributario, seleccionando la opción "Certificado paz y salvo predial". Puedes acceder directamente mediante el siguiente enlace:',
                items: [
                    '🔗 https://www.medellin.gov.co/irj/portal/medellin/documento-cobro-predial'
                ]
            },
            {
                subtitle: 'PASO A PASO PARA GENERAR FACTURA DE FACILIDAD DE PAGO DE PREDIAL',
                description: 'Sigue estos pasos para generar factura de facilidad de pago de predial:',
                items: [
                    'Paso 1: Ingresa a nuestra página: https://www.medellin.gov.co/',
                    'Paso 2: Dentro de la plataforma, en la parte superior, debes seleccionar la opción: "Inicia sesión".',
                    'Paso 3: Busca la franja naranja que dice: "Secretaria de Hacienda"',
                    'Paso 4: Selecciona la opción: "Botón paga Fácil"',
                    'Paso 5: Ingresa documento de identidad y # de referencia',
                    'Paso 6: Consulta el saldo y paga'
                ]
            },
            {
                subtitle: 'PASO A PASO PARA CONSULTAR EL HISTORIAL DE PAGOS DE PREDIAL',
                description: 'Sigue estos pasos para consultar el historial de pagos de predial:',
                items: [
                    'Paso 1: Ingresa a nuestra página: https://www.medellin.gov.co/',
                    'Paso 2: Dentro de la plataforma, en la parte superior, debes seleccionar la opción: "Inicia sesión".',
                    'Paso 3: Busca la franja naranja que dice: "Secretaria de Hacienda"',
                    'Paso 4: Selecciona la opción: "portal tributario"',
                    'Paso 5: Busca la casilla con la opción: "Impuesto predial unificado"',
                    'Paso 6: Selecciona "Botón de pagos"',
                    'Paso 7: Luego busca en la parte inferior derecha: "Puedes revisar el historial de tus transacciones aquí: VER HISTORIAL"'
                ]
            }
        ]
    },
    'ica': {
        title: 'Impuesto de Industria y Comercio (ICA)',
        content: [
            {
                subtitle: 'Para generar el documento de cobro de ICA',
                description: 'Puedes generar el documento de cobro para pago por medio del portal tributario seleccionando la opción de "Botón de pagos". Ingresando en el siguiente link:',
                items: [
                    '🔗 https://www.medellin.gov.co/irj/portal/medellin/documento-cobro/?NavigationTarget=navurl://04b77540f3d376c83309bb5bad4884d7'
                ]
            },
            {
                subtitle: 'PASO A PASO DE ABONOS DE ICA',
                description: 'Sigue estos pasos para realizar abonos de ICA:',
                items: [
                    'Ingresa a través de la página institucional www.medellin.gov.co',
                    'Realiza registro o inicia sesión con NIT o Cédula y contraseña',
                    'Baja con el cursor y ubica la franja naranja "Secretaria de Hacienda"',
                    'Ingresa al campo "Portal tributario"',
                    'Selecciona "impuesto de industria y comercio y complementarios"',
                    'Selecciona "Generación de documento Abono"',
                    'Clic en "Ver desgloses o abonos por vigencia"',
                    'Ingresar el valor en la casilla de la vigencia a la cual desea abonar',
                    'Clic en "Generar Documento"',
                    'Iniciar el pago por PSE'
                ]
            },
            {
                subtitle: '¿Necesitas orientación sobre ICA?',
                description: 'Entiendo su solicitud, sin embargo, al ser esta el área de Cobranzas, le invitamos a recibir la orientación especializada en Industria y Comercio, por medio del canal adecuado.',
                items: [
                    'Solicitar orientación virtual ingresando tus datos como contribuyente en el siguiente enlace: https://distritodemedellinvirtual.sistemasentry.com.co/VisionWeb',
                    'Selecciona la opción 👉 Orientación Virtual - Industria y Comercio',
                    'O acércate a Servicios Tributarios, ubicado en la plazoleta de La Alpujarra, en horario de atención de 8:00 a.m. a 4:00 p.m., en jornada continua.'
                ]
            },
            {
                subtitle: 'PASO A PASO PARA ACTUALIZAR LOS DATOS DEL RIT',
                description: 'Sigue estos pasos para actualizar los datos del RIT:',
                items: [
                    'Ingresa a través de la página institucional www.medellin.gov.co',
                    'Realiza registro o inicia sesión con NIT o Cédula y contraseña',
                    'Baja con el cursor y ubica la franja naranja "Secretaria de Hacienda"',
                    'Ingresa al campo "Portal tributario"',
                    'Selecciona "impuesto de industria y comercio y complementarios"',
                    'En la parte inferior se visualiza un segundo título que dice: "Otros servicios"',
                    'Selecciona la opción "Actualización datos RIT"'
                ]
            },
            {
                subtitle: 'Para regenerar el documento de cobro de ICA',
                description: 'Puedes regenerar el documento de cobro para realizar el pago a través del portal tributario, seleccionando la opción "Regenerar Documento de Cobro". Puedes acceder directamente mediante el siguiente enlace:',
                items: [
                    '🔗 https://www.medellin.gov.co/irj/portal/medellin/documento-cobro/?NavigationTarget=navurl://04b77540f3d376c83309bb5bad4884d7'
                ]
            },
            {
                subtitle: 'PASO A PASO PARA GENERAR FACTURA DE FACILIDAD DE PAGO DE ICA',
                description: 'Sigue estos pasos para generar factura de facilidad de pago de ICA:',
                items: [
                    'Paso 1: Ingresa a nuestra página: https://www.medellin.gov.co/',
                    'Paso 2: Dentro de la plataforma, en la parte superior, debes seleccionar la opción: "Inicia sesión".',
                    'Paso 3: Busca la franja naranja que dice: "Secretaria de Hacienda"',
                    'Paso 4: Selecciona la opción: "Botón paga Fácil"',
                    'Paso 5: Ingresa documento de identidad y # de referencia',
                    'Paso 6: Consulta el saldo y paga'
                ]
            },
            {
                subtitle: 'PASOS PARA CANCELACIÓN DEL RIT O CIERRE DE LA ACTIVIDAD COMERCIAL (Virtual)',
                description: '1. INTERACCIÓN PARA CONSULTAR SOBRE CESE DE ACTIVIDAD COMERCIAL',
                items: [
                    'Le consulto… ¿Todavía ejerce la actividad comercial?',
                    'Si responde NO le enviamos el siguiente texto:',
                    'Recuerde que debe solicitar cierre en Cámara y Comercio y posterior a esto, realizar la cancelación del RIT(Registro Información Tributaria) con el Distrito. Esta cancelación la puede realizar por la página web del Distrito. ¿Desea que le comparta la información para realizarlo?'
                ]
            },
            {
                subtitle: '2. PASO A PASO PARA CANCELACIÓN DEL RIT',
                description: 'Sigue estos pasos para la cancelación del RIT:',
                items: [
                    'Ingresa a través de la página institucional www.medellin.gov.co',
                    'Realiza registro o inicia sesión con NIT o Cédula y contraseña',
                    'Baja con el cursor y ubica la franja naranja "Secretaria de Hacienda"',
                    'Ingresa al campo "Portal tributario"',
                    'Selecciona "impuesto de industria y comercio y complementarios"',
                    'En la parte inferior se visualiza un segundo título que dice: "Otros servicios"',
                    'Selecciona la opción "Cancelación registro como contribuyente"',
                    'Luego de realizar los pasos anteriores procede a descargar el formulario RIT de la siguiente manera:'
                ]
            },
            {
                subtitle: '3. CÓMO DESCARGAR EL FORMULARIO RIT',
                description: 'Sigue estos pasos para descargar el formulario RIT:',
                items: [
                    'Ingresa a través de la página institucional www.medellin.gov.co',
                    'Realiza registro o inicia sesión con NIT o Cédula y contraseña',
                    'Baja con el cursor y ubica la franja naranja "Secretaria de Hacienda"',
                    'Ingresa al campo "Portal tributario"',
                    'Selecciona "Formularios, ABC e Instructivos"',
                    'Selecciona la opción "Industria y Comercio"',
                    'Selecciona "Formulario registro de información tributaria (RIT)"',
                    'NOTA: Luego de diligenciar el formulario de cancelación como contribuyente del Impuesto de Industria y comercio (RIT), con sus documentos anexos, radícalo en cualquiera de nuestros puntos de atención presencial (Mascerca, Casas de Gobierno o Servicios Tributarios)'
                ]
            },
            {
                subtitle: 'CIERRE RETROACTIVO',
                description: 'En su caso, podría solicitar la cancelación del registro como responsable del impuesto de Industria y Comercio, con efectos retroactivos desde la fecha en que realmente cesó sus actividades económicas. Para ello, es necesario aportar documentación que demuestre que desde esa fecha no ha ejercido actividad comercial.',
                items: [
                    'Una vez presentada la solicitud, el área encargada revisará el caso, si es aprobado, se realizará el ajuste correspondiente en su estado de cuenta. A partir de ese momento, podrá acogerse a alguna de nuestras alternativas de pago, de acuerdo con el saldo pendiente.'
                ]
            },
            {
                subtitle: 'Principales pruebas que puede aportar un contribuyente',
                description: 'Documentos que puedes presentar:',
                items: [
                    '1. Carta de solicitud: Debe explicar el motivo de la cancelación y especificar la fecha en la que cesó la actividad económica.',
                    '2. Formulario de Registro de Información Tributaria (RIT) Diligenciado completamente y coherente con la información de la carta.',
                    '3. Certificado de cancelación de matrícula mercantil: Emitido por la Cámara de Comercio, indicando que el establecimiento fue cerrado, trasladado o no renovado',
                    '4. Certificación de contador público: Que indique que no se han generado ingresos ni se ha ejercido actividad económica desde la fecha indicada.',
                    '5. Contrato de arrendamiento terminado: Si el negocio operaba en un local arrendado, presentar el contrato finalizado como prueba del cierre del establecimiento.',
                    '6. Declaraciones tributarias en cero: Presentadas desde la fecha de cese, si corresponde, para demostrar que no hubo actividad económica.',
                    'Pruebas adicionales: Fotografías del local cerrado, avisos de cierre, comunicaciones a clientes o proveedores, entre otros documentos que respalden el cese de operaciones.'
                ]
            }
        ]
    },
    'alternativas-pago': {
        title: 'Alternativas de Pago',
        content: [
            {
                subtitle: 'Opciones de Pago',
                description: 'Para ayudarte a normalizar tu situación con el Distrito de Medellín, te ofrecemos alternativas de pago que se ajustan a tus posibilidades:',
                items: [
                    'Cancelación total: Puedes realizar el pago completo de tu obligación.',
                    'Abonos a la factura: Si prefieres, puedes hacer pagos parciales según tu capacidad. (No tiene restricción de periodicidad, ni de monto.)',
                    'Facilidad de pago: Puedes solicitar un acuerdo de pago en cuotas. (Debe realizarse de manera presencial, debe contar con garantía y cuota inicial de entre el 10% y el 30% del total de la deuda), dichos requisitos dependen del monto y estado del proceso de cobro.',
                    'Nota: Para acceder a esta alternativa, el monto de la deuda debe ser superior a $875.452.',
                    'Abono a la facilidad de pago: Si ya tienes un acuerdo vigente, puedes continuar abonando según lo pactado.'
                ]
            },
            {
                subtitle: 'INTERACCIÓN PARA ABONOS',
                description: 'Perfecto! Los abonos pueden realizarse de forma presencial o virtual. Es importante tener presente que la opción de realizar abonos no exime de un proceso de cobro jurídico. Por ello, se recomienda que los pagos se realicen de manera consecutiva y por un valor que refleje una disminución en el saldo pendiente de la factura.',
                items: [
                    '¿Como prefiere hacer el trámite de forma presencial o virtual?'
                ]
            },
            {
                subtitle: 'Lista de bancos autorizados',
                description: '',
                items: [
                    '✅ Bancolombia',
                    '✅ Banco de Bogotá',
                    '✅ BBVA (Solo virtual)',
                    '✅ Davivienda',
                    '✅ Colpatria',
                    '✅ Banco de Occidente',
                    '✅ Banco GNB Sudameris',
                    '✅ Banco AV Villas',
                    '✅ COTRAFA',
                    '✅ CFA',
                    '✅ Confiar COOP',
                    '✅ JFK',
                    'También puede hacerse por medio de cheque de gerencia, el cual debe estar girado a nombre del Distrito de Medellín.',
                    'Nota: El cheque debe cumplir con:',
                    'Los requisitos establecidos por la entidad financiera.',
                    'Que el valor coincida exactamente con el del documento de cobro.',
                    'Este método de pago solo es aceptado en los puntos de recaudo autorizados de forma presencial, exceptuando Bancolombia.',
                    'Davivienda recibe pagos con cheque de gerencia por cada documento de cobro, es decir, no se recibe un cheque para pagar varios documentos de cobro.'
                ]
            },
            {
                subtitle: 'Corresponsales bancarios',
                description: '',
                items: [
                    '✅ Bancolombia',
                    '✅ Punto de Pago',
                    '✅ Punto RED'
                ]
            },
            {
                subtitle: 'Cancelación total',
                description: 'Puedes realizar la cancelación total de la factura de forma virtual a través de nuestra página del Distrito de Medellin, o de manera presencial en cualquiera de los puntos de atención habilitados.',
                items: [
                    '¿Desea que le comparta el link de pagos?',
                    'https://www.medellin.gov.co/irj/portal/medellin/boton-pagos'
                ]
            },
            {
                subtitle: 'Facilidad de pago',
                description: 'Puedes realizar un acuerdo de pago de manera presencial con el Distrito de Medellin para cancelar tu factura en cuotas mensuales, para ello tienes varias opciones:',
                items: [
                    '1. Acercarte directamente a nuestras oficinas ubicadas en Plaza Mayor, Pabellón Medellín, en el área de Facilidades de Pago. El horario de atención es de lunes a viernes, de 8:00 a. m. a 4:00 p. m. Jornada continua.',
                    '2. Solicitar cita previa mediante el siguiente link: https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/9956-Facilidad-de-pago',
                    '3. Solicitar asesoría virtual con el personal espacializado en el siguiente link: https://distritodemedellinvirtual.sistemasentry.com.co/VisionWeb',
                    '¿Desea que le amplíe la información sobre los requisitos previos para acceder a la facilidad?'
                ]
            },
            {
                subtitle: 'Abonos a la Facilidad de pago',
                description: 'Si tienes un acuerdo de pago con cuotas vencidas, puedes realizar abonos para ponerte al día. Para ello, puedes solicitar una cita previa o acercarte directamente a nuestras oficinas ubicadas en Plaza Mayor, Pabellón Medellín, en el área de Facilidades de Pago.',
                items: [
                    'El horario de atención es de lunes a viernes, de 8:00 a. m. a 4:00 p. m., en jornada continua.'
                ]
            }
        ]
    },
    'requisitos-fp': {
        title: 'Requisitos para Facilidad de Pago',
        content: [
            {
                subtitle: '¿Cómo solicito una facilidad o acuerdo de pago?',
                description: 'Solicita una cita virtual o Preséntate en el Centro de Servicios de Tesorería, ubicado en la calle 41 # 55-80 Plaza Mayor, pabellón Medellín, con los siguientes documentos:',
                items: [
                    'Documento de cobro del impuesto con fecha vigente.',
                    'Copia de tu documento de identidad.',
                    'Certificados de los bienes ofrecidos como garantía según el caso, Entre estos pueden encontrarse:',
                    'Certificado de Tradición y Libertad del inmueble, con fecha de expedición no mayor a treinta (30) días y que no presente limitación o afectación al dominio.',
                    'Certificado de Existencia y Representación Legal (Cámara y Comercio, en caso de persona jurídica) donde se evidencie los activos con los que cuenta la empresa. Fecha de expedición no mayor a treinta (30) días',
                    'Si no cuentas con ninguna de las garantias mencionadas anteriormente, puedes dejar un pagaré firmado. Pero el plazo máximo para financiar sería solo de 12 meses (Siempre y cuando se cumpla con los requerimientos que le apliquen según su caso)',
                    'NOTA: El valor del avalúo catastral del inmueble ofrecido como garantía o los activos de la empresa debe ser superior al monto de la deuda.',
                    'CUOTA INICIAL: Debes tener entre el 10 % y el 30% del total de la deuda. El porcentaje puede variar según el estado en que se encuentre el proceso de cobro coactivo.'
                ]
            },
            {
                subtitle: 'Documentación adicional según relación con el solicitante',
                description: 'Si la solicitud no es a nombre propio, ten en cuenta adjuntar los siguientes documentos, según sea tu relación con el solicitante:',
                items: [
                    'Si el titular de la deuda falleció, en tu condición de heredero puedes solicitar la facilidad, para lo cual debes aportar el certificado de defunción y acreditar el parentesco con el registro civil de matrimonio o nacimiento.',
                    'Para obligaciones urbanísticas y multas, además de los requisitos anteriores, presenta copia de la resolución por medio de la cual se determinó el valor de la obligación.',
                    'Si eres representante legal: Certificado de existencia y representación legal con fecha de expedición no mayor a treinta (30) días.',
                    'Si eres deudor solidario: Certificado de propiedad de los bienes que ofreces como garantía en calidad de deudor solidario, tal como el Certificado de Tradición y Libertad del inmueble, con fecha de expedición no mayor a treinta (30) días y que no presente limitación o afectación al dominio.',
                    'Si eres un autorizado: Poder otorgado por el titular de la deuda, donde autorice solicitar y suscribir la facilidad de pago por la deuda, ofrecer las garantías que la respalden y recibir notificaciones en su nombre, dicho documento debe tener presentación personal o reconocimiento de firma ante autoridad competente. Copia del documento de identidad de quien autoriza.'
                ]
            }
        ]
    },
    'otras-areas': {
        title: 'Otras Áreas',
        content: [
            {
                subtitle: 'CATASTRO',
                description: 'Solicitud ficho Catastro: Con el fin de recibir una orientación más precisa por parte de especialistas en el tema, te invito cordialmente a ingresar al siguiente enlace y solicitar una cita',
                items: [
                    '🔗 https://distritodemedellinvirtual.sistemasentry.com.co/Visionweb.new/solicitarcita'
                ]
            },
            {
                subtitle: 'COBRO COACTIVO',
                description: 'Entiendo su inquietud, en este caso se observa en el sistema que cuenta con proceso de cobro activo, para recibir una orientación completa del estado de sus procesos debe presentarse a plaza mayor y solicitar un ficho para el área de cobro coactivo, donde el abogado o la persona directamente encargada le solucionará sus dudas. Plaza mayor pabellón Medellín está ubicado en la calle 41 #55-80, horario de atención de lunes a jueves de 7:30 a. m. a 5:00 p.m. y viernes de 7:30 a. m. hasta las 4:00 p.m.',
                items: []
            },
            {
                subtitle: 'PUBLICIDAD EXTERIOR VISUAL',
                description: 'Puedes acercarte a servicios tributarios ubicado en la plazoleta de la Alpujarra o si prefieres hacerlo de manera virtual, puedes solicitar la factura en el siguiente correo:',
                items: [
                    '📧 publicidad.exteriorvisual@medellin.gov.co'
                ]
            },
            {
                subtitle: 'ARRENDAMIENTOS',
                description: 'Para reclamar tu factura de arrendamientos, puedes acercarte al séptimo piso oficina 701 del Distrito de Medellin (Alpujarra) los días martes y jueves en el horario 8:00am a 12:00pm y 2:00pm a 5:00pm',
                items: []
            },
            {
                subtitle: 'SERVICIOS A LA CIUDADANIA',
                description: 'Como recuperar la contraseña con tu número de celular y poder tener el acceso a la plataforma:',
                items: [
                    'Paso 1: Ingresas a nuestra página: https://www.medellin.gov.co/',
                    'Paso 2: Dentro de la plataforma, en la parte superior, debes seleccionar la opción: Inicia sesión.',
                    'Paso 3: Es necesario que selecciones la opción: Recupérala aquí.',
                    'Paso 4: El sistema habilitará unas opciones, en la cual debes seleccionar la siguiente:(Si tienes problemas para acceder a tu correo electrónico registrado: presiona aquí).',
                    'Paso 5: Seleccionas la línea telefónica correcta y escribes en el campo: Digita el número de teléfono móvil para que coincida con el seleccionado, el número de celular correctamente seguido de la opción: Enviar código.',
                    'Paso 6: De manera inmediata, el sistema te enviará a través de mensaje de texto, un código para habilitar el cambio de contraseña.',
                    'Paso 7: Cuando ingreses el código enviado, el sistema habilitará el cambio de contraseña.',
                    'Paso 8: Finalmente, la contraseña será guardada con éxito y podrás ingresar a realizar el trámite por nuestra página del Distrito.'
                ]
            },
            {
                subtitle: 'COBRO COACTIVO',
                description: '¿Dónde verifico si tengo una notificación de cobro coactivo? De manera virtual por el Portal. Ingresa a la página Web del Distrito de Medellín www.medellin.gov.co y seguir estos pasos:',
                items: [
                    'Desliza y ubica el cursor en la sección Secretaría de Hacienda.',
                    'Da clic en el botón Portal Tributario.',
                    'Ubica la sección "Notificaciones Tributarias"',
                    'Selecciona "Notificaciones Desde Año 2019"',
                    'Digita el número de documento de identificación tributaria',
                    'Da clic en el botón "Buscar".'
                ]
            },
            {
                subtitle: 'APROVECHAMIENTO DEL ESPACIO PÚBLICO',
                description: 'Para solicitar tu factura de aprovechamiento económico del espacio público puedes acercarte a Torres de bomboná ubicada en la carrera 42 #47-15. o solictarla a través de los siguientes correos:',
                items: [
                    '📧 solicitudes@app.gov.co',
                    '📧 aprovechamientoep@medellin.gov.co',
                    '📱 WhatsApp: 305 450 90 17'
                ]
            },
            {
                subtitle: 'ALUMBRADO PUBLICO',
                description: 'DEFINICION: El Impuesto de Alumbrado Público se genera como una contribución económica que deben realizar los ciudadanos y entidades por el beneficio que reciben de la iluminación de espacios públicos como calles, parques, avenidas, zonas peatonales y vehiculares. Para reclamar la factura puede dirigirse a culaquiera de nuestros puntos de atención presencial (MASCERCA Belen y Poblado, Centros Comerciales y Servicios Tributarios)',
                items: []
            },
            {
                subtitle: 'PAGOS DE CUALQUIER RENTA POR LA PAGINA WEB',
                description: 'Si desea realizar el pago de la renta mencionada vía web, puede realizarlo en el siguiente link si cuenta con el número de factura o referencia:',
                items: [
                    '🔗 https://www.medellin.gov.co/irj/portal/medellin/boton-paga-facil',
                    'Si no cuenta con Número de factura puede realizarlo por este link:',
                    '🔗 https://www.medellin.gov.co/irj/portal/medellin/boton-pagos'
                ]
            },
            {
                subtitle: 'POT - OBLIGACIONES URBANISTICAS',
                description: 'Linea para atención de dudas de Hacienda: Para realizar consultas relacionadas con Hacienda, le invitamos a comunicarse con su línea de atención (604) 322 80 69 en el horario de atención: lunes a viernes de 7:30 a. m. a 5:30 p. m. y sábados de 8:00 a. m. a 12:00 m.',
                items: [
                    'PASO A PASO PARA CONSULTAR EL ESTADO DE UNA PQRSD',
                    '1. Ingresa a www.medellin.gov.co y dar click en la parte superior en la opción que dice PQRSD.',
                    '2. Una vez hallas ingresado desplaza el cursor hasta encontrar el banner que dice "CONSULTAR ESTADO DE SU SOLICITUD".',
                    '3. Ingresa el número del radicado, das clic en consultar y listo.',
                    'Para reclamar tu factura de obligaciones urbanísticas y/o la resolución que así lo dispone,puedes presentarte a la taquila #7 ubicada en el primero piso del Distrito de Medellín (Alpujarra).'
                ]
            },
            {
                subtitle: 'IMPUESTO TELEFONICO',
                description: 'DEFINICION: El Impuesto Telefónico es un tributo local establecido por el Distrito de Medellín, aplicable a los servicios de telefonía fija. Para reclamar la factura puede dirigirse a culaquanya de nuestros puntos de atención presencial (MASCERCA Belen y Poblado, Centros Comerciales y Servicios Tributarios)',
                items: []
            },
            {
                subtitle: 'CIRCULACIÓN Y TRÁNSITO',
                description: 'Video de como registrarse en portal WEB Te comparto un video de apoyo que te ayudará a realizar la gestión de manera más sencilla y guiada.',
                items: [
                    'Video de como registrarse en el portal: https://youtu.be/TFyt6H1Or7c',
                    'Radicar una PQRS por la página WEB Para radicar una PQRS (Petición, Queja, Reclamo o Sugerencia), puedes hacerlo a través del siguiente enlace oficial del Distrito de Medellin 🔗 https://www.medellin.gov.co/es/pqrsd/',
                    'Si tienes pendiente el impuesto de circulación y tránsito puedes realizar el pago a través de la página web de la alcaldia en el siguiente link: www.medellin.gov.co/pagoimpuestos o si lo prefieres también puedes hacerlo de manera presencial acercándote a la oficina de sevricios tributarios, ubicada en la plazoleta de la alpujarra.'
                ]
            },
            {
                subtitle: 'RECUPERAR CONTRASEÑA',
                description: 'En caso de NO conocer el celular sugerido o el correo electronico para recuperar contraseña: Debes iniciar nuevamente la interacción en el WhatsApp línea "FLOR" 301.604.44.44, siguiendo los siguientes pasos:',
                items: [
                    'Saluda "Hola"',
                    'Acepta o no el tratamiento de datos',
                    'Escribe la palabra "Recuperar usuario"',
                    'Responde SI',
                    'Selecciona "No puedo recuperar"',
                    'Selecciona "Paso a Asesor"'
                ]
            },
            {
                subtitle: 'ACTUALIZAR DATOS',
                description: 'PASO A PASO PARA ACTUALIZAR DATOS:',
                items: [
                    'Ingresa a través de la página institucional www.medellin.gov.co',
                    'Realiza registro o inicia sesión con NIT o Cedula y contraseña',
                    'Baja con el cursor y ubica la franja naranja "Secretaria de Hacienda"',
                    'Ingresa al campo "portal tributario"',
                    'Selecciona "Impuesto predial unificado"',
                    'En la parte izquierda en "Servicios en Linea" selecciona "Actualizar Datos".'
                ]
            }
        ]
    },
    'puntos-atencion': {
        title: 'Puntos de Atención',
        content: [
            {
                subtitle: '1. Mascerca Guayabal',
                description: 'Dirección: Carrera 52 N°9 sur 42. Horario de atención: lunes a viernes 7:30 a. m. a 5:00 p. m. (jornada continua).',
                items: []
            },
            {
                subtitle: '2. Mascerca Belén (SOLO ESTE PUNTO ENTREGA FACTURA)',
                description: 'Dirección: Carrera 76 N°32 – 74. Horario de atención: lunes a viernes de 7:30 a. m. a 5:00 p. m. (jornada continua). Horario de atención Centro Comerciales: lunes a viernes de 7:30 a.m. a 12:30 p.m. y de 1:30 p.m. a 5:00 p.m.',
                items: []
            },
            {
                subtitle: '3. Mascerca Poblado (SOLO ESTE PUNTO ENTREGA FACTURA)',
                description: 'Dirección: Carrera 43 D N°11 – 02. Horario de atención: lunes a viernes de 7:30 a. m. a 5:00 p. m. (jornada continua). Horario de atención Centro Comerciales: lunes a viernes de 7:30 a.m. a 12:30 p.m. y de 1:30 p.m. a 5:00 p.m.',
                items: []
            },
            {
                subtitle: '4. Mascerca La Floresta',
                description: 'Dirección: Carrera 89 B N 48 A – 37. Horario de atención: lunes a viernes de 7:30 a. m. a 5:00 p. m. (jornada continua).',
                items: []
            },
            {
                subtitle: '5. Mascerca Castilla',
                description: 'Dirección: Carrera 65 N°100 – 123. Horario de atención: lunes a viernes de 7:30 a. m. a 5:00 p. m. (jornada continua).',
                items: []
            },
            {
                subtitle: '6. Centro de Servicio a la Ciudadanía La Alpujarra',
                description: 'Dirección: Calle 44 N°52-165, ubicado en el sótano A del Centro Administrativo Distrital – CAD -. Horario de atención de lunes a jueves de 7:30 a. m. a 5:00 p.m. y viernes de 7:30 a. m. hasta las 4:00 p.m.',
                items: []
            },
            {
                subtitle: '7. Centro de Servicio a la Ciudadanía Robledo',
                description: 'Dirección: Calle 85 N°79 – 173. Horario de atención: lunes a jueves de 7:30 a. m. a 12.30 m. y de 1:30 p. m. a 5:30 p. m. viernes: 7:30 a. m. a 12:30 p. m. y de 1:30 p. m. a 4:30 p. m.',
                items: []
            },
            {
                subtitle: '8. Centro de Servicio a la Ciudadanía La Ladera',
                description: 'Dirección: Calle 59 A N°36 – 30, local 2. Horario de Atención: lunes a jueves de 7:30 a. m. a 12:30 m. y de 1:00 p. m. a 5:00 p. m. viernes: 7:30 a. m. a 12:30 m. y de 1:00 p. m. a 4:00 p. m.',
                items: []
            },
            {
                subtitle: '9. Centro de Servicio a la Ciudadanía Santo Domingo',
                description: 'Dirección: Carrera 32 N°102 A – 45. Horario de atención: lunes a jueves de 7:30 a. m. a 12:30 m. y de 1:00 p. m. a 5:00 p. m. viernes: 7:30 a. m. a 12:30 m. y de 1:00 p. m. a 4:00 p. m.',
                items: []
            },
            {
                subtitle: '10. Centro de Servicio a la Ciudadanía Villa del Socorro',
                description: 'Dirección: Calle 104 B N°48 – 60. Horario de atención: lunes a jueves: 8:00 a. m. a 12:30 m. y de 1:00 p. m. a 5:00 p. m. viernes: 8:00 a. m. a 12:30 m. y de 1:00 p. m. a 4:00 p. m.',
                items: []
            },
            {
                subtitle: '11. Centro de Servicio a la Ciudadanía El Bosque',
                description: 'Dirección: Carrera 52 N° 1 – 84. Horario de atención: lunes a jueves 7:30 a.m. a 12:30 m. y de 1:30 p. m. a 5:00 p. m. viernes de 7:30 a. m. a 12:30 m. y de 1:30 p. m. a 4:30 p. m.',
                items: []
            },
            {
                subtitle: '12. Centro de Servicio a la Ciudadanía Veinte de Julio',
                description: 'Dirección: Calle 39 C N° 109 – 24. Horario de atención: lunes a jueves 7:30 a.m. a 12:30 m. y de 1:30 p. m. a 5:00 p.m. viernes de 7:30 a. m. a 12:30 m. y de 1:30 p. m. a 4:00 p. m.',
                items: []
            },
            {
                subtitle: '13. Centro de Servicio a la Ciudadanía Manrique',
                description: 'Dirección: Carrera 43 N° 66 E - 41, Local 1. Horario de atención: lunes a jueves de 7:30 a. m. a 12.30 m. y de 1:00 p. m. a 5:00 p. m. viernes de 7:30 a. m. a 12:30 p. m. y de 1:00 p. m. a 4:00 p. m.',
                items: []
            },
            {
                subtitle: '14. Centro de Servicio a la Ciudadanía AltaVista',
                description: 'Dirección: Calle 18 N° 105 – 69. Horario de atención: Primer y último martes de cada mes de 7:00 a. m. a 12:30 m. y de 1:00 p. m. a 4:30 p. m.',
                items: []
            },
            {
                subtitle: '15. Centro de Servicios a la Ciudadanía Santa Elena',
                description: 'Dirección: Calle 10 N°40 este 44 Kilómetro 15 -700, parque principal. Horario de atención: miércoles: 7:30 a. m. a 12:30 p. m. y de 1:30 p. m. a 5:00 p. m.',
                items: []
            },
            {
                subtitle: '16. Centro de Servicios a la Ciudadanía San Sebastián de Palmitas',
                description: 'Dirección: Carrera 197 N°137 -140, Kilómetro 2 N° 330 vía Palmitas. Horario de atención: jueves: 7:30 a. m. a 12:00 p. m. y de 1:00 p. m. a 4:00 p. m.',
                items: []
            },
            {
                subtitle: '17. Centro de Servicio a La Ciudadanía San Antonio de Prado',
                description: 'Dirección: Carrera 79 N° 41 sur 36. Horario de atención: lunes a jueves de 7:30 a. m. a 12:30 m. y de 1:30 p. m. a 5:30 p. m. viernes de 7:30 a. m. a 12:30 m. y de 1:30 p. m. a 4:30 p. m.',
                items: []
            },
            {
                subtitle: '18. Centro de Servicio a la Ciudadanía San Cristóbal',
                description: 'Dirección: Carrera 131 N° 60 D 67. Horario de atención: lunes a jueves de 7:30 a. m. a 12.30 p. m. y de 1:30 p. m. a 5:30 p. m. viernes de 7:30 a. m. a 12:30 p. m. y de 1:30 p. m. a 4:30 p. m.',
                items: []
            },
            {
                subtitle: 'CENTROS COMERCIALES',
                description: 'CENTRO COMERCIAL EL TESORO: Primer piso, ala sur, frente al ingreso de la torre medica 1. CENTRO COMERCIAL LOS MOLINOS: Cuarto piso, en el ingreso al parqueadero, frete al punto de pago. CENTRO COMERCIAL FLORIDA: Segundo piso, etapa 2, al frente de claro. CENTRO COMERCIAL PREMIUM PLAZA: Segundo piso, torre sur, al lado de Dunkin Donuts. Horario: lunes a viernes de 10:00 a.m. a 1:30 p.m. y de 2:30 p.m. a 6:30 p.m. Sábados de 11:00 a.m. a 2:00 p.m.',
                items: []
            },
            {
                subtitle: 'Servicios Tributarios',
                description: 'Se encuentra en la Alpujarra, calle 44 # 52 165, horario de atención de lunes a jueves de 7:30 a. m. a 5:00 p.m. y viernes de 7:30 a. m. hasta las 4:00 p.m.',
                items: []
            },
            {
                subtitle: 'Plaza Mayor',
                description: 'Plaza mayor pabellón Medellín, calle 41 #55-80, horario de atención de lunes a jueves de 7:30 a. m. a 5:00 p.m. y viernes de 7:30 a. m. hasta las 4:00 p.m.',
                items: []
            },
            {
                subtitle: 'WhatsApp línea "FLOR"',
                description: 'Número: 301-604-4444',
                items: []
            }
        ]
    },
    'documentos-requeridos': {
        title: 'Documentos Requeridos',
        content: [
            {
                subtitle: 'Solicitud presentada directamente por persona natural titular del dato',
                description: 'La acreditación de su legitimación se realizará mediante la presentación del documento de identidad del titular ante el funcionario o personal de apoyo que reciba la solicitud, lo cual se hará constar en el respectivo registro',
                items: []
            },
            {
                subtitle: 'Contribuyente Fallecido',
                description: 'Presencial: Puede acercarse a cualquiera de nuestros puntos de atención habilitados, presentando el registro civil (documento que acredite el parentesco) junto con el acta de defunción.',
                items: [
                    'Inicialmente orientarlo a realizar el trámite virtual'
                ]
            },
            {
                subtitle: 'Solicitud presentada por un tercero autorizado o apoderado en nombre de persona natural titular del dato (Opción 1)',
                description: 'La acreditación de la legitimación del tercero se validará con los siguientes anexos:',
                items: [
                    'Poder otorgado por el titular del dato, el cual deberá contener el reconocimiento de la firma ante Notario Público o autoridad competente, en el caso de la autorización la misma no requiere la ritualidad del poder basta con la firma',
                    'Presentación del documento de identidad del autorizado o apoderado ante el funcionario o personal de apoyo que reciba la solicitud, circunstancia que se hará constar en el respectivo registro.'
                ]
            },
            {
                subtitle: 'Solicitud presentada por un tercero autorizado o apoderado en nombre de persona natural titular del dato (Opción 2)',
                description: 'La acreditación de la legitimación del tercero se validará con los siguientes anexos:',
                items: [
                    'Poder otorgado por el titular del dato, el cual deberá contener el reconocimiento de la firma ante Notario Público o autoridad competente, en el caso de la autorización la misma no requiere la ritualidad del poder basta con la firma',
                    'Presentación del documento de identidad del autorizado o apoderado ante el funcionario o personal de apoyo que reciba la solicitud, circunstancia que se hará constar en el respectivo registro.'
                ]
            },
            {
                subtitle: 'Solicitud presentada directamente por el Representante Legal de persona jurídica titular del dato, o por cualquiera de sus suplentes',
                description: 'La acreditación de la legitimación del Representante Legal principal o su suplente, se realizará mediante:',
                items: [
                    'Presentación del documento de identidad del Representante Legal o su suplente ante el funcionario o personal de apoyo que reciba la solicitud, circunstancia que se hará constar en el respectivo registro.',
                    'Se debe tener en cuenta que, para acreditar la capacidad y representación del solicitante, el funcionario debe realizar la consulta en el Registro Único Empresarial y Social RUES.'
                ]
            },
            {
                subtitle: 'Solicitud presentada por un apoderado en nombre de persona jurídica titular del dato',
                description: 'La acreditación de la legitimación del apoderado, se realizará mediante:',
                items: [
                    'Poder otorgado por el Representante Legal de la persona jurídica titular del dato, que debe contener el reconocimiento de las respectivas firmas ante Notario Público o autoridad competente, en el caso de la autorización la misma no requiere la ritualidad del poder, basta con la firma.',
                    'Presentación del documento de identidad del autorizado o apoderado ante el funcionario o personal de apoyo que reciba la solicitud, circunstancia que se hará constar en el respectivo registro.',
                    'Se debe tener en cuenta que, para acreditar la capacidad y representación del representante legal, el funcionario debe realizar la consulta en el Registro Único Empresarial y Social RUES.'
                ]
            }
        ]
    },
    'interaccion': {
        title: 'Interacción',
        content: [
            {
                subtitle: 'Saludo General',
                description: 'Buen día, gracias por comunicarte con la Unidad de Cobranzas del Distrito de Medellín. Mi nombre es (Nombre de Agente), ¿En que puedo servirle?',
                items: []
            },
            {
                subtitle: 'Asignación de cita gestores',
                description: 'Si necesitas una atención más personalizada, desde la Unidad de Cobranzas podemos agendarte una cita para que uno de nuestros gestores profesionales te oriente sobre las alternativas de pago disponibles. Estamos para ayudarte a encontrar la mejor solución según tu situación.',
                items: [
                    'Para finalizar el agendamiento le informo que estamos ubicados en el 1er piso de la Alcaldía en la oficina 124, en la unidad de cobro persuasivo. Mi nombre es mi teléfono si requiere re-programar o cancelar la cita es (604) 385 55 55 ext. 0000'
                ]
            },
            {
                subtitle: 'Verificación de identidad',
                description: '✅ Perfecto!, Para continuar con la atención, por favor indícanos la siguiente información:',
                items: [
                    'Nombre completo del titular de la deuda',
                    'Tipo y número de documento de identidad O NIT',
                    'Correo electrónico:',
                    '¿Eres el titular de la deuda? o si es empresa indícanos por favor nombre y cargo que desempeñas en la misma.',
                    'Esta verificación nos permite brindarte una orientación segura y personalizada sobre tus opciones de pago.'
                ]
            },
            {
                subtitle: 'Opciones de respuesta en el desarrollo de la llamada',
                description: 'Frases útiles durante la interacción telefónica:',
                items: [
                    'Para mí es un gusto atenderle de la mejor manera, ¿cómo puedo servirle?',
                    'Le agradezco que por favor me indique cómo puedo servirle, la interacción finaliza al llevar cuatro (4) minutos de inactividad.',
                    '¿Aún se encuentra en línea?',
                    'Gracias. Deme por favor un momento, consulto la información que solicita.',
                    'Gracias por su espera.',
                    'Cuénteme, ¿cómo va con el proceso?',
                    'Cuénteme, ¿La información suministrada es clara?',
                    'Deme un momento más, estoy validando con el área encargada.',
                    'Deme un momento y con mucho gusto se la comparto nuevamente.',
                    '¿Algo más en lo que le pueda servir?',
                    'Para su información, la interacción finaliza al llevar cuatro (4) minutos de inactividad.'
                ]
            },
            {
                subtitle: 'Despedidas',
                description: 'Frases para finalizar la interacción:',
                items: [
                    'Con mucho gusto, gracias por comunicarte, por ahora doy por finalizada nuestra interacción, recuerda que también tienes a tu disposición todo un conjunto de canales de atención para atenderte cuando lo necesites ¡Feliz día! 👋',
                    'La interacción finalizará porque superamos el tiempo de espera indicado. Le invitamos a comunicarse nuevamente con nosotros, muchas gracias.',
                    'Muchas gracias por comunicarse con el Distrito de Medellín, fue un gusto atenderle.'
                ]
            },
            {
                subtitle: 'Otras entidades',
                description: 'Respuesta cuando la solicitud no corresponde al Distrito de Medellín:',
                items: [
                    'Su solicitud no corresponde al Distrito de Medellín. Le invitamos a comunicarse a la entidad que requiere.'
                ]
            },
            {
                subtitle: 'Disculpas por fallas',
                description: 'Frases para disculparse por inconvenientes técnicos:',
                items: [
                    'Buen día, ofrecemos disculpas, presentamos dificultades con la red, en que puedo servirle?',
                    'Le ofrezco disculpas por el tiempo de espera, tenía inconveniente con el sistema.',
                    'Le pido disculpas por la espera, presenté inconvenientes con la conexión.'
                ]
            }
        ]
    }
};;

// Initialize concept selector for Rentas
function initConceptSelector() {
    const selector = document.getElementById('conceptSelector');
    const infoDisplay = document.getElementById('conceptInfo');

    if (!selector || !infoDisplay) return;

    selector.addEventListener('change', (e) => {
        const conceptKey = e.target.value;
        
        if (conceptKey && conceptsData[conceptKey]) {
            displayConceptInfo(conceptsData[conceptKey]);
            infoDisplay.style.display = 'block';
            infoDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            infoDisplay.style.display = 'none';
        }
    });
}

// Display concept information for Rentas
function displayConceptInfo(concept) {
    const infoDisplay = document.getElementById('conceptInfo');
    
    if (!infoDisplay) return;
    
    let html = `
        <h3 class="concept-title">${concept.title}</h3>
    `;
    
    if (concept.description) {
        html += `
            <div class="concept-description">
                <strong>¿Qué es?</strong><br>
                ${concept.description}
            </div>
        `;
    }
    
    html += '<div class="info-grid">';
    
    // ¿Dónde se genera la factura?
    html += `
        <div class="info-item">
            <h4>📄 ¿Dónde se genera la factura?</h4>
            <p>${concept.factura}</p>
    `;
    
    if (concept.email) {
        html += `<p><strong>Email:</strong> <a href="mailto:${concept.email}">${concept.email}</a></p>`;
    }
    
    if (concept.emails && concept.emails.length > 0) {
        html += '<p><strong>Emails:</strong></p>';
        concept.emails.forEach(email => {
            html += `<p><a href="mailto:${email}">${email}</a></p>`;
        });
    }
    
    if (concept.whatsapp) {
        html += `<p><strong>WhatsApp:</strong> <a href="https://wa.me/57${concept.whatsapp.replace(/\s/g, '')}" target="_blank">${concept.whatsapp}</a></p>`;
    }
    
    html += '</div>';
    
    // ¿Si tengo dudas a dónde me dirijo?
    html += `
        <div class="info-item">
            <h4>❓ ¿Si tengo dudas a dónde me dirijo?</h4>
            <p>${concept.dudas}</p>
    `;
    
    if (concept.telefono) {
        html += `<p><strong>Teléfono:</strong> ${concept.telefono}</p>`;
    }
    
    html += '</div>';
    
    // Alternativas de pago
    html += `
        <div class="info-item">
            <h4>💳 Alternativas de Pago</h4>
            <p><strong>Pago Virtual:</strong> ${concept.virtual ? '✅ Disponible' : '❌ No disponible'}</p>
            <p><strong>Abonos:</strong> ${concept.abonos ? '✅ Disponible' : '❌ No disponible'}</p>
            <p><strong>Facilidad de Pago (Montos superiores a $875.452):</strong> ${concept.facilidad ? '✅ Disponible' : '❌ No disponible'}</p>
    `;
    
    if (concept.asesoriaFacilidades) {
        html += '<p><strong>👉 Remitir para Asesoría Facilidades de Pago</strong></p>';
    }
    
    html += '</div>';
    
    // ¿Dónde pago?
    html += `
        <div class="info-item">
            <h4>🏦 ¿Dónde Pago?</h4>
    `;
    
    if (concept.botonPagaFacil) {
        html += '<p><a href="https://www.medellin.gov.co/irj/portal/medellin/boton-paga-facil" target="_blank">💳 Botón Paga Fácil</a></p>';
    } else {
        html += '<p><strong>Botón Paga Fácil:</strong> ❌ No disponible</p>';
    }
    
    if (concept.botonPagos) {
        html += '<p><a href="https://www.medellin.gov.co/irj/portal/medellin/boton-pagos" target="_blank">💳 Botón de Pagos</a></p>';
    } else {
        html += '<p><strong>Botón de Pagos:</strong> ❌ No disponible</p>';
    }
    
    if (concept.bancosEspecificos) {
        html += '<p><strong>Bancos autorizados:</strong></p>';
        const bancosEspecificosArray = concept.bancosEspecificos.split(',').map(b => b.trim());
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-top: 1rem;">';
        bancosEspecificosArray.forEach(banco => {
            html += `<span style="background: linear-gradient(135deg, #E8F5E9, #C8E6C9); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem; text-align: center; border: 1px solid #4CAF50; font-weight: 600;">${banco}</span>`;
        });
        html += '</div>';
    } else if (concept.bancos) {
        html += '<p><strong>Bancos autorizados:</strong></p>';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-top: 1rem;">';
        bancosAutorizados.forEach(banco => {
            html += `<span style="background: linear-gradient(135deg, #E8F5E9, #C8E6C9); padding: 0.75rem; border-radius: 8px; font-size: 0.9rem; text-align: center; border: 1px solid #4CAF50; font-weight: 600;">${banco}</span>`;
        });
        html += '</div>';
    } else {
        html += '<p><strong>Bancos autorizados:</strong> ❌ No disponible</p>';
    }
    
    html += '</div>';
    
    html += '</div>'; // Close info-grid
    
    infoDisplay.innerHTML = html;
}

// Initialize interaccion links for Preguntas Flor
function initInteraccionLinks() {
    const selector = document.getElementById('preguntaSelector');
    const detalleDiv = document.getElementById('detalleInteraccion');

    if (!selector || !detalleDiv) return;

    selector.addEventListener('change', (e) => {
        const interaccionKey = e.target.value;
        
        if (interaccionKey && preguntasFlorData[interaccionKey]) {
            displayPreguntaInfo(preguntasFlorData[interaccionKey]);
            detalleDiv.style.display = 'block';
            detalleDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            detalleDiv.style.display = 'none';
        }
    });
}

// Display pregunta information for Preguntas Flor
function displayPreguntaInfo(pregunta) {
    const detalleDiv = document.getElementById('detalleInteraccion');
    
    if (!detalleDiv) return;
    
    let html = `<h3 class="concept-title">${pregunta.title}</h3>`;
    
    html += '<div class="info-grid">';
    
    pregunta.content.forEach(item => {
        // Process description to handle bold text
        let processedDescription = item.description;
        if (processedDescription.includes('**')) {
            processedDescription = processedDescription.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }
        
        html += `
            <div class="info-item">
                <h4>${item.subtitle}</h4>
                <p>${processedDescription}</p>
                <ul>
        `;
        
        item.items.forEach(listItem => {
            // Process list items to handle bold text and links
            // Also remove bullet points, asterisks, and hyphens
            let processedItem = listItem.replace(/^\*\*|\*\*$|^✅|^\d+\.\s*|^[-–—]\s*/g, '').replace(/^\s*[-–—]\s*/g, '').trim();
            if (processedItem.includes('**')) {
                processedItem = processedItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            }
            if (processedItem.includes('🔗')) {
                const urlMatch = processedItem.match(/(https?:\/\/[^\s]+)/);
                if (urlMatch) {
                    const url = urlMatch[1];
                    processedItem = processedItem.replace(url, `<a href="${url}" target="_blank">${url}</a>`);
                }
            }
            if (processedItem.includes('📧')) {
                const emailMatch = processedItem.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,}/);
                if (emailMatch) {
                    const email = emailMatch[0];
                    processedItem = processedItem.replace(email, `<a href="mailto:${email}">${email}</a>`);
                }
            }
            if (processedItem.includes('📱')) {
                const phoneMatch = processedItem.match(/\d{3} \d{3} \d{2} \d{2}/);
                if (phoneMatch) {
                    const phone = phoneMatch[0];
                    processedItem = processedItem.replace(phone, `<a href="https://wa.me/57${phone.replace(/\s/g, '')}" target="_blank">${phone}</a>`);
                }
            }
            html += `<li>${processedItem}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
    });
    
    html += '</div>';
    
    detalleDiv.innerHTML = html;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the rentas page or preguntas-flor page
    if (document.getElementById('conceptSelector')) {
        initConceptSelector();
    }
    if (document.getElementById('preguntaSelector')) {
        initInteraccionLinks();
    }
    
    console.log('✅ Sistema de Rentas e Interacciones inicializado correctamente');
});