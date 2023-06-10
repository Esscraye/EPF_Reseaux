import Header from '../home/header';
import Footer from '../home/footer';

export default () => (`
<header>
    ${Header()}
</header>
<h2>Ajouter un utilisateur</h2>
<div class="container text-center">
    <div class="row align-items-start">
    <div class="col">
        Informations personnelles
        <div class="mb-4">
        <label for="exampleFormControlInput1" class="form-label-1">Nom</label>
        <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="Saisir le nom">
        </div>         
        <div class="mb-4">
        <label for="exampleFormControlInput2" class="form-label-2">Prénom</label>
        <input type="email" class="form-control border-black" id="exampleFormControlInput2" placeholder=" Saisir le prénom">
        </div>         
        <div class="mb-4">
        <label for="exampleFormControlInput3" class="form-label-1">Email</label>
        <input type="email" class="form-control border-black" id="exampleFormControlInput3" placeholder="Saisir l'email">
        </div>
        <div class="mb-5">
        <label for="exampleFormControlInput4" class="form-label-4">Description</label>
        <input type="email" class="form-control border-black" id="exampleFormControlInput4" placeholder="Saisir la description">
        </div>
    </div>
    <div class="col">         
        <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Promo</label>
        <select class="form-select" id="inputGroupSelect01">
            <option selected>Sélectionner...</option>
            <option value="1">1A</option>
            <option value="2">2A</option>
            <option value="3">3A</option>
            <option value="4">4A</option>
            <option value="5">5A</option>
        </select>
        </div>         
        <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect02">Groupe de TD</label>
        <select class="form-select" id="inputGroupSelect02">
            <option selected>Sélectionner...</option>
            <option value="1">TD E</option>
            <option value="2">TD F</option>
            <option value="3">TD G</option>
            <option value="4">TD H</option>
            <option value="5">TD I</option>
            <option value="5">TD J</option>
        </select>
        </div>           
        <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect03">Groupe de TP</label>
        <select class="form-select" id="inputGroupSelect03">
            <option selected>Sélectionner...</option>
            <option value="1">TP AA</option>
            <option value="2">TP AB</option>
            <option value="3">TP BA</option>
            <option value="4">TP BB</option>
            <option value="5">TP CA</option>
            <option value="6">TP CB</option>
            <option value="7">TP DA</option>
            <option value="8">TP DB</option>
            
        </select>
        </div>
    </div>        
    <div class="Enregistrer">
        <button type="button" class="btn" >Ajouter</button>
    </div>
    </div>
</div>
<footer>
    ${Footer()}
</footer>
`);
