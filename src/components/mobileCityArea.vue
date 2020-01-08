<template>
    <div class="cityArea"> 
        <div @click="clickButton()"><div class="cityButton" ref="btn">+86</div><i></i></div>
        <div class="cityBody" ref="body">
            <div class="cityContent">
                <div class="title">请选择国家和地区<span class="closeBtn" @click="close()">X</span></div>
                <div class="countryBox">
                    <div id="HOT" class="countryTag">热门</div>
                    <ul class="countryItems">
                        <li class="selected">
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+86</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国香港特别行政区</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+852</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国台湾</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+886</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国澳门特别行政区</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+853</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">美国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">韩国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+82</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">日本</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+81</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">新加坡</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+65</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马来西亚</div>
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
                                    <div class="area">阿尔巴尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+355</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿尔及利亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+213</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿富汗</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+93</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿根廷</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+54</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">爱尔兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+353</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">埃及</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+20</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">埃塞俄比亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+372</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">爱沙尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+372</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿拉伯联合酋长国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+971</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿鲁巴</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+297</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿曼</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+968</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">安道尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+376</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">安哥拉</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+244</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">安圭拉</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1264</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿提瓜和巴布达</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1268</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">澳大利亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+61</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">奥地利</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+43</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">阿塞拜疆</div>
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
                                    <div class="area">巴巴多斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1246</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴布亚新几内亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+675</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴哈马</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1242</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">白俄罗斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+375</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">百慕大</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1441</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴基斯坦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+92</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴拉圭</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+595</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴林</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+973</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴拿马</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+507</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">保加利亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+359</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">巴西</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+55</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">北马里亚纳群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1670</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">贝宁</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+229</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">比利时</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+32</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">冰岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+354</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">博茨瓦纳</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+267</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">波多黎各</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1787</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">波兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+48</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">玻利维亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+591</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">伯利兹</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+501</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">波斯尼亚和黑塞哥维那</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+387</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">不丹</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+975</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">布基纳法索</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+226</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">布隆迪</div>
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
                                    <div class="area">朝鲜</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+850</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">赤道几内亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+240</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaD" class="countryTag">D</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">丹麦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+45</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">德国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+49</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">东帝汶</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+670</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">多哥</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+228</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">多尼米加共和国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1809</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">多米尼克</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1767</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaE" class="countryTag">E</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">厄瓜多尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+593</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">厄立特里亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+291</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">俄罗斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+7</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaF" class="countryTag">F</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">法国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+33</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">法罗群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+298</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">梵蒂冈</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+379</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">法属波利尼西亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+689</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">法属圣马丁</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1599</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">斐济</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+679</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">菲律宾</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+63</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">芬兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+358</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">佛得角</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+238</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">福克兰群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+500</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaG" class="countryTag">G</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">冈比亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+220</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">刚果（布）</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+242</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">刚果（金）</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+243</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">格陵兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+299</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">格林纳达</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1473</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">格鲁吉亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+995</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">哥伦比亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+57</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">哥斯达黎加</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+506</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">关岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1671</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">古巴</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+53</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圭亚那</div>
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
                                    <div class="area">海地</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+509</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">韩国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+82</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">哈萨克斯坦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+7</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">黑山</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+382</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">荷兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+31</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">荷属安地列斯群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+599</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">洪都拉斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+504</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaJ" class="countryTag">J</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">加纳</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+233</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">加拿大</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">柬埔寨</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+855</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">加蓬</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+241</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">吉布提</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+253</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">捷克共和国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+420</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">吉尔吉斯斯坦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+996</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">基里巴斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+686</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">津巴布韦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+263</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">几内亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+224</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">几内亚比绍</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+245</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaK" class="countryTag">K</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">开曼群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1345</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">喀麦隆</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+237</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">卡塔尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+974</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">科科斯（基林）群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+61</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">克罗地亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+385</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">科摩罗</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+269</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">肯尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+254</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">科特迪瓦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+225</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">科威特</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+965</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">库克群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+682</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaL" class="countryTag">L</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">莱索托</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+266</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">老挝</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+856</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">拉脱维亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+371</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">黎巴嫩</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+961</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">利比里亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+231</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">利比亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+218</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">列支敦士登</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+423</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">立陶宛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+370</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">罗马尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+40</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">卢森堡</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+352</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">卢旺达</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+250</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaM" class="countryTag">M</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马达加斯加</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+261</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马尔代夫</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+960</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马耳他</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+356</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马来西亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+60</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马拉维</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+265</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马里</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+223</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">曼岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+44</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">毛里求斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+230</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">毛里塔尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+222</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马其顿</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+389</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马绍尔群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+692</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">马约特</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+262</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">美国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">美属萨摩亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1684</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">美属维京群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1340</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">蒙古</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+976</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">孟加拉国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+880</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">蒙特塞拉特</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1664</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">缅甸</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+95</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">密克罗尼西亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+691</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">秘鲁</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+51</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">摩尔多瓦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+373</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">摩洛哥</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+212</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">摩纳哥</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+377</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">莫桑比克</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+258</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">墨西哥</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+52</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaN" class="countryTag">N</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">纳米比亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+264</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">南非</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+27</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">南极洲</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+672</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">瑙鲁</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+674</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">尼泊尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+977</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">尼加拉瓜</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+505</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">尼日尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+227</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">尼日利亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+234</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">纽埃</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+683</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">挪威</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+47</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaP" class="countryTag">P</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">帕劳</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+680</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">皮特凯恩群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+870</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">葡萄牙</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+351</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaR" class="countryTag">R</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">日本</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+81</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">瑞典</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+46</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">瑞士</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+41</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaS" class="countryTag">S</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">萨尔瓦多</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+503</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">塞尔维亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+381</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">塞拉利昂</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+232</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">塞内加尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+221</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">塞浦路斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+357</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">塞舌尔</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+248</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">萨摩亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+685</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">沙特阿拉伯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+966</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣巴泰勒米</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+590</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣诞岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+61</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣多美和普林西比</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+239</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣赫勒拿</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+290</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣基茨和尼维斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1869</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣卢西亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1758</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣马力诺</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+378</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣皮埃尔和密克隆群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+508</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">圣文森特和格林纳丁斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1784</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">斯里兰卡</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+94</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">斯洛伐克</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+421</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">斯洛文尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+386</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">斯威士兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+268</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">苏丹</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+249</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">苏里南</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+597</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">所罗门群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+677</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">索马里</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+252</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaT" class="countryTag">T</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">泰国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+66</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">塔吉克斯坦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+992</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">汤加</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+676</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">坦桑尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+255</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">特克斯和凯科斯群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1649</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">特立尼达和多巴哥</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1868</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">土耳其</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+90</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">土库曼斯坦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+993</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">突尼斯</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+216</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">托克劳</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+690</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">图瓦卢</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+688</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaW" class="countryTag">W</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">瓦利斯和富图纳</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+681</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">瓦努阿图</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+678</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">危地马拉</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+502</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">委内瑞拉</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+58</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">文莱</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+673</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">乌干达</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+256</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">乌克兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+380</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">乌拉圭</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+598</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">乌兹别克斯坦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+998</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaX" class="countryTag">X</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">西班牙</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+34</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">希腊</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+30</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">新加坡</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+65</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">新喀里多尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+687</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">新西兰</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+64</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">匈牙利</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+36</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">叙利亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+963</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaY" class="countryTag">Y</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">牙买加</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1876</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">亚美尼亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+374</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">也门</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+967</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">意大利</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+39</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">伊拉克</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+964</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">伊朗</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+98</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">印度</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+91</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">印度尼西亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+62</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">英国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+44</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">英属维京群岛</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+1284</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">以色列</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+972</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">约旦</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+962</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">越南</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+84</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="areaZ" class="countryTag">Z</div>
                    <ul class="countryItems">
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">赞比亚</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+260</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">乍得</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+235</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">直布罗陀</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+350</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">智利</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+56</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中非共和国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+236</div>
                                </div>
                            </div>
                        </li>
                        <li class="selected">
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+86</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国澳门特别行政区</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+853</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国台湾</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+886</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="country" @click="clickCountry($event)">
                                <div class="countryName">
                                    <div class="area">中国香港特别行政区</div>
                                </div>
                                <div class="countryCode">
                                    <div class="areacode">+852</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="countryTags">
                    <div class="tag"><a href="#HOT">热</a>
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
                    <div class="tag"><a href="#areaP">P</a>
                    </div>
                    <div class="tag"><a href="#areaR">R</a>
                    </div>
                    <div class="tag"><a href="#areaS">S</a>
                    </div>
                    <div class="tag"><a href="#areaT">T</a>
                    </div>
                    <div class="tag"><a href="#areaW">W</a>
                    </div>
                    <div class="tag"><a href="#areaX">X</a>
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
    name: 'mobileCityArea',
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