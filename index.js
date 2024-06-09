let nomePersonagem = "Tunzera"
let levelExperiencia = 11200
let tier
switch(true){
	case (levelExperiencia) <=1000:
    tier = "ferro";
    break;
	case (levelExperiencia) >1000 && (levelExperiencia)<=2000:
	tier = "Bronze";
	break;
	case (levelExperiencia) >2000 && (levelExperiencia)<=5000:
	tier = "Prata";
	break;
	case (levelExperiencia) >5000 && (levelExperiencia)<=7000:
	tier = "Ouro";
	break;
	case (levelExperiencia) >7000 && (levelExperiencia)<=8000:
	tier = "Platina";
	break;
	case (levelExperiencia) >8000 && (levelExperiencia)<=9000:
	tier = "Ascendente";
	break;
	case (levelExperiencia) >9000 && (levelExperiencia)<=10000:
	tier = "Imortal";
	break;
	case (levelExperiencia) >10000:
	tier = "Radiante";
	break;
}
console.log ("O héroi "+nomePersonagem+" está no tier "+tier+" com XP: "+levelExperiencia)