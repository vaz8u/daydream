class Projet{
    constructor(nom, progressionTotale, boite1, boite2, boite3, boite4, boite5){
        this.nom = nom;
        this.progressionTotale = progressionTotale;
        this.boite1 = boite1;
        this.boite2 = boite2;
        this.boite3 = boite3;
        this.boite4 = boite4;
        this.boite5 = boite5;
    }

    toJSON(){
        return {
            nom: this.nom,
            progressionTotale: this.progressionTotale,
            boite1: this.boite1.toJSON(),
            boite2: this.boite2.toJSON(),
            boite3: this.boite3.toJSON(),
            boite4: this.boite4.toJSON(),
            boite5: this.boite5.toJSON()
        };
    }

    calculProgressionTotale(){
        this.progressionTotale = (this.boite1.progression + this.boite2.progression + this.boite3.progression + this.boite4.progression + this.boite5.progression) / 5;
    }


    getProgressionTotale(){
        return this.progressionTotale;
    }
    getBoite1(){
        return this.boite1;
    }
    getBoite2(){
        return this.boite2;
    }
    getBoite3(){
        return this.boite3;
    }
    getBoite4(){
        return this.boite4;
    }
    getBoite5(){
        return this.boite5;
    }
    getNom(){
        return this.nom;
    }
    setProgressionTotale(progression){
        this.progressionTotale = progression;
    }

    setBoite1(boite){
        this.boite1 = boite;
    }
    setBoite2(boite){
        this.boite2 = boite;
    }
    setBoite3(boite){
        this.boite3 = boite;
    }
    setBoite4(boite){
        this.boite4 = boite;
    }
    setBoite5(boite){
        this.boite5 = boite;
    }
    setNom(nom){
        this.nom = nom;
    }
}

class Boite{
    constructor(progression, wo, fc, dr, ma){
        this.progression = progression;
        this.wo = wo;
        this.fc = fc;
        this.dr = dr;
        this.ma = ma;
    }

    toJSON(){
        return {
            progression: this.progression,
            wo: this.wo,
            fc: this.fc,
            dr: this.dr,
            ma: this.ma
        };
    }
}