<div id="fpe" class="wrap">
    <h2>TV Markets Rates</h2>
    <form action="" method="post">
        <section>
            <h3>Wild Spot 13 weeks cycle</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('Wild Spot units 2-25 ea.', '_radio_wild_spot_13week_2_25');
                    FalconEstimator::field('Wild Spot units 26-60 ea.', '_radio_wild_spot_13week_26_60');
                    FalconEstimator::field('Wild Spot units 61-125 ea.', '_radio_wild_spot_13week_61_125');
                    FalconEstimator::field('Wild Spot units 126+ ea.', '_radio_wild_spot_13week_126');

                    FalconEstimator::field('Wild Spot NY Alone 1st unit', '_radio_wild_spot_13week_ny');
                    FalconEstimator::field('Wild Spot NY Alone add\'l unit', '_radio_wild_spot_13week_ny_addl_unit');

                    FalconEstimator::field('Wild Spot CHI Alone 1st unit', '_radio_wild_spot_13week_chi');
                    FalconEstimator::field('Wild Spot CHI Alone add\'l unit', '_radio_wild_spot_13week_chi_addl_unit');

                    FalconEstimator::field('Wild Spot LA Alone 1st unit', '_radio_wild_spot_13week_la');
                    FalconEstimator::field('Wild Spot LA Alone add\'l unit', '_radio_wild_spot_13week_la_addl_unit');

                    FalconEstimator::field('Wild Spot 2 of NY/CHI/LA 1st unit', '_radio_wild_spot_13week_2_major');
                    FalconEstimator::field('Wild Spot 2 of NY/CHI/LA add\'l unit', '_radio_wild_spot_13week_2_major_addl_unit');

                    FalconEstimator::field('Wild Spot all 3 of NY/CHI/LA 1st unit', '_radio_wild_spot_13week_3_major');
                    FalconEstimator::field('Wild Spot 3 of NY/CHI/LA add\'l unit', '_radio_wild_spot_13week_3_major_addl_unit');
                ?>
            </table>
            <h3>Wild Spot 8 weeks cycle</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('Wild Spot units 2-25 ea.', '_radio_wild_spot_8week_2_25');
                    FalconEstimator::field('Wild Spot units 26-60 ea.', '_radio_wild_spot_8week_26_60');
                    FalconEstimator::field('Wild Spot units 61-125 ea.', '_radio_wild_spot_8week_61_125');
                    FalconEstimator::field('Wild Spot units 126+ ea.', '_radio_wild_spot_8week_126');

                    FalconEstimator::field('Wild Spot NY Alone 1st unit', '_radio_wild_spot_8week_ny');
                    FalconEstimator::field('Wild Spot NY Alone add\'l unit', '_radio_wild_spot_8week_ny_addl_unit');

                    FalconEstimator::field('Wild Spot CHI Alone 1st unit', '_radio_wild_spot_8week_chi');
                    FalconEstimator::field('Wild Spot CHI Alone add\'l unit', '_radio_wild_spot_8week_chi_addl_unit');

                    FalconEstimator::field('Wild Spot LA Alone 1st unit', '_radio_wild_spot_8week_la');
                    FalconEstimator::field('Wild Spot LA Alone add\'l unit', '_radio_wild_spot_8week_la_addl_unit');

                    FalconEstimator::field('Wild Spot 2 of NY/CHI/LA 1st unit', '_radio_wild_spot_8week_2_major');
                    FalconEstimator::field('Wild Spot 2 of NY/CHI/LA add\'l unit', '_radio_wild_spot_8week_2_major_addl_unit');

                    FalconEstimator::field('Wild Spot all 3 of NY/CHI/LA 1st unit', '_radio_wild_spot_8week_3_major');
                    FalconEstimator::field('Wild Spot 3 of NY/CHI/LA add\'l unit', '_radio_wild_spot_8week_3_major_addl_unit');
                ?>
            </table>
            <h3>Dealer Commercial</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('6 Month Use', '_radio_dealer_6month');
                ?>
            </table>
            <h3>Network Program Commercial</h3>
            <table class="form-table">
                <?php
                    $weeks = array(1,4,8,13);
                    foreach($weeks as $week) {
                        FalconEstimator::field($week.' Week Use', '_radio_network_'.$week.'week');
                    }
                    FalconEstimator::field('13 Week Limited Use (26 uses)', '_radio_network_13_week_limited');
                ?>
            </table>
            <h3>Regional Network Program</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('13 Week Use', '_radio_regional');
                ?>
            </table>
            <h3>Made-for-Internet</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('4-week', '_radio_internet_4_week');
                    FalconEstimator::field('8-week', '_radio_internet_8_week');
                    FalconEstimator::field('1-year', '_radio_internet_8_year');
                ?>
            </table>
        </section>
    </form>
</div>
