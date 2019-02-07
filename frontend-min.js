var Fpe = {
    options: {},
    broadcast: [],
    next: [],
    labels: {
        'actor_on_camera': 'On-Camera Principal',
        'stunt_performer': 'Stunt Performer',
        'pilot': 'Pilot',
        'speciality_act': 'Speciality Act',
        'dancer': 'Dancer',
        'actor_off_camera': 'Off-Camera Principal (Ex. Voiceover)',
        'singer': 'Singer',
        'extra': 'Extra Performer',
        'wildspot': 'Wildspot 13 weeks',
        'program_a': 'Program Class A',
        'cable': 'Cable',
        'dealer': 'Dealer',
        'internet': 'Move-over-Internet',
        'newmedia': 'Move-over-New Media',
        'internet2': 'Made for Internet',
        'newmedia2': 'Made for New Media',
        'spanish': 'Spanish Language Program',
        'spanish_wildspot': 'Spanish Language Wildspot',
        'foreign': 'Foreign Use',
        'theatrical': 'Theatrical use',
        'demo': 'Demo',
        '6m': '6 months w/o New York',
        '6m_ny': '6 months w/ New York',
        'announcer': 'Announcer',
        'solo_duo': 'Solo or Duo',
        'group_3': 'Group 3-5',
        'group_6': 'Group 6-8',
        'group_9': 'Group 9 or more',
        'creative_session': 'Creative Session Calls',
        'singers_contractors': 'Singers Contractors',
        'network': 'Regional Network',
        'program': 'Program commercials - 13 weeks',
        'regional': 'Regional network with at least one major',
        'psa': 'PSAs',
        'radio_dealer': 'Dealer',
        'radio_foreign': 'Foreign Use - 18 month use',
        'radio_psa': 'PSAs',
        'local': 'Local program uses',
        '1_week_unlimited': '1 week unlimited use',
        '4_week_unlimited': '4 week unlimited use',
        '8_week_unlimited': '8 week unlimited use',
        '13_week_unlimited': '13 week unlimited use',
        '13_week_26_uses': '26 uses in 13 weeks',
        '13_week_39_uses': '39 uses in 13 weeks',
        '13_week_accross': '13 weeks use on across-the-board programs',
        'category1': 'Category I',
        'category2': 'Category II',
        'ivr': 'IVR/Phone Prompts',
        'storecast': 'Storecast',
        'on': 'On-Camera Performer',
        'spokesperson': 'On-Camera Spokesperson',
        'off': 'Off-Camera, 1st Hour',
        'retakes': 'Off-Camera, Retakes Entire Script',
        'on_half': 'On-Camera Performer - Half-Day',
        'on_3': 'On-Camera Performer - 3 Days',
        'on_w': 'On-Camera Performer - Weekly',
        'off_short': 'Off-Camera, 3 mins or less, half hour',
        'off_retakes': 'Off-Camera, Retakes Entire Script, (One Hour)',
        'off_retakes2': 'Off-Camera, Retakes Partial Script (30 Minutes)',
    }
};

var spanish_markets = [
    {value: 'Albuquerque NM', code: 'albuquerque--nm'},
    {value: 'Atlanta GA', code: 'atlanta--ga'},
    {value: 'Austin TX', code: 'austin--tx'},
    {value: 'Boston MA', code: 'boston--ma'},
    {value: 'Chicago IL', code: 'chicago--il'},
    {value: 'Dallas-Fort Worth TX', code: 'dallas-fort-worth--tx'},
    {value: 'Denver CO', code: 'denver--co'},
    {value: 'El Centro CA; Yuma AZ; and Mexicali MX (combined)', code: 'el-centro--ca--yuma--az--and-mexicali--mx--combined'},
    {value: 'El Paso TX and Juarez MX (combined)', code: 'el-paso--tx-and-juarez--mx--combined'},
    {value: 'Fresno and Visalia CA (combined)', code: 'fresno-and-visalia--ca--combined'},
    {value: 'Houston TX', code: 'houston--tx'},
    {value: 'Laredo TX and Nueva Laredo MX (combined)', code: 'laredo--tx-and-nueva-laredo--mx--combined'},
    {value: 'Las Vegas NV', code: 'las-vegas--nv'},
    {value: 'Los Angeles CA', code: 'los-angeles--ca'},
    {value: 'McAllen TX; Brownsville TX; and Matamoros MX (combined)', code: 'mcallen--tx--brownsville--tx--and-matamoros--mx--combined'},
    {value: 'Miami FL', code: 'miami--fl'},
    {value: 'New York NY', code: 'new-york--ny'},
    {value: 'Orlando FL', code: 'orlando--fl'},
    {value: 'Philadelphia PA', code: 'philadelphia--pa'},
    {value: 'Phoenix AZ', code: 'phoenix--az'},
    {value: 'Puerto Rico', code: 'puerto-rico'},
    {value: 'Sacramento CA', code: 'sacramento--ca'},
    {value: 'San Antonio TX', code: 'san-antonio--tx'},
    {value: 'San Diego CA and Tijuana MX', code: 'san-diego--ca-and-tijuana--mx'},
    {value: 'San Francisco CA', code: 'san-francisco--ca'},
    {value: 'Tampa FL', code: 'tampa--fl'},
    {value: 'Washington DC', code: 'washington--dc'},
];


