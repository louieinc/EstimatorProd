<?php global $fpe; ?>
<div id="fpe">
    <div class="question" id="commercial-type" style="display: block;">
        <h4>What kind of production are you hiring for?</h4>
        <div class="answers">
            <div class="answer" data-follow="thank-you tv_broadcast tv_performers" data-type="tv">Television Commercial (union)</div>
            <div class="answer" data-follow="thank-you radio_broadcast radio_multitracking radio_sweetening radio_performers" data-type="radio">Radio Commercial (union)</div>
            <div class="answer" data-follow="industrial_performers" data-type="industrial">Non-Broadcast/Industrials (union)</div>
            <div class="answer" data-foloow="nonunion_performers" data-type="nonunion">Non-Broadcast/Industrials Contract (non-union)</div>
        </div>
    </div>
    <?php include dirname(__FILE__).'/calc-tv.php'; ?>
    <?php include dirname(__FILE__).'/calc-radio.php'; ?>
    <?php //include dirname(__FILE__).'/calc-industrial.php'; ?>
    <?php //include dirname(__FILE__).'/calc-nonunion.php'; ?>
    <div class="question" id="thank-you">
        <h1 class="text-center">Thank you</h1>
    </div>
    <div class="totals">
        <div class="container">
            <div class="detailed">
                <div class="actions fpe-row">
                    <div class="half">
                        <a href="#" id="email-estimation"><i class="fas fa-envelope"></i> Email this estimate</a><br>
                        <a href="#" id="print-estimation"><i class="fas fa-print"></i> Print this estimate</a>
                    </div>
                    <div class="half text-right">
                        <a href="#" id="reset-estimator"><i class="fas fa-undo"></i> Start over</a>
                    </div>
                </div>
                <div class="session-fees">
                    <h6>Session fees</h6>
                </div>
                <div class="broadcast-fees">
                </div>
                <div class="other-fees"></div>
            </div>
            <div class="general d-flex">
                <a class="expand flex-g">View details <i class="fa fa-angle-up"></i></a>
                <div class="text-right text-bold">
                        Subtotal Wages:<br>
                        Balance Due: 
                </div>
                <div class="values text-right text-bold">
                    <span class="subtotal">$0</span><br>
                    <span class="total">$0</span>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    var markets = [ {value: 'New York', primary: true, code: 'ny'}, {value: 'Chicago', primary: true, code: 'chi'}, {value: 'Los Angeles', primary: true, code: 'la'},
        <?php foreach($fpe->markets as $market) {
            printf('{value: "%s", code: "%s", primary: false}, ', $market, preg_replace('/[^a-z]/', '-', strtolower($market), -1));
        } ?>
    ]
</script>