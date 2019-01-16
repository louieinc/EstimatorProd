<?php
	$performers = [
		'actor_on_camera' => 'On-Camera Principal',
		'stunt_performer' => 'Stunt Performer',
		'pilot' => 'Pilot',
		'speciality_act' => 'Speciality Act',
		'dancer' => 'Dancer',
		'actor_off_camera' => 'Off-Cameral Principal (Ex. Voiceover)',
		'singer' => 'Singer',
		'extra' => 'Extra Performer',
	];
?>

<div class="question" id="tv_performers">
	<h4>What types of performers will you be using?</h4>
	<?php
		foreach ($performers as $type => $label) {
			FalconEstimator::slider($type, $label);
		}
	?>
	<div class="answer special">Continue</div>
</div>
<?php foreach ($performers as $type => $label): ?>
<div class="question" id="tv_<?php echo $type ?>_hours" >
	<h4>How many hours for <span><?php echo $label ?></span>?</h4>
	<?php FalconEstimator::slider( $type.'_hours', '', 8, 8, 12 ); ?>
	<div class="answer" data-show="tv">Continue</div>
</div>
<?php endforeach; ?>

<?php foreach ($performers as $type => $label): ?>
<div class="question" id="tv_<?php echo $type ?>_weekend">
	<h4>Weekend work for <span><?php echo $label ?></span>?</h4>
	<div class="answer" data-set="<?php echo $type ?>_weekend" data-value="1">Yes</div>
    <div class="answer" data-set="<?php echo $type ?>_weekend" data-value="0">No</div>
</div>
<?php endforeach; ?>

<?php foreach ($performers as $type => $label): ?>
<div class="question" id="tv_<?php echo $type ?>_nightwork">
	<h4>Nightwork work for <span><?php echo $label ?></span>?</h4>
	<div class="answer" data-set="<?php echo $type ?>_nightwork" data-value="1">Yes</div>
    <div class="answer" data-set="<?php echo $type ?>_nightwork" data-value="0">No</div>
</div>
<?php endforeach; ?>

<?php foreach ($performers as $type => $label): ?>
<div class="question" id="tv_<?php echo $type ?>_travel">
	<h4>Travel reinbursments work for <span><?php echo $label ?></span>?</h4>
	<input type="number" name="<?php echo $type ?>_travel" value="0" placeholder="value in $">
	<div class="answer">Continue</div>
</div>
<?php endforeach; ?>

<div class="question" id="tv_on_camera_tags">
	<h4>How many on camera tags will you need?</h4>
	<input type="number" name="tv_on_camera_tags" value="1" placeholder="1">
    <div class="answer">Continue</div>
</div>

<div class="question" id="tv_off_camera_tags">
	<h4>How many on camera tags will you need?</h4>
	<input type="number" name="tv_off_camera_tags" value="1" placeholder="1">
    <div class="answer">Continue</div>
</div>

<div class="question" id="tv_singers">
	<h4>How many singers will you need?</h4>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="solo">Solo or Duo</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="group_3">Group 3-5</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="group_6">Group 6-8</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="group_9">Group 9 or more</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="solo_signature">Signature - Solo or Duo</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="group_3_signature">Group Signature 3-5</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="group_6_signature">Group Signature 6-8</div>
	<div class="answer" data-set="<?php echo $type ?>_singers" data-value="group_9_signature">Group Signature 9+</div>
    <div class="answer">Continue</div>
</div>

<div class="question" id="tv_multitracking">
	<h4>Session with multi-tracking?</h4>
	<div class="answer" data-set="tv_multitracking" data-value="1">Yes</div>
    <div class="answer" data-set="tv_multitracking" data-value="0">No</div>
</div>

<div class="question" id="tv_sweetening">
	<h4>Session with sweetening?</h4>
	<div class="answer" data-set="tv_sweetening" data-value="1">Yes</div>
    <div class="answer" data-set="tv_sweetening" data-value="0">No</div>
</div>

<div class="question" id="tv_broadcast">
	<h4>How will the commercial air?</h4>
	<div class="answer multi" data-set="wildspot" data-value="1">Wildspot 13-weeks</div>
	<div class="answer multi" data-set="program_a" data-value="1">Program Class A ":30"</div>
	<div class="answer multi" data-set="cable" data-value="1">Cable Only</div>
	<div class="answer multi" data-set="spanish" data-value="1">Spanish Language Program</div>
	<div class="answer multi" data-set="spanish_wildspot" data-value="1">Spanish Language Wild Spot</div>
	<div class="answer multi" data-set="dealer" data-value="1">Dealer Commercial</div>
	<div class="answer multi" data-set="internet" data-value="1">Move Over for Internet</div>
	<div class="answer multi" data-set="newmedia" data-value="1">Move Over for New Media</div>
	<div class="answer multi" data-set="demo" data-value="1">Demo</div>
	<div class="answer multi" data-set="foreign" data-value="1">Foreign Use</div>
	<div class="answer multi" data-set="theatrical" data-value="1">Theatrical/Industrial use</div>
	<div class="answer special">Continue</div>
