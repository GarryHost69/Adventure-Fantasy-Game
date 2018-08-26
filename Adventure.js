var hp = 10;
var mana = 10;
var gold = 1000;
var morale = 5;
var scene = 1;
var choiceButton = false;
var nextButton = true;
var choice;
var tempChoice;

function preload() {
	dungeon = createImg("https://vignette.wikia.nocookie.net/nodiatis/images/f/fd/Dungeon_of_Ruin_Level_3-Main.jpg/revision/latest?cb=20130820074958");
	dungeon.hide();
	dungeonDemon = createImg("http://huffparanormal.com/wp-content/uploads/2016/03/demon_attack_horror_people_fire_fantasy_hd-wallpaper-1585418.jpg");
	dungeonDemon.hide();
	protagonist = createImg("https://vignette.wikia.nocookie.net/bogm/images/5/50/Daryl.jpg/revision/latest?cb=20170218045513");
	protagonist.hide();
	friend = createImg("https://i.pinimg.com/originals/0b/0a/eb/0b0aeb49ece03b22894635b636281e7c.jpg");
	friend.hide();
	darkDungeon = createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBRljgSnm-ZxSeZBGWF-6YcDf7SUW2eSIJQ_N6_I6uCv6JJUr");
	darkDungeon.hide();
	litDungeon = createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40ffYCkXA6AI93Z4LmS0nFXWN9wgWL8gCE_gk0usw4oFRtY3rLw");
	litDungeon.hide();
	prison = createImg("https://i.pinimg.com/originals/93/e6/2a/93e62afc0e9f51242e0a9c621912a4f0.jpg");
	prison.hide();
	women = createImg("https://i.pinimg.com/originals/9f/64/c3/9f64c33dd6947c4359cab871bd04adeb.jpg");
	women.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	switch (scene) {
		case 1:	Dungeon();
				Dailouge();
				next();
				nextButton = true;
				break;
		case 2:	Dungeon();
				Dailouge();
				next();
				break;
		case 3:	Dungeon();
				nextButton = false;
				choiceButton = true;
				Dailouge();
				ButtonChoices("It's Better we take the well lit Path", "I'm here to Prove myself, Chose the path of Darkness", "Chose the Path of Darkness (Cast a ligthing spell -2 Mana)");
				break;
		case 4:	if (choice == 1) {
					showLitDungeon();
					nextButton = true;
					choiceButton = false;
					Dailouge();
					next();
				}
				else
				if (choice == 2) {
					showDarkDungeon();
					if (confirm("You Have Died!! Press Ok To Start From Last Savepoint Or Cancel To Exit Game")) {
						DungeonDemon();
						location.reload();
					}
					else {
						window.close();
					}
				}
				else
				if (choice == 3) {
					showDarkDungeon();
					nextButton = true;
					choiceButton = false;
					Dailouge();
					next();
				}
		case 5:	if (choice == 1) {
					tempChoice = 1;
					showLitDungeon();
					nextButton = true;
					choiceButton = false;
					Dailouge();
					next();
				}
				else
				if (choice == 3) {
					tempChoice = 3;
					showDarkDungeon();
					nextButton = false;
					choiceButton = true;
					Dailouge();
					ButtonChoices("Turn around to take a look", "Cast a Freeze spell (-3 Mana), Turn around", "RUN!! YiGdrell, Run as fast as you can");
				}
				break;
		case 6:	if (choice == 1 && tempChoice == 1) {
					showLitDungeon();
					nextButton = false;
					choiceButton = true;
					Dailouge();
					ButtonChoices("Take a look inside the door", "Ignore", "Cast a Protection Spell (-1 Mana), Take a look");
				}
				else {
					showDarkDungeon();
					if (choice == 1) {
						if (confirm("You Have Died!! Press Ok To Start From Last Savepoint Or Cancel To Exit Game")) {
							DungeonDemon();
							location.reload();
						}
						else {
							window.close();
						}
					}
					else
					if (choice == 2) {
						nextButton = true;
						choiceButton = false;
						Dailouge();
						next();
					}
					else
					if (choice == 3) {
						nextButton = true;
						choiceButton = false;
						Dailouge();
						next();
					}
				}
				break;
		case 7: if (tempChoice == 1) {
					showLitDungeon();
					nextButton = true;
					choiceButton = false;
					Dailouge();
					next();
				}
				else {
					//code alternate scene
				}
				break;
	}
	displayStats();
}

function NarrationBox(Msg) {
	fill(255, 255, 255, 100);
	rect(0, 500, 1370, 665);
	fill(0, 0, 0, 150);
	textSize(25)
	text(Msg, 5, 500, 1370, 665)
}

