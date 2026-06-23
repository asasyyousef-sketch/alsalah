let time = new Date();
let textTime =`${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()}`
let setting = {
    Contry : "Iraq",
    iso : "IQ",
    city : "Mosul",
    location : "36.335,43.11889",
    selectedMethod : "3",
    fgr_dgr : 0,
    shr_dgr : -3,
    dhr_dgr : 5,
    asr_dgr : 3,
    // selectedContryInfo : "AF",
    mgr_dgr : 5,
    ash_dgr : 0,
    lat : "36.335",
    lng : "43.11889"
};


loadSavedValues();
getAllInfo()
.then(res => {
    console.log(res.timings);
    
    buldHomePage(res)
})
function buldHomePage(res){
    document.body.innerHTML = '<div class="content"></div>'
    document.querySelector(".content").innerHTML +=`
        <div class="header"></div>
        <div class="container"></div>
        `
    document.querySelector(".header").innerHTML +=`
        <div class="setting"><img src="Imeges/settings.png" alt=""></div>
        <div class="title">
            <h1>مواقيت الصلاة</h1>
            <span class="addres">${setting. city}, ${setting.Contry}</span>
        </div>
        `
    document.querySelector(".container").innerHTML +=`
            <div class="mid-info">
                <div class="next"><h2>الصلاة القادمة : الفجر</h2></div>
                <div class="almutabaqi">
                    <div class="oclock">03:51</div>
                    <div class="text-m">المتبقي ساعتان و 45 دقيقة</div>
                </div>
                <div class="date"><div class="miladi">2026 مايو 6</div> - <div class="hjri">1543 شوال 19</div></div>
            </div>
            <div class="salawat">
                <div class="sla" id="fajer">
                    <h3>الفجر</h3>
                    <div class="saaaa">${timeTOsimple(res.timings.Fajr)}</div>
                </div>
                <div class="sla" id="shroq">
                    <h3>الشروق</h3>
                    <div class="saaaa">${timeTOsimple(res.timings.Sunrise)}</div>
                </div>
                <div class="sla" id="dhr">
                    <h3>الظهر</h3>
                    <div class="saaaa">${timeTOsimple(res.timings.Dhuhr)}</div>
                </div>
                <div class="sla" id="asser">
                    <h3>العصر</h3>
                    <div class="saaaa">${timeTOsimple(res.timings.Asr)}</div>
                </div>
                <div class="sla selected" id="magreb">
                    <h3>المغرب</h3>
                    <div class="saaaa">${timeTOsimple(res.timings.Maghrib)}</div>
                </div>
                <div class="sla" id="esha">
                    <h3>العشاء</h3>
                    <div class="saaaa">${timeTOsimple(res.timings.Isha)}</div>
                </div>
            </div>
        `
        document.querySelector(".setting").addEventListener("click", function () {
            buldSettingPage()
        })
}
function buldSettingPage(){
    document.body.innerHTML = '<div class="content-s"></div>';

    document.querySelector(".content-s").innerHTML +=`
        <div class="header"></div>
        <div class="container"></div>
        `
    ;
    document.querySelector(".header").innerHTML += `
        <div class="home"><img src="Imeges/previous.png" alt=""></div>
        <div class="title">
            <h1>اعدادات مواقيت الصلاة</h1>
            <span class="addres">البلد والطريقة والتعديل</span>
        </div>
    `
    document.querySelector(".container").innerHTML += `
        <div class="box-setting x1">
            <div class="head-box">
                <div class="Imege"><img src="Imeges/maps-and-flags.png" alt=""></div>
                <h4>تحديد الموقع</h4>
            </div>
            <div class="body-box b1">
                <select name="" id="contry">
                    <option value="0">-- اختر بلد --</option>
                </select>
                <select name="" id="city">
                    <option value="0">-- اختر مدينة --</option>
                </select>
            </div>
        </div>

        <div class="box-setting x2">
            <div class="head-box">
                <div class="Imege"><img src="Imeges/methodology.png" alt=""></div>
                <h4>تحديد الطريقة</h4>
            </div>
            <div class="body-box b2">
                <select name="" id="methodes">
                    <option value="0">الجعفري / الشيعة الإثنا عشرية</option>
                    <option value="1">جامعة العلوم الإسلامية بكراتشي</option>
                    <option value="2">الجمعية الإسلامية لأمريكا الشمالية</option>
                    <option value="3">رابطة العالم الإسلامي</option>
                    <option value="4">جامعة أم القرى</option>
                    <option value="5">الهيئة العامة المصرية للمساحة</option>
                    <option value="7">معهد الجيوفيزياء بجامعة طهران</option>
                    <option value="8">منطقة الخليج العربي</option>
                </select>
            </div>
        </div>

        <div class="box-setting x3">
            <div class="head-box">
                <div class="Imege"><img src="Imeges/edit.png" alt=""></div>
                <h4>تعديل الاوقات</h4>
            </div>
            <div class="body-box b3">
                <div class="ta3-sla">
                    <h4>الفجر</h4>
                    <input type="number" id="fjrIN">
                </div>
                <div class="ta3-sla">
                    <h4>الشروق</h4>
                    <input type="number" id="shrIN">
                </div>
                <div class="ta3-sla">
                    <h4>الظهر</h4>
                    <input type="number" id="dhrIN">
                </div>
                <div class="ta3-sla">
                    <h4>العصر</h4>
                    <input type="number" id="asrIN">
                </div>
                <div class="ta3-sla">
                    <h4>المغرب</h4>
                    <input type="number" id="mgrIN">
                </div>
                <div class="ta3-sla">
                    <h4>العشاء</h4>
                    <input type="number" id="ashIN">
                </div>  
            </div>
        </div>
        <div class="box-setting save">حفظ</div>
    `
    document.querySelector("#methodes").value = setting.selectedMethod

    document.querySelector("#fjrIN").value = setting.fgr_dgr
    document.querySelector("#shrIN").value = setting.shr_dgr
    document.querySelector("#dhrIN").value = setting.dhr_dgr
    document.querySelector("#asrIN").value = setting.asr_dgr
    document.querySelector("#mgrIN").value = setting.mgr_dgr
    document.querySelector("#ashIN").value = setting.ash_dgr

    addConAsOption(setting.iso)
    .then(() => addCtyAsOption(setting.iso, setting.location))
    .then(() => {})
    document.querySelector(".home").addEventListener("click", function () {
        getAllInfo()
        .then(res => {
            console.log(res.timings);
            
            buldHomePage(res)
        })
    })
    evetTOGetcity()
    evetTOSaveDiv()
}
function evetTOSaveDiv(){
    let btn = document.querySelector(".save");
    btn.addEventListener("click", function(){
    if (document.querySelector("#contry").value != 0 && document.querySelector("#city").value != 0) {
        setting = {
            iso : document.querySelector("#contry").value,
            location : document.querySelector("#city").value,
            lat : document.querySelector("#city").value.split(",")[0],
            lng : document.querySelector("#city").value.split(",")[1],
            selectedMethod : document.querySelector("#methodes").value,
            selectedContryInfo : document.querySelector("#contry").value,
            Contry : document.querySelector("#contry").selectedOptions[0].innerHTML,
            city : document.querySelector("#city").selectedOptions[0].innerHTML,
            fgr_dgr : document.querySelector("#fjrIN").value,
            shr_dgr : document.querySelector("#shrIN").value,
            dhr_dgr : document.querySelector("#dhrIN").value,
            asr_dgr : document.querySelector("#asrIN").value,
            mgr_dgr : document.querySelector("#mgrIN").value,
            ash_dgr : document.querySelector("#ashIN").value,
        }
        localStorage.setItem("setting", JSON.stringify(setting))
    }
    else{
        console.log("مطلوبين");
        
        document.querySelector(".save").innerHTML = "اول حقلين مطلوبان"
        setTimeout(() => {
            btn.innerHTML = "حفظ"
            
        }, 1000);
    }

    })    

}
function evetTOGetcity(){
    let btn = document.querySelector("#contry");
    btn.addEventListener("change", (eve) => {
        setting.location = 0
        addCtyAsOption(eve.target.value, setting.location)
        
    })

}
function addConAsOption(selcted){
    document.querySelector("#contry").innerHTML = setting.iso == ""? `<option value="0">-- اختر مدينه --</option>` : ""
    return axios.get("https://api.countrystatecity.in/v1/countries", {
        headers: {
            "X-CSCAPI-KEY": "4522adefb8cabe2a2a89f83b9656557e6dcec6d4e9912e84a0e8499acae3bcd8"
        }
    })
    .then(res => res.data)
    .then(data => {
        let content = "";
        for(con of data){
            content +=`
            <option value="${con.iso2}" name="${con.name}">${con.name}</option>
           `
        //    console.log(con.name + " " +con.iso2);
        }
        
        document.querySelector("#contry").innerHTML += content
        if (selcted !== "") {
            document.querySelector("#contry").value = selcted
        }
    })
}
function addCtyAsOption(iq, selcted){
    document.querySelector("#city").innerHTML = `<option value="0">-- اختر مدينه --</option>`;
    let url = `https://secure.geonames.org/searchJSON?country=${iq}&featureClass=P&minPopulation=100000&maxRows=100&username=asasyyousefsketch`
    return axios.get(url)
    .then(res => {
        let content = "";
        for(city of res.data.geonames){
            content +=`<option value="${city.lat},${city.lng}">${city.name}</option>`
        }
        document.querySelector("#city").innerHTML += content
        if (selcted != "") {
            document.querySelector("#city").value = selcted
        }
        else
        {
                
                document.querySelector("#city").value = 0;
        }
    })
}
function loadSavedValues(){
    if (localStorage.getItem("setting") !== null) {
        setting = JSON.parse(localStorage.getItem("setting"))
        return setting
    }
}
function getAllInfo() {
    let url = `https://api.aladhan.com/v1/timings/${textTime}?latitude=${setting.lat}&longitude=${setting.lng}&method=${setting.selectedMethod}&tune=0,${setting.fgr_dgr},${setting.shr_dgr},${setting.dhr_dgr},${setting.asr_dgr},${setting.mgr_dgr},0,${setting.ash_dgr},0&timezonestring=Asia/Baghdad`
    return axios.get(url)
    .then(res => res.data.data)
}
function timeTOsimple(hour){
    let endtime = `` 
    let timeOcklok = hour.split(":")
    if (timeOcklok[0] >= 12) {
        let timeRoc = timeOcklok[0] > 12 ? +timeOcklok[0] - 12 : +timeOcklok[0]
        if (`${timeRoc}`.length == 1) {
            endtime = `0${timeRoc}:${timeOcklok[1]} PM` 
            
        }
        else{
            endtime = `${timeRoc}:${timeOcklok[1]} PM` 
            
        }

        
    }
    else{
        let timeRoc = +timeOcklok[0] == 00 ? 12 : +timeOcklok[0]
        if (`${timeRoc}`.length == 1) {
            endtime = `0${timeRoc}:${timeOcklok[1]} AM` 
            
        }
        else{
            endtime = `${timeRoc}:${timeOcklok[1]} AM` 
            
        }
        
        
    }
    console.log(endtime);
    
    return endtime
}