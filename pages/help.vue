<template>
    <div class="row h-100 px-0 px-sm-0">
        <div class="col-xl-6 pt-3 pb-2 d-flex flex-column justify-content-between">
            <div class="callout data-list">
                <div class="row">
                    <div class="col simple-posts-title d-flex justify-content-center">
                        DANE PODSTAWOWE BIULETYNU
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item pb-0"> Urząd Miasta Myszkowa</li>
                            <li class="list-group-item pb-0"> ul. Kościuszki 26</li>
                            <li class="list-group-item pb-0">42-300 Myszków</li>
                            <li class="list-group-item pb-0">tel. centrala (34) 313 26 82</li>
                            <li class="list-group-item pb-0">fax +48 34 313-50-29</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item pb-0">NIP: 577-19-52-646</li>
                            <li class="list-group-item pb-0">REGON: 151398497</li>
                            <li class="list-group-item pb-0">Nr konta: PKO Bank Polski S.A. 37 1020 2313 0000 3202 0586
                                8403
                            </li>
                            <li class="list-group-item pb-0">Numer konta opłata skarbowa: PKO Bank Polski SA 32 1020 2313
                                0000 3102 0643 1433
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col simple-posts-title d-flex justify-content-center">
                        GODZINY OTWARCIA
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item pb-0">Godziny pracy urzędu</li>
                            <li class="list-group-item pb-0"> poniedziałek: 7.30 - 15.30</li>
                            <li class="list-group-item pb-0"> wtorek: 9:45 - 16:30</li>
                            <li class="list-group-item pb-0"> środa: 7:45 - 14:30</li>
                            <li class="list-group-item pb-0"> czwartek: 7:45 - 14:30</li>
                            <li class="list-group-item pb-0"> piątek: 7:45 - 12:30</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item pb-0">Godziny otwarcia kasy</li>
                            <li class="list-group-item pb-0"> poniedziałek: 7.30 - 15.30</li>
                            <li class="list-group-item pb-0"> wtorek: 9:45 - 16:30</li>
                            <li class="list-group-item pb-0"> środa: 7:45 - 14:30</li>
                            <li class="list-group-item pb-0"> czwartek: 7:45 - 14:30</li>
                            <li class="list-group-item pb-0"> piątek: 7:45 - 12:30</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="map-border-radius">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13823.792728545846!2d21.00694296712374!3d52.23022484780158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1642874371615!5m2!1spl!2spl"
                        width="100%" height="430" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <SidebarRight :posts="posts" class="col-12 col-xl-6 mt-3 mt-xl-0 ls"/>
    </div>
</template>
<style scoped>
.data-list .list-group-item {
    background-color: transparent;
    border: none;
}
.map-border-radius iframe{
    border-radius: 3px 24px 24px 3px;
}
.simple-posts-title {
    color: red;
    font-weight: bolder;
}
</style>