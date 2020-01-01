const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	

	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');
		
		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
		
	});

}

navSlide();

var state = "intro";
var pic = document.getElementById('pigimg');
var ptext1 = document.getElementById('ptext1');
var ptext2 = document.getElementById('ptext2');
var ptext3 = document.getElementById('ptext3');
var ptext4 = document.getElementById('ptext4');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
		
    function intro() {
        ptext1.innerHTML = "Click the start button to begin!";
        b1.innerHTML = "Start!";
        b1.style.display = "block";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/pig.jpg";
    }
		
    function storyintro() {
        ptext1.innerHTML = " --==--  Potato Quest  --==-- ";
        ptext2.innerHTML = "Once upon a time, in the year 1521, a daunting and merciless witch kidnapped a greedy, foolish king. The witch is holding him hostage because she wanted to cause mayhem within the village.";
        ptext3.innerHTML = "As the villagers are alerted, they start hanging up ransom papers to save the king from the witch’s brewery.";
        ptext4.innerHTML = "But little did the witch know almost no one was going to save him, however, you, an uneducated potato merchant, will contemplate the decision of whether or not you want to rescue the king.";
        b1.innerHTML = "Yes";
        b1.style.display = "block";
        b2.innerHTML = "No";
        b2.style.display = "block";
        b3.style.display = "none";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/potato.png";
    }
		
    function storyend() {
        ptext1.innerHTML = "Due to your stuborness, you have caused the king to die and your story ends here.";
        ptext2.style.display = "none";
        ptext3.style.display = "none";
        ptext4.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";
        b3.innerHTML = "Respawn";
        b3.style.display = "block";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/gameover.png";
    }
		
    function saveking() {
        ptext1.innerHTML = "Your bravery has summoned you, and lead you to accept this quest. As a poor merchant, the ransom can turn your life around.";
        ptext2.innerHTML = "During your voyage, you encounter a mysterious man with amputated arms and legs. He notices you are defenseless, so he provides you with a free weapon from medieval times that he used during the Salem Witch Trials.";
        ptext3.innerHTML = "The mysterious man presents three tacticle weapons, which do you choose?";
        ptext4.style.display = "none";
        b1.innerHTML = "An AK-47";
        b1.style.display = "block";
        b2.innerHTML = "A moldy spoon";
        b2.style.display = "block";
        b3.innerHTML = "A 50 pound sword";
        b3.style.display = "block";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/warrior.png";
    }
		
    function adventurestart() {
        ptext1.innerHTML = "During your adventure, you encounter a knight suited with wooden armor and a bucket on his head idling with no sense of direction. 'Who are you?', You ask. 'What is your purpose here?'";
        ptext2.innerHTML = "The knight responds with an ego, 'I am the Witch's knight, I protect the Witch's castle.'";
        ptext3.innerHTML = "You brainstorm for a few seconds and come up with three ideas,";
        ptext4.style.display = "none";
        b1.innerHTML = "Kill the knight";
        b1.style.display = "block";
        b2.innerHTML = "Ignore the knight";
        b2.style.display = "block";
        b3.innerHTML = "Ask the knight to join your squad";
        b3.style.display = "block";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/knight.png";
    }
		
    function killknight() {
        ptext1.innerHTML = "As a master in stealthy combat, you catch the knight offguard and kill him in a street fight.";
        ptext2.innerHTML = "Then you proceed to steal his key and continue your adventure to find the Witch's castle.";
        ptext3.style.display = "none";
        ptext4.style.display = "none";
        b1.innerHTML = "Continue";
        b1.style.display = "block";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/deadknight.png";
    }
		
    function ignoreknight() {
        ptext1.innerHTML = "You decide to ignore the knight and wait for him to fall asleep so you can steal his key to the witch's castle.";
        ptext2.style.display = "none";
        ptext3.style.display = "none";
        ptext4.style.display = "none";
        b1.innerHTML = "Continue";
        b1.style.display = "block";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/ignoreknight.png";
    }
		
    function teamknight() {
        ptext1.innerHTML = "The foolish knight gratefully accepts your offer and begins to adventure with you.";
        ptext2.innerHTML = "Persuaded easily, you convince him into handing you the key to the witch's castle for safekeeping.";
        ptext3.style.display = "none";
        ptext4.style.display = "none";
        b1.innerHTML = "Continue";
        b1.style.display = "block";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        pic.src = "C:/Users/Adrian/Desktop/portfolio/images/fictionstoryimages/teamknight.png";
    }
		
    function killknightcontinued() {
        ptext1.innerHTML = "";
        ptext2.innerHTML = "";
        ptext3.style.display = "none";
        ptext4.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
    }
		
    function ignoreknightcontinued() {
        ptext1.innerHTML = "Upon arrival at the castle, you encounter the knight from the forest";
        ptext2.innerHTML = "The witch is informed of your malicious intents and decides to upgrade the knights' armor to diamond armor.";
        ptext3.innerHTML = "He declares, 'You have stolen my key, and I will now fight you!'";
        ptext4.innerHTML = "You think up of two ideas.";
        b1.innerHTML = "Use the key to kill him";
        b1.style.display = "block";
        b2.innerHTML = "Use your weapon to kill him.";
        b2.style.display = "block";
        b3.style.display = "none";
        b4.style.display = "none";
    }
		
    function teamknightcontinued() {
        ptext1.innerHTML = "";
        ptext2.innerHTML = "";
        ptext3.style.display = "none";
        ptext4.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
    }
		
    function bclick(button) {
        if (state == "intro") {
            if (button == 1) {
                state = "storyintro";
                storyintro();
            }
        }
        else if (state == "storyintro") {
            if (button == 1) {
                state = "saveking";
                saveking();
            }
            else if (button == 2) {
                state = "storyend";
                storyend();
            }
        }
        else if (state == "storyend") {
            if (button == 3) {
                state = "intro";
                intro();
            }
        }
        else if (state == "saveking") {
            if (button == 1) {
                state = "adventurestart";
                adventurestart();
            }
            else if (button == 2) {
                state = "adventurestart";
                adventurestart();
            }
            else if (button == 3) {
                state = "adventurestart";
                adventurestart();
            }
        }
        else if (state == "adventurestart") {
            if (button == 1) {
                state = "killknight";
                killknight();
            }
            else if (button == 2) {
                state = "ignoreknight";
                ignoreknight();
            }
            else if (button == 3) {
                state = "teamkngiht";
                teamknight();
            }
        }
        else if (state == "killknight") {
            if (button == 1) {
                killknightcontinued();
            }
        }
        else if (state == "ignoreknight") {
            if (button == 1) {
                ignoreknightcontinued();
            }
        }
        else if (state == "teamknight") {
            if (button == 1) {
                teamknightcontinued();
            }
        }
    }
		
intro();