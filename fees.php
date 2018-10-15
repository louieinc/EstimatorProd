<div id="fpe" class="wrap">
    <h2>Rates</h2>
    <form action="" method="post">
        <section>
            <h3>Session Fees for On-Air Commercials</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('Principal Actor On-Camera', '_principal_actor_on_camera');
                    FalconEstimator::field('Principal Actor Off-Camera', '_principal_actor_off_camera');
                    FalconEstimator::field('General Extra On-Camera', '_extra_actor');
                    FalconEstimator::field('Radio Actor/announcer', '_radio_actor');
                    FalconEstimator::field('Radio Singer', '_radio_singer');
                ?>
            </table>
            <h3>Session Fees for Demo Commercials</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('Principal Actor On-Camera', '_principal_actor_on_camera_demo');
                    FalconEstimator::field('Radio Actor/announcer', '_radio_actor_demo');
                    FalconEstimator::field('Radio Singer', '_radio_singer_demo');
                ?>
            </table>
            <h3>Session Fees for PSA</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('PSA Actor/announcer', '_psa_actor_demo');
                    FalconEstimator::field('PSA Singer', '_psa_singer_demo');
                    /*FalconEstimator::field('PSA Actor on camera', '_psa_actor_on_camera');
                    FalconEstimator::field('PSA Actor off camera', '_psa_actor_off_camera');*/
                ?>
            </table>
            <h3>Other</h3>
            <table class="form-table">
                <?php
                    FalconEstimator::field('Wardrobe Fittings', '_wardrobe_fittings');
                    FalconEstimator::field('Television Additional Tags', '_tv_tags');
                    FalconEstimator::field('Radio Additional Tags', '_radio_tags');
                    FalconEstimator::field('% Pension & Health Contribution Rate', '_pension_health');
                    FalconEstimator::field('% Agent Fee', '_agent_fee');
                    FalconEstimator::field('% Falcon Fee', '_falcon_fee');
                ?>
            </table>
        </section>
    </form>
</div>