var costs = {
    agent_percent: 10,
    wildspot_markets: {
        "atlanta": 6,
        "austin": 2,
        "baltimore": 3,
        "boston": 6,
        "charlotte": 3,
        "cincinnati": 2,
        "cleveland": 4,
        "columbus-oh": 2,
        "dallas-fort-worth": 7,
        "denver": 4,
        "detroit": 5,
        "grand-rapids-kalamazoo-battle-creek": 2,
        "greenville-spartanburg-asheville-anderson-nc": 2,
        "hartford-new-haven": 2,
        "houston": 6,
        "indianapolis": 3,
        "kansas-city": 2,
        "las-vegas": 2,
        "mexico-mexico-city": 49,
        "miami": 4,
        "milwaukee": 2,
        "minneapolis---st--paul": 4,
        "montreal": 5,
        "nashville": 2,
        "norfolk-portsmouth-newport-news": 2,
        "oklahoma-city": 2,
        "orlando-daytona-beach": 4,
        "philadelphia": 8,
        "phoenix": 5,
        "pittsburgh": 3,
        "portland--or": 3,
        "puerto-rico": 3,
        "raleigh-durham": 3,
        "sacramento-stockton": 3,
        "salt-lake-city": 2,
        "san-antonio": 2,
        "san-diego": 3,
        "san-francisco": 7,
        "seattle-tacoma": 5,
        "st--louis": 3,
        "tampa-st--petersburg": 5,
        "toronto": 8,
        "vancouver-b-c-": 3,
        "washington-d-c-": 6,
        "west-palm-beach---ft--pierce": 2
    },
    spanish_markets_weights: {
        'albuquerque--nm': 3,
        'atlanta--ga': 2,
        'austin--tx': 2,
        'boston--ma': 2,
        'chicago--il': 9,
        'dallas-fort-worth--tx': 9,
        'denver--co': 4,
        'el-centro--ca--yuma--az--and-mexicali--mx--combined': 6,
        'el-paso--tx-and-juarez--mx--combined': 11,
        'fresno-and-visalia--ca--combined': 4,
        'houston--tx': 11,
        'laredo--tx-and-nueva-laredo--mx--combined': 2,
        'las-vegas--nv': 2,
        'los-angeles--ca': 39,
        'mcallen--tx--brownsville--tx--and-matamoros--mx--combined': 8,
        'miami--fl': 17,
        'new-york--ny': 32,
        'orlando--fl': 3,
        'philadelphia--pa': 3,
        'phoenix--az': 6,
        'puerto-rico': 21,
        'sacramento--ca': 3,
        'san-antonio--tx': 8,
        'san-diego--ca-and-tijuana--mx': 12,
        'san-francisco--ca': 7,
        'tampa--fl': 3,
        'washington--dc': 3,
    },
    fees: {
        tv: {
            principal_on: {
                session: 671.7,
                broadcast: {
                    wildspot: {
                        unit_2_25: 22.99,
                        unit_26: 8.53,
                        ny: 1320,
                        ny_unit: 8.53,
                        chi: 1150.55,
                        chi_unit: 8.53,
                        la: 2191.10,
                        la_unit: 8.53,
                        major2: 1816.55,
                        major2_unit: 8.53,
                        major3: 2191.10,
                        major3_nit: 8.74,
                    },
                    cable: {
                        min: 671,
                        max: 3906,
                    },
                    program_a: {
                        '1': 671.7,
                        '2': 157.10,
                        '3-13': 124.65,
                        '13g': 1923.20,
                        '13g_unit': 117.80,
                    },
                    dealer: {
                        A: {
                            '6m': 2229.30,
                            '6m_ny': 2520.70,
                        },
                        B: {
                            '6m': 3343.95,
                            '6m_ny': 3875.70,
                        }
                    },
                    internet: {
                        '4week': 839.65,
                        '8week': 1175.50,
                        '1year': 2854.75
                    },
                    newmedia: {
                        '4week': 839.65,
                        '8week': 1175.50,
                        '1year': 2854.75
                    },
                    internet2: {
                        '4week': 839.65,
                        '8week': 1175.50,
                        '1year': 2854.75
                    },
                    newmedia2: {
                        '4week': 839.65,
                        '8week': 1175.50,
                        '1year': 2854.75
                    },
                    spanish: 2668.15,
                    spanish_wildspot: {
                        unit_1: 705.25,
                        unit_2_25: 24.14,
                        unit_26: 8.96
                    },
                    demo: 503.90,
                    theatrical: 671.70,
                } 
            },
            principal_off: {
                session: 505.05,
                broadcast: {
                    wildspot: {
                        unit_2_25: 22.99,
                        unit_26: 8.53,
                        ny: 1320,
                        ny_unit: 8.53,
                        chi: 1150.55,
                        chi_unit: 8.53,
                        la: 2191.10,
                        la_unit: 8.53,
                        major2: 1816.55,
                        major2_unit: 8.53,
                        major3: 2191.10,
                        major3_nit: 8.74,
                    },
                    cable: {
                        min: 671,
                        max: 3906,
                    },
                    program_a: {
                        '1': 122.95,
                        '2': 97.80,
                        '3-13': 44.40,
                        '13g': 1487.95,
                        '13g_unit': 89.50,
                    },
                    dealer: {
                        A: {
                            '6m': 1610.05,
                            '6m_ny': 1755.70,
                        },
                        B: {
                            '6m': 2411.35,
                            '6m_ny': 2637.30,
                        }
                    },
                    internet: {
                        '4week': 631.30,
                        '8week': 883.85,
                        '1year': 2146.45
                    },
                    newmedia: {
                        '4week': 631.30,
                        '8week': 883.85,
                        '1year': 2146.45
                    },
                    internet2: {
                        '4week': 631.30,
                        '8week': 883.85,
                        '1year': 2146.45
                    },
                    newmedia2: {
                        '4week': 631.30,
                        '8week': 883.85,
                        '1year': 2146.45
                    },
                    spanish: 2006.45,
                    spanish_wildspot: {
                        unit_1: 530.30,
                        unit_2_25: 16.52,
                        unit_26: 7.03
                    },
                    demo: 503.90,
                    theatrical: 505.05,
                } 
            },
            stunt_performer: {session: 671.70},
            pilot: {session: 795.50},
            speciality_act: {session: 671.7},
            dancer: {session: 671.7},
            singer: {session: 505.05},
            extra: {session: 366.35}
        },
        radio: {
            announcer: {
                session: 298.10,
                multitracking: 329.45,
                broadcast: {
                    wildspot: {
                        "13": {
                            unit_2_25: 4.39,
                            unit_26: 3.30,
                            ny: 446.35,
                            ny_unit: 3.30,
                            chi: 404.85,
                            chi_unit: 3.30,
                            la: 404.85,
                            la_unit: 3.30,
                            major2: 544.40,
                            major2_unit: 3.30,
                            major3: 687.90,
                            major3_nit: 3.30, 
                        },
                        "8": {
                            unit_2_25: 3.51,
                            unit_26: 2.64,
                            ny: 357.05,
                            ny_unit: 2.64,
                            chi: 323.90,
                            chi_unit: 2.64,
                            la: 323.90,
                            la_unit: 2.64,
                            major2: 435.55,
                            major2_unit: 2.64,
                            major3: 550.30,
                            major3_nit: 2.64, 
                        },
                    },
                    network: {
                        '1_week_unlimited': 504.45,
                        '4_week_unlimited': 818.40,
                        '8_week_unlimited': 1303.65,
                        '13_week_unlimited': 1617.75,
                        '13_week_26_uses': 808.90,
                        '13_week_39_uses': 1218.20,
                        '13_week_accross': 1693.95,
                    },
                    radio_dealer: {
                        '26_weeks': 806.20,
                        '8_weeks': 403.05,
                        '26_weeks_effects': 255.35,
                        '8_weeks_effects': 242.30,
                    },
                    internet: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    newmedia: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    internet2: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    newmedia2: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    single_market: {
                        '13_week': 205.45,
                        '1_year': 616.45,
                    },
                    demo: 205.45,
                    regional: 976.20,
                    program: 976.20,
                    local: 324.00,
                    radio_foreign: 591.45,
                    psa: 674.45,
                }
            },
            solo_duo: {
                session: 298.10,
                multitracking: 329.45,
                broadcast: {
                    wildspot: {
                        "13": {
                            unit_2_25: 4.39,
                            unit_26: 3.30,
                            ny: 446.35,
                            ny_unit: 3.30,
                            chi: 404.85,
                            chi_unit: 3.30,
                            la: 404.85,
                            la_unit: 3.30,
                            major2: 544.40,
                            major2_unit: 3.30,
                            major3: 687.90,
                            major3_nit: 3.30, 
                        },
                        "8": {
                            unit_2_25: 3.51,
                            unit_26: 2.64,
                            ny: 357.05,
                            ny_unit: 2.64,
                            chi: 323.90,
                            chi_unit: 2.64,
                            la: 323.90,
                            la_unit: 2.64,
                            major2: 435.55,
                            major2_unit: 2.64,
                            major3: 550.30,
                            major3_nit: 2.64, 
                        },
                    },
                    network: {
                        '1_week_unlimited': 504.45,
                        '4_week_unlimited': 818.40,
                        '8_week_unlimited': 1303.65,
                        '13_week_unlimited': 1617.75,
                        '13_week_26_uses': 808.90,
                        '13_week_39_uses': 1218.20,
                        '13_week_accross': 1693.95,
                    },
                    radio_dealer: {
                        '26_weeks': 806.20,
                        '8_weeks': 403.05,
                    },
                    internet: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    newmedia: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    internet2: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    newmedia2: {
                        '4week': 372.65,
                        '8week': 447.15,
                        '1year': 1192.40
                    },
                    demo: 205.45,
                    regional: 976.20,
                    program: 976.20,
                    local: 324.00,
                    radio_foreign: 591.45,
                    radio_psa: 674.45,
                }
            },
            group_3: {
                session: 329.45,
                multitracking: 329.45,
                broadcast: {
                    wildspot: {
                        "13": {
                            unit_2_25: 2.28,
                            unit_26: 1.95,
                            ny: 242.75,
                            ny_unit: 1.95,
                            chi: 242.75,
                            chi_unit: 1.95,
                            la: 242.75,
                            la_unit: 1.95,
                            major2: 289.90,
                            major2_unit: 1.95,
                            major3: 323.00,
                            major3_nit: 1.95, 
                        },
                        "8": {
                            unit_2_25: 2.17,
                            unit_26: 1.85,
                            ny: 230.60,
                            ny_unit: 1.85,
                            chi: 230.60,
                            chi_unit: 1.85,
                            la: 230.60,
                            la_unit: 1.85,
                            major2: 275.40,
                            major2_unit: 1.85,
                            major3: 306.80,
                            major3_nit: 1.85, 
                        },
                    },
                    network: {
                        '1_week_unlimited': 378.55,
                        '4_week_unlimited': 629.35,
                        '8_week_unlimited': 1303.65,
                        '13_week_unlimited': 1003.00,
                        '13_week_26_uses': 622.00,
                        '13_week_39_uses': 852.95,
                        '13_week_accross': 1302.65,
                    },
                    radio_dealer: {
                        '26_weeks': 416.95,
                        '8_weeks': 208.50,
                    },
                    internet: {
                        '4week': 274.50,
                        '8week': 329.40,
                        '1year': 878.40
                    },
                    newmedia: {
                        '4week': 274.50,
                        '8week': 329.40,
                        '1year': 878.40
                    },
                    internet2: {
                        '4week': 274.50,
                        '8week': 329.40,
                        '1year': 878.40
                    },
                    newmedia2: {
                        '4week': 274.50,
                        '8week': 329.40,
                        '1year': 878.40
                    },
                    regional: 976.20,
                    program: 457.60,
                    local: 324.00,
                    radio_foreign: 343.05,
                    radio_psa: 456.60,
                }
            },
            group_6: {
                session: 194.35,
                multitracking: 291.55,
                broadcast: {
                    wildspot: {
                        "13": {
                            unit_2_25: 1.95,
                            unit_26: 1.50,
                            ny: 215.50,
                            ny_unit: 1.64,
                            chi: 215.50,
                            chi_unit: 1.64,
                            la: 215.50,
                            la_unit: 1.64,
                            major2: 222.40,
                            major2_unit: 1.64,
                            major3: 249.90,
                            major3_nit: 1.64, 
                        },
                        "8": {
                            unit_2_25: 1.85,
                            unit_26: 1.42,
                            ny: 204.75,
                            ny_unit: 1.42,
                            chi: 204.75,
                            chi_unit: 1.42,
                            la: 204.75,
                            la_unit: 1.42,
                            major2: 211.25,
                            major2_unit: 1.42,
                            major3: 237.40,
                            major3_nit: 1.42, 
                        },
                    },
                    network: {
                        '1_week_unlimited': 378.55,
                        '4_week_unlimited': 562.75,
                        '8_week_unlimited': 896.00,
                        '13_week_unlimited': 1112.55,
                        '13_week_26_uses': 556.20,
                        '13_week_39_uses': 761.40,
                        '13_week_accross': 1164.95,
                    },
                    radio_dealer: {
                        '26_weeks': 333.65,
                        '8_weeks': 166.80,
                    },
                    internet: {
                        '4week': 242.95,
                        '8week': 291.55,
                        '1year': 777.40
                    },
                    newmedia: {
                        '4week': 242.95,
                        '8week': 291.55,
                        '1year': 777.40
                    },
                    internet2: {
                        '4week': 242.95,
                        '8week': 291.55,
                        '1year': 777.40
                    },
                    newmedia2: {
                        '4week': 242.95,
                        '8week': 291.55,
                        '1year': 777.40
                    },
                    regional: 878.65,
                    program: 457.60,
                    local: 324.00,
                    radio_foreign: 236.60,
                    radio_psa: 365.25,
                }
            },
            group_9: {
                session: 172.40,
                multitracking: 258.55,
                broadcast: {
                    wildspot: {
                        "13": {
                            unit_2_25: 1.72,
                            unit_26: 1.50,
                            ny: 191.25,
                            ny_unit: 1.56,
                            chi: 191.25,
                            chi_unit: 1.56,
                            la: 191.25,
                            la_unit: 1.56,
                            major2: 197.90,
                            major2_unit: 1.56,
                            major3: 222.40,
                            major3_nit: 1.56, 
                        },
                        "8": {
                            unit_2_25: 1.64,
                            unit_26: 1.42,
                            ny: 181.70,
                            ny_unit: 1.48,
                            chi: 181.70,
                            chi_unit: 1.48,
                            la: 181.70,
                            la_unit: 1.48,
                            major2: 188.00,
                            major2_unit: 1.48,
                            major3: 211.25,
                            major3_nit: 1.48, 
                        },
                    },
                    network: {
                        '1_week_unlimited': 378.55,
                        '4_week_unlimited': 514.15,
                        '8_week_unlimited': 803.05,
                        '13_week_unlimited': 1019.25,
                        '13_week_26_uses': 508.25,
                        '13_week_39_uses': 691.70,
                        '13_week_accross': 1067.25,
                    },
                    radio_dealer: {
                        '26_weeks': 208.55,
                        '8_weeks': 104.25,
                    },
                    internet: {
                        '4week': 215.50,
                        '8week': 258.60,
                        '1year': 689.60
                    },
                    newmedia: {
                        '4week': 215.50,
                        '8week': 258.60,
                        '1year': 689.60
                    },
                    internet2: {
                        '4week': 215.50,
                        '8week': 258.60,
                        '1year': 689.60
                    },
                    newmedia2: {
                        '4week': 215.50,
                        '8week': 258.60,
                        '1year': 689.60
                    },
                    regional: 790.20,
                    program: 457.60,
                    local: 324.00,
                    radio_foreign: 189.20,
                    radio_psa: 228.45,
                }
            },
            creative_session: {session: 266.90},
            singers_contractors: {session: 102.35},
        },
        industrial: {
            category1: {
                on: 519.50,
                on_half: 337.50,
                on_3: 1308,
                on_w: 1826.00,
                off: 425.50,
                off_add: 121,
                off_short: 213,
                retakes: 425.50,
                retakes_addl: 124.50,
                spokesperson: 945.00,
                spokesperson_add: 519.50,
            },
            category2: {
                on: 647.00,
                on_half: 420.50,
                on_3: 1613,
                on_w: 2261.50,
                off: 474.00,
                off_add: 124.50,
                off_short: 237,
                retakes: 474.00,
                retakes_addl: 124.50,
                spokesperson: 1121.00,
                spokesperson_add: 647,
            },
            ivr: {
                first: 425.50,
                half: 254.00,
                over: 124.50,
            },
            storecast: {
                '3': 425.50,
                '6': 851.00,
            }
        }
    }
};

