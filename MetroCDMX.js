// Mapa del Metro en Dicc
const estacionesMetro = {
    //Linea1
    "Pantitlan_L1": { linea: "Linea 1", lat: 19.416346568002734, lon: -99.07471810675584, conexiones: { "Zaragoza_L1": null }, transbordo: ["Linea 5", "Linea 9", "Linea A"] },
    "Zaragoza_L1": { linea: "Linea 1", lat: 19.41201892533155, lon: -99.08260311932744, conexiones: { "Pantitlan_L1": null, "GomezFarias_L1": null } },
    "GomezFarias_L1": { linea: "Linea 1", lat: 19.41647245993287, lon: -99.09020649548454, conexiones: { "Zaragoza_L1": null, "PuertoAereo_L1": null } },
    "PuertoAereo_L1": { linea: "Linea 1", lat: 19.419622560611458, lon: -99.09593414569196, conexiones: { "GomezFarias_L1": null, "Balbuena_L1": null } },
    "Balbuena_L1": { linea: "Linea 1", lat: 19.42363599450113, lon: -99.10341314134513, conexiones: { "PuertoAereo_L1": null, "Moctezuma_L1": null } },
    "Moctezuma_L1": { linea: "Linea 1", lat: 19.426847545948714, lon: -99.10977859055589, conexiones: { "Balbuena_L1": null, "SanLazaro_L1": null } },
    "SanLazaro_L1": { linea: "Linea 1", lat: 19.430638834483155, lon: -99.11440674376232, conexiones: { "Moctezuma_L1": null, "Candelaria_L1": null }, transbordo: ["Linea B"] },
    "Candelaria_L1": { linea: "Linea 1", lat: 19.429532274554507, lon: -99.1208855850529, conexiones: { "SanLazaro_L1": null, "Merced_L1": null }, transbordo: ["Linea 4"] },
    "Merced_L1": { linea: "Linea 1", lat: 19.425459791674154, lon: -99.1250422614332, conexiones: { "Candelaria_L1": null, "PinoSuarez_L1": null } },
    "PinoSuarez_L1": { linea: "Linea 1", lat: 19.425921429180413, lon: -99.13264162667551, conexiones: { "Merced_L1": null, "IsabelLaCatolica_L1": null }, transbordo: ["Linea 2"] },
    "IsabelLaCatolica_L1": { linea: "Linea 1", lat: 19.426457182871754, lon: -99.13779158269499, conexiones: { "PinoSuarez_L1": null, "SaltoDelAgua_L1": null } },
    "SaltoDelAgua_L1": { linea: "Linea 1", lat: 19.426845812003492, lon: -99.14301166020721, conexiones: { "IsabelLaCatolica_L1": null, "Balderas_L1": null }, transbordo: ["Linea 8"] },
    "Balderas_L1": { linea: "Linea 1", lat: 19.427188269750886, lon: -99.14876236180146, conexiones: { "SaltoDelAgua_L1": null, "Cuauhtemoc_L1": null }, transbordo: ["Linea 3"] },
    "Cuauhtemoc_L1": { linea: "Linea 1", lat: 19.425666835510558, lon: -99.15458240795678, conexiones: { "Balderas_L1": null, "Insurgentes_L1": null } },
    "Insurgentes_L1": { linea: "Linea 1", lat: 19.42362078196988, lon: -99.16329646728565, conexiones: { "Cuauhtemoc_L1": null, "Sevilla_L1": null } },
    "Sevilla_L1": { linea: "Linea 1", lat: 19.42182449112227, lon: -99.17117518520868, conexiones: { "Insurgentes_L1": null, "Chapultepec_L1": null } },
    "Chapultepec_L1": { linea: "Linea 1", lat: 19.42061497580374, lon: -99.17690802354596, conexiones: { "Sevilla_L1": null, "Juanacatlan_L1": null } },
    "Juanacatlan_L1": { linea: "Linea 1", lat: 19.412932387732305, lon: -99.18198940120304, conexiones: { "Chapultepec_L1": null, "Tacubaya_L1": null } },
    "Tacubaya_L1": { linea: "Linea 1", lat: 19.40194892653364, lon: -99.18746474208768, conexiones: { "Juanacatlan_L1": null, "Observatorio_L1": null }, transbordo: ["Linea 7", "Linea 9"] },
    "Observatorio_L1": { linea: "Linea 1", lat: 19.398258323108855, lon: -99.20041006476093, conexiones: { "Tacubaya_L1": null } },

    //Linea2
    "CuatroCaminos_L2": { linea: "Linea 2", lat: 19.45964555754216, lon: -99.21581862304885, conexiones: { "Panteones_L2": null } },
    "Panteones_L2": { linea: "Linea 2", lat: 19.45864446373171, lon: -99.20296062619018, conexiones: { "CuatroCaminos_L2": null, "Tacuba_L2": null } },
    "Tacuba_L2": { linea: "Linea 2", lat: 19.459237191559183, lon: -99.18756375205419, conexiones: { "Panteones_L2": null, "Cuitlahuac_L2": null }, transbordo: ["Linea 7"] },
    "Cuitlahuac_L2": { linea: "Linea 2", lat: 19.45715605886582, lon: -99.18141810971233, conexiones: { "Tacuba_L2": null, "Popotla_L2": null } },
    "Popotla_L2": { linea: "Linea 2", lat: 19.45289730541273, lon: -99.17550099903585, conexiones: { "Cuitlahuac_L2": null, "ColegioMilitar_L2": null } },
    "ColegioMilitar_L2": { linea: "Linea 2", lat: 19.449279577728024, lon: -99.1718013185171, conexiones: { "Popotla_L2": null, "Normal_L2": null } },
    "Normal_L2": { linea: "Linea 2", lat: 19.444504355467963, lon: -99.16724413142597, conexiones: { "ColegioMilitar_L2": null, "SanCosme_L2": null } },
    "SanCosme_L2": { linea: "Linea 2", lat: 19.441892146246893, lon: -99.16071467741405, conexiones: { "Normal_L2": null, "Revolucion_L2": null } },
    "Revolucion_L2": { linea: "Linea 2", lat: 19.439194257185548, lon: -99.15424002256023, conexiones: { "SanCosme_L2": null, "Hidalgo_L2": null } },
    "Hidalgo_L2": { linea: "Linea 2", lat: 19.437514374506197, lon: -99.14715738930096, conexiones: { "Revolucion_L2": null, "BellasArtes_L2": null }, transbordo: ["Linea 3"] },
    "BellasArtes_L2": { linea: "Linea 2", lat: 19.43636817558209, lon: -99.14162887160025, conexiones: { "Hidalgo_L2": null, "Allende_L2": null }, transbordo: ["Linea 8"] },
    "Allende_L2": { linea: "Linea 2", lat: 19.43554304451438, lon: -99.13686986504459, conexiones: { "BellasArtes_L2": null, "Zocalo_L2": null } },
    "Zocalo_L2": { linea: "Linea 2", lat: 19.432477217499418, lon: -99.13229267633895, conexiones: { "Allende_L2": null, "PinoSuarez_L2": null } },
    "PinoSuarez_L2": { linea: "Linea 2", lat: 19.426085804411898, lon: -99.13302400713985, conexiones: { "Zocalo_L2": null, "SanAntonioAbad_L2": null }, transbordo: ["Linea 1"] },
    "SanAntonioAbad_L2": { linea: "Linea 2", lat: 19.415766559190356, lon: -99.13457684719874, conexiones: { "PinoSuarez_L2": null, "Chabacano_L2": null } },
    "Chabacano_L2": { linea: "Linea 2", lat: 19.409135176414267, lon: -99.13560739853418, conexiones: { "SanAntonioAbad_L2": null, "Viaducto_L2": null }, transbordo: ["Linea 8", "Linea 9"] },
    "Viaducto_L2": { linea: "Linea 2", lat: 19.400847944838645, lon: -99.13690026225231, conexiones: { "Chabacano_L2": null, "Xola_L2": null } },
    "Xola_L2": { linea: "Linea 2", lat: 19.395184375560333, lon: -99.13781960797908, conexiones: { "Viaducto_L2": null, "VillaDeCortes_L2": null } },
    "VillaDeCortes_L2": { linea: "Linea 2", lat: 19.387584249656882, lon: -99.13897761238846, conexiones: { "Xola_L2": null, "Nativitas_L2": null } },
    "Nativitas_L2": { linea: "Linea 2", lat: 19.37951317994838, lon: -99.14018863891316, conexiones: { "VillaDeCortes_L2": null, "Portales_L2": null } },
    "Portales_L2": { linea: "Linea 2", lat: 19.369825430908634, lon: -99.14158429882508, conexiones: { "Nativitas_L2": null, "Ermita_L2": null } },
    "Ermita_L2": { linea: "Linea 2", lat: 19.36112710888874, lon: -99.1430165891545, conexiones: { "Portales_L2": null, "GeneralAnaya_L2": null }, transbordo: ["Linea 12"] },
    "GeneralAnaya_L2": { linea: "Linea 2", lat: 19.35315245393468, lon: -99.14502147590753, conexiones: { "Ermita_L2": null, "Tasqueña_L2": null } },
    "Tasqueña_L2": { linea: "Linea 2", lat: 19.343776048201242, lon: -99.13988400524006, conexiones: { "GeneralAnaya_L2": null } },

    //Linea3
    "IndiosVerdes_L3": { linea: "Linea 3", lat: 19.49500637616272, lon: -99.11960522037242, conexiones: { "Deportivo18DeMarzo_L3": null } },
    "Deportivo18DeMarzo_L3": { linea: "Linea 3", lat: 19.485112029771106, lon: -99.12548983544198, conexiones: { "IndiosVerdes_L3": null, "Potrero_L3": null }, transbordo:["Linea 6"] },
    "Potrero_L3": { linea: "Linea 3", lat: 19.47719422488105, lon: -99.13201065111686, conexiones: { "Deportivo18DeMarzo_L3": null, "LaRaza_L3": null } },
    "LaRaza_L3": { linea: "Linea 3", lat: 19.46821210435031, lon: -99.13940062900578, conexiones: { "Potrero_L3": null, "Tlatelolco_L3": null}, transbordo:["Linea 5"]},
    "Tlatelolco_L3": { linea: "Linea 3", lat: 19.455052527848075, lon: -99.14317385171651, conexiones: { "LaRaza_L3": null, "Guerrero_L3": null } },
    "Guerrero_L3": { linea: "Linea 3", lat: 19.444688940473824, lon: -99.14517769665439, conexiones: { "Tlatelolco_L3": null, "Hidalgo_L3": null }, transbordo:["Linea B"]},
    "Hidalgo_L3": { linea: "Linea 3", lat: 19.437447325036306, lon: -99.14675976926199, conexiones: { "Guerrero_L3": null, "Juarez_L3": null }, transbordo:["Linea 2"] },
    "Juarez_L3": { linea: "Linea 3", lat: 19.43324967698265, lon: -99.14767441941119, conexiones: { "Hidalgo_L3": null, "Balderas_L3": null } },
    "Balderas_L3": { linea: "Linea 3", lat: 19.42721560114943, lon: -99.14893172742488, conexiones: { "Juarez_L3": null, "NiñosHeroes_L3": null }, transbordo:["Linea 1"] },
    "NiñosHeroes_L3": { linea: "Linea 3", lat: 19.419467786723043, lon: -99.15039458755332, conexiones: { "Balderas_L3": null, "HospitalGeneral_L3": null } },
    "HospitalGeneral_L3": { linea: "Linea 3", lat: 19.4137581077223, lon: -99.15324881673446, conexiones: { "NiñosHeroes_L3": null, "CentroMedico_L3": null } },
    "CentroMedico_L3": { linea: "Linea 3", lat: 19.406548014187997, lon: -99.15516729865539, conexiones: { "HospitalGeneral_L3": null, "Etiopia_L3": null }, transbordo:["Linea 9"] },
    "Etiopia_L3": { linea: "Linea 3", lat: 19.395903278242034, lon: -99.15599892045176, conexiones: { "CentroMedico_L3": null, "Eugenia_L3": null } },
    "Eugenia_L3": { linea: "Linea 3", lat: 19.386168035328318, lon: -99.15720130980334, conexiones: { "Etiopia_L3": null, "DivisionDelNorte_L3": null } },
    "DivisionDelNorte_L3": { linea: "Linea 3", lat: 19.379217942009383, lon: -99.15944341615472, conexiones: { "Eugenia_L3": null, "Zapata_L3": null } },
    "Zapata_L3": { linea: "Linea 3", lat: 19.370662659891575, lon: -99.1648425412579, conexiones: { "DivisionDelNorte_L3": null, "Coyoacan_L3": null }, transbordo:["Linea 12"]},
    "Coyoacan_L3": { linea: "Linea 3", lat: 19.36136502962451, lon: -99.17085792438398, conexiones: { "Zapata_L3": null, "Viveros_L3": null } },
    "Viveros_L3": { linea: "Linea 3", lat: 19.35403330920393, lon: -99.17539506840026, conexiones: { "Coyoacan_L3": null, "MiguelAngelDeQuevedo_L3": null } },
    "MiguelAngelDeQuevedo_L3": { linea: "Linea 3", lat: 19.346255027199728, lon: -99.18075130604973, conexiones: { "Viveros_L3": null, "Copilco_L3": null } },
    "Copilco_L3": { linea: "Linea 3", lat: 19.33617921050412, lon: -99.17706065506934, conexiones: { "MiguelAngelDeQuevedo_L3": null, "Universidad_L3": null } },
    "Universidad_L3": { linea: "Linea 3", lat: 19.324408702325666, lon: -99.17391479012676, conexiones: { "Copilco_L3": null } },

    //Linea4
    "MartinCarrera_L4": { linea: "Linea 4", lat: 19.484989779507483, lon: -99.10438558148813, conexiones: { "Talisman_L4": null }, transbordo:["Linea 6"] },
    "Talisman_L4": { linea: "Linea 4", lat: 19.474368791850363, lon: -99.10799699651739, conexiones: { "MartinCarrera_L4": null, "Bondojito_L4": null } },
    "Bondojito_L4": { linea: "Linea 4", lat: 19.465012982056937, lon: -99.11182513955161, conexiones: { "Talisman_L4": null, "Consulado_L4": null } },
    "Consulado_L4": { linea: "Linea 4", lat: 19.458015822231715, lon: -99.11392001312882, conexiones: { "Bondojito_L4": null, "CanalDelNorte_L4": null}, transbordo:["Linea 5"] },
    "CanalDelNorte_L4": { linea: "Linea 4", lat: 19.44910938910508, lon: -99.11609807677297, conexiones: { "Consulado_L4": null, "Morelos_L4": null } },
    "Morelos_L4": { linea: "Linea 4", lat: 19.439682416944333, lon: -99.11816201813235, conexiones: { "CanalDelNorte_L4": null, "Candelaria_L4": null}, transbordo:["Linea B"] },
    "Candelaria_L4": { linea: "Linea 4", lat: 19.42872249361837, lon: -99.11943471706562, conexiones: { "Morelos_L4": null, "FrayServando_L4": null }, transbordo:["Linea 1"] },
    "FrayServando_L4": { linea: "Linea 4", lat: 19.421580736912805, lon: -99.120535741274, conexiones: { "Candelaria_L4": null, "Jamaica_L4": null } },
    "Jamaica_L4": { linea: "Linea 4", lat: 19.41094468596232, lon: -99.12174001321272, conexiones: { "FrayServando_L4": null, "SantaAnita_L4": null }, transbordo: ["Linea 9"] },
    "SantaAnita_L4": { linea: "Linea 4", lat: 19.4029747673062, lon: -99.12165726272582, conexiones: { "FrayServando_L4": null }, transbordo:["Linea 8"] },

    //Linea5
    "Pantitlan_L5": { linea: "Linea 5", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Hangares_L5": null }, transbordo:["Linea 1","Linea 9", "Linea A"] },
    "Hangares_L5": { linea: "Linea 5", lat: 19.42438546132196, lon: -99.08830166546319, conexiones: { "Pantitlan_L5": null, "TerminalAerea_L5": null } },
    "TerminalAerea_L5": { linea: "Linea 5", lat: 19.434169788734238, lon: -99.08816882239026, conexiones: { "Hangares_L5": null, "Oceania_L5": null } },
    "Oceania_L5": { linea: "Linea 5", lat: 19.445012211656497, lon: -99.08686055918606, conexiones: { "TerminalAerea_L5": null, "Aragon_L5": null}, transbordo:["Linea B"] },
    "Aragon_L5": { linea: "Linea 5", lat: 19.451265236670825, lon: -99.09618535060508, conexiones: { "Oceania_L5": null, "EduardoMolina_L5": null } },
    "EduardoMolina_L5": { linea: "Linea 5", lat: 19.451368805565508, lon: -99.10530386171281, conexiones: { "Aragon_L5": null, "Consulado_L5": null } },
    "Consulado_L5": { linea: "Linea 5", lat: 19.455143076537077, lon: -99.11355409956799, conexiones: { "EduardoMolina_L5": null, "ValleGomez_L5": null }, transbordo: ["Linea 4"] },
    "ValleGomez_L5": { linea: "Linea 5", lat: 19.458848267675886, lon: -99.11946560308647, conexiones: { "Consulado_L5": null, "Misterios_L5": null } },
    "Misterios_L5": { linea: "Linea 5", lat: 19.463181642560002, lon: -99.13038687362682, conexiones: { "ValleGomez_L5": null, "LaRaza_L5": null } },
    "LaRaza_L5": { linea: "Linea 5", lat: 19.469692204493878, lon: -99.13651172947763, conexiones: { "Misterios_L5": null, "AutobusesDelNorte_L5": null } , transbordo:["Linea 3"]},
    "AutobusesDelNorte_L5": { linea: "Linea 5", lat: 19.478978523824495, lon: -99.1406221134204, conexiones: { "LaRaza_L5": null, "InstitutoDelPetroleo_L5": null } },
    "InstitutoDelPetroleo_L5": { linea: "Linea 5", lat: 19.489312416329174, lon: -99.14471676243622, conexiones: { "AutobusesDelNorte_L5": null, "Politecnico_L5": null }, transbordo: ["Linea 6"] },
    "Politecnico_L5": { linea: "Linea 5", lat: 19.500690226493152, lon: -99.14921943397655, conexiones: { "InstitutoDelPetroleo_L5": null } },

    //Linea 6
    "MartinCarrera_L6": { linea: "Linea 6", lat: 19.482629546669983, lon: -99.10670405048371, conexiones: { "LaVillaBasilica_L6": null }, transbordo: ["Linea 4"] },
    "LaVillaBasilica_L6": { linea: "Linea 6", lat: 19.481727342214178, lon: -99.11837526261553, conexiones: { "MartinCarrera_L6": null, "Deportivo18DeMarzo_L6": null }, transbordo: ["Linea 3"] },
    "Deportivo18DeMarzo_L6": { linea: "Linea 6", lat: 19.484799485174207, lon: -99.12484067352135, conexiones: { "LaVillaBasilica_L6": null, "Lindavista_L6": null }, transbordo:["Linea 3"] },
    "Lindavista_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Deportivo18DeMarzo_L6": null, "InstitutoDelPetroleo_L6": null } },
    "InstitutoDelPetroleo_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Lindavista_L6": null, "Vallejo_L6": null } , transbordo:["Linea 5"]},
    "Vallejo_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "InstitutoDelPetroleo_L6": null, "Norte45_L6": null } },
    "Norte45_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Vallejo_L6": null, "Ferreria_L6": null } },
    "Ferreria_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Norte45_L6": null, "Azcapotzalco_L6": null } },
    "Azcapotzalco_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Ferreria_L6": null, "Tezozomoc_L6": null } },
    "Tezozomoc_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Azcapotzalco_L6": null, "ElRosario_L6": null } },
    "ElRosario_L6": { linea: "Linea 6", lat: 19.48172685916246, lon: -99.11836182461933, conexiones: { "Azcapotzalco_L6": null }, transbordo:["Linea 7"] },

    //Linea7
    "ElRosario_L7": { linea: "Linea 7", lat: 19.50473796936322, lon: -99.20018498950006, conexiones: { "AquilesSerdan_L7": null }, transbordo: ["Linea 6"] },
    "AquilesSerdan_L7": { linea: "Linea 7", lat: 19.490613587428147, lon: -99.19528124173006, conexiones: { "ElRosario_L7": null, "Camarones_L7": null } },
    "Camarones_L7": { linea: "Linea 7", lat: 19.479061456721606, lon: -99.18953724184188, conexiones: { "AquilesSerdan_L7": null, "Refineria_L7": null } },
    "Refineria_L7": { linea: "Linea 7", lat: 19.46963234012299, lon: -99.18999476512936, conexiones: { "Camarones_L7": null, "Tacuba_L7": null } },
    "Tacuba_L7": { linea: "Linea 7", lat: 19.45894221525077, lon: -99.18849610709935, conexiones: { "Refineria_L7": null, "SanJoaquin_L7": null }, transbordo: ["Linea 2"] },
    "SanJoaquin_L7": { linea: "Linea 7", lat: 19.445064812182064, lon: -99.1917411300876, conexiones: { "Tacuba_L7": null, "Polanco_L7": null } },
    "Polanco_L7": { linea: "Linea 7", lat: 19.433680685417595, lon: -99.19089795710762, conexiones: { "SanJoaquin_L7": null, "Auditorio_L7": null } },
    "Auditorio_L7": { linea: "Linea 7", lat: 19.425073462032596, lon: -99.19193175509542, conexiones: { "Polanco_L7": null, "Constituyentes_L7": null } },
    "Constituyentes_L7": { linea: "Linea 7", lat: 19.41169971139912, lon: -99.19134538159973, conexiones: { "Auditorio_L7": null, "Tacubaya_L7": null } },
    "Tacubaya_L7": { linea: "Linea 7", lat: 19.40296510129509, lon: -99.18721005492364, conexiones: { "Constituyentes_L7": null, "SanPedroDeLosPinos_L7": null }, transbordo: ["Linea 1", "Linea 9"] },
    "SanPedroDeLosPinos_L7": { linea: "Linea 7", lat: 19.391377229430624, lon: -99.18581670701792, conexiones: { "Tacubaya_L7": null, "SanAntonio_L7": null } },
    "SanAntonio_L7": { linea: "Linea 7", lat: 19.38492260287382, lon: -99.18655719506405, conexiones: { "SanPedroDeLosPinos_L7": null, "Mixcoac_L7": null } },
    "Mixcoac_L7": { linea: "Linea 7", lat: 19.376034159267352, lon: -99.18763274997468, conexiones: { "SanAntonio_L7": null, "BarrancaDelMuerto_L7": null }, transbordo: ["Linea 12"] },
    "BarrancaDelMuerto_L7": { linea: "Linea 7", lat: 19.361497740404552, lon: -99.18925690221323, conexiones: { "Mixcoac_L7": null } },

    //Linea8
    "Garibaldi_L8": { linea: "Linea 8", lat: 19.44377884527382, lon: -99.13863951976165, conexiones: { "BellasArtes_L8": null }, transbordo:["Linea B"] },
    "BellasArtes_L8": { linea: "Linea 8", lat: 19.436105203707385, lon: -99.14056030289356, conexiones: { "Garibaldi_L8": null, "SanJuanDeLetran_L8": null }, transbordo: ["Linea 2"] },
    "SanJuanDeLetran_L8": { linea: "Linea 8", lat: 19.431578788018545, lon: -99.14127741025774, conexiones: { "BellasArtes_L8": null, "SaltoDelAgua_L8": null } },
    "SaltoDelAgua_L8": { linea: "Linea 8", lat: 19.427157540147626, lon: -99.14195191414493, conexiones: { "SanJuanDeLetran_L8": null, "Doctores_L8": null }, transbordo: ["Linea 1"] },
    "Doctores_L8": { linea: "Linea 8", lat: 19.42159228861839, lon: -99.14319446113883, conexiones: { "SaltoDelAgua_L8": null, "Obrera_L8": null } },
    "Obrera_L8": { linea: "Linea 8", lat: 19.413234942932068, lon: -99.14403733421749, conexiones: { "Doctores_L8": null, "Chabacano_L8": null } },
    "Chabacano_L8": { linea: "Linea 8", lat: 19.410273243051552, lon: -99.13556045635795, conexiones: { "Obrera_L8": null, "LaViga_L8": null }, transbordo: ["Linea 2", "Linea 9"] },
    "LaViga_L8": { linea: "Linea 8", lat: 19.406730716998172, lon: -99.1262180963353, conexiones: { "Chabacano_L8": null, "SantaAnita_L8": null } },
    "SantaAnita_L8": { linea: "Linea 8", lat: 19.404398902116025, lon: -99.12029799840126, conexiones: { "LaViga_L8": null, "Coyuya_L8": null }, transbordo: ["Linea 4"] },
    "Coyuya_L8": { linea: "Linea 8", lat: 19.398113374673276, lon: -99.11343949524614, conexiones: { "SantaAnita_L8": null, "Iztacalco_L8": null } },
    "Iztacalco_L8": { linea: "Linea 8", lat: 19.388687080701516, lon: -99.1122341092866, conexiones: { "Coyuya_L8": null, "Apatlaco_L8": null } },
    "Apatlaco_L8": { linea: "Linea 8", lat: 19.378932850931925, lon: -99.10933384268618, conexiones: { "Iztacalco_L8": null, "Aculco_L8": null } },
    "Aculco_L8": { linea: "Linea 8", lat: 19.373208660375532, lon: -99.10767943649692, conexiones: { "Apatlaco_L8": null, "Escuadron201_L8": null } },
    "Escuadron201_L8": { linea: "Linea 8", lat: 19.364688306248823, lon: -99.10950742796126, conexiones: { "Aculco_L8": null, "Atlalilco_L8": null } },
    "Atlalilco_L8": { linea: "Linea 8", lat: 19.356138266720855, lon: -99.10112980636644, conexiones: { "Escuadron201_L8": null, "Iztapalapa_L8": null }, transbordo:["Linea 12"] },
    "Iztapalapa_L8": { linea: "Linea 8", lat: 19.35778019439927, lon: -99.09338953078837, conexiones: { "Atlalilco_L8": null, "CerroDeLaEstrella_L8": null } },
    "CerroDeLaEstrella_L8": { linea: "Linea 8", lat: 19.355970695341934, lon: -99.08557194730373, conexiones: { "Iztapalapa_L8": null, "UAM1_L8": null } },
    "UAM1_L8": { linea: "Linea 8", lat: 19.35099610089488, lon: -99.07491077370477, conexiones: { "CerroDeLaEstrella_L8": null, "ConstitucionDe1917_L8": null } },
    "ConstitucionDe1917_L8": { linea: "Linea 8", lat: 19.346004444111088, lon: -99.06389644425713, conexiones: { "UAM1_L8": null } },

    //Linea9
    "Pantitlan_L9": { linea: "Linea 9", lat: 19.415512408099314, lon: -99.07234575230163, conexiones: { "Puebla_L9": null }, transbordo: ["Linea 1","Linea 5","Linea A"] },
    "Puebla_L9": { linea: "Linea 9", lat: 19.4072378902566, lon: -99.08249943952686, conexiones: { "Pantitlan_L9": null, "CiudadDeportiva_L9": null } },
    "CiudadDeportiva_L9": { linea: "Linea 9", lat: 19.408417870850695, lon: -99.09126752335285, conexiones: { "Puebla_L9": null, "Velodromo_L9": null } },
    "Velodromo_L9": { linea: "Linea 9", lat: 19.408538868991744, lon: -99.10314488863513, conexiones: { "CiudadDeportiva_L9": null, "Mixuca_L9": null } },
    "Mixuca_L9": { linea: "Linea 9", lat: 19.408414805919023, lon: -99.11325807851318, conexiones: { "Velodromo_L9": null, "Jamaica_L9": null } },
    "Jamaica_L9": { linea: "Linea 9", lat: 19.4082840737565, lon: -99.13565099760251, conexiones: { "Mixuca_L9": null, "Chabacano_L9": null }, transbordo: ["Linea 4"] },
    "Chabacano_L9": { linea: "Linea 9", lat: 19.40817203141364, lon: -99.13566391331472, conexiones: { "Jamaica_L9": null, "LazaroCardenas_L9": null }, transbordo: ["Linea 2", "Linea 8"] },
    "LazaroCardenas_L9": { linea: "Linea 9", lat: 19.40720775303958, lon: -99.14463364383424, conexiones: { "Chabacano_L9": null, "CentroMedico_L9": null } },
    "CentroMedico_L9": { linea: "Linea 9", lat: 19.4059296498435, lon: -99.16852429414547, conexiones: { "LazaroCardenas_L9": null, "Chilpancingo_L9": null }, transbordo:["Linea 3"] },
    "Chilpancingo_L9": { linea: "Linea 9", lat: 19.40589504751427, lon: -99.16853443169394, conexiones: { "CentroMedico_L9": null, "Patriotismo_L9": null } },
    "Patriotismo_L9": { linea: "Linea 9", lat: 19.40605976267857, lon: -99.17889021491656, conexiones: { "Chilpancingo_L9": null, "Tacubaya_L9": null } },
    "Tacubaya_L9": { linea: "Linea 9", lat: 19.402213778267825, lon: -99.18789841528479, conexiones: { "Patriotismo_L9": null }, transbordo: ["Linea 1", "Linea 7"] },

    //LineaA
    "Pantitlan_LA": { linea: "Linea A", lat: 19.415327264911436, lon: -99.07211858854926, conexiones: { "AgricolaOriental_LA": null }, transbordo: ["Linea 1", "Linea 5", "Linea 9"] },
    "AgricolaOriental_LA": { linea: "Linea A", lat: 19.40460509740083, lon: -99.06961135844975, conexiones: { "Pantitlan_LA": null, "CanalDeSanJuan_LA": null } },
    "CanalDeSanJuan_LA": { linea: "Linea A", lat: 19.398743676366372, lon: -99.05941216536102, conexiones: { "AgricolaOriental_LA": null, "Tepalcates_LA": null } },
    "Tepalcates_LA": { linea: "Linea A", lat: 19.391263771213442, lon: -99.04633600994676, conexiones: { "CanalDeSanJuan_LA": null, "Guelatao_LA": null } },
    "Guelatao_LA": { linea: "Linea A", lat: 19.385143303742307, lon: -99.03566146455756, conexiones: { "Tepalcates_LA": null, "PeñonViejo_LA": null } },
    "PeñonViejo_LA": { linea: "Linea A", lat: 19.37329130148595, lon: -99.01706700245454, conexiones: { "Guelatao_LA": null, "Acatitla_LA": null } },
    "Acatitla_LA": { linea: "Linea A", lat: 19.3646910967208, lon: -99.00563933771375, conexiones: { "PeñonViejo_LA": null, "SantaMartha_LA": null } },
    "SantaMartha_LA": { linea: "Linea A", lat: 19.36027654229965, lon: -98.99515929833609, conexiones: { "Acatitla_LA": null, "LosReyes_LA": null } },
    "LosReyes_LA": { linea: "Linea A", lat: 19.359021527025977, lon: -98.97685861323498, conexiones: { "SantaMartha_LA": null, "LaPaz_LA": null } },
    "LaPaz_LA": { linea: "Linea A", lat: 19.350566763430706, lon: -98.96094384761146, conexiones: { "LosReyes_LA": null, } },

    //LineaB
    "BuenaVista_LB": { linea: "Linea B", lat:19.446168419935297, lon:-99.15234525194188, conexiones: { "Guerrero_LB": null }},
    "Guerrero_LB": { linea: "Linea B", lat:19.445100427304585, lon:-99.14607121113194, conexiones: { "BuenaVista_LB": null,"Garibaldi_LB": null },transbordo:["Linea 3"]},
    "Garibaldi_LB": { linea: "Linea B", lat:19.443904186951357, lon:-99.13860569806538, conexiones: { "Guerrero_LB": null,"Lagunilla_LB": null },transbordo:["Linea 8"]},
    "Lagunilla_LB": { linea: "Linea B", lat:19.443274015886626, lon:-99.131864380382, conexiones: { "Garibaldi_LB": null,"Tepito_LB": null }},
    "Tepito_LB": { linea: "Linea B", lat:19.442755440163968, lon:-99.12400414927687, conexiones: { "Lagunilla_LB": null },"Morelos_LB": null},
    "Morelos_LB": { linea: "Linea B", lat:19.439310106084683, lon:-99.11719938178136, conexiones: { "Tepito_LB": null,"SanLazaro_LB": null },transbordo:["Linea 4"]},
    "SanLazaro_LB": { linea: "Linea B", lat:19.432371154297307, lon:-99.11293595459362, conexiones: { "Morelos_LB": null,"RicardoFM_LB": null }},
    "RicardoFM_LB": { linea: -"Linea B", lat:19.43659352333204, lon:-99.10357178759169, conexiones: { "SanLazaro_LB": null,"RomeroRubio_LB": null }},
    "RomeroRubio_LB": { linea: "Linea B", lat:19.44071588926496, lon:-99.09434146212, conexiones: { "RicardoFM_LB": null,"Oceania_LB": null }},
    "Oceania_LB": { linea: "Linea B", lat:19.445743754409637, lon:-99.08719253392131, conexiones: { "RomeroRubio_LB": null,"DeportivoOceania_LB": null },transbordo:["Linea 5"]},
    "DeportivoOceania_LB": { linea: "Linea B", lat:19.45095690604911, lon:-99.07936129869076, conexiones: { "Oceania_LB": null}},
    "BosqueDeAragon_LB": { linea: "Linea B", lat: 19.458086932464422, lon: -99.06925538477104, conexiones: { "DeportivoOceania_LB": null, "VillaDeAragon_LB": null } },
    "VillaDeAragon_LB": { linea: "Linea B", lat: 19.46166355653839, lon: -99.06134962711552, conexiones: { "BosqueDeAragon_LB": null, "Nezahualcoyotl_LB": null } },
    "Nezahualcoyotl_LB": { linea: "Linea B", lat: 19.47297870752582, lon: -99.05454589578808, conexiones: { "VillaDeAragon_LB": null, "Impulsora_LB": null } },
    "Impulsora_LB": { linea: "Linea B", lat: 19.485686440790026, lon: -99.04896009395819, conexiones: { "Nezahualcoyotl_LB": null, "RioDeLosRemedios_LB": null } },
    "RioDeLosRemedios_LB": { linea: "Linea B", lat: 19.49057962091082, lon: -99.04685105875177, conexiones: { "Impulsora_LB": null, "Muzquis_LB": null } },
    "Muzquis_LB": { linea: "Linea B", lat: 19.50155816493353, lon: -99.04202113880433, conexiones: { "RioDeLosRemedios_LB": null, "Ecatepec_LB": null } },
    "Ecatepec_LB": { linea: "Linea B", lat: 19.51520593942668, lon: -99.03602356768859, conexiones: { "Muzquis_LB": null, "Olimpica_LB": null } },
    "Olimpica_LB": { linea: "Linea B", lat: 19.521398285771614, lon: -99.0333067787788, conexiones: { "Ecatepec_LB": null, "PlazaAragon_LB": null } },
    "PlazaAragon_LB": { linea: "Linea B", lat: 19.5285199546632, lon: -99.03010917536422, conexiones: { "Olimpica_LB": null, "CiudadAzteca_LB": null } },
    "CiudadAzteca_LB": { linea: "Linea B", lat: 19.534547875753617, lon: -99.0274747253869, conexiones: { "PlazaAragon_LB": null } },

    //Linea12
    "Mixcoac_L12": { linea: "Linea 12", lat: 19.3758084, lon: -99.1871281, conexiones: { "InsurgentesSur_L12": null }, transbordo: ["Linea 7"] },
    "InsurgentesSur_L12": { linea: "Linea 12", lat: 19.3736608, lon: -99.1787151, conexiones: { "Mixcoac_L12": null, "Hospital20DeNoviembre_L12": null } },
    "Hospital20DeNoviembre_L12": { linea: "Linea 12", lat: 19.3720597, lon: -99.1712246, conexiones: { "InsurgentesSur_L12": null, "Zapata_L12": null } },
    "Zapata_L12": { linea: "Linea 12", lat: 19.3707300, lon: -99.1652313, conexiones: { "Hospital20DeNoviembre_L12": null, "ParqueDeLosVenados_L12": null }, transbordo: ["Linea 3"] },
    "ParqueDeLosVenados_L12": { linea: "Linea 12", lat: 19.3706547, lon: -99.1586444, conexiones: { "Zapata_L12": null, "EjeCentral_L12": null } },
    "EjeCentral_L12": { linea: "Linea 12", lat: 19.3613595, lon: -99.1514856, conexiones: { "ParqueDeLosVenados_L12": null, "Ermita_L12": null } },
    "Ermita_L12": { linea: "Linea 12", lat: 19.3600733, lon: -99.1432935, conexiones: { "EjeCentral_L12": null, "Mexicaltzingo_L12": null }, transbordo: ["Linea 2"] },
    "Mexicaltzingo_L12": { linea: "Linea 12", lat: 19.3578018, lon: -99.1231279, conexiones: { "Ermita_L12": null, "Atlalilco_L12": null } },
    "Atlalilco_L12": { linea: "Linea 12", lat: 19.3526786, lon: -99.1061573, conexiones: { "Mexicaltzingo_L12": null, "Culhuacan_L12": null }, transbordo: ["Linea 8"] },
    "Culhuacan_L12": { linea: "Linea 12", lat: 19.3368900, lon: -99.1089025, conexiones: { "Atlalilco_L12": null, "SanAndresTomatlan_L12": null } },
    "SanAndresTomatlan_L12": { linea: "Linea 12", lat: 19.3281667, lon: -99.1044222, conexiones: { "Culhuacan_L12": null, "LomasEstrella_L12": null } },
    "LomasEstrella_L12": { linea: "Linea 12", lat: 19.3222272, lon: -99.0958207, conexiones: { "SanAndresTomatlan_L12": null, "Calle11_L12": null } },
    "Calle11_L12": { linea: "Linea 12", lat: 19.3205193, lon: -99.0858808, conexiones: { "LomasEstrella_L12": null, "PerifericoOriente_L12": null } },
    "PerifericoOriente_L12": { linea: "Linea 12", lat: 19.3176341, lon: -99.0744609, conexiones: { "Calle11_L12": null, "Tezonco_L12": null } },
    "Tezonco_L12": { linea: "Linea 12", lat: 19.3063186, lon: -99.0652459, conexiones: { "PerifericoOriente_L12": null, "Olivos_L12": null } },
    "Olivos_L12": { linea: "Linea 12", lat: 19.3043631, lon: -99.0594838, conexiones: { "Tezonco_L12": null, "Nopalera_L12": null } },
    "Nopalera_L12": { linea: "Linea 12", lat: 19.2999106, lon: -99.0459779, conexiones: { "Olivos_L12": null, "Zapotitlan_L12": null } },
    "Zapotitlan_L12": { linea: "Linea 12", lat: 19.2966956, lon: -99.0343012, conexiones: { "Nopalera_L12": null, "Tlatenco_L12": null } },
    "Tlatenco_L12": { linea: "Linea 12", lat: 19.2943657, lon: -99.0239596, conexiones: { "Zapotitlan_L12": null, "Tlahuac_L12": null } },
    "Tlahuac_L12": { linea: "Linea 12", lat: 19.2859727, lon: -99.0141354, conexiones: { "Tlatenco_L12": null } },
};

