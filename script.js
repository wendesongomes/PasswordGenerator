/* RANGER */

const $rangeColor = `#aafcb4`;
const $range = document.getElementById('rangeID');
const $lenghtID = document.getElementById('lenghtID');

const $currentValue = (($range.value - $range.min) / ($range.max - $range.min)) * $range.max;

const updateBackgroundColor = (value, color) => {
    $range.style.setProperty(
        `background`,
        `linear-gradient(to right, ${color} 0%, ${color} ${value}%, 
            #08070c ${value}%, 
            #08070c 100%)`,
    );
};

updateBackgroundColor($currentValue, $rangeColor);

$range.addEventListener('input', function(){
    const $updatedValue = ((this.value - this.min) / (this.max - this.min)) * this.max * 5;

    updateBackgroundColor($updatedValue, $rangeColor);
})

$lenghtID.innerText = $range.value;
$range.oninput = function(){
    $lenghtID.innerHTML = this.value;
}


/* COPY */

const $contentConfirm = document.getElementById('contentInfo');
const $confirmText = document.getElementById('confirm');

const copyID = document.getElementById('copy');

function copy(){
    navigator.clipboard.writeText(passwordOutput.innerText);

    $contentConfirm.style = 'top: 30px';
    $confirmText.innerHTML = "successfully copied";
    setTimeout(() => {
        $contentConfirm.style = 'top: -50px';
    }, 5 * 1000);
}

/* PASSWORD GENERATOR */

const $passwordOutput = document.getElementById('passwordOutput');
const $button = document.getElementById('generate');

const $uppercaseID = document.getElementById('uppercaseID');
const $LowercaseID = document.getElementById('LowercaseID');
const $NumbersID = document.getElementById('NumbersID');
const $SymbolsID = document.getElementById('SymbolsID');

function randomPassowrd(lenght){

    var result = '';
    var $lowercase = 'abcdefghijklmnopqrstuvwxyz'
    var $uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var $symbols = '@#$&'
    var $numbers = '1234567890' 
    var $password = '';  

    if($uppercaseID.checked == true){$password += $uppercase;}
    if($LowercaseID.checked == true){$password += $lowercase;}
    if($NumbersID.checked == true){$password += $numbers;}
    if($SymbolsID.checked == true){$password += $symbols;}

    for( var i = 0; i < lenght; i++){
        result += $password.charAt(Math.floor(Math.random() * $password.length));
    }
    return result;
}

$button.addEventListener('click', function(){
    if($uppercaseID.checked || $LowercaseID.checked || $NumbersID.checked || $SymbolsID.checked == true){
        $passwordOutput.innerHTML = randomPassowrd($range.value);
        $passwordOutput.style = 'color: white';
    
        const $labelOne = document.getElementById('labelOne');
        const $labelTwo = document.getElementById('labelTwo');
        const $labelThree = document.getElementById('labelThree');
        const $labelFour = document.getElementById('labelFour');
    
        const $strengthText = document.getElementById('strengthText');

        let security = 0;

        if($uppercaseID.checked == true){security++;}
        if($LowercaseID.checked == true){security++;}
        if($NumbersID.checked == true){security++;}
        if($SymbolsID.checked == true){security++;}
        if($range.value <= 7){security--; security--;}
        console.log(security);

        $labelOne.style = 'background-color: none';
        $labelTwo.style = 'background-color: none';
        $labelThree.style = 'background-color: none';
        $labelFour.style = 'background-color: none';

        if(security <= 1){
            $labelOne.style = 'background-color: #f66666';
            $strengthText.innerHTML = "SMALL";
        }

        if(security == 2){
            $labelOne.style = 'background-color: #f6cc66';
            $labelTwo.style = 'background-color: #f6cc66';
            $strengthText.innerHTML = "MEDIUM";
        }

        if(security == 3){
            $labelOne.style = 'background-color: #f6cc66';
            $labelTwo.style = 'background-color: #f6cc66';
            $labelThree.style = 'background-color: #f6cc66';
            $strengthText.innerHTML = "MEDIUM";
        }

        if(security == 4){
            $labelOne.style = 'background-color: #93da9b';
            $labelTwo.style = 'background-color: #93da9b';
            $labelThree.style = 'background-color: #93da9b';
            $labelFour.style = 'background-color: #93da9b';
            $strengthText.innerHTML = "STRONG";
        }
    

        $contentConfirm.style = 'top: 30px';
        $confirmText.innerHTML = "Password Generated Successfully.";
        setTimeout(() => {
            $contentConfirm.style = 'top: -50px';
        }, 5 * 1000);
    } else {
        $contentConfirm.style = 'top: 30px';
        $confirmText.innerHTML = "Please select an option.";
        setTimeout(() => {
            $contentConfirm.style = 'top: -50px';
        }, 5 * 1000);
    }
})