(function($) {
    Fpe.init = function() {
        Fpe.totalsOnScreen();
        $('#to-top').hide();
        $(window).scroll(function() {
            Fpe.totalsOnScreen();
        });

        $('.question').first().show();
        $('.answer:not(.special, .multi)').click(function(event) {
            event.preventDefault();
            var set = $(this).data('set');
            if (set) {
                Fpe.options[set] = $(this).data('value');
            }
            var data = $(this).data();
            for(var i in data){
                Fpe[i] = data[i];
            }
            var follow = $(this).data('follow');
            if (follow) {
                follow = follow.split(' ');
                for(var i in follow) {
                    Fpe.next.unshift(follow[i]);
                }
            }

            if ($(this).text() == 'Continue') {
                $(this).parents('.question').find('input').each(function() {
                    Fpe.options[$(this).attr('name')] = $(this).val();
                });
            }
            
            Fpe.moveNext();
        });

        $('.answer.multi').click(function() {
            $(this).toggleClass('checked');
        });

        $('#tv_broadcast .answer.special').click(function() {
            Fpe.broadcast = [];
            $('#tv_broadcast .answer.multi.checked').each(function() {
                Fpe.broadcast.push($(this).data('set'));
                switch($(this).data('set')) {
                    case 'wildspot': 
                        Fpe.next.unshift('tv_wildspot_cycles', 'tv_wildspot_markets'); break;
                    case 'spanish_wildspot': 
                        Fpe.next.unshift('tv_spanish_wildspot_markets'); break;
                    case 'program_a': 
                        Fpe.next.unshift('tv_program_a_uses', 'tv_program_a_uses_guarantee'); break;
                    case 'cable': 
                        Fpe.next.unshift('tv_cable'); break;
                    case 'spanish': Fpe.next.unshift('tv_spanish'); break;
                    case 'dealer': 
                        Fpe.next.unshift('tv_dealer_type', 'tv_dealer_cycle'); break;
                    case 'internet': Fpe.next.unshift('tv_internet_cycle'); break;
                    case 'newmedia': Fpe.next.unshift('tv_newmedia_cycle'); break;
                    case 'foreign': Fpe.next.unshift('tv_foreign'); break;
                }
            });
            Fpe.moveNext();
        });

        $('#radio_broadcast .answer.special').click(function() {
            Fpe.broadcast = [];
            $('#radio_broadcast .answer.multi.checked').each(function() {
                Fpe.broadcast.push($(this).data('set'));
                switch($(this).data('set')) {
                    case 'wildspot': Fpe.next.unshift('radio_wildspot_weeks', 'radio_wildspot_markets', 'radio_wildspot_cycles', ); break;
                    case 'network': Fpe.next.unshift('radio_network_weeks'); break;
                    case 'radio_dealer': Fpe.next.unshift('radio_dealer_cycle'); break;
                    case 'internet': Fpe.next.unshift('radio_internet_cycle'); break;
                    case 'newmedia': Fpe.next.unshift('radio_newmedia_cycle'); break;
                    case 'single_market': Fpe.next.unshift('radio_single_market_cycle'); break;
                }
            });
            Fpe.moveNext();
        });

        $('#nu-performers .answer').click(function(e) {
            e.preventDefault();
            Fpe.performers = {};
            $('#nu-performers input').each(function() {
                if (parseInt($(this).val())) {
                    var type = $(this).attr('name');
                    Fpe.performers[type] = parseInt($(this).val());
                    Fpe.next.unshift('nu-'+type+'-cost', 'nu-'+type+'-wardrobe', 'nu-'+type+'-other', 'nu-'+type+'-reimbursments' );
                }
            });
            Fpe.moveNext();
        });

        $('#tv_performers .answer').click(function(e) {
            e.preventDefault();
            Fpe.performers = {};
            $('#tv_performers input').each(function() {
                if (parseInt($(this).val())) {
                    var type = $(this).attr('name');
                    Fpe.performers[type] = parseInt($(this).val());
                    switch ($(this).attr('name')) {
                        case 'singer': 
                            Fpe.next.unshift('tv_singers', 'tv_multitracking', 'tv_sweetening');
                            break;
                        case 'actor_off_camera':
                            Fpe.next.unshift('tv_off_camera_tags'); 
                            break;
                        case 'actor_on_camera':
                            Fpe.next.unshift('tv_on_camera_tags', 'tv_travel_days_actor_on_camera');
                            break;
                        case 'stunt_performer':
                            Fpe.next.unshift('tv_on_camera_tags', 'tv_travel_days_stunt_performer');
                            break;
                    }
                    Fpe.next.unshift('tv_'+type+'_hours', 'tv_'+type+'_weekend','tv_'+type+'_nightwork','tv_'+type+'_travel');
                }
            });
            Fpe.moveNext();
        });

        $('#radio_performers .answer').click(function(e) {
            e.preventDefault();
            Fpe.performers = {};
            $('#radio_performers input').each(function() {
                if (parseInt($(this).val())) {
                    var type = $(this).attr('name');
                    Fpe.performers[type] = parseFloat($(this).val());
                    /*if (type == 'creative_session') {
                        Fpe.next.unshift('radio_creative_sessions');
                    }*/
                    //if ($.inArray(type, ['creative_session', 'singers_contractors']) == -1) {
                    Fpe.next.unshift('radio_'+type+'_weekend','radio_'+type+'_nightwork','radio_'+type+'_travel');
                    //}
                }
            });
            Fpe.moveNext();
        });

        $('.input-answer').keyup(function(e) {
            if (e.which=='13') {
                Fpe.move($(this));
                return false;
            }
        });

        $('.numeric-slider').each(function() {
            var min = $(this).data('min') || 0;
            var max = $(this).data('max') || 15;
            var step = $(this).data('step') || 1;
            var value = $(this).siblings('input').val() || 0;
            //console.log('min: '+min);
            //console.log('max: '+max);
            //console.log('value: '+value);
            $(this).slider({
                min: min,
                max: max,
                value: value,
                step: step,
                create: function() {
                    var handle = $(this).find('.ui-slider-handle').first();
                    handle.text($(this).slider('value'));
                },
                slide: function(event, ui) {
                    var handle = $(this).find('.ui-slider-handle').first();
                    handle.text(ui.value);
                    $(this).parents('.question').find('input[name="'+$(this).data('update')+'"]').val(ui.value).change();

                }
            }).bind('updateHandle', function(event, ui) {
                var value = $(this).slider('value');
                var handle = $(this).find('.ui-slider-handle').first();
                handle.text(value);
                $(this).parents('.question').find('input[name="'+$(this).data('update')+'"]').val(value).change();                
            });
        });

        $('#fpe .totals .expand').click(function(e) {
            e.preventDefault();
            $('#fpe .totals .detailed').slideToggle();
        })

        $('#fpe input').on('change keyup', function() {
            Fpe.calculate();
        });

        $('#reset-estimator').click(function (event) {
            event.preventDefault();
            Fpe.performers = {};
            Fpe.options = {};
            $('#fpe input[type=text]').val('');
            $('#fpe input[type=number]').val(0);
            $('.numeric-slider').each(function() {
                $(this).slider('value', $(this).data('default')).trigger('updateHandle');
                //$(this).data('slider')._change();
            })
            $('#fpe .expand').click();
            Fpe.next = ['commercial-type']
            Fpe.moveNext();
        })

        window.tagInputs = [];
        $('.js-autocomplete').each(function() {
            var el = $(this).tagify({
                enforceWhitelist: true,
                whitelist: markets,
                dropdown: {
                    enabled: 1,
                },
                mapValueToProp : "code",
            }).on('add', function() {
                Fpe.calculate();
                var button = $(this).parents('.minimal-form-input').siblings('.answer');
                /*if (!button.hasClass('selected')) {
                    button.click();
                }*/
            }).on('remove', function () {
                Fpe.calculate();
            });
            window.tagInputs.push(el);
        });
        $('.js-autocomplete2').each(function() {
            var el = $(this).tagify({
                enforceWhitelist: true,
                whitelist: spanish_markets,
                dropdown: {
                    enabled: 1,
                },
                mapValueToProp : "code",
            }).on('add', function() {
                Fpe.calculate();
                var button = $(this).parents('.minimal-form-input').siblings('.answer');
            }).on('remove', function () {
                Fpe.calculate();
            });
            window.tagInputs.push(el);
        });
    };
    Fpe.moveTo = function(el) {
        $('.question:visible').slideUp({
            complete: function() {
                Fpe.scrollTo(el);
            }
        });
        el.slideDown();
    }
    Fpe.moveNext = function() {
        if (Fpe.next.length == 0) {
            console.log('ready');
            $('#fpe .totals').css('position', 'static');
            $('#fpe .expand').click();
            return;
        }
        var id = Fpe.next.shift();
        if (!id) {
            console.log('ready');
            $('#fpe .totals').css('position', 'static');
            $('#fpe .expand').click();
            return; 
        }
        if (id == 'thank-you') {
            $('#fpe .totals').css('position', 'static');
            $('#fpe .expand').click();
        }
        $('.question:visible').slideUp();
        $('#'+id).slideDown(400, function() {
            Fpe.totalsOnScreen();
            Fpe.scrollTo($('.question:visible'));
        });
        Fpe.calculate();
    }
    Fpe.move = function(el) {
        if (el.hasClass('selected')) {
            el.removeClass('selected').siblings().slideDown();
            var q = el.parents('.question').nextAll('.question');
            q.slideUp();
            q.find('.answer').removeClass('selected').slideDown();
        } else {
            var show = el.data('show').split(' ');
            var showEl = $('.question#'+show[0]);
            el.addClass('selected');
            el.parents('.question').addClass('answered');
            el.siblings('.answer').removeClass('selected').slideUp({
                complete: function() {
                    Fpe.scrollTo(showEl);
                }
            });
            
            for (var i=0; i<show.length; i++) {
                $('.question#'+show[i]).slideDown();
            }
            
        }
        setTimeout(function() {
            Fpe.totalsOnScreen();
        }, 500);
        Fpe.calculate();
    };
    Fpe.scrollTo = function (el) {
        $('html,body').animate({scrollTop: (el.offset().top - 120)});
    }

    Fpe.checkVisible = function( elm, eval ) {
        eval = eval || "visible";
        var vpH = $(window).height(), // Viewport Height
            st = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();
        
        if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (eval == "above") return ((y < (vpH + st)));
    }

    Fpe.calculate = function() {
        Fpe.totals = $('<div></div>');
        var type = Fpe.type;
        var sessionFees = $('.totals .session-fees');
        var broadcastFees = $('.totals .broadcast-fees');
        $('.totals .session-fees p').remove();
        $('.totals .broadcast-fees').html('');
        $('.totals .other-fees p').remove();
        var subtotal = 0;
        var sessionFeesTotal = 0;
        var broadcastFeesTotal = 0;

        var broadcast = Fpe.getSelected(type+'-broadcast', 'broadcast');
        var internet = Fpe.getSelected(type+'-internet', 'length');
        var onAir =  Fpe.getSelected(type+'-type', 'air');
        var total_actors_cost = 0;

        var total_performers = {};

        sessionFeesTotal = 0;

        if (Fpe.type == 'radio' || Fpe.type == 'tv') {
            // performers session fees for tv and radio
            for(var key in Fpe.performers) {
                var performer = key;
                var count = Fpe.performers[key];
                
                var costObj = Fpe.getPerformerObject(performer);

                if (performer == 'creative_session' && count == 0.5) {
                    count = 1;
                }

                var cost = count*costObj.session;
                
                if (Fpe.type == 'tv' && Fpe.options[key+'_hours']) {
                    var hours = Fpe.options[key+'_hours']/8;
                    cost = cost * hours;
                }
                if (Fpe.type == 'radio' && $.inArray(performer, ['announcer', 'solo_duo', 'group_3', 'group_6', 'group_9']) >= 0) {
                    if (Fpe.options['radio_multitracking']) {
                        cost - costObj.multitracking;
                    }
                    if (Fpe.options['radio_sweetening']) {
                        cost *= 2;
                    }
                }
                if (Fpe.options[performer+'_weekend']) {
                    cost *= 1.1;
                }
                if (Fpe.options[performer+'_nightwork']) {
                    cost *= 1.5;
                }
                if (Fpe.options[performer+'_travel']) {
                    cost += parseInt(Fpe.options[performer+'_travel']);
                }
                if (performer == 'actor_on_camera' || performer == 'stunt_performer') {
                    if (Fpe.options[performer+'_travel_days']) {
                        var c = parseInt(Fpe.options[performer+'_travel_days']);
                        cost += c*costObj.session
                    }
                }
                Fpe.putTotal({
                    text: Fpe.performers[key]+'x '+Fpe.labels[key],
                    value: cost,
                    el: sessionFees,
                });
                sessionFeesTotal += cost;
            }

            // broadcast for tv and radio
            for(var i in Fpe.broadcast) {
                airType = Fpe.broadcast[i];
                var markets = eval($('#'+type+'_'+airType+'_markets [name=markets]').val());
                //console.log(markets);
                Fpe.putTotal({
                    text: Fpe.labels[airType],
                    el: broadcastFees,
                });
                switch (airType) {
                    case 'spanish_wildspot':
                    case 'wildspot': 
                        //var markets = eval($('#'+type+'_'+airType+'_markets [name=markets]').val());
                        var marketValue = 0;
                        var primaryMarkets = ['ny', 'chi', 'la'];
                        var selectedPrimaryMarkets = [];
                        var base = type+'_'+broadcast;

                        for (var i in markets) {
                            if ($.inArray(markets[i], primaryMarkets) != -1) {
                                selectedPrimaryMarkets.push(markets[i]);
                            } else {
                                if (airType == 'wildspot') {
                                    marketValue += costs.wildspot_markets[markets[i]];
                                } else {
                                    marketValue += costs.spanish_markets_weights[markets[i]];
                                }
                            }
                        }

                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            if (Fpe.type == 'radio') {
                                var wsCost = costObj.broadcast[airType][Fpe.options.wildspot_weeks];
                            } else {
                                var wsCost = costObj.broadcast[airType];    
                            }
                            if (wsCost == undefined) continue;

                            if (selectedPrimaryMarkets.length == 0) {
                                if (airType == 'spanish_wildspot') {
                                    var majorFee = wsCost.unit_1
                                }
                                if (marketValue < 26) {
                                    var addl = wsCost.unit_2_25;
                                } else {
                                    var addl = wsCost.unit_26;
                                }
                            } else {
                                switch(selectedPrimaryMarkets.length) {
                                    case 1: 
                                        var majorFee = wsCost[selectedPrimaryMarkets[0]];
                                        var addl = wsCost[selectedPrimaryMarkets[0]+'_unit'];
                                        break;
                                    case 2:
                                        var majorFee = wsCost.major2;
                                        var addl = wsCost.major2_unit;
                                        break;
                                    case 3:
                                        var majorFee = wsCost.major3;
                                        var addl = wsCost.major3_unit;
                                        break;
                                }
                            }
                        
                            if (selectedPrimaryMarkets.length > 0) {
                                Fpe.putTotal({
                                    text: '1st unit for '+Fpe.performers[performer]+'x '+Fpe.labels[performer],
                                    value: majorFee*Fpe.performers[performer],
                                    el: broadcastFees,
                                });    
                                broadcastFeesTotal += majorFee*Fpe.performers[performer];
                            }
                            if (airType == 'spanish_wildspot') {
                                Fpe.putTotal({
                                    text: '1st unit for '+Fpe.performers[performer]+'x '+Fpe.labels[performer],
                                    value: majorFee*Fpe.performers[performer],
                                    el: broadcastFees,
                                });    
                                broadcastFeesTotal += majorFee*Fpe.performers[performer];
                            }
                            Fpe.putTotal({
                                text: (marketValue-1)+' add\'l units for '+Fpe.performers[performer]+'x '+Fpe.labels[performer]+' at $'+addl,
                                value: ((marketValue-1)*Fpe.performers[performer]*addl),
                                el: broadcastFees,
                            });
                        }
                        broadcastFeesTotal += ((marketValue-1)*Fpe.performers[performer]*addl);
                        break;
                    case 'cable':
                        var units = Fpe.options.cable_units;
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            var cost = costObj.broadcast.cable[units];
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer]+' at $'+cost.toFixed(2),
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });    
                            broadcastFeesTotal += cost*Fpe.performers[performer];
                        }
                        break;
                    case 'network':
                    case 'radio_dealer':
                    case 'internet':
                    case 'newmedia':
                        var cycle = Fpe.options[airType+'_cycle'];
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            var cost = costObj.broadcast[airType][cycle];
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer]+' for '+cycle,
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });   
                            broadcastFeesTotal += cost*Fpe.performers[performer]; 
                        }
                        break;
                    case 'demo':
                    case 'theatrical':
                    case 'spanish':
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            var cost = costObj.broadcast[airType];
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer],
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });   
                            broadcastFeesTotal += cost*Fpe.performers[performer]; 
                        }
                        break;
                    case 'foreign':
                        var mod = Fpe.options.foreign_modifier;
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            var cost = mod*costObj.session;
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer],
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });   
                            broadcastFeesTotal += cost*Fpe.performers[performer]; 
                        }
                        break;
                    case 'regional':
                    case 'program':
                    case 'local': 
                    case 'radio_foreign':
                    case 'radio_psa':
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (costObj == undefined) continue;
                            if (typeof costObj.broadcast == 'undefined') continue;
                            if (typeof costObj.broadcast[airType] == 'undefined') continue;
                            var cost = costObj.broadcast[airType];
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer],
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });
                            broadcastFeesTotal += cost*Fpe.performers[performer]; 
                        }
                        break;
                    case 'dealer': 
                        var dealer = Fpe.options.dealer;
                        var cycle = Fpe.options.dealer_cycle;
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            var cost = costObj.broadcast[airType][dealer][cycle];
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer]+' for '+dealer+' '+Fpe.labels[cycle],
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });   
                            broadcastFeesTotal += cost*Fpe.performers[performer]; 
                        }
                        break;
                    case 'program_a':
                        var uses = Fpe.options.tv_program_a_uses;
                        var guaranteed = Fpe.options.tv_program_a_uses_guarantee;
                        for(var performer in Fpe.performers) {
                            var costObj = Fpe.getPerformerObject(performer);
                            if (typeof costObj.broadcast == 'undefined') continue;
                            var cost = 0
                            if (guaranteed) {
                                cost = costObj.broadcast.program_a['13g'];
                            } else {
                                cost = costObj.broadcast.program_a['1'];
                                if (uses >= 2) {
                                    cost += costObj.broadcast.program_a['1'];
                                }
                                if (uses > 2) {
                                    cost += (uses-2)*costObj.broadcast.program_a['3-13'];
                                }
                            }
                            Fpe.putTotal({
                                text: Fpe.performers[performer]+'x '+Fpe.labels[performer]+' at $'+cost.toFixed(2),
                                value: cost*Fpe.performers[performer],
                                el: broadcastFees,
                            });    
                            broadcastFeesTotal += cost*Fpe.performers[performer];
                        }
                        break;
                    default:
                        console.log(airType+' not defined');
                }
                console.log(broadcastFeesTotal);
            }
        }

        if (Fpe.type == 'industrial') {
            console.log('industrial');
            if (typeof Fpe.options.category != 'undefined') {
                switch (Fpe.options.category) {
                    case 'category1':
                    case 'category2': 
                        if (typeof Fpe.options.performer != 'undefined') {
                            var cost = costs.fees.industrial[Fpe.options.category][Fpe.options.performer];
                            var text = Fpe.labels[Fpe.options.performer]+' '+Fpe.labels[Fpe.options.category];
                            //console.log(text+' '+cost);
                            if (typeof Fpe.options[Fpe.options.performer+'_addl'] != 'undefined') {
                                cost *= Fpe.options[Fpe.options.performer+'_addl'];
                                text += ' - x'+Fpe.options[Fpe.options.performer+'_addl'];
                            }
                            Fpe.putTotal({
                                text: text,
                                value: cost,
                                el: sessionFees,
                            });
                            sessionFeesTotal += cost;
                        }
                        break;
                    case 'ivr': 
                        if (typeof Fpe.options.ivr_hours != 'undefined') {
                            var text = Fpe.labels[Fpe.options.category];
                            switch (Fpe.options.ivr_hours) {
                                case 0.5: 
                                    var cost = costs.fees.industrial.ivr.half; 
                                    text += ' 1/2 hour';
                                    break;
                                case 1: 
                                    var cost = costs.fees.industrial.ivr.first; 
                                    text += ' 1 hour';
                                    break;
                                default: 
                                    var cost = costs.fees.industrial.ivr.first;
                                    cost += (Fpe.options.ivr_hours-1)*costs.fees.industrial.ivr.over;
                                    text += ' '+Fpe.options.ivr_hours+' hours';
                                    break;
                            }
                            Fpe.putTotal({
                                text: text,
                                value: cost,
                                el: sessionFees,
                            });
                            sessionFeesTotal += cost;
                        }
                        break;
                    case 'storecast': 
                        if (typeof Fpe.options.storecast_cycle != 'undefined') {
                            var cost = costs.fees.industrial[Fpe.options.category][Fpe.options.storecast_cycle];
                            if (typeof Fpe.options.storecast_clients != 'undefined') {
                                cost *= Fpe.options.storecast_clients;
                            }
                            Fpe.putTotal({
                                text: Fpe.labels[Fpe.options.category],
                                value: cost,
                                el: sessionFees,
                            });
                            sessionFeesTotal += cost;    
                        }
                        break;
                }
            } 
        }

        if (Fpe.type == 'nonunion') {
            for(var performer in Fpe.performers) {
                var cost = parseFloat($('#nu-'+performer+'-cost input').val());
                var other = ['other', 'reimbursments'];
                for(var k in other) {
                    var c = parseFloat($('#nu-'+performer+'-'+other[k]+' input').val());
                    if (typeof c != 'undefined') {
                        cost += c;
                    }
                }
                var count = Fpe.performers[performer];
                Fpe.putTotal({
                    text: count+'x '+Fpe.labels[performer],
                    value: cost,
                    el: sessionFees,
                });
                sessionFeesTotal += cost;
            }

            var b = parseFloat($('#nu-broadcast-cost input').val());
            if (b > 0) {
                var text = 
                Fpe.putTotal({
                    text: Fpe.options.usage,
                    el: broadcastFees,
                });
                var text = [];
                if (typeof Fpe.options['usage-cycle'] != 'undefined') {
                    text.push(Fpe.options['usage-cycle']);
                }
                if (typeof Fpe.options['usage-length'] != 'undefined') {
                    text.push(Fpe.options['usage-length']);
                }
                Fpe.putTotal({
                    text: text.join(' - '),
                    value: b,
                    el: broadcastFees,
                });
                broadcastFeesTotal += b;
            }
        }
            
        if (sessionFeesTotal > 0) {
            Fpe.putTotal({
                text: 'Session fees subtotal',
                value: sessionFeesTotal,
                el: sessionFees,
                bold: true,
            });
            sessionFees.show();
            subtotal += sessionFeesTotal;
        } else {
            sessionFees.hide();
        }

        if (broadcastFeesTotal > 0) {
            Fpe.putTotal({
                text: 'Usage fees subtotal',
                value: broadcastFeesTotal,
                el: broadcastFees,
                bold: true,
            });
            subtotal += broadcastFeesTotal;
            broadcastFees.show();
        } else {
            broadcastFees.hide();
        }
        /* Other fees */
        var agent_percent = $('[name=agent_fee]').length > 0 ? $('[name=agent_fee]').val() : costs.agent_percent;

        var agentFee = subtotal*(agent_percent/100);
        var pensionFee = (subtotal+agentFee)*0.18;
        var falconFee = (subtotal+pensionFee+agentFee)*0.08;
        var total = subtotal+agentFee+pensionFee+falconFee;
        Fpe.putTotal({
            text: 'Talent agent '+agent_percent+'%',
            value: agentFee,
            el: $('#fpe .totals .other-fees'),
            bold: true,
        });
        Fpe.putTotal({
            text: 'Pension & health',
            value: pensionFee,
            el: $('#fpe .totals .other-fees'),
            bold: true,
        });
        Fpe.putTotal({
            text: 'Falcon paymasters fee',
            value: falconFee,
            el: $('#fpe .totals .other-fees'),
            bold: true,
        });
        $('#fpe .totals .subtotal').text('$'+(Math.round(subtotal*100)/100).toFixed(2));
        $('#fpe .totals .total').text('$'+(Math.round(total*100)/100).toFixed(2));
        if (sessionFeesTotal > 0) {
            sessionFees.show();
        }
        if (broadcastFeesTotal > 0) {
            broadcastFees.show();
        }
    }

    Fpe.getSelected = function(question, value, type='answer') {
        var q = $('#'+question+' .answer.selected');
        if (q.length > 0) {
            return q.eq(0).data(value);
        }
        return false;
    }

    Fpe.putTotal = function(args) {
        var bold = args.bold || false;
        if (typeof args.value != 'undefined') {
            args.el.append('<p class="'+(bold ? 'em' : '')+'"><span>'+(Math.round(args.value*100)/100).toFixed(2)+'</span> '+args.text+'</p>');
        } else {
            args.el.append('<h6>'+args.text+'</h6>');
        }
    }

    Fpe.getCost = function(selector) {
        return Math.round(parseFloat(fpeOptions[selector])*100)/100;
    }

    Fpe.format = function(n, sep, decimals) {
        sep = sep || "."; // Default to period as decimal separator
        decimals = decimals || 2; // Default to 2 decimals
        return n.toLocaleString().split(sep)[0]
            + sep
            + n.toFixed(decimals).split(sep)[1];
    }

    Fpe.getPerformerObject = function(performer) {
        var principals_on = ['actor_on_camera' , 'stunt_performer', 'speciality_act', 'dancer'];
        var principals_off = ['singer' , 'actor_off_camera'];
        if ($.inArray(performer, ['announcer', 'solo_duo', 'group_9', 'group_6', 'group_3', 'creative_session', 'singers_contractors']) >= 0) {
            var type = 'radio';
        } else {
            var type = 'tv';
        }

        if (principals_on.indexOf(performer) >= 0) {
            var costObj = costs.fees[type].principal_on;
        } else if(principals_off.indexOf(performer) >= 0) {
            var costObj = costs.fees[type].principal_off;
        } else {
            var costObj = costs.fees[type][performer];
        }
        return costObj;
    }  

    Fpe.totalsOnScreen = function() {
        var footer = $('#footer-outer');
        if (Fpe.checkVisible(footer)) {
            var b = $('#footer-outer').outerHeight() - ($('body').outerHeight() - ($(window).scrollTop() +$(window).height()))
            $('#fpe .totals').css('bottom', b+'px');
        } else {
            $('#fpe .totals').css('bottom', 0);
        }
    }
    
    Fpe.i = setInterval(function() {
        if ($('#fpe').length > 0) {
            Fpe.init();
            clearInterval(Fpe.i);
        }
    }, 250);
    setTimeout(function() {
        clearInterval(Fpe.i);
    }, 10000);
}(jQuery))