function calcularDistancia(estacionA, estacionB) {
    const { lat: latA, lon: lonA } = estacionesMetro[estacionA];
    const { lat: latB, lon: lonB } = estacionesMetro[estacionB];
    const rad = Math.PI / 180;
    const latARad = latA * rad;
    const lonARad = lonA * rad;
    const latBRad = latB * rad;
    const lonBRad = lonB * rad;

    const dLat = latBRad - latARad;
    const dLon = lonBRad - lonARad;

    //Haversine
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(latARad) * Math.cos(latBRad) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const radioTierra = 6371;

    return radioTierra * c;
}

function aEstrella(origen, destino) {
    const abiertos = new Set([origen]);
    const cerrados = new Set();

    const costos = { [origen]: 0 };
    const rutas = { [origen]: null };

    while (abiertos.size > 0) {
        let actual = null;
        for (const estacion of abiertos) {
            if (!actual || costos[estacion] + calcularDistancia(estacion, destino) < costos[actual] + calcularDistancia(actual, destino)) {
                actual = estacion;
            }
        }

        if (actual === destino) {
            const ruta = [];
            while (actual) {
                ruta.unshift(actual);
                actual = rutas[actual];
            }

            console.log("Ruta encontrada:");
            let lineaActual = estacionesMetro[ruta[0]].linea;

            let disTotal = 0;
            let distanciaTotal =  false;
            ruta.forEach((estacion, index) => {
                const estacionInfo = estacionesMetro[estacion];
                const lineaSiguiente = estacionInfo.linea;

                if (distanciaTotal && index > 0) {//extra
                    disTotal += calcularDistancia(ruta[index - 1], estacion);
                }

                console.log(`${index + 1}. ${estacion} (${lineaSiguiente})`);

                if (lineaSiguiente !== lineaActual) {
                    console.log(`\t -> Transbordo a la ${lineaSiguiente}`);
                    lineaActual = lineaSiguiente;
                }
            });
            if (distanciaTotal) {
                console.log(`\nDistancia total estimada: ${disTotal.toFixed(2)} km`);
            }

            return ruta;
        }

        abiertos.delete(actual);
        cerrados.add(actual);

        for (const vecino in estacionesMetro[actual].conexiones) {
            if (cerrados.has(vecino)) continue;
            const nuevoCosto = costos[actual] + 1; // El costo puede ser en funcion del tiempo entre estaciones, frecuencia de convoys, tiempo de llegada, etc...

            if (!abiertos.has(vecino) || nuevoCosto < costos[vecino]) {
                costos[vecino] = nuevoCosto;
                rutas[vecino] = actual;
                abiertos.add(vecino);
            }
        }

        if (estacionesMetro[actual].transbordo) {
            for (const lineaTransbordo of estacionesMetro[actual].transbordo) {
                for (const estacionTransbordo in estacionesMetro) {
                    if (
                        estacionesMetro[estacionTransbordo].linea === lineaTransbordo &&
                        !cerrados.has(estacionTransbordo)
                    ) {
                        const nuevoCosto = costos[actual] + 1;

                        if (!abiertos.has(estacionTransbordo) || nuevoCosto < costos[estacionTransbordo]) {
                            costos[estacionTransbordo] = nuevoCosto;
                            rutas[estacionTransbordo] = actual;
                            abiertos.add(estacionTransbordo);
                        }
                    }
                }
            }
        }
    }
    return null;
}

const origen = "Talisman_L4";
const destino = "Oceania_L5";

console.log(`Calculando la ruta de ${origen} a ${destino}... \n`);
const ruta = aEstrella(origen, destino);

//Imprime la ruta de forma lineal: Ruta completa: A -> B -> C ...
/*
if (ruta) {
    console.log("\nRuta completa:", ruta.join(" -> "));
} else {
    console.log("No se encontró una ruta entre las estaciones especificadas.");
}
*/