</div>

<div id="tv_wildspot_cycles" class="question">
	<h4>How many cycles for Wildspot?</h4>
	<?php FalconEstimator::slider('tv_wildspot_cycles', '', 1, 1, 10); ?>
	<div class="answer">Continue</div>
</div>

<div id="tv_wildspot_markets" class="question">
	<h4>In which market(s) will your spot air?</h4>
    <input type="text" class="js-autocomplete" style="display:none" name="markets" placeholder="Add markets...">
    <div class="answer">Continue</div>
</div>

<div id="tv_spanish_wildspot_markets" class="question">
	<h4>In which market(s) will your spot air?</h4>
    <input type="text" class="js-autocomplete2" style="display:none" name="markets" placeholder="Add markets...">
    <div class="answer">Continue</div>
</div>

<div id="tv_program_a_uses" class="question">
	<h4>How many uses will your spot air for Program Class A?</h4>
	<?php FalconEstimator::slider('tv_program_a_uses', '', 1, 1, 13); ?>
	<div class="answer">Continue</div>
</div>

<div id="tv_program_a_uses_guarantee" class="question">
	<h4>13 use guarantee?</h4>
	<div class="answer" data-set="tv_program_a_guarantee" data-value="1">Yes</div>
    <div class="answer" data-set="tv_program_a_guarantee" data-value="0">No</div>
</div>

<div id="tv_cable" class="question">
	<h4>How many cable units?</h4>
	<div class="answer" data-set="cable_units" data-value="min" data-set="subs:up_50k">Minimum</div>
    <div class="answer" data-set="cable_units" data-value="max" data-set="subs:up_100k">Maximum (3000 units)</div>

</div>

<div id="tv_spanish" class="question">
	<h4>Spanish program with additional units?</h4>
	<div class="answer" data-set="tv_spanish_additional" data-value="1">Yes</div>
    <div class="answer" data-set="tv_spanish_additional" data-value="0">No</div>
</div>

<div id="tv_dealer_type" class="question">
	<h4>Dealer A or B?</h4>
	<div class="answer" data-set="dealer" data-value="A">A</div>
    <div class="answer" data-set="dealer" data-value="B">B</div>
</div>

<div id="tv_dealer_cycle" class="question">
	<h4>Select desired use cycle for Dealer Commercial</h4>
	<div class="answer" data-set="dealer_cycle" data-value="6m_ny">6 Months W/ New York</div>
    <div class="answer" data-set="dealer_cycle" data-value="6m">6 Months W/O New York</div>
</div>

<div id="tv_internet_cycle" class="question">
	<h4>Select desired use cycle for Move over for Internet</h4>
	<div class="answer" data-set="internet_cycle" data-value="4week">4 Week Option</div>
    <div class="answer" data-set="internet_cycle" data-value="8week">8 Week Option</div>
    <div class="answer" data-set="internet_cycle" data-value="1year">1 year Option</div>
</div>

<div id="tv_newmedia_cycle" class="question">
	<h4>Select desired use cycle for Move over for New Media</h4>
	<div class="answer" data-set="newmedia_cycle" data-value="4week">4 Week Option</div>
    <div class="answer" data-set="newmedia_cycle" data-value="8week">8 Week Option</div>
    <div class="answer" data-set="newmedia_cycle" data-value="1year">1 year Option</div>
</div>

<div id="tv_foreign" class="question">
	<h4>Select countries for foreign use</h4>
	<div class="answer" data-set="foreign_modifier" data-value="9">Worldwide</div>
	<div class="answer" data-set="foreign_modifier" data-value="3">U.K.</div>
	<div class="answer" data-set="foreign_modifier" data-value="2">Europe</div>
	<div class="answer" data-set="foreign_modifier" data-value="2">Asia/Pacific</div>
	<div class="answer" data-set="foreign_modifier" data-value="1">Rest of the World</div>
	<div class="answer" data-set="foreign_modifier" data-value="1">Japan</div>
</div>