function displayStats() {
	fill(255, 0, 0);
	stroke(2);
	textSize(30);
	text("HP : " + hp, 0, 10, 150, 60);
	text("Mana : " + mana, 0, 60, 150, 120);
	text("Morale : " + morale, 0, 120, 150, 180);
	text("Gold : " + gold, 0, 180, 200, 230);
}

function mouseClicked() {
	if (nextButton == true) {
		if ((mouseX >= 1250 && mouseX <= 1330) && (mouseY >= 605 && mouseY <= 640)) {
			scene++;
		}
	}
	else
	if (choiceButton == true) {
		if ((mouseX >= 40 && mouseX <= 410) && (mouseY >= 595 && mouseY <= 635)) {
			scene++;
			choice = 1;
		}
		else
		if ((mouseX >= 440 && mouseX <= 820) && (mouseY >= 595 && mouseY <= 635)) {
			scene++;
			choice = 2;
		}
		else
		if ((mouseX >= 840 && mouseX <= 1270) && (mouseY >= 595 && mouseY <= 635)) {
			scene++;
			choice = 3;
		}
	}
}

function next() {
	fill(255, 255, 255, 100);
	rect(1250, 600, 80, 40);
	fill(0, 0, 0, 150);
	textSize(25);
	text("Next", 1260, 605, 1330, 640);
}

function ButtonChoices(Msg1, Msg2, Msg3) {
	fill(255, 255, 255, 100);
	rect(40, 595, 370, 40);
	rect(440, 595, 380, 40);
	rect(840, 595, 430, 40);
	fill(0, 0, 0, 150);
	textSize(15);
	text(Msg1, 50, 605, 350, 640);
	text(Msg2, 450, 605, 750, 640);
	text(Msg3, 850, 605, 1150, 640);
}

function Dailouge() {
	let d;
	switch (scene) {
		case 1:	d = story.d1;
				NarrationBox(d);
				break;
		case 2:	Friend();
				d = story.d2;
				NarrationBox(d);
				break;
		case 3:	Protagonist();
				d = story.d3;
				NarrationBox(d);
				break;
		case 4: switch (choice) {
					case 1:	gold += 100;
							if (confirm("Safety First. You Have Been Rewarded With 100 Gold Coins, Make Sure To Use Them Efficiently")) {
								Friend();
								d = story.d4;
								NarrationBox(d);
							}
							break;
					case 3: mana -= 2;
						 	morale += 1;
							if (confirm("You Like To Take Risks Don't You. With Risk Comes Reward, Have Some Morale Boost. It Will Come Handy In Unclocking Some Locked Choices In Future")) {
								Friend();
								d = story.d5;
								NarrationBox(d);
							}
							break;
				}
				scene++;
				break;
		case 5:	switch (choice) {
					case 1:	Protagonist();
							d = story.d6;
							NarrationBox(d);
							break;
					case 3:	Protagonist();
							d = story.d7;
							NarrationBox(d);
							break;
				}
				break;
		case 6:	if (choice == 1 && tempChoice == 1) {
					Friend();
					d = story.d8;
					NarrationBox(d);
				}
				else {
					switch (choice) {
						case 2:	mana -= 3;
								DungeonDemon();
								d = story.d9;
								NarrationBox(d);
								break;
						case 3: hp -= 3;
								Protagonist();
								d = story.d10;
								NarrationBox(d);
								break;
					}
					scene++;
				}
				break;
		case 7:	if (tempChoice == 1) {
					switch (choice) {
						case 1:	Prison();
								Women();
								d = story.d11;
								NarrationBox(d);
								break;
						case 2:	Protagonist();
								d = story.d12;
								NarrationBox(d);
								break;
						case 3:	mana -= 1;
								Prison();
								Women();
								d = story.d11;
								NarrationBox(d);
								scene++;
								break;
					}
				}
				else {
					//code alternate scene
				}
				break;
	}
}

function DungeonDemon() {
	image(dungeonDemon,400, 0, 500, 500);
}

function Friend() {
	image(friend, 1100, 0, 300, 500);
}

function Protagonist() {
	image(protagonist, 1100, 0, 300, 500);
}

function Dungeon() {
	image(dungeon, 0, 0, 1370, 665);
}

function showDarkDungeon() {
	image(darkDungeon, 0, 0, 1370, 665);
}

function showLitDungeon() {
	image(litDungeon,  0, 0, 1370, 665);
}

function Women() {
	image(women, 1100, 0, 300, 500);
}

function Prison() {
	image(prison,  0, 0, 1370, 665);
}
