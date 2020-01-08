<template>
    <div class="cityArea"> 
        <div class="cityButton" @click="clickButton()" ref="btn">+86</div><i @click="clickButton()"></i>
        <div class="cityBody" ref="body">
            <div class="cityContent">
                <div class="title">Please select country and region<span class="closeBtn" @click="close()">X</span></div>
                <div class="countryBox">
                    <div id="HOT" class="countryTag">HOT</div>
                    <ul class="countryItems">
                        <li class="selected">
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+86</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China Hongkong</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+852</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China Taiwan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+886</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China Macao</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+853</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">America</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Korea</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+82</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Japan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+81</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Singapore</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+65</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Malaysia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+60</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaA" class="countryTag">A</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Angola</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+0244</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Afghanistan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+93</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Albania</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+335</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Algeria</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+213</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Andorra</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+376</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Anguilla</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1254</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Antigua and Barbuda</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1268</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Argentina</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+54</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Armenia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+374</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ascension</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+247</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Australia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+61</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Austria</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+43</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Azerbaijan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+994</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaB" class="countryTag">B</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Bahamas</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1242</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Bahrain</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+973</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Bangladesh</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+880</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Barbados</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1246</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Belarus</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+375</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Belgium</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+32</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Belize</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+501</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Benin</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+229</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Bermuda Is</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1441</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Bolivia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+591</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Botswana</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+267</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Brazil</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+55</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Brunei</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+673</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Bulgaria</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+359</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Burkina Faso</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+226</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Burma</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+95</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Burundi</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+257</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaC" class="countryTag">C</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Cameroon</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+237</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Canada</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Cayman Is</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1345</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Central African Republic</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+236</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Chad</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+235</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Chile</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+56</div>
                                </div>
                            </div>
                        </li>
                        <li class="selected">
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+86</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Colombia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+57</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Congo</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+242</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Cook Is</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+682</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Costa Rica</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+506</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Cuba</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+53</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Cyprus</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+357</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Czech Republic</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+420</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaD" class="countryTag">D</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Djibouti</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+253</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Dominica Rep</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1890</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaE" class="countryTag">E</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ecuador</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+593</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Egypt</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+20</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">EI Salvador</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+503</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Estonia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+372</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ethiopia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+251</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaF" class="countryTag">F</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Fiji</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+679</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Finland</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+358</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">France</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+33</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">French Guiana</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+594</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">French Polynesia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+689</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaG" class="countryTag">G</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Gabon</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+241</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Gambia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+220</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Georgia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+995</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Germany</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+49</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ghana</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+233</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Gibraltar</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+350</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Greece</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+30</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Grenada</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1809</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Guam</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1671</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Guatemala</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+502</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Guinea</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+224</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Guyana</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+592</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaH" class="countryTag">H</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Haiti</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+509</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Honduras</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+504</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China Hongkong</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+852</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Hungary</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+36</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaI" class="countryTag">I</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Iceland</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+354</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">India</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+91</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Indonesia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+62</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Iran</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+98</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Iraq</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+964</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ireland</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+353</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Israel</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+972</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Italy</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+39</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ivory Coast</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+225</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaJ" class="countryTag">J</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Jamaica</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1876</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Japan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+81</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Jordan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+962</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaK" class="countryTag">K</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Kampuchea (Cambodia )</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+855</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Kazakstan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+327</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Kenya</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+254</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Korea</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+82</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Kuwait</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+965</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Kyrgyzstan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+331</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaL" class="countryTag">L</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Laos</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+856</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Latvia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+371</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Lebanon</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+961</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Lesotho</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+266</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Liberia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+231</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Libya</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+218</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Liechtenstein</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+423</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Lithuania</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+370</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Luxembourg</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+352</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaM" class="countryTag">M</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China Macao</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+853</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Madagascar</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+261</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Malawi</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+265</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Malaysia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+60</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Maldives</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+960</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Mali</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+223</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Malta</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+356</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Mariana Is</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1670</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Martinique</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+596</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Mauritius</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+230</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Mexico</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+52</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Moldova</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+373</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Monaco</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+377</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Mongolia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+976</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Montserrat Is</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1664</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Morocco</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+212</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Mozambique</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+258</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaN" class="countryTag">N</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Namibia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+264</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Nauru</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+674</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Nepal</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+977</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Netheriands Antilles</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+599</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Netherlands</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+31</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">New Zealand</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+64</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Nicaragua</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+505</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Niger</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+227</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Nigeria</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+234</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">North Korea</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+850</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Norway</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+47</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaO" class="countryTag">O</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Oman</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+968</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaP" class="countryTag">P</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Pakistan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+92</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Panama</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+507</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Papua New Cuinea</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+675</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Paraguay</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+51</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Philippines</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+63</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Poland</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+48</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Portugal</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+351</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Puerto Rico</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1787</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaQ" class="countryTag">Q</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Qatar</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+974</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaR" class="countryTag">R</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Reunion</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+262</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Romania</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+40</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Russia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+7</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaS" class="countryTag">S</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Saint Lueia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1758</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Saint Vincent</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1784</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Samoa Eastern</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+684</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Samoa Western</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+685</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">San Marino</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+378</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Sao Tome and Principe</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+239</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Saudi Arabia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+966</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Senegal</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+221</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Seychelles</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+248</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Sierra Leone</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+232</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Singapore</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+65</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Slovakia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+421</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Slovenia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+386</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Solomon Is</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+677</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Somali</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+252</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">South Africa</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+27</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Spain</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+34</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">SriLanka</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+94</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">St.Lucia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1758</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">St.Vincent</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1784</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Sudan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+249</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Suriname</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+597</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Swaziland</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+268</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Sweden</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+46</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Switzerland</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+41</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Syria</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+963</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaT" class="countryTag">T</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">China Taiwan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+886</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Tajikstan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+992</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Tanzania</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+255</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Thailand</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+66</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Togo</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+228</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Tonga</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+676</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Trinidad and Tobago</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1809</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Tunisia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+216</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Turkmenistan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+993</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Turh3</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+90</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Turkmenistan</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+690</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaU" class="countryTag">U</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Uganda</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+256</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Ukraine</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+380</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">United Arab Emirates</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+971</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">United Kiongdom</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+44</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">United States of America</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Uruguay</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+598</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Uruguay</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+233</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaV" class="countryTag">V</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Venezuela</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+58</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Vietnam</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+84</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaY" class="countryTag">Y</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Yemen</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+967</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Yugoslavia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+381</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaZ" class="countryTag">Z</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Zimbabwe</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+263</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Zaire</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+243</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">Zambia</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+260</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="countryTags">
                    <div class="tag"><a href="#HOT">HOT</a>
                    </div>
                    <div class="tag"><a href="#areaA">A</a>
                    </div>
                    <div class="tag"><a href="#areaB">B</a>
                    </div>
                    <div class="tag"><a href="#areaC">C</a>
                    </div>
                    <div class="tag"><a href="#areaD">D</a>
                    </div>
                    <div class="tag"><a href="#areaE">E</a>
                    </div>
                    <div class="tag"><a href="#areaF">F</a>
                    </div>
                    <div class="tag"><a href="#areaG">G</a>
                    </div>
                    <div class="tag"><a href="#areaH">H</a>
                    </div>
                    <div class="tag"><a href="#areaI">I</a>
                    </div>
                    <div class="tag"><a href="#areaJ">J</a>
                    </div>
                    <div class="tag"><a href="#areaK">K</a>
                    </div>
                    <div class="tag"><a href="#areaL">L</a>
                    </div>
                    <div class="tag"><a href="#areaM">M</a>
                    </div>
                    <div class="tag"><a href="#areaN">N</a>
                    </div>
                    <div class="tag"><a href="#areaO">O</a>
                    </div>
                    <div class="tag"><a href="#areaP">P</a>
                    </div>
                    <div class="tag"><a href="#areaQ">Q</a>
                    </div>
                    <div class="tag"><a href="#areaR">R</a>
                    </div>
                    <div class="tag"><a href="#areaS">S</a>
                    </div>
                    <div class="tag"><a href="#areaT">T</a>
                    </div>
                    <div class="tag"><a href="#areaU">U</a>
                    </div>
                    <div class="tag"><a href="#areaV">V</a>
                    </div>
                    <div class="tag"><a href="#areaY">Y</a>
                    </div>
                    <div class="tag"><a href="#areaZ">Z</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enMobileCityArea',
    methods:{
        clickButton: function(){
            this.$refs.body.style.display = "block";
        }, 
        clickCountry: function(item){
            this.$refs.body.style.display = "none";
            this.$refs.btn.innerHTML = item.currentTarget.childNodes[2].childNodes[0].innerHTML;
        },
        close: function(){
            this.$refs.body.style.display = "none";
        }
    }
}
</script>

<style scoped>
    @import "../style/cityArea/mobileCityArea.css";
</style>