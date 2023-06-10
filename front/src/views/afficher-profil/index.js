import Header from '../home/header';
import Footer from '../home/footer';

export default () => (`
<header>
    ${Header()}
</header>
    <main>
        <div class="container.fluid">
        <div class="row">
            <div class="col-3">
                <img src="https://static.vecteezy.com/ti/vecteur-libre/t2/550980-utilisateur-icone-vecteur-gratuit-vectoriel.jpg" alt="Image utilisateur" class="imageprof">
                <div class = "name">
                    <strong>
                    Prénom Nom
                    </strong>
                </div>
                <div class="modifprof">
                    Modifier profil
                </div>
            </div>
            <div class="col-4">
                <div class ="border">
                    <div class = "infoperso">
                        <strong>
                            Informations personnelles
                        </strong>
                    </div>
                    <div class = prenom>
                        Prénom
                    </div>
                    <div class = nom>
                        Nom
                    </div>
                    <div class = email>
                        Email
                    </div>
                    <div class = description>
                        Description
                    </div>
                </div>
                <div class = "border">
                    <div class = "grou">
                        <strong>
                        Groupes
                        </strong>
                    </div>
                    <div class = "promo">
                        Promo
                    </div>
                    <div class = "classe">
                        Classe
                    </div>
                    <div class = "groupedetp">
                        Groupe de TP
                    </div>
                    <div class = association>
                        Associations
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
<footer>
    ${Footer()}
</footer>
`);
