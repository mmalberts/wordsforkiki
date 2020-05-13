import React, { Component } from "react";

const styles = {
	bold: {
		fontWeight: "bold"
	},
	haiku: {
		textAlign: "center",
		fontStyle: "italic"
	},
	signature: {
		fontStyle: "italic"
	}
}

const Callie = () => (
	<div className="letterbox">
		<div className="letter">
			<p>
				<span style={styles.bold}>To:</span> Kayla Stevenson
				<br/>
				<span style={styles.bold}>From:</span> Callie Forkenbrock
				<br/>
				<span style={styles.bold}>Date:</span> May 13, 2020; 12:00:00 am CDT
				<br/>
				<span style={styles.bold}>Subject:</span> Birthday Celebration
			</p>
			<p>Hello Kayla,</p>
			<p>I am reaching out to wish you a happy birthday via an overly professional “email”: a format with which I know you are all too familiar. I hope you have a splendid day despite the current circumstances. I am so grateful that you are healthy and remaining safe and cannot wait to properly celebrate with a drink (or two ;-) ) in person when this is all over.</p>
			<p>I wanted to take this time to tell you how grateful I am for our friendship. You are absolutely one of my most genuine and reliable friends, and have always brought so much fun and enrichment into my life. I immensely value our heart-to-hearts and do not know what I would do without your shoulder to lean on. You are one of the strongest people I know and I admire your ability to maturely resolve conflict and always be the bigger person if/when things get tough. I also admire your keen abilities to strike up a conversation with literally anybody and be relatable to everyone you talk to.</p>
			<p>Kayla, I long for the summers’ day when we can once again take our lunch breaks together at that random public fountain/farmer’s market thing by Clark and Washington downtown. Until then, enjoy a quarantine birthday glass of wine, the “attached” photos of us from 2014 because apparently I do not have any recent photos on my computer, and the below haiku I wrote about you.</p>
			<p style={styles.haiku}>
				Twenty eight. Her name?
				<br/>
				Kayla Marie Stevenson.
				<br/>
				Her dance moves, they slay.
			</p>
			<p>From Iowa City to Ravenswood to Logan Square to Chicago Generally and also Beyond,</p>
			<p>Callie</p>
			<p style={styles.signature}>
				Callie Forkenbrock
				<br/>
				10-Year Friend of Kayla Marie Stevenson&trade;
				<br/>
				Fellow Pep Pine Fanatic
				<br/>
				Your Forever Shoulder to Lean On
				<br/>
				Horribly Anxiety-Ridden About Whether My “Email” Closing Above Made Sense
				<br/>
				callie.forkenbrock@gmail.com
				<br/>
				(224) 406-2566
			</p>
		</div>
	</div>
);

export default Callie;