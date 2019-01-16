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
        'actor_off_camera': 'Off-Cameral Principal (Ex. Voiceover)',
        'singer': 'Singer',
        'extra': 'Extra Performer',
    }
};

var costs = {
    tv_wildspot_markets: {
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
                        a: {
                            '6m': 2229.30,
                            '6m_ny': 2520.70,
                        },
                        b: {
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
            actor_off_camera: 505.05,
            stunt_performer: 671.70,
            pilot: 795.50,
            speciality_act: 671.7,
            dancer: 671.7,
            singer: 505.05,
            extra: 366.35
        },
        radio: {
            announcer: 298.10,
            solo_duo: 298.10,
            group_3: 219.60,
            group_6: 194.35,
            group_9: 172.40,
            creative_session: 266.90,
            singers: 102.35,
        },
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
                    case 'wildspot': Fpe.next.unshift('radio_wildspot_weeks', 'radio_wildspot_cycles'); break;
                    case 'network': Fpe.next.unshift('radio_network_weeks'); break;
                    case 'dealer': Fpe.next.unshift('radio_dealer_cycle'); break;
                    case 'internet': Fpe.next.unshift('radio_internet_cycle'); break;
                    case 'newmedia': Fpe.next.unshift('radio_newmedia_cycle'); break;
                    case 'single_market': Fpe.next.unshift('radio_single_market_cycle'); break;
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
                            Fpe.next.unshift('tv_on_camera_tags');
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
                    Fpe.performers[type] = parseInt($(this).val());
                    Fpe.next.unshift('radio_'+type+'_weekend','radio_'+type+'_nightwork','radio_'+type+'_travel');
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
            var value = $(this).siblings('input').val() || 0;
            //console.log('min: '+min);
            //console.log('max: '+max);
            //console.log('value: '+value);
            $(this).slider({
                min: min,
                max: max,
                value: value,
                create: function() {
                    var handle = $(this).find('.ui-slider-handle').first();
                    handle.text($(this).slider('value'));
                },
                slide: function(event, ui) {
                    var handle = $(this).find('.ui-slider-handle').first();
                    handle.text(ui.value);
                    $(this).parents('.question').find('input[name="'+$(this).data('update')+'"]').val(ui.value).change();

                }
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
            $('.question:first .answer.selected').click();
            for (var k in window.tagInputs) {
                window.tagInputs[k].data('tagify').removeAllTags();
            }
            $('.numeric-slider').slider('value', 0);
            $('.numeric-slider .custom-handle').text(0);
            $('.totals .expand').click();
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
                whitelist: countries,
                dropdown: {
                    enabled: 1,
                },
                mapValueToProp : "code",
            }).on('add', function() {
                Fpe.calculate();
                var button = $(this).parents('.minimal-form-input').siblings('.answer');
                if (!button.hasClass('selected')) {
                    button.click();
                }
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
            return;
        }
        var id = Fpe.next.shift();
        if (!id) {
            console.log('ready');
            return; 
        }
        console.log('moving: '+id);
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
        console.log('calculating');
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

        var total_performers = {
            principal_on: 0,
            principal_off: 0,
        };

        sessionFeesTotal = 0;

        // performers session fees
        for(var key in Fpe.performers) {
            var performer = key;
            var count = Fpe.performers[key];
            var principals_on = ['actor_on_camera' , 'stunt_performer', 'speciality_act', 'dancer'];
            var principals_off = ['singer' , 'actor_off_camera'];

            if (principals_on.indexOf(key) >= 0) {
                var costObj = costs.fees.tv.principal_on;
                if (total_performers.principal_on == undefined) {
                    total_performers.principal_on = 0;
                }
                total_performers.principal_on += Fpe.performers[performer];
            } else if(principals_off.indexOf(key) >= 0) {
                var costObj = costs.fees.tv.principal_off;
                if (total_performers.principal_off == undefined) {
                    total_performers.principal_off = 0;
                }
                total_performers.principal_off += Fpe.performers[performer];
            } else {
                var costObj = costs.fees.tv[key];
                if (total_performers[key] == undefined) {
                    total_performers[key] = 0;
                }
                total_performers[key] += Fpe.performers[performer];
            }
            var cost = count*costObj.session;
            
            if (Fpe.type == 'tv') {
                var hours = Fpe.options[key+'_hours']/8;
                cost = cost * hours;
            }
            if (Fpe.options[key+'_weekend']) {
                cost *= 1.1;
            }
            if (Fpe.options[key+'_nightwork']) {
                cost *= 1.5;
            }
            if (Fpe.options[key+'_travel']) {
                cost += parseInt(Fpe.options[key+'_travel']);
            }
            Fpe.putTotal({
                text: Fpe.performers[key]+'x '+Fpe.labels[key],
                value: cost,
                el: sessionFees,
            });
            sessionFeesTotal += cost;
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

        for(var i in Fpe.broadcast) {
            airType = Fpe.broadcast[i];
            switch (airType) {
                case 'wildspot': 
                    console.log('calculating for wildspot');
                    var markets = eval($('#tv_wildspot_markets [name=tv_markets]').val());
                    var marketValue = 0;
                    var primaryMarkets = ['ny', 'chi', 'la'];
                    var selectedPrimaryMarkets = [];
                    var base = type+'_'+broadcast;

                    Fpe.putTotal({
                        text: Fpe.labels[airType],
                        el: broadcastFees,
                    });

                    for(var performer in total_performers) {
                        console.log(performer);
                        var costObj = costs.fees.tv[performer];
                        console.log(costObj);
                        for (var i in markets) {
                            if ($.inArray(markets[i], primaryMarkets) != -1) {
                                selectedPrimaryMarkets.push(markets[i]);
                            } else {
                                marketValue += costs.tv_wildspot_markets[markets[i]];
                            }
                        }
                        if (selectedPrimaryMarkets.length == 0) {
                            if (marketValue < 26) {
                                var addl = costObj.broadcast.wildspot.unit_2_25;
                            } else {
                                var addl = costObj.broadcast.wildspot.unit_26;
                            }
                        } else {
                            switch(selectedPrimaryMarkets.length) {
                                case 1: 
                                    var majorFee = costObj.broadcast.wildspot[selectedPrimaryMarkets[0]];
                                    var addl = costObj.broadcast.wildspot[selectedPrimaryMarkets[0]+'_unit'];
                                    break;
                                case 2:
                                    var majorFee = costObj.broadcast.wildspot.major2;
                                    var addl = costObj.broadcast.wildspot.major2_unit;
                                    break;
                                case 3:
                                    var majorFee = costObj.broadcast.wildspot.major3;
                                    var addl = costObj.broadcast.wildspot.major3_unit;
                                    break;
                            }
                        }
                    
                        if (selectedPrimaryMarkets.length > 0) {
                            Fpe.putTotal({
                                text: '1st unit for '+total_performers[performer]+' at $'+addl,
                                value: majorFee*total_performers[performer]*addl,
                                el: broadcastFees,
                            });    
                        }
                        Fpe.putTotal({
                            text: (marketValue-1)+' add\'l units for '+total_performers[performer]+' at $'+addl,
                            value: ((marketValue-1)*total_performers[performer]*addl),
                            el: broadcastFees,
                        });
                    }
                    broadcastFeesTotal += ((marketValue-1)*total_performers.performers[performer]*addl);
                    break;
                default:
                    console.log(airType+' not defined');
            }
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
        var agentFee = subtotal*0.1;
        var pensionFee = (subtotal+agentFee)*0.18;
        var falconFee = (subtotal+pensionFee+agentFee)*0.08;
        var total = subtotal+agentFee+pensionFee+falconFee;
        Fpe.putTotal({
            text: 'Talent agent 10%',
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
            args.el.append('<p class="'+(bold ? 'em' : '')+'"><span>'+(Math.round(args.value*100)/100).toFixed()+'</span> '+args.text+'</p>');
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